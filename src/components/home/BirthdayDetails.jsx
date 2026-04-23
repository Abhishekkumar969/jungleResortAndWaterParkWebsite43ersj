import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navigation-temp";
import Footer from "../../components/footer-temp";
import BirthdayPackages from "../../components/birthdays/birthday-packages";
import BirthdayAddons from "../../components/birthdays/birthday-addons";
import BirthdayBooking from "../../components/birthdays/birthday-booking";

export default function BirthdayDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedPackage, setSelectedPackage] = React.useState(null);
    const [selectedAddons, setSelectedAddons] = React.useState([]);
    const selectedTheme = location.state?.theme;

    return (
        <main style={{ marginTop: "80px" }}>
            <Navbar />

            {/* 🔥 HERO BANNER */}
            <div
                style={{
                    position: "relative",
                    height: "400px",
                    width: "100%",
                    overflow: "hidden",
                }}
            >
                {/* Background Image */}
                {selectedTheme && (
                    <img
                        src={selectedTheme.image}
                        alt={selectedTheme.name}
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            top: 0,
                            left: 0,
                            filter: "brightness(0.6)",
                        }}
                    />
                )}

                {/* Overlay Content */}
                <div
                    style={{
                        position: "relative",
                        zIndex: 2,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                        textAlign: "center",
                        padding: "20px",
                    }}
                >
                    <h1 style={{ fontSize: "42px", fontWeight: "700" }}>
                        Plan Your Child's Dream Birthday 🎉
                    </h1>

                    {selectedTheme && (
                        <>
                            <h3 style={{ marginTop: "10px", color: "#ffd166" }}>
                                Theme: {selectedTheme.name}
                            </h3>

                            <button
                                onClick={() => navigate(-1)}
                                style={{
                                    marginTop: "20px",
                                    padding: "10px 20px",
                                    border: "none",
                                    borderRadius: "6px",
                                    background: "#ff4d6d",
                                    color: "#fff",
                                    cursor: "pointer",
                                }}
                            >
                                ← Change Theme
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* 🔥 MAIN CONTENT */}
            <BirthdayPackages
                selectedPackage={selectedPackage}
                setSelectedPackage={setSelectedPackage}
            />

            <BirthdayAddons
                selectedAddons={selectedAddons}
                setSelectedAddons={setSelectedAddons}
            />

            <BirthdayBooking
                selectedTheme={selectedTheme}
                selectedPackage={selectedPackage}
                selectedAddons={selectedAddons}
            />

            <Footer />
        </main>
    );
}