import React from "react";
import { useState, useEffect } from "react";

interface AnimatedCounterProps {
  value: number | string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}
export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1200,
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const numericTarget = parseInt(value.toString().replace(/\D/g, "")) || 0;
    let animationFrameId: number;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeOut * numericTarget);

      setCount(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setCount(numericTarget);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [value, duration]);

  return (
    <span className={className}>
      {prefix}
      {count.toLocaleString("id-ID")}
      {suffix}
    </span>
  );
}
