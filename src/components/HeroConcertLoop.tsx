"use client";

import { useEffect, useRef } from "react";
import { ARTICLE_META, KEY_METRICS } from "@/data/articleData";
import ArticleAudioPlayer from "@/components/ArticleAudioPlayer";

export default function HeroConcertLoop() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <>
      <section className="hero-concert-section" id="vi-tri-1">
        {/* Background Video Intro Loop */}
        <div className="hero-video-stage">
          <video
            ref={videoRef}
            className="hero-background-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/hero-poster.jpg"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="hero-stage-vignette" />
        </div>

        {/* Main Editorial Headline, Sapo & Byline Metadata */}
        <div className="hero-content-wrap">
          <h1 className="hero-main-title">
            <span className="title-line-top">{ARTICLE_META.titleMain}</span>
            <span className="title-line-accent">{ARTICLE_META.titleAccent}</span>
          </h1>

          <p className="hero-sapo">
            <em>{ARTICLE_META.sapo}</em>
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

          {/* AI Voice Article Audio Player Bar */}
          <ArticleAudioPlayer />
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
