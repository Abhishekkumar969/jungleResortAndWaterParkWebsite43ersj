import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { db, auth } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

export default function Checkout() {

    const location = useLocation();

    const { selectedTickets, totalAmount } = location.state || {};

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        visitDate: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const bookTicket = async () => {

        try {

            await addDoc(collection(db, "waterparkTickets"), {

                userId: auth.currentUser?.uid || null,

                name: formData.name,
                phone: formData.phone,
                email: formData.email,

                visitDate: formData.visitDate,

                tickets: selectedTickets,

                total: totalAmount,

                createdAt: new Date()

            });

            alert("Ticket Booked Successfully");

        } catch (err) {

            alert(err.message);

        }

    };

    return (

        <div style={{ maxWidth: "600px", margin: "40px auto" }}>

            <h2>Checkout</h2>

            <h3>Selected Tickets</h3>

            {selectedTickets &&
                Object.entries(selectedTickets).map(([id, qty]) => (
                    <p key={id}>
                        {id} × {qty}
                    </p>
                ))
            }

            <h3>Total: ₹{totalAmount}</h3>

            <hr />

            <input
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
            />

            <input
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
            />

            <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />

            <input
                type="date"
                name="visitDate"
                onChange={handleChange}
            />

            <br /><br />

            <button onClick={bookTicket}>
                Confirm Booking
            </button>

        </div>
    );
}