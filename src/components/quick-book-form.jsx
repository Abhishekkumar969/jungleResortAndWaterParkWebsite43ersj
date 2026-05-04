import React, { useState, useEffect, useRef, useId } from "react";
import { Calendar, User, Phone, PartyPopper } from "lucide-react";
import { db } from "../firebaseConfig";
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import styles from "../styles/quick-book-section.module.css";

const QuickBookForm = React.memo(({ defaultFunctionType = "", onClose }) => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [bookingType, setBookingType] = useState("single");
  const [showCalendar, setShowCalendar] = useState(false);
  const [selecting, setSelecting] = useState("start");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const currentId = useId().replace(/:/g, "");
  const calendarRef = useRef();

  const [range, setRange] = useState({
    start: null,
    end: null
  });

  const [functionTypes] = useState([
    "Destination Wedding","Wedding","Haldi","Mehndi","Sangeet","Reception",
    "Engagement","Baby Shower","Anniversary","Ring Ceremony","Pool Party",
    "Kitty Party","Theme Party","Birthday Party","Get Together",
    "Corporate Event","Corporate Party","Corporate Pool Party",
  ]);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    functionTypes: [""],
    date: "",
    fromDate: "",
    toDate: ""
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };
    if (showCalendar) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showCalendar]);

  useEffect(() => {
    if (range.start) {
      const startStr = range.start.toISOString().split("T")[0];
      const endStr = range.end ? range.end.toISOString().split("T")[0] : startStr;

      setFormData((prev) => ({
        ...prev,
        date: startStr,
        fromDate: startStr,
        toDate: endStr
      }));
    }
  }, [range]);

  useEffect(() => {
    if (!defaultFunctionType) return;

    setFormData((prev) => {
      if (bookingType === "multi") {
        return {
          ...prev,
          functionTypes:
            prev.functionTypes.length >= 2
              ? prev.functionTypes
              : [prev.functionTypes[0] || defaultFunctionType, ""]
        };
      }
      return {
        ...prev,
        functionTypes: [prev.functionTypes[0] || defaultFunctionType]
      };
    });
  }, [bookingType, defaultFunctionType]);

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const generateMonth = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];

    for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
      days.push(null);
    }
    for (let d = 1; d <= daysInMonth; d++) {
      days.push(new Date(year, month, d));
    }
    return days;
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const enquiryDateObj = new Date();
      const enquiryDate = enquiryDateObj.toISOString().split("T")[0];

      const monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      const monthYear = `${monthNames[enquiryDateObj.getMonth()]}${enquiryDateObj.getFullYear()}`;

      const fieldId = doc(collection(db, "enquiry")).id;

      const data = {
        fieldId,
        name: formData.name.trim() || "Guest Name",
        mobile1: formData.mobile.trim(),
        functionTypes: formData.functionTypes.filter(f => f !== ""),
        bookingType,

        functionDate: bookingType === "single" ? formData.date : null,
        fromDate: bookingType === "multi" ? formData.fromDate : null,
        toDate: bookingType === "multi" ? formData.toDate : null,

        displayDate:
          bookingType === "single"
            ? formData.date
            : `${formData.fromDate} → ${formData.toDate}`,

        enquiryDate,
        originalMonthYear: monthYear,
        createdAt: new Date().toLocaleString("en-IN"),
        updatedAt: serverTimestamp(),
        source: "Website",
      };

      const monthDocRef = doc(db, "enquiry", monthYear);
      await setDoc(monthDocRef, { [fieldId]: data }, { merge: true });

      setMessage("✅ Our Representative Will Call You Shortly.");

      setTimeout(() => {
        onClose && onClose();
      }, 1200);

      setFormData({
        name: "",
        mobile: "",
        functionTypes: [""],
        date: "",
        fromDate: "",
        toDate: ""
      });

    } catch {
      setMessage("❌ Failed to submit enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const buttonStyle = {
    background: isSubmitting ? "#d6d6d6" : "#ffc400",
    cursor: isSubmitting ? "wait" : "pointer",
  };

  return (
    <div className={styles.quickBook} data-booking-form="true">
      <form onSubmit={handleSubmit}>

        {/* BOOKING TYPE */}
        <div className={styles.bookingToggle}>
          <button type="button" onClick={() => setBookingType("single")}
            className={`${styles.toggleBtn} ${bookingType === "single" ? styles.active : ""}`}>
            SINGLE DAY
          </button>

          <button type="button" onClick={() => setBookingType("multi")}
            className={`${styles.toggleBtn} ${bookingType === "multi" ? styles.active : ""}`}>
            MULTI DAY
          </button>
        </div>

        {/* EVENT TYPE */}
        {bookingType === "single" ? (
          <div className={styles.formGroup}>
            <label>SELECT EVENT TYPE</label>
            <PartyPopper className={styles.icon} />
            <select
              value={formData.functionTypes[0] || ""}
              onChange={(e) =>
                setFormData({ ...formData, functionTypes: [e.target.value] })
              }
              required
            >
              <option value=""></option>
              {functionTypes.map((f, i) => (
                <option key={i} value={f}>{f}</option>
              ))}
            </select>
          </div>
        ) : (
          formData.functionTypes.map((type, index) => (
            <div key={index} className={styles.formGroup}>
              <label>SELECT EVENT TYPE {index + 1}</label>
              <PartyPopper className={styles.icon} />
              <select
                value={type}
                onChange={(e) => {
                  const updated = [...formData.functionTypes];
                  updated[index] = e.target.value;
                  if (index === updated.length - 1 && e.target.value) {
                    updated.push("");
                  }
                  setFormData({ ...formData, functionTypes: updated });
                }}
                required={index === 0}
              >
                <option value=""></option>
                {functionTypes.map((f, i) => (
                  <option key={i} value={f}>{f}</option>
                ))}
              </select>
            </div>
          ))
        )}

        {/* DATE */}
        <div className={styles.formGroup}>
          <label>{bookingType === "single" ? "EXPECTED DATE" : "EXPECTED DATE RANGE"}</label>
          <Calendar className={styles.icon} />
          <input
            type="text"
            readOnly
            value={
              bookingType === "single"
                ? (range.start ? range.start.toLocaleDateString() : "")
                : (range.start && range.end
                  ? `${range.start.toLocaleDateString()} → ${range.end.toLocaleDateString()}`
                  : "")
            }
            onClick={() => setShowCalendar(true)}
            required
          />
        </div>

        {/* NAME */}
        <div className={styles.formGroup}>
          <label>NAME</label>
          <User className={styles.icon} />
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
        </div>

        {/* MOBILE */}
        <div className={styles.formGroup}>
          <label>MOBILE NUMBER</label>
          <Phone className={styles.icon} />
          <input
            type="text"
            value={formData.mobile}
            maxLength={10}
            inputMode="numeric"
            onChange={(e) => {
              const onlyNums = e.target.value.replace(/[^0-9]/g, "");
              setFormData({ ...formData, mobile: onlyNums });
            }}
            required
          />
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.submitBtn}
          style={{ ...buttonStyle, backgroundColor: "#025ab5" }}
        >
          {isSubmitting ? "Submitting..." : "CHECK AVAILABILITY"}
        </button>

        {message && (
          <p className={styles.formMessage}>
            {message}
          </p>
        )}

      </form>
    </div>
  );
});

export default QuickBookForm;