"use client";

import { useState, useEffect, useMemo } from "react";
import ARTICLE_DATA, { FloodSpot } from "@/data/articleData";

// Chiếu tọa độ địa lý sang SVG ViewBox (800 x 550)
function projectCoordinates(lat: number, lng: number) {
  const minLat = 10.55;
  const maxLat = 10.98;
  const minLng = 106.50;
  const maxLng = 107.15;

  const width = 800;
  const height = 550;

  const x = ((lng - minLng) / (maxLng - minLng)) * (width - 100) + 50;
  const y = ((maxLat - lat) / (maxLat - minLat)) * (height - 80) + 40;

  return { x: Math.round(x), y: Math.round(y) };
}

export default function Home() {
  // 1. Reading progress
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setReadingProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Interactive Map state
  const [activeFilter, setActiveFilter] = useState<"all" | "severe" | "rain" | "tide" | "thuduc" | "inner">("all");
  const [mapSearch, setMapSearch] = useState("");
  const [selectedSpotId, setSelectedSpotId] = useState<number>(1);

  const filteredSpots = useMemo(() => {
    return ARTICLE_DATA.floodSpots.filter((spot) => {
      let matchFilter = true;
      if (activeFilter === "severe") matchFilter = spot.severity === "severe";
      else if (activeFilter === "rain") matchFilter = spot.cause.includes("rain");
      else if (activeFilter === "tide") matchFilter = spot.cause.includes("tide");
      else if (activeFilter === "thuduc") matchFilter = spot.region === "thuduc";
      else if (activeFilter === "inner") matchFilter = spot.region === "inner";

      let matchSearch = true;
      if (mapSearch.trim()) {
        const q = mapSearch.toLowerCase().trim();
        matchSearch =
          spot.name.toLowerCase().includes(q) ||
          spot.district.toLowerCase().includes(q) ||
          spot.causeText.toLowerCase().includes(q);
      }

      return matchFilter && matchSearch;
    });
  }, [activeFilter, mapSearch]);

  const selectedSpot = useMemo(() => {
    return (
      ARTICLE_DATA.floodSpots.find((s) => s.id === selectedSpotId) ||
      ARTICLE_DATA.floodSpots[0]
    );
  }, [selectedSpotId]);

  // 3. Before/After slider
  const [sliderValue, setSliderValue] = useState(50);

  // 4. Quick Lookup widget
  const [lookupQuery, setLookupQuery] = useState("");
  const [lookupResults, setLookupResults] = useState<FloodSpot[] | null>(null);

  const handleLookup = () => {
    const q = lookupQuery.trim().toLowerCase();
    if (!q) {
      setLookupResults([]);
      return;
    }
    const matches = ARTICLE_DATA.floodSpots.filter(
      (s) => s.name.toLowerCase().includes(q) || s.district.toLowerCase().includes(q)
    );
    setLookupResults(matches);
  };

  // 5. JSON download
  const handleDownloadDataset = (e: React.MouseEvent) => {
    e.preventDefault();
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(ARTICLE_DATA, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "tphcm-flood-dataset-2026.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <>
      {/* Thanh tiến trình đọc trên cùng */}
      <div id="reading-progress" style={{ width: `${readingProgress}%` }} />

      {/* Header thanh điều hướng */}
      <header className="site-nav">
        <a href="#" className="brand-badge">
          <span className="brand-dot" />
          <span>THANH NIÊN • DATA JOURNALISM</span>
        </a>
        <ul className="nav-links">
          <li><a href="#ban-do">Bản đồ ngập</a></li>
          <li><a href="#so-lieu">Dữ liệu phân tích</a></li>
          <li><a href="#nguyen-nhan">Nguyên nhân</a></li>
          <li><a href="#lo-trinh">Lộ trình 142.000 tỉ</a></li>
          <li><a href="#tra-cuu" className="nav-cta">Tra cứu tuyến đường</a></li>
        </ul>
      </header>

      {/* Bìa bài báo (Hero Section) */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-container">
          <span className="category-tag" id="hero-category">
            {ARTICLE_DATA.meta.category}
          </span>
          <h1 className="hero-title" id="hero-title">
            {ARTICLE_DATA.meta.title}
          </h1>
          <p className="hero-subtitle" id="hero-subtitle">
            {ARTICLE_DATA.meta.subtitle}
          </p>

          <div className="hero-meta">
            <span>
              <strong>Tác giả:</strong> <span id="hero-author">{ARTICLE_DATA.meta.author}</span>
            </span>
            <span>•</span>
            <span>
              <strong>Cập nhật:</strong> <span id="hero-date">{ARTICLE_DATA.meta.publishedDate}</span>
            </span>
            <span>•</span>
            <span><strong>Thời lượng:</strong> {ARTICLE_DATA.meta.readTime}</span>
          </div>
        </div>
      </section>

      {/* Bốn chỉ số vàng (Key Takeaway Metrics) */}
      <section className="metrics-section">
        <div className="metrics-grid" id="metrics-grid">
          {ARTICLE_DATA.keyMetrics.map((item) => (
            <div key={item.id} className={`metric-card ${item.color}`}>
              <span className="metric-badge">{item.badge}</span>
              <div className="metric-number-group">
                <span className="metric-value">{item.value}</span>
                <span className="metric-unit">{item.unit}</span>
              </div>
              <div className="metric-label">{item.label}</div>
              <div className="metric-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Phần mở đầu bài viết (Editorial Lead) */}
      <main className="article-container">
        <p className="article-lead">
          Mỗi mùa mưa bão và triều cường dâng, câu chuyện ngập úng lại trở thành nỗi ám ảnh thường nhật của hàng triệu người dân TP.HCM. Từ những con phố sầm uất ở khu Thảo Điền, vòng xoay Hàng Xanh, rốn ngập Chợ Thủ Đức cho đến các tuyến đường ven sông Kênh Tẻ hay cửa ngõ Quốc lộ 13, bài toán thoát nước đô thị luôn là thách thức dai dẳng bậc nhất qua nhiều thập kỷ.
        </p>

        <p className="editorial-p">
          Theo báo cáo số liệu toàn diện từ Sở Xây dựng TP.HCM, toàn địa bàn thành phố hiện ghi nhận <strong>159 điểm ngập</strong> với nhiều mức độ khác nhau. Đáng chú ý, có tới <strong>39 điểm ngập thường xuyên</strong> với mức nước dâng sâu trên 30 cm và thời gian tụ nước kéo dài hơn 120 phút, làm tê liệt hoàn toàn giao thông và đảo lộn sinh hoạt của người dân.
        </p>

        <h2 className="editorial-h2" id="ban-do">
          1. Tọa độ các &quot;rốn ngập&quot;: TP.HCM đang ngập ở đâu?
        </h2>
        <p className="editorial-p">
          Bản đồ tương tác dưới đây tổng hợp các điểm ngập úng trọng điểm trên địa bàn TP.HCM và các khu vực đô thị kết nối. Bạn có thể sử dụng các bộ lọc hoặc gõ tên tuyến đường để tra cứu mức độ ngập sâu, thời gian thoát nước và dự án đang triển khai tại từng điểm.
        </p>
      </main>

      {/* KHỐI BẢN ĐỒ TƯƠNG TÁC (INTERACTIVE MAP) */}
      <div className="wide-container">
        <div className="interactive-map-block">
          <div className="map-header">
            <div className="map-title-row">
              <div className="map-title">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="2.5"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                Bản đồ tương tác 159 điểm ngập TP.HCM
              </div>
              <div className="map-search-bar">
                <input
                  type="text"
                  id="map-search-input"
                  placeholder="Tìm tên đường, chợ Thủ Đức, QL13, Thảo Điền..."
                  value={mapSearch}
                  onChange={(e) => setMapSearch(e.target.value)}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "0.75rem",
              }}
            >
              <div className="map-filters">
                <button
                  className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
                  onClick={() => setActiveFilter("all")}
                >
                  Tất cả điểm ngập
                </button>
                <button
                  className={`filter-btn ${activeFilter === "severe" ? "active" : ""}`}
                  onClick={() => setActiveFilter("severe")}
                >
                  Ngập nặng (&gt;30cm)
                </button>
                <button
                  className={`filter-btn ${activeFilter === "rain" ? "active" : ""}`}
                  onClick={() => setActiveFilter("rain")}
                >
                  Do mưa lớn
                </button>
                <button
                  className={`filter-btn ${activeFilter === "tide" ? "active" : ""}`}
                  onClick={() => setActiveFilter("tide")}
                >
                  Do triều cường
                </button>
                <button
                  className={`filter-btn ${activeFilter === "thuduc" ? "active" : ""}`}
                  onClick={() => setActiveFilter("thuduc")}
                >
                  Khu vực Thủ Đức
                </button>
                <button
                  className={`filter-btn ${activeFilter === "inner" ? "active" : ""}`}
                  onClick={() => setActiveFilter("inner")}
                >
                  Nội đô TP.HCM
                </button>
              </div>
              <div
                id="map-spot-counter"
                style={{ fontSize: "0.82rem", color: "#64748b", fontWeight: 600 }}
              >
                Hiển thị {filteredSpots.length}/{ARTICLE_DATA.floodSpots.length} điểm ngập tiêu biểu
              </div>
            </div>
          </div>

          <div className="map-content-layout">
            {/* Vùng hiển thị bản đồ SVG Vector trực quan */}
            <div className="map-viewport">
              <svg
                id="hcm-svg-map"
                className="svg-map-container"
                viewBox="0 0 800 550"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#090d16" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                </defs>

                {/* Nền bản đồ */}
                <rect width="100%" height="100%" fill="url(#grid-grad)" />

                {/* Lưới tọa độ ngầm */}
                <g stroke="#1e293b" strokeWidth="0.5" strokeDasharray="3 6">
                  <line x1="0" y1="110" x2="800" y2="110" />
                  <line x1="0" y1="220" x2="800" y2="220" />
                  <line x1="0" y1="330" x2="800" y2="330" />
                  <line x1="0" y1="440" x2="800" y2="440" />
                  <line x1="200" y1="0" x2="200" y2="550" />
                  <line x1="400" y1="0" x2="400" y2="550" />
                  <line x1="600" y1="0" x2="600" y2="550" />
                </g>

                {/* Các mảng ranh giới đô thị tượng trưng */}
                <g className="districts-layer">
                  {/* Khu vực Bình Dương kết nối */}
                  <path className="district-boundary" d="M 220 30 L 460 30 L 520 120 L 320 140 Z" />
                  <text x="340" y="70" className="district-label">BÌNH DƯƠNG</text>

                  {/* TP Thủ Đức */}
                  <path className="district-boundary" d="M 330 140 L 540 120 L 610 280 L 440 310 L 370 230 Z" />
                  <text x="460" y="210" className="district-label">TP. THỦ ĐỨC</text>

                  {/* Vùng Nội đô TP.HCM */}
                  <path className="district-boundary" d="M 170 170 L 360 170 L 390 320 L 250 380 L 150 290 Z" />
                  <text x="230" y="240" className="district-label">NỘI ĐÔ TP.HCM (Q.1, Q.3, BÌNH THẠNH, GÒ VẤP)</text>

                  {/* Khu vực Nam Sài Gòn */}
                  <path className="district-boundary" d="M 230 380 L 440 320 L 510 470 L 290 520 Z" />
                  <text x="320" y="440" className="district-label">Q.7 • Q.8 • NHÀ BÈ</text>

                  {/* Khu vực Bà Rịa - Vũng Tàu kết nối */}
                  <path className="district-boundary" d="M 620 280 L 780 260 L 770 480 L 580 460 Z" />
                  <text x="660" y="380" className="district-label">BÀ RỊA - VŨNG TÀU</text>
                </g>

                {/* Hệ thống Thủy văn & Sông Sài Gòn */}
                <g className="rivers-layer">
                  <path className="river-path" d="M 270 40 Q 320 90 310 140 T 360 210 T 390 280 T 420 340 T 470 430 T 520 540" />
                  <text x="400" y="260" fill="#38bdf8" fontSize="10" fontStyle="italic" opacity="0.8">Sông Sài Gòn</text>

                  <path className="river-path" d="M 520 80 Q 560 180 580 260 T 560 380 T 600 520" stroke="#1d4ed8" />
                  <text x="560" y="160" fill="#60a5fa" fontSize="10" fontStyle="italic" opacity="0.8">Sông Đồng Nai</text>

                  <path className="canal-path" d="M 220 180 Q 280 220 370 250" />
                  <path className="canal-path" d="M 200 360 Q 310 370 420 345" />
                </g>

                {/* Lớp các Pin điểm ngập */}
                <g id="map-pins-layer">
                  {filteredSpots.map((spot) => {
                    const coords = projectCoordinates(spot.lat, spot.lng);
                    const isSelected = spot.id === selectedSpot.id;
                    let pinColor = "#f43f5e";
                    if (spot.severity === "moderate") pinColor = "#f97316";
                    if (spot.severity === "minor") pinColor = "#eab308";

                    return (
                      <g
                        key={spot.id}
                        className="flood-pin"
                        style={{ cursor: "pointer" }}
                        transform={`translate(${coords.x}, ${coords.y})`}
                        onClick={() => setSelectedSpotId(spot.id)}
                      >
                        {spot.severity === "severe" && (
                          <circle className="pin-pulse" r="8" fill={pinColor} fillOpacity="0.4" />
                        )}
                        <circle
                          r={isSelected ? 10 : 7}
                          fill={pinColor}
                          stroke="#ffffff"
                          strokeWidth={isSelected ? 3 : 2}
                        />
                        <title>{`${spot.name} (${spot.district}) - ${spot.depth}`}</title>
                      </g>
                    );
                  })}
                </g>
              </svg>

              {/* Chú thích bản đồ (Legend) */}
              <div
                style={{
                  position: "absolute",
                  bottom: "12px",
                  left: "12px",
                  background: "rgba(15, 23, 42, 0.85)",
                  backdropFilter: "blur(6px)",
                  border: "1px solid #334155",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  fontSize: "11px",
                  color: "#cbd5e1",
                  display: "flex",
                  gap: "12px",
                  zIndex: 5,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#f43f5e",
                      display: "inline-block",
                    }}
                  />
                  Ngập nặng (&gt;30cm)
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#f97316",
                      display: "inline-block",
                    }}
                  />
                  Ngập vừa (15-30cm)
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#eab308",
                      display: "inline-block",
                    }}
                  />
                  Ngập nhẹ (&lt;15cm)
                </div>
              </div>
            </div>

            {/* Cột thông tin chi tiết điểm ngập khi click */}
            <div className="map-sidebar-details" id="map-spot-details">
              <div className="spot-detail-card">
                <div className="spot-tag-row">
                  <span
                    className={`badge-pill ${
                      selectedSpot.severity === "severe"
                        ? "badge-severe"
                        : selectedSpot.severity === "moderate"
                        ? "badge-moderate"
                        : "badge-minor"
                    }`}
                  >
                    {selectedSpot.severityText}
                  </span>
                  <span
                    className="badge-pill"
                    style={{ background: "#e0f2fe", color: "#0369a1" }}
                  >
                    {selectedSpot.district}
                  </span>
                </div>
                <h3>{selectedSpot.name}</h3>
                <p style={{ fontSize: "0.88rem", color: "#475569", marginBottom: "1.25rem" }}>
                  {selectedSpot.description}
                </p>

                <div className="detail-specs-grid">
                  <div className="spec-item">
                    <div className="label">Mức nước ngập sâu</div>
                    <div className="val" style={{ color: "#e11d48" }}>
                      {selectedSpot.depth}
                    </div>
                  </div>
                  <div className="spec-item">
                    <div className="label">Thời gian tụ nước</div>
                    <div className="val">{selectedSpot.duration}</div>
                  </div>
                  <div className="spec-item" style={{ gridColumn: "span 2" }}>
                    <div className="label">Nguyên nhân chính</div>
                    <div className="val">{selectedSpot.causeText}</div>
                  </div>
                </div>

                <div className="detail-solution-box">
                  <div className="title">Phương án & Lộ trình xử lý</div>
                  <div className="desc">{selectedSpot.status}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="article-container">
        <h2 className="editorial-h2" id="so-lieu">
          2. Dữ liệu phân tích: Bức tranh cơ cấu ngập úng
        </h2>
        <p className="editorial-p">
          Khi bóc tách dữ liệu 159 điểm ngập của toàn thành phố, các con số cho thấy sự phân hóa rõ rệt về mức độ nghiêm trọng cũng như nguồn gốc gây ngập. Đáng chú ý, mưa cực đoan và triều cường dâng cao là hai tác nhân chủ chốt, nhưng khi kết hợp lại sẽ tạo ra tình trạng &quot;ngập kép&quot; kéo dài hàng giờ đồng hồ.
        </p>

        {/* KHỐI BIỂU ĐỒ TRỰC QUAN HÓA (CHARTS GRID) */}
        <div className="charts-section-grid">
          {/* Biểu đồ 1: Mức độ ngập */}
          <div className="chart-card">
            <h3 className="chart-card-title">Phân loại mức độ nghiêm trọng</h3>
            <p className="chart-card-subtitle">
              Cơ cấu 159 điểm ngập theo độ sâu và thời gian tụ nước
            </p>
            <div id="severity-chart-bars">
              {ARTICLE_DATA.charts.severityDistribution.map((item) => (
                <div key={item.label} className="chart-bar-item">
                  <div className="chart-bar-label-row">
                    <span>{item.label}</span>
                    <span style={{ color: item.color, fontWeight: 700 }}>
                      {item.count} điểm ({item.percent}%)
                    </span>
                  </div>
                  <div className="chart-bar-track">
                    <div
                      className="chart-bar-fill"
                      style={{ width: `${item.percent}%`, backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Biểu đồ 2: Nguyên nhân gây ngập */}
          <div className="chart-card">
            <h3 className="chart-card-title">Nguyên nhân kích hoạt ngập úng</h3>
            <p className="chart-card-subtitle">
              Tỉ lệ điểm ngập kích hoạt do mưa, triều cường hoặc kết hợp cả hai
            </p>
            <div id="causes-chart-bars">
              {ARTICLE_DATA.charts.causesDistribution.map((item) => (
                <div key={item.cause} className="chart-bar-item">
                  <div className="chart-bar-label-row">
                    <span>{item.cause}</span>
                    <span style={{ color: item.color, fontWeight: 700 }}>
                      {item.count} điểm ({item.percent}%)
                    </span>
                  </div>
                  <div className="chart-bar-track">
                    <div
                      className="chart-bar-fill"
                      style={{ width: `${item.percent}%`, backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Biểu đồ 3: Phân bổ theo địa bàn */}
          <div className="chart-card">
            <h3 className="chart-card-title">Phân bổ theo khu vực địa bàn</h3>
            <p className="chart-card-subtitle">
              Số lượng điểm ngập tại nội đô và các vùng liên kết mở rộng
            </p>
            <div id="region-distribution-list">
              {ARTICLE_DATA.charts.topRegions.map((reg) => (
                <div
                  key={reg.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.75rem 0",
                    borderBottom: "1px solid #f1f5f9",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.92rem", color: "#0f172a" }}>
                      {reg.name}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "#64748b" }}>
                      Trong đó {reg.heavy} điểm ngập rất nặng
                    </div>
                  </div>
                  <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0284c7" }}>
                    {reg.spots} <span style={{ fontSize: "0.75rem", fontWeight: 500 }}>điểm</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* NGUYÊN NHÂN CỐT LÕI (ROOT CAUSES) */}
        <h2 className="editorial-h2" id="nguyen-nhan">
          3. Vì sao cứ mưa to, triều dâng là phố biến thành sông?
        </h2>
        <p className="editorial-p">
          Không chỉ đơn thuần là lượng mưa lớn, tình trạng ngập lụt tại đô thị đặc biệt như TP.HCM là hệ quả tổng hòa của ba nhóm nguyên nhân cấu trúc sâu xa diễn ra suốt nhiều thập kỷ:
        </p>

        <div className="causes-grid" id="root-causes-grid">
          {ARTICLE_DATA.rootCauses.map((item) => (
            <div key={item.step} className="cause-card">
              <span className="cause-step-badge">NGUYÊN NHÂN {item.step}</span>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* PULL QUOTE CHUYÊN GIA */}
        <div className="editorial-quote">
          <blockquote>
            &quot;Chống ngập cho TP.HCM không thể chỉ dựa vào việc đào cống to hơn. Bản chất của nước là cần chỗ chảy và chỗ trữ. Nếu chúng ta tiếp tục bê tông hóa và không trả lại các không gian trữ nước tự nhiên, thì nước sẽ biến mặt đường thành hồ chứa.&quot;
          </blockquote>
          <cite>
            {ARTICLE_DATA.expertQuotes[0].author}{" "}
            <span>• {ARTICLE_DATA.expertQuotes[0].role}</span>
          </cite>
        </div>

        {/* THANH TRƯỢT SO SÁNH TRƯỚC / SAU (BEFORE / AFTER SIMULATION) */}
        <div className="before-after-wrapper">
          <div className="before-after-header">
            <h3>Mô phỏng hiệu quả công trình chống ngập</h3>
            <p>
              Kéo thanh trượt để so sánh cảnh quan tuyến phố trước và sau khi hoàn thiện cống hộp và trạm bơm
            </p>
          </div>

          <div className="slider-container">
            {/* Lớp TRƯỚC (BEFORE) */}
            <div className="slider-img slider-before">
              <span className="slider-tag">HIỆN TRẠNG (CHƯA ĐẦU TƯ)</span>
              <div className="slider-text-title">Ngập sâu 40 - 65 cm</div>
              <div className="slider-text-desc">
                Mưa cực đoan làm tê liệt giao thông, nước tràn vào nhà dân, thời gian tụ nước trên 180 phút.
              </div>
            </div>

            {/* Lớp SAU (AFTER) */}
            <div
              className="slider-img slider-after"
              id="slider-after-layer"
              style={{ width: `${sliderValue}%` }}
            >
              <span className="slider-tag">SAU KHI HOÀN THIỆN DỰ ÁN</span>
              <div className="slider-text-title">Khô ráo & Thông thoáng</div>
              <div className="slider-text-desc">
                Hệ thống cống hộp kết hợp van ngăn triều và trạm bơm tiêu thoát nước trong vòng 15 - 20 phút.
              </div>
            </div>

            {/* Điều khiển thanh trượt */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="slider-range-input"
              id="before-after-range"
            />
            <div
              className="slider-handle-line"
              id="slider-handle-line"
              style={{ left: `${sliderValue}%` }}
            />
            <div
              className="slider-handle-button"
              id="slider-handle-button"
              style={{ left: `${sliderValue}%` }}
            >
              ↔
            </div>
          </div>
        </div>

        {/* LỘ TRÌNH 142.000 TỈ ĐỒNG (ROADMAP) */}
        <h2 className="editorial-h2" id="lo-trinh">
          4. Lộ trình 142.000 tỉ đồng: Làm gì, ở đâu, khi nào xong?
        </h2>
        <p className="editorial-p">
          Để giải quyết bài toán chống ngập mang tính chiến lược và căn cơ, TP.HCM đã vạch ra kế hoạch hành động giai đoạn 2026 – 2030 với <strong>87 dự án</strong> trọng điểm, tổng vốn đầu tư ước tính vượt <strong>142.000 tỉ đồng</strong>. Mục tiêu dứt điểm 50 vị trí rốn ngập lớn nhất và vận hành đồng bộ hệ thống kiểm soát triều thông minh.
        </p>

        <div className="roadmap-container" id="roadmap-phases-container">
          {ARTICLE_DATA.roadmap.phases.map((phase) => (
            <div key={phase.phase} className="phase-card">
              <div className="phase-header">
                <div className="phase-title-group">
                  <div>
                    <span className="time-badge">{phase.time}</span>
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0284c7" }}>
                      {phase.badge}
                    </span>
                  </div>
                  <h3>{phase.phase}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#64748b", marginTop: "0.35rem" }}>
                    {phase.description}
                  </p>
                </div>
                <div className="phase-budget-pill">
                  <div className="val">{phase.budget}</div>
                  <div className="label">Quy mô vốn • {phase.projectsCount} dự án</div>
                </div>
              </div>

              <div className="projects-table-list">
                {phase.keyProjects.map((proj) => (
                  <div key={proj.name} className="project-item-card">
                    <div className="project-name">{proj.name}</div>
                    <div className="project-meta-row">
                      <span className="budget">{proj.budget}</span>
                      <span className="status">{proj.status}</span>
                    </div>
                    <div className="project-impact">
                      <strong>Tác động:</strong> {proj.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CÔNG CỤ TRA CỨU ĐIỂM NGẬP NHANH CHO NGƯỜI DÂN */}
        <div className="lookup-widget" id="tra-cuu">
          <h3>Tra cứu tuyến đường của bạn</h3>
          <p>
            Nhập tên đường hoặc quận huyện để kiểm tra vị trí của bạn có nằm trong danh mục điểm ngập và xem dự án khắc phục tương ứng.
          </p>

          <div className="lookup-input-group">
            <input
              type="text"
              id="lookup-input"
              className="lookup-input"
              placeholder="Ví dụ: Chợ Thủ Đức, Quốc Hương, Nguyễn Văn Khối, Huỳnh Tấn Phát..."
              value={lookupQuery}
              onChange={(e) => setLookupQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleLookup();
              }}
            />
            <button id="lookup-btn" className="lookup-btn" onClick={handleLookup}>
              Tra cứu ngay
            </button>
          </div>

          <div className="lookup-results" id="lookup-results">
            {lookupResults !== null && (
              <>
                {lookupResults.length === 0 ? (
                  <div
                    style={{
                      background: "#fef2f2",
                      border: "1px solid #fecaca",
                      padding: "1rem",
                      borderRadius: "8px",
                      color: "#991b1b",
                      fontSize: "0.9rem",
                    }}
                  >
                    Không tìm thấy điểm ngập nặng trùng khớp với từ khóa &quot;<strong>{lookupQuery}</strong>&quot;. Tuyến đường của bạn có thể thuộc danh mục ngập nhẹ cục bộ hoặc đã được đầu tư cải tạo!
                  </div>
                ) : (
                  lookupResults.map((s) => (
                    <div
                      key={s.id}
                      style={{
                        background: "white",
                        border: "1px solid #bae6fd",
                        borderRadius: "10px",
                        padding: "1.25rem",
                        marginBottom: "0.75rem",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0369a1" }}>
                          {s.name}
                        </h4>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            padding: "0.2rem 0.6rem",
                            borderRadius: "999px",
                            background: "#ffe4e6",
                            color: "#be123c",
                          }}
                        >
                          {s.severityText}
                        </span>
                      </div>
                      <p style={{ fontSize: "0.88rem", color: "#475569", marginBottom: "0.6rem" }}>
                        {s.description}
                      </p>
                      <div style={{ fontSize: "0.82rem", color: "#0f172a" }}>
                        <strong>Độ sâu:</strong> {s.depth} | <strong>Thời gian:</strong> {s.duration} | <strong>Khu vực:</strong> {s.district}
                      </div>
                      <div
                        style={{
                          marginTop: "0.6rem",
                          paddingTop: "0.6rem",
                          borderTop: "1px dashed #e2e8f0",
                          fontSize: "0.82rem",
                          color: "#047857",
                        }}
                      >
                        <strong>Dự án giải quyết:</strong> {s.status}
                      </div>
                    </div>
                  ))
                )}
              </>
            )}
          </div>
        </div>

        {/* NGUỒN TÀI LIỆU & NÚT TẢI BỘ DỮ LIỆU */}
        <div className="data-sources-box">
          <div className="source-text">
            <h4>Nguồn dữ liệu & Phương pháp luận</h4>
            <p>
              Số liệu thu thập từ Sở Xây dựng TP.HCM, Báo cáo Quy hoạch Đô thị 2026, Bản tin Khí tượng Thủy văn Nam Bộ và tư liệu chuyên đề của Báo Thanh Niên.
            </p>
          </div>
          <a
            href="#"
            id="download-dataset-btn"
            className="download-btn"
            onClick={handleDownloadDataset}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Tải bộ dữ liệu JSON (Open Data)
          </a>
        </div>
      </main>

      {/* FOOTER TRANG WEB */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <h4>BÁO DỮ LIỆU TƯƠNG TÁC • DATA JOURNALISM TEMPLATE</h4>
            <p>
              Thiết kế chuẩn hóa cho các bài báo chuyên sâu, phóng sự điều tra và trực quan hóa số liệu đô thị.
            </p>
          </div>
          <div className="footer-copy">
            © 2026 Báo Thanh Niên & Tác giả Dữ liệu. Mẫu giao diện hỗ trợ tái sử dụng cho các dự án báo chí dữ liệu.
          </div>
        </div>
      </footer>
    </>
  );
}
