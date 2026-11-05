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
  BottleneckSolutionMatrix,
  ExpertQuotesCarousel,
  InteractiveReaderPoll,
  DataSourcesProvenance,
} from "@/components/PolicySolutionsSection";
import { ARTICLE_META, FIVE_SYSTEMIC_BOTTLENECKS } from "@/data/articleData";

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
          <a href="#vi-tri-1" className="nav-brand">
            <span className="nav-live-pulse" />
            <span>TIẾNG NÓI TRẺ</span>
          </a>

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

        <nav aria-label="Điều hướng các phần bài báo">
          <ul className="nav-chapter-links">
            <li>
              <a href="#chuong-1">1. Concert nội sinh</a>
            </li>
            <li>
              <a href="#chuong-2">2. Hiệu ứng pháo hoa</a>
            </li>
            <li>
              <a href="#chuong-3">3. Khoảng cách World Tour</a>
            </li>
            <li>
              <a href="#chuong-4" className="nav-redstar-pill">
                4. Bệ phóng Nghị quyết 80
              </a>
            </li>
            <li>
              <a href="#bang-nguon">Bảng nguồn</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* [VỊ TRÍ 1] HEADER VIDEO LOOP + TIÊU ĐỀ + SAPO NGẮN GỌN + 4 CHỈ SỐ ĐỊNH LƯỢNG */}
      <HeroConcertLoop />

      {/* =====================================================================
          CHƯƠNG 1: KỶ NGUYÊN "CONCERT NỘI SINH" - KHI NGƯỜI VIỆT CHI TIỀN TRIỆU CHO NHẠC VIỆT
          ===================================================================== */}
      <main className="editorial-section" id="chuong-1">
        <div className="prose-column">
          <div className="chapter-kicker">SỨC BẬT THỊ TRƯỜNG NỘI ĐỊA</div>
          <h2 className="chapter-h2">
            Kỷ nguyên “Concert nội sinh” — Khi người&nbsp;Việt
            <br />
            chi tiền triệu cho&nbsp;nhạc&nbsp;Việt
          </h2>

          <p className="body-p">
            Nếu như vài năm trước, thị trường biểu diễn âm nhạc Việt&nbsp;Nam chủ yếu vận hành theo hai mô hình chính. Thứ nhất là các đại nhạc hội do nhãn hàng tài trợ toàn bộ, mời nghệ sĩ về biểu diễn nhằm mục đích truyền thông, quảng bá thương hiệu. Mô hình thứ hai là các liveshow, concert do chính nghệ sĩ tự tổ chức, đòi hỏi họ phải có lượng người hâm mộ ổn định để đảm bảo doanh thu bán vé. Tuy nhiên, bước sang giai đoạn 2024–2026, ngành công nghiệp biểu diễn đã ghi nhận bước chuyển mình đáng kể với sự dịch chuyển mạnh mẽ về cả quy mô tổ chức lẫn hành vi tiêu dùng của khán&nbsp;giả.
          </p>

          <p className="body-p">
            Về mặt tổ chức, thị trường không còn bó hẹp trong các đêm nhạc quảng cáo miễn phí hay nỗ lực đơn lẻ của từng cá nhân, mà chuyển sang mô hình kinh tế giải trí tích hợp do các công ty sản xuất chuyên nghiệp dẫn dắt (chiếm <strong>49,6%</strong> tổng số sự kiện). Các chương trình truyền hình thực tế không chỉ dừng lại ở việc phát sóng mà trở thành bệ phóng cho những chuỗi concert thương mại quy mô hàng chục nghìn khán giả. Song song đó là sự xuất hiện của mô hình hợp tác công – tư (PPP, chiếm <strong>17,8%</strong>) tạo nên các &ldquo;concert quốc gia&rdquo;, cùng xu hướng các thương hiệu tham gia đồng sở hữu sự kiện để kiến tạo trải nghiệm thay vì chỉ đặt logo tài trợ đơn thuần. Về phía khán giả, tư duy &ldquo;xem nhạc miễn phí&rdquo; dần nhường chỗ cho sự hình thành của văn hóa thần tượng nội địa và các cộng đồng người hâm mộ có tổ chức bài bản. Từ vị thế người nghe thụ động, khán giả trẻ chủ động chi tiền triệu mua vé, sưu tầm vật phẩm và thực hiện các dự án tiếp sức quy mô lớn cho nghệ sĩ&nbsp;Việt.
          </p>

          <p className="body-p">
            Theo <em>Báo cáo Tổng quan ngành công nghiệp âm nhạc Việt&nbsp;Nam 2025-2026</em> của Đại học RMIT Việt&nbsp;Nam, năm 2025 ghi nhận hơn <strong>810 sự kiện âm nhạc</strong> đã diễn ra hoặc được công bố trên cả nước. Riêng tại đầu tàu kinh tế TP.HCM, số liệu thống kê trong 9 tháng đầu năm 2026 cho thấy thành phố đã tiếp nhận, thẩm định và chấp thuận <strong>1.064 hồ sơ</strong> hoạt động nghệ thuật biểu diễn, trong đó có tới <strong>944 chương trình nghệ thuật, sân khấu</strong>. Tần suất sự kiện tăng cao vào mùa hè và nửa cuối năm phản ánh nhu cầu thưởng thức âm nhạc trực tiếp (<em>live music</em>) đang dần trở thành một phần trong lối sống của người trẻ đô&nbsp;thị.
          </p>
        </div>

        {/* [VỊ TRÍ 2] BIỂU ĐỒ 1: SỰ TĂNG TRƯỞNG QUY MÔ & TỐC ĐỘ BÁN VÉ CONCERT NỘI ĐỊA */}
        <div className="wide-viz-column">
          <EventScaleAndConcertsWidget />
        </div>

        <div className="prose-column">
          <p className="body-p">
            Đáng chú ý, phân khúc các sự kiện quy mô lớn (trên 5.000 khán giả) đã chiếm khoảng <strong>23,8%</strong> tổng số sự kiện được khảo sát trong báo cáo của RMIT, trong đó nhóm đại nhạc hội từ 10.000 đến 40.000 người chiếm <strong>14,6%</strong> và trên 40.000 người chiếm <strong>2,5%</strong>. Sự trỗi dậy của các “concert phái sinh” bước ra từ truyền hình thực tế như <em>Anh Trai Vượt Ngàn Chông Gai</em>, <em>Anh Trai &ldquo;Say Hi&rdquo;</em>, <em>Em Xinh &ldquo;Say Hi&rdquo;</em>, cùng chuỗi liveshow cá nhân của Mỹ Tâm (<em>See The Light</em> – khoảng 40.000 khán giả), Hà Anh Tuấn (<em>Sketch A Rose</em> – khoảng 30.000 khán giả), Soobin (<em>All-Rounder</em> – khoảng 26.000 khán giả) đã thiết lập những cột mốc mới. Ngay trong tháng 10 và đầu tháng 11/2026, hai đêm diễn của <em>Anh Trai Vượt Ngàn Chông Gai 2026</em> thu hút khoảng <strong>100.000 khán giả</strong> và tiếp tục ghi nhận tình trạng hết vé chỉ sau vài giờ mở&nbsp;bán. Song song đó, xu hướng “concert quốc gia” gắn với niềm tự hào dân tộc (như <em>Tổ Quốc Trong Tim</em>, <em>V Concert – Rạng Rỡ Việt&nbsp;Nam</em>) cũng thu hút từ <strong>25.000 đến hơn 50.000 người mỗi&nbsp;đêm</strong>. Nối tiếp đà thành công từ các mùa nhạc hội trước, xu hướng này tiếp tục ghi nhận một dấu mốc ấn tượng trong năm nay khi Hà&nbsp;Nội tổ chức đại nhạc hội quy mô lên tới <strong>60.000 khán giả</strong> nhằm chào mừng Ngày Văn hóa Việt&nbsp;Nam 24/11.
          </p>

          <p className="body-p">
            Sự bùng nổ này bắt nguồn bởi sự thay đổi rõ nét trong tâm lý sẵn sàng chi trả của công chúng. Khảo sát của Đại học RMIT chỉ ra rằng sự kiện trực tiếp (concert, liveshow, fan meeting) đứng thứ hai trong nhóm các sản phẩm âm nhạc được khán giả sẵn sàng chi tiền nhiều nhất (chiếm <strong>60,9%</strong>), chỉ xếp sau gói đăng ký nghe nhạc trực tuyến (<strong>71,7%</strong>). Đặc biệt, văn hóa fandom chuyên nghiệp (<em>Prosumer Fandom</em>) đã thúc đẩy chi tiêu cho các vật phẩm đi kèm (<em>merchandise</em>): có tới <strong>33,2%</strong> người hâm mộ sẵn sàng chi từ 500.000 đến 1.000.000 đồng/tháng và <strong>22,9%</strong> chi trên 1.000.000 đồng/tháng cho nhóm sản phẩm&nbsp;này.
          </p>
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
            Nhìn nhận sâu hơn về hiện tượng này, chuyên gia truyền thông xã hội Nguyễn Ngọc Long cho rằng đây chính là sức mạnh của “nền kinh tế trải nghiệm”. Tác động lớn nhất của nó không chỉ nằm ở những con số lợi nhuận cục bộ, mà nằm ở việc giữ chân dòng tiền: Dòng tiền thay vì chảy ra nước ngoài để khán giả đi xem show quốc tế, nay được giữ lại, luân chuyển mạnh mẽ trong thị trường nội&nbsp;địa.
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
          <div className="chapter-kicker">PHẢN BIỆN CHUỖI GIÁ TRỊ & TÍNH BỀN VỮNG</div>
          <h2 className="chapter-h2">
            HIỆU ỨNG PHÁO HOA VÀ CUỘC ĐUA ĐẠI NHẠC HỘI TẠI ĐỊA&nbsp;PHƯƠNG
          </h2>

          <p className="body-p">
            Trước sức hút truyền thông và khả năng kích cầu du lịch tức thời, chưa bao giờ bản đồ biểu diễn âm nhạc nội địa lại sôi động và dày đặc đến thế. Tại các đô thị lớn, những “siêu concert” giải trí liên tục xác lập kỷ lục về quy mô: “Anh trai vượt ngàn chông gai” 2026 và Tinh hà “Say hi” càn quét TP.HCM với hàng chục nghìn đến hàng trăm nghìn khán giả chỉ trong hai ngày 17-18/10; sức nóng sau đó tiếp tục lan ra Trung tâm Triển lãm Việt&nbsp;Nam (Hà&nbsp;Nội) vào ngày 19/11. Đặc biệt, sự kiện đánh dấu 20 năm của nhóm BigBang tại Mỹ&nbsp;Đình (24-25/10) cũng đón gần 100.000 lượt khách. Không đứng ngoài cuộc chơi, hàng loạt địa phương cũng xem đại nhạc hội như một chiến lược quảng bá điểm đến du lịch. Từ chuỗi sự kiện 30.000 khán giả như “Tự hào là người Việt&nbsp;Nam” tại Thái&nbsp;Nguyên, Quảng&nbsp;Ninh với “Đất mỏ anh hùng”, cho đến “Mạch nguồn Kinh Bắc” của Bắc&nbsp;Ninh, hay các lễ hội kết hợp công nghệ và di sản như Huế Wonderverse Music Fest và Festival Âm nhạc quốc tế Lang Biang (Đà&nbsp;Lạt) đều đồng loạt “nhập&nbsp;cuộc”.
          </p>

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
          <div className="chapter-kicker">TƯƠNG QUAN NỘI – NGOẠI & 5 ĐIỂM NGHẼN HỆ THỐNG</div>
          <h2 className="chapter-h2">
            Nhịp cầu dữ liệu: Bức tranh tương quan giữa concert nội địa và quốc tế tại&nbsp;Việt&nbsp;Nam
          </h2>

          <p className="body-p">
            Sự sôi động của các đêm nhạc nội sinh dễ mang lại cảm giác rằng Việt&nbsp;Nam đã sẵn sàng trở thành một “trung tâm biểu diễn mới” của châu&nbsp;Á. Thế nhưng, khi đặt số liệu sự kiện của nghệ sĩ nội địa cạnh các sự kiện của nghệ sĩ quốc tế tại Việt&nbsp;Nam, một khoảng cách lớn lập tức lộ&nbsp;diện.
          </p>
        </div>

        {/* [VỊ TRÍ 9] BIỂU ĐỒ TƯƠNG QUAN NGUỒN GỐC NGHỆ SĨ & QUY MÔ KHÁN GIẢ */}
        <div className="wide-viz-column">
          <ArtistOriginGroupedChart />
        </div>

        <div className="prose-column">
          <p className="body-p">
            Phân tích dữ liệu từ hơn 810 sự kiện âm nhạc năm 2025 của Đại học RMIT cho thấy sự áp đảo tuyệt đối của các chương trình thuần&nbsp;nội&nbsp;địa:
          </p>

          <ul className="editorial-bullet-list">
            <li>
              <strong>Ở phân khúc quy mô 1.000 – 5.000 khán giả:</strong> Có tới <strong>200 sự kiện</strong> chỉ có nghệ sĩ nội địa, trong khi sự kiện chỉ có nghệ sĩ quốc tế dừng ở con số <strong>29</strong>, và sự kiện kết hợp cả hai&nbsp;là&nbsp;<strong>28</strong>.
            </li>
            <li>
              <strong>Ở phân khúc đại nhạc hội 10.000 – 40.000 khán giả:</strong> Trong khi nghệ sĩ nội địa làm chủ <strong>101 sự kiện</strong>, số lượng sự kiện độc lập của nghệ sĩ quốc tế tại Việt&nbsp;Nam chỉ vỏn vẹn <strong>4 sự kiện</strong> (và <strong>12 sự kiện</strong> kết hợp nghệ sĩ nội&nbsp;–&nbsp;ngoại).
            </li>
            <li>
              <strong>Ở phân khúc siêu sự kiện (&gt;40.000 khán giả):</strong> Các chương trình nội địa ghi nhận <strong>16 sự kiện</strong>, trong khi sự kiện độc lập của nghệ sĩ quốc tế chỉ đếm trên đầu ngón tay với <strong>3 sự kiện</strong> (tiêu biểu như 2 đêm diễn thuộc <em>Übermensch World Tour</em> của G-Dragon thu hút gần 100.000 khán giả tại&nbsp;Hà&nbsp;Nội).
            </li>
          </ul>

          <p className="body-p">
            Con số chỉ <strong>4 sự kiện độc lập</strong> của nghệ sĩ quốc tế ở quy mô 10.000–40.000 khán giả trong cả một năm sôi động là minh chứng định lượng rõ ràng nhất: Dù nhu cầu của khán giả trong nước rất lớn, Việt&nbsp;Nam vẫn chưa phải là điểm dừng chân quen thuộc trên bản đồ World&nbsp;Tour của các ngôi sao hàng đầu&nbsp;thế&nbsp;giới.
          </p>

          <h3 className="editorial-sub-h3">
            Vì sao siêu sao quốc tế vẫn “ngại” đến&nbsp;Việt&nbsp;Nam?
          </h3>

          <p className="body-p">
            Nhìn sang khu vực Đông&nbsp;Nam&nbsp;Á trong giai đoạn 2025–2026, cuộc cạnh tranh giành quyền đăng cai các chuyến lưu diễn toàn cầu đang diễn ra rất quyết liệt. <strong>Singapore</strong> củng cố vị thế “cửa ngõ biểu diễn” với 4 đêm diễn độc quyền châu Á của Lady Gaga (<em>MAYHEM Ball Tour</em>, tháng 5/2025), bán ra <strong>193.000 vé</strong>, thu về <strong>40,8 triệu USD</strong> và đóng góp ước tính <strong>100–150 triệu USD</strong> cho ngành du lịch đảo quốc này. <strong>Thái&nbsp;Lan</strong> đẩy mạnh chiến lược <em>IGNITE Thailand</em> và thành lập Học viện Lễ hội để đón hàng loạt tên tuổi như Mariah Carey, BLACKPINK, Jackson Wang. <strong>Indonesia</strong> thiết lập Quỹ Du lịch trị giá <strong>86 triệu USD</strong> để thu hút nghệ sĩ quốc tế, trong khi <strong>Malaysia</strong> hướng tới cột mốc <strong>450 sự kiện âm nhạc</strong> mang về <strong>1,7&nbsp;tỷ&nbsp;RM</strong>.
          </p>

          <p className="body-p">
            Nhìn nhận một cách công bằng, bức tranh giai đoạn 2025–2026 tại Việt&nbsp;Nam đã có nhiều dấu hiệu khởi sắc hơn hẳn những năm trước chứ không còn hiu hắt. Cú hích gần 100.000 khán giả từ hai đêm diễn của G-Dragon tại Hà&nbsp;Nội, cùng sự xuất hiện đều đặn hơn của các nghệ sĩ K-Pop, US-UK và dàn sao châu Á trong các đại nhạc hội kết hợp, fancon quy mô nhà thi đấu tại TP.HCM và Thủ đô đã chứng minh sức hấp dẫn thực chất của thị trường gần 100 triệu dân. Tuy nhiên, để chuyển từ những thương vụ điểm sáng đơn lẻ sang một điểm hẹn thường trực của các chuyến lưu diễn sân vận động toàn cầu, việc đặt TP.HCM và Hà&nbsp;Nội lên bàn cân so sánh đa chiều với Bangkok, Singapore và Jakarta cho thấy <strong>5 điểm nghẽn mang tính hệ&nbsp;thống</strong>:
          </p>
        </div>

        {/* [VỊ TRÍ 10] BIỂU ĐỒ RADAR & BẢNG SO SÁNH 5 CHỈ SỐ HẠ TẦNG BIỂU DIỄN ĐÔNG NAM Á */}
        <div className="wide-viz-column">
          <SeaInfrastructureRadarAndTable />
        </div>

        {/* 5 Systemic Bottlenecks Cards */}
        <div className="prose-column">
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
        <div className="wide-viz-column">
          <MotionGraphic90sPlayer />
        </div>
      </section>

      {/* =====================================================================
          CHƯƠNG 4: LỜI GIẢI ĐỂ VIỆT NAM LÊN BẢN ĐỒ TOUR DIỄN THẾ GIỚI (ACCENT ĐỎ SAO VÀNG)
          ===================================================================== */}
      <section className="editorial-section chapter4-redstar-band" id="chuong-4">
        <div className="prose-column">
          <div className="chapter-kicker redstar-kicker">
            ★ BỆ PHÓNG THỂ CHẾ & CHIẾN LƯỢC CẤT CÁNH
          </div>
          <h2 className="chapter-h2">
            Lời giải để Việt&nbsp;Nam lên bản đồ tour&nbsp;diễn&nbsp;thế&nbsp;giới
          </h2>

          <p className="body-p">
            Để chuyển hóa “cơn sốt” concert nội sinh thành một ngành công nghiệp biểu diễn chuyên nghiệp và đưa Việt&nbsp;Nam trở thành điểm đến sáng giá trên bản đồ âm nhạc quốc tế, thị trường không thể chỉ dựa vào nỗ lực tự thân của từng nghệ sĩ hay nhà sản xuất tư nhân, mà cần một bệ phóng thể chế đồng&nbsp;bộ.
          </p>

          <p className="body-p">
            Năm 2026 đánh dấu một cột mốc chính sách đặc biệt quan trọng: <strong>Nghị quyết số 80-NQ/TW</strong> của Bộ Chính trị về phát triển văn hóa Việt&nbsp;Nam (ban hành ngày 07/01/2026) và Nghị quyết của Quốc hội chính thức thống nhất chọn ngày <strong>24/11 hằng năm là “Ngày Văn hóa Việt&nbsp;Nam”</strong> (người lao động được nghỉ lễ và hưởng nguyên lương). Việc thiết lập một ngày nghỉ lễ văn hóa chính thức không chỉ mang ý nghĩa tôn vinh cội nguồn bản sắc dân tộc và quyền thụ hưởng văn hóa của nhân dân, mà còn kiến tạo một “mùa vàng tiêu dùng văn hóa – du lịch âm nhạc” định kỳ hằng năm trên toàn quốc, tạo xung lực cầu trực tiếp cho các nhà tổ chức biểu diễn và điểm đến địa&nbsp;phương.
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
            Cùng với nguồn lực 122.000 tỷ đồng cho giai đoạn 2025–2030, đây chính là “đường băng” pháp lý để tháo gỡ trực diện từng điểm nghẽn thông qua ba trụ cột giải pháp&nbsp;chiến&nbsp;lược:
          </p>

          <div className="solutions-pillars-list">
            <div className="pillar-item">
              <h4>
                1. Hoàn thiện cơ chế “Một cửa” và chính sách ưu đãi theo tinh thần Nghị&nbsp;quyết&nbsp;80-NQ/TW
              </h4>
              <p>
                Giải quyết trực tiếp điểm nghẽn thủ tục và bài toán tài chính bằng cách cụ thể hóa chủ trương coi trọng yếu tố văn hóa trong hoạch định chính sách kinh tế: rút gọn quy trình thẩm định hồ sơ biểu diễn quốc tế, thiết lập luồng hải quan nhanh cho thiết bị sân khấu tạm nhập tái xuất, hỗ trợ thị thực làm việc cho đoàn lưu diễn và nghiên cứu các gói ưu đãi thuế nhà thầu đối với những đại nhạc hội gắn liền với xúc tiến du lịch quốc&nbsp;gia.
              </p>
            </div>

            <div className="pillar-item">
              <h4>
                2. Đột phá hạ tầng biểu diễn có mái che gắn kết Metro qua mô hình Hợp tác Công&nbsp;–&nbsp;Tư&nbsp;(PPP)
              </h4>
              <p>
                Tháo gỡ đồng thời hai nút thắt vật lý lớn nhất là sân bãi và giao thông giải tỏa đám đông. Dữ liệu từ báo cáo RMIT cho thấy mô hình PPP đã chiếm tới <strong>17,8%</strong> tổng số sự kiện năm 2025 và chứng minh hiệu quả vượt trội qua các “concert quốc gia” — điển hình nhất là đại nhạc hội chào mừng Ngày Văn hóa Việt Nam 24/11 đầu tiên được giao cho Hà Nội chủ trì tại SVĐ Mỹ Đình với quy mô dự kiến lên tới <strong>60.000 khán giả</strong>. Xa hơn, mô hình PPP cần được áp dụng để quy hoạch và xây dựng các Tổ hợp biểu diễn – thể thao – thương mại đa năng (Indoor Arena 15.000–20.000 chỗ và Stadium có mái che) đạt chuẩn âm học quốc tế tại Hà Nội, TP.HCM và Đà Nẵng, kết nối trực tiếp với nhà ga các tuyến Metro đô thị vận hành tăng cường đêm sự&nbsp;kiện.
              </p>
            </div>

            <div className="pillar-item">
              <h4>
                3. Lấy “concert nội sinh” làm thao trường chuẩn hóa chuỗi cung ứng, xây dựng IP bản địa bền vững &amp; minh bạch hóa dữ&nbsp;liệu
              </h4>
              <p>
                Khắc phục sự phụ thuộc vào thiết bị nhập khẩu và tình trạng thiếu IP dài hạn thông qua chiến lược “Bản địa hóa đẳng cấp toàn cầu” (<em>Glocalization</em>). Sự bùng nổ của các concert Việt hiện tại chính là bước đệm thực tiễn để đội ngũ đạo diễn, kỹ thuật viên âm thanh – ánh sáng, các liên doanh kho thiết bị chuẩn <em>Technical Rider</em>, 13 nền tảng bán vé trực tuyến (như Ticketbox hay Eventista/1Zone hỗ trợ hơn 200 phương thức thanh toán tại 145 quốc gia) và lực lượng quản trị đám đông rèn luyện tay nghề quốc tế, đồng thời áp dụng bộ tiêu chí “Âm nhạc xanh” giảm rác thải sau đêm diễn. Song hành với đó, sự ra mắt chính thức của <strong>IFPI Official Vietnam Chart</strong>, <strong>Billboard Vietnam</strong> cùng <strong>Nền tảng Bản đồ số Văn hóa Việt Nam</strong> (công bố tháng 11/2026) sẽ là mảnh ghép quyết định để minh bạch hóa dữ liệu doanh thu vé và tỷ lệ lấp đầy trước các hãng giải trí toàn&nbsp;cầu.
              </p>
            </div>
          </div>
        </div>

        {/* Ma trận đối chiếu trực tiếp 5 điểm nghẽn -> 5 lời giải */}
        <div className="wide-viz-column">
          <BottleneckSolutionMatrix />
        </div>

        {/* [VỊ TRÍ 12] QUOTE CARDS – GÓC NHÌN CHUYÊN GIA & NHÀ QUẢN LÝ */}
        <div className="wide-viz-column">
          <ExpertQuotesCarousel />
        </div>

        {/* [VỊ TRÍ 13] BOX TƯƠNG TÁC ĐỘC GIẢ (INTERACTIVE POLL) */}
        <div className="prose-column">
          <InteractiveReaderPoll />

          {/* Đoạn kết bài báo */}
          <div className="closing-manifesto-box">
            <p>
              Khi những “cơn sốt” bán vé được nâng đỡ bởi một hạ tầng đạt chuẩn, một hệ thống dữ liệu minh bạch và những thương hiệu lễ hội (IP) mang đậm bản sắc Việt, các đêm hội âm nhạc sẽ không còn là những pháo hoa rực sáng rồi tắt trong đêm. Đó sẽ là lúc công nghiệp biểu diễn Việt&nbsp;Nam thực sự cất cánh — vừa đủ sức giữ chân khán giả nội địa, vừa tự tin đón những chuyến lưu diễn lớn nhất hành tinh, đồng thời đưa thanh âm Việt&nbsp;Nam vươn xa trên bản đồ quyền lực mềm thế&nbsp;giới.
            </p>
          </div>
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
            <h3>BẢN ĐỒ CONCERT VIỆT NAM: SỨC BẬT NỘI SINH</h3>
            <p>
              Tác phẩm Báo chí Dữ liệu Đa phương tiện (Interactive Data Journalism &amp; Scrollytelling) • Phân tích toàn cảnh thị trường biểu diễn Việt Nam giai đoạn 2024–2026 và tầm nhìn chiến lược công nghiệp văn hóa 2030.
            </p>
            <p className="footer-footage-credit">{ARTICLE_META.footageCredits}</p>
          </div>
          <div className="footer-col-meta">
            <div>
              <strong>Dữ liệu &amp; Tài liệu tham chiếu:</strong> Báo cáo Tổng quan ngành công nghiệp âm nhạc Việt Nam 2025–2026 (ĐH RMIT Việt Nam), Nghị quyết 80-NQ/TW, Sở VH&amp;TT TP.HCM, Bộ VHTTDL, Statista, Báo Nhân Dân, Tuổi Trẻ, Đại biểu Nhân dân, VietnamPlus, Znews.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
