import React from "react";
import "./AboutUs.scss";
import Navbar from "../../mainComponents/navbar/Navbar";
import { motion } from "framer-motion";

const AboutUs = () => {
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
      <div className="about-us">
        {/* <Navbar /> */}
        <div
          className="background
        "
        ></div>
        <h1 className="title">About Us</h1>
        <div className="textContainer">
          <div className="firts">
            <p className="description">
              Monsectetur adipiscing elit. Sed hendrerit dolor at erat cursus,
              id consectetur justo aliquet. Maecenas auctor ligula ut consequat
              tincidunt. Nulla facilisi. Aliquam blandit nibh vel est luctus,
              sit amet finibus mauris interdum. Mauris tristique tellus at eros
              commodo, nec finibus mi iaculis. Proin consectetur tincidunt
              dolor, et congue ex fermentum ut. Nullam dapibus tristique
              sagittis. Monsectetur adipiscing elit. Sed hendrerit dolor at erat
              cursus, id consectetur justo aliquet. Maecenas auctor ligula ut
              consequat tincidunt. Nulla facilisi. Aliquam blandit nibh vel est
              luctus, sit amet finibus mauris interdum. Mauris tristique tellus
              at eros commodo, nec finibus mi iaculis. Proin consectetur
              tincidunt dolor, et congue ex fermentum ut. Nullam dapibus
              tristique sagittis. Monsectetur adipiscing elit. Sed hendrerit
              dolor at erat cursus, id consectetur justo aliquet. Maecenas
              auctor ligula ut consequat tincidunt. Nulla facilisi. Aliquam
              blandit nibh vel est luctus, sit amet finibus mauris interdum.
              Mauris tristique tellus at eros commodo, nec finibus mi iaculis.
              Proin consectetur tincidunt dolor, et congue ex fermentum ut.
              Nullam dapibus tristique sagittis.
            </p>
          </div>
          <div className="second">
            <p className="description">
              Fusce quis neque vitae urna fringilla fringilla id eget mi.
              Suspendisse volutpat, orci eu tempus euismod, mauris dolor feugiat
              massa, eu scelerisque libero quam ut mauris. Integer nec purus eu
              dui vestibulum fermentum. Quisque bibendum malesuada urna ut
              mattis. In vestibulum semper neque, id lacinia nisi pulvinar a.
              Suspendisse efficitur, justo at aliquet ullamcorper, ipsum purus
              fringilla lacus, at dapibus justo tortor eu nunc. Sed sit amet
              vulputate felis. Ut sed libero commodo, gravida arcu in, tincidunt
              sem. Morbi nec elit in lorem commodo finibus vel sit amet purus.
              gittis. Monsectetur adipiscing elit. Sed hendrerit dolor at erat
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
