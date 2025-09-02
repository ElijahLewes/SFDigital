import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Link212() {
  // --- DOT + ALIGNMENT STATE ---
  const [dotTop, setDotTop] = useState(null);
  const [listHeight, setListHeight] = useState(0);
  const listRef = useRef(null);
  const dividerRef = useRef(null);
  const DOT_SIZE = 16; // matches w-4 h-4

  // --- MENU + PREVIEW STATE ---
  const [hoverIndex, setHoverIndex] = useState(null); // controls preview image

  const menuItems = [
    { label: "Remington", img: "/images/previews/test_image.jpeg" },
    { label: "Jones-Falls: COMING SOON", img: "/images/previews/jonesfalls.jpg" },
    { label: "Abell: COMING SOON", img: "/images/previews/abell.jpg" },
  ];

  // Helper: show the name before the colon
  const prettyName =
    hoverIndex !== null
      ? menuItems[hoverIndex].label.split(":")[0]
      : null;

  // Measure list height to match divider height
  const measureHeights = () => {
    if (listRef.current) {
      const h = listRef.current.getBoundingClientRect().height;
      setListHeight(h);
    }
  };

  useEffect(() => {
    measureHeights();
    const onResize = () => measureHeights();
    window.addEventListener("resize", onResize);
    const t = setTimeout(measureHeights, 0);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, []);

  // Align the dot to the hovered item's vertical center relative to the divider
  const handleHover = (e, index) => {
    setHoverIndex(index);
    if (!dividerRef.current) return;
    const itemRect = e.currentTarget.getBoundingClientRect();
    const dividerRect = dividerRef.current.getBoundingClientRect();
    const itemCenterY = itemRect.top + itemRect.height / 2;
    const relativeY = itemCenterY - dividerRect.top - DOT_SIZE / 2;
    setDotTop(relativeY);
  };

  const handleLeave = () => {
    setHoverIndex(null);
    setDotTop(null);
  };

  // Pick preview image (default to first if none hovered)
  const currentPreview =
    hoverIndex !== null ? menuItems[hoverIndex].img : "/images/previews/default.jpg";

  return (
    <div
      className="section-container flex flex-col justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/Link212BackgroundLight.svg)" }}
    >
      {/* Intro section */}
      <section
        id="Link212-page-container"
        className="page-container-column items-center justify-center"
      >
        <div className="section container flex flex-row w-full h-screen items-center justify-center">
          <div className="subtitle-container">
            <h1 className="link212-subtitle basis-1/2">The Link 212 Project</h1>
          </div>
          <div className="divider" />
          <div className="mission-statement-text-container content-center justify-items-center basis-1/2">
            <p>
              The Link 212 Project is a multimedia project aimed at showcasing the vibrant
              culture and community of the 250 Baltimore neighborhoods found in the 212
              zipcode.
            </p>
          </div>
        </div>
      </section>

      {/* Split row: Map | Divider with dot | Menu + Preview */}
      <section className="page-container-row flex w-full  relative items-stretch gap-6  px-5 pb-16">
        {/* Left: Map */}
        <div className="interactive-map-container flex flex-col items-center justify-center basis-1/2 bg-[var(--green-base)] text-[var(--text-light)] bg-opacity-60 p-6 rounded-lg shadow-lg relative">
          <h2 className="text-xl font-semibold mb-2">Interactive Map</h2>
          <p className="text-sm text-white mb-4">
            Explore the neighborhood through our interactive map. Click on the markers to learn
            more about each location.
          </p>
          <div className="map bg-gray-700 w-full h-64 rounded-md">{/* map placeholder */}</div>
        </div>

        {/* Center: Divider with dot aligned to menu */}
        <div
          ref={dividerRef}
          className="relative w-[2px] bg-gray-400 self-center"
          style={{ height: listHeight || "100%" }}
        >
          {dotTop !== null && (
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-400"
              initial={false}
              animate={{ top: dotTop }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            />
          )}
        </div>

        {/* Right: split vertically → Menu (left column) | Preview (right column) */}
        <div className="neighborhood-menu-container basis-1/2 p-0 min-h-[22rem]"> {/* ★ ensure right side has height */}
          <div className="grid grid-cols-2 gap-6 h-full">
            {/* Menu column */}
            <aside className="flex flex-col justify-center">
              <ul
                ref={listRef}
                className="space-y-6 text-white relative"
                onLoad={measureHeights}
              >
                {menuItems.map((item, index) => (
                  <li key={index} className="leading-7">
                    <a
                      href="#"
                      className="link212-menu-item hover:text-blue-400 transition-colors inline-block"
                      onMouseEnter={(e) => handleHover(e, index)}
                      onMouseLeave={handleLeave}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Preview column (with rotated label overlay) */}
            <div className="relative rounded-lg overflow-hidden min-h-[18rem]"> {/* ★ explicit height */}
              {/* Image crossfade */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentPreview}
                  src={currentPreview}
                  alt="Neighborhood preview"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  initial={{ opacity: 0.0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                />
              </AnimatePresence>

              {/* Subtle overlay for contrast */}
              <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />

          
              {/* Rotated label pinned to bottom-left of the image */}
              <div className="absolute left-0 bottom-0 [writing-mode:vertical-rl] rotate-180 z-20">
                <div className="px-2 py-6 m-2 rounded-md">
                  <span className="text-white/95 link212-subtitle font-semibold tracking-widest uppercase text-sm">
                  {prettyName}
               </span>
             </div>
            </div>

              {/* Bottom caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 text-sm text-white bg-gradient-to-t from-black/60 to-transparent z-20"> {/* ★ z-20 */}
                {hoverIndex !== null ? menuItems[hoverIndex].label : "Hover a neighborhood →"}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Link212;
