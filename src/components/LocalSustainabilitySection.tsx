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
// Shape bản đồ Việt Nam chi tiết & chuẩn xác từ hình mẫu tham chiếu (Hình 1)
const VIETNAM_MAP_PATH_D = "M 127 32 L 130 32 L 130 33 L 136 38 L 138 43 L 142 43 L 148 48 L 152 46 L 157 46 L 159 47 L 161 50 L 165 50 L 170 48 L 173 50 L 175 50 L 177 52 L 179 52 L 176 56 L 176 60 L 175 61 L 172 60 L 170 64 L 170 68 L 173 70 L 175 70 L 174 80 L 176 82 L 187 84 L 187 86 L 185 87 L 186 89 L 188 89 L 192 92 L 196 92 L 198 94 L 201 94 L 203 97 L 213 94 L 218 98 L 218 99 L 212 99 L 211 101 L 205 106 L 200 107 L 197 110 L 197 117 L 196 118 L 192 120 L 183 120 L 180 123 L 179 127 L 171 133 L 171 146 L 170 145 L 165 146 L 159 151 L 156 156 L 153 156 L 152 155 L 150 156 L 149 160 L 145 167 L 145 173 L 144 174 L 145 179 L 142 182 L 142 185 L 138 190 L 143 196 L 145 204 L 151 212 L 154 215 L 158 216 L 163 221 L 166 222 L 168 226 L 167 234 L 171 243 L 176 248 L 185 254 L 188 257 L 188 260 L 199 271 L 208 276 L 216 283 L 220 285 L 222 287 L 222 289 L 224 292 L 227 291 L 227 295 L 233 302 L 238 311 L 243 316 L 246 316 L 249 321 L 248 329 L 254 340 L 254 345 L 256 348 L 256 353 L 259 357 L 259 361 L 261 366 L 261 372 L 259 374 L 261 380 L 260 388 L 262 392 L 262 395 L 267 401 L 267 403 L 265 404 L 258 412 L 259 415 L 261 416 L 262 418 L 262 420 L 258 424 L 258 431 L 261 435 L 260 438 L 261 439 L 257 447 L 250 455 L 245 457 L 242 461 L 238 461 L 233 467 L 229 467 L 228 469 L 222 470 L 219 473 L 218 478 L 213 477 L 210 480 L 208 480 L 202 484 L 190 487 L 188 489 L 184 486 L 179 486 L 177 488 L 177 500 L 176 500 L 174 503 L 174 508 L 171 508 L 170 507 L 168 508 L 171 512 L 168 517 L 162 516 L 160 519 L 158 520 L 155 525 L 153 526 L 147 526 L 141 530 L 135 532 L 132 535 L 130 540 L 127 543 L 124 544 L 120 549 L 112 551 L 110 550 L 109 548 L 113 545 L 111 540 L 112 539 L 113 509 L 118 506 L 121 501 L 110 494 L 104 495 L 104 493 L 101 487 L 106 484 L 113 484 L 121 476 L 119 473 L 120 470 L 122 470 L 125 472 L 129 472 L 132 469 L 139 469 L 142 467 L 144 467 L 148 473 L 152 472 L 156 475 L 157 474 L 156 469 L 158 466 L 155 464 L 153 464 L 153 463 L 148 459 L 148 452 L 145 446 L 151 445 L 152 442 L 159 442 L 162 445 L 165 444 L 166 443 L 166 434 L 175 435 L 178 431 L 181 431 L 185 429 L 189 425 L 194 422 L 197 422 L 200 424 L 204 419 L 205 413 L 201 399 L 206 388 L 206 382 L 204 375 L 203 373 L 201 372 L 200 365 L 197 363 L 197 360 L 199 357 L 199 352 L 200 350 L 202 349 L 202 346 L 203 345 L 203 336 L 204 334 L 201 332 L 201 330 L 205 327 L 206 317 L 203 316 L 200 312 L 198 312 L 197 309 L 194 307 L 193 304 L 193 300 L 198 299 L 200 297 L 200 294 L 197 293 L 194 290 L 192 290 L 188 284 L 184 284 L 184 283 L 182 282 L 182 278 L 181 277 L 179 277 L 177 279 L 174 279 L 174 276 L 170 272 L 169 261 L 166 260 L 162 253 L 162 251 L 161 250 L 159 251 L 157 250 L 142 234 L 139 229 L 139 225 L 134 218 L 131 219 L 129 218 L 127 215 L 124 214 L 124 212 L 122 209 L 122 205 L 124 203 L 124 201 L 122 199 L 108 196 L 104 193 L 102 190 L 99 190 L 97 187 L 92 185 L 88 181 L 83 181 L 81 179 L 81 178 L 88 172 L 87 165 L 89 166 L 92 164 L 96 166 L 99 165 L 102 167 L 105 167 L 107 164 L 113 160 L 113 156 L 117 152 L 117 150 L 115 148 L 112 148 L 110 146 L 106 146 L 105 145 L 105 142 L 108 139 L 107 137 L 102 140 L 99 140 L 98 139 L 98 136 L 103 133 L 105 130 L 101 128 L 101 127 L 94 121 L 89 119 L 87 119 L 82 122 L 79 122 L 77 124 L 75 130 L 72 129 L 71 127 L 69 127 L 67 125 L 62 125 L 59 124 L 58 121 L 55 121 L 48 112 L 48 108 L 47 107 L 47 101 L 50 98 L 51 93 L 45 91 L 42 94 L 40 94 L 39 92 L 39 87 L 34 82 L 34 80 L 27 74 L 22 67 L 26 65 L 31 59 L 31 57 L 33 54 L 35 54 L 36 56 L 42 57 L 52 66 L 57 61 L 57 59 L 60 57 L 63 53 L 65 54 L 65 56 L 68 59 L 70 58 L 70 56 L 72 53 L 83 63 L 85 61 L 86 55 L 91 52 L 93 52 L 94 55 L 97 57 L 103 52 L 111 50 L 113 48 L 112 42 L 115 41 L 120 36 L 125 36 L 127 32 Z M 84 485 L 85 485 L 88 488 L 88 494 L 87 495 L 87 499 L 86 500 L 87 503 L 85 503 L 83 495 L 79 491 L 78 491 L 78 490 L 81 489 L 84 485 Z M 201 112 L 203 113 L 203 114 L 201 116 L 200 116 L 201 112 Z M 189 122 L 192 122 L 192 124 L 190 124 L 189 122 Z M 202 118 L 203 118 L 202 120 L 203 121 L 202 122 L 201 120 L 202 118 Z M 210 116 L 211 116 L 211 117 L 208 119 L 207 118 L 209 118 L 210 116 Z M 193 127 L 195 127 L 196 128 L 193 128 L 193 127 Z M 198 121 L 199 121 L 198 121 Z M 199 123 L 200 123 L 199 123 Z M 199 119 Z";
const HOANG_SA_PATH_D = "M 313 264 L 315 264 L 316 265 L 316 267 L 314 269 L 313 269 L 311 267 L 311 266 L 313 264 Z M 389 292 L 392 292 L 392 295 L 391 296 L 390 295 L 388 295 L 388 293 L 389 292 Z M 330 301 L 332 301 L 333 303 L 332 304 L 329 304 L 328 302 L 330 301 Z M 378 253 L 379 253 L 380 255 L 379 256 L 376 256 L 375 254 L 377 254 L 378 253 Z M 340 281 L 342 281 L 343 283 L 342 284 L 339 284 L 338 283 L 340 281 Z M 343 275 L 346 275 L 348 277 L 345 278 L 343 276 L 343 275 Z M 375 247 L 378 247 L 378 249 L 377 250 L 375 249 L 375 247 Z M 381 248 L 383 249 L 382 251 L 380 250 L 381 248 Z M 347 283 L 349 283 L 350 285 L 347 285 L 347 283 Z M 384 294 L 386 294 L 386 297 L 384 295 L 384 294 Z M 342 271 L 343 271 L 343 273 L 341 273 L 342 271 Z";
const TRUONG_SA_PATH_D = "M 386 512 L 389 512 L 392 515 L 392 516 L 390 517 L 387 517 L 386 512 Z M 425 472 L 430 472 L 430 473 L 427 475 L 423 475 L 423 473 L 425 472 Z M 429 465 L 431 465 L 432 466 L 437 466 L 437 467 L 433 469 L 429 465 Z M 408 517 L 410 517 L 412 519 L 412 521 L 413 522 L 412 523 L 409 521 L 408 517 Z M 369 531 L 371 531 L 372 533 L 372 536 L 370 536 L 368 534 L 368 532 L 369 531 Z M 397 507 L 399 508 L 399 510 L 398 510 L 395 513 L 394 513 L 397 507 Z M 424 514 L 428 514 L 430 516 L 430 517 L 429 518 L 427 516 L 425 516 L 424 514 Z M 317 519 L 320 520 L 320 523 L 317 523 L 316 522 L 317 519 Z M 350 533 L 355 533 L 355 535 L 354 536 L 353 535 L 351 535 L 350 533 Z M 320 555 L 323 555 L 324 556 L 323 558 L 320 558 L 320 555 Z M 325 518 L 327 518 L 328 519 L 327 521 L 324 521 L 324 519 L 325 518 Z M 378 514 L 379 514 L 381 516 L 380 518 L 378 517 L 378 514 Z M 416 540 L 418 540 L 419 543 L 416 543 L 416 540 Z M 455 552 L 456 552 L 458 554 L 458 555 L 455 555 L 455 552 Z M 306 517 L 307 517 L 308 521 L 306 521 L 306 517 Z M 421 517 L 422 517 L 424 519 L 423 520 L 421 520 L 421 517 Z M 424 548 L 425 549 L 425 551 L 423 551 L 422 550 L 422 549 L 424 548 Z M 319 567 L 320 567 L 320 568 L 317 568 L 319 567 Z M 324 567 L 325 567 L 325 569 L 324 569 L 324 567 Z M 329 552 L 330 552 L 330 553 L 329 553 L 329 552 Z";

