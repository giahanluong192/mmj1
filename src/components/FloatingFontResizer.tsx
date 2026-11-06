"use client";

import { useState, useEffect } from "react";

// Font size scale levels in px (applied directly to document.documentElement.style.fontSize)
// 16px is default browser baseline (100% = 1rem = 16px)
const FONT_STEPS = [14, 15, 16, 17.5, 19, 21];
const DEFAULT_STEP = 2; // 16px

export default function FloatingFontResizer() {
  const [stepIndex, setStepIndex] = useState<number>(DEFAULT_STEP);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("concert_reading_font_step");
      if (saved !== null) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed >= 0 && parsed < FONT_STEPS.length) {
          setStepIndex(parsed);
          document.documentElement.style.fontSize = `${FONT_STEPS[parsed]}px`;
          return;
        }
      }
    } catch {
      // Ignore localStorage access restrictions
    }
  }, []);

  const applyStep = (newIndex: number) => {
    const clamped = Math.max(0, Math.min(newIndex, FONT_STEPS.length - 1));
    setStepIndex(clamped);
    document.documentElement.style.fontSize = `${FONT_STEPS[clamped]}px`;
    try {
      localStorage.setItem("concert_reading_font_step", clamped.toString());
    } catch {
      // Ignore storage errors in private browsing
    }
  };

  const handleIncrease = () => applyStep(stepIndex + 1);
  const handleDecrease = () => applyStep(stepIndex - 1);
  const handleReset = () => applyStep(DEFAULT_STEP);

  const canIncrease = stepIndex < FONT_STEPS.length - 1;
  const canDecrease = stepIndex > 0;
  const currentPx = FONT_STEPS[stepIndex];

  return (
    <div
      className="floating-font-resizer"
      role="group"
      aria-label="Tùy chỉnh cỡ chữ toàn website"
      title={`Cỡ chữ hiện tại: ${currentPx}px (${stepIndex === DEFAULT_STEP ? "Mặc định" : currentPx > 16 ? `+${currentPx - 16}px` : `${currentPx - 16}px`})`}
    >
      <button
        type="button"
        className="font-resizer-btn btn-plus"
        onClick={handleIncrease}
        disabled={!canIncrease}
        aria-label="Tăng cỡ chữ toàn trang (+)"
        title={canIncrease ? `Tăng cỡ chữ (+)` : "Đã đạt cỡ chữ tối đa"}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>

      <button
        type="button"
        className="font-resizer-label"
        onClick={handleReset}
        aria-label="Đặt lại cỡ chữ chuẩn 16px"
        title="Nhấp để đặt lại cỡ chữ chuẩn (16px)"
      >
        <span className="small-a">a</span>
        <span className="big-a">A</span>
      </button>

      <button
        type="button"
        className="font-resizer-btn btn-minus"
        onClick={handleDecrease}
        disabled={!canDecrease}
        aria-label="Giảm cỡ chữ toàn trang (-)"
        title={canDecrease ? `Giảm cỡ chữ (-)` : "Đã đạt cỡ chữ tối thiểu"}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>
    </div>
  );
}
