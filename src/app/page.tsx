"use client";

import { useState, useEffect, useMemo } from "react";
import ARTICLE_DATA, { TechTransferLocation } from "@/data/articleData";

export default function Home() {
  // 1. Reading progress bar
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

  // 2. Timeline filter state
  const [timelineFilter, setTimelineFilter] = useState<"all" | "agriculture" | "fisheries">("all");

  const filteredMilestones = useMemo(() => {
    if (timelineFilter === "all") return ARTICLE_DATA.timeline.milestones;
    return ARTICLE_DATA.timeline.milestones.filter(
      (m) => m.sector === timelineFilter || m.sector === "both"
    );
  }, [timelineFilter]);

  // 3. Photo Story state (5 steps)
  const [activePhotoStep, setActivePhotoStep] = useState<number>(1);
  const currentPhoto = useMemo(() => {
    return (
      ARTICLE_DATA.riceResearch.photoStory.find((p) => p.step === activePhotoStep) ||
      ARTICLE_DATA.riceResearch.photoStory[0]
    );
  }, [activePhotoStep]);

  // 4. Video simulation state (75-90 seconds script)
  const [currentVideoStepIdx, setCurrentVideoStepIdx] = useState<number>(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isVideoPlaying) {
      timer = setInterval(() => {
        setCurrentVideoStepIdx((prev) => {
          if (prev < ARTICLE_DATA.aquacultureResearch.videoSimulation.steps.length - 1) {
            return prev + 1;
          }
          setIsVideoPlaying(false);
          return 0;
        });
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isVideoPlaying]);

  const currentVideoStep = ARTICLE_DATA.aquacultureResearch.videoSimulation.steps[currentVideoStepIdx];

  // 5. Technology Map state (Toggle 2 layers: domestic & international)
  const [mapLayer, setMapLayer] = useState<"domestic" | "international">("domestic");
  const [selectedSpotId, setSelectedSpotId] = useState<string>("vinhchau_baclieu");

  const activeSpotsList = useMemo(() => {
    return mapLayer === "domestic"
      ? ARTICLE_DATA.technologyMap.domesticSpots
      : ARTICLE_DATA.technologyMap.internationalSpots;
  }, [mapLayer]);

  useEffect(() => {
    if (mapLayer === "domestic") {
      setSelectedSpotId("vinhchau_baclieu");
    } else {
      setSelectedSpotId("japan_jica");
    }
  }, [mapLayer]);

  const selectedLocation = useMemo(() => {
    return (
      activeSpotsList.find((s) => s.id === selectedSpotId) || activeSpotsList[0]
    );
  }, [activeSpotsList, selectedSpotId]);

  // 6. Interactive Interviews state (3 groups: farmer, student, lecturer)
  const [activeInterviewGroup, setActiveInterviewGroup] = useState<"farmer" | "student" | "lecturer">("farmer");
  const currentInterview = useMemo(() => {
    return (
      ARTICLE_DATA.interviews.find((i) => i.group === activeInterviewGroup) ||
      ARTICLE_DATA.interviews[0]
    );
  }, [activeInterviewGroup]);

  // 7. Quick Lookup tool
  const [lookupQuery, setLookupQuery] = useState("");
  const [lookupResults, setLookupResults] = useState<TechTransferLocation[] | null>(null);

  const handleLookup = () => {
    const q = lookupQuery.trim().toLowerCase();
    if (!q) {
      setLookupResults([]);
      return;
    }
    const allSpots = [
      ...ARTICLE_DATA.technologyMap.domesticSpots,
      ...ARTICLE_DATA.technologyMap.internationalSpots,
    ];
    const matches = allSpots.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.province.toLowerCase().includes(q) ||
        s.technology.toLowerCase().includes(q) ||
        s.badge.toLowerCase().includes(q) ||
        s.achievements.toLowerCase().includes(q)
    );
    setLookupResults(matches);
  };

  // 8. Download Dataset handler
  const handleDownloadDataset = (e: React.MouseEvent) => {
    e.preventDefault();
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(ARTICLE_DATA, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "dai-hoc-can-tho-nong-thuy-san-2026.json");
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
          <span>ĐẠI HỌC CẦN THƠ</span>
        </a>
        <ul className="nav-links">
          <li><a href="#lich-su">Dấu mốc 30 năm</a></li>
          <li><a href="#giong-lua">Giống lúa Nông Dân</a></li>
          <li><a href="#thuy-san">Cá tra & Bông lau</a></li>
          <li><a href="#quoc-te">Hợp tác quốc tế</a></li>
          <li><a href="#ban-do">Bản đồ công nghệ</a></li>
          <li><a href="#phong-van">Góc nhìn thực tế</a></li>
          <li><a href="#tra-cuu" className="nav-cta">Tra cứu giống & công nghệ</a></li>
        </ul>
      </header>

      {/* Bìa bài báo (Hero Section với hình nền toàn cảnh Đại học Cần Thơ) */}
      <section className="hero-section">
        <div
          className="hero-campus-bg"
          role="img"
          aria-label="Toàn cảnh Khu II Trường Đại học Cần Thơ nhìn từ trên cao"
        />
        <div className="hero-overlay-texture" />

        <div className="split-badge-container">
          <div className="split-badge-item">
            <span>📍</span> Toàn cảnh Khu II – Đại học Cần Thơ (Đường 3/2, TP. Cần Thơ)
          </div>
        </div>

        <div className="hero-container">
          <span className="category-tag">
            {ARTICLE_DATA.meta.category} • {ARTICLE_DATA.meta.subCategory}
          </span>
          <h1 className="hero-title">
            TRI THỨC ĐẠI HỌC CẦN THƠ:{" "}
            <span className="hero-title-subline">
              TỪ NGHIÊN CỨU ĐẾN
              <br />
              SẢN XUẤT THỰC TIỄN
            </span>
          </h1>
          <p className="hero-subtitle">
            {ARTICLE_DATA.meta.subtitle}
          </p>

          <div className="hero-meta">
            <span>
              <strong>Thực hiện:</strong> {ARTICLE_DATA.meta.author}
            </span>
            <span>•</span>
            <span>
              <strong>Người hướng dẫn:</strong> {ARTICLE_DATA.meta.advisor}
            </span>
            <span>•</span>
            <span>
              <strong>Thời lượng:</strong> {ARTICLE_DATA.meta.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Bốn chỉ số vàng (Key Takeaway Metrics) */}
      <section className="metrics-section">
        <div className="metrics-grid">
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

      {/* Phần 1: Từ cơ sở đào tạo của vùng đến các công trình nghiên cứu ứng dụng */}
      <main className="article-container" id="lich-su">
        <h2 className="editorial-h2">
          1. Từ cơ sở đào tạo của vùng đến các công trình{" "}
          <span className="nowrap-phrase">nghiên cứu ứng dụng</span>
        </h2>

        <p className="article-lead">
          Từ năm 1966, khi Viện Đại học Cần Thơ có Trường Cao đẳng Nông nghiệp, lĩnh vực nông nghiệp đã trở thành một phần gắn bó mật thiết trong quá trình phát triển của nhà trường. Đến năm 1976, bộ phận chuyên môn trong lĩnh vực thủy sản được hình thành trong Khoa Nông nghiệp, trên cơ sở đó Khoa Thủy sản được thành lập năm 1978, tái thành lập năm 2002 và phát triển thành Trường Thủy sản vào tháng 12/2022.
        </p>

        <p className="editorial-p">
          Song song với quá trình phát triển trong khâu tổ chức, các nghiên cứu từng bước hướng đến giải quyết nhu cầu sản xuất của vùng ĐBSCL. Tháng 5/1991, Trường Đại học Cần Thơ cung cấp <strong>18 tấn giống lúa kháng rầy</strong> cho các địa phương sản xuất vụ Hè - Thu. Đây là một trong những điểm sáng về phục vụ cộng đồng của Trường, góp phần giải quyết vấn đề an ninh lương thực của quốc gia.
        </p>

        <p className="editorial-p">
          Giai đoạn 1990–2007, Trường đẩy mạnh nghiên cứu và đạt nhiều thành quả. Đặc biệt là quy trình sản xuất giống cá tra được triển khai từ đầu năm 1995 trong Dự án cá da trơn châu Á - Catfish Asia do Cộng đồng châu Âu tài trợ, góp phần đưa Đồng bằng sông Cửu Long đứng đầu cả nước về sản lượng xuất khẩu cá tra cho đến ngày hôm nay.
        </p>

        <p className="editorial-p">
          Đến năm 2026, quá trình nghiên cứu tiếp tục ghi nhận những dấu mốc mới với giống lúa Nông Dân 2 được công nhận lưu hành tại Đồng bằng sông Cửu Long. Bên cạnh đó, Đại học Cần Thơ đã ghi nhận thành công trong việc nuôi cá bố mẹ, nhân giống nhân tạo cá bông lau. Từ giống lúa phục vụ sản xuất đến quy trình nhân giống thủy sản, các kết quả này phản ánh những bước tiến trong nghiên cứu của Đại học Cần Thơ; đồng thời đặt ra yêu cầu tiếp tục đánh giá khả năng nhân rộng và hiệu quả ứng dụng trong thực tế.
        </p>

        {/* TIMELINE TƯƠNG TÁC 2 NHÁNH: NÔNG NGHIỆP & THỦY SẢN */}
        <div className="timeline-block">
          <div className="timeline-header-row">
            <div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--primary-green)" }}>
                Dòng chảy thời gian: Nông nghiệp song hành Thủy sản
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                Cuộn xem các mốc lịch sử kiến tạo và chuyển giao công nghệ tiêu biểu
              </p>
            </div>
            <div className="timeline-nav-tabs">
              <button
                className={`timeline-tab-btn ${timelineFilter === "all" ? "active-all" : ""}`}
                onClick={() => setTimelineFilter("all")}
              >
                Tất cả mốc son
              </button>
              <button
                className={`timeline-tab-btn ${timelineFilter === "agriculture" ? "active-agri" : ""}`}
                onClick={() => setTimelineFilter("agriculture")}
              >
                🌾 Chỉ Nông nghiệp
              </button>
              <button
                className={`timeline-tab-btn ${timelineFilter === "fisheries" ? "active-fish" : ""}`}
                onClick={() => setTimelineFilter("fisheries")}
              >
                🐟 Chỉ Thủy sản
              </button>
            </div>
          </div>

          <div className="dual-timeline-grid">
            {filteredMilestones.map((m) => {
              const cardClass =
                m.sector === "agriculture"
                  ? "agri"
                  : m.sector === "fisheries"
                  ? "fish"
                  : "both";

              return (
                <div key={m.id} className={`timeline-card ${cardClass}`}>
                  <div className="timeline-card-header">
                    <span className="timeline-year-badge">{m.year}</span>
                    <span className="timeline-metric-pill">
                      {m.sectorName} • {m.metricValue}
                    </span>
                  </div>
                  <h4 className="timeline-card-title">{m.title}</h4>
                  <div className="timeline-card-subtitle">{m.subtitle}</div>
                  <p className="timeline-card-desc">{m.description}</p>
                  <div className="timeline-card-source">Nguồn: {m.source}</div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Phần 2: Hành trình nghiên cứu đi vào đời sống sản xuất */}
      <main className="article-container" id="giong-lua">
        <h2 className="editorial-h2">
          2. Hành trình nghiên cứu đi vào đời sống sản xuất
        </h2>

        <h3 className="editorial-h3">
          2.1. Giống lúa: Từ chống chịu sâu bệnh đến phân hóa theo chất lượng{" "}
          <span className="nowrap-phrase">và thị trường</span>
        </h3>

        <p className="editorial-p">
          Tháng 5/1991, Đại học Cần Thơ cung cấp 18 tấn giống lúa kháng rầy cho các địa phương trong vùng ĐBSCL. Đây là một dấu mốc cho thấy nghiên cứu chọn tạo giống của trường đã hướng đến nhu cầu sản xuất thực tế. Từ những giống MTL được nghiên cứu, khảo nghiệm và đưa vào sản xuất, đến năm 2026 giống lúa Nông Dân 1 và Nông Dân 2, lần lượt được lai tạo và công nhận lưu hành, hoạt động chọn tạo giống tiếp tục mở rộng theo hướng kết hợp khả năng thích ứng với điều kiện canh tác và đặc tính chất lượng gạo.
        </p>

        <p className="editorial-p">
          Hai giống lúa Nông Dân 1 và Nông Dân 2 thuộc Dự án BOLD giai đoạn 2023-2027, do Đại học Cần Thơ phối hợp với các đơn vị liên quan triển khai, với sự tài trợ của Crop Trust. Tính đến giai đoạn đánh giá giữa kỳ, dự án đã đạt những số liệu ấn tượng:
        </p>

        {/* 4 Chỉ số BOLD Project */}
        <div className="bold-project-stats-grid">
          {ARTICLE_DATA.riceResearch.boldStats.map((item) => (
            <div key={item.label} className="bold-stat-card">
              <div className="bold-stat-number">{item.value}</div>
              <div className="bold-stat-unit">{item.unit}</div>
              <div className="bold-stat-label">{item.label}</div>
              <div className="bold-stat-desc">{item.desc}</div>
            </div>
          ))}
        </div>

        <p className="editorial-p">
          Trong quá trình đánh giá <strong>252 giống lúa mùa truyền thống</strong> của Việt Nam, nhóm nghiên cứu xác định 15 giống có khả năng chịu mặn, 10 giống có chất lượng triển vọng, 3 giống kháng bệnh bạc lá và 16 giống kháng bệnh đạo ôn. Những số liệu này cho thấy hoạt động nghiên cứu không chỉ tạo ra giống mới mà còn khai thác nguồn gen để mở rộng vật liệu chọn tạo giống thích ứng với điều kiện ĐBSCL.
        </p>

        {/* Bảng phân bổ 4 đặc tính nguồn gen */}
        <div className="traits-grid">
          {ARTICLE_DATA.riceResearch.genTraits.map((t) => (
            <div key={t.trait} className="trait-pill-card">
              <div className="trait-pill-header">
                <span className="trait-name">{t.trait}</span>
                <span className="trait-count">{t.count} giống</span>
              </div>
              <div className="trait-desc">{t.desc}</div>
            </div>
          ))}
        </div>

        {/* PHÓNG SỰ ẢNH THEO TRÌNH TỰ NGHIÊN CỨU 5 BƯỚC */}
        <div className="photo-story-wrapper">
          <div style={{ marginBottom: "1.25rem" }}>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "var(--accent-gold)",
                letterSpacing: "1px",
              }}
            >
              Phóng sự ảnh tương tác theo trình tự nghiên cứu
            </span>
            <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--primary-green)", marginTop: "0.25rem" }}>
              Năm bước đưa giống lúa từ phòng thí nghiệm ra đồng ruộng
            </h3>
          </div>

          <div className="photo-story-nav">
            {ARTICLE_DATA.riceResearch.photoStory.map((s) => (
              <button
                key={s.step}
                className={`step-nav-btn ${activePhotoStep === s.step ? "active" : ""}`}
                onClick={() => setActivePhotoStep(s.step)}
              >
                Bước {s.step}: {s.stageName}
              </button>
            ))}
          </div>

          <div className="photo-story-content-layout">
            <div className="photo-visual-card">
              <span className="photo-visual-tag">{currentPhoto.badge}</span>
              <div className="photo-visual-overlay" />
              <div className="photo-stage-title">{currentPhoto.title}</div>
              <div className="photo-caption-text">{currentPhoto.caption}</div>
            </div>

            <div className="photo-details-pane">
              <span className="photo-context-badge">Bối cảnh: {currentPhoto.context}</span>
              <h4>{currentPhoto.stageName}</h4>
              <p className="photo-desc-p">{currentPhoto.description}</p>
              <ul className="photo-bullets-list">
                {currentPhoto.keyDetails.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BIỂU ĐỒ NĂNG SUẤT KHẢO NGHIỆM CỦA HAI GIỐNG LÚA (HÌNH MINH HỌA) */}
        <div className="yield-chart-wrapper">
          <h3 className="chart-title-main">Năng suất khảo nghiệm của hai giống lúa</h3>
          <p className="chart-subtitle-note">
            Khoảng năng suất thấp nhất–cao nhất, theo giống và vụ; đơn vị tấn/ha. Đây là kết quả khảo nghiệm, không phải năng suất sản xuất đại trà.
          </p>

          <div className="yield-legend-row">
            <div className="legend-item">
              <span className="legend-dot-low" />
              <span>Mức thấp</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot-high" />
              <span>Mức cao</span>
            </div>
          </div>

          <div className="yield-chart-body">
          <div className="yield-bars-container">
            {/* Các vạch mốc Y (0, 2, 4, 6, 8 tấn/ha) */}
            <div className="grid-line-y" style={{ bottom: "0%" }}>
              <span className="grid-label-y">0</span>
            </div>
            <div className="grid-line-y" style={{ bottom: "25%" }}>
              <span className="grid-label-y">2</span>
            </div>
            <div className="grid-line-y" style={{ bottom: "50%" }}>
              <span className="grid-label-y">4</span>
            </div>
            <div className="grid-line-y" style={{ bottom: "75%" }}>
              <span className="grid-label-y">6</span>
            </div>
            <div className="grid-line-y" style={{ bottom: "100%" }}>
              <span className="grid-label-y">8</span>
            </div>

            {/* 4 Cặp cột: Nông Dân 1 ĐX, Nông Dân 1 HT, Nông Dân 2 ĐX, Nông Dân 2 HT */}
            {ARTICLE_DATA.riceResearch.yieldData.map((d) => {
              // Quy đổi ra tỉ lệ trên trục max 8 tấn/ha (100% = 8 tấn/ha)
              const maxChartValue = 8;
              const lowPercent = (d.minYield / maxChartValue) * 100;
              const highPercent = (d.maxYield / maxChartValue) * 100;

              return (
                <div key={`${d.variety}-${d.season}`} className="yield-bar-group">
                  {/* Cột Mức Thấp */}
                  <div
                    className="bar-column bar-low"
                    style={{ height: `${lowPercent}%` }}
                    title={`Mức thấp: ${d.minYield} tấn/ha`}
                  >
                    <span className="bar-value-tooltip">{d.minYield}</span>
                  </div>
                  {/* Cột Mức Cao */}
                  <div
                    className="bar-column bar-high"
                    style={{ height: `${highPercent}%` }}
                    title={`Mức cao: ${d.maxYield} tấn/ha`}
                  >
                    <span className="bar-value-tooltip">{d.maxYield}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nhãn bên dưới từng nhóm */}
          <div className="yield-labels-row">
            <div className="yield-group-label">Nông Dân 1 • Đông Xuân</div>
            <div className="yield-group-label">Nông Dân 1 • Hè Thu</div>
            <div className="yield-group-label">Nông Dân 2 • Đông Xuân</div>
            <div className="yield-group-label">Nông Dân 2 • Hè Thu</div>
          </div>
          </div>
        </div>

        {/* BẢNG ĐỐI CHIẾU HAI GIỐNG LÚA NÔNG DÂN (HÌNH MINH HỌA) */}
        <div className="comparison-table-wrapper">
          <div className="comparison-table-title">Đối chiếu hai giống lúa Nông Dân</div>
          <table className="comparison-table">
            <thead>
              <tr>
                <th style={{ width: "32%" }}>Chỉ tiêu</th>
                <th style={{ width: "34%" }}>Nông Dân 1</th>
                <th style={{ width: "34%" }}>Nông Dân 2</th>
              </tr>
            </thead>
            <tbody>
              {ARTICLE_DATA.riceResearch.comparisonTable.map((row, idx) => (
                <tr key={idx}>
                  <td><strong>{row.criteria}</strong></td>
                  <td>{row.nongDan1}</td>
                  <td style={{ color: "var(--primary-green)", fontWeight: 600 }}>{row.nongDan2}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="comparison-table-source">
            Nguồn số liệu: Báo Cần Thơ, bài “Triển vọng từ giống lúa mới Nông Dân 1 và Nông Dân 2” • Bằng bảo hộ giống cây trồng ĐHCT.
          </div>
        </div>

        {/* 2.2. Cá da trơn: Từ sản xuất giống cá tra/basa đến bước đầu chủ động nguồn giống cá bông lau */}
        <h3 className="editorial-h3" id="thuy-san">
          2.2. Cá da trơn: Từ sản xuất giống cá tra/basa đến bước đầu chủ động nguồn giống cá bông lau
        </h3>

        <p className="editorial-p">
          Nếu nghiên cứu lúa cho thấy quá trình chọn tạo và hoàn thiện giống theo nhu cầu canh tác, lĩnh vực thủy sản lại phản ánh một bài toán khác: làm chủ quy trình sinh sản để chủ động nguồn con giống phục vụ nuôi trồng.
        </p>

        <p className="editorial-p">
          Năm 1995, Đại học Cần Thơ cùng chuyên gia và các nhà nghiên cứu đã đạt kết quả trong sinh sản nhân tạo cá basa. Đến năm 1999, quy trình sản xuất giống cá tra được phát triển rộng hơn. Những dấu mốc này đặt nền tảng cho hoạt động nghiên cứu và sản xuất giống cá da trơn, một nhóm đối tượng có vai trò quan trọng trong nuôi trồng thủy sản ĐBSCL.
        </p>

        <p className="editorial-p">
          Năm 2026, Đại học Cần Thơ công bố <strong>sinh sản nhân tạo thành công cá bông lau (Pangasius krempfi)</strong> sau hơn hai năm nghiên cứu. Trong khuôn khổ dự án hợp tác quốc tế DIVERSAQUA, nhóm nghiên cứu nuôi cá bố mẹ thành thục từ cá giống trong hệ thống bể tuần hoàn, kích thích sinh sản nhân tạo, sau đó ương cá bột đến giai đoạn cá hương và cá giống.
        </p>

        <p className="editorial-p">
          Điểm đáng chú ý nằm ở sự khác biệt về bài toán nghiên cứu: Với cá tra/basa, các thành tựu trước đây góp phần phát triển quy trình sản xuất giống cho những đối tượng nuôi đã được thương mại hóa rộng rãi. Với cá bông lau, kết quả sinh sản nhân tạo mở ra hướng chủ động nguồn giống của một loài cá da trơn nước lợ có giá trị kinh tế, lâu nay còn phụ thuộc chủ yếu vào khai thác tự nhiên.
        </p>

        {/* BẢNG SO SÁNH CÁ TRA VS CÁ BÔNG LAU */}
        <div className="comparison-table-wrapper">
          <div className="comparison-table-title">Đối chiếu bài toán nghiên cứu cá tra/basa và cá bông lau</div>
          <table className="comparison-table">
            <thead>
              <tr>
                <th style={{ width: "25%" }}>Tiêu chí</th>
                <th style={{ width: "37%" }}>Cá tra / Basa (1995 – 1999)</th>
                <th style={{ width: "38%" }}>Cá bông lau (2026)</th>
              </tr>
            </thead>
            <tbody>
              {ARTICLE_DATA.aquacultureResearch.pangasiusComparison.map((row, idx) => (
                <tr key={idx}>
                  <td><strong>{row.aspect}</strong></td>
                  <td>{row.commercialCatfish}</td>
                  <td style={{ color: "var(--accent-water)", fontWeight: 600 }}>{row.bongLauCatfish}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* TRÌNH PHÁT MÔ PHỎNG VIDEO NGHIÊN CỨU CÁ BÔNG LAU (KỊCH BẢN 75-90 GIÂY) */}
        <div className="video-sim-wrapper">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--accent-water)", textTransform: "uppercase" }}>
                Kịch bản hình ảnh video ngắn (75 – 90 giây)
              </span>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--primary-green)", marginTop: "0.25rem" }}>
                Sinh sản nhân tạo cá bông lau tại Trường Thủy sản
              </h3>
            </div>
            <button
              className="video-play-btn"
              onClick={() => setIsVideoPlaying(!isVideoPlaying)}
            >
              {isVideoPlaying ? "⏸ Tạm dừng trình chiếu" : "▶ Mô phỏng kịch bản (Auto Play)"}
            </button>
          </div>

          <div className="video-player-container">
            <div className="video-screen-display">
              <div className="video-top-meta">
                <span className="video-phase-badge">{currentVideoStep.phase}</span>
                <span className="video-time-counter">Mốc thời gian: {currentVideoStep.seconds}</span>
              </div>

              <div className="video-main-scene">
                <div className="video-scene-title">{currentVideoStep.title}</div>
                <div className="video-scene-desc">{currentVideoStep.sceneDescription}</div>

                {currentVideoStep.interviewQuote && (
                  <div className="video-interview-quote">
                    <div className="video-speaker-tag">
                      🎙 {currentVideoStep.interviewQuote.speaker} • {currentVideoStep.interviewQuote.role}
                    </div>
                    &quot;{currentVideoStep.interviewQuote.content}&quot;
                  </div>
                )}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "0.5rem" }}>
                <div className="video-audio-cue">
                  <span>🔊</span>
                  <span><strong>Âm thanh:</strong> {currentVideoStep.audioCue}</span>
                </div>
                {currentVideoStep.graphicsOverlay && (
                  <div style={{ fontSize: "0.76rem", color: "#fef08a", fontWeight: 700, background: "rgba(0,0,0,0.5)", padding: "0.25rem 0.6rem", borderRadius: "4px" }}>
                    {currentVideoStep.graphicsOverlay}
                  </div>
                )}
              </div>
            </div>

            {/* Thanh điều khiển Scrubber 5 phân đoạn */}
            <div className="video-controls-bar">
              <div className="video-timeline-scrub">
                {ARTICLE_DATA.aquacultureResearch.videoSimulation.steps.map((step, idx) => (
                  <div
                    key={step.seconds}
                    className={`scrub-segment ${idx === currentVideoStepIdx ? "active" : idx < currentVideoStepIdx ? "completed" : ""}`}
                    onClick={() => {
                      setCurrentVideoStepIdx(idx);
                      setIsVideoPlaying(false);
                    }}
                    title={`${step.seconds}: ${step.title}`}
                  />
                ))}
              </div>
              <div className="video-buttons-row">
                <span style={{ fontSize: "0.78rem", color: "#94a3b8" }}>
                  Phân đoạn {currentVideoStepIdx + 1}/5: {currentVideoStep.seconds}
                </span>
                <span style={{ fontSize: "0.78rem", color: "#38bdf8" }}>
                  Nhấp vào từng thanh để xem chi tiết cảnh quay
                </span>
              </div>
            </div>
          </div>

          {/* 5 Bước quy trình vòng đời */}
          <div className="video-lifecycle-steps">
            {ARTICLE_DATA.aquacultureResearch.videoSimulation.lifecycleSteps.map((s) => (
              <div key={s.step} className="lifecycle-step-card">
                <div className="lifecycle-step-num">BƯỚC {s.step}</div>
                <div className="lifecycle-step-name">{s.name}</div>
                <div className="lifecycle-step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Phần 3: Từ ĐBSCL ra quốc tế: Năng lực hợp tác và giá trị thực tế */}
      <main className="article-container" id="quoc-te">
        <h2 className="editorial-h2">
          3. Từ Đồng bằng sông Cửu Long ra quốc tế: Năng lực hợp tác và giá trị thực tế
        </h2>

        <p className="article-lead">
          Thu hút các dự án hợp tác quốc tế và hiện diện trên các bảng xếp hạng uy tín toàn cầu là minh chứng cho năng lực học thuật của Đại học Cần Thơ. Tuy nhiên, dưới góc nhìn phân tích báo chí, số lượng dự án hay tổng kinh phí đầu tư không tự động đồng nghĩa với hiệu quả kinh tế của từng công trình ngoài thực địa, mà đóng vai trò là nguồn lực nền tảng hỗ trợ nghiên cứu, đào tạo và chuyển giao công nghệ.
        </p>

        <p className="editorial-p">
          Giai đoạn 2010–2018, Đại học Cần Thơ đã phối hợp với các đối tác quốc tế triển khai <strong>203 dự án</strong> với tổng kinh phí khoảng <strong>351 tỷ đồng</strong>. Bên cạnh đó, các chương trình hợp tác chiến lược dài hạn đã tạo dựng cơ sở vật chất quan trọng cho nhà trường:
        </p>

        {/* Khối các đối tác chiến lược quốc tế */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem", margin: "2rem 0" }}>
          {ARTICLE_DATA.internationalImpact.strategicPrograms.map((p) => (
            <div
              key={p.programName}
              style={{
                background: "#ffffff",
                border: "1px solid var(--border-light)",
                borderRadius: "14px",
                padding: "1.5rem",
                boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--accent-water)", textTransform: "uppercase" }}>
                  {p.partner}
                </span>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "#64748b" }}>
                  {p.years}
                </span>
              </div>
              <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--primary-green)", marginBottom: "0.5rem" }}>
                {p.programName}
              </h4>
              <p style={{ fontSize: "0.88rem", color: "#334155", marginBottom: "0.75rem", lineHeight: 1.5 }}>
                {p.scope}
              </p>
              <div style={{ fontSize: "0.8rem", color: "#047857", background: "#f0fdf4", padding: "0.4rem 0.65rem", borderRadius: "6px" }}>
                <strong>Tác động:</strong> {p.impact}
              </div>
            </div>
          ))}
        </div>

        <p className="editorial-p">
          Trên bản đồ giáo dục thế giới, vị thế học thuật của nhà trường được ghi nhận khi nhóm ngành Nông – Lâm nghiệp thuộc <strong>QS World University Rankings</strong> xếp trong nhóm <strong>251–300 toàn cầu năm 2020</strong> và tiếp tục duy trì ở nhóm <strong>351–400 giai đoạn 2020–2025</strong>, giữ vị trí dẫn đầu tại Việt Nam. Thứ hạng này đóng vai trò như một chỉ dấu về uy tín học thuật quốc tế, tạo tiền đề để các kết quả nghiên cứu bước ra khỏi giảng đường và đi vào thực tiễn sản xuất tại Đồng bằng sông Cửu Long.
        </p>

        {/* Phần 4: Tác động đối với phát triển kinh tế - xã hội vùng ĐBSCL */}
        <h2 className="editorial-h2">
          4. Tác động đối với phát triển kinh tế - xã hội vùng Đồng bằng sông Cửu Long
        </h2>

        <p className="editorial-p">
          Các kết quả nghiên cứu của Đại học Cần Thơ đã trực tiếp giải quyết các yêu cầu kỹ thuật trong sản xuất, hỗ trợ phát triển các ngành hàng xuất khẩu chủ lực và chuyển đổi sinh kế cho người dân toàn vùng:
        </p>

        {/* 4 Trụ cột tác động */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", margin: "2rem 0" }}>
          {ARTICLE_DATA.socioEconomicImpact.keyThemes.map((theme) => (
            <div
              key={theme.id}
              style={{
                background: "#ffffff",
                border: "1px solid var(--border-light)",
                borderRadius: "14px",
                padding: "1.75rem 1.5rem",
                borderTop: "4px solid var(--primary-leaf)",
                boxShadow: "0 6px 18px rgba(6, 78, 59, 0.03)",
              }}
            >
              <h4 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--primary-green)", marginBottom: "0.75rem" }}>
                {theme.title}
              </h4>
              <p style={{ fontSize: "0.92rem", color: "#334155", lineHeight: 1.65, marginBottom: "1rem" }}>
                {theme.content}
              </p>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontStyle: "italic", borderTop: "1px dashed var(--border-light)", paddingTop: "0.5rem" }}>
                Minh chứng: {theme.proof}
              </div>
            </div>
          ))}
        </div>

        {/* Phần 5: Tác động ngược lại đối với năng lực và vị thế của Đại học Cần Thơ */}
        <h2 className="editorial-h2">
          5. Tác động ngược lại đối với năng lực và vị thế của Đại học Cần Thơ
        </h2>

        <p className="editorial-p">
          Việc chủ động nghiên cứu giải quyết các bài toán thực tiễn của vùng ĐBSCL cũng tạo động lực phát triển ngược lại cho Đại học Cần Thơ trên nhiều phương diện:
        </p>

        <p className="editorial-p">
          <strong>Khẳng định vị thế học thuật và thu hút nguồn lực:</strong> Nguồn dữ liệu thực nghiệm phong phú từ vùng sinh thái ĐBSCL là nền tảng giúp nhà trường khẳng định uy tín khoa học, giữ vững vị trí dẫn đầu tại Việt Nam trong lĩnh vực Nông – Lâm nghiệp nhiều năm liền. Kết quả ứng dụng thực tế cũng tạo cơ sở vững chắc để trường thu hút các dự án hợp tác quốc tế lớn như Catfish Asia (EU), BOLD Rice Vietnam, cùng hơn 200 dự án hợp tác quốc tế khác. Nguồn lực này kết hợp với dự án ODA Nhật Bản 105,9 triệu USD đã hiện đại hóa cơ sở vật chất, tạo tiền đề cho việc gia tăng các bằng độc quyền sở hữu trí tuệ.
        </p>

        <p className="editorial-p">
          <strong>Kiện toàn thể chế tổ chức và nâng cao chất lượng đào tạo:</strong> Quá trình tích lũy nghiên cứu ứng dụng đã thúc đẩy sự phát triển về thể chế, dẫn đến việc thành lập Trường Nông nghiệp và Trường Thủy sản (tháng 12/2022 và tháng 7/2025) trên cơ sở các khoa chuyên môn, đồng thời xây dựng Ngân hàng giống lúa (Rice Genbank) bảo tồn hơn 3.000 mẫu lúa.
        </p>

        <p className="editorial-p">
          Tính đến tháng 9/2026, nhà trường sở hữu <strong>28 văn bằng độc quyền sở hữu công nghiệp</strong>. Các tài sản trí tuệ này được đưa trực tiếp vào công tác giảng dạy và thực hành, giúp sinh viên tiếp cận bài học thực tế ngoài ruộng đồng. Nhờ đó, chất lượng đào tạo được nâng cao, góp phần đưa <strong>tỷ lệ sinh viên có việc làm sau tốt nghiệp của khối Nông – Thủy sản đạt 78,26%</strong>.
        </p>
      </main>

      {/* ĐỒ HỌA 4: BẢN ĐỒ CÁC DỰ ÁN VÀ ĐỊA BÀN TIẾP NHẬN CÔNG NGHỆ (2 LỚP DỮ LIỆU) */}
      <div className="wide-container" id="ban-do">
        <div className="map-story-block">
          <div className="map-story-header">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--primary-emerald)", textTransform: "uppercase" }}>
                  Đồ họa dữ liệu tương tác • Đồ họa 4
                </span>
                <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--primary-green)", marginTop: "0.25rem" }}>
                  Bản đồ các dự án và địa bàn tiếp nhận công nghệ
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                  Chỉ ghim điểm tại đúng các tọa độ đã có minh chứng báo chí, văn bằng và hợp đồng chuyển giao công nghệ.
                </p>
              </div>

              {/* Bộ lọc Toggle 2 lớp: Nội địa (ĐBSCL) vs Quốc tế (R&D) */}
              <div className="map-layer-toggle-group">
                <button
                  className={`layer-toggle-btn ${mapLayer === "domestic" ? "active-domestic" : ""}`}
                  onClick={() => setMapLayer("domestic")}
                >
                  🌾 Lớp Ứng dụng & Chuyển giao (ĐBSCL)
                </button>
                <button
                  className={`layer-toggle-btn ${mapLayer === "international" ? "active-intl" : ""}`}
                  onClick={() => setMapLayer("international")}
                >
                  🌐 Lớp Hợp tác R&D & Tài trợ (Quốc tế)
                </button>
              </div>
            </div>
          </div>

          <div className="map-story-content-layout">
            {/* SVG Vector Map Viewport */}
            <div className="map-vector-viewport">
              <svg
                className="svg-mekong-map"
                viewBox="0 0 800 550"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="mekong-map-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#042f24" />
                    <stop offset="100%" stopColor="#064e3b" />
                  </linearGradient>
                  <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <rect width="100%" height="100%" fill="url(#mekong-map-bg)" />

                {/* Gridlines */}
                <g stroke="#0f5132" strokeWidth="0.5" strokeDasharray="3 6">
                  <line x1="0" y1="130" x2="800" y2="130" />
                  <line x1="0" y1="270" x2="800" y2="270" />
                  <line x1="0" y1="410" x2="800" y2="410" />
                  <line x1="200" y1="0" x2="200" y2="550" />
                  <line x1="400" y1="0" x2="400" y2="550" />
                  <line x1="600" y1="0" x2="600" y2="550" />
                </g>

                {mapLayer === "domestic" ? (
                  /* LỚP 1: BẢN ĐỒ VÙNG ĐỒNG BẰNG SÔNG CỬU LONG */
                  <g>
                    {/* Dòng sông Mê Kông: Sông Tiền & Sông Hậu */}
                    <g fill="none" stroke="#0ea5e9" opacity="0.8">
                      {/* Sông Tiền */}
                      <path
                        d="M 330 60 Q 380 130 420 180 T 520 240 T 630 290 T 710 330"
                        strokeWidth="8"
                      />
                      {/* Sông Hậu */}
                      <path
                        d="M 290 80 Q 340 160 380 230 T 450 290 T 540 370 T 620 440"
                        strokeWidth="9"
                      />
                      {/* Các kênh rạch kết nối */}
                      <path d="M 420 180 Q 480 230 550 150" strokeWidth="3" opacity="0.6" />
                      <path d="M 450 290 Q 370 380 280 470" strokeWidth="4" opacity="0.6" />
                      <path d="M 450 290 Q 520 340 570 390" strokeWidth="3.5" opacity="0.6" />
                    </g>

                    <text x="510" y="215" fill="#bae6fd" fontSize="11" fontStyle="italic">
                      Sông Tiền
                    </text>
                    <text x="470" y="340" fill="#bae6fd" fontSize="11" fontStyle="italic">
                      Sông Hậu
                    </text>

                    {/* Vùng Đồng Tháp Mười (Mảng đất phèn 700.000 ha) */}
                    <path
                      d="M 440 90 L 610 90 L 630 180 L 460 170 Z"
                      fill="#854d0e"
                      fillOpacity="0.25"
                      stroke="#d97706"
                      strokeWidth="1.2"
                      strokeDasharray="4 3"
                    />
                    <text x="470" y="112" fill="#fef08a" fontSize="11" fontWeight="700" letterSpacing="0.5">
                      VÙNG ĐỒNG THÁP MƯỜI (700.000 ha)
                    </text>

                    {/* Vùng Bán đảo Cà Mau & Rừng ngập mặn */}
                    <path
                      d="M 210 420 Q 280 440 330 520 L 220 540 Z"
                      fill="#065f46"
                      fillOpacity="0.3"
                    />

                    {/* Đường bờ biển Biển Đông & Vịnh Thái Lan */}
                    <text x="650" y="470" fill="#38bdf8" fontSize="12" fontWeight="700" opacity="0.7">
                      BIỂN ĐÔNG
                    </text>
                    <text x="120" y="380" fill="#38bdf8" fontSize="12" fontWeight="700" opacity="0.7">
                      VỊNH THÁI LAN
                    </text>
                  </g>
                ) : (
                  /* LỚP 2: BẢN ĐỒ KẾT NỐI HỢP TÁC QUỐC TẾ (R&D) */
                  <g>
                    {/* Các đường liên kết từ ĐH Cần Thơ tỏa ra thế giới */}
                    <g fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.8">
                      {/* Cần Thơ -> Nhật Bản */}
                      <path d="M 450 320 Q 560 210 670 110" />
                      {/* Cần Thơ -> Bỉ */}
                      <path d="M 450 320 Q 320 240 230 150" />
                      {/* Cần Thơ -> Hà Lan */}
                      <path d="M 450 320 Q 300 200 210 110" />
                      {/* Cần Thơ -> EU Catfish Asia */}
                      <path d="M 450 320 Q 340 260 260 195" />
                      {/* Cần Thơ -> Crop Trust Đức */}
                      <path d="M 450 320 Q 370 190 300 65" />
                    </g>

                    {/* Vòng sáng trung tâm Cần Thơ */}
                    <circle cx="450" cy="320" r="35" fill="url(#hub-glow)" />
                    <circle cx="450" cy="320" r="8" fill="#f59e0b" stroke="#ffffff" strokeWidth="2.5" />
                    <text x="465" y="325" fill="#fef08a" fontSize="12" fontWeight="800">
                      ĐẠI HỌC CẦN THƠ (R&D HUB)
                    </text>
                  </g>
                )}

                {/* Các Marker Pins tương tác */}
                <g>
                  {activeSpotsList.map((spot) => {
                    const isSelected = spot.id === selectedLocation.id;
                    const pinColor =
                      spot.type === "domestic" ? "#f59e0b" : "#38bdf8";

                    return (
                      <g
                         key={spot.id}
                         transform={`translate(${spot.coordinates.x}, ${spot.coordinates.y})`}
                         onClick={() => setSelectedSpotId(spot.id)}
                       >
                         <g className="map-marker-pin">
                           {isSelected && (
                             <circle
                               className="map-marker-pulse"
                               r="12"
                               fill={pinColor}
                               fillOpacity="0.4"
                             />
                           )}
                           <circle
                             r={isSelected ? 11 : 8}
                             fill={pinColor}
                             stroke="#ffffff"
                             strokeWidth={isSelected ? 3 : 2}
                           />
                         </g>
                         <text
                           x={spot.coordinates.x > 600 ? -16 : 16}
                           y="4"
                           textAnchor={spot.coordinates.x > 600 ? "end" : "start"}
                           fill="#ffffff"
                           fontSize="12"
                           fontWeight={isSelected ? 800 : 600}
                           style={{
                             textShadow: "0 2px 5px rgba(0,0,0,0.8)",
                             pointerEvents: "none",
                           }}
                         >
                           {spot.name.split("(")[0].trim()}
                         </text>
                       </g>
                    );
                  })}
                </g>
              </svg>

              {/* Chú giải bản đồ (Legend) */}
              <div
                className="map-legend"
                style={{
                  
                  background: "rgba(4, 47, 36, 0.9)",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  fontSize: "11px",
                  color: "#cbd5e1",
                  display: "flex",
                  gap: "14px",
                  zIndex: 5,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#f59e0b",
                      display: "inline-block",
                    }}
                  />
                  Điểm tiếp nhận ĐBSCL
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: "#38bdf8",
                      display: "inline-block",
                    }}
                  />
                  Đối tác R&D Quốc tế
                </div>
              </div>
            </div>

            {/* Cột hiển thị chi tiết điểm tiếp nhận công nghệ */}
            <div className="map-detail-sidebar">
              <div className="location-detail-card">
                <span
                  style={{
                    fontSize: "0.74rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    padding: "0.25rem 0.65rem",
                    borderRadius: "999px",
                    background: mapLayer === "domestic" ? "#fef3c7" : "#e0f2fe",
                    color: mapLayer === "domestic" ? "#b45309" : "#0369a1",
                    display: "inline-block",
                    marginBottom: "0.75rem",
                  }}
                >
                  {selectedLocation.badge}
                </span>

                <h3>{selectedLocation.name}</h3>

                <div style={{ fontSize: "0.85rem", color: "#475569", marginBottom: "0.75rem" }}>
                  <strong>Đối tượng tiếp nhận:</strong> {selectedLocation.targetUser}
                </div>

                <div className="loc-tech-box">
                  <div className="title">Công nghệ & Giải pháp chuyển giao</div>
                  <div className="desc">{selectedLocation.technology}</div>
                </div>

                <div className="loc-tech-box" style={{ background: "#fefce8", borderLeftColor: "var(--accent-amber)" }}>
                  <div className="title" style={{ color: "#b45309" }}>Kết quả & Tác động đo lường</div>
                  <div className="desc" style={{ color: "#78350f" }}>{selectedLocation.achievements}</div>
                </div>

                <div className="location-metrics-grid">
                  {selectedLocation.metrics.map((m, idx) => (
                    <div key={idx} className="loc-metric-item">
                      <div className="label">{m.label}</div>
                      <div className="val">{m.val}</div>
                    </div>
                  ))}
                </div>

                <div className="loc-legal-box">
                  <div><strong>Văn bằng / Minh chứng:</strong> {selectedLocation.legalDoc}</div>
                  <div style={{ marginTop: "0.25rem" }}><strong>Nguồn:</strong> {selectedLocation.source}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CÁC NGUỒN PHỎNG VẤN TRỰC TIẾP (3 NHÓM NGUỒN CHÍNH) */}
      <main className="article-container" id="phong-van">
        <div className="interviews-wrapper">
          <div style={{ marginBottom: "1.25rem" }}>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                textTransform: "uppercase",
                color: "var(--accent-gold)",
                letterSpacing: "1px",
              }}
            >
              Góc nhìn điều tra báo chí • Phỏng vấn độc quyền
            </span>
            <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--primary-green)", marginTop: "0.25rem" }}>
              Tiếng nói từ ba chủ thể: Nông dân, Sinh viên và Nhà khoa học
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
              Đối chiếu số liệu thực tế ngoài ruộng đồng với những giả định trong giảng đường
            </p>
          </div>

          <div className="interview-tabs-nav">
            <button
              className={`interview-tab-btn ${activeInterviewGroup === "farmer" ? "active" : ""}`}
              onClick={() => setActiveInterviewGroup("farmer")}
            >
              🌾 Nông dân tiếp nhận
            </button>
            <button
              className={`interview-tab-btn ${activeInterviewGroup === "student" ? "active" : ""}`}
              onClick={() => setActiveInterviewGroup("student")}
            >
              🔬 Sinh viên & Học viên thực nghiệm
            </button>
            <button
              className={`interview-tab-btn ${activeInterviewGroup === "lecturer" ? "active" : ""}`}
              onClick={() => setActiveInterviewGroup("lecturer")}
            >
              🎓 Giảng viên & Nhà khoa học chủ trì
            </button>
          </div>

          <div className="interview-card-content">
            <div className="interviewee-header">
              <div className="interviewee-avatar-circle">
                {activeInterviewGroup === "farmer" ? "🌾" : activeInterviewGroup === "student" ? "🔬" : "🎓"}
              </div>
              <div>
                <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--primary-green)" }}>
                  {currentInterview.interviewee}
                </h4>
                <div style={{ fontSize: "0.85rem", color: "var(--text-sub)", fontWeight: 600 }}>
                  {currentInterview.role}
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>
                  📍 {currentInterview.location} • {currentInterview.avatarDesc}
                </div>
              </div>
            </div>

            <div className="interview-qa-list">
              {currentInterview.qa.map((item, idx) => (
                <div key={idx} className="interview-qa-item">
                  <div className="interview-question">{item.question}</div>
                  <div className="interview-answer">{item.answer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CÔNG CỤ TRA CỨU NHANH CÔNG NGHỆ & ĐỊA BÀN CHUYỂN GIAO */}
        <div className="lookup-widget" id="tra-cuu">
          <h3>Tra cứu giống cây trồng & công nghệ chuyển giao</h3>
          <p>
            Nhập tên tỉnh thành (Sóc Trăng, An Giang, Cà Mau, Đồng Tháp...) hoặc đối tượng (lúa Nông Dân, Artemia, cá tra, cá bông lau, CTU-RAS, cá trê vàng...) để xem minh chứng văn bằng và kết quả thực tiễn.
          </p>

          <div className="lookup-input-group">
            <input
              type="text"
              className="lookup-input"
              placeholder="Ví dụ: Artemia, cá bông lau, Nông Dân 2, CTU-RAS, An Giang, Cà Mau..."
              value={lookupQuery}
              onChange={(e) => setLookupQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleLookup();
              }}
            />
            <button className="lookup-btn" onClick={handleLookup}>
              Tra cứu dữ liệu
            </button>
          </div>

          <div className="lookup-results">
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
                    Không tìm thấy dữ liệu trùng khớp với từ khóa &quot;<strong>{lookupQuery}</strong>&quot;. Hãy thử tìm với &quot;Artemia&quot;, &quot;cá tra&quot;, &quot;Nông Dân 2&quot; hoặc &quot;Cà Mau&quot;!
                  </div>
                ) : (
                  lookupResults.map((s) => (
                    <div
                      key={s.id}
                      style={{
                        background: "white",
                        border: "1px solid #bbf7d0",
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
                        <h4 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--primary-green)" }}>
                          {s.name}
                        </h4>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            padding: "0.2rem 0.6rem",
                            borderRadius: "999px",
                            background: "#fef3c7",
                            color: "#b45309",
                          }}
                        >
                          {s.badge}
                        </span>
                      </div>
                      <div style={{ fontSize: "0.88rem", color: "#334155", marginBottom: "0.4rem" }}>
                        <strong>Công nghệ:</strong> {s.technology}
                      </div>
                      <div style={{ fontSize: "0.85rem", color: "#065f46", marginBottom: "0.4rem" }}>
                        <strong>Kết quả thực tiễn:</strong> {s.achievements}
                      </div>
                      <div
                        style={{
                          marginTop: "0.6rem",
                          paddingTop: "0.6rem",
                          borderTop: "1px dashed #e2e8f0",
                          fontSize: "0.8rem",
                          color: "#64748b",
                        }}
                      >
                        <strong>Văn bằng / Nguồn:</strong> {s.legalDoc} • {s.source}
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
            <h4>Nguồn tư liệu & Minh chứng khoa học</h4>
            <p>
              Ấn phẩm kỷ niệm 60 năm “Đại học vì đồng bằng: Kiến tạo tri thức - Tiếp bước tiên phong”; Báo Cần Thơ, Báo Đồng Tháp, Báo Lao Động, VietnamPlus; Bằng độc quyền GPHI số 4743, 4797 và Quyết định công nhận lưu hành giống lúa Nông Dân 2.
            </p>
          </div>
          <a
            href="#"
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
            <h4>TRI THỨC ĐẠI HỌC CẦN THƠ: TỪ NGHIÊN CỨU ĐẾN SẢN XUẤT THỰC TIỄN</h4>
            <p>
              Sản phẩm báo chí dữ liệu đa phương tiện • Tôn vinh hành trình hơn 30 năm nghiên cứu ứng dụng phục vụ sự phát triển bền vững của Đồng bằng sông Cửu Long.
            </p>
          </div>
          <div className="footer-copy">
            © 2026 Nhóm Phóng sự Dữ liệu ĐBSCL. Bản quyền nội dung và minh chứng số liệu thuộc Đại học Cần Thơ và các cơ quan truyền thông đối tác.
          </div>
        </div>
      </footer>
    </>
  );
}
