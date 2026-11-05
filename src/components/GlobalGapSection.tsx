"use client";

import { useState, useEffect } from "react";
import {
  ARTIST_ORIGIN_CORRELATION,
  SEA_RADAR_COUNTRIES,
  SEA_ARPU_2030,
  MOTION_GRAPHIC_90S_SCENES,
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
          <span className="pos-badge">
            NGUỒN GỐC NGHỆ SĨ & QUY MÔ KHÁN GIẢ
          </span>
          <h3 className="viz-title">
            Khoảng cách lộ diện: 101 đại nhạc hội thuần nội địa nhưng chỉ có 4 đêm diễn độc lập của sao quốc tế ở quy mô 10.000–40.000&nbsp;người
          </h3>
          <p className="viz-subtitle">
            Đối chiếu số lượng sự kiện âm nhạc năm 2025 theo nguồn gốc nghệ sĩ biểu diễn trên 6 phân khúc quy mô khán&nbsp;giả
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
        Nguồn: Trích xuất chính xác từ trang 30 Báo cáo Tổng quan ngành công nghiệp âm nhạc Việt Nam 2025–2026 (Đại học RMIT Việt Nam).
      </figcaption>
    </figure>
  );
}

/* ============================================================================
   [VỊ TRÍ 10] BIỂU ĐỒ RADAR 5 TRỤC & BẢNG SO SÁNH HẠ TẦNG ĐÔNG NAM Á
   ============================================================================ */
const RADAR_AXES = [
  { key: "venueStandard" as const, label: "Sân bãi có mái che" },
  { key: "publicTransit" as const, label: "Kết nối MRT / BTS" },
  { key: "techSupplyChain" as const, label: "Chuỗi thiết bị nội địa" },
  { key: "policyIncentive" as const, label: "Chính sách & Quỹ thu hút" },
  { key: "purchasingPower" as const, label: "Sức mua & ARPU" },
];

