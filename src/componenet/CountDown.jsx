import React, { useState, useEffect } from "react";

function CountDown() {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const resetTimer = () => {
      // Set the expiry date and time for the offer
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 1); // 24 hours from now

      // Store the expiry date in localStorage
      localStorage.setItem("expiryDate", expiryDate.getTime().toString());
    };

    const updateCountdown = () => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 0) {
          // Reset the timer after 24 hours
          resetTimer();
          return 24 * 60 * 60 * 1000; // 24 hours in milliseconds
        }
        return prevCountdown - 1000;
      });
    };

    // Check if the expiry date is stored in localStorage
    const storedExpiryDate = localStorage.getItem("expiryDate");

    if (storedExpiryDate) {
      const expiryDate = parseInt(storedExpiryDate, 10);
      const initialCountdown = expiryDate - Date.now();

      // If expiry date is in the future, use the stored value
      if (initialCountdown > 0) {
        setCountdown(initialCountdown);
      } else {
        resetTimer();
        setCountdown(24 * 60 * 60 * 1000); // 24 hours in milliseconds
      }
    } else {
      resetTimer();
      setCountdown(24 * 60 * 60 * 1000); // 24 hours in milliseconds
    }

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor((countdown / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((countdown / (1000 * 60)) % 60);
  const seconds = Math.floor((countdown / 1000) % 60);

  return (
    <div>
      <h2>Offer Countdown:</h2>
      <p>
        {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
}

export default CountDown;
