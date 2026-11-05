"use client";

import { useState } from "react";
import {
  BOTTLENECK_TO_SOLUTION_MATRIX,
  EXPERT_QUOTES,
  READER_POLL_CONFIG,
  RMIT_PDF_SOURCES,
  PRESS_POLICY_SOURCES,
} from "@/data/articleData";

/* ============================================================================
   MA TRẬN 5 ĐIỂM NGHẼN ➔ 5 LỜI GIẢI ĐỒNG BỘ (CHƯƠNG 4)
   ============================================================================ */
export function BottleneckSolutionMatrix() {
  const [activeId, setActiveId] = useState<string>("sol-1");

  const currentItem =
    BOTTLENECK_TO_SOLUTION_MATRIX.find((m) => m.id === activeId) ||
    BOTTLENECK_TO_SOLUTION_MATRIX[0];

  return (
    <section className="viz-card redstar-card" aria-label="Ma trận tháo gỡ 5 điểm nghẽn hệ thống">
      <div className="viz-header">
        <div>
          <span className="pos-badge redstar-badge">
            BẢN ĐỒ HÀNH ĐỘNG • ĐỐI CHIẾU ĐIỂM NGHẼN & LỜI GIẢI THỂ CHẾ
          </span>
          <h3 className="viz-title">
            Từ 5 điểm nghẽn cấu trúc đến 5 mũi nhọn tháo gỡ đưa Việt&nbsp;Nam lên bản đồ World&nbsp;Tour
          </h3>
          <p className="viz-subtitle">
            Chọn từng điểm nghẽn để xem cơ chế giải quyết tương ứng gắn với Nghị quyết 80-NQ/TW và nguồn lực 122.000&nbsp;tỷ&nbsp;đồng
          </p>
        </div>
      </div>

      <div className="matrix-interactive-layout">
        <div className="matrix-selector-list">
          {BOTTLENECK_TO_SOLUTION_MATRIX.map((item, idx) => {
            const isSelected = item.id === currentItem.id;
            return (
              <button
                key={item.id}
                type="button"
                className={`matrix-selector-btn ${isSelected ? "selected" : ""}`}
                onClick={() => setActiveId(item.id)}
              >
                <span className="matrix-idx">0{idx + 1}</span>
                <div className="matrix-btn-text">
                  <span className="matrix-pillar-tag">{item.pillarTag}</span>
                  <strong>{item.bottleneck}</strong>
                </div>
              </button>
            );
          })}
        </div>

        <div className="matrix-solution-detail">
          <div className="matrix-problem-strip">
            <span>ĐIỂM NGHẼN CẦN THÁO GỠ:</span>
            <p>{currentItem.bottleneck}</p>
          </div>

          <div className="matrix-arrow-down">⬇ LỜI GIẢI CHÍNH SÁCH & HẠ TẦNG</div>

          <h4 className="matrix-sol-heading">{currentItem.solutionTitle}</h4>
          <p className="matrix-sol-desc">{currentItem.actionDetail}</p>

          <div className="matrix-milestone-box">
            <span>⭐ CỘT MỐC ĐỊNH LƯỢNG / THỰC TIỄN:</span>
            <strong>{currentItem.milestoneMetric}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   [VỊ TRÍ 12] QUOTE CARDS – GÓC NHÌN CHUYÊN GIA & NHÀ QUẢN LÝ (CAROUSEL)
   ============================================================================ */
export function ExpertQuotesCarousel() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? EXPERT_QUOTES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === EXPERT_QUOTES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="viz-card" id="vi-tri-12" aria-label="Góc nhìn chuyên gia và nhà quản lý">
      <div className="viz-header">
        <div>
          <span className="pos-badge">
            GÓC NHÌN CHUYÊN GIA & NHÀ QUẢN LÝ
          </span>
          <h3 className="viz-title">
            Từ “cơn sốt” ngắn hạn đến nền công nghiệp biểu diễn có chiều sâu và bản&nbsp;sắc
          </h3>
        </div>

        <div className="carousel-nav-controls">
          <button
            type="button"
            className="carousel-arrow-btn"
            onClick={handlePrev}
            aria-label="Xem nhận định trước"
          >
            ←
          </button>
          <span className="carousel-step-indicator">
            {activeIdx + 1} / {EXPERT_QUOTES.length}
          </span>
          <button
            type="button"
            className="carousel-arrow-btn"
            onClick={handleNext}
            aria-label="Xem nhận định tiếp theo"
          >
            →
          </button>
        </div>
      </div>

      {/* Horizontal Scrollable & Highlighted Cards */}
      <div className="quote-cards-track">
        {EXPERT_QUOTES.map((q, idx) => {
          const isFocused = idx === activeIdx;
          return (
            <article
              key={q.id}
              className={`expert-quote-card ${isFocused ? "focused" : ""}`}
              style={{ borderTopColor: q.accentColor }}
              onClick={() => setActiveIdx(idx)}
            >
              <div className="quote-mark" style={{ color: q.accentColor }}>
                “
              </div>
              <blockquote className="expert-quote-text">{q.quote}”</blockquote>
              <footer className="expert-quote-footer">
                <div className="expert-name">{q.speaker}</div>
                <div className="expert-role">{q.title}</div>
                <div className="expert-source" style={{ color: q.accentColor }}>
                  Nguồn: {q.source}
                </div>
              </footer>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/* ============================================================================
   [VỊ TRÍ 13] BOX TƯƠNG TÁC ĐỘC GIẢ (INTERACTIVE POLL)
   ============================================================================ */
export function InteractiveReaderPoll() {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [voteCounts, setVoteCounts] = useState<Record<string, number>>(() => {
    const map: Record<string, number> = {};
    READER_POLL_CONFIG.options.forEach((opt) => {
      map[opt.id] = opt.initialVotes;
    });
    return map;
  });

  const handleVoteSubmit = () => {
    if (!selectedOptionId || hasSubmitted) return;
    setVoteCounts((prev) => ({
      ...prev,
      [selectedOptionId]: (prev[selectedOptionId] || 0) + 1,
    }));
    setHasSubmitted(true);
  };

  const handleResetVote = () => {
    if (selectedOptionId && hasSubmitted) {
      setVoteCounts((prev) => ({
        ...prev,
        [selectedOptionId]: Math.max(0, (prev[selectedOptionId] || 1) - 1),
      }));
    }
    setHasSubmitted(false);
    setSelectedOptionId(null);
  };

  const totalVotes = Object.values(voteCounts).reduce((sum, n) => sum + n, 0);

  return (
    <section className="viz-card poll-box-card" id="vi-tri-13" aria-label="Thăm dò ý kiến độc giả">
      <span className="pos-badge redstar-badge">
        GÓC TƯƠNG TÁC ĐỘC GIẢ
      </span>
      <h3 className="poll-question-heading">{READER_POLL_CONFIG.question}</h3>
      <p className="viz-subtitle">
        Hãy chọn ưu tiên số 1 theo góc nhìn của bạn để xem tương quan bình chọn từ cộng đồng độc giả yêu nhạc&nbsp;sống
      </p>

      <div className="poll-options-list" role="radiogroup" aria-label={READER_POLL_CONFIG.question}>
        {READER_POLL_CONFIG.options.map((opt) => {
          const count = voteCounts[opt.id] || 0;
          const pct = totalVotes > 0 ? (count / totalVotes) * 100 : 0;
          const isChosen = selectedOptionId === opt.id;

          return (
            <div
              key={opt.id}
              role="radio"
              aria-checked={isChosen}
              tabIndex={0}
              className={`poll-option-item ${isChosen ? "chosen" : ""} ${
                hasSubmitted ? "submitted" : ""
              }`}
              onClick={() => {
                if (!hasSubmitted) setSelectedOptionId(opt.id);
              }}
              onKeyDown={(e) => {
                if (!hasSubmitted && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  setSelectedOptionId(opt.id);
                }
              }}
            >
              <div className="poll-opt-top">
                <div className="poll-checkbox-circle">{isChosen ? "✓" : ""}</div>
                <div className="poll-opt-copy">
                  <span className="poll-opt-tag">{opt.tag}</span>
                  <span className="poll-opt-label">{opt.label}</span>
                </div>
                {hasSubmitted && (
                  <div className="poll-pct-number">
                    {pct.toFixed(1).replace(".", ",")}%
                  </div>
                )}
              </div>

              {hasSubmitted && (
                <div className="poll-result-bar-bg">
                  <div
                    className="poll-result-bar-fill"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="poll-actions-footer">
        {!hasSubmitted ? (
          <button
            type="button"
            className="poll-submit-btn"
            disabled={!selectedOptionId}
            onClick={handleVoteSubmit}
          >
            Gửi bình chọn & Xem kết quả ({totalVotes.toLocaleString("vi-VN")} lượt tham gia)
          </button>
        ) : (
          <div className="poll-thankyou-row">
            <span>
              🎉 Cảm ơn bạn đã đóng góp góc nhìn! Tổng cộng{" "}
              <strong>{totalVotes.toLocaleString("vi-VN")} lượt bình chọn</strong> đã được ghi nhận.
            </span>
            <button type="button" className="poll-reset-link" onClick={handleResetVote}>
              Bình chọn lại
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ============================================================================
   BẢNG NGUỒN ĐỐI CHIẾU DỮ LIỆU MINH BẠCH (RMIT PDF & BÁO CHÍNH THỐNG)
   ============================================================================ */
export function DataSourcesProvenance() {
  const [sourceTab, setSourceTab] = useState<"rmit" | "press">("rmit");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const q = searchTerm.trim().toLowerCase();

  const filteredRmit = RMIT_PDF_SOURCES.filter(
    (r) =>
      !q ||
      r.factUsed.toLowerCase().includes(q) ||
      r.pdfLocation.toLowerCase().includes(q) ||
      r.originalSourceNote.toLowerCase().includes(q)
  );

  const filteredPress = PRESS_POLICY_SOURCES.filter(
    (p) =>
      !q ||
      p.factUsed.toLowerCase().includes(q) ||
      p.articleSource.toLowerCase().includes(q) ||
      p.authorityOrExpert.toLowerCase().includes(q)
  );

  return (
    <section className="sources-provenance-section" id="bang-nguon">
      <div className="sources-header-row">
        <div>
          <span className="pos-badge">HỒ SƠ MINH BẠCH DỮ LIỆU</span>
          <h2 className="sources-main-heading">
            Bảng đối chiếu toàn bộ nguồn số liệu, báo cáo học thuật &amp; văn kiện chính&nbsp;sách
          </h2>
          <p className="viz-subtitle">
            Tra cứu vị trí trang chính xác trong Báo cáo RMIT 2025–2026 và các nguồn báo chí chính thống sử dụng trong&nbsp;bài
          </p>
        </div>

        <div className="sources-controls">
          <input
            type="search"
            className="sources-search-input"
            placeholder="Tìm số liệu: 810, ARPU, 944, Nghị quyết 80, Mỹ Đình..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="viz-tabs">
            <button
              type="button"
              className={`viz-tab-btn ${sourceTab === "rmit" ? "active" : ""}`}
              onClick={() => setSourceTab("rmit")}
            >
              1. Báo cáo RMIT PDF ({filteredRmit.length})
            </button>
            <button
              type="button"
              className={`viz-tab-btn ${sourceTab === "press" ? "active" : ""}`}
              onClick={() => setSourceTab("press")}
            >
              2. Chính sách & Báo chính thống ({filteredPress.length})
            </button>
          </div>
        </div>
      </div>

      <div className="sources-table-wrap">
        {sourceTab === "rmit" ? (
          <table className="provenance-table">
            <thead>
              <tr>
                <th style={{ width: "44%" }}>Số liệu / Thông tin đã dùng trong bài</th>
                <th style={{ width: "24%" }}>Vị trí chính xác trong file PDF của RMIT</th>
                <th style={{ width: "32%" }}>Nguồn gốc dữ liệu sơ cấp / thứ cấp được RMIT ghi nhận</th>
              </tr>
            </thead>
            <tbody>
              {filteredRmit.map((row) => (
                <tr key={row.id}>
                  <td>{row.factUsed}</td>
                  <td className="td-highlight-cyan">{row.pdfLocation}</td>
                  <td>{row.originalSourceNote}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="provenance-table">
            <thead>
              <tr>
                <th style={{ width: "44%" }}>Số liệu / Nhận định đã dùng trong bài</th>
                <th style={{ width: "28%" }}>Nguồn bài báo / Văn kiện cụ thể</th>
                <th style={{ width: "28%" }}>Cơ quan ban hành / Chuyên gia phát ngôn</th>
              </tr>
            </thead>
            <tbody>
              {filteredPress.map((row) => (
                <tr key={row.id}>
                  <td>{row.factUsed}</td>
                  <td className="td-highlight-gold">{row.articleSource}</td>
                  <td>{row.authorityOrExpert}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
