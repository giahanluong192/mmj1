"use client";

import { useState, useEffect, useRef, type CSSProperties } from "react";
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
  const [isAudioOn, setIsAudioOn] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // 6-second seamless loop: 3 aerial flycam shots x 2 seconds each
  useEffect(() => {
    const interval = setInterval(() => {
      setShotIndex((prev) => (prev + 1) % HERO_FLYCAM_SHOTS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Cleanup Web Audio on unmount
  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => undefined);
      }
    };
  }, []);

  const toggleAmbientSound = () => {
    if (isAudioOn) {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(
          0.0001,
          audioCtxRef.current.currentTime,
          0.15
        );
      }
      setIsAudioOn(false);
      return;
    }

    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;

      if (!audioCtxRef.current) {
        const ctx = new AudioContextClass();
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.06, ctx.currentTime);
        masterGain.connect(ctx.destination);

        // Warm stadium concert chord pad (C major 9th atmospheric synth)
        const freqs = [130.81, 196.0, 246.94, 293.66];
        freqs.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const oscGain = ctx.createGain();
          osc.type = i % 2 === 0 ? "sine" : "triangle";
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          oscGain.gain.setValueAtTime(0.22 / freqs.length, ctx.currentTime);
          osc.connect(oscGain);
          oscGain.connect(masterGain);
          osc.start();
        });

        // Subtle crowd roar filtered noise
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = (((i * 9301 + 49297) % 233280) / 233280) * 2 - 1;
        }
        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const bandpass = ctx.createBiquadFilter();
        bandpass.type = "bandpass";
        bandpass.frequency.setValueAtTime(620, ctx.currentTime);
        bandpass.Q.setValueAtTime(0.8, ctx.currentTime);

        const crowdGain = ctx.createGain();
        crowdGain.gain.setValueAtTime(0.08, ctx.currentTime);

        whiteNoise.connect(bandpass);
        bandpass.connect(crowdGain);
        crowdGain.connect(masterGain);
        whiteNoise.start();

        audioCtxRef.current = ctx;
        gainNodeRef.current = masterGain;
      } else {
        if (audioCtxRef.current.state === "suspended") {
          audioCtxRef.current.resume().catch(() => undefined);
        }
        if (gainNodeRef.current) {
          gainNodeRef.current.gain.setTargetAtTime(
            0.06,
            audioCtxRef.current.currentTime,
            0.15
          );
        }
      }
      setIsAudioOn(true);
    } catch {
      setIsAudioOn(false);
    }
  };

  const currentShot = HERO_FLYCAM_SHOTS[shotIndex];

  return (
    <>
      <section className="hero-concert-section" id="vi-tri-1">
        {/* Animated 6s Flycam Video Loop Stage */}
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
              <radialGradient id="stageBeamA" cx="50%" cy="18%" r="60%">
                <stop offset="0%" stopColor={currentShot.primaryColor} stopOpacity="0.52" />
                <stop offset="55%" stopColor={currentShot.secondaryColor} stopOpacity="0.18" />
                <stop offset="100%" stopColor="#0B0C10" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="laserLeft" x1="50%" y1="15%" x2="5%" y2="95%">
                <stop offset="0%" stopColor={currentShot.secondaryColor} stopOpacity="0.65" />
                <stop offset="100%" stopColor={currentShot.primaryColor} stopOpacity="0" />
              </linearGradient>
              <linearGradient id="laserRight" x1="50%" y1="15%" x2="95%" y2="95%">
                <stop offset="0%" stopColor={currentShot.primaryColor} stopOpacity="0.65" />
                <stop offset="100%" stopColor={currentShot.secondaryColor} stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Stage glow & sweeping concert laser cones */}
            <rect width="100" height="100" fill="url(#stageBeamA)" />
            <polygon points="48,16 4,100 26,100" fill="url(#laserLeft)" opacity="0.55" />
            <polygon points="52,16 74,100 96,100" fill="url(#laserRight)" opacity="0.55" />
            <polygon points="50,15 36,100 64,100" fill="url(#stageBeamA)" opacity="0.5" />

            {/* Curved stadium tiers */}
            <ellipse
              cx="50"
              cy="22"
              rx="22"
              ry="4.5"
              fill="none"
              stroke={currentShot.secondaryColor}
              strokeWidth="0.45"
              opacity="0.7"
            />
            <path
              d="M 6 58 Q 50 38 94 58"
              fill="none"
              stroke={currentShot.primaryColor}
              strokeWidth="0.25"
              opacity="0.4"
            />
            <path
              d="M 2 76 Q 50 52 98 76"
              fill="none"
              stroke={currentShot.secondaryColor}
              strokeWidth="0.25"
              opacity="0.35"
            />

            {/* Sea of tens of thousands of synchronized lightsticks */}
            {LIGHTSTICK_DOTS.map((dot) => (
              <circle
                key={dot.id}
                cx={dot.x}
                cy={dot.y}
                r={dot.size * 0.16}
                fill={dot.id % 2 === 0 ? currentShot.primaryColor : currentShot.secondaryColor}
                className="lightstick-particle"
                style={{ animationDelay: `${dot.delay}s` }}
              />
            ))}
          </svg>

          <div className="hero-dark-vignette" />
        </div>

        {/* Top Flycam Loop Telemetry Indicator */}
        <div className="hero-loop-hud">
          <span className="pos-badge">VỊ TRÍ 1 • HEADER VIDEO LOOP (6S FLYCAM)</span>
          <div className="flycam-switcher" role="tablist" aria-label="3 cú máy flycam đại nhạc hội">
            {HERO_FLYCAM_SHOTS.map((shot, idx) => (
              <button
                key={shot.id}
                type="button"
                role="tab"
                aria-selected={idx === shotIndex}
                className={`flycam-pill ${idx === shotIndex ? "active" : ""}`}
                onClick={() => setShotIndex(idx)}
              >
                <span
                  className="flycam-dot"
                  style={{ backgroundColor: shot.primaryColor }}
                />
                <span>{shot.timeRange}</span>
                <span className="flycam-name">{shot.concertName}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Editorial Headline & Concise Sapo */}
        <div className="hero-content-wrap">
          <div className="hero-kicker">
            <span>{ARTICLE_META.category}</span>
            <span className="kicker-sep">•</span>
            <span>{ARTICLE_META.specialIssue}</span>
          </div>

          <h1 className="hero-main-title">
            <span className="title-line-top">{ARTICLE_META.titleMain}</span>
            <span className="title-line-accent">{ARTICLE_META.titleAccent}</span>
          </h1>

          <p className="hero-sapo">{ARTICLE_META.sapo}</p>

          <div className="hero-shot-caption-bar">
            <div className="shot-live-tag">
              <span className="rec-dot" />
              <span>FLYCAM {shotIndex + 1}/3</span>
            </div>
            <div className="shot-caption-copy">
              <strong>{currentShot.concertName}</strong> ({currentShot.audienceScale}) —{" "}
              {currentShot.caption}
            </div>
          </div>

          <div className="hero-meta-strip">
            <span>📅 {ARTICLE_META.publishDate}</span>
            <span>•</span>
            <span>⏱ {ARTICLE_META.readTime}</span>
            <span>•</span>
            <span>📊 Dữ liệu: Đại học RMIT Việt Nam, Sở VH&TT TP.HCM, Statista & Nghị quyết 80-NQ/TW</span>
          </div>
        </div>

        {/* Audio Unmute Button in Bottom-Right Corner per Technical Spec */}
        <button
          type="button"
          className={`hero-audio-toggle ${isAudioOn ? "audio-active" : ""}`}
          onClick={toggleAmbientSound}
          aria-pressed={isAudioOn}
        >
          <span>{isAudioOn ? "🔊" : "🔇"}</span>
          <span>{isAudioOn ? "Tắt âm thanh sân vận động" : "Bật âm thanh"}</span>
        </button>
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
