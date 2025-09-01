// Landing page to render prior to homepage transition
// src/pages/Landing.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen grid place-items-center bg-black">
      <motion.img
        src="public/images/carousel1.JPG"
        alt="Enter"
        layoutId="hero-image"                   // 👈 shared element id
        className="w-72 h-72 object-cover rounded-3xl cursor-pointer shadow-2xl"
        onClick={() => navigate("/home")}       // navigate triggers the morph
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      />
    </div>
  );
}
