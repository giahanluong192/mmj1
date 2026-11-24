"use client";

import { useState, useEffect } from "react";
import HeroConcertLoop from "@/components/HeroConcertLoop";
import {
  ArtistOriginGroupedChart,
  SeaRegionalComparisonCards,
  SeaArpuHorizontalChart,
  MotionGraphic90sPlayer,
} from "@/components/GlobalGapSection";
import {
  EditorialPullQuote,
  InteractiveReaderPoll,
  DataSourcesProvenance,
} from "@/components/PolicySolutionsSection";
import { ARTICLE_META } from "@/data/articleData";
import FloatingFontResizer from "@/components/FloatingFontResizer";
import {
  InteractiveArticlePhoto,
  ImageLightboxModal,
  ARTICLE_PHOTOS,
} from "@/components/InteractivePhoto";

export default function Home() {
  const [readingProgress, setReadingProgress] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        const pct = (window.scrollY / total) * 100;
        setReadingProgress(Math.min(100, Math.max(0, pct)));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="concert-page-root" data-theme={theme}>
      {/* Top Scrollytelling Reading Progress Bar */}
      <div
        className="reading-progress-bar"
        style={{ width: `${readingProgress}%` }}
      />

      {/* Sticky Editorial Navigation — 3 Chương chính */}
      <header className="top-editorial-nav">
        <div className="nav-left-group">
          <a
            href="#vi-tri-1"
            className="nav-brand"
            aria-label="Tiếng Nói Trẻ - Tiếng nói của thế hệ mới"
          >
            <img
              src="/logo-tieng-noi-tre.png"
              alt="Tiếng Nói Trẻ - Tiếng nói của thế hệ mới"
              className="nav-brand-logo"
            />
            <span className="nav-brand-category">| CHUYÊN MỤC VĂN HÓA</span>
          </a>
        </div>

        <div className="nav-right-group">
          <nav aria-label="Điều hướng các phần bài báo">
            <ul className="nav-chapter-links">
              <li>
                <a href="#chuong-1" className="nav-pill nav-pill-blue">
                  1. Sức hút nội địa &amp; Nghịch lý
                </a>
              </li>
              <li>
                <a href="#chuong-2" className="nav-pill nav-pill-amber">
                  2. Ba tầng “điểm nghẽn”
                </a>
              </li>
              <li>
                <a href="#chuong-3" className="nav-pill nav-pill-gray">
                  3. Từ Nghị quyết 80-NQ/TW
                </a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="theme-toggle-btn"
            onClick={handleToggleTheme}
            aria-label={
              theme === "light"
                ? "Chuyển sang giao diện tối"
                : "Chuyển sang giao diện sáng"
            }
          >
            <span className="theme-toggle-icon" aria-hidden="true">
              {theme === "light" ? "🌙" : "☀️"}
            </span>
            <span>{theme === "light" ? "Giao diện tối" : "Giao diện sáng"}</span>
          </button>
        </div>
      </header>

      {/* [VỊ TRÍ 1] HEADER VIDEO LOOP + TIÊU ĐỀ + SAPO + 4 CHỈ SỐ ĐỊNH LƯỢNG */}
      <HeroConcertLoop />

      {/* =====================================================================
          MỤC 1: SỨC HÚT NỘI ĐỊA CHƯA ĐỦ ĐƯA VIỆT NAM LÊN BẢN ĐỒ LƯU DIỄN THẾ GIỚI
          ===================================================================== */}
      <main className="editorial-section" id="chuong-1">
        <div className="prose-column">
          <h2 className="chapter-h2">
            SỨC HÚT NỘI ĐỊA CHƯA ĐỦ ĐƯA VIỆT&nbsp;NAM
            <br />
            LÊN BẢN ĐỒ LƯU DIỄN THẾ&nbsp;GIỚI
          </h2>

          <p className="body-p">
            Giai đoạn 2024–2026 cho thấy công chúng Việt&nbsp;Nam sẵn sàng chi tiêu ngày càng mạnh tay cho nghệ thuật biểu diễn. Theo <em>Báo cáo Tổng quan ngành công nghiệp âm nhạc Việt&nbsp;Nam 2025–2026</em> của Đại học RMIT Việt&nbsp;Nam, cả nước ghi nhận hơn 810 sự kiện âm nhạc trong năm 2025, với 60,9% khán giả được khảo sát sẵn sàng trả tiền mua vé xem biểu diễn trực tiếp. Đà tăng trưởng này tiếp tục duy trì trong năm 2026: chỉ riêng 9 tháng đầu năm, TP.HCM đã tiếp nhận, thẩm định và chấp thuận 1.064 hồ sơ hoạt động nghệ thuật biểu diễn, trong đó có 944 chương trình nghệ thuật, sân khấu. Sức hút thực tế được minh chứng qua hàng loạt chương trình quy mô lớn. Có thể kể đến hai đêm diễn <em>Anh Trai Vượt Ngàn Chông Gai 2026</em> tại TP.HCM thu hút gần 100.000 khán giả, chuỗi chương trình chủ đề tự hào dân tộc như <em>Tổ Quốc Trong Tim 2026</em> (hơn 40.000 khán giả tại sân khấu chính), <em>V Concert – Rạng Rỡ Việt&nbsp;Nam</em> (khoảng 25.000 khán giả), hay đại nhạc hội quy mô dự kiến 60.000 người tại Hà&nbsp;Nội chào mừng Ngày Văn hóa Việt&nbsp;Nam 24/11.
          </p>

          {/* Ảnh 1: V Concert – Rạng rỡ Việt Nam (VTV Online) */}
          <InteractiveArticlePhoto
            {...ARTICLE_PHOTOS[0]}
            photoIndex={0}
            onOpenModal={setActivePhotoIndex}
          />

          <p className="body-p">
            Cùng với sự sôi động của thị trường nội địa, giai đoạn 2025–2026 cũng ghi nhận một số sự kiện âm nhạc quốc tế tạo được sức hút lớn tại Việt&nbsp;Nam. Sau dấu ấn 50.000 khán giả của <em>8Wonder</em> và kỷ lục gần 100.000 người xem hai đêm <em>Übermensch World Tour</em> của G-Dragon cuối năm 2025, hai đêm lưu diễn kỷ niệm 20 năm của BIGBANG tại sân vận động Mỹ&nbsp;Đình (tháng 10/2026) tiếp tục thu hút khoảng 90.000 lượt khán giả. Con số đáng kinh ngạc hơn nằm ở sức bật kinh tế: chỉ trong hai ngày diễn ra sự kiện, du lịch Hà&nbsp;Nội đón khoảng 220.000 lượt khách (gồm gần 68.000 khách quốc tế), mang về tổng thu ước tính 750 tỷ&nbsp;đồng.
          </p>

          <p className="body-p">
            Thế nhưng, nếu gạt đi ánh hào quang của một vài sự kiện nổi bật để nhìn vào cấu trúc toàn thị trường, một nghịch lý rõ nét lập tức lộ diện. Thống kê của Đại học RMIT cho thấy: ở phân khúc đại nhạc hội từ 10.000 đến 40.000 khán giả năm 2025, trong khi nghệ sĩ nội địa tổ chức tới <strong>101 sự kiện độc lập</strong>, thì nghệ sĩ quốc tế chỉ vỏn vẹn <strong>4 sự kiện</strong>. Tương tự, ở phân khúc siêu sự kiện trên 40.000 người, nghệ sĩ quốc tế chỉ có <strong>3 sự kiện độc lập</strong> so với <strong>16 sự kiện nội&nbsp;địa</strong>.
          </p>
        </div>

        {/* [BIỂU ĐỒ 1 CỦA WEB] TƯƠNG QUAN NGUỒN GỐC NGHỆ SĨ & QUY MÔ KHÁN GIẢ */}
        <div className="wide-viz-column">
          <ArtistOriginGroupedChart />
        </div>

        <div className="prose-column">
          <p className="body-p">
            Sự khan hiếm này cho thấy Việt&nbsp;Nam vẫn chưa bước vào dòng chảy thường xuyên của các chuyến lưu diễn toàn cầu, nhất là khi đặt cạnh cuộc đua quyết liệt trong khu vực. Nhằm giành quyền đăng cai các tour diễn lớn, nhiều quốc gia Đông&nbsp;Nam&nbsp;Á đã chủ động đầu tư mạnh về cơ chế lẫn ngân sách: Thái&nbsp;Lan triển khai chiến lược <em>IGNITE Thailand</em> và thành lập Học viện Lễ hội để đón hàng loạt tên tuổi quốc tế; Indonesia lập Quỹ Du lịch 86 triệu USD hỗ trợ thu hút nghệ sĩ nước ngoài; Malaysia hướng tới mục tiêu 450 sự kiện âm nhạc; còn Singapore củng cố vị thế trung tâm với 4 đêm diễn độc quyền châu&nbsp;Á của Lady Gaga, bán ra 193.000 vé và đóng góp ước tính 100–150 triệu USD cho ngành du&nbsp;lịch.
          </p>
        </div>

        {/* [VỊ TRÍ 10 - SỬA GỌN] 4 THẺ SO SÁNH NGANG ĐÔNG NAM Á */}
        <div className="wide-viz-column">
          <SeaRegionalComparisonCards />
        </div>

        <div className="prose-column">
          <p className="body-p">
            Thực tế cho thấy, những cú hích như BIGBANG hay G-Dragon tại Việt&nbsp;Nam vẫn chỉ là các “điểm sáng đơn lẻ” phụ thuộc lớn vào nguồn lực tài trợ khổng lồ của một số ít tập đoàn, ngân hàng như Vingroup hay VPBank. Một thị trường biểu diễn chưa thể xem là phát triển bền vững nếu việc mời nghệ sĩ quốc tế chủ yếu dựa vào ngân sách quảng bá thương hiệu của doanh nghiệp, thay vì tự cân đối chi phí từ doanh thu bán vé thuần&nbsp;túy.
          </p>

          {/* Ảnh 2: G-DRAGON 2025 WORLD TOUR [Übermensch] in Hanoi (Tiếng nói Việt Nam) */}
          <InteractiveArticlePhoto
            {...ARTICLE_PHOTOS[1]}
            photoIndex={1}
            onOpenModal={setActivePhotoIndex}
          />
        </div>
      </main>

      {/* =====================================================================
          MỤC 2: BA TẦNG “ĐIỂM NGHẼN” KHIẾN NHÀ SẢN XUẤT QUỐC TẾ CHÙN CHÂN
          ===================================================================== */}
      <section className="editorial-section alt-dark-band" id="chuong-2">
        <div className="prose-column">
          <h2 className="chapter-h2">
            BA TẦNG “ĐIỂM NGHẼN”
            <br />
            KHIẾN NHÀ SẢN XUẤT QUỐC TẾ CHÙN&nbsp;CHÂN
          </h2>

          <p className="body-p">
            Tổng Giám đốc SCBC Vietnam &amp; Novel Production Loki Vũ từng ví việc làm concert quy mô lớn tại Việt&nbsp;Nam giống như “đi khai phá vùng đất mới”: thiếu mức giá sàn, thiếu quy trình chuẩn và liên tục phát sinh chi phí ngầm, dẫn đến nghịch lý có những đêm nhạc bán sạch vé nhưng nhà tổ chức vẫn đứng trước nguy cơ thua lỗ. Soi chiếu Hà&nbsp;Nội và TP.HCM với Bangkok hay Singapore, sự dè dặt của các đơn vị tổ chức World&nbsp;Tour bắt nguồn từ ba tầng điểm nghẽn mang tính hệ&nbsp;thống.
          </p>

          {/* Pull-quote Ông Loki Vũ */}
          <EditorialPullQuote quoteId="q-loki-vu" />
        </div>

        {/* [VỊ TRÍ 11 - DỜI LÊN ĐẦU MỤC 2] VIDEO MOTION GRAPHIC PROMOTER */}
        <div className="full-bleed-video-wrap">
          <MotionGraphic90sPlayer />
        </div>

        <div className="prose-column">
          {/* Điểm nghẽn thứ nhất */}
          <div className="bottleneck-tier-heading">
            <span className="tier-badge">TẦNG ĐIỂM NGHẼN 01</span>
            <h3>Hạ tầng vật lý và an toàn giải tỏa đám đông</h3>
          </div>

          <p className="body-p">
            <strong><em>Thứ nhất là điểm nghẽn hạ tầng vật lý và an toàn giải tỏa đám đông.</em></strong> Việt&nbsp;Nam hiện không có các nhà thi đấu đa năng có mái che quy mô 15.000–20.000 chỗ và thiếu hụt nghiêm trọng các sân vận động 40.000–50.000 chỗ được thiết kế chuyên biệt về âm học, tải trọng treo giàn thiết bị và lối thoát hiểm. Như ca sĩ Tùng Dương từng thẳng thắn chia sẻ trên <em>Znews</em>, vì thiếu sân vận động có mái che phù hợp, chỉ cần một cơn mưa bất chợt cũng đủ khiến nhà sản xuất phải đập đi làm lại toàn bộ phương án sân&nbsp;khấu.
          </p>

          {/* Pull-quote Ca sĩ Tùng Dương */}
          <EditorialPullQuote quoteId="q-tung-duong" />

          <p className="body-p">
            Đi kèm với “sân bãi mở” là bài toán giao thông kết nối. Các hãng bảo hiểm sự kiện quốc tế luôn đặt tiêu chuẩn bắt buộc: phải giải tỏa an toàn 40.000–60.000 khán giả trong vòng 1 giờ sau giờ tan diễn. Trong khi National Stadium (Singapore) hay Rajamangala (Bangkok) nối thẳng vào mạng lưới tàu điện đô thị (MRT, BTS) chạy tăng cường xuyên đêm, khán giả tại Việt&nbsp;Nam vẫn phải tự xoay xở bằng xe máy và taxi công nghệ ùn tắc kéo dài. Với các tập đoàn tổ chức lưu diễn toàn cầu, hạ tầng thiếu đồng bộ đồng nghĩa với phí bảo hiểm tăng vọt và rủi ro thương hiệu khó kiểm&nbsp;soát.
          </p>

          {/* Ảnh 3: Giao thông quanh SVĐ Quốc gia Mỹ Đình tắc nghẽn (Báo Tiền Phong) */}
          <InteractiveArticlePhoto
            {...ARTICLE_PHOTOS[2]}
            photoIndex={2}
            onOpenModal={setActivePhotoIndex}
          />

          {/* Điểm nghẽn thứ hai */}
          <div className="bottleneck-tier-heading">
            <span className="tier-badge">TẦNG ĐIỂM NGHẼN 02</span>
            <h3>Bài toán chi phí nhập khẩu và khoảng cách sức mua trung bình</h3>
          </div>

          <p className="body-p">
            <strong><em>Thứ hai là bài toán chi phí nhập khẩu và khoảng cách sức mua trung bình.</em></strong> Các World&nbsp;Tour hạng A luôn đi kèm những bản yêu cầu kỹ thuật cực kỳ khắt khe. Tuy nhiên, do chuỗi cung ứng trong nước chưa đáp ứng đồng bộ, nhà sản xuất Việt buộc phải thuê và vận chuyển hệ thống âm thanh, ánh sáng từ Singapore, Thái&nbsp;Lan hoặc Hồng&nbsp;Kông, khiến chi phí logistics và thuế quan đội lên nặng nề. Trong khi chi phí đầu vào ngang bằng hay thậm chí cao hơn khu vực, mặt bằng chi tiêu đại chúng lại chưa theo kịp. Dự báo của Statista trong báo cáo RMIT cho thấy doanh thu nhạc số bình quân trên mỗi người dùng (ARPU) tại Việt&nbsp;Nam dự báo năm 2030 chỉ ước đạt <strong>5,44 USD/người</strong> – đứng thứ 6 Đông&nbsp;Nam&nbsp;Á, cách rất xa Singapore (45,38 USD) và chưa bằng một nửa Thái&nbsp;Lan (12,06 USD). Trong mắt các hãng giải trí quốc tế, chỉ số ARPU chính là “thước đo” phản ánh thói quen chi trả bản quyền và khả năng hấp thụ giá vé cao của số đông. Khi phải đặt cược hàng triệu USD phí bảo lãnh nghệ sĩ vào một thị trường có sức mua bình quân còn thấp, các nhà tổ chức độc lập rất khó cân đối bài toán hòa vốn nếu thiếu nguồn lực tài&nbsp;trợ.
          </p>
        </div>

        {/* [BỔ SUNG MỚI] BIỂU ĐỒ CỘT NGANG ARPU NHẠC SỐ ĐÔNG NAM Á (DỰ BÁO NĂM 2030) */}
        <div className="wide-viz-column">
          <SeaArpuHorizontalChart />
        </div>

        <div className="prose-column">
          {/* Điểm nghẽn thứ ba */}
          <div className="bottleneck-tier-heading">
            <span className="tier-badge">TẦNG ĐIỂM NGHẼN 03</span>
            <h3>Quy trình thủ tục hành chính và hạn chế dữ liệu thị trường</h3>
          </div>

          <p className="body-p">
            <strong><em>Thứ ba là quy trình thủ tục hành chính và hạn chế dữ liệu thị trường.</em></strong> Dù quy trình cấp phép biểu diễn đã có nhiều bước tiến, đối tác nước ngoài vẫn chờ đợi một cơ chế liên thông thực sự nhanh gọn cho thị thực làm việc, tạm nhập tái xuất thiết bị và thuế nhà thầu. Đáng nói hơn, như đạo diễn Việt Tú và đạo diễn Phạm Hoàng Nam từng chỉ ra, thị trường Việt&nbsp;Nam vẫn thiếu vắng một hệ thống thống kê chính thức, minh bạch về doanh thu vé, tỷ lệ lấp đầy và tác động kinh tế của từng đêm diễn. Trong nền kinh tế công nghiệp biểu diễn, cảm xúc cuồng nhiệt trên mạng xã hội không thể thay thế cho dữ liệu định lượng để thuyết phục các tập đoàn giải trí toàn cầu đặt bút ký hợp&nbsp;đồng.
          </p>
        </div>
      </section>

      {/* =====================================================================
          MỤC 3: TỪ NGHỊ QUYẾT 80-NQ/TW ĐẾN CUỘC ĐUA TRÊN BẢN ĐỒ LƯU DIỄN
          (Giảm tông Đỏ Sao Vàng, ưu tiên tông dữ liệu hiện đại)
          ===================================================================== */}
      <section className="editorial-section chapter3-policy-band" id="chuong-3">
        <div className="prose-column">
          <h2 className="chapter-h2">
            TỪ NGHỊ QUYẾT 80-NQ/TW
            <br />
            ĐẾN CUỘC ĐUA TRÊN BẢN ĐỒ LƯU&nbsp;DIỄN
          </h2>

          <p className="body-p">
            Để Việt&nbsp;Nam trở thành điểm dừng chân thường xuyên của các chuyến lưu diễn quốc tế, thị trường không thể chỉ dựa vào nỗ lực đơn lẻ của doanh nghiệp. Đã đến lúc ngành biểu diễn cần chuyển từ tư duy tổ chức sự kiện phong trào sang đầu tư bài bản về hạ tầng và hoàn thiện thể&nbsp;chế.
          </p>

          <p className="body-p">
            Về mặt chủ trương, cơ sở chính sách cho bước chuyển này đã được xác lập rõ. Ngày 07/01/2026, Bộ Chính trị ban hành <strong>Nghị quyết số 80-NQ/TW</strong> về phát triển văn hóa Việt&nbsp;Nam, đặt mục tiêu đến năm 2030 các ngành công nghiệp văn hóa đóng góp <strong>7% GDP</strong> và xây dựng được <strong>5 thương hiệu liên hoan nghệ thuật, lễ hội văn hóa quốc tế</strong>. Cùng với nguồn lực <strong>122.000 tỷ đồng</strong> được Quốc hội phê duyệt cho Chương trình Mục tiêu Quốc gia về Phát triển Văn hóa giai đoạn 2025–2030, điều thị trường cần nhất lúc này không phải là thêm những lời kêu gọi chung chung, mà là ba giải pháp thực thi giải quyết các điểm nghẽn cốt&nbsp;lõi:
          </p>

          {/* 3 Chỉ tiêu định lượng cốt lõi của Nghị quyết 80-NQ/TW */}
          <div className="nq80-targets-grid three-col">
            <div className="nq80-metric-tile policy-data-tile">
              <span className="nq80-num">7% GDP</span>
              <span className="nq80-desc">
                Mục tiêu đóng góp của các ngành công nghiệp văn hóa vào năm 2030 theo Nghị quyết 80-NQ/TW
              </span>
            </div>
            <div className="nq80-metric-tile policy-data-tile">
              <span className="nq80-num">05 thương hiệu</span>
              <span className="nq80-desc">
                Xây dựng 5 thương hiệu liên hoan nghệ thuật, lễ hội văn hóa mang tầm vóc quốc&nbsp;tế
              </span>
            </div>
            <div className="nq80-metric-tile policy-data-tile">
              <span className="nq80-num">122.000 tỷ đồng</span>
              <span className="nq80-desc">
                Nguồn lực Quốc hội phê duyệt cho Chương trình Mục tiêu Quốc gia Phát triển Văn hóa 2025–2030
              </span>
            </div>
          </div>

          {/* 3 Giải pháp thực thi gộp gọn */}
          <div className="solutions-pillars-list">
            <div className="pillar-item policy-pillar">
              <h4>
                1. Đầu tư tổ hợp biểu diễn đạt chuẩn gắn với quy hoạch giao thông đô&nbsp;thị
              </h4>
              <p>
                Nghị quyết 80-NQ/TW đã nhấn mạnh chủ trương hoàn thiện cơ chế hợp tác công – tư (PPP), đồng thời đặt yêu cầu yếu tố văn hóa phải đồng bộ trong mọi quy hoạch đô thị. Trên cơ sở đó, các đô thị trọng điểm như Hà&nbsp;Nội, TP.HCM và Đà&nbsp;Nẵng cần bố trí quỹ đất chiến lược để xây dựng các nhà thi đấu đa năng có mái che (15.000–20.000 chỗ) và nâng cấp sân vận động đạt chuẩn quốc tế. Các công trình này cần được thiết kế kết nối trực tiếp với mạng lưới giao thông công cộng khối lượng lớn (Metro, xe buýt), đi kèm kế hoạch kéo dài giờ vận hành trong các đêm diễn để đảm bảo giải tỏa đám đông an&nbsp;toàn.
              </p>
            </div>

            <div className="pillar-item policy-pillar">
              <h4>
                2. Tháo gỡ bài toán tài chính và nội địa hóa chuỗi cung&nbsp;ứng
              </h4>
              <p>
                Để nhà tổ chức có thể vận hành ổn định mà không lệ thuộc hoàn toàn vào tài trợ, các chủ trương của Nghị quyết 80-NQ/TW cần sớm được thể chế hóa thành quy định cụ thể. Trọng tâm là chính sách ưu đãi vượt trội về đất đai, miễn giảm thuế thu nhập doanh nghiệp cho lĩnh vực công nghiệp văn hóa – giải trí và hình thành các quỹ đầu tư văn hóa. Song song với mô hình chia sẻ rủi ro giữa nhà sản xuất và các tập đoàn lớn, ngành biểu diễn cần đẩy mạnh đào tạo nhân lực kỹ thuật và chuyển giao công nghệ quốc tế (như thương vụ hợp tác chiến lược giữa Sony Music và YeaH1). Chỉ khi làm chủ được thiết bị và quy trình sản xuất trong nước, chi phí tổ chức mới hạ xuống mức đủ sức cạnh&nbsp;tranh.
              </p>
            </div>

            <div className="pillar-item policy-pillar">
              <h4>
                3. Chuyển mạnh từ “tiền kiểm sang hậu kiểm” và xóa khoảng trống dữ&nbsp;liệu
              </h4>
              <p>
                Cụ thể hóa tinh thần cải cách hành chính của Nghị quyết 80-NQ/TW bằng một cơ chế <strong>“một cửa” liên thông</strong> cho giấy phép biểu diễn, thị thực nghệ sĩ và thủ tục tạm nhập tái xuất thiết bị sẽ trực tiếp rút ngắn thời gian chuẩn bị và giảm rủi ro cho các ê-kíp ngoại. Đồng thời, cần kết nối dữ liệu từ các bảng xếp hạng chuẩn quốc tế (<em>IFPI Official Vietnam Chart, Billboard Vietnam</em>), các nền tảng bán vé công nghệ (<em>Ticketbox, Eventista/1Zone</em>) và <em>Nền tảng Bản đồ số Văn hóa Việt&nbsp;Nam</em> (công bố tháng 11/2026) thành một hệ thống dữ liệu thị trường minh&nbsp;bạch.
              </p>
            </div>
          </div>

          {/* Ảnh 4: 8Wonder J Balvin & Tlinh (Báo Thanh niên) */}
          <InteractiveArticlePhoto
            {...ARTICLE_PHOTOS[3]}
            photoIndex={3}
            onOpenModal={setActivePhotoIndex}
          />

          <p className="body-p" style={{ marginBottom: "2rem" }}>
            Thị trường biểu diễn Việt&nbsp;Nam đã bước qua giai đoạn chứng minh “có khán giả”. Thách thức lớn nhất hiện nay nằm ở năng lực hạ tầng, trình độ vận hành và sự đồng bộ của cơ chế quản lý. Chừng nào những vướng mắc về sân bãi, giao thông, thuế khóa và dữ liệu còn nằm trên giấy, các siêu sao toàn cầu vẫn sẽ chỉ ghé qua Việt&nbsp;Nam như những phép thử hiếm hoi. Ngược lại, khi những đột phá từ Nghị quyết 80-NQ/TW được chuyển hóa thành công trình hiện hữu và cơ chế “một cửa” thông suốt, Việt&nbsp;Nam hoàn toàn đủ thực lực bước vào nhóm dẫn đầu khu vực — biến những đêm nhạc rực rỡ thành động lực tăng trưởng thực chất cho mục tiêu 7% GDP của nền công nghiệp văn hóa vào năm&nbsp;2030.
          </p>

          {/* [VỊ TRÍ 13] BOX TƯƠNG TÁC ĐỘC GIẢ (INTERACTIVE POLL) */}
          <InteractiveReaderPoll />
        </div>
      </section>

      {/* BẢNG NGUỒN ĐỐI CHIẾU TOÀN DIỆN (CHỈ GIỮ CÁC NGUỒN SỬ DỤNG TRONG BÀI MỚI) */}
      <div className="wide-viz-column">
        <DataSourcesProvenance />
      </div>

      {/* FOOTER BẢN QUYỀN & NGUỒN TƯ LIỆU */}
      <footer className="concert-footer">
        <div className="footer-inner-wrap">
          <div className="footer-col-main">
            <div style={{ marginBottom: "1.1rem" }}>
              <img
                src="/logo-tieng-noi-tre.png"
                alt="Tiếng Nói Trẻ - Tiếng nói của thế hệ mới"
                style={{ height: "42px", width: "auto", objectFit: "contain" }}
              />
            </div>
            <h3>VIỆT NAM THIẾU GÌ ĐỂ GIỮ CHÂN SIÊU SAO QUỐC TẾ?</h3>
            <p>
              Tác phẩm Báo chí Dữ liệu Đa phương tiện (Multimedia Data Journalism)
              <br />
              • Phân tích nghịch lý sức mua nội địa, ba tầng điểm nghẽn đón World Tour quốc tế
              <br />
              và lời giải thể chế từ Nghị quyết 80-NQ/TW hướng tới năm 2030.
            </p>
            <p className="footer-footage-credit">{ARTICLE_META.footageCredits}</p>
          </div>
          <div className="footer-col-meta">
            <div>
              <strong>Dữ liệu &amp; Tài liệu tham chiếu:</strong> Báo cáo Tổng quan ngành công nghiệp âm nhạc Việt Nam 2025–2026 (Trường Đại học RMIT Việt Nam), Nghị quyết 80-NQ/TW, Sở VH-TT TP.HCM, Sở Du lịch Hà Nội, Statista Market Insights, VTV Online, Đài Tiếng nói Việt Nam (VOV), Báo Tiền Phong, Báo Thanh Niên, Báo Nhân Dân, Znews.
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Font Resizer Widget */}
      <FloatingFontResizer />

      {/* Floating Back to Top Button */}
      <button
        type="button"
        onClick={handleScrollToTop}
        className={`back-to-top-btn ${readingProgress > 3 ? "visible" : ""}`}
        aria-label="Về đầu trang"
        title="Về đầu trang"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>

      {/* Fullscreen / Full-bleed Image Lightbox Modal */}
      <ImageLightboxModal
        photos={ARTICLE_PHOTOS}
        currentIndex={activePhotoIndex}
        onClose={() => setActivePhotoIndex(null)}
        onSelectIndex={setActivePhotoIndex}
      />
    </div>
  );
}