function getStarPoints(cx: number, cy: number, outerR: number, innerR: number): string {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const angle = -Math.PI / 2 + (i * Math.PI) / 5;
    const r = i % 2 === 0 ? outerR : innerR;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    pts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return pts.join(" ");
}

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
          <h3 className="viz-title">
            Phân bố các cụm điểm nóng sự kiện &amp; Tỷ lệ lưu trú qua đêm
          </h3>
          <p className="viz-subtitle">
            Rê chuột vào từng cụm điểm nóng để hiển thị nhận xét về tỷ lệ lưu trú qua đêm so với việc khán giả chỉ đến xem rồi rời đi
          </p>
        </div>

        <div className="viz-tabs">
          <button
            type="button"
            className={`viz-tab-btn ${clusterFilter === "all" ? "active" : ""}`}
            onClick={() => setClusterFilter("all")}
          >
            Toàn quốc (7 điểm nóng)
          </button>
          <button
            type="button"
            className={`viz-tab-btn ${clusterFilter === "high-density" ? "active" : ""}`}
            onClick={() => {
              setClusterFilter("high-density");
              setSelectedHubId("tphcm");
            }}
          >
            🔥 Cực tăng trưởng mật độ cao
          </button>
          <button
            type="button"
            className={`viz-tab-btn ${clusterFilter === "music-tourism" ? "active" : ""}`}
            onClick={() => {
              setClusterFilter("music-tourism");
              setSelectedHubId("danang");
            }}
          >
            🏖 Cực du lịch âm nhạc (Music Tourism)
          </button>
        </div>
      </div>

      <div className="heatmap-layout">
        <div className="heatmap-svg-box">
          <svg
            viewBox="0 0 494 620"
            className="vietnam-heatmap-svg"
            role="img"
            aria-label="Bản đồ nhiệt phân bố sự kiện âm nhạc tại Việt Nam"
          >
            <defs>
              <radialGradient id="heatHigh" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFDE00" stopOpacity="0.8" />
                <stop offset="45%" stopColor="#F59E0B" stopOpacity="0.35" />
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
              <line x1="0" y1="140" x2="494" y2="140" />
              <line x1="0" y1="300" x2="494" y2="300" />
              <line x1="0" y1="460" x2="494" y2="460" />
              <line x1="160" y1="0" x2="160" y2="620" />
              <line x1="330" y1="0" x2="330" y2="620" />
            </g>

            {/* Shape bản đồ Việt Nam chi tiết (Đất liền + Phú Quốc + các đảo ven bờ) */}
            <path
              d={VIETNAM_MAP_PATH_D}
              fill="var(--vn-red)"
              stroke="var(--vn-red)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />

            {/* Quần đảo Hoàng Sa & Trường Sa (Chủ quyền biển đảo Việt Nam) */}
            <g opacity="0.95">
              {/* Quần đảo Hoàng Sa */}
              <path
                d={HOANG_SA_PATH_D}
                fill="var(--vn-red)"
                stroke="var(--vn-red)"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
              <text x="325" y="236" textAnchor="middle" fill="var(--text-secondary)" fontSize="10.8" fontWeight="700">
                Quần Đảo
              </text>
              <text x="325" y="251" textAnchor="middle" fill="var(--vn-red)" fontSize="11.8" fontWeight="800">
                Hoàng Sa (Việt Nam)
              </text>

              {/* Quần đảo Trường Sa */}
              <path
                d={TRUONG_SA_PATH_D}
                fill="var(--vn-red)"
                stroke="var(--vn-red)"
                strokeWidth="0.8"
                strokeLinejoin="round"
              />
              <text x="372" y="474" textAnchor="middle" fill="var(--text-secondary)" fontSize="10.8" fontWeight="700">
                Quần Đảo
              </text>
              <text x="372" y="489" textAnchor="middle" fill="var(--vn-red)" fontSize="11.8" fontWeight="800">
                Trường Sa (Việt Nam)
              </text>
            </g>

            {/* Heat Plumes + Interactive Markers */}
            {visibleHubs.map((hub) => {
              const isSelected = hub.id === activeHub.id;
              const isHigh = hub.clusterType === "high-density";
              const isHanoi = hub.id === "hanoi-hungyen";

              const isLeft = isHanoi;
              const labelX = isLeft ? hub.x - 14 : hub.x + 14;
              const textAnchor = isLeft ? "end" : "start";

              return (
                <g
                  key={hub.id}
                  className="heatmap-hub-pin"
                  onClick={() => setSelectedHubId(hub.id)}
                  onMouseEnter={() => setSelectedHubId(hub.id)}
                >
                  <title>{`${hub.city} [${hub.clusterLabel}]\n• Sự kiện / Số liệu: ${hub.eventVolumeStat}\n• Nhận xét lưu trú: ${hub.overnightVsLeaveAnalysis}`}</title>
                  <circle
                    cx={hub.x}
                    cy={hub.y}
                    r={isSelected ? hub.heatRadius * 1.18 : hub.heatRadius}
                    fill={isHigh ? "url(#heatHigh)" : "url(#heatTourism)"}
                  />
                  {isHanoi ? (
                    <polygon
                      points={getStarPoints(hub.x, hub.y, isSelected ? 11 : 8.5, isSelected ? 4.8 : 3.7)}
                      fill="#FFDE00"
                      stroke="var(--bg-card)"
                      strokeWidth={isSelected ? 2.5 : 1.5}
                      strokeLinejoin="round"
                    />
                  ) : (
                    <circle
                      cx={hub.x}
                      cy={hub.y}
                      r={isSelected ? 8.5 : 6}
                      fill={isHigh ? "#FFDE00" : "var(--accent-blue)"}
                      stroke="var(--bg-card)"
                      strokeWidth={isSelected ? 2.5 : 1.5}
                    />
                  )}
                  <text
                    x={labelX}
                    y={hub.y + 4.5}
                    textAnchor={textAnchor}
                    fill="var(--text-primary)"
                    fontSize={isSelected ? "13.5" : "12"}
                    fontWeight={isSelected ? "850" : "700"}
                    paintOrder="stroke fill"
                    stroke="var(--bg-card)"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  >
                    {hub.city}
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="heatmap-legend-strip">
            <span>
              <i className="dot-high" /> Cực tăng trưởng mật độ cao (Hà Nội, TP. Hồ Chí Minh)
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
              🏨 Nhận xét: Tỷ lệ lưu trú qua đêm vs. Khán giả chỉ đến xem rồi rời đi
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

  // Precompute Y positions in 405px SVG canvas so all shapes & multi-line labels fit cleanly
  const leftNodes = SANKEY_ORGANIZER_INPUTS.reduce<
    {
      node: (typeof SANKEY_ORGANIZER_INPUTS)[number];
      y: number;
      h: number;
    }[]
  >((acc, node, idx) => {
    const gap = 12;
    const totalAvailable = 290;
    const h = Math.max(28, (node.share / 100) * totalAvailable);
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
    const totalAvailable = 275;
    const h = Math.max(68, (node.shareEstimate / 100) * totalAvailable);
    const prevBottom = idx === 0 ? 26 : acc[idx - 1].y + acc[idx - 1].h + gap;
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
    const gap = 15;
    const totalAvailable = 295;
    const h = Math.max(28, (node.visualWeight / 100) * totalAvailable);
    const prevBottom = idx === 0 ? 26 : acc[idx - 1].y + acc[idx - 1].h + gap;
    acc.push({ node, y: prevBottom, h });
    return acc;
  }, []);

  return (
    <figure className="viz-card" id="vi-tri-7">
      <div className="viz-header">
        <div>
          <h3 className="viz-title">
            Giải phẫu dòng tiền một đêm đại nhạc hội: Vì sao “cháy vé” vẫn đối mặt nguy&nbsp;cơ&nbsp;thua&nbsp;lỗ?
          </h3>
          <p className="viz-subtitle">
            Kết hợp cơ cấu chủ thể tổ chức (Báo cáo RMIT trang 30), 3 nguồn thu đầu vào và 4 nhánh phân bổ chi phí – lợi nhuận đầu&nbsp;ra
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
          viewBox="0 0 960 405"
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
                d={`M 254 ${y1} C 308 ${y1}, 314 ${y2}, 365 ${y2}`}
                fill="none"
                stroke={ln.node.color}
                strokeWidth={Math.max(6, ln.h * 0.55)}
                strokeOpacity="0.28"
              />
            );
          })}

          {/* Extra cross-ribbons Left -> Sponsor/Ticket for realism */}
          <path
            d={`M 254 ${leftNodes[0].y + 28} C 310 ${leftNodes[0].y + 28}, 315 ${midNodes[1].y + 25}, 365 ${midNodes[1].y + 25}`}
            fill="none"
            stroke="#38BDF8"
            strokeWidth="16"
            strokeOpacity="0.2"
          />
          <path
            d={`M 254 ${leftNodes[3].y + 14} C 310 ${leftNodes[3].y + 14}, 315 ${midNodes[1].y + 42}, 365 ${midNodes[1].y + 42}`}
            fill="none"
            stroke="#F59E0B"
            strokeWidth="18"
            strokeOpacity="0.32"
          />

          {/* Curved Sankey Ribbons: Middle -> Right */}
          {midNodes.map((mn) =>
            rightNodes.map((rn) => {
              const weight = (mn.h * (rn.node.visualWeight / 100)) * 0.72;
              const yStart = mn.y + mn.h * 0.5;
              const yEnd = rn.y + rn.h * 0.5;
              return (
                <path
                  key={`mr-${mn.node.id}-${rn.node.id}`}
                  d={`M 595 ${yStart} C 648 ${yStart}, 655 ${yEnd}, 706 ${yEnd}`}
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
              <rect x="236" y={y} width="18" height={h} rx="4" fill={node.color} />
              <text x="226" y={y + h / 2 - 2} textAnchor="end" fill="var(--text-primary)" fontSize="11" fontWeight="700">
                {node.label}
              </text>
              <text x="226" y={y + h / 2 + 12} textAnchor="end" fill={node.color} fontSize="10.8" fontWeight="800">
                {node.share.toFixed(1).replace(".", ",")}%
              </text>
            </g>
          ))}

          {/* Middle Column Nodes (Revenue Pool) */}
          {midNodes.map(({ node, y, h }) => {
            const shortTitle = node.label.split("(")[0].trim();
            const ampSplitIdx = shortTitle.indexOf(" & ");
            const titleLines =
              shortTitle.length > 24 && ampSplitIdx !== -1
                ? [
                    shortTitle.slice(0, ampSplitIdx).trim(),
                    shortTitle.slice(ampSplitIdx + 1).trim(),
                  ]
                : [shortTitle];
            const centerY = y + h / 2;

            return (
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
                  x="365"
                  y={y}
                  width="230"
                  height={h}
                  rx="10"
                  fill="var(--bg-card)"
                  stroke={node.color}
                  strokeWidth="2"
                />
                {titleLines.length === 2 ? (
                  <>
                    <text
                      x="480"
                      y={centerY - 12}
                      textAnchor="middle"
                      fill="var(--text-primary)"
                      fontSize="11"
                      fontWeight="800"
                    >
                      {titleLines[0]}
                    </text>
                    <text
                      x="480"
                      y={centerY + 3}
                      textAnchor="middle"
                      fill="var(--text-primary)"
                      fontSize="11"
                      fontWeight="800"
                    >
                      {titleLines[1]}
                    </text>
                    <text
                      x="480"
                      y={centerY + 19}
                      textAnchor="middle"
                      fill={node.color}
                      fontSize="11"
                      fontWeight="700"
                    >
                      ~{node.shareEstimate}% tổng thu
                    </text>
                  </>
                ) : (
                  <>
                    <text
                      x="480"
                      y={centerY - 4}
                      textAnchor="middle"
                      fill="var(--text-primary)"
                      fontSize="11.2"
                      fontWeight="800"
                    >
                      {titleLines[0]}
                    </text>
                    <text
                      x="480"
                      y={centerY + 13}
                      textAnchor="middle"
                      fill={node.color}
                      fontSize="11"
                      fontWeight="700"
                    >
                      ~{node.shareEstimate}% tổng thu
                    </text>
                  </>
                )}
              </g>
            );
          })}

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
              <rect x="706" y={y} width="18" height={h} rx="4" fill={node.color} />
              <text x="734" y={y + h / 2 - 3} textAnchor="start" fill="var(--text-primary)" fontSize="11" fontWeight="700">
                {node.label.length > 34 ? `${node.label.slice(0, 34)}…` : node.label}
              </text>
              <text x="734" y={y + h / 2 + 12} textAnchor="start" fill={node.color} fontSize="10.8" fontWeight="800">
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
            22h00 đêm thăng hoa vs. 06h00 sáng hôm sau: “Đừng&nbsp;để đêm trước vỗ tay, sáng sau tháo sân khấu là xong công&nbsp;nghiệp&nbsp;văn&nbsp;hóa”
          </h3>
          <p className="viz-subtitle">
            Kéo thanh trượt ngang để đối chiếu hai lát cắt đối lập tại cùng một mặt sân vận động chỉ cách nhau 8 tiếng đồng&nbsp;hồ
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
