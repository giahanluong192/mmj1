"use client";

import { useState, useEffect } from "react";
import HeroConcertLoop from "@/components/HeroConcertLoop";
import {
  EventScaleAndConcertsWidget,
  SpendingWillingnessChart,
  VoxpopWaveformBox,
  ConcertEconomicInfographic,
} from "@/components/DomesticChartsSection";
import {
  VietnamEventHeatmap,
  ConcertCashflowSankey,
} from "@/components/LocalSustainabilitySection";
import {
  ArtistOriginGroupedChart,
  SeaInfrastructureRadarAndTable,
  MotionGraphic90sPlayer,
} from "@/components/GlobalGapSection";
import {
  ExpertQuotesCarousel,
  InteractiveReaderPoll,
  DataSourcesProvenance,
} from "@/components/PolicySolutionsSection";
import { ARTICLE_META, FIVE_SYSTEMIC_BOTTLENECKS } from "@/data/articleData";
import FloatingFontResizer from "@/components/FloatingFontResizer";

export default function Home() {
  const [readingProgress, setReadingProgress] = useState(0);
  const [theme, setTheme] = useState<"light" | "dark">("light");

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

      {/* Sticky Editorial Navigation */}
      <header className="top-editorial-nav">
        <div className="nav-left-group">
          <a href="#vi-tri-1" className="nav-brand" aria-label="Tiếng Nói Trẻ - Tiếng nói của thế hệ mới">
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
                <a href="#chuong-1" className="nav-pill nav-pill-gray">
                  1. Concert nội sinh
                </a>
              </li>
              <li>
                <a href="#chuong-2" className="nav-pill nav-pill-blue">
                  2. Hiệu ứng pháo hoa
                </a>
              </li>
              <li>
                <a href="#chuong-3" className="nav-pill nav-pill-amber">
                  3. Khoảng cách đến World Tour
                </a>
              </li>
              <li>
                <a href="#chuong-4" className="nav-pill nav-pill-red">
                  4. Phát triển văn hóa Việt
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

      {/* [VỊ TRÍ 1] HEADER VIDEO LOOP + TIÊU ĐỀ + SAPO NGẮN GỌN + 4 CHỈ SỐ ĐỊNH LƯỢNG */}
      <HeroConcertLoop />

      {/* =====================================================================
          CHƯƠNG 1: KỶ NGUYÊN "CONCERT NỘI SINH" - KHI NGƯỜI VIỆT CHI TIỀN TRIỆU CHO NHẠC VIỆT
          ===================================================================== */}
      <main className="editorial-section" id="chuong-1">
        <div className="prose-column">
          <h2 className="chapter-h2">
            KỶ NGUYÊN “CONCERT NỘI SINH” — KHI NGƯỜI VIỆT CHI TIỀN TRIỆU
            <br />
            CHO NHẠC&nbsp;VIỆT
          </h2>

          <p className="body-p">
            Nếu như vài năm trước, thị trường biểu diễn âm nhạc Việt&nbsp;Nam chủ yếu vận hành theo hai mô hình chính. Thứ nhất là các đại nhạc hội do nhãn hàng tài trợ toàn bộ, mời nghệ sĩ về biểu diễn nhằm mục đích truyền thông, quảng bá thương hiệu. Mô hình thứ hai là các liveshow, concert do chính nghệ sĩ tự tổ chức, đòi hỏi họ phải có lượng người hâm mộ ổn định để đảm bảo doanh thu bán vé. Tuy nhiên, bước sang giai đoạn 2024–2026, ngành công nghiệp biểu diễn đã ghi nhận bước chuyển mình đáng kể với sự dịch chuyển mạnh mẽ về cả quy mô tổ chức lẫn hành vi tiêu dùng của khán&nbsp;giả.
          </p>

          <p className="body-p">
            Về mặt tổ chức, thị trường không còn bó hẹp trong các đêm nhạc quảng cáo miễn phí hay nỗ lực đơn lẻ của từng cá nhân, mà chuyển sang mô hình kinh tế giải trí tích hợp do các công ty sản xuất chuyên nghiệp dẫn dắt (chiếm <strong>49,6%</strong> tổng số sự kiện). Các chương trình truyền hình thực tế không chỉ dừng lại ở việc phát sóng mà trở thành bệ phóng cho những chuỗi concert thương mại quy mô hàng chục nghìn khán giả. Song song đó là sự xuất hiện của mô hình hợp tác công – tư (PPP, chiếm <strong>17,8%</strong>) tạo nên các &ldquo;concert quốc gia&rdquo;, cùng xu hướng các thương hiệu tham gia đồng sở hữu sự kiện để kiến tạo trải nghiệm thay vì chỉ đặt logo tài trợ đơn thuần. Về phía khán giả, tư duy &ldquo;xem nhạc miễn phí&rdquo; dần nhường chỗ cho sự hình thành của văn hóa thần tượng nội địa và các cộng đồng người hâm mộ có tổ chức bài bản. Từ vị thế người nghe thụ động, khán giả trẻ chủ động chi tiền triệu mua vé, sưu tầm vật phẩm và thực hiện các dự án tiếp sức quy mô lớn cho nghệ sĩ&nbsp;Việt.
          </p>

          {/* Ảnh 2: Concert Quốc gia Tổ quốc trong tim 2026 */}
          <figure className="article-photo-figure">
            <img
              src="/concert-to-quoc-trong-tim.jpg"
              alt="“Concert Quốc gia” Tổ quốc trong tim 2026 tổ chức tại Khu đô thị Vạn Phúc City"
              className="article-photo-img"
              loading="lazy"
            />
            <figcaption className="article-photo-caption">
              “Concert Quốc gia” Tổ quốc trong tim 2026 tổ chức tại Khu đô thị Vạn Phúc City vào tối ngày 23/8. Hơn 40.000 khán giả tại Vạn Phúc, gần 30.000 người tại phố đi bộ Nguyễn Huệ và hàng triệu lượt khán giả trên mạng xã hội cùng hòa vào không gian nghệ thuật đặc biệt. (Ảnh: Báo Nhân Dân)
            </figcaption>
          </figure>

          {/* Ảnh 3: Concert Anh Trai Vượt Ngàn Chông Gai 2026 */}
          <figure className="article-photo-figure">
            <img
              src="/concert-anh-trai-vuot-ngan-chong-gai.jpg"
              alt="Concert Anh Trai Vượt Ngàn Chông Gai 2026 tại TP. Hồ Chí Minh"
              className="article-photo-img"
              loading="lazy"
            />
            <figcaption className="article-photo-caption">
              Concert Anh Trai Vượt Ngàn Chông Gai 2026 diễn ra tại TP. Hồ Chí Minh vào ngày 17 /10, quy mô gần 50.000 khán giả. (Ảnh: Fanpage Anh Trai Vượt Ngàn Chông Gai)
            </figcaption>
          </figure>

          {/* Ảnh 4: Concert Tinh Hà Say Hi */}
          <figure className="article-photo-figure">
            <img
              src="/concert-tinh-ha-say-hi.jpg"
              alt="Concert Tinh Hà “Say Hi” mang chủ đề Hẹn giữa tinh hà tại TP. Hồ Chí Minh"
              className="article-photo-img"
              loading="lazy"
            />
            <figcaption className="article-photo-caption">
              Concert Tinh Hà “Say Hi” mang chủ đề &ldquo;Hẹn giữa tinh hà&rdquo; diễn ra tối 17/10, tại TP. Hồ Chí Minh thu hút chục ngàn khán giả hào hứng tham gia. (Ảnh: Ban Tổ chức Chương trình Tinh Hà &ldquo;Say Hi&rdquo;)
            </figcaption>
          </figure>

          <p className="body-p">
            Theo <em>Báo cáo Tổng quan ngành công nghiệp âm nhạc Việt&nbsp;Nam 2025-2026</em> của Trường Đại học RMIT Việt&nbsp;Nam, năm 2025 ghi nhận hơn <strong>810 sự kiện âm nhạc</strong> đã diễn ra hoặc được công bố trên cả nước. Riêng tại đầu tàu kinh tế TP.HCM, số liệu thống kê trong 9 tháng đầu năm 2026 cho thấy thành phố đã tiếp nhận, thẩm định và chấp thuận <strong>1.064 hồ sơ</strong> hoạt động nghệ thuật biểu diễn, trong đó có tới <strong>944 chương trình nghệ thuật, sân khấu</strong>. Tần suất sự kiện tăng cao vào mùa hè và nửa cuối năm phản ánh nhu cầu thưởng thức âm nhạc trực tiếp (<em>live music</em>) đang dần trở thành một phần trong lối sống của người trẻ đô&nbsp;thị.
          </p>
        </div>

        {/* [VỊ TRÍ 2] BIỂU ĐỒ 1: SỰ TĂNG TRƯỞNG QUY MÔ & TỐC ĐỘ BÁN VÉ CONCERT NỘI ĐỊA */}
        <div className="wide-viz-column">
          <EventScaleAndConcertsWidget />
        </div>

        <div className="prose-column">
          <p className="body-p">
            Đáng chú ý, phân khúc các sự kiện quy mô lớn (trên 5.000 khán giả) đã chiếm khoảng <strong>23,8%</strong> tổng số sự kiện được khảo sát trong báo cáo của Trường Đại học RMIT Việt&nbsp;Nam, trong đó nhóm đại nhạc hội từ 10.000 đến 40.000 người chiếm <strong>14,6%</strong> và trên 40.000 người chiếm <strong>2,5%</strong>. Sự trỗi dậy của các “concert phái sinh” bước ra từ truyền hình thực tế như <em>Anh Trai Vượt Ngàn Chông Gai</em>, <em>Anh Trai &ldquo;Say&nbsp;Hi&rdquo;</em>, <em>Em Xinh &ldquo;Say&nbsp;Hi&rdquo;</em>, cùng chuỗi liveshow cá nhân của Mỹ Tâm (<em>See The Light</em> – khoảng 40.000 khán giả), Hà Anh Tuấn (<em>Sketch A Rose</em> – khoảng 30.000 khán giả), Soobin (<em>All-Rounder</em> – khoảng 26.000 khán giả) đã thiết lập những cột mốc mới. Ngay trong tháng 10 và đầu tháng 11/2026, hai đêm diễn của <em>Anh Trai Vượt Ngàn Chông Gai 2026</em> thu hút khoảng <strong>100.000 khán giả</strong> và tiếp tục ghi nhận tình trạng hết vé chỉ sau vài giờ mở&nbsp;bán. Song song đó, xu hướng “concert quốc gia” gắn với niềm tự hào dân tộc (như <em>Tổ Quốc Trong Tim</em>, <em>V Concert – Rạng Rỡ Việt&nbsp;Nam</em>) cũng thu hút từ <strong>25.000 đến hơn 50.000 người mỗi&nbsp;đêm</strong>. Nối tiếp đà thành công từ các mùa nhạc hội trước, xu hướng này tiếp tục ghi nhận một dấu mốc ấn tượng trong năm nay khi Hà&nbsp;Nội tổ chức đại nhạc hội quy mô lên tới <strong>60.000 khán giả</strong> nhằm chào mừng Ngày Văn hóa Việt&nbsp;Nam 24/11.
          </p>

          {/* Ảnh 2: 33 Anh Tài mở màn Concert Anh Trai Vượt Ngàn Chông Gai 2026 */}
          <figure className="article-photo-figure">
            <img
              src="/concert-atvngc-hoa-tam.jpg"
              alt="33 Anh Tài với ca khúc chủ đề Hoả Tâm mở màn Concert Anh Trai Vượt Ngàn Chông Gai 2026"
              className="article-photo-img"
              loading="lazy"
            />
            <figcaption className="article-photo-caption">
              33 Anh Tài đốt cháy sân khấu với ca khúc chủ đề Hoả Tâm mở màn Concert Anh Trai Vượt Ngàn Chông Gai 2026 diễn ra tại TP. Hồ Chí Minh vào tối 17 /10. (Ảnh: Fanpage Anh Trai Vượt Ngàn Chông Gai)
            </figcaption>
          </figure>

          {/* Ảnh 3: Concert Tinh Hà Say Hi tại Vạn Phúc City */}
          <figure className="article-photo-figure">
            <img
              src="/concert-tinh-ha-say-hi-van-phuc.jpg"
              alt="Concert Tinh Hà Say Hi tại Vạn Phúc City, TP. Hồ Chí Minh"
              className="article-photo-img"
              loading="lazy"
            />
            <figcaption className="article-photo-caption">
              Concert Tinh Hà “Say Hi” thu hút hàng chục nghìn khán giả tại Vạn Phúc City, TP. Hồ Chí Minh thành điểm hẹn âm nhạc với 24 nghệ sĩ cùng nhiều màn trình diễn bùng nổ. (Ảnh: DatVietVAC)
            </figcaption>
          </figure>

          {/* Ảnh 4: Concert See The Light Mỹ Tâm tại Mỹ Đình */}
          <figure className="article-photo-figure">
            <img
              src="/concert-my-tam-see-the-light.jpg"
              alt="Concert See The Light của Mỹ Tâm tại sân vận động Mỹ Đình"
              className="article-photo-img"
              loading="lazy"
            />
            <figcaption className="article-photo-caption">
              Concert See The Light của Mỹ Tâm diễn ra vào tối ngày 13/12 tại sân vận động Mỹ Đình (Hà Nội) với 40.000 khán giả, kéo dài gần 4 tiếng với hơn 30 bài hát. Đây là concert cá nhân lớn nhất Việt Nam hiện nay. (Ảnh: Ban Tổ chức Chương trình See The Light)
            </figcaption>
          </figure>

          {/* Ảnh 5: V Concert Rạng rỡ Việt Nam */}
          <figure className="article-photo-figure">
            <img
              src="/concert-v-concert-rang-ro-viet-nam.jpg"
              alt="V Concert với chủ đề Rạng rỡ Việt Nam tại Trung tâm Triển lãm Việt Nam"
              className="article-photo-img"
              loading="lazy"
            />
            <figcaption className="article-photo-caption">
              V Concert với chủ đề Rạng rỡ Việt Nam diễn ra tại Trung tâm Triển lãm Việt Nam (Đông Anh, Hà Nội). Concert bắt đầu từ 19h tối 9-8, concert kéo dài gần 7 tiếng. Đây được xem là “bước chuyển” của VTV với vị thế đài truyền hình quốc gia khi tổ chức concert hướng tới Ngày Quốc khánh 2-9 một cách trẻ trung, gần gũi với quy mô gần 20.000 khán giả. (Ảnh: Nam Trần/ Báo Tuổi trẻ)
            </figcaption>
          </figure>

          <p className="body-p">
            Sự bùng nổ này bắt nguồn bởi sự thay đổi rõ nét trong tâm lý sẵn sàng chi trả của công chúng. Khảo sát của Trường Đại học RMIT Việt&nbsp;Nam chỉ ra rằng sự kiện trực tiếp (concert, liveshow, fan meeting) đứng thứ hai trong nhóm các sản phẩm âm nhạc được khán giả sẵn sàng chi tiền nhiều nhất (chiếm <strong>60,9%</strong>), chỉ xếp sau gói đăng ký nghe nhạc trực tuyến (<strong>71,7%</strong>). Đặc biệt, văn hóa fandom chuyên nghiệp (<em>Prosumer Fandom</em>) đã thúc đẩy chi tiêu cho các vật phẩm đi kèm (<em>merchandise</em>): có tới <strong>33,2%</strong> người hâm mộ sẵn sàng chi từ 500.000 đến 1.000.000 đồng/tháng và <strong>22,9%</strong> chi trên 1.000.000 đồng/tháng cho nhóm sản phẩm&nbsp;này.
          </p>

          {/* Ảnh 2: Tinh Hà Say Hi Collection VieShop */}
          <figure className="article-photo-figure">
            <img
              src="/merch-tinh-ha-say-hi-collection.jpg"
              alt="Các sản phẩm thuộc Tinh Hà “Say Hi” Collection với quyền lợi Random Photocard đi kèm sản phẩm"
              className="article-photo-img"
              loading="lazy"
            />
            <figcaption className="article-photo-caption">
              Các sản phẩm thuộc Tinh Hà &ldquo;Say Hi&rdquo; Collection với quyền lợi Random Photocard đi kèm sản phẩm. (Ảnh: Fanpage VieShop)
            </figcaption>
          </figure>

          {/* Ảnh 3: Bộ sưu tập TOGETHER WE SHINE trên nền tảng VieSHOP */}
          <figure className="article-photo-figure">
            <img
              src="/merch-together-we-shine-vieshop.jpg"
              alt="Bộ sưu tập TOGETHER WE SHINE trên nền tảng VieSHOP"
              className="article-photo-img"
              loading="lazy"
            />
            <figcaption className="article-photo-caption">
              Bộ sưu tập TOGETHER WE SHINE trên nền tảng VieSHOP. Cơ chế quy đổi đơn hàng hợp lệ thành lượt bình chọn trực tiếp đã thúc đẩy người hâm mộ mạnh tay chi tiền để ủng hộ các &lsquo;Anh Trai&rsquo;. (Ảnh: Fanpage VieShop)
            </figcaption>
          </figure>
        </div>

        {/* [VỊ TRÍ 3] BIỂU ĐỒ 2: CƠ CẤU GIÁ VÉ & MỨC SẴN SÀNG CHI TRẢ CỦA KHÁN GIẢ VIỆT */}
        <div className="wide-viz-column">
          <SpendingWillingnessChart />
        </div>

        {/* [VỊ TRÍ 4] AUDIO VOXPOP & TEXT VOXBOX – TIẾNG NÓI TỪ KHÁN ĐÀI */}
        <div className="wide-viz-column">
          <VoxpopWaveformBox />
        </div>

        <div className="prose-column">
          <p className="body-p">
            Mỗi đại nhạc hội quy mô hàng chục nghìn người không chỉ mang lại doanh thu bán vé “khủng” cho nhà sản xuất, mà còn kích hoạt hiệu ứng lan tỏa lên toàn bộ hệ sinh thái dịch vụ tại địa&nbsp;phương. Sự dịch chuyển của hàng ngàn khán giả đã kéo theo sự bùng nổ nhu cầu về lưu trú, hàng không, vận tải nội đô, ẩm thực (F&amp;B) và mua sắm bán&nbsp;lẻ.
          </p>

          <p className="body-p">
            Nhìn nhận sâu hơn về hiện tượng này, chuyên gia truyền thông xã hội Nguyễn Ngọc Long cho rằng đây chính là sức mạnh của “nền kinh tế trải nghiệm”. Tác động lớn nhất của nó không chỉ nằm ở những con số lợi nhuận cục bộ, mà nằm ở việc giữ chân dòng&nbsp;tiền: Dòng tiền thay vì chảy ra nước ngoài để khán giả đi xem show quốc tế, nay được giữ lại, luân chuyển mạnh mẽ trong thị trường nội&nbsp;địa.
          </p>
        </div>

        {/* [VỊ TRÍ 5] INFOGRAPHIC TÁC ĐỘNG KINH TẾ LAN TỎA TỪ 1 ĐÊM CONCERT */}
        <div className="wide-viz-column">
          <ConcertEconomicInfographic />
        </div>
      </main>

      {/* =====================================================================
          CHƯƠNG 2: NHỮNG CUỘC ĐUA TẠI ĐỊA PHƯƠNG VÀ CÂU HỎI "SAU ĐÊM BÙNG NỔ CÒN LẠI GÌ?"
          ===================================================================== */}
      <section className="editorial-section alt-dark-band" id="chuong-2">
        <div className="prose-column">
          <h2 className="chapter-h2">
            HIỆU ỨNG PHÁO HOA VÀ CUỘC ĐUA ĐẠI NHẠC HỘI TẠI ĐỊA&nbsp;PHƯƠNG
          </h2>

          <p className="body-p">
            Trước sức hút truyền thông và khả năng kích cầu du lịch tức thời, chưa bao giờ bản đồ biểu diễn âm nhạc nội địa lại sôi động và dày đặc đến thế. Tại các đô thị lớn, những “siêu concert” giải trí liên tục xác lập kỷ lục về quy mô: “Anh trai vượt ngàn chông gai” 2026 và Tinh hà “Say hi” càn quét TP.HCM với hàng chục nghìn đến hàng trăm nghìn khán giả chỉ trong hai ngày 17-18/10; sức nóng sau đó tiếp tục lan ra Trung tâm Triển lãm Việt&nbsp;Nam (Hà&nbsp;Nội) vào ngày 19/11. Đặc biệt, sự kiện đánh dấu 20 năm của nhóm BigBang tại Mỹ&nbsp;Đình (24-25/10) cũng đón gần 100.000 lượt khách. Không đứng ngoài cuộc chơi, hàng loạt địa phương cũng xem đại nhạc hội như một chiến lược quảng bá điểm đến du lịch. Từ chuỗi sự kiện 30.000 khán giả như “Tự hào là người Việt&nbsp;Nam” tại Thái&nbsp;Nguyên, Quảng&nbsp;Ninh với “Đất mỏ anh hùng”, cho đến “Mạch nguồn Kinh Bắc” của Bắc&nbsp;Ninh, hay các lễ hội kết hợp công nghệ và di sản như Huế Wonderverse Music Fest và Festival Âm nhạc quốc tế Lang Biang (Đà&nbsp;Lạt) đều đồng loạt “nhập&nbsp;cuộc”.
          </p>

          {/* Ảnh 2: Concert Anh Trai Vượt Ngàn Chông Gai 2026 tối 18/10 */}
          <figure className="article-photo-figure">
            <img
              src="/concert-atvngc-dem-2-tphcm.jpg"
              alt="Concert Anh Trai Vượt Ngàn Chông Gai 2026 tối 18/10 tại TP.HCM"
              className="article-photo-img"
              loading="lazy"
            />
            <figcaption className="article-photo-caption">
              Concert Anh Trai Vượt Ngàn Chông Gai 2026 diễn ra vào tối 18/10 tại TP.HCM đã thu hút gần 100.000 khán giả. Concert thắng lớn về doanh thu lẫn hiệu ứng khán giả, cho thấy khâu tổ chức show ca nhạc quy mô lớn tại Việt Nam đã có bước tiến rõ rệt. (Ảnh: Ban Tổ chức Chương trình)
            </figcaption>
          </figure>

          {/* Ảnh 3: Đêm thứ hai của concert Tinh Hà Say Hi */}
          <figure className="article-photo-figure">
            <img
              src="/concert-tinh-ha-say-hi-dem-2.jpg"
              alt="Đêm thứ hai của concert Tinh Hà Say Hi tối 18/10 ở TP.HCM"
              className="article-photo-img"
              loading="lazy"
            />
            <figcaption className="article-photo-caption">
              Đêm thứ hai của concert Tinh Hà “Say Hi” diễn ra vào tối 18/10 ở TP HCM. Concert mang chủ đề “Hẹn giữa tinh hà”, quy tụ đầy đủ 24 ca sĩ của mùa giải đầu tiên. Theo ban tổ chức, ước tính chương trình thu hút gần 40.000 khán giả đến xem. (Ảnh: Ban Tổ chức Chương trình)
            </figcaption>
          </figure>

          {/* Ảnh 4: Toàn cảnh concert BIGBANG 2026-2027 World Tour in Hanoi */}
          <figure className="article-photo-figure">
            <img
              src="/concert-bigbang-world-tour-hanoi.jpg"
              alt="Toàn cảnh concert BIGBANG 2026-2027 World Tour in Hanoi tại Mỹ Đình"
              className="article-photo-img"
              loading="lazy"
            />
            <figcaption className="article-photo-caption">
              Toàn cảnh concert BIGBANG 2026-2027 World Tour in Hanoi diễn ra vào tối 25/10 tại Sân vận động quốc gia Mỹ Đình (Hà Nội). Sự kiện nhằm kỷ niệm 20 năm ra mắt nhóm nhạc huyền thoại Hàn Quốc BIGBANG. (Ảnh: Xuân Mai/ Báo VnExpress)
            </figcaption>
          </figure>

          {/* Ảnh 5: Concert Tự hào là người Việt Nam 2026 tại Thái Nguyên */}
          <figure className="article-photo-figure">
            <img
              src="/concert-tu-hao-la-nguoi-viet-nam-thai-nguyen.jpg"
              alt="Concert Tự hào là người Việt Nam 2026 tại Sân vận động Thái Nguyên"
              className="article-photo-img"
              loading="lazy"
            />
            <figcaption className="article-photo-caption">
              Concert “Tự hào là người Việt Nam 2026” với chủ đề “Nối vòng tay lớn”diễn ra vào tối 1/11 tại Sân vận động Thái Nguyên (xã Đại Phúc, tỉnh Thái Nguyên). Đây là lần đầu có một concert quy mô quốc gia tổ chức tại Thái Nguyên, quy tụ tới 30.000 khán giả. (Ảnh: Vũ Hoàng Giang/ Thông tấn xã Việt Nam)
            </figcaption>
          </figure>

          {/* Ảnh 6: Quảng Ninh - Đất mỏ anh hùng */}
          <figure className="article-photo-figure">
            <img
              src="/concert-quang-ninh-dat-mo-anh-hung.jpg"
              alt="Chương trình nghệ thuật chính luận Quảng Ninh - Đất mỏ anh hùng"
              className="article-photo-img"
              loading="lazy"
            />
            <figcaption className="article-photo-caption">
              Chào mừng 89 năm Ngày Truyền thống công nhân vùng Mỏ - Truyền thống ngành Than, tối 12/11, tại Quảng trường 30/10, UBND tỉnh Quảng Ninh tổ chức chương trình nghệ thuật chính luận đặc sắc “Quảng Ninh - Đất mỏ anh hùng”.Chương trình là sự hòa quyện giữa âm nhạc - xiếc - phóng sự và trình diễn hiện đại, quy tụ dàn nghệ sĩ hàng đầu với quy mô 30.000 khán giả. (Ảnh: Bùi My/ Báo Dân Việt)
            </figcaption>
          </figure>

          {/* Ảnh 7: Mạch nguồn Kinh Bắc - Bắc Ninh */}
          <figure className="article-photo-figure">
            <img
              src="/concert-mach-nguon-kinh-bac.jpg"
              alt="Chương trình nghệ thuật Mạch nguồn Kinh Bắc - Vươn cao thời đại tại Bắc Ninh"
              className="article-photo-img"
              loading="lazy"
            />
            <figcaption className="article-photo-caption">
              Chương trình nghệ thuật “Mạch nguồn Kinh Bắc - Vươn cao thời đại” diễn ra vào tối 19/9, tại Quảng trường 3/2 (phường Bắc Giang) nhằm chào mừng thành lập thành phố Bắc Ninh và đón nhận Huân chương Lao động hạng Nhất. (Ảnh: Đồng Thúy/ Thông tấn xã Việt Nam)
            </figcaption>
          </figure>

          {/* Ảnh 8: Huế Wonderverse Music Fest 2026 */}
          <figure className="article-photo-figure">
            <img
              src="/concert-hue-wonderverse-music-fest.jpg"
              alt="Huế Wonderverse Music Fest 2026 tại Quảng trường Hà Huy Tập"
              className="article-photo-img"
              loading="lazy"
            />
            <figcaption className="article-photo-caption">
              Với chủ đề “City Awakening - Đánh thức Di sản,” Huế Wonderverse Music Fest 2026 lần đầu được tổ chức tại Huế, mở cửa miễn phí phục vụ người dân và du khách. Từ ngày 30-8 đến 1-9, Quảng trường Hà Huy Tập trở thành điểm hội tụ của âm nhạc, nghệ thuật và công nghệ thu hút hàng ngàn khán giả tham gia. (Ảnh: Ủy ban Nhân dân Thành phố Huế)
            </figcaption>
          </figure>

          <p className="body-p">
            Tuy nhiên, khi làn sóng này lan rộng mang tính phong trào, các chuyên gia văn hóa bắt đầu đặt ra những góc nhìn phản biện gay gắt. Như PGS.TS Bùi Hoài Sơn đã nhận định trên báo <em>Tuổi Trẻ</em>, phát triển công nghiệp văn hóa không phải là một cuộc đua xem địa phương nào tổ chức được concert lớn hơn, mời nhiều ngôi sao hơn hay dựng sân khấu hoành tráng hơn. Một đêm nhạc bùng nổ đôi khi rất giống một trận pháo hoa: rực rỡ trên bầu trời trong vài tiếng đồng hồ, tạo ra &ldquo;nền kinh tế chú ý&rdquo; sôi động trên mạng xã hội, nhưng nếu thiếu một hệ sinh thái dịch vụ và bản sắc văn hóa bản địa để neo giữ cảm xúc, hiệu ứng kinh tế sẽ nhanh chóng tan biến khi khán giả rời sân vận động ngay trong&nbsp;đêm.
          </p>
        </div>

        {/* [VỊ TRÍ 6] BẢN ĐỒ NHIỆT (CHOROPLETH / SYMBOL MAP): PHÂN BỐ SỰ KIỆN & KHẢ NĂNG GIỮ CHÂN DU KHÁCH */}
        <div className="wide-viz-column">
          <VietnamEventHeatmap />
        </div>

        {/* [VỊ TRÍ 7] BIỂU ĐỒ SANKEY: DÒNG TIỀN CỦA MỘT ĐÊM CONCERT CHẢY ĐI ĐÂU? */}
        <div className="wide-viz-column">
          <ConcertCashflowSankey />
        </div>
      </section>

      {/* =====================================================================
          CHƯƠNG 3: NHỊP CẦU DỮ LIỆU & VÌ SAO SIÊU SAO QUỐC TẾ VẪN "NGẠI" ĐẾN VIỆT NAM?
          ===================================================================== */}
      <section className="editorial-section" id="chuong-3">
        <div className="prose-column">
          <h2 className="chapter-h2">
            BỨC TRANH TƯƠNG QUAN GIỮA CONCERT NỘI ĐỊA VÀ QUỐC TẾ TẠI VIỆT&nbsp;NAM
          </h2>

          <p className="body-p">
            Cũng trong năm 2025, bản đồ world tour của các nghệ sĩ quốc tế như G-Dragon, Tiffany Young hay BABYMONSTER đã chính thức gọi tên Hà&nbsp;Nội và TP.HCM. Tâm điểm phải kể đến đêm diễn thuộc tour <em>Übermensch</em> của “ông hoàng K-pop” G-Dragon tại Hà&nbsp;Nội, thiết lập kỷ lục với gần <strong>100.000 khán giả</strong> tham dự. Cột mốc này không chỉ đưa <em>Übermensch</em> trở thành show diễn quốc tế có quy mô lớn nhất từng tổ chức tại Việt&nbsp;Nam, mà còn giúp Hà&nbsp;Nội vươn lên thành điểm dừng chân đông đúc thứ hai toàn cầu của nam nghệ sĩ, chỉ xếp sau “thánh đường” Tokyo&nbsp;Dome. Dù những điểm sáng quốc tế này vẫn còn khá hiếm hoi, nhưng khi cộng hưởng cùng sức nóng của thị trường nội sinh, chúng dễ tạo ra cảm giác Việt&nbsp;Nam đã sẵn sàng trở thành một “trung tâm biểu diễn mới” của châu&nbsp;Á. Thế nhưng, khi đặt số liệu của các sự kiện nội địa lên bàn cân với số lượng tour diễn quốc tế thực sự tổ chức tại Việt&nbsp;Nam, một sự chênh lệch rõ nét lập tức lộ&nbsp;diện.
          </p>
        </div>

        {/* [VỊ TRÍ 9] BIỂU ĐỒ TƯƠNG QUAN NGUỒN GỐC NGHỆ SĨ & QUY MÔ KHÁN GIẢ */}
        <div className="wide-viz-column">
          <ArtistOriginGroupedChart />
        </div>

        <div className="prose-column">
          <p className="body-p">
            Phân tích dữ liệu từ hơn 810 sự kiện âm nhạc năm 2025 của Trường Đại học RMIT Việt&nbsp;Nam cho thấy sự áp đảo của các chương trình thuần&nbsp;nội&nbsp;địa:
          </p>

          <ul className="editorial-bullet-list">
            <li>
              <strong>Ở phân khúc quy mô 1.000 – 5.000 khán giả:</strong> Có tới <strong>200 sự kiện</strong> chỉ có nghệ sĩ nội địa, trong khi sự kiện chỉ có nghệ sĩ quốc tế dừng ở con số <strong>29</strong>, và sự kiện kết hợp cả hai là&nbsp;<strong>28</strong>.
            </li>
            <li>
              <strong>Ở phân khúc đại nhạc hội 10.000 – 40.000 khán giả:</strong> Trong khi nghệ sĩ nội địa làm chủ <strong>101 sự kiện</strong>, thì số lượng sự kiện độc lập của nghệ sĩ quốc tế tại Việt&nbsp;Nam chỉ vỏn vẹn <strong>4 sự kiện</strong> (và <strong>12 sự kiện</strong> kết hợp nghệ sĩ nội - ngoại).
            </li>
            <li>
              <strong>Ở phân khúc siêu sự kiện (&gt;40.000 khán giả):</strong> Các chương trình nội địa ghi nhận <strong>16 sự kiện</strong>, trong khi sự kiện của nghệ sĩ quốc tế chỉ đếm trên đầu ngón tay (tiêu biểu như 2 đêm diễn thuộc <em>Übermensch World Tour</em> của G-Dragon thu hút gần 100.000 khán giả tại&nbsp;Hà&nbsp;Nội).
            </li>
          </ul>

          <p className="body-p">
            Con số chỉ <strong>4 sự kiện độc lập</strong> của nghệ sĩ quốc tế ở quy mô 10.000 - 40.000 khán giả trong cả một năm sôi động là minh chứng định lượng rõ ràng nhất: Dù nhu cầu của khán giả trong nước rất lớn, Việt&nbsp;Nam vẫn chưa phải là điểm dừng chân quen thuộc trên bản đồ World&nbsp;Tour của các ngôi sao hàng đầu&nbsp;thế&nbsp;giới.
          </p>

          <h3 className="editorial-sub-h3">
            Vì sao siêu sao quốc tế vẫn “ngại” đến&nbsp;Việt&nbsp;Nam?
          </h3>

          <p className="body-p">
            Nhìn sang khu vực Đông&nbsp;Nam&nbsp;Á trong giai đoạn 2025–2026, cuộc cạnh tranh giành quyền đăng cai các chuyến lưu diễn toàn cầu đang diễn ra rất quyết liệt. <strong>Singapore</strong> củng cố vị thế “cửa ngõ biểu diễn” với 4 đêm diễn độc quyền châu Á của Lady Gaga (<em>MAYHEM Ball Tour</em>), bán ra <strong>193.000 vé</strong>, thu về <strong>40,8 triệu USD</strong> và đóng góp ước tính <strong>100–150 triệu USD</strong> cho ngành du lịch đảo quốc này. <strong>Thái&nbsp;Lan</strong> đẩy mạnh chiến lược <em>IGNITE Thailand</em> và thành lập Học viện Lễ hội để đón hàng loạt tên tuổi như Mariah Carey, BLACKPINK, Jackson Wang. <strong>Indonesia</strong> thiết lập Quỹ Du lịch trị giá <strong>86 triệu USD</strong> để thu hút nghệ sĩ quốc tế, trong khi <strong>Malaysia</strong> hướng tới cột mốc <strong>450 sự kiện âm nhạc</strong> mang về <strong>1,7 tỷ RM</strong>.
          </p>

          <p className="body-p">
            Đặt trong bức tranh sôi động đó của khu vực, thị trường Việt&nbsp;Nam giai đoạn 2025–2026 đã không còn đứng ngoài cuộc mà bắt đầu ghi nhận những tín hiệu khởi sắc rõ nét. Nếu như vài năm trước, sự xuất hiện của các ngôi sao hạng A thế giới tại Việt&nbsp;Nam còn khá thưa thớt, thì từ nửa cuối năm 2025 đến cuối năm 2026, hàng loạt sự kiện quốc tế quy mô lớn đã liên tiếp được tổ chức thành&nbsp;công:
          </p>

          <ul className="editorial-bullet-list">
            <li>
              <strong>Những bước đệm quy mô lớn cuối năm 2025:</strong> Mở đầu bằng đại nhạc hội <em>8Wonder: Moments of Wonder</em> (tháng 8/2025 tại Hà&nbsp;Nội) thu hút <strong>50.000 khán giả</strong> với dàn nghệ sĩ quốc tế gồm DJ Snake, J Balvin, The Kid LAROI, DPR IAN, tiếp nối bởi 2 đêm diễn <em>Übermensch World Tour</em> của G-Dragon tại Hà&nbsp;Nội vào tháng 11/2025 thu hút gần <strong>100.000 khán giả</strong>.
            </li>
          </ul>

          {/* Ảnh: Đại nhạc hội 8Wonder Moments of Wonder 2025 */}
          <figure className="article-photo-figure">
            <img
              src="/concert-8wonder-moments-of-wonder.jpg"
              alt="Đại nhạc hội 8Wonder: Moments of Wonder 2025 tại Trung tâm Hội chợ Triển lãm Quốc gia Hà Nội"
              className="article-photo-img"
              loading="lazy"
            />
            <figcaption className="article-photo-caption">
              Tối 23/8, tại Trung tâm Hội chợ Triển lãm Quốc gia (Hà Nội), hơn 50.000 khán giả tham gia nhạc hội 8Wonder: Moments of Wonder 2025, sự kiện nghệ thuật do Tập đoàn Vingroup tổ chức, nằm trong chuỗi hoạt động chào mừng 80 năm Quốc khánh. (Ảnh: Ban Tổ chức Chương trình)
            </figcaption>
          </figure>

          <ul className="editorial-bullet-list">
            <li>
              <strong>Đà tăng tốc và &ldquo;cơn địa chấn&rdquo; phòng vé năm 2026:</strong> Bước sang tháng 4/2026, nhóm nhạc đình đám K-Pop EXO mang tour diễn <em>EXO PLANET #6 – EXhOrizon</em> đến không gian ngoài trời Trung tâm Hội chợ và Triển lãm Sài Gòn (SECC, TP.HCM) và nhanh chóng bán hết các hạng vé Standing giá cao. Đặc biệt, vào hai ngày 24 và 25/10/2026, SVĐ Quốc gia Mỹ&nbsp;Đình (Hà&nbsp;Nội) đã trở thành tâm điểm châu Á khi đón chuyến lưu diễn kỷ niệm 20 năm <em>BIGBANG 2026–2027 WORLD TOUR</em> (do AEG Presents Asia, Carpa và VPBank đồng tổ chức cùng YG Entertainment). Với 10 hạng vé từ 1 triệu đến 10,5 triệu đồng được bán sạch cùng chuỗi Pop-up Store phân phối gần 70 dòng merchandise chính hãng (có cả phiên bản Hanoi Edition), hai đêm nhạc của BIGBANG đã thu hút khoảng <strong>90.000 lượt khán giả</strong>.
            </li>
            <li>
              <strong>Hiệu quả kinh tế du lịch được chứng minh bằng số liệu thực tế:</strong> Theo thống kê của ngành du lịch Hà&nbsp;Nội, chỉ trong hai ngày diễn ra concert của BIGBANG (cuối tháng 10/2026), Thủ đô đã đón khoảng <strong>220.000 lượt khách du lịch</strong> (tăng 15,6% so với tuần trước đó), trong đó có tới <strong>67.900 lượt khách quốc tế</strong>, mang về tổng thu từ khách du lịch ước đạt <strong>750 tỷ đồng</strong>. Bên cạnh làn sóng K-Pop, các lễ hội âm nhạc quốc tế chuyên biệt cũng mở rộng biên độ khán giả, tiêu biểu như Liên hoan nhạc Jazz quốc tế Hà&nbsp;Nội 2026 thu hút hơn <strong>12.000 người xem</strong> hay Lễ hội nhạc Jazz Việt&nbsp;Nam 2026 tại Đà&nbsp;Lạt (tháng 11/2026) quy tụ các huyền thoại Lisa Ono (Nhật Bản), Nik West và Raul Midón (Mỹ).
            </li>
          </ul>
        </div>

        {/* [VỊ TRÍ 10] BIỂU ĐỒ RADAR & BẢNG SO SÁNH 5 CHỈ SỐ HẠ TẦNG BIỂU DIỄN ĐÔNG NAM Á */}
        <div className="wide-viz-column">
          <SeaInfrastructureRadarAndTable />
        </div>

        {/* 5 Systemic Bottlenecks Cards */}
        <div className="prose-column">
          <p className="body-p" style={{ marginBottom: "1.75rem" }}>
            Tuy nhiên, khi nhìn sâu vào cấu trúc thị trường, giới chuyên môn nhận định rằng những cú hích như BIGBANG hay G-Dragon dù rất rực rỡ nhưng vẫn mang tính chất “điểm sáng đơn lẻ” và phụ thuộc lớn vào tiềm lực tài trợ của một số ít tập đoàn, ngân hàng lớn (như Vingroup hay VPBank). Như thống kê của Trường Đại học RMIT Việt&nbsp;Nam đã chỉ ra, ở phân khúc đại nhạc hội 10.000–40.000 khán giả, số sự kiện độc lập của nghệ sĩ quốc tế vẫn chiếm tỷ trọng rất nhỏ so với các đêm nhạc nội địa (4 sự kiện quốc tế so với 101 sự kiện nội&nbsp;địa). Tổng Giám đốc SCBC Vietnam &amp; Novel Production Loki Vũ từng chia sẻ trong báo cáo của Trường Đại học RMIT Việt&nbsp;Nam rằng việc làm một concert lớn ở Việt&nbsp;Nam nhiều khi giống như “khai phá vùng đất mới”: thiếu mức giá sàn, thiếu quy trình chuẩn và chi phí phát sinh liên tục do hạ tầng địa điểm phức tạp, dẫn đến nghịch lý có những sự kiện bán “cháy vé” nhưng nhà tổ chức vẫn đối mặt với nguy cơ thua&nbsp;lỗ. Khi đặt TP.&nbsp;Hồ&nbsp;Chí&nbsp;Minh và Hà&nbsp;Nội lên bàn cân so sánh với Bangkok, Singapore và Jakarta, có thể nhận diện <strong>5 điểm nghẽn mang tính hệ&nbsp;thống</strong> khiến các nhà tổ chức quốc tế còn e dè với thị trường Việt&nbsp;Nam:
          </p>

          <div className="bottlenecks-stack">
            {FIVE_SYSTEMIC_BOTTLENECKS.map((b) => (
              <article key={b.number} className="bottleneck-card">
                <div className="bottleneck-num">{b.number}</div>
                <div className="bottleneck-body">
                  <h4>{b.title}</h4>
                  <p>{b.summary}</p>
                  {b.evidenceQuote && (
                    <div className="bottleneck-quote-note">{b.evidenceQuote}</div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* [VỊ TRÍ 11] VIDEO ĐỒ HỌA GIẢI THÍCH (MOTION GRAPHIC 90 GIÂY) */}
        <div className="full-bleed-video-wrap">
          <MotionGraphic90sPlayer />
        </div>
      </section>

      {/* =====================================================================
          CHƯƠNG 4: LỜI GIẢI ĐỂ VIỆT NAM LÊN BẢN ĐỒ TOUR DIỄN THẾ GIỚI (ACCENT ĐỎ SAO VÀNG)
          ===================================================================== */}
      <section className="editorial-section chapter4-redstar-band" id="chuong-4">
        <div className="prose-column">
          <h2 className="chapter-h2">
            LỜI GIẢI ĐỂ VIỆT&nbsp;NAM LÊN BẢN ĐỒ WORLD&nbsp;TOUR
          </h2>

          <p className="body-p">
            Để chuyển hóa làn sóng concert nội sinh thành một ngành công nghiệp biểu diễn vận hành ổn định và từng bước thu hút các chuyến lưu diễn quốc tế, thị trường không thể chỉ dựa vào nỗ lực đơn lẻ của từng nghệ sĩ hay nhà sản xuất tư nhân, mà cần một hành lang thể chế và hạ tầng đồng&nbsp;bộ.
          </p>

          <p className="body-p">
            Năm 2026 ghi nhận một cột mốc chính sách quan trọng khi Bộ Chính trị ban hành <strong>Nghị quyết số 80-NQ/TW</strong> về phát triển văn hóa Việt&nbsp;Nam (ngày 07/01/2026) và Quốc hội thống nhất chọn ngày <strong>24/11 hằng năm là “Ngày Văn hóa Việt&nbsp;Nam”</strong> (người lao động được nghỉ lễ và hưởng nguyên lương). Việc thiết lập một ngày nghỉ lễ chính thức dành riêng cho văn hóa không chỉ mang ý nghĩa tôn vinh đội ngũ sáng tạo và nâng cao mức độ thụ hưởng văn hóa của người dân, mà dưới góc độ thị trường biểu diễn, đây còn là “khung thời gian vàng” kích cầu tiêu dùng văn hóa, tạo điều kiện để công chúng di chuyển liên tỉnh tham gia các lễ hội âm nhạc kết hợp du lịch cuối&nbsp;năm.
          </p>

          {/* Quantitative Targets Box of Resolution 80-NQ/TW */}
          <div className="nq80-targets-grid">
            <div className="nq80-metric-tile">
              <span className="nq80-num">7% GDP</span>
              <span className="nq80-desc">Đóng góp của công nghiệp văn hóa vào năm 2030 theo Nghị&nbsp;quyết&nbsp;80-NQ/TW</span>
            </div>
            <div className="nq80-metric-tile">
              <span className="nq80-num">05 thương hiệu</span>
              <span className="nq80-desc">Liên hoan nghệ thuật, lễ hội văn hóa quốc tế về điện ảnh, âm&nbsp;nhạc,&nbsp;mỹ&nbsp;thuật</span>
            </div>
            <div className="nq80-metric-tile">
              <span className="nq80-num">Top 3 ASEAN</span>
              <span className="nq80-desc">&amp; Top 30 thế giới về Chỉ số Sức mạnh mềm (Soft Power Index) và xuất&nbsp;khẩu&nbsp;văn&nbsp;hóa</span>
            </div>
            <div className="nq80-metric-tile">
              <span className="nq80-num">122.000 tỷ đ</span>
              <span className="nq80-desc">Nguồn lực Quốc hội phê duyệt cho Chương trình Mục tiêu Quốc gia Phát triển Văn&nbsp;hóa&nbsp;2025–2030</span>
            </div>
          </div>

          <p className="body-p">
            Cùng với nguồn lực 122.000 tỷ đồng đã được Quốc hội phê duyệt cho Chương trình Mục tiêu Quốc gia về Phát triển Văn&nbsp;hóa giai đoạn 2025–2030, Nghị quyết 80-NQ/TW đã xác lập các chỉ tiêu định lượng cụ thể đến năm 2030: các ngành công nghiệp văn hóa đóng góp <strong>7% GDP</strong>; xây dựng thành công <strong>5 thương hiệu</strong> liên hoan nghệ thuật, lễ hội văn hóa quốc tế về điện ảnh, âm&nbsp;nhạc, mỹ&nbsp;thuật; đồng thời đưa Việt&nbsp;Nam vào nhóm <strong>3 quốc gia dẫn đầu ASEAN</strong> và nhóm <strong>30 thế giới</strong> về giá trị xuất khẩu sản phẩm công nghiệp văn&nbsp;hóa.
          </p>

          <p className="body-p">
            Từ khung định hướng của Nghị quyết 80-NQ/TW và thực tiễn vận hành của thị trường, 5 nhóm giải pháp được đặt ra nhằm tháo gỡ tương ứng 5 điểm nghẽn đã phân tích ở&nbsp;trên:
          </p>

          <div className="solutions-pillars-list">
            <div className="pillar-item">
              <h4>
                1. Giải bài toán hạ tầng sân bãi bằng quy hoạch Tổ hợp biểu diễn đa năng qua mô hình Hợp tác Công&nbsp;–&nbsp;Tư&nbsp;(PPP)
              </h4>
              <p>
                Báo cáo của Trường Đại học RMIT Việt&nbsp;Nam chỉ ra rằng sự thiếu hụt các sân khấu và nhà hát đa năng đạt chuẩn quốc tế đang là lực cản lớn nhất của ngành sự kiện Việt&nbsp;Nam. Trong khi đó, mô hình PPP đã chiếm tới <strong>17,8%</strong> tổng số sự kiện âm nhạc năm 2025 và bước đầu chứng minh hiệu quả trong việc huy động nguồn lực xã hội hóa cho các đại nhạc hội quy mô lớn, tiêu biểu như sự kiện concert chào mừng Ngày Văn hóa Việt&nbsp;Nam 24/11 tại SVĐ Mỹ&nbsp;Đình với quy mô dự kiến <strong>60.000 khán giả</strong>. Vận dụng chủ trương đẩy mạnh hợp tác công&nbsp;–&nbsp;tư trong lĩnh vực văn hóa, thể thao của Nghị quyết 80-NQ/TW, các đô thị trọng điểm như Hà&nbsp;Nội, TP.HCM và Đà&nbsp;Nẵng cần ưu tiên quỹ đất để quy hoạch các Tổ hợp biểu diễn trong nhà có mái che (Indoor Arena 15.000–20.000 chỗ) và nâng cấp sân vận động đạt chuẩn tải trọng âm thanh, ánh sáng quốc tế thay vì phụ thuộc vào các công trình thể thao cũ&nbsp;kỹ.
              </p>
            </div>

            <div className="pillar-item">
              <h4>
                2. Giải bài toán chuỗi cung ứng kỹ thuật và nhân lực bằng việc chuẩn hóa đào tạo và nội địa hóa sản&nbsp;xuất
              </h4>
              <p>
                Để giảm tỷ lệ phụ thuộc vào thiết bị nhập khẩu đắt đỏ mỗi khi đón tour diễn nước ngoài, ngành biểu diễn cần các chính sách khuyến khích đầu tư vào nghiên cứu và phát triển (R&amp;D), chuyển giao công nghệ sản xuất và đào tạo chuyên sâu các ngành nghề kỹ thuật âm thanh, ánh sáng, quản trị sân khấu. Những thương vụ hợp tác chiến lược như việc Sony Music mua lại 49% mảng phát hành và quản lý nghệ sĩ của YeaH1 hay sự xuất hiện của các không gian sản xuất chuẩn quốc tế tại TP.HCM trong năm 2025 là tín hiệu tích cực giúp chuyển giao quy trình vận hành toàn cầu vào nội địa. Đồng thời, chính các đại nhạc hội nội sinh hiện nay là môi trường thực hành để ê-kíp Việt&nbsp;Nam chuẩn hóa năng lực điều phối và định hình những thương hiệu lễ hội âm nhạc bản địa (IP) có sức sống dài hạn theo chiến lược “Bản địa hóa đẳng cấp toàn cầu” (<em>Glocalization</em>).
              </p>
            </div>

            <div className="pillar-item">
              <h4>
                3. Giải bài toán tài chính và phí bảo lãnh thông qua ưu đãi thuế và mô hình đồng sở hữu thương&nbsp;hiệu
              </h4>
              <p>
                Trong bối cảnh mức chi tiêu bình quân của người dùng nhạc số tại Việt&nbsp;Nam dự kiến đến năm 2030 mới đạt khoảng <strong>5,44 USD/người</strong>, việc cân đối chi phí bảo lãnh hàng triệu USD cho nghệ sĩ quốc tế là bài toán quá sức nếu nhà tổ chức chỉ dựa vào doanh thu bán vé. Lời giải đến từ hai phía: Về mặt chính sách, Nghị quyết 80-NQ/TW đã mở đường cho việc áp dụng cơ chế miễn, giảm thuế thu nhập doanh nghiệp vượt trội đối với lĩnh vực công nghiệp văn hóa, công nghiệp giải trí và khuyến khích hình thành các quỹ đầu tư văn hóa. Về mặt thị trường, xu hướng các tập đoàn tài chính – ngân hàng, bán lẻ, F&amp;B tham gia đồng sở hữu hoặc chủ trì tổ chức <strong>107 sự kiện âm nhạc</strong> trong năm 2025 (như trường hợp VPBank đưa G-Dragon về Việt&nbsp;Nam) cho thấy mô hình chia sẻ rủi ro tài chính giữa nhà sản xuất và các thương hiệu lớn đang trở thành đòn bẩy quan&nbsp;trọng.
              </p>
            </div>

            <div className="pillar-item">
              <h4>
                4. Giải bài toán giao thông kết nối điểm diễn bằng quy hoạch tích hợp hạ tầng đô thị&nbsp;–&nbsp;du&nbsp;lịch
              </h4>
              <p>
                Theo tinh thần của Nghị quyết 80-NQ/TW về việc yếu tố văn hóa phải được tính toán đồng bộ trong mọi quy hoạch phát triển kinh tế và đô thị, việc xây dựng các tổ hợp biểu diễn mới bắt buộc phải gắn liền với mạng lưới giao thông công cộng khối lượng lớn (tàu điện đô thị Metro, xe buýt nhanh). Bên cạnh đó, chính quyền địa phương và ban tổ chức cần thiết lập quy trình phối hợp điều tiết giao thông, kéo dài giờ hoạt động của hệ thống vận tải công cộng trong các đêm diễn nhằm giải tỏa nhanh lượng khán giả từ <strong>40.000 đến 60.000 người</strong>, giảm thiểu tình trạng ùn tắc và ô nhiễm cục bộ quanh khu vực sự&nbsp;kiện.
              </p>
            </div>

            <div className="pillar-item">
              <h4>
                5. Giải bài toán thủ tục hành chính và thiếu hụt dữ liệu bằng cơ chế “tiền kiểm sang hậu kiểm” và chuẩn hóa thống&nbsp;kê
              </h4>
              <p>
                Nghị quyết 80-NQ/TW nhấn mạnh yêu cầu đẩy mạnh cải cách thủ tục hành chính, phân cấp phân quyền và chuyển từ “tiền kiểm sang hậu kiểm” gắn với minh bạch hóa các quy chuẩn quản lý. Khi được cụ thể hóa thành cơ chế liên thông (“một cửa”) trong việc cấp phép biểu diễn, cấp thị thực và tạm nhập tái xuất thiết bị sân khấu, thời gian chuẩn bị của các nhà tổ chức quốc tế sẽ được rút ngắn đáng kể. Song song đó, sự hiện diện chính thức của các bảng xếp hạng âm nhạc quốc tế như <strong>IFPI Official Vietnam Chart</strong> và <strong>Billboard Vietnam</strong>, kết hợp với dữ liệu giao dịch từ các nền tảng bán vé công nghệ (Ticketbox, Eventista/1Zone) và <strong>Nền tảng Bản đồ số Văn hóa Việt&nbsp;Nam</strong> (công bố tháng 11/2026), sẽ tạo lập hệ thống dữ liệu thị trường minh bạch — cơ sở không thể thiếu để thuyết phục các đơn vị tổ chức World&nbsp;Tour toàn&nbsp;cầu.
              </p>
            </div>
          </div>
        </div>


        {/* [VỊ TRÍ 12] QUOTE CARDS – GÓC NHÌN CHUYÊN GIA & NHÀ QUẢN LÝ */}
        <div className="wide-viz-column">
          <ExpertQuotesCarousel />
        </div>

        {/* [VỊ TRÍ 13] BOX TƯƠNG TÁC ĐỘC GIẢ (INTERACTIVE POLL) */}
        <div className="prose-column">
          <p className="body-p" style={{ marginBottom: "2rem" }}>
            Nhìn tổng thể, làn sóng bùng nổ của các concert nội sinh giai đoạn 2024–2026 là minh chứng rõ nét cho thực lực và tiềm năng thương mại to lớn của thị trường biểu diễn Việt&nbsp;Nam. Thế nhưng, một nền công nghiệp không thể chỉ phát triển dựa trên sự cuồng nhiệt nhất thời. Để hoạt động biểu diễn âm nhạc thực sự thoát khỏi tính chất thời vụ, những định hướng từ <strong>Nghị quyết 80-NQ/TW</strong> phải khẩn trương được chuyển hóa thành hành động thực tiễn. Chỉ khi chúng ta kiến tạo được hệ thống sân bãi đạt chuẩn, quy trình cấp phép tinh gọn cùng chuỗi dịch vụ hậu cần đồng bộ, ngành công nghiệp biểu diễn mới đủ sức tạo ra giá trị bền vững, đóng góp thực chất vào mục tiêu <strong>7% GDP</strong> của toàn ngành công nghiệp văn hóa vào năm&nbsp;2030.
          </p>

          <InteractiveReaderPoll />


        </div>
      </section>

      {/* BẢNG NGUỒN ĐỐI CHIẾU TOÀN DIỆN (FILE PDF RMIT & BÁO CHÍNH THỐNG) */}
      <div className="wide-viz-column">
        <DataSourcesProvenance />
      </div>

      {/* FOOTER BẢN QUYỀN & NGUỒN FOOTAGE */}
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
            <h3>BẢN ĐỒ CONCERT VIỆT NAM: SỨC BẬT NỘI SINH</h3>
            <p>
              Tác phẩm Báo chí Dữ liệu Đa phương tiện (Multimedia Data Journalism)
              <br />
              • Phân tích toàn cảnh thị trường biểu diễn Việt Nam giai đoạn 2024–2026 và tầm nhìn
              <br />
              chiến lược công nghiệp văn hóa 2030.
            </p>
            <p className="footer-footage-credit">{ARTICLE_META.footageCredits}</p>
          </div>
          <div className="footer-col-meta">
            <div>
              <strong>Dữ liệu &amp; Tài liệu tham chiếu:</strong> Báo cáo Tổng quan ngành công nghiệp âm nhạc Việt Nam 2025–2026 (Trường Đại học RMIT Việt Nam), Nghị quyết 80-NQ/TW, Sở VH&amp;TT TP.HCM, Bộ VHTTDL, Statista, Báo Nhân Dân, Tuổi Trẻ, Đại biểu Nhân dân, VietnamPlus, Znews.
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
    </div>
  );
}
