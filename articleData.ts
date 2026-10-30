/**
 * DỮ LIỆU BÁO CHÍ DỮ LIỆU ĐA PHƯƠNG TIỆN (DATA JOURNALISM)
 * CHỦ ĐỀ: TRI THỨC ĐẠI HỌC CẦN THƠ: TỪ NGHIÊN CỨU ĐẾN SẢN XUẤT THỰC TIỄN
 * -------------------------------------------------------------
 * Nguồn tư liệu: 
 * - Ấn phẩm kỷ niệm 60 năm "Đại học vì đồng bằng: Kiến tạo tri thức - Tiếp bước tiên phong"
 * - Trang thông tin Trường Nông nghiệp & Trường Thủy sản - Đại học Cần Thơ (caf.ctu.edu.vn, ctu.edu.vn)
 * - Báo Cần Thơ Online, Báo Đồng Tháp, Báo Lao Động, VietnamPlus, Báo Nông nghiệp và Môi trường
 * - Bằng độc quyền GPHI số 4743 & 4797; Bằng bảo hộ giống cây trồng Nông Dân 1, 2, 20, 26
 */

export interface KeyMetric {
  id: string;
  value: string;
  unit: string;
  label: string;
  desc: string;
  badge: string;
  color: "emerald" | "amber" | "blue" | "teal";
}

export interface TimelineMilestone {
  id: string;
  year: string;
  period: string;
  sector: "agriculture" | "fisheries" | "both";
  sectorName: string;
  title: string;
  subtitle: string;
  description: string;
  metricBadge: string;
  metricValue: string;
  source: string;
}

export interface PhotoStoryStep {
  step: number;
  title: string;
  stageName: string;
  context: string;
  description: string;
  keyDetails: string[];
  caption: string;
  imageAlt: string;
  badge: string;
}

export interface RiceYieldData {
  variety: string;
  season: string;
  seasonKey: "dong_xuan" | "he_thu";
  minYield: number; // tấn/ha
  maxYield: number; // tấn/ha
  avgYield: number;
}

export interface RiceComparisonRow {
  criteria: string;
  nongDan1: string;
  nongDan2: string;
  note?: string;
}

export interface BoldProjectStat {
  label: string;
  value: number | string;
  unit: string;
  desc: string;
}

export interface VideoScriptStep {
  seconds: string;
  startSec: number;
  endSec: number;
  phase: string;
  title: string;
  sceneDescription: string;
  interviewQuote?: {
    speaker: string;
    role: string;
    content: string;
  };
  audioCue: string;
  graphicsOverlay?: string;
}

export interface TechTransferLocation {
  id: string;
  name: string;
  province: string;
  type: "domestic" | "international";
  targetUser: string;
  technology: string;
  achievements: string;
  metrics: { label: string; val: string }[];
  coordinates: { x: number; y: number; lat?: number; lng?: number };
  badge: string;
  legalDoc: string;
  source: string;
}

export interface InterviewItem {
  id: string;
  group: "farmer" | "student" | "lecturer";
  groupTitle: string;
  interviewee: string;
  role: string;
  avatarDesc: string;
  location: string;
  qa: {
    question: string;
    answer: string;
  }[];
}

export interface ArticleData {
  meta: {
    category: string;
    subCategory: string;
    title: string;
    subtitle: string;
    author: string;
    graphics: string;
    sources: string;
    publishedDate: string;
    readTime: string;
  };
  keyMetrics: KeyMetric[];
  timeline: {
    intro: string;
    milestones: TimelineMilestone[];
  };
  riceResearch: {
    title: string;
    intro: string;
    boldStats: BoldProjectStat[];
    genTraits: { trait: string; count: number; desc: string }[];
    yieldData: RiceYieldData[];
    comparisonTable: RiceComparisonRow[];
    photoStory: PhotoStoryStep[];
  };
  aquacultureResearch: {
    title: string;
    intro: string;
    pangasiusComparison: {
      aspect: string;
      commercialCatfish: string;
      bongLauCatfish: string;
    }[];
    videoSimulation: {
      duration: string;
      totalSeconds: number;
      steps: VideoScriptStep[];
      lifecycleSteps: { step: string; name: string; desc: string }[];
    };
  };
  internationalImpact: {
    projectsCount: number;
    fundingTotal: string;
    qsRank: string;
    qsRankEra: string;
    strategicPrograms: {
      partner: string;
      programName: string;
      years: string;
      scope: string;
      impact: string;
    }[];
  };
  socioEconomicImpact: {
    intellectualPropertyCount: number;
    employmentRate: string;
    keyThemes: {
      id: string;
      title: string;
      content: string;
      proof: string;
    }[];
  };
  technologyMap: {
    domesticSpots: TechTransferLocation[];
    internationalSpots: TechTransferLocation[];
  };
  interviews: InterviewItem[];
}

