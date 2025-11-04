import React, { useEffect, useState } from "react";
import "../Styles/Welcome.css";

const Welcome = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                setVisible(false);
            } else {
                setVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="container-fluid">
            <div className="container">
                <section className={`welcome-section ${visible ? "fade-in" : "fade-out"}`}>
                    <p className="welcome-subtitle">Welcome to Physiovera</p>
                    <h1 className="welcome-title">
                        Welcome to Physiovera Home Care Services
                    </h1>
                    <p className="welcome-description">
                        Professional physiotherapy and rehabilitation delivered to your doorstep.

Physiovera Home Care Services is a dedicated home-based physiotherapy platform committed to making expert care accessible, comfortable, and personalized. We understand that healing happens best in familiar surroundings  that’s why we bring qualified physiotherapists, modern techniques, and compassionate care right to your home.

                    </p>
                    <p className="welcome-description">
                        Our team specializes in a wide range of physiotherapy treatments including orthopedic, neurological, post-surgical, geriatric, and lifestyle-related rehabilitation. Each session is customized to your condition and goals  ensuring safe, effective, and progressive recovery.

At Physiovera Home Care, our mission is simple  to help you move better, live pain-free, and regain your independence without stepping out. Because you deserve professional care that comes to you.
                    </p>
                </section>

            </div>
        </div>

    );
};

export default Welcome;