export function SeaInfrastructureRadarAndTable() {
  const [visibleIds, setVisibleIds] = useState<string[]>([
    "singapore",
    "thailand",
    "indonesia",
    "vietnam",
  ]);

  const toggleCountry = (id: string) => {
    setVisibleIds((prev) => {
      if (prev.includes(id)) {
        return prev.length > 1 ? prev.filter((item) => item !== id) : prev;
      }
      return [...prev, id];
    });
  };

  const cx = 195;
  const cy = 185;
  const maxR = 122;

  const getPoint = (axisIdx: number, scoreOutOf10: number) => {
    const angle = -Math.PI / 2 + (axisIdx * 2 * Math.PI) / RADAR_AXES.length;
    const r = (scoreOutOf10 / 10) * maxR;
    return {
      x: cx + Math.cos(angle) * r,
      y: cy + Math.sin(angle) * r,
    };
  };

  return (
    <figure className="viz-card" id="vi-tri-10">
      <div className="viz-header">
        <div>
          <span className="pos-badge">
            SO SÁNH HẠ TẦNG BIỂU DIỄN ĐÔNG NAM Á
          </span>
          <h3 className="viz-title">
            Đặt TP.HCM &amp; Hà&nbsp;Nội cạnh Singapore, Bangkok và Jakarta trên 5 trụ cột đón&nbsp;World&nbsp;Tour
          </h3>
          <p className="viz-subtitle">
            Bật/tắt từng quốc gia để đối chiếu tương quan 5 trụ cột hạ tầng kỹ thuật và ARPU nhạc số dự báo đến năm&nbsp;2030
          </p>
        </div>

        <div className="radar-country-toggles">
          {SEA_RADAR_COUNTRIES.map((c) => {
            const active = visibleIds.includes(c.id);
            return (
              <button
                key={c.id}
                type="button"
                className={`radar-toggle-chip ${active ? "on" : "off"}`}
                style={{
                  borderColor: active ? c.color : "var(--border-strong)",
                  color: active ? "var(--text-primary)" : "var(--text-muted)",
                }}
                onClick={() => toggleCountry(c.id)}
              >
                <span className="chip-dot" style={{ backgroundColor: c.color }} />
                <span>{c.country}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="radar-and-arpu-grid">
        {/* 5-Axis Radar SVG */}
        <div className="radar-svg-panel">
          <svg
            viewBox="0 0 390 365"
            className="radar-svg"
            role="img"
            aria-label="Đối chiếu 5 chỉ số hạ tầng biểu diễn Đông Nam Á"
          >
            {/* Concentric pentagons (2, 4, 6, 8, 10) */}
            {[2, 4, 6, 8, 10].map((level) => {
              const pts = RADAR_AXES.map((_, idx) => {
                const p = getPoint(idx, level);
                return `${p.x},${p.y}`;
              }).join(" ");
              return (
                <g key={level}>
                  <polygon
                    points={pts}
                    fill="none"
                    stroke="var(--svg-grid)"
                    strokeWidth={level === 10 ? 1.5 : 1}
                  />
                  <text
                    x={cx + 4}
                    y={cy - (level / 10) * maxR + 10}
                    fill="var(--text-muted)"
                    fontSize="9"
                  >
                    {level}
                  </text>
                </g>
              );
            })}

            {/* Axis lines & labels */}
            {RADAR_AXES.map((axis, idx) => {
              const outer = getPoint(idx, 10);
              const labelPos = getPoint(idx, 12.1);
              const anchor =
                Math.abs(labelPos.x - cx) < 18
                  ? "middle"
                  : labelPos.x < cx
                  ? "end"
                  : "start";
              return (
                <g key={axis.key}>
                  <line
                    x1={cx}
                    y1={cy}
                    x2={outer.x}
                    y2={outer.y}
                    stroke="var(--svg-axis)"
                    strokeWidth="1"
                  />
                  <text
                    x={labelPos.x}
                    y={labelPos.y}
                    textAnchor={anchor}
                    fill="var(--text-body)"
                    fontSize="10.5"
                    fontWeight="700"
                  >
                    {axis.label}
                  </text>
                </g>
              );
            })}

            {/* Country Polygons */}
            {SEA_RADAR_COUNTRIES.filter((c) => visibleIds.includes(c.id)).map((c) => {
              const pts = RADAR_AXES.map((axis, idx) => {
                const p = getPoint(idx, c.scores[axis.key]);
                return `${p.x},${p.y}`;
              }).join(" ");

              return (
                <g key={c.id}>
                  <polygon
                    points={pts}
                    fill={c.color}
                    fillOpacity={c.id === "vietnam" ? 0.24 : 0.12}
                    stroke={c.color}
                    strokeWidth={c.id === "vietnam" ? 2.8 : 2}
                  />
                  {RADAR_AXES.map((axis, idx) => {
                    const p = getPoint(idx, c.scores[axis.key]);
                    return (
                      <circle
                        key={`${c.id}-${axis.key}`}
                        cx={p.x}
                        cy={p.y}
                        r="3.5"
                        fill={c.color}
                      />
                    );
                  })}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Statista ARPU 2030 Side Comparison */}
        <div className="arpu-side-panel">
          <div className="arpu-panel-header">
            <span className="arpu-kicker">STATISTA MARKET INSIGHTS (TRANG 11 BÁO CÁO RMIT)</span>
            <h4>Doanh thu nhạc số bình quân / người dùng (ARPU dự báo 2025–2030)</h4>
          </div>

          <div className="arpu-bars-list">
            {SEA_ARPU_2030.map((item) => (
              <div
                key={item.country}
                className={`arpu-row ${item.isVietnam ? "vietnam-row" : ""}`}
              >
                <div className="arpu-row-meta">
                  <span>
                    #{item.rank} {item.country}
                    {item.note && <em className="arpu-inline-note"> ({item.note})</em>}
                  </span>
                  <strong>{item.arpuUsd.toFixed(2).replace(".", ",")} USD</strong>
                </div>
                <div className="arpu-bar-bg">
                  <div
                    className="arpu-bar-fill"
                    style={{
                      width: `${(item.arpuUsd / 46) * 100}%`,
                      backgroundColor: item.isVietnam ? "#DA251D" : "#38BDF8",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Methodological Disclaimer per Technical Spec */}
      <div className="radar-methodology-note">
        <strong>Lưu ý phương pháp luận:</strong> “Điểm số trên biểu đồ Radar (thang 1–10) là chỉ số đánh giá tổng hợp dựa trên tương quan thông số hạ tầng sân bãi, kết nối giao thông công cộng, chính sách hỗ trợ của chính phủ và chỉ số ARPU âm nhạc tại 4 quốc gia tính đến năm 2026.”
      </div>

      {/* Technical Comparison Table */}
      <div className="sea-table-scroll">
        <table className="sea-comparison-table">
          <thead>
            <tr>
              <th>Quốc gia & Tâm điểm</th>
              <th>Tổ hợp sân vận động / Arena</th>
              <th>Sức chứa & Kết cấu mái che</th>
              <th>Giao thông công cộng kết nối</th>
              <th>Chính sách & Quỹ hỗ trợ tiêu biểu</th>
            </tr>
          </thead>
          <tbody>
            {SEA_RADAR_COUNTRIES.map((c) => (
              <tr key={c.id} className={c.id === "vietnam" ? "highlight-vn-row" : ""}>
                <td>
                  <strong style={{ color: c.color }}>{c.country}</strong>
                  <div className="td-sub">{c.cities}</div>
                </td>
                <td>{c.venues}</td>
                <td>{c.capacityAndRoof}</td>
                <td>{c.transitConnection}</td>
                <td>{c.policyHighlight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

/* ============================================================================
   [VỊ TRÍ 11] VIDEO MOTION GRAPHIC GIẢI THÍCH (90 GIÂY) – ĐƯA SAO QUỐC TẾ VỀ VN
   ============================================================================ */
export function MotionGraphic90sPlayer() {
  const [sceneIdx, setSceneIdx] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [ticketPriceScenario, setTicketPriceScenario] = useState<"high-ticket" | "low-no-sponsor" | "sponsor-balanced">("sponsor-balanced");

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setSceneIdx((prev) => {
        if (prev < MOTION_GRAPHIC_90S_SCENES.length - 1) {
          return prev + 1;
        }
        setIsAutoPlaying(false);
        return 0;
      });
    }, 5500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const activeScene = MOTION_GRAPHIC_90S_SCENES[sceneIdx];

  return (
    <section className="viz-card motion-explainer-card" id="vi-tri-11" aria-label="Motion Graphic 90 giây giải thích hành trình đưa sao quốc tế về Việt Nam">
      <div className="viz-header">
        <div>
          <span className="pos-badge">
            HÀNH TRÌNH ĐƯA SAO QUỐC TẾ VỀ VIỆT NAM
          </span>
          <h3 className="viz-title">
            Từ khoản cọc 2 triệu USD đến bài toán cân não giá vé của Promoter&nbsp;nội&nbsp;địa
          </h3>
          <p className="viz-subtitle">
            Bấm phát tự động hoặc chọn từng phân cảnh trên thanh thời gian 90 giây để theo dõi đường đi của chi&nbsp;phí
          </p>
        </div>

        <button
          type="button"
          className={`motion-play-cta ${isAutoPlaying ? "playing" : ""}`}
          onClick={() => setIsAutoPlaying((prev) => !prev)}
        >
          {isAutoPlaying ? "⏸ Tạm dừng Motion Graphic" : "▶ Phát kịch bản 90s"}
        </button>
      </div>

      {/* Motion Graphic Viewport */}
      <div className="motion-stage-screen">
        <div className="motion-stage-topbar">
          <span className="motion-phase-pill">{activeScene.stageTitle}</span>
          <span className="motion-timecode">⏱ TIMECODE: {activeScene.timecode}</span>
        </div>

        <h4 className="motion-headline">{activeScene.headline}</h4>
        <p className="motion-narrative">{activeScene.narrative}</p>

        {/* Scene 1 Visual: Minimum Guarantee */}
        {sceneIdx === 0 && (
          <div className="mg-scene1-visual">
            <div className="mg-contract-box">
              <span className="mg-small-label">GLOBAL TOUR AGENCY</span>
              <div className="mg-big-usd">$2,000,000</div>
              <span className="mg-sub-note">Minimum Guarantee (Chưa tính chi phí sản xuất tại chỗ)</span>
            </div>
            <div className="mg-arrow-flow">➔</div>
            <div className="mg-promoter-meter">
              <span className="mg-small-label">ÁP LỰC PROMOTER NỘI ĐỊA</span>
              <p>Phải thanh toán bảo lãnh cứng dù chưa mở cổng bán vé và chưa có sân vận động mái che chuẩn sẵn sàng.</p>
            </div>
          </div>
        )}

        {/* Scene 2 Visual: 3 Cost Tollbooths */}
        {sceneIdx === 1 && activeScene.costCheckpoints && (
          <div className="mg-tollbooths-grid">
            {activeScene.costCheckpoints.map((cp) => (
              <div key={cp.station} className="mg-toll-card">
                <div className="mg-toll-header">
                  <span className="mg-station-badge">{cp.station}</span>
                  <span className="mg-cost-jump">{cp.costImpact}</span>
                </div>
                <h5>{cp.title}</h5>
                <p>{cp.detail}</p>
              </div>
            ))}
          </div>
        )}

        {/* Scene 3 Visual: Interactive Ticket vs. Sponsor Balance Simulator */}
        {sceneIdx === 2 && (
          <div className="mg-balance-simulator">
            <div className="mg-sim-buttons">
              <button
                type="button"
                className={ticketPriceScenario === "high-ticket" ? "active" : ""}
                onClick={() => setTicketPriceScenario("high-ticket")}
              >
                Phương án A: Đẩy giá vé thật cao bù chi phí
              </button>
              <button
                type="button"
                className={ticketPriceScenario === "low-no-sponsor" ? "active" : ""}
                onClick={() => setTicketPriceScenario("low-no-sponsor")}
              >
                Phương án B: Giữ giá vé mềm (Không nhà tài trợ)
              </button>
              <button
                type="button"
                className={ticketPriceScenario === "sponsor-balanced" ? "active" : ""}
                onClick={() => setTicketPriceScenario("sponsor-balanced")}
              >
                Phương án C: Đồng hành Tập đoàn / Ngân hàng lớn
              </button>
            </div>

            <div className="mg-sim-outcome">
              {ticketPriceScenario === "high-ticket" && (
                <p>
                  ❌ <strong>Kết cục rủi ro trống khán đài:</strong> Giá vé trung bình bị đẩy lên mức 5–12 triệu đồng vượt quá sức mua số đông khán giả đại chúng (ARPU 5,44 USD), chỉ bán hết hạng VIP nhưng ế các khu vé tầm trung.
                </p>
              )}
              {ticketPriceScenario === "low-no-sponsor" && (
                <p>
                  ❌ <strong>Kết cục Promoter cầm chắc phần lỗ:</strong> Khán đài lấp đầy 35.000–40.000 khán giả nhưng tổng tiền vé không đủ bù khoản cọc 2 triệu USD cộng 3 trạm đội chi phí sân bãi – nhập khẩu thiết bị.
                </p>
              )}
              {ticketPriceScenario === "sponsor-balanced" && (
                <p>
                  ✅ <strong>Lời giải khả thi hiện tại:</strong> Ngân hàng / Tập đoàn lớn gánh 30–40% chi phí qua gói Title Sponsor, kết hợp cơ chế ưu đãi thuế & hạ tầng PPP để giữ giá vé vừa túi tiền khán giả Việt mà NSX vẫn bảo toàn dòng vốn.
                </p>
              )}
            </div>
          </div>
        )}

        <div className="motion-cue-footer">🎬 Chỉ dẫn đồ họa: {activeScene.visualCue}</div>
      </div>

      {/* 3-Segment Timeline Scrubber */}
      <div className="motion-scrubber-bar">
        {MOTION_GRAPHIC_90S_SCENES.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            className={`motion-scrub-seg ${idx === sceneIdx ? "active" : ""}`}
            onClick={() => {
              setSceneIdx(idx);
              setIsAutoPlaying(false);
            }}
          >
            <span className="scrub-time">{s.timecode}</span>
            <span className="scrub-name">{s.stageTitle.split("•")[1]?.trim()}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
