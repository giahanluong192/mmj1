"use client";

import { useState, useEffect, useRef } from "react";
import {
  EVENT_SCALE_DISTRIBUTION,
  ICONIC_CONCERTS_2025_2026,
  SPENDING_WILLINGNESS_DATA,
  VOXPOP_STORIES,
  ECOSYSTEM_SPOKES,
} from "@/data/articleData";

/* ============================================================================
   [VỊ TRÍ 2] BIỂU ĐỒ 1: PHÂN BỐ QUY MÔ SỰ KIỆN (DONUT) & CONCERT TIÊU BIỂU
   ============================================================================ */
export function EventScaleAndConcertsWidget() {
  const [activeTab, setActiveTab] = useState<"donut" | "concerts">("donut");
  const [selectedSliceId, setSelectedSliceId] = useState<string>("s-10k-40k");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const radius = 74;
  const circumference = 2 * Math.PI * radius;

  // Precompute stroke offsets cumulatively
  const donutSegments = EVENT_SCALE_DISTRIBUTION.reduce<
    {
      slice: (typeof EVENT_SCALE_DISTRIBUTION)[number];
      dashArray: string;
      dashOffset: number;
    }[]
  >((acc, slice) => {
    const prevPercent = acc.reduce((sum, item) => sum + item.slice.percentage, 0);
    const segLength = (slice.percentage / 100) * circumference;
    const gap = 2.2;
    const dashArray = `${Math.max(0, segLength - gap)} ${circumference}`;
    const dashOffset = -((prevPercent / 100) * circumference);
    acc.push({ slice, dashArray, dashOffset });
    return acc;
  }, []);

  const activeSlice =
    EVENT_SCALE_DISTRIBUTION.find((s) => s.id === selectedSliceId) ||
    EVENT_SCALE_DISTRIBUTION[0];

  const filteredConcerts =
    categoryFilter === "all"
      ? ICONIC_CONCERTS_2025_2026
      : ICONIC_CONCERTS_2025_2026.filter((c) => c.category === categoryFilter);

  return (
    <figure className="viz-card" id="vi-tri-2">
      <div className="viz-header">
        <div>
          <span className="pos-badge">
            QUY MÔ SỰ KIỆN & TỐC ĐỘ BÁN VÉ CONCERT NỘI ĐỊA
          </span>
          <h3 className="viz-title">
            Sự trỗi dậy của phân khúc đại nhạc hội trên bức tranh 810+ sự&nbsp;kiện&nbsp;âm&nbsp;nhạc
          </h3>
          <p className="viz-subtitle">
            Chuyển đổi giữa cơ cấu quy mô sự kiện năm 2025 và các cột mốc bán vé tiêu biểu giai đoạn&nbsp;2025–2026
          </p>
        </div>

        <div className="viz-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "donut"}
            className={`viz-tab-btn ${activeTab === "donut" ? "active" : ""}`}
            onClick={() => setActiveTab("donut")}
          >
            Phân bố quy mô 810+ sự kiện
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "concerts"}
            className={`viz-tab-btn ${activeTab === "concerts" ? "active" : ""}`}
            onClick={() => setActiveTab("concerts")}
          >
            Các concert đại chúng tiêu biểu
          </button>
        </div>
      </div>

      {activeTab === "donut" ? (
        <div className="donut-layout">
          <div className="donut-svg-box">
            <svg viewBox="0 0 210 210" className="donut-svg" role="img" aria-label="Phân bố quy mô 810+ sự kiện âm nhạc năm 2025">
              <g transform="rotate(-90 105 105)">
                <circle
                  cx="105"
                  cy="105"
                  r={radius}
                  fill="none"
                  stroke="var(--svg-track)"
                  strokeWidth="26"
                />
                {donutSegments.map(({ slice, dashArray, dashOffset }) => {
                  const isSelected = slice.id === activeSlice.id;
                  return (
                    <circle
                      key={slice.id}
                      cx="105"
                      cy="105"
                      r={radius}
                      fill="none"
                      stroke={slice.color}
                      strokeWidth={isSelected ? 31 : 25}
                      strokeDasharray={dashArray}
                      strokeDashoffset={dashOffset}
                      className="donut-arc"
                      onClick={() => setSelectedSliceId(slice.id)}
                      onMouseEnter={() => setSelectedSliceId(slice.id)}
                    />
                  );
                })}
              </g>
              <text x="105" y="96" textAnchor="middle" className="donut-center-big">
                23,8%
              </text>
              <text x="105" y="115" textAnchor="middle" className="donut-center-sub">
                Quy mô &gt;5.000 khách
              </text>
              <text x="105" y="131" textAnchor="middle" className="donut-center-muted">
                (810+ sự kiện 2025)
              </text>
            </svg>

            <div className="donut-spotlight-box" style={{ borderColor: activeSlice.color }}>
              <div className="spotlight-top">
                <span className="spotlight-scale">{activeSlice.scaleLabel}</span>
                <span className="spotlight-pct" style={{ color: activeSlice.color }}>
                  {activeSlice.percentage.toFixed(1).replace(".", ",")}%
                </span>
              </div>
              <p className="spotlight-note">{activeSlice.note}</p>
            </div>
          </div>

          <div className="donut-legend-list">
            {EVENT_SCALE_DISTRIBUTION.map((item) => {
              const isSelected = item.id === activeSlice.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`donut-legend-row ${isSelected ? "selected" : ""}`}
                  onClick={() => setSelectedSliceId(item.id)}
                  onMouseEnter={() => setSelectedSliceId(item.id)}
                >
                  <div className="legend-row-left">
                    <span className="legend-swatch" style={{ backgroundColor: item.color }} />
                    <div>
                      <div className="legend-scale-name">
                        {item.scaleLabel}
                        {item.isLargeScale && (
                          <span className="large-scale-pill">Quy mô lớn</span>
                        )}
                      </div>
                      <div className="legend-mini-bar-track">
                        <div
                          className="legend-mini-bar-fill"
                          style={{
                            width: `${(item.percentage / 35) * 100}%`,
                            backgroundColor: item.color,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <span className="legend-pct-val">
                    {item.percentage.toFixed(1).replace(".", ",")}%
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="concerts-tab-wrap">
          <div className="concert-filter-pills">
            {[
              { key: "all", label: "Tất cả cột mốc (7)" },
              { key: "phai-sinh", label: "Concert phái sinh THTT" },
              { key: "quoc-gia", label: "Concert Quốc gia" },
              { key: "ca-nhan", label: "Liveshow cá nhân" },
              { key: "quoc-te", label: "World Tour Quốc tế" },
            ].map((f) => (
              <button
                key={f.key}
                type="button"
                className={`mini-filter-pill ${categoryFilter === f.key ? "active" : ""}`}
                onClick={() => setCategoryFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="iconic-concerts-grid">
            {filteredConcerts.map((c) => (
              <div
                key={c.id}
                className="iconic-concert-card"
                style={{ borderTopColor: c.highlightColor }}
              >
                <div className="concert-card-meta">
                  <span
                    className="concert-cat-tag"
                    style={{
                      color: c.highlightColor,
                      borderColor: `${c.highlightColor}55`,
                    }}
                  >
                    {c.categoryLabel}
                  </span>
                  <span className="concert-time-tag">{c.time}</span>
                </div>
                <h4 className="concert-card-title">{c.name}</h4>
                <div className="concert-card-venue">📍 {c.venue}</div>
                <div className="concert-audience-bar-box">
                  <div className="concert-audience-number">{c.audience}</div>
                  <div className="concert-audience-track">
                    <div
                      className="concert-audience-fill"
                      style={{
                        width: `${Math.min(100, (c.audienceNumeric / 100000) * 100)}%`,
                        backgroundColor: c.highlightColor,
                      }}
                    />
                  </div>
                </div>
                <p className="concert-speed-note">⚡ {c.ticketSpeed}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <figcaption className="viz-caption-footer">
        Nguồn: Báo cáo Tổng quan ngành công nghiệp âm nhạc Việt Nam 2025–2026 (Đại học RMIT Việt Nam, trang 18, 29, 30, 40, 82) & thống kê báo chí tháng 10–11/2026.
      </figcaption>
    </figure>
  );
}

/* ============================================================================
   [VỊ TRÍ 3] BIỂU ĐỒ 2: CƠ CẤU GIÁ VÉ & MỨC SẴN SÀNG CHI TRẢ (100% STACKED BAR)
   ============================================================================ */
const TIER_META = [
  { key: "under50k" as const, label: "0 - 50.000 VNĐ", color: "#334155" },
  { key: "from50kTo200k" as const, label: "50.000 - 200.000 VNĐ", color: "#38BDF8" },
  { key: "from200kTo500k" as const, label: "200.000 - 500.000 VNĐ", color: "#818CF8" },
  { key: "from500kTo1M" as const, label: "500.000 - 1.000.000 VNĐ", color: "#F59E0B" },
  { key: "over1M" as const, label: "> 1.000.000 VNĐ", color: "#EC4899" },
];

export function SpendingWillingnessChart() {
  const [focusedRowId, setFocusedRowId] = useState<string>("live-events");

  const activeRow =
    SPENDING_WILLINGNESS_DATA.find((r) => r.id === focusedRowId) ||
    SPENDING_WILLINGNESS_DATA[1];

  return (
    <figure className="viz-card" id="vi-tri-3">
      <div className="viz-header">
        <div>
          <span className="pos-badge">
            SỨC MUA & MỨC SẴN SÀNG CHI TRẢ CỦA KHÁN GIẢ VIỆT (N=471)
          </span>
          <h3 className="viz-title">
            Khán giả Việt chi bao nhiêu mỗi tháng cho sự kiện trực tiếp và vật&nbsp;phẩm&nbsp;thần&nbsp;tượng?
          </h3>
          <p className="viz-subtitle">
            Phân bổ mức chi trung bình/tháng đặt cạnh tỷ lệ người dùng sẵn sàng trả phí cho từng hạng mục sản phẩm âm&nbsp;nhạc
          </p>
        </div>
      </div>

      {/* Legend */}
      <div className="stacked-legend-bar">
        {TIER_META.map((t) => (
          <div key={t.key} className="stacked-legend-item">
            <span className="stacked-swatch" style={{ backgroundColor: t.color }} />
            <span>{t.label}</span>
          </div>
        ))}
      </div>

      {/* 100% Stacked Horizontal Bars */}
      <div className="stacked-rows-wrap">
        {SPENDING_WILLINGNESS_DATA.map((row) => {
          const isFocused = row.id === activeRow.id;
          return (
            <div
              key={row.id}
              className={`stacked-row-card ${isFocused ? "focused" : ""}`}
              onMouseEnter={() => setFocusedRowId(row.id)}
              onClick={() => setFocusedRowId(row.id)}
            >
              <div className="stacked-row-top">
                <span className="stacked-product-name">{row.product}</span>
                <span className="stacked-willing-badge">
                  Sẵn sàng chi trả:{" "}
                  <strong>{row.willingnessRate.toFixed(1).replace(".", ",")}%</strong>
                </span>
              </div>

              <div className="stacked-bar-100">
                {TIER_META.map((tier) => {
                  const val = row.tiers[tier.key];
                  return (
                    <div
                      key={tier.key}
                      className="stacked-segment"
                      style={{
                        width: `${val}%`,
                        backgroundColor: tier.color,
                      }}
                      title={`${tier.label}: ${val.toFixed(1).replace(".", ",")}%`}
                    >
                      {val >= 8 && (
                        <span className="stacked-seg-label">
                          {val.toFixed(1).replace(".", ",")}%
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Insight Box */}
      <div className="stacked-insight-panel">
        <div className="insight-tag">🔍 PHÂN TÍCH HẠNG MỤC ĐANG CHỌN: {activeRow.product.toUpperCase()}</div>
        <p>{activeRow.insight}</p>
      </div>

      <figcaption className="viz-caption-footer">
        Nguồn: Khảo sát sơ cấp định lượng của Đại học RMIT Việt Nam (N=471 người dùng trẻ, trang 27 & 28 Báo cáo Tổng quan ngành công nghiệp âm nhạc Việt Nam 2025–2026).
      </figcaption>
    </figure>
  );
}

/* ============================================================================
   [VỊ TRÍ 4] AUDIO VOXPOP & TEXT VOXBOX – TIẾNG NÓI TỪ KHÁN ĐÀI
   ============================================================================ */
export function VoxpopWaveformBox() {
  const [selectedVoxId, setSelectedVoxId] = useState<string>("vox-1");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progressPct, setProgressPct] = useState<number>(0);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const activeVox =
    VOXPOP_STORIES.find((v) => v.id === selectedVoxId) || VOXPOP_STORIES[0];

  useEffect(() => {
    if (!isPlaying) return;
    const stepMs = 250;
    const increment = (stepMs / (activeVox.durationSec * 1000)) * 100;

    const timer = setInterval(() => {
      setProgressPct((prev) => {
        if (prev + increment >= 100) {
          setIsPlaying(false);
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => clearInterval(timer);
  }, [isPlaying, activeVox.durationSec]);

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => undefined);
      }
    };
  }, []);

  const handlePlayToggle = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    if (nextState) {
      try {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioContextClass();
        }
        const ctx = audioCtxRef.current;
        if (ctx.state === "suspended") {
          ctx.resume().catch(() => undefined);
        }
        // Subtle UI start chime indicating active voxpop playback
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.22);
      } catch {
        // Fallback silently to visual waveform playback
      }
    }
  };

  const handleSelectSpeaker = (id: string) => {
    setSelectedVoxId(id);
    setIsPlaying(false);
    setProgressPct(0);
  };

  const elapsedSec = Math.round((progressPct / 100) * activeVox.durationSec);

  return (
    <section className="viz-card voxpop-card" id="vi-tri-4" aria-label="Tiếng nói từ khán đài">
      <div className="viz-header">
        <div>
          <span className="pos-badge">
            TIẾNG NÓI TỪ KHÁN ĐÀI
          </span>
          <h3 className="viz-title">
            “Tổng chi phí chuyến đi xem concert vừa rồi của bạn là bao nhiêu — và điều gì khiến bạn thấy&nbsp;xứng&nbsp;đáng?”
          </h3>
          <p className="viz-subtitle">
            Ghi nhận thực tế từ khán giả trẻ di chuyển liên tỉnh từ Cần Thơ và TP.HCM đi xem đại nhạc hội nội&nbsp;địa
          </p>
        </div>

        <div className="vox-speaker-tabs">
          {VOXPOP_STORIES.map((v) => (
            <button
              key={v.id}
              type="button"
              className={`viz-tab-btn ${v.id === activeVox.id ? "active" : ""}`}
              onClick={() => handleSelectSpeaker(v.id)}
            >
              🎙 {v.speakerName} ({v.totalCost})
            </button>
          ))}
        </div>
      </div>

      {/* Waveform Player Bar */}
      <div className="waveform-player-shell">
        <button
          type="button"
          className={`waveform-play-btn ${isPlaying ? "playing" : ""}`}
          onClick={handlePlayToggle}
          aria-label={isPlaying ? "Tạm dừng Voxpop" : "Phát mô phỏng sóng âm Voxpop"}
        >
          {isPlaying ? "⏸" : "▶"}
        </button>

        <div className="waveform-bars-wrap" role="progressbar" aria-valuenow={Math.round(progressPct)} aria-valuemin={0} aria-valuemax={100}>
          {activeVox.waveformHeights.map((h, idx) => {
            const barPct = ((idx + 1) / activeVox.waveformHeights.length) * 100;
            const isPassed = barPct <= progressPct;
            return (
              <div
                key={idx}
                className={`waveform-bar ${isPassed ? "passed" : ""} ${isPlaying ? "animating" : ""}`}
                style={{ height: `${h}%` }}
                onClick={() => setProgressPct(barPct)}
              />
            );
          })}
        </div>

        <div className="waveform-timecode">
          00:{String(elapsedSec).padStart(2, "0")} / 00:{String(activeVox.durationSec).padStart(2, "0")}
        </div>
      </div>

      {/* Text Voxbox + Receipt Breakdown */}
      <div className="voxbox-content-grid">
        <div className="voxbox-quote-pane">
          <div className="vox-person-header">
            <div className="vox-avatar">{activeVox.speakerName.charAt(0)}</div>
            <div>
              <h4 className="vox-person-name">{activeVox.speakerName}</h4>
              <div className="vox-person-role">{activeVox.ageAndRole}</div>
              <div className="vox-person-route">
                🎫 {activeVox.concertAttended} • {activeVox.route}
              </div>
            </div>
          </div>

          <blockquote className="vox-blockquote">
            “{activeVox.quote}”
          </blockquote>

          <div className="vox-worth-highlight">
            <strong>Điểm chạm xứng đáng nhất:</strong> {activeVox.worthItReason}
          </div>
        </div>

        <div className="vox-receipt-pane">
          <div className="receipt-title">HÓA ĐƠN CHI TIÊU 1 CHUYẾN CONCERT</div>
          <ul className="receipt-list">
            {activeVox.costBreakdown.map((item, i) => (
              <li key={i}>
                <span>{item.item}</span>
                <strong>{item.amount}</strong>
              </li>
            ))}
          </ul>
          <div className="receipt-total-row">
            <span>TỔNG CHI PHÍ</span>
            <span className="receipt-total-val">{activeVox.totalCost}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   [VỊ TRÍ 5] INFOGRAPHIC: HỆ SINH THÁI KINH TẾ QUANH 1 ĐÊM CONCERT (30.000 KHÁCH)
   ============================================================================ */
export function ConcertEconomicInfographic() {
  const [activeSpokeId, setActiveSpokeId] = useState<string>("hotel");

  const activeSpoke =
    ECOSYSTEM_SPOKES.find((s) => s.id === activeSpokeId) || ECOSYSTEM_SPOKES[0];

  const centerX = 400;
  const centerY = 235;
  const orbitRadius = 158;

  return (
    <figure className="viz-card" id="vi-tri-5">
      <div className="viz-header">
        <div>
          <span className="pos-badge">
            TÁC ĐỘNG KINH TẾ LAN TỎA TỪ 1 ĐÊM CONCERT
          </span>
          <h3 className="viz-title">
            Hệ sinh thái 5 nhánh dịch vụ hưởng lợi quanh một đêm đại nhạc hội 30.000&nbsp;khán&nbsp;giả
          </h3>
          <p className="viz-subtitle">
            Nhấp hoặc di chuột vào từng nhánh dịch vụ để xem cơ chế kích hoạt tiêu dùng liên ngành tại địa phương đăng&nbsp;cai
          </p>
        </div>
      </div>

      <div className="ecosystem-infographic-grid">
        <div className="ecosystem-svg-container">
          <svg
            viewBox="0 0 800 470"
            className="ecosystem-svg"
            role="img"
            aria-label="Infographic tâm điểm sân vận động 30.000 khán giả tỏa ra 5 nhánh kinh tế"
          >
            <defs>
              <radialGradient id="stadiumCoreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.18" />
                <stop offset="65%" stopColor="var(--accent-purple)" stopOpacity="0.08" />
                <stop offset="100%" stopColor="var(--bg-card-subtle)" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Orbit rings */}
            <circle
              cx={centerX}
              cy={centerY}
              r={orbitRadius}
              fill="none"
              stroke="var(--svg-grid)"
              strokeWidth="1.5"
              strokeDasharray="5 5"
            />
            <circle cx={centerX} cy={centerY} r="115" fill="url(#stadiumCoreGlow)" />

            {/* Connecting spokes */}
            {ECOSYSTEM_SPOKES.map((spoke) => {
              const rad = (spoke.angleDeg * Math.PI) / 180;
              const nx = centerX + Math.cos(rad) * orbitRadius;
              const ny = centerY + Math.sin(rad) * orbitRadius;
              const isSelected = spoke.id === activeSpoke.id;

              return (
                <g key={`line-${spoke.id}`}>
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={nx}
                    y2={ny}
                    stroke={spoke.color}
                    strokeWidth={isSelected ? 3.5 : 1.8}
                    strokeOpacity={isSelected ? 0.95 : 0.5}
                  />
                </g>
              );
            })}

            {/* Center Stadium Hub */}
            <g>
              <circle
                cx={centerX}
                cy={centerY}
                r="74"
                fill="var(--bg-card)"
                stroke="var(--accent-blue)"
                strokeWidth="2.5"
              />
              <circle
                cx={centerX}
                cy={centerY}
                r="65"
                fill="none"
                stroke="var(--accent-purple)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <text x={centerX} y={centerY - 16} textAnchor="middle" fill="var(--accent-blue)" fontSize="9.8" fontWeight="800">
                TÂM ĐIỂM CONCERT
              </text>
              <text x={centerX} y={centerY + 6} textAnchor="middle" fill="var(--text-primary)" fontSize="18" fontWeight="900">
                30.000
              </text>
              <text x={centerX} y={centerY + 23} textAnchor="middle" fill="var(--text-secondary)" fontSize="10.2" fontWeight="600">
                KHÁN GIẢ / ĐÊM
              </text>
            </g>

            {/* 5 Satellite Service Nodes */}
            {ECOSYSTEM_SPOKES.map((spoke) => {
              const rad = (spoke.angleDeg * Math.PI) / 180;
              const nx = centerX + Math.cos(rad) * orbitRadius;
              const ny = centerY + Math.sin(rad) * orbitRadius;
              const isSelected = spoke.id === activeSpoke.id;

              const labelYOffset = ny < centerY - 80 ? -44 : ny > centerY + 80 ? 52 : 5;
              const labelXOffset =
                Math.abs(nx - centerX) < 35 ? 0 : nx < centerX ? -48 : 48;
              const anchor =
                Math.abs(nx - centerX) < 35
                  ? "middle"
                  : nx < centerX
                  ? "end"
                  : "start";

              return (
                <g
                  key={spoke.id}
                  className="ecosystem-node-group"
                  onClick={() => setActiveSpokeId(spoke.id)}
                  onMouseEnter={() => setActiveSpokeId(spoke.id)}
                >
                  {isSelected && (
                    <circle
                      cx={nx}
                      cy={ny}
                      r="39"
                      fill={spoke.color}
                      fillOpacity="0.18"
                    />
                  )}
                  <circle
                    cx={nx}
                    cy={ny}
                    r={isSelected ? 31 : 27}
                    fill="var(--bg-card)"
                    stroke={spoke.color}
                    strokeWidth={isSelected ? 3 : 2}
                  />
                  <text x={nx} y={ny + 6} textAnchor="middle" fontSize="20">
                    {spoke.icon}
                  </text>
                  <text
                    x={nx + labelXOffset}
                    y={ny + labelYOffset}
                    textAnchor={anchor}
                    fill={isSelected ? "var(--text-primary)" : "var(--text-secondary)"}
                    fontSize="12.5"
                    fontWeight={isSelected ? "800" : "600"}
                  >
                    ({spoke.code}) {spoke.shortTitle}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="ecosystem-detail-panel" style={{ borderTopColor: activeSpoke.color }}>
          <div className="eco-branch-badge" style={{ color: activeSpoke.color }}>
            NHÁNH DỊCH VỤ {activeSpoke.code}/05
          </div>
          <h4 className="eco-branch-title">
            {activeSpoke.icon} {activeSpoke.title}
          </h4>

          <div className="eco-info-block">
            <span className="eco-info-label">Chủ thể hưởng lợi trực tiếp</span>
            <p>{activeSpoke.beneficiaries}</p>
          </div>

          <div className="eco-info-block">
            <span className="eco-info-label">Hành vi chi tiêu thực tế</span>
            <p>{activeSpoke.spendingExamples}</p>
          </div>

          <div className="eco-spillover-highlight" style={{ borderColor: `${activeSpoke.color}66` }}>
            <strong>Giá trị lan tỏa địa phương:</strong> {activeSpoke.spilloverNote}
          </div>

          <div className="eco-quick-buttons">
            {ECOSYSTEM_SPOKES.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`eco-mini-btn ${s.id === activeSpoke.id ? "active" : ""}`}
                onClick={() => setActiveSpokeId(s.id)}
              >
                {s.code}. {s.shortTitle}
              </button>
            ))}
          </div>
        </div>
      </div>

      <figcaption className="viz-caption-footer">
        Mô hình tổng hợp chuỗi giá trị kinh tế đêm và du lịch âm nhạc (Music Tourism) từ Báo cáo RMIT 2025–2026 & thực tiễn các đại nhạc hội 2024–2026.
      </figcaption>
    </figure>
  );
}
