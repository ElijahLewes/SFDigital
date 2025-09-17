import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../css/layout/_landinglayout.scss";

export default function Landing() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      navigate("/home"); // navigate after animation
    }, 2000); // match duration of animation
  };

  return (
    <div className="landing__preview">
      <AnimatePresence>
        {!clicked && (
          <motion.img
            key="preview"
            src="/images/remington.JPG"
            alt="Enter"
            className="landing__preview-img"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 1 }}
            exit={{ scale: 8, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            onClick={handleClick}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
