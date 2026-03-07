import React, { useState, useEffect } from "react";
import { Calendar, User, Phone, PartyPopper } from "lucide-react";

import { db } from "../firebaseConfig";
import {
  collection,
  doc,
  getDocs,
  query,
  where,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import "../styles/quick-booking-section.module.css";

export default function QuickBookForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    functionType: "",
    date: "",
  });

  const [functionTypes, setFunctionTypes] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [message, setMessage] = useState("");
  const [duplicateMessage, setDuplicateMessage] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const [isCheckingDuplicate, setIsCheckingDuplicate] = useState(false); // ⭐ NEW

  // ------------------------------------------------------------
  // LOAD FUNCTION TYPES
  // ------------------------------------------------------------
  useEffect(() => {
    const fetchAccessData = async () => {
      try {
        const q = query(
          collection(db, "usersAccess"),
          where("accessToApp", "==", "A")
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data();
          setFunctionTypes(docData.functionTypes || []);
        }
      } catch (error) {
        console.error("❌ Error fetching function types:", error);
      }
    };

    fetchAccessData();
  }, []);

  // ------------------------------------------------------------
  // 🔍 DUPLICATE CHECKER + BUTTON LOADING CONTROL
  // ------------------------------------------------------------
  const checkDuplicate = async (mobile, functionType, date) => {
    setIsCheckingDuplicate(true); // ⭐ Start checking

    if (!mobile || mobile.length !== 10 || !functionType || !date) {
      setIsDuplicate(false);
      setDuplicateMessage("");
      setIsCheckingDuplicate(false);
      return;
    }

    const collectionsToCheck = [
      "enquiry",
      "pastEnquiry",
    ];

    let duplicateFound = false;

    for (let col of collectionsToCheck) {
      const snap = await getDocs(collection(db, col));

      for (let docSnap of snap.docs) {
        const fields = docSnap.data();

        for (let item of Object.values(fields)) {
          const mob = item.mobile1 || item.mobile || item.mobile2;

          if (
            mob === mobile &&
            item.functionType === functionType &&
            item.functionDate === date
          ) {
            duplicateFound = true;
            break;
          }
        }
        if (duplicateFound) break;
      }
      if (duplicateFound) break;
    }

    if (duplicateFound) {
      setIsDuplicate(true);
      setDuplicateMessage("⚠️ Already registered! Our team will follow up soon.");
    } else {
      setIsDuplicate(false);
      setDuplicateMessage("");
    }

    setIsCheckingDuplicate(false); // ⭐ Done checking
  };

  // ------------------------------------------------------------
  // SUBMIT HANDLER
  // ------------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    if (isDuplicate) {
      setMessage("⚠️ Already registered!");
      setIsSubmitting(false);
      return;
    }

    try {
      const functionDate = formData.date;
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
        functionType: formData.functionType,
        functionDate,
        dayNight: "Night",
        enquiryDate,
        originalMonthYear: monthYear,
        createdAt: new Date().toLocaleString("en-IN"),
        updatedAt: serverTimestamp(),
        source: "Website",
      };

      const monthDocRef = doc(db, "enquiry", monthYear);
      await setDoc(monthDocRef, { [fieldId]: data }, { merge: true });

      setMessage("✅ Thank you! Your enquiry has been submitted successfully.");

      setFormData({
        name: "",
        mobile: "",
        functionType: "",
        date: "",
      });

    } catch (error) {
      console.error("❌ Firestore error:", error);
      setMessage("❌ Failed to submit enquiry");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ------------------------------------------------------------
  // DYNAMIC BUTTON STYLE
  // ------------------------------------------------------------
  const buttonStyle = {
    background: isCheckingDuplicate || isDuplicate ? "#d6d6d6" : "#ffc400",
    cursor:
      isCheckingDuplicate
        ? "wait"
        : isDuplicate
          ? "not-allowed"
          : "pointer",
  };

  return (
    <div className="quick-book">
      <h3>Book Now</h3>

      <form onSubmit={handleSubmit}>

        {/* DATE */}
        <div className="form-group">
          <label>EXPECTED DATE</label>
          <Calendar className="icon" />
          <input
            type="date"
            value={formData.date}
            onChange={(e) => {
              const updated = { ...formData, date: e.target.value };
              setFormData(updated);
              checkDuplicate(updated.mobile, updated.functionType, updated.date);
            }}
            required
          />
        </div>

        {/* FUNCTION TYPE */}
        <div className="form-group">
          <label>SELECT EVENT TYPE</label>
          <PartyPopper className="icon" />
          <select
            value={formData.functionType}
            onChange={(e) => {
              const updated = { ...formData, functionType: e.target.value };
              setFormData(updated);
              checkDuplicate(updated.mobile, updated.functionType, updated.date);
            }}
            required
          >
            <option value="">Select Event Type</option>
            {functionTypes.map((f, i) => (
              <option key={i} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>

        {/* NAME */}
        <div className="form-group">
          <label>Name</label>
          <User className="icon" />
          <input
            type="text"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
        </div>

        {/* MOBILE */}
        <div className="form-group">
          <label>CONTACT NUMBER</label>
          <Phone className="icon" />
          <input
            type="text"
            placeholder="Enter 10-digit Number"
            value={formData.mobile}
            maxLength={10}
            inputMode="numeric"
            onChange={(e) => {
              const onlyNums = e.target.value.replace(/[^0-9]/g, "");
              const updated = { ...formData, mobile: onlyNums };
              setFormData(updated);
              checkDuplicate(updated.mobile, updated.functionType, updated.date);
            }}
            required
          />
          {formData.mobile.length > 0 && formData.mobile.length < 10 && (
            <span className="form-error">Enter valid 10-digit number</span>
          )}
        </div>

        {/* DUPLICATE MESSAGE */}
        {duplicateMessage && (
          <p className="form-error" style={{ marginTop: "-5px" }}>
            {duplicateMessage}
          </p>
        )}

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={isSubmitting || isDuplicate || isCheckingDuplicate}
          style={{ ...buttonStyle, borderRadius: "10px" }}
        >
          {isCheckingDuplicate
            ? "Checking..."
            : isSubmitting
              ? "Submitting..."
              : "Proceed"}
        </button>

        {message && (
          <p
            className={`form-message ${message.includes("Thank") ? "success" : "error"
              }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
