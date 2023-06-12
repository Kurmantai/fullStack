import React from "react";
import Parallax from "../../mainComponents/parallax/Parallax";
import "./GreetingPage.scss";
import { motion } from "framer-motion";

const GreetingPage = () => {
  return (
    <motion.div
      className="greetingContainer"
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
      <Parallax />
    </motion.div>
  );
};

export default GreetingPage;
