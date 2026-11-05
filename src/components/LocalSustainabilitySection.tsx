"use client";

import { useState, useRef } from "react";
import {
  VIETNAM_HEATMAP_HUBS,
  SANKEY_ORGANIZER_INPUTS,
  SANKEY_REVENUE_STREAMS,
  SANKEY_COST_OUTPUTS,
} from "@/data/articleData";

/* ============================================================================
   [VỊ TRÍ 6] BẢN ĐỒ NHIỆT: PHÂN BỐ SỰ KIỆN & KHẢ NĂNG GIỮ CHÂN DU KHÁCH
   ============================================================================ */
export function VietnamEventHeatmap() {
  const [selectedHubId, setSelectedHubId] = useState<string>("tphcm");
  const [clusterFilter, setClusterFilter] = useState<"all" | "high-density" | "music-tourism">("all");

  const visibleHubs =
    clusterFilter === "all"
      ? VIETNAM_HEATMAP_HUBS
      : VIETNAM_HEATMAP_HUBS.filter((h) => h.clusterType === clusterFilter);

  const activeHub =
    visibleHubs.find((h) => h.id === selectedHubId) ||
    visibleHubs[0] ||
    VIETNAM_HEATMAP_HUBS[0];

  return (
    <figure className="viz-card" id="vi-tri-6">
      <div className="viz-header">
        <div>
          <span className="pos-badge">
            PHÂN BỐ SỰ KIỆN & GIỮ CHÂN DU KHÁCH
          </span>
          <h3 className="viz-title">
            Hai cực đại nhạc hội và bài toán: Khán giả lưu trú qua đêm hay “xem xong rời đi ngay”?
          </h3>
          <p className="viz-subtitle">
            Rê chuột hoặc nhấp vào từng cụm điểm nóng để đối chiếu mật độ biểu diễn và tỷ lệ giữ chân du khách lưu trú
          </p>
        </div>

        <div className="viz-tabs">
          <button
            type="button"
            className={`viz-tab-btn ${clusterFilter === "all" ? "active" : ""}`}
            onClick={() => setClusterFilter("all")}
          >
            Toàn quốc (7 tâm điểm)
          </button>
          <button
            type="button"
            className={`viz-tab-btn ${clusterFilter === "high-density" ? "active" : ""}`}
            onClick={() => {
              setClusterFilter("high-density");
              setSelectedHubId("tphcm");
            }}
          >
            🔥 Cực mật độ cao
          </button>
          <button
            type="button"
            className={`viz-tab-btn ${clusterFilter === "music-tourism" ? "active" : ""}`}
            onClick={() => {
              setClusterFilter("music-tourism");
              setSelectedHubId("danang");
            }}
          >
            🏖 Cực du lịch âm nhạc
          </button>
        </div>
      </div>

      <div className="heatmap-layout">
        <div className="heatmap-svg-box">
          <svg
            viewBox="0 0 460 610"
            className="vietnam-heatmap-svg"
            role="img"
            aria-label="Bản đồ nhiệt phân bố sự kiện âm nhạc tại Việt Nam"
          >
            <defs>
              <radialGradient id="heatHigh" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#E11D48" stopOpacity="0.65" />
                <stop offset="50%" stopColor="#DA251D" stopOpacity="0.24" />
                <stop offset="100%" stopColor="#DA251D" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="heatTourism" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.6" />
                <stop offset="55%" stopColor="#38BDF8" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Subtle coordinate grid */}
            <g stroke="var(--svg-grid)" strokeWidth="0.7" strokeDasharray="3 5">
              <line x1="0" y1="140" x2="460" y2="140" />
              <line x1="0" y1="300" x2="460" y2="300" />
              <line x1="0" y1="460" x2="460" y2="460" />
              <line x1="150" y1="0" x2="150" y2="610" />
              <line x1="310" y1="0" x2="310" y2="610" />
            </g>

            {/* Stylized S-curve silhouette of Vietnam mainland + Phu Quoc + Con Dao */}
            <path
              d="M 185 48 L 236 52 L 268 78 L 280 112 L 252 142 L 228 168 L 216 208 L 245 252 L 288 308 L 310 356 L 315 412 L 298 462 L 265 498 L 246 534 L 208 566 L 186 552 L 195 512 L 214 480 L 246 446 L 268 402 L 264 348 L 236 300 L 202 252 L 186 204 L 178 156 L 146 120 L 154 78 Z"
              fill="var(--map-land)"
              stroke="var(--map-stroke)"
              strokeWidth="1.8"
            />
            {/* Phú Quốc */}
            <ellipse cx="164" cy="518" rx="8" ry="13" fill="var(--map-land)" stroke="var(--map-stroke)" strokeWidth="1.3" />
            {/* Côn Đảo */}
            <circle cx="248" cy="570" r="4.5" fill="var(--map-land)" stroke="var(--map-stroke)" strokeWidth="1.2" />

            {/* Quần đảo Hoàng Sa & Trường Sa (Chủ quyền biển đảo Việt Nam) */}
            <g opacity="0.95">
              <circle cx="378" cy="272" r="3" fill="var(--vn-red)" />
              <circle cx="390" cy="278" r="2.5" fill="var(--vn-red)" />
              <circle cx="372" cy="283" r="2" fill="var(--vn-red)" />
              <text x="382" y="299" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5" fontWeight="700">
                QĐ. Hoàng Sa (Việt Nam)
              </text>

              <circle cx="384" cy="482" r="3" fill="var(--vn-red)" />
              <circle cx="396" cy="490" r="2.5" fill="var(--vn-red)" />
              <circle cx="374" cy="495" r="2.2" fill="var(--vn-red)" />
              <text x="382" y="512" textAnchor="middle" fill="var(--text-secondary)" fontSize="9.5" fontWeight="700">
                QĐ. Trường Sa (Việt Nam)
              </text>
            </g>

            {/* Heat Plumes + Interactive Markers */}
            {visibleHubs.map((hub) => {
              const isSelected = hub.id === activeHub.id;
              const isHigh = hub.clusterType === "high-density";
              const coreColor = isHigh ? "var(--accent-rose)" : "var(--accent-blue)";

              return (
                <g
                  key={hub.id}
                  className="heatmap-hub-pin"
                  onClick={() => setSelectedHubId(hub.id)}
                  onMouseEnter={() => setSelectedHubId(hub.id)}
                >
                  <circle
                    cx={hub.x}
                    cy={hub.y}
                    r={isSelected ? hub.heatRadius * 1.18 : hub.heatRadius}
                    fill={isHigh ? "url(#heatHigh)" : "url(#heatTourism)"}
                  />
                  <circle
                    cx={hub.x}
                    cy={hub.y}
                    r={isSelected ? 8.5 : 6}
                    fill={coreColor}
                    stroke="var(--bg-card)"
                    strokeWidth={isSelected ? 2.5 : 1.5}
                  />
                  <text
                    x={hub.x < 225 ? hub.x - 13 : hub.x + 13}
                    y={hub.y + 4}
                    textAnchor={hub.x < 225 ? "end" : "start"}
                    fill={isSelected ? "var(--text-primary)" : "var(--text-secondary)"}
                    fontSize={isSelected ? "12" : "10.8"}
                    fontWeight={isSelected ? "800" : "600"}
                  >
                    {hub.city}
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="heatmap-legend-strip">
            <span>
              <i className="dot-high" /> Cực tăng trưởng mật độ cao (Hà Nội, TP.HCM)
            </span>
            <span>
              <i className="dot-tourism" /> Cực du lịch âm nhạc (Quảng Ninh, Huế, Đà Nẵng, Quảng Bình, Đà Lạt)
            </span>
          </div>
        </div>

        {/* Tooltip / Retention Analysis Card */}
        <div className="heatmap-detail-card">
          <span
            className={`hub-cluster-badge ${
              activeHub.clusterType === "high-density" ? "high" : "tourism"
            }`}
          >
            {activeHub.clusterLabel}
          </span>

          <h4 className="hub-city-heading">{activeHub.city}</h4>
          <p className="hub-volume-stat">{activeHub.eventVolumeStat}</p>

          <div className="hub-events-box">
            <div className="hub-box-title">Sự kiện & Đại nhạc hội tiêu biểu</div>
            <p>{activeHub.flagshipEvents}</p>
          </div>

          <div className="hub-retention-meter">
            <div className="retention-meter-top">
              <span>Chỉ số giữ chân du khách lưu trú qua đêm</span>
              <strong>{activeHub.retentionScore}/100</strong>
            </div>
            <div className="retention-bar-track">
              <div
                className="retention-bar-fill"
                style={{ width: `${activeHub.retentionScore}%` }}
              />
            </div>
            <div className="retention-status-label">{activeHub.retentionLevel}</div>
          </div>

          <div className="hub-overnight-analysis">
            <div className="hub-box-title">
              🏨 Lưu trú qua đêm vs. “Đến xem rồi rời đi ngay trong đêm”
            </div>
            <p>{activeHub.overnightVsLeaveAnalysis}</p>
          </div>
        </div>
      </div>

      <figcaption className="viz-caption-footer">
        Nguồn: Tổng hợp từ Sở VH&TT TP.HCM (10/2026), Bộ VHTTDL, Báo cáo RMIT 2025–2026 & phân tích tại Hội thảo Công nghiệp văn hóa tháng 10/2026.
      </figcaption>
    </figure>
  );
}

/* ============================================================================
   [VỊ TRÍ 7] BIỂU ĐỒ SANKEY: DÒNG TIỀN & ĐƠN VỊ VẬN HÀNH CONCERT CHẢY ĐI ĐÂU?
   ============================================================================ */
export function ConcertCashflowSankey() {
  const [selectedNodeInfo, setSelectedNodeInfo] = useState<{
    badge: string;
    title: string;
    desc: string;
    subNote?: string;
    color: string;
  }>({
    badge: "ĐẦU RA TỶ TRỌNG LỚN NHẤT (~42%)",
    title: "Hạ tầng sân bãi & Thiết bị Âm thanh / Ánh sáng / Sân khấu",
    desc: SANKEY_COST_OUTPUTS[0].recipient,
    subNote: SANKEY_COST_OUTPUTS[0].painPoint,
    color: SANKEY_COST_OUTPUTS[0].color,
  });

  // Precompute Y positions in 380px SVG canvas (top=24, bottom=356 -> usable height 332)
  const leftNodes = SANKEY_ORGANIZER_INPUTS.reduce<
    {
      node: (typeof SANKEY_ORGANIZER_INPUTS)[number];
      y: number;
      h: number;
    }[]
  >((acc, node, idx) => {
    const gap = 10;
    const totalAvailable = 300;
    const h = Math.max(16, (node.share / 100) * totalAvailable);
    const prevBottom = idx === 0 ? 22 : acc[idx - 1].y + acc[idx - 1].h + gap;
    acc.push({ node, y: prevBottom, h });
    return acc;
  }, []);

  const midNodes = SANKEY_REVENUE_STREAMS.reduce<
    {
      node: (typeof SANKEY_REVENUE_STREAMS)[number];
      y: number;
      h: number;
    }[]
  >((acc, node, idx) => {
    const gap = 18;
    const totalAvailable = 290;
    const h = Math.max(28, (node.shareEstimate / 100) * totalAvailable);
    const prevBottom = idx === 0 ? 32 : acc[idx - 1].y + acc[idx - 1].h + gap;
    acc.push({ node, y: prevBottom, h });
    return acc;
  }, []);

  const rightNodes = SANKEY_COST_OUTPUTS.reduce<
    {
      node: (typeof SANKEY_COST_OUTPUTS)[number];
      y: number;
      h: number;
    }[]
  >((acc, node, idx) => {
    const gap = 14;
    const totalAvailable = 296;
    const h = Math.max(22, (node.visualWeight / 100) * totalAvailable);
    const prevBottom = idx === 0 ? 26 : acc[idx - 1].y + acc[idx - 1].h + gap;
    acc.push({ node, y: prevBottom, h });
    return acc;
  }, []);

  return (
    <figure className="viz-card" id="vi-tri-7">
      <div className="viz-header">
        <div>
          <span className="pos-badge">
            DÒNG TIỀN & ĐƠN VỊ VẬN HÀNH CONCERT CHẢY ĐI ĐÂU?
          </span>
          <h3 className="viz-title">
            Giải phẫu dòng tiền một đêm đại nhạc hội: Vì sao “cháy vé” vẫn đối mặt nguy cơ thua lỗ?
          </h3>
          <p className="viz-subtitle">
            Kết hợp cơ cấu chủ thể tổ chức (Báo cáo RMIT trang 30), 3 nguồn thu đầu vào và 4 nhánh phân bổ chi phí – lợi nhuận đầu ra
          </p>
        </div>
      </div>

      <div className="sankey-column-headers">
        <div>1. CHỦ THỂ ĐẦU TƯ VẬN HÀNH (RMIT)</div>
        <div>2. CƠ CẤU NGUỒN THU CONCERT</div>
        <div>3. DÒNG TIỀN CHI PHÍ & LỢI NHUẬN</div>
      </div>

      <div className="sankey-svg-scroll">
        <svg
          viewBox="0 0 920 385"
          className="sankey-svg"
          role="img"
          aria-label="Biểu đồ Sankey dòng tiền của một đêm concert tại Việt Nam"
        >
          {/* Curved Sankey Ribbons: Left -> Middle */}
          {leftNodes.map((ln, lIdx) => {
            const targetMid = midNodes[lIdx % midNodes.length];
            const y1 = ln.y + ln.h / 2;
            const y2 = targetMid.y + targetMid.h / 2;
            return (
              <path
                key={`lm-${ln.node.id}`}
                d={`M 238 ${y1} C 310 ${y1}, 325 ${y2}, 395 ${y2}`}
                fill="none"
                stroke={ln.node.color}
                strokeWidth={Math.max(6, ln.h * 0.55)}
                strokeOpacity="0.28"
              />
            );
          })}

          {/* Extra cross-ribbons Left -> Sponsor/Ticket for realism */}
          <path
            d={`M 238 ${leftNodes[0].y + 28} C 315 ${leftNodes[0].y + 28}, 320 ${midNodes[1].y + 25}, 395 ${midNodes[1].y + 25}`}
            fill="none"
            stroke="#38BDF8"
            strokeWidth="16"
            strokeOpacity="0.2"
          />
          <path
            d={`M 238 ${leftNodes[3].y + 12} C 315 ${leftNodes[3].y + 12}, 325 ${midNodes[1].y + 40}, 395 ${midNodes[1].y + 40}`}
            fill="none"
            stroke="#F59E0B"
            strokeWidth="18"
            strokeOpacity="0.32"
          />

          {/* Curved Sankey Ribbons: Middle -> Right */}
          {midNodes.map((mn) =>
            rightNodes.map((rn) => {
              const weight = (mn.h * (rn.node.visualWeight / 100)) * 0.72;
              const yStart = mn.y + mn.h * 0.45;
              const yEnd = rn.y + rn.h * 0.5;
              return (
                <path
                  key={`mr-${mn.node.id}-${rn.node.id}`}
                  d={`M 545 ${yStart} C 618 ${yStart}, 630 ${yEnd}, 698 ${yEnd}`}
                  fill="none"
                  stroke={rn.node.color}
                  strokeWidth={Math.max(3, weight)}
                  strokeOpacity="0.26"
                />
              );
            })
          )}

          {/* Left Column Nodes */}
          {leftNodes.map(({ node, y, h }) => (
            <g
              key={node.id}
              className="sankey-node-interactive"
              onMouseEnter={() =>
                setSelectedNodeInfo({
                  badge: `CHỦ THỂ VẬN HÀNH • ${node.share.toFixed(1).replace(".", ",")}% SỰ KIỆN`,
                  title: node.label,
                  desc: node.description,
                  color: node.color,
                })
              }
              onClick={() =>
                setSelectedNodeInfo({
                  badge: `CHỦ THỂ VẬN HÀNH • ${node.share.toFixed(1).replace(".", ",")}% SỰ KIỆN`,
                  title: node.label,
                  desc: node.description,
                  color: node.color,
                })
              }
            >
              <rect x="218" y={y} width="20" height={h} rx="4" fill={node.color} />
              <text x="208" y={y + h / 2 - 2} textAnchor="end" fill="var(--text-primary)" fontSize="11.5" fontWeight="700">
                {node.label}
              </text>
              <text x="208" y={y + h / 2 + 12} textAnchor="end" fill={node.color} fontSize="11" fontWeight="800">
                {node.share.toFixed(1).replace(".", ",")}%
              </text>
            </g>
          ))}

          {/* Middle Column Nodes (Revenue Pool) */}
          {midNodes.map(({ node, y, h }) => (
            <g
              key={node.id}
              className="sankey-node-interactive"
              onMouseEnter={() =>
                setSelectedNodeInfo({
                  badge: `NGUỒN THU ĐẦU VÀO • TỶ TRỌNG THAM CHIẾU ~${node.shareEstimate}%`,
                  title: node.label,
                  desc: node.detail,
                  color: node.color,
                })
              }
              onClick={() =>
                setSelectedNodeInfo({
                  badge: `NGUỒN THU ĐẦU VÀO • TỶ TRỌNG THAM CHIẾU ~${node.shareEstimate}%`,
                  title: node.label,
                  desc: node.detail,
                  color: node.color,
                })
              }
            >
              <rect
                x="395"
                y={y}
                width="150"
                height={h}
                rx="8"
                fill="var(--bg-card)"
                stroke={node.color}
                strokeWidth="2"
              />
              <text x="470" y={y + h / 2 - 4} textAnchor="middle" fill="var(--text-primary)" fontSize="11" fontWeight="800">
                {node.label.split("(")[0].trim()}
              </text>
              <text x="470" y={y + h / 2 + 12} textAnchor="middle" fill={node.color} fontSize="11" fontWeight="700">
                ~{node.shareEstimate}% tổng thu
              </text>
            </g>
          ))}

          {/* Right Column Nodes (Cost & Profit Allocation) */}
          {rightNodes.map(({ node, y, h }) => (
            <g
              key={node.id}
              className="sankey-node-interactive"
              onMouseEnter={() =>
                setSelectedNodeInfo({
                  badge: `PHÂN BỔ ĐẦU RA • ${node.shareRange.toUpperCase()}`,
                  title: node.label,
                  desc: `Đơn vị thụ hưởng: ${node.recipient}`,
                  subNote: `Điểm nghẽn tài chính: ${node.painPoint}`,
                  color: node.color,
                })
              }
              onClick={() =>
                setSelectedNodeInfo({
                  badge: `PHÂN BỔ ĐẦU RA • ${node.shareRange.toUpperCase()}`,
                  title: node.label,
                  desc: `Đơn vị thụ hưởng: ${node.recipient}`,
                  subNote: `Điểm nghẽn tài chính: ${node.painPoint}`,
                  color: node.color,
                })
              }
            >
              <rect x="698" y={y} width="20" height={h} rx="4" fill={node.color} />
              <text x="728" y={y + h / 2 - 3} textAnchor="start" fill="var(--text-primary)" fontSize="11.5" fontWeight="700">
                {node.label.length > 34 ? `${node.label.slice(0, 34)}…` : node.label}
              </text>
              <text x="728" y={y + h / 2 + 12} textAnchor="start" fill={node.color} fontSize="11" fontWeight="800">
                {node.shareRange}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Selected Stream Inspector */}
      <div className="sankey-inspector-box" style={{ borderLeftColor: selectedNodeInfo.color }}>
        <div className="sankey-inspector-badge" style={{ color: selectedNodeInfo.color }}>
          {selectedNodeInfo.badge}
        </div>
        <h4>{selectedNodeInfo.title}</h4>
        <p>{selectedNodeInfo.desc}</p>
        {selectedNodeInfo.subNote && (
          <p className="sankey-pain-note">⚠️ {selectedNodeInfo.subNote}</p>
        )}
      </div>

      <figcaption className="viz-caption-footer">
        Nguồn: Cơ cấu đơn vị tổ chức trích từ trang 30 Báo cáo RMIT 2025–2026; cấu trúc phân bổ dòng tiền tổng hợp từ ý kiến các nhà sản xuất tại Hội thảo Công nghiệp concert tháng 10/2026.
      </figcaption>
    </figure>
  );
}

/* ============================================================================
   [VỊ TRÍ 8] PHOTO STORY / INTERACTIVE SLIDER: ĐÊM RỰC SÁNG VS. SÁNG THÁO DỠ
   ============================================================================ */
export function StageTeardownSlider() {
  const [sliderPos, setSliderPos] = useState<number>(52);
  const frameRef = useRef<HTMLDivElement | null>(null);

  const updateFromClientX = (clientX: number) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(96, Math.max(4, pct)));
  };

  return (
    <figure className="viz-card" id="vi-tri-8">
      <div className="viz-header">
        <div>
          <span className="pos-badge">
            HẬU TRƯỜNG THÁO DỠ & RÁC THẢI SỰ KIỆN
          </span>
          <h3 className="viz-title">
            22h00 đêm thăng hoa vs. 06h00 sáng hôm sau: “Đừng để đêm trước vỗ tay, sáng sau tháo sân khấu là xong công nghiệp văn hóa”
          </h3>
          <p className="viz-subtitle">
            Kéo thanh trượt ngang để đối chiếu hai lát cắt đối lập tại cùng một mặt sân vận động chỉ cách nhau 8 tiếng đồng hồ
          </p>
        </div>
      </div>

      <div
        ref={frameRef}
        className="juxtapose-stage"
        onMouseMove={(e) => {
          if (e.buttons === 1) updateFromClientX(e.clientX);
        }}
        onTouchMove={(e) => {
          if (e.touches[0]) updateFromClientX(e.touches[0].clientX);
        }}
        onClick={(e) => updateFromClientX(e.clientX)}
      >
        {/* RIGHT LAYER (AFTER - 06:00 AM TEARDOWN & PLASTIC WASTE) */}
        <div className="juxtapose-layer layer-after">
          <svg viewBox="0 0 900 440" preserveAspectRatio="xMidYMid slice" className="juxtapose-svg">
            <defs>
              <linearGradient id="dawnSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="60%" stopColor="#64748B" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
            </defs>
            <rect width="900" height="440" fill="url(#dawnSky)" />
            {/* Bare dismantled steel truss skeleton */}
            <g stroke="#1E293B" strokeWidth="4" fill="none">
              <rect x="250" y="95" width="400" height="175" />
              <line x1="250" y1="95" x2="650" y2="270" />
              <line x1="650" y1="95" x2="250" y2="270" />
              <line x1="170" y1="125" x2="170" y2="270" />
              <line x1="730" y1="125" x2="730" y2="270" />
              {/* Crane boom */}
              <line x1="770" y1="270" x2="620" y2="55" stroke="#F59E0B" strokeWidth="6" />
              <line x1="620" y1="55" x2="620" y2="145" stroke="#1E293B" strokeWidth="2" />
            </g>
            {/* Worn turf field */}
            <rect x="0" y="270" width="900" height="170" fill="#3B4238" />
            {/* Scattered single-use raincoats, plastic bottles, banners */}
            {Array.from({ length: 42 }, (_, idx) => {
              const rx = 45 + ((idx * 79) % 810);
              const ry = 290 + ((idx * 37) % 125);
              const fill =
                idx % 3 === 0 ? "#E2E8F0" : idx % 3 === 1 ? "#38BDF8" : "#FCA5A5";
              return (
                <rect
                  key={idx}
                  x={rx}
                  y={ry}
                  width={idx % 2 === 0 ? 18 : 12}
                  height={idx % 2 === 0 ? 8 : 6}
                  rx="2"
                  fill={fill}
                  opacity="0.82"
                  transform={`rotate(${(idx * 23) % 60} ${rx} ${ry})`}
                />
              );
            })}
            <text x="865" y="42" textAnchor="end" fill="#F8FAFC" fontSize="15" fontWeight="800">
              AFTER • 06:00 SÁNG HÔM SAU
            </text>
            <text x="865" y="64" textAnchor="end" fill="#FEF08A" fontSize="12.5" fontWeight="600">
              Giàn giáo tháo dỡ từ số 0 & rác thải nhựa / áo mưa dùng một lần
            </text>
          </svg>
        </div>

        {/* LEFT LAYER (BEFORE - 22:00 PM SPECTACULAR NIGHT SHOW) */}
        <div
          className="juxtapose-layer layer-before"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <svg viewBox="0 0 900 440" preserveAspectRatio="xMidYMid slice" className="juxtapose-svg">
            <defs>
              <linearGradient id="nightConcertSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#090A12" />
                <stop offset="65%" stopColor="#1B1035" />
                <stop offset="100%" stopColor="#120B24" />
              </linearGradient>
              <radialGradient id="fireworkBurst1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFF00" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#FF2E93" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FF2E93" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="fireworkBurst2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#00F0FF" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="900" height="440" fill="url(#nightConcertSky)" />

            {/* Fireworks */}
            <circle cx="290" cy="72" r="56" fill="url(#fireworkBurst1)" />
            <circle cx="610" cy="66" r="62" fill="url(#fireworkBurst2)" />
            <circle cx="450" cy="48" r="48" fill="url(#fireworkBurst1)" />

            {/* Illuminated Mega LED Stage */}
            <polygon points="450,110 90,440 245,440" fill="#00F0FF" opacity="0.16" />
            <polygon points="450,110 655,440 810,440" fill="#FF2E93" opacity="0.16" />
            <rect x="250" y="105" width="400" height="165" rx="6" fill="#1E1B4B" stroke="#00F0FF" strokeWidth="3" />
            <rect x="275" y="122" width="350" height="130" rx="4" fill="#FF2E93" opacity="0.35" />
            <circle cx="450" cy="188" r="36" fill="#FFFF00" opacity="0.85" />

            {/* Glowing crowd sea */}
            <rect x="0" y="270" width="900" height="170" fill="#140D26" />
            {Array.from({ length: 95 }, (_, idx) => {
              const cx = 25 + ((idx * 67) % 850);
              const cy = 282 + ((idx * 29) % 145);
              const color =
                idx % 3 === 0 ? "#FF2E93" : idx % 3 === 1 ? "#00F0FF" : "#FBBF24";
              return <circle key={idx} cx={cx} cy={cy} r="4.2" fill={color} opacity="0.9" />;
            })}

            <text x="35" y="42" fill="#FFFFFF" fontSize="15" fontWeight="800">
              BEFORE • 22:00 ĐÊM ĐẠI NHẠC HỘI
            </text>
            <text x="35" y="64" fill="#00F0FF" fontSize="12.5" fontWeight="600">
              Pháo hoa rực sáng, 40.000 lightstick & “nền kinh tế chú ý” bùng nổ
            </text>
          </svg>
        </div>

        {/* Draggable Handle */}
        <div className="juxtapose-divider" style={{ left: `${sliderPos}%` }}>
          <div className="juxtapose-handle">⇆</div>
        </div>
      </div>

      {/* Accessible Range Control */}
      <div className="juxtapose-range-bar">
        <span>22:00 Đêm diễn</span>
        <input
          type="range"
          min={4}
          max={96}
          value={Math.round(sliderPos)}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          aria-label="Thanh kéo so sánh trước và sau đêm concert"
        />
        <span>06:00 Sáng hôm sau</span>
      </div>

      <figcaption className="viz-caption-footer">
        Dẫn chiếu chuyên đề “Âm nhạc xanh” (trang 100–102 Báo cáo RMIT 2025–2026): Bài toán giảm thiểu rác thải nhựa dùng một lần (áo mưa, chai nước, vật phẩm cổ vũ) và lãng phí kết cấu sân khấu lắp dựng tạm thời.
      </figcaption>
    </figure>
  );
}
