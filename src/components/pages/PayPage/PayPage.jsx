import React, { useState } from "react";
import "./PayPage.scss";
import { motion } from "framer-motion";
import { NextPlan } from "@mui/icons-material";
import NextPage from "../../mainComponents/Pagination/Pagination";

const PayPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expMonth, setExpMonth] = useState("month");
  const [expYear, setExpYear] = useState("year");
  const [cvv, setCVV] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleCardHolderChange = (e) => {
    setCardHolder(e.target.value);
  };

  const handleMonthChange = (e) => {
    setExpMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setExpYear(e.target.value);
  };

  const handleCVVChange = (e) => {
    setCVV(e.target.value);
  };

  const handleCVVMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleCVVMouseLeave = () => {
    setIsFlipped(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        transform: "scale(0.5)",
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        transform: "scale(1)",
        filter: "blur(0px)",
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      exit={{
        opacity: 0,
        transform: "scale(0.5)",
        filter: "blur(10px)",
        transition: { duration: 0.2, ease: "easeIn" },
      }}
    >
      <div className="container">
        {/* <Navbar /> */}
        <div className={`card-container ${isFlipped ? "flipped" : ""}`}>
          <div className="front">
            <div className="image">
              <img src="./img/chip.png" alt="" />
              <img src="./img/visa.png" alt="" />
            </div>
            <div className="card-number-box">{cardNumber.padEnd(16, "#")}</div>
            <div className="flexbox">
              <div className="box">
                <span>card holder</span>
                <div className="card-holder-name">
                  {cardHolder.toUpperCase()}
                </div>
              </div>
              <div className="box">
                <span>expires</span>
                <div className="expiration">
                  <span className="exp-month">{expMonth}</span>
                  <span className="exp-year">{expYear}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="back">
            <div className="stripe"></div>
            <div className="box">
              <span>cvv</span>
              <div className="cvv-box">{cvv}</div>
              <img src="image/visa.png" alt="" />
            </div>
          </div>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="inputBox">
            <span>card number</span>
            <input
              type="text"
              maxLength="16"
              className="card-number-input"
              value={cardNumber}
              onChange={handleCardNumberChange}
            />
          </div>
          <div className="inputBox">
            <span>card holder</span>
            <input
              type="text"
              className="card-holder-input"
              value={cardHolder}
              onChange={handleCardHolderChange}
            />
          </div>
          <div className="flexbox">
            <div className="inputBox">
              <span>expiration mm</span>
              <select
                className="month-input"
                value={expMonth}
                onChange={handleMonthChange}
              >
                <option value="month" disabled>
                  month
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
            <div className="inputBox">
              <span>expiration yy</span>
              <select
                className="year-input"
                value={expYear}
                onChange={handleYearChange}
              >
                <option value="year" disabled>
                  year
                </option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </select>
            </div>
            <div className="inputBox">
              <span>cvv</span>
              <input
                type="text"
                maxLength="4"
                className="cvv-input"
                value={cvv}
                onChange={handleCVVChange}
                onMouseEnter={handleCVVMouseEnter}
                onMouseLeave={handleCVVMouseLeave}
              />
            </div>
          </div>
          <input type="submit" value="submit" className="submit-btn" />
        </form>
      </div>
    </motion.div>
  );
};

export default PayPage;
