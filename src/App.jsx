
import "./css/App.scss";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import Landing from './pages/Landing.jsx';
import OnPageLoad from './components/OnPageLoad.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Link212 from './pages/Link212.jsx';
import Team from './pages/Team.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Remington from './pages/NeighborhoodPages/Remington.jsx';
import Footer from './components/Footer.jsx';
import { useSyncExternalStore } from "react";


function App() {
  const location = useLocation();

  const isLanding = location.pathname === "/";



  return (
    <>
    {/* Show Navbar only if not landing */}
      {!isLanding && <Navbar />}

      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/link212" element={<Link212 />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/neighborhoods/remington" element={<Remington />} />
        </Routes>
      </AnimatePresence>

      {/* Footer only on non-landing pages */}
      {!isLanding && <Footer />}

      <OnPageLoad />
    </>
  );
}

export default App;
