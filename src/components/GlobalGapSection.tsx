"use client";

import { useState } from "react";
import {
  ARTIST_ORIGIN_CORRELATION,
  SEA_REGIONAL_CARDS,
  SEA_ARPU_2030,
} from "@/data/articleData";

/* ============================================================================
   [VỊ TRÍ 9] BIỂU ĐỒ CỘT GHÉP: TƯƠNG QUAN NGUỒN GỐC NGHỆ SĨ & QUY MÔ KHÁN GIẢ
   ============================================================================ */
export function ArtistOriginGroupedChart() {
  const [selectedScale, setSelectedScale] = useState<string>("10.000 – 40.000 người");
  const maxEvents = 210;

  const activeItem =
    ARTIST_ORIGIN_CORRELATION.find((r) => r.scale === selectedScale) ||
    ARTIST_ORIGIN_CORRELATION[4];

  const totalInActive =
    activeItem.domesticOnly + activeItem.internationalOnly + activeItem.combined;
  const intlPct = ((activeItem.internationalOnly / totalInActive) * 100)
    .toFixed(1)
    .replace(".", ",");

  return (
    <figure className="viz-card" id="vi-tri-9">
      <div className="viz-header">
        <div>
          <h3 className="viz-title">
            Sự chênh lệch giữa concert nội địa và quốc tế
          </h3>
          <p className="viz-subtitle">
            Đối chiếu số lượng sự kiện âm nhạc năm 2025 trên 6 phân khúc quy mô khán giả
          </p>
        </div>
      </div>

      <div className="grouped-legend-row">
        <span>
          <i style={{ backgroundColor: "var(--accent-blue)" }} /> Chỉ có Nghệ sĩ Nội địa
        </span>
        <span>
          <i style={{ backgroundColor: "var(--accent-rose)" }} /> Chỉ có Nghệ sĩ Quốc tế
        </span>
        <span>
          <i style={{ backgroundColor: "var(--accent-amber)" }} /> Kết hợp Nội địa & Quốc tế
        </span>
      </div>

      <div className="grouped-bars-grid">
        {ARTIST_ORIGIN_CORRELATION.map((row) => {
          const isSelected = row.scale === activeItem.scale;
          return (
            <div
              key={row.scale}
              className={`grouped-tier-col ${row.highlight ? "tier-highlight" : ""} ${
                isSelected ? "tier-selected" : ""
              }`}
              onClick={() => setSelectedScale(row.scale)}
              onMouseEnter={() => setSelectedScale(row.scale)}
            >
              <div className="grouped-columns-stage">
                <div className="g-bar-wrap">
                  <span className="g-bar-num" style={{ color: "var(--accent-blue)" }}>
                    {row.domesticOnly}
                  </span>
                  <div
                    className="g-bar"
                    style={{
                      height: `${Math.max(4, (row.domesticOnly / maxEvents) * 100)}%`,
                      backgroundColor: "var(--accent-blue)",
                    }}
                  />
                </div>

                <div className="g-bar-wrap">
                  <span className="g-bar-num" style={{ color: "var(--accent-rose)" }}>
                    {row.internationalOnly}
                  </span>
                  <div
                    className="g-bar"
                    style={{
                      height: `${Math.max(3, (row.internationalOnly / maxEvents) * 100)}%`,
                      backgroundColor: "var(--accent-rose)",
                    }}
                  />
                </div>

                <div className="g-bar-wrap">
                  <span className="g-bar-num" style={{ color: "var(--accent-amber)" }}>
                    {row.combined}
                  </span>
                  <div
                    className="g-bar"
                    style={{
                      height: `${Math.max(3, (row.combined / maxEvents) * 100)}%`,
                      backgroundColor: "var(--accent-amber)",
                    }}
                  />
                </div>
              </div>

              <div className="grouped-scale-label">
                {row.scale}
                {row.highlight && <span className="gap-alert-dot">Chênh lệch lớn</span>}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grouped-callout-strip">
        <div>
          <strong>Phân khúc đang chọn ({activeItem.scale}):</strong> Tổng cộng{" "}
          <strong>{totalInActive} sự kiện</strong> — trong đó chương trình độc lập của nghệ sĩ quốc tế chỉ chiếm{" "}
          <strong style={{ color: "var(--accent-rose)" }}>
            {activeItem.internationalOnly} sự kiện ({intlPct}%)
          </strong>
          , nghệ sĩ nội địa áp đảo với{" "}
          <strong style={{ color: "var(--accent-blue)" }}>{activeItem.domesticOnly} sự kiện</strong> (và{" "}
          {activeItem.combined} sự kiện kết hợp).
        </div>
      </div>

      <figcaption className="viz-caption-footer">
        Nguồn: Trích xuất chính xác từ trang 30 Báo cáo Tổng quan ngành công nghiệp âm nhạc Việt Nam 2025–2026 (Trường Đại học RMIT Việt Nam).
      </figcaption>
    </figure>
  );
}

/* ============================================================================
   [VỊ TRÍ 10 - SỬA GỌN] 4 THẺ SO SÁNH NGANG CUỘC ĐUA ĐÔNG NAM Á
   (Singapore, Thái Lan, Indonesia, Malaysia) — đặt cuối Mục 1
   ============================================================================ */
export function SeaRegionalComparisonCards() {
  return (
    <figure className="viz-card" id="vi-tri-10">
      <div className="viz-header">
        <div>
          <span className="pos-badge">CUỘC ĐUA ĐÔNG NAM Á • CƠ CHẾ &amp; NGÂN SÁCH</span>
          <h3 className="viz-title">
            Các quốc gia Đông&nbsp;Nam&nbsp;Á đang đầu tư gì để giành quyền đăng cai World&nbsp;Tour?
          </h3>
          <p className="viz-subtitle">
            Đối chiếu chiến lược thu hút siêu sao quốc tế tại 4 trung tâm biểu diễn năng động nhất khu vực giai đoạn&nbsp;2025–2026
          </p>
        </div>
      </div>

      <div className="sea-regional-cards-grid">
        {SEA_REGIONAL_CARDS.map((card) => (
          <article
            key={card.id}
            className="sea-regional-card"
            style={{ borderTopColor: card.accentColor }}
          >
            <div className="sea-card-top">
              <span className="sea-card-flag" aria-hidden="true">
                {card.flag}
              </span>
              <div>
                <h4 className="sea-card-country">{card.country}</h4>
                <span className="sea-card-strategy" style={{ color: card.accentColor }}>
                  {card.strategyLabel}
                </span>
              </div>
            </div>

            <div className="sea-card-metric-box">
              <span className="sea-card-big-num" style={{ color: card.accentColor }}>
                {card.headlineMetric}
              </span>
              <span className="sea-card-metric-unit">{card.metricUnit}</span>
            </div>

            <p className="sea-card-summary">{card.summary}</p>

            <div className="sea-card-footnote">
              <span
                className="sea-card-dot"
                style={{ backgroundColor: card.accentColor }}
                aria-hidden="true"
              />
              <span>{card.highlightFact}</span>
            </div>
          </article>
        ))}
      </div>

      <figcaption className="viz-caption-footer">
        Nguồn: Báo cáo Tổng quan ngành công nghiệp âm nhạc Việt Nam 2025–2026 (Trường Đại học RMIT Việt Nam, Trang 14–15).
      </figcaption>
    </figure>
  );
}

/* ============================================================================
   [BỔ SUNG MỚI] BIỂU ĐỒ CỘT NGANG ARPU NHẠC SỐ ĐÔNG NAM Á (DỰ BÁO NĂM 2030)
   Đặt trong Mục 2 — Điểm nghẽn chi phí & khoảng cách sức mua trung bình
   ============================================================================ */
export function SeaArpuHorizontalChart() {
  const maxArpu = 46;

  return (
    <figure className="viz-card sea-arpu-chart-card" id="bieu-do-arpu">
      <div className="viz-header">
        <div>
          <span className="pos-badge">STATISTA MARKET INSIGHTS • DỰ BÁO NĂM 2030</span>
          <h3 className="viz-title">
            Khoảng cách doanh thu nhạc số bình quân trên mỗi người dùng (ARPU) tại Đông&nbsp;Nam&nbsp;Á
          </h3>
          <p className="viz-subtitle">
            Mức 5,44 USD/người của Việt&nbsp;Nam đứng thứ 6 khu vực — cách rất xa Singapore (45,38 USD) và chưa bằng một nửa Thái&nbsp;Lan (12,06 USD)
          </p>
        </div>
      </div>

      <div className="arpu-bars-list arpu-standalone-list">
        {SEA_ARPU_2030.map((item) => {
          const widthPct = Math.max(8, (item.arpuUsd / maxArpu) * 100);
          return (
            <div
              key={item.country}
              className={`arpu-row ${item.isVietnam ? "vietnam-row" : ""}`}
            >
              <div className="arpu-row-meta">
                <span>
                  <strong>#{item.rank} {item.country}</strong>
                  {item.note && <em className="arpu-inline-note"> — {item.note}</em>}
                </span>
                <strong
                  style={{
                    color: item.isVietnam ? "#E11D48" : "var(--text-primary)",
                  }}
                >
                  {item.arpuUsd.toFixed(2).replace(".", ",")} USD
                </strong>
              </div>
              <div className="arpu-bar-bg arpu-bar-lg">
                <div
                  className="arpu-bar-fill"
                  style={{
                    width: `${widthPct}%`,
                    backgroundColor: item.isVietnam ? "#E11D48" : "#0284C7",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grouped-callout-strip" style={{ marginTop: "1.1rem" }}>
        <div>
          <strong>Ý nghĩa với nhà tổ chức World&nbsp;Tour:</strong> Chỉ số ARPU là “thước đo” phản ánh thói quen chi trả bản quyền và khả năng hấp thụ giá vé cao của số đông. Với mức dự báo <strong>5,44 USD/người vào năm 2030</strong> (bằng ~1/8 Singapore), các nhà tổ chức độc lập rất khó cân đối phí bảo lãnh hàng triệu USD nếu thiếu nguồn lực tài trợ lớn.
        </div>
      </div>

      <figcaption className="viz-caption-footer">
        Nguồn: Dự báo của Statista Market Insights trích dẫn tại Trang 11 Báo cáo Tổng quan ngành công nghiệp âm nhạc Việt Nam 2025–2026 (Đại học RMIT Việt Nam).
      </figcaption>
    </figure>
  );
}

/* ============================================================================
   [VỊ TRÍ 11] VIDEO MOTION GRAPHIC GIẢI THÍCH – ĐƯA SAO QUỐC TẾ VỀ VN
   ============================================================================ */
export function MotionGraphic90sPlayer() {
  return (
    <div
      className="motion-explainer-card"
      id="vi-tri-11"
      aria-label="Video Motion Graphic giải thích hành trình đưa sao quốc tế về Việt Nam"
    >
      <video
        controls
        playsInline
        preload="metadata"
        poster="/motion-graphic-poster.jpg"
        className="motion-video-player"
      >
        <source src="/motion-graphic-promoter.mp4" type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ thẻ video HTML5.
      </video>
    </div>
  );
}
