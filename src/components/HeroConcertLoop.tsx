"use client";

import { useState, useEffect, type CSSProperties } from "react";
import {
  ARTICLE_META,
  HERO_FLYCAM_SHOTS,
  KEY_METRICS,
} from "@/data/articleData";

// Deterministic lightstick matrix for aerial stadium flycam simulation
const LIGHTSTICK_DOTS = Array.from({ length: 84 }, (_, idx) => {
  const row = Math.floor(idx / 12);
  const col = idx % 12;
  const offsetX = (row % 2) * 3.5;
  const x = 8 + col * 7.6 + offsetX;
  const y = 36 + row * 8.2 + ((col * 7 + row * 3) % 5) * 0.7;
  const size = 2.2 + ((idx * 5) % 4) * 0.65;
  const delay = ((idx * 13) % 20) * 0.1;
  return { id: idx, x, y, size, delay };
});

export default function HeroConcertLoop() {
  const [shotIndex, setShotIndex] = useState(0);

  // 6-second seamless loop: 3 aerial flycam color palettes x 2 seconds each
  useEffect(() => {
    const interval = setInterval(() => {
      setShotIndex((prev) => (prev + 1) % HERO_FLYCAM_SHOTS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentShot = HERO_FLYCAM_SHOTS[shotIndex];

  return (
    <>
      <section className="hero-concert-section" id="vi-tri-1">
        {/* Animated 6s Flycam Stage Loop */}
        <div
          className="hero-video-stage"
          style={
            {
              "--shot-primary": currentShot.primaryColor,
              "--shot-secondary": currentShot.secondaryColor,
            } as CSSProperties
          }
        >
          <svg
            className="hero-stadium-svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="stageBeamA" cx="50%" cy="18%" r="62%">
                <stop offset="0%" stopColor={currentShot.primaryColor} stopOpacity="0.24" />
                <stop offset="55%" stopColor={currentShot.secondaryColor} stopOpacity="0.12" />
                <stop offset="100%" stopColor="var(--bg-page)" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="laserLeft" x1="50%" y1="12%" x2="5%" y2="95%">
                <stop offset="0%" stopColor={currentShot.secondaryColor} stopOpacity="0.26" />
                <stop offset="100%" stopColor={currentShot.primaryColor} stopOpacity="0" />
              </linearGradient>
              <linearGradient id="laserRight" x1="50%" y1="12%" x2="95%" y2="95%">
                <stop offset="0%" stopColor={currentShot.primaryColor} stopOpacity="0.26" />
                <stop offset="100%" stopColor={currentShot.secondaryColor} stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Stage glow & sweeping concert laser cones */}
            <rect width="100" height="100" fill="url(#stageBeamA)" />
            <polygon points="48,14 4,100 26,100" fill="url(#laserLeft)" opacity="0.68" />
            <polygon points="52,14 74,100 96,100" fill="url(#laserRight)" opacity="0.68" />
            <polygon points="50,14 36,100 64,100" fill="url(#stageBeamA)" opacity="0.58" />

            {/* Curved stadium tiers */}
            <ellipse
              cx="50"
              cy="22"
              rx="22"
              ry="4.5"
              fill="none"
              stroke={currentShot.secondaryColor}
              strokeWidth="0.35"
              opacity="0.35"
            />
            <path
              d="M 6 58 Q 50 38 94 58"
              fill="none"
              stroke={currentShot.primaryColor}
              strokeWidth="0.22"
              opacity="0.25"
            />
            <path
              d="M 2 76 Q 50 52 98 76"
              fill="none"
              stroke={currentShot.secondaryColor}
              strokeWidth="0.22"
              opacity="0.22"
            />

            {/* Sea of synchronized lightsticks */}
            {LIGHTSTICK_DOTS.map((dot) => (
              <circle
                key={dot.id}
                cx={dot.x}
                cy={dot.y}
                r={dot.size * 0.15}
                fill={dot.id % 2 === 0 ? currentShot.primaryColor : currentShot.secondaryColor}
                className="lightstick-particle"
                style={{ animationDelay: `${dot.delay}s` }}
              />
            ))}
          </svg>

          <div className="hero-stage-vignette" />
        </div>

        {/* Main Editorial Headline, Sapo & Byline Metadata */}
        <div className="hero-content-wrap">
          <h1 className="hero-main-title">
            <span className="title-line-top">{ARTICLE_META.titleMain}</span>
            <span className="title-line-accent">{ARTICLE_META.titleAccent}</span>
          </h1>

          <p className="hero-sapo">
            <strong>{ARTICLE_META.sapo}</strong>
          </p>

          <div className="hero-meta-strip">
            <span>
              <strong>Thực hiện:</strong> {ARTICLE_META.author}
            </span>
            <span className="meta-pipe">|</span>
            <span>
              <strong>Người hướng dẫn:</strong> {ARTICLE_META.advisor}
            </span>
            <span className="meta-pipe">|</span>
            <span>
              <strong>Thời gian đọc:</strong> {ARTICLE_META.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* 4 Key Data Metrics Strip */}
      <section className="key-metrics-strip" aria-label="Các chỉ số định lượng nổi bật">
        <div className="metrics-cards-grid">
          {KEY_METRICS.map((m) => (
            <article key={m.id} className={`kpi-neon-card accent-${m.accent}`}>
              <div className="kpi-value-row">
                <span className="kpi-big-number">{m.value}</span>
                <span className="kpi-unit">{m.unit}</span>
              </div>
              <h2 className="kpi-label">{m.label}</h2>
              <p className="kpi-detail">{m.detail}</p>
              <span className="kpi-source">{m.source}</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
