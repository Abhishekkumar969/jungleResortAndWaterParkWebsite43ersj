import React, { useState, useEffect, useRef, useId } from "react";
import { Calendar, User, Phone, PartyPopper } from "lucide-react";
import { db } from "../firebaseConfig";
import { collection, doc, setDoc, serverTimestamp, } from "firebase/firestore";
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
  const [range, setRange] = useState({ start: null, end: null });

  const [functionTypes] = useState([
    "Destination Wedding",
    "Wedding",
    "Haldi",
    "Mehndi",
    "Sangeet",
    "Reception",
    "Engagement",
    "Baby Shower",
    "Anniversary",
    "Ring Ceremony",
    // "FunPark",
    "Pool Party",
    "Kitty Party",
    "Theme Party",
    "Birthday Party",
    "Get Together",
    "Corporate Event",
    "Corporate Party",
    "Corporate Pool Party",
  ]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target)
      ) {
        setShowCalendar(false);
      }
    };

    if (showCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
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

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    functionTypes: [""], // ✅ multiple event types
    date: "",
    fromDate: "",
    toDate: ""
  });

  useEffect(() => {
    if (!defaultFunctionType) return;

    setFormData((prev) => {

      // ✅ MULTI DAY → ensure 2 dropdown always
      if (bookingType === "multi") {
        return {
          ...prev,
          functionTypes:
            prev.functionTypes.length >= 2
              ? prev.functionTypes
              : [prev.functionTypes[0] || defaultFunctionType, ""]
        };
      }

      // ✅ SINGLE DAY → only 1 dropdown
      return {
        ...prev,
        functionTypes: [prev.functionTypes[0] || defaultFunctionType]
      };

    });

  }, [bookingType, defaultFunctionType]);



  // SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const mobileValue = formData.mobile.trim();
    if (!/^\d{10}$/.test(mobileValue)) {
      setMessage("❌ Phone number must be exactly 10 digits.");
      setIsSubmitting(false);
      return;
    }

    if (bookingType === "single" && !formData.date) {
      setMessage("❌ Please select a Function Date.");
      setIsSubmitting(false);
      return;
    }

    if (bookingType === "multi" && (!formData.fromDate || !formData.toDate)) {
      setMessage("❌ Please select both From and To Dates.");
      setIsSubmitting(false);
      return;
    }
    try {
      const enquiryDateObj = new Date();
      const enquiryDate = enquiryDateObj.toISOString().split("T")[0];

      const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
      const monthYear = `${monthNames[enquiryDateObj.getMonth()]}${enquiryDateObj.getFullYear()}`;

      const fieldId = doc(collection(db, "enquiry")).id;

      const data = {
        fieldId,
        name: formData.name.trim() || "Guest Name",
        mobile1: formData.mobile.trim(),

        // ✅ event types
        functionTypes: formData.functionTypes.filter(f => f !== ""),

        // ✅ single vs multi clean separation
        bookingType,

        functionDate:
          bookingType === "single"
            ? formData.date
            : null,

        fromDate:
          bookingType === "multi"
            ? formData.fromDate
            : null,

        toDate:
          bookingType === "multi"
            ? formData.toDate
            : null,

        // ✅ readable format (optional)
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

      setMessage("✅ Thank You, Call Jungle Resort & WaterPark Now");

      // Removed auto-close so the user has time to click the calling buttons


      setFormData({
        name: "",
        mobile: "",
        functionTypes: [""],
        date: "",
        fromDate: "",
        toDate: ""
      });

    } catch (err) {
      console.error("Submission error:", err);
      setMessage("❌ Failed to submit enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // DYNAMIC BUTTON STYLE
  const buttonStyle = {
    background: "#ffc400",
    cursor: "pointer",
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

  return (
    <div className={styles.quickBook} data-booking-form="true">
      {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h3>Check  Availability</h3>
      </div> */}

      <form onSubmit={handleSubmit}>

        {/* single mlti selector */}
        <div className={styles.bookingToggle}>
          <button
            type="button"
            onClick={() => setBookingType("single")}
            className={`${styles.toggleBtn} ${bookingType === "single" ? styles.active : ""
              }`}
            style={{ marginTop: "5px", whiteSpace: "nowrap" }}
          >
            SINGLE DAY
          </button>

          <button
            type="button"
            onClick={() => setBookingType("multi")}
            className={`${styles.toggleBtn} ${bookingType === "multi" ? styles.active : ""
              }`}
            style={{ marginTop: "5px", whiteSpace: "nowrap" }}
          >
            MULTI DAY
          </button>

          {showCalendar && (
            <div className={styles.calendarWrapper} ref={calendarRef}>
              {/* HEADER */}
              <div className={styles.calendarHeader}>
                <button type="button" onClick={prevMonth} className={styles.navMonth} aria-label="Previous month">‹</button>
                <span>
                  {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
                </span>
                <button type="button" onClick={nextMonth} className={styles.navMonth} aria-label="Next month">›</button>
              </div>

              {/* MONTH */}
              <div className={styles.monthContainer}>
                {[0].map((offset) => {
                  const monthDate = new Date(
                    currentMonth.getFullYear(),
                    currentMonth.getMonth() + offset
                  );

                  const days = generateMonth(
                    monthDate.getFullYear(),
                    monthDate.getMonth()
                  );

                  return (
                    <div key={offset}>
                      <div className={styles.grid}>
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(d => (
                          <div key={d} className={styles.dayName}>{d}</div>
                        ))}

                        {days.map((date, i) => {
                          if (!date) return <div key={i}></div>;

                          const isStart = range.start?.toDateString() === date.toDateString();
                          const isEnd = range.end?.toDateString() === date.toDateString();

                          const inRange =
                            range.start &&
                            range.end &&
                            date > range.start &&
                            date < range.end;

                          const isPast = date < today;

                          return (
                            <div
                              key={i}
                              className={`${styles.day}
                ${isStart ? styles.start : ""}
                ${isEnd ? styles.end : ""}
                ${inRange ? styles.inRange : ""}
                  ${isPast ? styles.disabled : ""}  
              `}
                              onClick={() => {
                                if (bookingType === "single") {
                                  setRange({ start: date, end: date });
                                  setShowCalendar(false);
                                  return;
                                }

                                if (selecting === "start") {
                                  setRange({ start: date, end: null });
                                  setSelecting("end");
                                } else {
                                  if (date < range.start) {
                                    setRange({ start: date, end: range.start });
                                  } else {
                                    setRange({ ...range, end: date });
                                  }
                                  setSelecting("start");
                                  setShowCalendar(false);
                                }
                              }}
                            >
                              {date.getDate()}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* FUNCTION TYPE */}
        {bookingType === "single" ? (

          // ✅ SINGLE DAY (max 2)
          <>
            {[0].map((index) => (
              <div key={index} className={styles.formGroup}>
                <label htmlFor={`${currentId}-event-type-${index}`}>SELECT EVENT TYPE</label>
                <PartyPopper className={styles.icon} />

                <select
                  id={`${currentId}-event-type-${index}`}
                  value={formData.functionTypes[index] || ""}
                  onChange={(e) => {
                    const updated = [...formData.functionTypes];
                    updated[index] = e.target.value;

                    setFormData({
                      ...formData,
                      functionTypes: updated.slice(0) // 🔥 limit 2
                    });
                  }}
                  required={index === 0}
                >
                  <option value=""></option>
                  {functionTypes.map((f, i) => (
                    <option key={i} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </>

        ) : (
          // ✅ MULTI DAY (unlimited - existing logic)
          formData.functionTypes.map((type, index) => (
            <div key={index} className={styles.formGroup}>
              <label htmlFor={`${currentId}-multi-event-type-${index}`}>SELECT EVENT TYPE {index + 1}</label>
              <PartyPopper className={styles.icon} />

              <select
                id={`${currentId}-multi-event-type-${index}`}
                value={type}
                onChange={(e) => {
                  const updated = [...formData.functionTypes];
                  updated[index] = e.target.value;

                  if (
                    index === formData.functionTypes.length - 1 &&
                    e.target.value !== ""
                  ) {
                    updated.push("");
                  }

                  setFormData({ ...formData, functionTypes: updated });
                }}
                required={index === 0}
              >
                <option value=""></option>
                {functionTypes.map((f, i) => (
                  <option key={i} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>
          ))

        )}

        <div className={styles.formGroup}>
          <label htmlFor={`${currentId}-booking-date`}>
            {bookingType === "single" ? "EXPECTED DATE" : "EXPECTED DATE RANGE"}
          </label>
          <Calendar className={styles.icon} />
          <input
            id={`${currentId}-booking-date`}
            type="text"
            readOnly
            placeholder=""
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
          <label htmlFor={`${currentId}-booking-name`}> NAME </label>

          <User className={styles.icon} />
          <input
            id={`${currentId}-booking-name`}
            type="text"
            placeholder=""
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
        </div>

        {/* MOBILE */}
        <div className={styles.formGroup}>
          <label htmlFor={`${currentId}-booking-mobile`}> MOBILE NUMBER </label>

          <Phone className={styles.icon} />
          <input
            id={`${currentId}-booking-mobile`}
            type="text"
            placeholder=""
            value={formData.mobile}
            maxLength={10}
            inputMode="numeric"
            onChange={(e) => {
              const onlyNums = e.target.value.replace(/[^0-9]/g, "");
              const updated = { ...formData, mobile: onlyNums };
              setFormData(updated);
            }}
            required
          />
        </div>




        {/* SUBMIT */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.submitBtn}
          style={{ ...buttonStyle, backgroundColor: "#025ab5", textShadow: "1px 1px 1px #000000af", fontSize: "20px" }}
        >
          {isSubmitting
            ? "Submitting..."
            : "CHECK  AVAILABILITY"}
        </button>

        {message && !message.includes("Thank") && (
          <p className={`${styles.formMessage} ${styles.error}`}>
            {message}
          </p>
        )}

      </form>

      {/* SUCCESS POPUP MODAL */}
      {message && message.includes("Thank") && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 99999
        }}>
          <div style={{
            background: "#fff",
            padding: "30px 20px",
            borderRadius: "15px",
            textAlign: "center",
            maxWidth: "90%",
            width: "450px",
            position: "relative",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
          }}>
            {/* Close Button */}
            <button
              onClick={() => {
                setMessage("");
                onClose && onClose();
              }}
              style={{
                position: "absolute",
                top: "12px",
                right: "15px",
                background: "transparent",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "#ff0000ff",
                lineHeight: "1"
              }}
              aria-label="Close"
            >
              &times;
            </button>

            <p style={{ fontSize: "20px", color: "#546576", marginBottom: "25px", lineHeight: "1.6", fontFamily: "serif" }}>
              <span style={{ display: "inline-block", background: "#4ade80", color: "white", padding: "2px 5px", borderRadius: "4px", fontSize: "16px", verticalAlign: "middle", marginRight: "8px", marginBottom: "4px" }}>✓</span>
              Thank You, <br /> Call Jungle Resort & WaterPark
            </p>

            <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+919031080902" style={{
                background: "#e83e8c",
                color: "white",
                textDecoration: "none",
                padding: "12px 10px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: "600",
                flex: 1,
                minWidth: "160px",
                boxShadow: "0 4px 0 #b82b6b",
                transition: "transform 0.1s",
                whiteSpace: "nowrap"
              }}
                onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(4px)'}
                onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                +919031080902
              </a>
              <a href="tel:+919065383838" style={{
                background: "#e83e8c",
                color: "white",
                textDecoration: "none",
                padding: "12px 10px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: "600",
                flex: 1,
                minWidth: "160px",
                boxShadow: "0 4px 0 #b82b6b",
                transition: "transform 0.1s",
                whiteSpace: "nowrap"
              }}
                onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(4px)'}
                onMouseUp={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                +919065383838
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
});

export default QuickBookForm;