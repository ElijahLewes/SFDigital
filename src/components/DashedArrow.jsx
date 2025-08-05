import { motion } from "framer-motion";

const AnimatedDashedLine = ({
  totalDashes = 15,
  dashLength = 10,
  gap = 10,
  dashHeight = 5,
  fillColor = "black",
  bgColor = "#ddd",
  delay = 0.1 // seconds
}) => {
  const startX = 10;
  const y = 20;

  return (
    <svg
      width="100%"
      height="50"
      viewBox="0 0 400 50"
      preserveAspectRatio="xMinYMid meet"
    >
      {Array.from({ length: totalDashes }).map((_, i) => {
        const x = startX + i * (dashLength + gap);
        return (
          <g key={i}>
            {/* Background dash */}
            <rect
              x={x}
              y={y}
              width={dashLength}
              height={dashHeight}
              fill={bgColor}
            />
            {/* Animated foreground dash */}
            <motion.rect
              x={x}
              y={y}
              height={dashHeight}
              initial={{ width: 0 }}
              animate={{ width: dashLength }}
              transition={{ delay: i * delay, duration: 0.4, ease: "easeOut" }}
              fill={fillColor}
            />
          </g>
        );
      })}

      {/* Animated Arrow */}
      <motion.path
        d="M0,0 L10,5 L0,10 Z"
        fill={fillColor}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: totalDashes * delay + 0.1 }}
        transform={`translate(${startX + totalDashes * (dashLength + gap)}, ${
          y - 2
        })`}
      />
    </svg>
  );
};

export default AnimatedDashedLine;