export const ARTICLE_DATA: ArticleData = {
  // 1. THÔNG TIN CHUNG BÀI BÁO
  meta: {
    category: "BÁO CHÍ DỮ LIỆU ĐA PHƯƠNG TIỆN • DATA JOURNALISM",
    subCategory: "KHOA HỌC VÀ ĐỜI SỐNG VÙNG ĐỒNG BẰNG SÔNG CỬU LONG",
    title: "TRI THỨC ĐẠI HỌC CẦN THƠ: TỪ NGHIÊN CỨU ĐẾN SẢN XUẤT THỰC TIỄN",
    subtitle: "Hơn 30 năm qua, tri thức ngành Nông - Thủy sản Đại học Cần Thơ luôn được kiểm chứng bằng thực tiễn, từng bước mở rộng theo hướng ứng dụng trong đời sống sản xuất. Những đóng góp ấy được nhìn nhận qua các số liệu về giống cây trồng, quy trình kỹ thuật và hoạt động chuyển giao công nghệ, qua đó phản ánh mối liên hệ giữa nghiên cứu khoa học và nhu cầu phát triển của vùng Đồng bằng sông Cửu Long.",
    author: "Nhóm Phóng sự Dữ liệu & Đồ họa ĐBSCL",
    graphics: "Interactive Visuals, Timeline & Map Storytelling",
    sources: "Ấn phẩm 60 năm ĐH Cần Thơ, Báo Cần Thơ, Báo Đồng Tháp, Báo Lao Động, VietnamPlus, Sở KH&CN các tỉnh ĐBSCL",
    publishedDate: "Tháng 10/2026",
    readTime: "8 phút đọc tương tác",
  },

  // 2. CÁC CHỈ SỐ QUAN TRỌNG (KEY TAKEAWAY METRICS)
  keyMetrics: [
    {
      id: "rice_seeds",
      value: "18",
      unit: "tấn giống",
      label: "Lúa kháng rầy đầu tiên (1991)",
      desc: "Cung cấp cho vụ Hè - Thu toàn vùng, giải cứu mùa màng và an ninh lương thực",
      badge: "Mốc lịch sử",
      color: "amber",
    },
    {
      id: "catfish_milestone",
      value: "350.000",
      unit: "cá giống",
      label: "Cá tra nhân tạo AGIFISH (1996)",
      desc: "Giải quyết đứt gãy giống tự nhiên, đặt nền móng ngành xuất khẩu thủy sản tỷ USD",
      badge: "Đột phá xuất khẩu",
      color: "blue",
    },
    {
      id: "oda_funding",
      value: "105,9",
      unit: "triệu USD",
      label: "Dự án ODA Nhật Bản (2015-2022)",
      desc: "Kiến thiết Tòa nhà ATL & RLC phục vụ R&D Nông - Lâm - Thủy sản chuyên sâu",
      badge: "Nguồn lực quốc tế",
      color: "teal",
    },
    {
      id: "ip_patents",
      value: "28",
      unit: "văn bằng",
      label: "Độc quyền sở hữu công nghiệp",
      desc: "Cùng 2 giống lúa Nông Dân 1 & 2 được cấp quyết định lưu hành 20 năm tại ĐBSCL",
      badge: "Tài sản trí tuệ",
      color: "emerald",
    },
  ],

  // 3. PHẦN 1: DUAL-TRACK TIMELINE TƯƠNG TÁC (NÔNG NGHIỆP & THỦY SẢN)
  timeline: {
    intro: "Từ cơ sở đào tạo ban đầu của vùng đất Chín Rồng, Đại học Cần Thơ đã phát triển song hành hai trụ cột Nông nghiệp và Thủy sản, biến những thí nghiệm trong phòng nghiên cứu thành sản lượng hàng triệu tấn trên đồng ruộng và dòng sông.",
    milestones: [
      {
        id: "agri-1966",
        year: "1966",
        period: "Giai đoạn kiến tạo",
        sector: "agriculture",
        sectorName: "Nông nghiệp",
        title: "Trường Cao đẳng Nông nghiệp hình thành",
        subtitle: "Viện Đại học Cần Thơ đặt nền móng cho đào tạo nguồn nhân lực nông nghiệp ĐBSCL",
        description: "Khi Viện Đại học Cần Thơ được thành lập năm 1966, Trường Cao đẳng Nông nghiệp ra đời, xác định nông nghiệp là lĩnh vực gắn liền máu thịt với quá trình phát triển của nhà trường giữa trung tâm đồng bằng.",
        metricBadge: "Khởi đầu",
        metricValue: "1966",
        source: "Ấn phẩm 60 năm ĐHCT (Trang 42)",
      },
      {
        id: "fish-1976",
        year: "1976 - 1978",
        period: "Giai đoạn kiến tạo",
        sector: "fisheries",
        sectorName: "Thủy sản",
        title: "Hình thành bộ phận Thủy sản & Thành lập Khoa Thủy sản",
        subtitle: "Tách từ Khoa Nông nghiệp thành chuyên khoa thủy sản đầu tiên của miền Nam",
        description: "Năm 1976, bộ phận chuyên môn Thủy sản được hình thành trong Khoa Nông nghiệp. Trên cơ sở đó, Khoa Thủy sản chính thức thành lập năm 1978 để tập trung giải quyết bài toán khai thác và nuôi trồng thủy sản vùng sông nước.",
        metricBadge: "Tổ chức",
        metricValue: "1978",
        source: "Trang thông tin Trường Thủy sản (caf.ctu.edu.vn)",
      },
      {
        id: "agri-1991",
        year: "1991",
        period: "Đột phá sản xuất",
        sector: "agriculture",
        sectorName: "Nông nghiệp",
        title: "Cung ứng 18 tấn giống lúa kháng rầy vụ Hè - Thu",
        subtitle: "Điểm sáng phục vụ cộng đồng giải quyết nạn dịch rầy nâu và an ninh lương thực",
        description: "Tháng 5/1991, Trường Đại học Cần Thơ trực tiếp cung ứng 18 tấn giống lúa kháng rầy nâu cho bà con nông dân các địa phương ĐBSCL sản xuất vụ Hè - Thu. Đây là một trong những điểm sáng về phục vụ cộng đồng của Trường, góp phần giải quyết vấn đề an ninh lương thực của quốc gia.",
        metricBadge: "Sản xuất",
        metricValue: "18 Tấn lúa giống",
        source: "Ấn phẩm kỷ niệm 60 năm ĐH Cần Thơ",
      },
      {
        id: "fish-1995",
        year: "1995 - 2007",
        period: "Đột phá sản xuất",
        sector: "fisheries",
        sectorName: "Thủy sản",
        title: "Dự án Catfish Asia: Làm chủ công nghệ giống cá basa, cá tra",
        subtitle: "Hợp tác Cộng đồng châu Âu đưa ĐBSCL đứng đầu cả nước về xuất khẩu cá tra",
        description: "Giai đoạn 1990-2007, Trường đẩy mạnh nghiên cứu và đạt nhiều thành quả. Đặc biệt là quy trình sản xuất giống cá tra được triển khai từ đầu năm 1995 trong Dự án cá da trơn châu Á - Catfish Asia do Cộng đồng châu Âu tài trợ, góp phần đưa ĐBSCL đứng đầu cả nước về sản lượng xuất khẩu cá tra cho đến ngày hôm nay.",
        metricBadge: "Thương mại",
        metricValue: "Hàng tỷ USD xuất khẩu",
        source: "Catfish Asia Project & Báo Lao Động",
      },
      {
        id: "both-2022",
        year: "2022 - 2025",
        period: "Kiện toàn thể chế",
        sector: "both",
        sectorName: "Nông - Thủy sản",
        title: "Thành lập Trường Nông nghiệp & Trường Thủy sản",
        subtitle: "Nâng cấp các khoa chuyên môn thành trường trực thuộc theo mô hình đại học đa ngành",
        description: "Tháng 12/2022, Khoa Nông nghiệp và Khoa Thủy sản được nâng cấp thành lập Trường Nông nghiệp và Trường Thủy sản (Trường Thủy sản hoàn thiện kiện toàn tháng 7/2025). Bước chuyển thể chế mở đường cho sự tập trung nguồn lực nghiên cứu khoa học chuyên sâu, tiếp nhận hạ tầng ODA hiện đại.",
        metricBadge: "Thể chế",
        metricValue: "2 Trường chuyên môn",
        source: "Nghị quyết Hội đồng Đại học Cần Thơ",
      },
      {
        id: "both-2026",
        year: "2026",
        period: "Kỷ nguyên chất lượng cao",
        sector: "both",
        sectorName: "Nông - Thủy sản",
        title: "Lưu hành lúa Nông Dân 2 & Nhân tạo giống cá bông lau",
        subtitle: "Đồng bộ giống lúa thơm chất lượng cao và làm chủ sinh sản loài cá da trơn nước lợ quý hiếm",
        description: "Đến năm 2026, quá trình nghiên cứu ghi nhận những dấu mốc mới với giống lúa Nông Dân 2 được công nhận lưu hành tại ĐBSCL. Bên cạnh đó, ĐH Cần Thơ ghi nhận thành công trong nuôi cá bố mẹ và sinh sản nhân tạo cá bông lau (Pangasius krempfi) sau hơn 2 năm nghiên cứu dự án DIVERSAQUA.",
        metricBadge: "Dấu mốc mới",
        metricValue: "Nông Dân 2 & Cá Bông Lau",
        source: "CTU News 2026 & Báo Cần Thơ",
      },
    ],
  },

  // 4. PHẦN 2: HÀNH TRÌNH NGHIÊN CỨU LÚA & THỦY SẢN ĐI VÀO SẢN XUẤT
  riceResearch: {
    title: "Giống lúa: Từ chống chịu sâu bệnh đến phân hóa theo chất lượng và thị trường",
    intro: "Từ cột mốc 18 tấn lúa kháng rầy năm 1991 đến dòng MTL và hai giống lúa mới Nông Dân 1, Nông Dân 2 năm 2026, nghiên cứu chọn giống của ĐH Cần Thơ đã chuyển từ mục tiêu chống chịu sâu bệnh sang phân hóa chất lượng và thị trường thương mại.",
    boldStats: [
      { label: "Nông dân được tập huấn chọn giống", value: 171, unit: "người", desc: "Trực tiếp tham gia đánh giá ngoài ruộng đồng" },
      { label: "Cán bộ địa phương đào tạo chuyên môn", value: 27, unit: "cán bộ", desc: "Chuyển giao phương pháp khảo nghiệm chuẩn hóa" },
      { label: "Lượt nông dân dự hội thảo đầu bờ", value: 243, unit: "lượt", desc: "Khảo sát ý kiến tại các điểm trình diễn giống" },
      { label: "Mẫu giống lúa mùa truyền thống đánh giá", value: 252, unit: "giống", desc: "Khai thác nguồn gen bản địa thích ứng ĐBSCL" },
    ],
    genTraits: [
      { trait: "Chịu mặn", count: 15, desc: "Thích nghi vùng ven biển xâm nhập mặn ngày càng sâu" },
      { trait: "Kháng bệnh đạo ôn", count: 16, desc: "Giảm phụ thuộc vào thuốc bảo vệ thực vật" },
      { trait: "Chất lượng triển vọng", count: 10, desc: "Hạt dài, cơm mềm, mùi thơm nhẹ đặc trưng" },
      { trait: "Kháng bệnh bạc lá", count: 3, desc: "Chống chịu vi khuẩn vụ mưa bão Hè - Thu" },
    ],
    yieldData: [
      { variety: "Nông Dân 1", season: "Đông Xuân", seasonKey: "dong_xuan", minYield: 6.29, maxYield: 7.44, avgYield: 6.87 },
      { variety: "Nông Dân 1", season: "Hè Thu", seasonKey: "he_thu", minYield: 4.90, maxYield: 6.70, avgYield: 5.80 },
      { variety: "Nông Dân 2", season: "Đông Xuân", seasonKey: "dong_xuan", minYield: 6.04, maxYield: 6.92, avgYield: 6.48 },
      { variety: "Nông Dân 2", season: "Hè Thu", seasonKey: "he_thu", minYield: 4.75, maxYield: 6.10, avgYield: 5.43 },
    ],
    comparisonTable: [
      {
        criteria: "Thời gian sinh trưởng vụ Đông Xuân",
        nongDan1: "100 – 105 ngày",
        nongDan2: "95 – 100 ngày (ngắn ngày hơn)",
      },
      {
        criteria: "Thời gian sinh trưởng vụ Hè Thu",
        nongDan1: "97 – 102 ngày",
        nongDan2: "100 – 105 ngày",
      },
      {
        criteria: "Năng suất khảo nghiệm Đông Xuân",
        nongDan1: "6,29 – 7,44 tấn/ha",
        nongDan2: "6,04 – 6,92 tấn/ha (tương đương 60,4–69,2 tạ/ha)",
      },
      {
        criteria: "Hàm lượng Amylose",
        nongDan1: "26,51 – 27,3% (Khá cao)",
        nongDan2: "15,2 – 16,4% (Thấp hơn, dẻo thơm)",
      },
      {
        criteria: "Đặc tính cơm mô tả",
        nongDan1: "Độ bền gel cứng, hạt gạo có tỷ lệ bạc bụng cao",
        nongDan2: "Cơm mềm, xốp dẻo, có mùi thơm nhẹ, chất lượng ăn được đánh giá tốt",
      },
      {
        criteria: "Định hướng phân khúc thị trường",
        nongDan1: "Nguyên liệu chế biến bún, bánh, bột thay vì gạo ăn dẻo",
        nongDan2: "Phân khúc gạo chất lượng cao dùng trong bữa ăn gia đình và thương mại",
      },
      {
        criteria: "Tình trạng pháp lý lưu hành",
        nongDan1: "Được cấp Bằng bảo hộ giống cây trồng",
        nongDan2: "Được công nhận lưu hành 20 năm tại ĐBSCL (từ 17/7/2026)",
      },
    ],
    photoStory: [
      {
        step: 1,
        title: "Các mẫu giống lúa được nghiên cứu",
        stageName: "Khởi tạo & Lưu giữ",
        context: "Phòng thí nghiệm Bộ môn Di truyền & Chọn giống - Nơi có mẫu MTL và Nông Dân 1–2",
        description: "Các mẫu hạt giống được sắp đặt cẩn thận trong khay đĩa có dán nhãn tên giống cụ thể. Đây là hình ảnh mở đầu dẫn vào toàn bộ hành trình chọn tạo giống lúa ứng dụng của trường.",
        keyDetails: [
          "Lưu trữ đối chiếu hạt giống lúa thuần và dòng lai MTL, Nông Dân",
          "Phân tích độ thuần di truyền và tỷ lệ nảy mầm",
          "Góc chụp cận từ trên xuống thấy rõ nhãn khoa học của từng mẫu hạt",
        ],
        caption: "Ảnh 1. Các mẫu giống lúa được nghiên cứu: Điểm xuất phát của các dòng giống mang bản sắc ĐBSCL.",
        imageAlt: "Phòng thí nghiệm lưu giữ các mẫu giống lúa ĐH Cần Thơ",
        badge: "Phòng thí nghiệm",
      },
      {
        step: 2,
        title: "Ruộng khảo nghiệm giống lúa nghiêm ngặt",
        stageName: "Khảo nghiệm VCU & DUS",
        context: "Khu ruộng thực nghiệm của trường hoặc điểm khảo nghiệm có hồ sơ xác nhận tại ĐBSCL",
        description: "Bố trí các ô khảo nghiệm đối chứng khoa học với cọc biển cắm tên giống. Hình ảnh thể hiện rõ đây là khu vực nghiên cứu khảo nghiệm, không mặc nhiên coi là ruộng sản xuất đại trà.",
        keyDetails: [
          "Khung hình rộng toàn cảnh các ô khảo nghiệm vuông vức",
          "Góc chụp thấp ngang tán lúa thể hiện độ rậm rạp và khả năng chống ngã đổ",
          "Hồ sơ khảo nghiệm xác nhận độ thuần và năng suất thực tế",
        ],
        caption: "Ảnh 2. Ruộng khảo nghiệm giống lúa: Bố trí ô thí nghiệm nghiêm ngặt có biển cắm tên giống.",
        imageAlt: "Khu ruộng khảo nghiệm giống lúa chia ô với biển cắm tên giống",
        badge: "Ruộng khảo nghiệm",
      },
      {
        step: 3,
        title: "Nhà nghiên cứu kiểm tra đặc tính cây lúa",
        stageName: "Theo dõi hình thái",
        context: "Ngoài ruộng khảo nghiệm vào thời điểm cây lúa có bông",
        description: "Bàn tay nhà nghiên cứu nâng niu bông lúa, kiểm tra kỹ lưỡng độ thoát cổ bông, số hạt chắc trên dé và tình trạng sâu bệnh. Nhịp kể chuyện kết hợp khung người nghiên cứu và khung cận chi tiết.",
        keyDetails: [
          "Chụp cận tay kiểm tra bông lúa, thân cây và tỷ lệ hạt chắc",
          "Toàn cảnh nhà nghiên cứu và kỹ sư đối chiếu thông số thực địa",
          "Ghi chép số liệu sinh trưởng từng tuần của hai giống Nông Dân",
        ],
        caption: "Ảnh 3. Nhà nghiên cứu kiểm tra đặc tính cây lúa: Tỉ mỉ theo dõi từng giai đoạn trổ bông và tích lũy tinh bột.",
        imageAlt: "Nhà nghiên cứu kiểm tra từng bông lúa trên đồng thực nghiệm",
        badge: "Đánh giá hình thái",
      },
      {
        step: 4,
        title: "Đo đạc và đánh giá chất lượng hạt gạo sau thu hoạch",
        stageName: "Phân tích phẩm chất",
        context: "Phòng thí nghiệm kiểm tra chất lượng gạo - Trường Nông nghiệp ĐH Cần Thơ",
        description: "Hạt lúa sau thu hoạch được đưa vào máy bóc vỏ, máy đo quang phổ và cân phân tích. Thiết bị đo đạc xuất hiện rõ ràng để xác định hàm lượng amylose, chiều dài hạt và tỷ lệ bạc bụng.",
        keyDetails: [
          "Thao tác đo chiều dài, cân mẫu vi lượng và phân loại hạt",
          "Đo hàm lượng Amylose: Nông Dân 1 (26,51–27,3%) vs Nông Dân 2 (15,2–16,4%)",
          "Xác định độ bền gel cứng và mùi thơm nhẹ của cơm",
        ],
        caption: "Ảnh 4. Đo đạc và đánh giá chất lượng hạt gạo: Thiết bị hiện đại chuẩn hóa dữ liệu dinh dưỡng và thương phẩm.",
        imageAlt: "Thiết bị đo đạc chỉ số và phân tích hạt gạo trong lab",
        badge: "Phân tích phẩm chất",
      },
      {
        step: 5,
        title: "Đánh giá giống cùng nông dân tại hội thảo đầu bờ",
        stageName: "Cộng đồng đánh giá",
        context: "Hội thảo đầu bờ đánh giá giống lúa thực tế tại xã Tân Hương, tỉnh Đồng Tháp",
        description: "Nhà nghiên cứu trực tiếp giải thích đặc điểm giống, lắng nghe nông dân quan sát cây lúa ngoài đồng và cùng thảo luận. Ghi nhận đúng thời gian và địa điểm sự kiện chuyển giao thực chất.",
        keyDetails: [
          "Thu hút 243 lượt nông dân tham dự đánh giá và 27 cán bộ địa phương",
          "Nông dân nếm thử cơm và bình chọn giống phù hợp thổ nhưỡng",
          "Gắn kết chặt chẽ nhà khoa học và người sản xuất trực tiếp",
        ],
        caption: "Ảnh 5. Đánh giá giống cùng nông dân: Hội thảo đầu bờ tại Tân Hương (Đồng Tháp) thẩm định giá trị canh tác.",
        imageAlt: "Hội thảo đầu bờ nông dân trao đổi cùng giảng viên tại ruộng lúa",
        badge: "Đánh giá cộng đồng",
      },
    ],
  },

  // 5. THỦY SẢN: CÁ DA TRƠN & CÁ BÔNG LAU
  aquacultureResearch: {
    title: "Cá da trơn: Từ sản xuất giống cá tra/basa đến bước đầu chủ động nguồn giống cá bông lau",
    intro: "Nếu nghiên cứu lúa phản ánh quá trình chọn tạo theo nhu cầu canh tác thì lĩnh vực thủy sản ĐH Cần Thơ lại giải quyết bài toán làm chủ quy trình sinh sản nhân tạo để chủ động nguồn giống, đưa ĐBSCL từ phụ thuộc tự nhiên thành trung tâm xuất khẩu thủy sản hàng đầu.",
    pangasiusComparison: [
      {
        aspect: "Đối tượng nghiên cứu",
        commercialCatfish: "Cá basa (1995) & Cá tra (1999) đại trà",
        bongLauCatfish: "Cá bông lau (Pangasius krempfi - cá da trơn nước lợ)",
      },
      {
        aspect: "Bài toán nghiên cứu",
        commercialCatfish: "Quy trình nhân giống cho loài nuôi đã được thương mại hóa rộng rãi",
        bongLauCatfish: "Chủ động nguồn giống loài cá kinh tế cao lâu nay phụ thuộc khai thác tự nhiên",
      },
      {
        aspect: "Hệ thống nuôi thực nghiệm",
        commercialCatfish: "Ao đầm nước ngọt lưu vực sông Tiền - sông Hậu",
        bongLauCatfish: "Hệ thống bể tuần hoàn RAS kiểm soát độ mặn mô phỏng tập tính di cư",
      },
      {
        aspect: "Mốc công bố đột phá",
        commercialCatfish: "Hợp tác AGIFISH (1996) & Dự án Catfish Asia (1995–2007)",
        bongLauCatfish: "Năm 2026 (sau hơn 2 năm nghiên cứu dự án quốc tế DIVERSAQUA)",
      },
      {
        aspect: "Định hướng tiếp theo",
        commercialCatfish: "Chuẩn hóa tiêu chuẩn xuất khẩu, an toàn dịch bệnh toàn cầu",
        bongLauCatfish: "Tạo nguồn giống trong điều kiện nghiên cứu là bước đầu, cần đánh giá đại trà",
      },
    ],
    videoSimulation: {
      duration: "85 giây",
      totalSeconds: 85,
      steps: [
        {
          seconds: "0 – 8s",
          startSec: 0,
          endSec: 8,
          phase: "Mở đầu thực địa",
          title: "Mở video bằng hình ảnh thực địa tại khu nghiên cứu",
          sceneDescription: "Cận cảnh cá bông lau và cá con bơi lội trong bể nuôi tuần hoàn. Mặt nước gợn sóng dưới dòng nước hồi lưu liên tục. Toàn cảnh khu nuôi sạch sẽ, hiện đại của Trường Thủy sản ĐH Cần Thơ.",
          audioCue: "Thu tiếng nước chảy róc rách thật từ hệ thống tuần hoàn để tạo không khí phòng nghiên cứu chuyên nghiệp.",
          graphicsOverlay: "Trường Thủy sản - Đại học Cần Thơ • Nghiên cứu sinh sản nhân tạo Cá Bông Lau",
        },
        {
          seconds: "8 – 25s",
          startSec: 8,
          endSec: 25,
          phase: "Phỏng vấn nghiên cứu sinh",
          title: "Phỏng vấn nghiên cứu sinh và học viên tham gia dự án",
          sceneDescription: "Nhân vật đang làm việc thực tế tại khu nuôi: kiểm tra dòng nước bể, ghi chép sổ theo dõi nhiệt độ, độ mặn và kiểm tra kính hiển vi. Phỏng vấn nêu rõ công việc cụ thể.",
          interviewQuote: {
            speaker: "NCS. Hoàng Văn Hưng",
            role: "Nhóm nghiên cứu Dự án DIVERSAQUA, ĐH Cần Thơ",
            content: "Nhiệm vụ trực tiếp của chúng tôi là chăm sóc đàn cá bố mẹ trong bể tuần hoàn, theo dõi chỉ số độ mặn và kích thích sinh sản đúng chu kỳ sinh học.",
          },
          audioCue: "Giọng nói nhiệt huyết của nhà nghiên cứu trẻ bên tiếng vận hành của hệ thống máy lọc tuần hoàn.",
          graphicsOverlay: "Theo dõi 24/7 quy trình thuần dưỡng cá bố mẹ trong môi trường nước lợ nhân tạo",
        },
        {
          seconds: "25 – 45s",
          startSec: 25,
          endSec: 45,
          phase: "Minh họa quy trình nghiên cứu",
          title: "Minh họa từng bước quy trình kỹ thuật sinh sản",
          sceneDescription: "Quay cận cảnh dụng cụ lấy mẫu, kiểm tra trứng cá dưới kính soi, đo các thông số môi trường nước và theo dõi cá con mới nở trong bể ấp weiss.",
          audioCue: "Âm thanh máy đo phân tích chỉ số, nhạc nền kịch tính khoa học.",
          graphicsOverlay: "Đồ họa chen giữa: Cá giống → Cá bố mẹ thành thục → Kích thích sinh sản → Cá bột → Cá hương/Cá giống",
        },
        {
          seconds: "45 – 68s",
          startSec: 45,
          endSec: 68,
          phase: "Phỏng vấn giảng viên",
          title: "Phỏng vấn giảng viên hoặc trưởng nhóm nghiên cứu",
          sceneDescription: "Đặt câu hỏi về ý nghĩa của kết quả, các dữ liệu thực nghiệm hiện có và những vấn đề sinh học cần giải quyết trước khi mở rộng nuôi thương phẩm. Chèn cảnh cận kiểm tra mẫu và đối chiếu số liệu.",
          interviewQuote: {
            speaker: "PGS.TS. Trần Ngọc Hải",
            role: "Trưởng nhóm nghiên cứu cá da trơn nước lợ, ĐH Cần Thơ",
            content: "Thành công sinh sản nhân tạo cá bông lau mở ra triển vọng rất lớn để đa dạng hóa đối tượng nuôi kinh tế cao cho ĐBSCL, thoát khỏi sự phụ thuộc vào khai thác tự nhiên.",
          },
          audioCue: "Giọng nói điềm tĩnh, phân tích sâu sắc của nhà khoa học đầu ngành.",
          graphicsOverlay: "Bước đột phá bảo tồn và phát triển loài cá bản địa đặc hữu sông Mê Kông",
        },
        {
          seconds: "68 – 85s",
          startSec: 68,
          endSec: 85,
          phase: "Kết luận và bước tiếp theo",
          title: "Kết thúc video bằng kết quả và định hướng tương lai",
          sceneDescription: "Cảnh đàn cá con tung tăng bơi lội, người nghiên cứu chăm chú quan sát bể và ghi chép dữ liệu nghiệm thu cuối cùng. Khung hình kết thúc cô đọng.",
          audioCue: "Nhạc nền ngân vang, tiếng sủi bọt khí trong lành của bể nuôi.",
          graphicsOverlay: "“Tạo được nguồn cá giống trong điều kiện nghiên cứu là bước đầu; khả năng sản xuất đại trà cần được đánh giá thêm.”",
        },
      ],
      lifecycleSteps: [
        { step: "01", name: "Cá giống tuyển chọn", desc: "Thuần dưỡng cá trong hệ thống bể tuần hoàn nước lợ" },
        { step: "02", name: "Nuôi vỗ cá bố mẹ thành thục", desc: "Chế độ dinh dưỡng và thông số nước mô phỏng mùa di cư" },
        { step: "03", name: "Kích thích sinh sản", desc: "Kích thích rụng trứng và thụ tinh nhân tạo trong điều kiện kiểm soát" },
        { step: "04", name: "Ương cá bột", desc: "Ấp nở cá bột trong phễu ấp và quản lý thức ăn ban đầu" },
        { step: "05", name: "Ương cá hương & cá giống", desc: "Nuôi dưỡng đến kích cỡ cá giống thương phẩm giao cho cơ sở nuôi" },
      ],
    },
  },

  // 6. PHẦN 3: NĂNG LỰC HỢP TÁC QUỐC TẾ
  internationalImpact: {
    projectsCount: 203,
    fundingTotal: "351 tỉ đồng",
    qsRank: "Top 251 – 300",
    qsRankEra: "Năm 2020 và duy trì nhóm 351–400 giai đoạn 2020–2025",
    strategicPrograms: [
      {
        partner: "Nhật Bản (Dự án ODA JICA)",
        programName: "Dự án Nâng cấp Trường Đại học Cần Thơ sử dụng vốn ODA Nhật Bản (2015–2022)",
        years: "2015 – 2022",
        scope: "Tổng kinh phí 105,9 triệu USD đầu tư hạ tầng hiện đại, nổi bật là Tòa nhà ATL và RLC",
        impact: "Phục vụ nâng cao năng lực nghiên cứu đa ngành, nòng cốt là Nông – Lâm – Thủy sản và Môi trường",
      },
      {
        partner: "Hà Lan (Chính phủ Hà Lan)",
        programName: "Dự án MHO và Chương trình cải tạo đất phèn VH10",
        years: "1996 – 2004",
        scope: "Nghiên cứu thổ nhưỡng, quy trình rửa phèn và phát triển cơ sở vật chất phòng lab",
        impact: "Cung cấp giải pháp rửa phèn khai phá 700.000 ha lúa phèn vùng Đồng Tháp Mười",
      },
      {
        partner: "Vương quốc Bỉ (VLIR - UOS)",
        programName: "Chương trình VLIR hợp tác với các trường đại học Vương quốc Bỉ",
        years: "1998 – 2008",
        scope: "Đào tạo Thạc sĩ quốc tế, công nghệ bảo quản sau thu hoạch và vi sinh học",
        impact: "Xây dựng đội ngũ cán bộ khoa học trình độ cao phục vụ toàn vùng ĐBSCL",
      },
      {
        partner: "Cộng đồng Châu Âu (EU - EC)",
        programName: "Dự án cá da trơn châu Á - Catfish Asia",
        years: "1995 – 2007",
        scope: "Liên kết 6 tổ chức nghiên cứu gồm Pháp, Bỉ, Indonesia và Việt Nam",
        impact: "Giải mã quy trình sản xuất giống cá tra, cá basa đưa ĐBSCL đứng đầu thế giới về xuất khẩu",
      },
      {
        partner: "Crop Trust (Tổ chức Quốc tế)",
        programName: "Dự án BOLD Rice Vietnam (Đa dạng sinh học lúa vì tương lai)",
        years: "2023 – 2027",
        scope: "Đánh giá 252 giống lúa mùa, chọn tạo giống Nông Dân 1 & 2 thích ứng biến đổi khí hậu",
        impact: "Tập huấn chọn giống cho 171 nông dân, 27 cán bộ và cấp bảo hộ giống lúa Nông Dân",
      },
    ],
  },

  // 7. PHẦN 4 & 5: TÁC ĐỘNG KINH TẾ - XÃ HỘI & VỊ THẾ NHÀ TRƯỜNG
  socioEconomicImpact: {
    intellectualPropertyCount: 28,
    employmentRate: "78,26%",
    keyThemes: [
      {
        id: "rice_legal",
        title: "Chủ động nguồn giống và chuẩn hóa pháp lý nông sản",
        content: "Bên cạnh việc đáp ứng yêu cầu an ninh lương thực, sự xuất hiện của các giống lúa dòng Nông Dân trong khuôn khổ Dự án BOLD Rice Vietnam đã giúp người dân chủ động nguồn giống chất lượng cao. Đặc biệt, Nông Dân 1 và Nông Dân 2 đã được Bộ Nông nghiệp cấp quyết định lưu hành 20 năm tính từ ngày 17/7/2026. Bằng bảo hộ giống Nông Dân 1, 2, 20 và 26 đảm bảo năng suất khảo nghiệm 60,4–69,2 tạ/ha và đáp ứng tiêu chuẩn thương mại chính ngạch.",
        proof: "Báo Đồng Tháp & Quyết định công nhận lưu hành giống ĐH Cần Thơ",
      },
      {
        id: "aquaculture_pillar",
        title: "Hỗ trợ phát triển các ngành hàng thủy sản chủ lực",
        content: "Hợp tác giữa ĐH Cần Thơ và AGIFISH An Giang giai đoạn 1990–1996 (với cột mốc sinh sản nhân tạo 1994 và thả nuôi đại trà 350.000 cá giống năm 1996) giải quyết thiếu hụt nguồn giống tự nhiên, tạo cơ sở phát triển ngành cá tra xuất khẩu. Đồng thời, quy trình nuôi Artemia chuyển giao từ 1984–1986 giúp vùng đất nhiễm mặn Vĩnh Châu – Bạc Liêu sản xuất 15–20 tấn trứng khô/năm, doanh thu 3–4 triệu USD/năm và được cấp Chỉ dẫn địa lý tháng 12/2020.",
        proof: "Báo Lao Động, Báo Nông nghiệp và Môi trường, Viettimes & Cục Sở hữu Trí tuệ",
      },
      {
        id: "climate_tech",
        title: "Ứng dụng công nghệ nuôi thích ứng biến đổi khí hậu",
        content: "Giải pháp hữu ích số 4797 về quy trình nuôi cá trê vàng tuần hoàn do PGS.TS Phạm Thanh Liêm và cộng sự nghiên cứu, cùng Giải pháp hữu ích số 4743 về hệ thống nuôi tôm thẻ CTU-RAS do GS.TS Trần Ngọc Hải phát triển đã cung cấp các quy trình giúp kiểm soát dịch bệnh, tiết kiệm nước và tối ưu mật độ nuôi. Thực nghiệm mô hình CTU-RAS tại Cà Mau ghi nhận tỷ lệ sống 75–94%, FCR chỉ 1,09–1,21.",
        proof: "VietnamPlus, Trang tin ĐHCT & Tạp chí Khoa học ĐHCT",
      },
      {
        id: "university_synergy",
        title: "Khẳng định vị thế học thuật và kiện toàn thể chế",
        content: "Nguồn dữ liệu thực nghiệm phong phú từ ĐBSCL giúp nhà trường giữ vững vị trí dẫn đầu tại Việt Nam trong lĩnh vực Nông – Lâm nghiệp (QS Rankings 251-300 năm 2020, 351-400 giai đoạn 2020-2025). Thúc đẩy thành lập Trường Nông nghiệp và Trường Thủy sản, Ngân hàng giống lúa bảo tồn hơn 3.000 mẫu lúa và sở hữu 28 văn bằng độc quyền SHCN tính đến tháng 9/2026, nâng tỷ lệ sinh viên có việc làm đạt 78,26%.",
        proof: "Báo cáo thường niên ĐH Cần Thơ 2026 & QS World University Rankings",
      },
    ],
  },

  // 8. ĐỒ HỌA 4: BẢN ĐỒ CÁC DỰ ÁN VÀ ĐỊA BÀN TIẾP NHẬN CÔNG NGHỆ (2 LỚP DỮ LIỆU)
  technologyMap: {
    domesticSpots: [
      {
        id: "vinhchau_baclieu",
        name: "Vĩnh Châu (Sóc Trăng) & Bạc Liêu",
        province: "Sóc Trăng - Bạc Liêu",
        type: "domestic",
        targetUser: "Nông dân vùng đất nhiễm mặn ven biển & diêm dân",
        technology: "Quy trình nuôi Artemia thu trứng bào xác",
        achievements: "15 – 20 tấn trứng khô/năm; mang về 3 – 4 triệu USD/năm; Chỉ dẫn địa lý cấp 12/2020",
        metrics: [
          { label: "Sản lượng trứng khô", val: "15–20 tấn/năm" },
          { label: "Doanh thu xuất khẩu", val: "3–4 triệu USD/năm" },
          { label: "Chỉ dẫn địa lý", val: "Cấp tháng 12/2020" },
        ],
        coordinates: { x: 520, y: 390, lat: 9.32, lng: 105.98 },
        badge: "Artemia Vĩnh Châu",
        legalDoc: "Chỉ dẫn địa lý Artemia Vĩnh Châu (Cục Sở hữu Trí tuệ)",
        source: "Báo Nông nghiệp và Môi trường & Viettimes",
      },
      {
        id: "angiang",
        name: "An Giang (Hợp tác AGIFISH)",
        province: "An Giang",
        type: "domestic",
        targetUser: "Công ty AGIFISH An Giang và các hộ nông dân nuôi cá bè",
        technology: "Quy trình sinh sản nhân tạo cá basa (1994) và cá tra đại trà (1996)",
        achievements: "350.000 con cá giống đầu tiên (1996); giải quyết thiếu hụt giống tự nhiên, mở đường cho ngành cá tra xuất khẩu tỷ USD",
        metrics: [
          { label: "Cá giống đợt đầu", val: "350.000 con (1996)" },
          { label: "Hợp tác chuyển giao", val: "Giai đoạn 1990–1996" },
          { label: "Quy mô ngành hàng", val: "Xuất khẩu tỷ USD" },
        ],
        coordinates: { x: 320, y: 170, lat: 10.38, lng: 105.43 },
        badge: "Cá tra AGIFISH",
        legalDoc: "Hợp đồng chuyển giao công nghệ ĐHCT - AGIFISH",
        source: "Báo Lao Động & Ấn phẩm kỷ niệm 60 năm ĐHCT",
      },
      {
        id: "camau",
        name: "Cà Mau (Đầm Dơi, Năm Căn)",
        province: "Cà Mau",
        type: "domestic",
        targetUser: "Nông hộ và các trại nuôi thực nghiệm siêu thâm canh",
        technology: "Hệ thống nuôi tôm thẻ CTU-RAS tuần hoàn đa loài",
        achievements: "Tỷ lệ sống đạt 75 – 94%; hệ số FCR đạt 1,09 – 1,21; kiểm soát dịch bệnh và tiết kiệm nước",
        metrics: [
          { label: "Tỷ lệ tôm sống", val: "75 – 94%" },
          { label: "Hệ số thức ăn (FCR)", val: "1,09 – 1,21" },
          { label: "Văn bằng độc quyền", val: "Bằng GPHI số 4743" },
        ],
        coordinates: { x: 260, y: 480, lat: 9.18, lng: 105.15 },
        badge: "Hệ thống CTU-RAS",
        legalDoc: "Bằng độc quyền Giải pháp hữu ích số 4743",
        source: "Tạp chí Khoa học ĐHCT & Trang tin ctu.edu.vn",
      },
      {
        id: "dongthap",
        name: "Đồng Tháp (Xã Tân Hương & HTX)",
        province: "Đồng Tháp",
        type: "domestic",
        targetUser: "Hợp tác xã nông nghiệp & Cánh đồng khảo nghiệm VCU, DUS",
        technology: "Giống lúa Nông Dân 1, 2, 20, 26 (Dự án BOLD Rice Vietnam)",
        achievements: "Năng suất khảo nghiệm Đông Xuân đạt 60,4 – 69,2 tạ/ha; cấp bằng bảo hộ và công nhận lưu hành 20 năm",
        metrics: [
          { label: "Năng suất Đông Xuân", val: "60,4 – 69,2 tạ/ha" },
          { label: "Giống lúa chủ lực", val: "Nông Dân 1 & 2" },
          { label: "Thời hạn lưu hành", val: "20 năm (từ 17/7/2026)" },
        ],
        coordinates: { x: 420, y: 190, lat: 10.45, lng: 105.63 },
        badge: "Lúa Nông Dân BOLD",
        legalDoc: "Bằng bảo hộ giống cây trồng Nông Dân 1, 2, 20, 26",
        source: "Báo Đồng Tháp & Trang tin ĐHCT",
      },
      {
        id: "dongthapmuoi",
        name: "Vùng Đồng Tháp Mười (Long An, Tiền Giang, Đồng Tháp)",
        province: "Long An - Tiền Giang - Đồng Tháp",
        type: "domestic",
        targetUser: "Nông dân vùng đất phèn trũng sâu",
        technology: "Quy trình rửa phèn, cải tạo đất Chương trình VH10 (Hợp tác Hà Lan)",
        achievements: "Khai phá 700.000 ha lúa phèn, biến vùng đất hoang hóa ngập mặn thành vựa lương thực an toàn",
        metrics: [
          { label: "Diện tích khai phá", val: "700.000 ha lúa phèn" },
          { label: "Công nghệ áp dụng", val: "Quy trình rửa phèn VH10" },
          { label: "Đối tác tài trợ", val: "Chính phủ Hà Lan" },
        ],
        coordinates: { x: 550, y: 150, lat: 10.60, lng: 106.10 },
        badge: "Rửa phèn 700.000 ha",
        legalDoc: "Hồ sơ chuyển giao khoa học công nghệ ĐHCT",
        source: "Ấn phẩm kỷ niệm 60 năm ĐHCT",
      },
      {
        id: "cantho_hq",
        name: "Cần Thơ (Trung tâm R&D Đại học Cần Thơ)",
        province: "TP. Cần Thơ",
        type: "domestic",
        targetUser: "Giảng viên, nghiên cứu sinh, kỹ sư và chuyển giao công nghệ",
        technology: "Tòa nhà ATL & RLC (ODA Nhật Bản), Trại thủy sản cá bông lau, Rice Genbank (>3.000 giống)",
        achievements: "Nơi sản sinh 28 văn bằng sở hữu công nghiệp; sinh sản nhân tạo cá bông lau thành công năm 2026",
        metrics: [
          { label: "Ngân hàng Rice Genbank", val: ">3.000 mẫu lúa" },
          { label: "Bằng độc quyền SHCN", val: "28 văn bằng" },
          { label: "Đột phá sinh học", val: "Nhân tạo cá bông lau" },
        ],
        coordinates: { x: 440, y: 290, lat: 10.03, lng: 105.77 },
        badge: "Trung tâm R&D",
        legalDoc: "Văn bằng GPHI số 4797 & Dự án DIVERSAQUA",
        source: "Trang tin chính thức ctu.edu.vn",
      },
    ],
    internationalSpots: [
      {
        id: "japan_jica",
        name: "Nhật Bản (Cơ quan JICA)",
        province: "Nhật Bản",
        type: "international",
        targetUser: "Nâng cấp cơ sở vật chất và tăng cường năng lực nghiên cứu",
        technology: "Dự án Nâng cấp ĐH Cần Thơ sử dụng vốn ODA Nhật Bản (2015–2022)",
        achievements: "Tổng kinh phí 105,9 triệu USD đầu tư hạ tầng kỹ thuật hiện đại, nổi bật là Tòa nhà ATL và RLC",
        metrics: [
          { label: "Tổng nguồn vốn ODA", val: "105,9 triệu USD" },
          { label: "Công trình biểu tượng", val: "Tòa nhà ATL & RLC" },
          { label: "Lĩnh vực ưu tiên", val: "Nông - Thủy sản & MT" },
        ],
        coordinates: { x: 670, y: 110 },
        badge: "ODA Nhật Bản",
        legalDoc: "Hiệp định vay ODA Chính phủ Việt Nam - Nhật Bản",
        source: "Báo cáo hoàn thành Dự án ODA ĐHCT",
      },
      {
        id: "belgium_vlir",
        name: "Vương quốc Bỉ (VLIR - UOS)",
        province: "Vương quốc Bỉ",
        type: "international",
        targetUser: "Đào tạo Thạc sĩ quốc tế và nghiên cứu chuyên sâu",
        technology: "Chương trình hợp tác VLIR-IUC với các trường đại học Bỉ (1998–2008)",
        achievements: "Đào tạo đội ngũ Thạc sĩ quốc tế, chuyển giao công nghệ bảo quản sau thu hoạch và vi sinh học ứng dụng",
        metrics: [
          { label: "Thời gian triển khai", val: "1998 – 2008" },
          { label: "Trọng tâm đào tạo", val: "Thạc sĩ & Sau thu hoạch" },
          { label: "Giá trị học thuật", val: "Đội ngũ chuyên gia nòng cốt" },
        ],
        coordinates: { x: 230, y: 130 },
        badge: "Hợp tác Bỉ VLIR",
        legalDoc: "Thỏa thuận hợp tác liên viện - trường VLIR",
        source: "Ban Hợp tác Quốc tế ĐHCT",
      },
      {
        id: "netherlands_mho",
        name: "Hà Lan (Dự án MHO / VH10)",
        province: "Hà Lan",
        type: "international",
        targetUser: "Nghiên cứu cải tạo đất phèn và quản trị tài nguyên nước",
        technology: "Dự án MHO với Chính phủ Hà Lan (1996–2004)",
        achievements: "Tạo dựng cơ sở vật chất quan trọng, hỗ trợ chương trình rửa phèn và thiết bị phân tích hiện đại",
        metrics: [
          { label: "Giai đoạn dự án", val: "1996 – 2004" },
          { label: "Lĩnh vực nghiên cứu", val: "Đất phèn & Cơ sở vật chất" },
          { label: "Kết quả thực tiễn", val: "Khai phá Đồng Tháp Mười" },
        ],
        coordinates: { x: 210, y: 100 },
        badge: "Hà Lan MHO",
        legalDoc: "Hiệp định hợp tác khoa học VN - Hà Lan",
        source: "Ấn phẩm kỷ niệm 60 năm ĐHCT",
      },
      {
        id: "eu_catfish",
        name: "Châu Âu (Dự án Catfish Asia)",
        province: "Cộng đồng Châu Âu (EC)",
        type: "international",
        targetUser: "Liên minh nghiên cứu cá da trơn quốc tế (Pháp, Bỉ, Indo, VN)",
        technology: "Dự án cá da trơn châu Á - Catfish Asia do EC tài trợ (1995–2007)",
        achievements: "Quy trình sản xuất giống cá tra, cá basa liên kết 6 tổ chức, đưa ĐBSCL dẫn đầu thế giới về xuất khẩu",
        metrics: [
          { label: "Số tổ chức liên kết", val: "6 tổ chức quốc tế" },
          { label: "Nguồn tài trợ", val: "Cộng đồng Châu Âu (EC)" },
          { label: "Sản phẩm chuyển giao", val: "Giống cá tra nhân tạo" },
        ],
        coordinates: { x: 260, y: 160 },
        badge: "Catfish Asia (EU)",
        legalDoc: "Dự án tài trợ hợp tác EC - ASEAN",
        source: "Báo Lao Động & Kỷ yếu 60 năm ĐHCT",
      },
      {
        id: "crop_trust",
        name: "Crop Trust (Tổ chức Bảo tồn Đa dạng Cây trồng)",
        province: "Quốc tế",
        type: "international",
        targetUser: "Bảo tồn gen lúa và thích ứng biến đổi khí hậu",
        technology: "Dự án BOLD Rice Vietnam (2023–2027)",
        achievements: "Đánh giá 252 giống lúa mùa, chọn tạo lúa Nông Dân 1 & 2 được cấp quyết định lưu hành 20 năm tại ĐBSCL",
        metrics: [
          { label: "Giai đoạn dự án", val: "2023 – 2027" },
          { label: "Số giống đánh giá", val: "252 giống mùa" },
          { label: "Lưu hành công nhận", val: "Lúa Nông Dân 1 & 2" },
        ],
        coordinates: { x: 280, y: 90 },
        badge: "Crop Trust (BOLD)",
        legalDoc: "Thỏa thuận tài trợ Dự án BOLD Rice Vietnam",
        source: "Báo Cần Thơ & Dự án BOLD",
      },
    ],
  },

  // 9. CÁC NGUỒN PHỎNG VẤN TRỰC TIẾP (3 NHÓM NGUỒN CHÍNH)
  interviews: [
    {
      id: "farmer_interview",
      group: "farmer",
      groupTitle: "Nông dân trực tiếp tiếp nhận kỹ thuật",
      interviewee: "Ông Trần Văn Tuấn",
      role: "Nông dân xã Vĩnh Tân, Thị xã Vĩnh Châu, Sóc Trăng",
      avatarDesc: "Nông dân có thâm niên hơn 20 năm nuôi Artemia thu trứng bào xác",
      location: "Vĩnh Châu, Sóc Trăng",
      qa: [
        {
          question: "Gia đình tiếp nhận kỹ thuật nuôi Artemia từ ĐHCT từ năm nào?",
          answer: "Gia đình tôi tiếp nhận kỹ thuật nuôi Artemia từ các thầy ĐHCT từ những năm 1990. Trước đó, vùng đất này chỉ toàn làm muối, giá cả bấp bênh và hễ mưa sớm là trắng tay. Khi được chuyển giao quy trình nuôi Artemia, chúng tôi mới biết tận dụng nguồn nước mặn để thu trứng bào xác bán cho các trại giống thủy sản khắp cả nước.",
        },
        {
          question: "So với làm muối truyền thống, sản lượng và thu nhập thực tế đạt bao nhiêu (kg/ha, triệu đồng/năm)?",
          answer: "Làm muối truyền thống cực nhọc cả năm giỏi lắm kiếm được 15–20 triệu đồng mỗi héc-ta. Còn nuôi Artemia thu trứng bào xác, trung bình mỗi héc-ta thu hoạch từ 100 đến 120 kg trứng tươi. Trừ hết chi phí, thu nhập thực tế đạt từ 80 đến trên 120 triệu đồng/ha/năm, gấp 5 đến 6 lần làm muối. Nhờ con Artemia mà bà con Vĩnh Châu chúng tôi cất được nhà tường khang trang.",
        },
        {
          question: "Hạn chế: Thời tiết thất thường hoặc nguồn nước hiện nay có ảnh hưởng thế nào đến tỷ lệ nở của trứng?",
          answer: "Đó là lo lắng lớn nhất của bà con hiện nay. Thời tiết diễn biến thất thường, những cơn mưa trái mùa làm độ mặn trong đầm nuôi sụt giảm đột ngột, ảnh hưởng trực tiếp đến khả năng tạo kén và tỷ lệ nở của trứng bào xác. Nắng gắt nhiệt độ cao trên 38°C cũng khiến ấu trùng suy yếu. Bà con rất mong các nhà khoa học ĐHCT tiếp tục nghiên cứu các giải pháp tuần hoàn nước để thích ứng với biến đổi khí hậu.",
        },
      ],
    },
    {
      id: "student_interview",
      group: "student",
      groupTitle: "Sinh viên & Học viên thực nghiệm đề tài",
      interviewee: "Lê Hoàng Nam",
      role: "Học viên Cao học K47, Khoa Nuôi trồng Thủy sản - Trường Thủy sản ĐHCT",
      avatarDesc: "Tham gia trực tiếp đề tài nuôi tuần hoàn cá bông lau & CTU-RAS",
      location: "Trại Thực nghiệm Thủy sản Khu II, TP. Cần Thơ",
      qa: [
        {
          question: "Bạn tham gia vận hành mô hình trại thực nghiệm từ thời gian nào?",
          answer: "Em tham gia vận hành hệ thống bể tuần hoàn RAS từ đầu năm 2024 khi dự án DIVERSAQUA bước vào giai đoạn nuôi vỗ cá bông lau bố mẹ. Hằng ngày, nhóm học viên chúng em thay ca theo dõi chỉ số nhiệt độ, oxy hòa tan và độ mặn mỗi 4 tiếng một lần.",
        },
        {
          question: "Trong quá trình trực tiếp theo dõi các vụ nuôi/vụ lúa thực nghiệm, số liệu thu thập thực tế (tỷ lệ sống, năng suất, hệ số thức ăn) có điểm nào chênh lệch so với giả định ban đầu trong tài liệu lý thuyết không?",
          answer: "Chênh lệch rất rõ rệt! Trong tài liệu lý thuyết, công thức dinh dưỡng đưa ra giả định cá bông lau có thể hấp thụ ngay thức ăn công nghiệp. Nhưng thực tế ngoài bể nuôi, cá bột từ chối cám viên nếu không có giai đoạn chuyển tiếp bằng sinh khối Artemia và thức ăn tươi sống. Tỷ lệ sống ban đầu chỉ đạt 35% thay vì 60% như tính toán. Nhờ việc trực tiếp theo dõi tập tính bắt mồi và điều chỉnh dòng chảy tuần hoàn, nhóm mới nâng dần tỷ lệ sống lên 75–85%. Đó là điều mà nếu chỉ đọc sách trong phòng học thì không bao giờ nắm bắt được.",
        },
      ],
    },
    {
      id: "lecturer_interview",
      group: "lecturer",
      groupTitle: "Giảng viên & Nhà khoa học chủ trì",
      interviewee: "GS.TS. Nguyễn Thanh Long",
      role: "Chuyên gia Di truyền Chọn giống, Trường Nông nghiệp ĐHCT",
      avatarDesc: "Chủ trì nhiều đề tài lai tạo lúa thích ứng biến đổi khí hậu",
      location: "Tòa nhà Nghiên cứu ATL, Đại học Cần Thơ",
      qa: [
        {
          question: "Nhìn lại từ thời điểm bắt đầu nghiên cứu đến nay, Thầy đánh giá công trình/bằng sáng chế này đã làm thay đổi diện mạo ngành hàng (như cá tra, lúa Nông Dân, Artemia hay tôm CTU-RAS) và tập quán canh tác của người dân ĐBSCL như thế nào so với giai đoạn trước?",
          answer: "Nó đã thay đổi từ căn bản triết lý sản xuất của đồng bằng. Trước đây, nông dân phụ thuộc hoàn toàn vào thiên nhiên: cá giống thì vớt trên sông Tiền sông Hậu, lúa giống thì tự để giống từ vụ trước dẫn đến thoái hóa, dịch bệnh bùng phát là mất trắng. Khi Đại học Cần Thơ đưa ra các quy trình nhân giống cá tra nhân tạo, lúa kháng rầy và nay là lúa Nông Dân 1, 2, bà con đã chủ động kiểm soát mùa vụ, nâng cao chất lượng hạt gạo và con cá theo đúng chuẩn mực thị trường xuất khẩu.",
        },
        {
          question: "Thành công từ công trình nghiên cứu của Thầy/Cô đã tác động ra sao đến chính sách phát triển nông nghiệp của các địa phương trong vùng, cũng như sự chủ động tìm đến hợp tác của các doanh nghiệp lớn?",
          answer: "Các địa phương như Đồng Tháp, An Giang, Sóc Trăng, Cà Mau khi quy hoạch đề án nông nghiệp công nghệ cao đều lấy các công trình của ĐH Cần Thơ làm căn cứ khoa học. Doanh nghiệp lớn không còn đứng ngoài cuộc mà chủ động đặt hàng ngay từ giai đoạn khảo nghiệm. Quyết định công nhận lưu hành 20 năm cho giống lúa Nông Dân hay bằng sáng chế CTU-RAS là tấm vé thông hành pháp lý vững chắc để doanh nghiệp và nông dân cùng liên kết sản xuất chuỗi giá trị lớn.",
        },
      ],
    },
  ],
};

export default ARTICLE_DATA;
