import React, { useState, useEffect } from "react";
import countertimerimg from "../data/images/counter-timer-img.png";
import Container from "./UI/Container";

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
    <div className="bg-primarycolor text-white">
       <Container className="flex  flex-col items-center text-center py-8 md:flex-row md:text-left md:justify-between">
           <div>
               <p className="mb-3">limited Offers</p>
                     <h3 className="text-xl">Quality Armchair</h3>
                     <div className="flex gap-6  my-5">
                <div>
                    <h2 className="text-2xl">{hours.toString().padStart(2, "0")}</h2>
                    <h5>Hours</h5>
                </div>
               
                <div>
                    <h2 className="text-2xl">{minutes.toString().padStart(2, "0")}</h2>
                    <h5>Minutes</h5>
                </div>
               
                <div>
                    <h2 className="text-2xl">{seconds.toString().padStart(2, "0")}</h2>
                    <h5>Seconds</h5>
                </div>
               
                     </div>
                     <button className="bg-white text-primarycolor p-2 rounded-md font-medium">visit store</button>
           </div>
           <div className="mt-6">
            <img src={countertimerimg} alt="couch image " />
           </div>
       </Container>
    </div>
  );
}

export default CountDown;
