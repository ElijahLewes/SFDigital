import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

function Link212() {
  const [dotTop, setDotTop] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const menuRef = useRef(null);
  const DOT_SIZE = 16;

  const menuItems = [
    {
      label: "Remington",
      img: "/images/l212/remington.JPG",
      position: { bottom: "10px", left: "-70px" },
      width: "300px",
    },
    {
      label: "Jones Falls",
      img: "/images/l212/jonesfalls.JPG",
      position: { bottom: "5px", left: "-60px" },
      width: "400px",
    },
    {
      label: "Abell",
      img: "/images/l212/abell.JPG",
      position: { bottom: "10px", left: "-80px" },
      width: "400px",
    },
  ];

  const handleMouseMove = (e) => {
    if (!menuRef.current) return;
    const rect = menuRef.current.getBoundingClientRect();
    const cursorY = e.clientY - rect.top - DOT_SIZE / 2;

    // Find nearest menu item
    const items = Array.from(menuRef.current.querySelectorAll("li"));
    let nearestIndex = null;
    let minDistance = Infinity;

    items.forEach((item, index) => {
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.top + itemRect.height / 2 - rect.top - DOT_SIZE / 2;
      const distance = Math.abs(cursorY - itemCenter);
      if (distance < minDistance) {
        minDistance = distance;
        nearestIndex = index;
      }
    });

    // Magnetic effect threshold
    const THRESHOLD = 40; // px
    const targetY =
      minDistance < THRESHOLD
        ? (cursorY + (items[nearestIndex].getBoundingClientRect().top + items[nearestIndex].getBoundingClientRect().height / 2 - rect.top - DOT_SIZE / 2)) / 2
        : cursorY;

    setDotTop(Math.max(0, Math.min(targetY, rect.height - DOT_SIZE)));

    // Update hover index if cursor is within item bounds
    const foundIndex = items.findIndex((item) => {
      const itemRect = item.getBoundingClientRect();
      return e.clientY >= itemRect.top && e.clientY <= itemRect.bottom;
    });
    setHoverIndex(foundIndex >= 0 ? foundIndex : null);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className="page__container">
    <div className="min-h-screen">
      {/* HEADER */}
      <section id="l212-header">
        <div id="header__wrapper--row">
        
          <p className="l212__title header__right-l212">Link 212</p>
          <div className="divider-l212" />
          <div className="text__description-l212">
            <p>
              Link 212 cultivates civic pride among young adults in Baltimore
              through shared local knowledge, neighborhood connections, and
              niche entertainment experiences, promoting engagement and
              investment in those who strengthen urban neighborhoods and create
              resilient places where people choose to stay, build, and thrive
              together.
            </p>
          </div>
        </div>
          <div className="l212-header-right">
          <img
            src="images/l212/quote-start.svg"
            alt="starting quote"
            className="l212-start-quote"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img
            src="images/l212/quote-end.svg"
            alt="ending quote"
            className="l212-end-quote"
          />
        </div>
      
      </section>

      {/* MAP + MENU + PREVIEW */}
      <section id="l212-nbd-menu-wrapper" className="flex">
        <div className="interactive-map-container">
          <div className="map-wrapper">
            <img
              src="images/l212/remington-map.svg"
              alt="remington map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="nbd-menu-nav relative w-[3px] bg-[var(--Charcoal)] h-[650px] mx-4">
          <motion.div
            className="nbd-menu-dot absolute w-4 h-4 bg-[var(--Charcoal)] rounded-full -translate-x-1/2"
            animate={{ top: dotTop }}
            transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
          />
        </div>

        <div
          className="nbd-menu-container flex"
          ref={menuRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <aside className="flex flex-col justify-start items-start p-8 w-[400px]">
            <ul className="w-full">
              {menuItems.map((item, index) => (
                <li key={index} className="my-2">
                  <motion.a
                    href="#"
                    className="flex items-center gap-4"
                    animate={{
                      opacity: hoverIndex === null || hoverIndex === index ? 1 : 0.4,
                      x: hoverIndex === index ? 10 : 0, // move right 10px when hovered
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {hoverIndex === index && (
                      <motion.img
                        src="images/l212/right-arrow-l212.svg"
                        alt="right arrow"
                        className="w-[40px] h-[40px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    )}
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="l212-menu-pic relative w-[500px] h-[650px]">
            {menuItems.map((item, index) => (
              <motion.img
                key={item.img}
                src={item.img}
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{
                  opacity:
                    hoverIndex === index
                      ? 1
                      : hoverIndex === null && index === 0
                      ? 1
                      : 0,
                }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              />
            ))}

            <div
              className="nbd-big-title absolute text-[120px] font-bold text-[var(--Isabelline)] right-0"
              style={{
                bottom:
                  hoverIndex !== null
                    ? menuItems[hoverIndex].position?.bottom || "10px"
                    : menuItems[0].position?.bottom || "10px",
                left:
                  hoverIndex !== null
                    ? menuItems[hoverIndex].position?.left || "-70px"
                    : menuItems[0].position?.left || "-70px",
                width:
                  hoverIndex !== null
                    ? menuItems[hoverIndex].width || "300px"
                    : menuItems[0].width || "300px",
              }}
            >
              <p>
                {hoverIndex !== null
                  ? menuItems[hoverIndex].label
                  : menuItems[0].label}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  );
}

export default Link212;
