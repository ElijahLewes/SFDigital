// Landing page to render prior to homepage transition
// src/pages/Landing.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center"
      initial={{ backgroundColor: "#ffffff" }}   // start white
      animate={{ backgroundColor: "#000000" }}   // fade to black
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.img
        src="/images/carousel1.JPG"
        alt="Enter"
        layoutId="landing-image"                 // must match Home.jsx
        className="w-72 h-72 object-cover rounded-3xl cursor-pointer shadow-2xl"
        onClick={() => navigate("/home")}
        whileHover={{ scale: 1.03 }}
        transition={{
          layout: { duration: 0.9, ease: "easeInOut" }, // expansion timing
          scale: { type: "spring", stiffness: 120, damping: 18 },
        }}
      />
    </motion.div>
  );
}
