/**
 * HỒ SƠ DỮ LIỆU & NỘI DUNG BÁO CHÍ DỮ LIỆU ĐA PHƯƠNG TIỆN (DATA JOURNALISM & SCROLLYTELLING)
 * ĐỀ TÀI: BẢN ĐỒ CONCERT VIỆT NAM: SỨC BẬT NỘI SINH
 * -----------------------------------------------------------------------------------------
 * Nguồn dữ liệu đối chiếu:
 * 1. Báo cáo Tổng quan ngành công nghiệp âm nhạc Việt Nam 2025–2026 (Trường Đại học RMIT Việt Nam)
 * 2. Nghị quyết số 80-NQ/TW của Bộ Chính trị (07/01/2026) & Nghị quyết Quốc hội về Ngày Văn hóa Việt Nam 24/11
 * 3. Sở Văn hóa và Thể thao TP.HCM, Bộ VHTTDL, Statista Market Insights
 * 4. Báo Nhân Dân, Tuổi Trẻ, Đại biểu Nhân dân, VietnamPlus, Thanh Niên, VnExpress, Dân Trí, Znews
 */

export interface HeroShot {
  id: string;
  timeRange: string;
  concertName: string;
  location: string;
  audienceScale: string;
  primaryColor: string;
  secondaryColor: string;
  caption: string;
  credit: string;
}

export interface KeyTakeawayMetric {
  id: string;
  value: string;
  unit: string;
  label: string;
  detail: string;
  source: string;
  accent: "cyan" | "magenta" | "gold" | "redstar";
}

export interface EventScaleSlice {
  id: string;
  scaleLabel: string;
  percentage: number;
  isLargeScale: boolean;
  color: string;
  note: string;
}

export interface IconicConcertItem {
  id: string;
  name: string;
  artistOrOrganizer: string;
  venue: string;
  time: string;
  audience: string;
  audienceNumeric: number;
  ticketSpeed: string;
  category: "phai-sinh" | "ca-nhan" | "quoc-gia" | "quoc-te";
  categoryLabel: string;
  highlightColor: string;
}

export interface SpendingWillingnessRow {
  id: string;
  product: string;
  willingnessRate: number; // % N=471
  tiers: {
    under50k: number;
    from50kTo200k: number;
    from200kTo500k: number;
    from500kTo1M: number;
    over1M: number;
  };
  insight: string;
}

export interface VoxpopItem {
  id: string;
  speakerName: string;
  tabLabel?: string;
  ageAndRole: string;
  route: string;
  concertAttended: string;
  durationSec: number;
  totalCost: string;
  costBreakdown: { item: string; amount: string }[];
  quote: string;
  worthItReason: string;
  waveformHeights: number[];
  audioSrc?: string;
}

export interface EcosystemSpoke {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  icon: string;
  color: string;
  angleDeg: number;
  beneficiaries: string;
  spendingExamples: string;
  spilloverNote: string;
}

export interface HeatmapHub {
  id: string;
  city: string;
  clusterType: "high-density" | "music-tourism";
  clusterLabel: string;
  x: number;
  y: number;
  heatRadius: number;
  flagshipEvents: string;
  eventVolumeStat: string;
  retentionLevel: string;
  retentionScore: number; // 1-100 visual bar
  overnightVsLeaveAnalysis: string;
}

export interface SankeyInputNode {
  id: string;
  label: string;
  share: number; // % from RMIT page 30
  color: string;
  description: string;
}

export interface SankeyRevenueStream {
  id: string;
  label: string;
  shareEstimate: number;
  color: string;
  detail: string;
}

export interface SankeyOutputNode {
  id: string;
  label: string;
  shareRange: string;
  visualWeight: number;
  color: string;
  recipient: string;
  painPoint: string;
}

export interface ArtistOriginCorrelationRow {
  scale: string;
  domesticOnly: number;
  internationalOnly: number;
  combined: number;
  highlight?: boolean;
}

export interface SeaRadarCountry {
  id: string;
  country: string;
  cities: string;
  color: string;
  arpu2030: number; // USD
  scores: {
    venueStandard: number; // Hạ tầng sân bãi có mái che
    publicTransit: number; // Kết nối giao thông công cộng
    techSupplyChain: number; // Chuỗi cung ứng kỹ thuật & logistics
    policyIncentive: number; // Cơ chế chính sách & quỹ thu hút
    purchasingPower: number; // Sức mua & chỉ số ARPU âm nhạc
  };
  venues: string;
  capacityAndRoof: string;
  transitConnection: string;
  policyHighlight: string;
}

export interface ArpuComparisonItem {
  rank: number;
  country: string;
  arpuUsd: number;
  note?: string;
  isVietnam?: boolean;
}

export interface BottleneckItem {
  number: string;
  title: string;
  summary: string;
  evidenceQuote?: string;
  solutionLink: string;
}

export interface MotionGraphicScene {
  id: string;
  timecode: string;
  startSec: number;
  endSec: number;
  stageTitle: string;
  headline: string;
  narrative: string;
  costCheckpoints?: {
    station: string;
    title: string;
    detail: string;
    costImpact: string;
  }[];
  visualCue: string;
}

export interface BottleneckSolutionPair {
  id: string;
  bottleneck: string;
  pillarTag: string;
  solutionTitle: string;
  actionDetail: string;
  milestoneMetric: string;
}

export interface ExpertQuoteCard {
  id: string;
  speaker: string;
  title: string;
  quote: string;
  source: string;
  accentColor: string;
}

export interface PollOption {
  id: string;
  label: string;
  tag: string;
  initialVotes: number;
}

export interface RmitSourceRow {
  id: string;
  factUsed: string;
  pdfLocation: string;
  originalSourceNote: string;
}

export interface PressPolicySourceRow {
  id: string;
  category?: "press" | "international" | "policy";
  categoryLabel?: string;
  factUsed: string;
  articleSource: string;
  authorityOrExpert: string;
}

export const ARTICLE_META = {
  category: "BÁO CHÍ DỮ LIỆU ĐA PHƯƠNG TIỆN • MULTIMEDIA DATA JOURNALISM",
  specialIssue: "CHUYÊN ĐỀ CÔNG NGHIỆP BIỂU DIỄN VIỆT NAM 2025–2026",
  titleMain: "VIỆT NAM THIẾU GÌ",
  titleAccent: "ĐỂ GIỮ CHÂN SIÊU SAO QUỐC TẾ?",
  sapo:
    "Khi khán giả Việt đã sẵn sàng chi tiền triệu lấp đầy những sân vận động 50.000 chỗ trong vài giờ, bài toán sức mua không còn là lý do để giải thích cho sự vắng bóng của các siêu sao toàn cầu. Đằng sau những sự kiện quốc tế quy mô lớn mang tính đơn lẻ giai đoạn 2025–2026 là những nút thắt về hạ tầng, chuỗi cung ứng và cơ chế vận hành đang khiến Việt\u00A0Nam hụt hơi trên đường đua công nghiệp biểu diễn so với các nước Đông\u00A0Nam\u00A0Á.",
  publishDate: "Tháng 11/2026",
  author: "Nhóm 01",
  advisor: "ThS. Nguyễn Thanh Liêm",
  readTime: "8 phút",
  footageCredits:
    "Nguồn tư liệu hình ảnh & đối chiếu: VTV Online, Đài Tiếng nói Việt Nam (VOV), Báo Tiền Phong, Báo Thanh Niên.",
};

// [VỊ TRÍ 1] 3 CÚ MÁY FLYCAM TRONG HEADER VIDEO LOOP (6 GIÂY)
export const HERO_FLYCAM_SHOTS: HeroShot[] = [
  {
    id: "atvncg",
    timeRange: "00:00 – 00:02",
    concertName: "Anh Trai Vượt Ngàn Chông Gai",
    location: "TP.HCM & Hưng Yên (2025–2026)",
    audienceScale: "~100.000 khán giả / 2 đêm",
    primaryColor: "#E11D48",
    secondaryColor: "#D97706",
    caption: "Cú máy flycam 01: Toàn cảnh biển lightstick rực lửa phủ kín đại đô thị trong 2 đêm diễn cháy vé.",
    credit: "Footage tham chiếu: BTC Anh Trai Vượt Ngàn Chông Gai / YeaH1",
  },
  {
    id: "atsh",
    timeRange: "00:02 – 00:04",
    concertName: "Anh Trai \"Say Hi\"",
    location: "TP.HCM & SVĐ Quốc gia Mỹ Đình",
    audienceScale: "30.000 – 50.000 khán giả / đêm",
    primaryColor: "#0284C7",
    secondaryColor: "#7C3AED",
    caption: "Cú máy flycam 02: Sóng ánh sáng đồng bộ theo nhịp nhạc điện tử của thế hệ Prosumer Fandom trẻ.",
    credit: "Footage tham chiếu: BTC Anh Trai \"Say Hi\" / DatVietVAC",
  },
  {
    id: "tqtt",
    timeRange: "00:04 – 00:06",
    concertName: "Tổ Quốc Trong Tim",
    location: "Thủ đô Hà Nội",
    audienceScale: "25.000 – 50.000+ khán giả / đêm",
    primaryColor: "#DA251D",
    secondaryColor: "#D97706",
    caption: "Cú máy flycam 03: Biển cờ Đỏ Sao Vàng hòa cùng ánh đèn flash tạo nên hiện tượng \"Concert Quốc gia\".",
    credit: "Footage tham chiếu: BTC Tổ Quốc Trong Tim / Báo Nhân Dân",
  },
];

export const KEY_METRICS: KeyTakeawayMetric[] = [
  {
    id: "m1",
    value: "810+",
    unit: "sự kiện / năm",
    label: "Sự kiện âm nhạc toàn\u00A0quốc\u00A0(2025)",
    detail: "60,9% khán giả được khảo sát sẵn sàng trả tiền mua vé xem biểu diễn trực\u00A0tiếp.",
    source: "Báo cáo RMIT 2025–2026 (Tr. 27, 30)",
    accent: "cyan",
  },
  {
    id: "m2",
    value: "101 : 4",
    unit: "nội địa vs. quốc tế",
    label: "Phân khúc đại nhạc hội 10.000–40.000\u00A0khách",
    detail: "Ở nhóm siêu sự kiện trên 40.000 người, nghệ sĩ quốc tế cũng chỉ có 3 sự kiện độc lập so với 16 sự kiện nội\u00A0địa.",
    source: "Báo cáo RMIT 2025–2026 (Tr. 30)",
    accent: "magenta",
  },
  {
    id: "m3",
    value: "5,44 USD",
    unit: "ARPU / người",
    label: "Doanh thu nhạc số bình quân (dự báo\u00A02030)",
    detail: "Đứng thứ 6 Đông Nam Á — cách rất xa Singapore (45,38 USD) và chưa bằng một nửa Thái\u00A0Lan\u00A0(12,06\u00A0USD).",
    source: "Statista / Báo cáo RMIT (Tr. 11)",
    accent: "gold",
  },
  {
    id: "m4",
    value: "122.000",
    unit: "tỷ đồng",
    label: "Nguồn lực phát triển văn\u00A0hóa\u00A02025–2030",
    detail: "Cùng Nghị quyết 80-NQ/TW đặt mục tiêu đến 2030 công nghiệp văn hóa đóng góp 7% GDP và có 5 thương hiệu lễ hội quốc\u00A0tế.",
    source: "Nghị quyết 80-NQ/TW & Quốc hội",
    accent: "cyan",
  },
];

// [VỊ TRÍ 2] BIỂU ĐỒ 1: QUY MÔ SỰ KIỆN & CÁC CONCERT TIÊU BIỂU
export const EVENT_SCALE_DISTRIBUTION: EventScaleSlice[] = [
  {
    id: "s-1k-5k",
    scaleLabel: "1.000 – 5.000 người",
    percentage: 31.5,
    isLargeScale: false,
    color: "#C40D0C",
    note: "Phân khúc xương sống tại các nhà thi đấu, trung tâm hội nghị và không gian ngoài trời tầm trung.",
  },
  {
    id: "s-200-500",
    scaleLabel: "200 – 500 người",
    percentage: 27.7,
    isLargeScale: false,
    color: "#E23A00",
    note: "Mini-show, livehouse, phòng trà và đêm nhạc indie định kỳ tại các đô thị lớn.",
  },
  {
    id: "s-500-1k",
    scaleLabel: "500 – 1.000 người",
    percentage: 17.0,
    isLargeScale: false,
    color: "#FF6500",
    note: "Fan meeting, showcase ra mắt album và không gian âm nhạc du lịch như Đà Lạt, Huế.",
  },
  {
    id: "s-10k-40k",
    scaleLabel: "10.000 – 40.000 người",
    percentage: 14.6,
    isLargeScale: true,
    color: "#FF8A0A",
    note: "Đại nhạc hội sân vận động & khu đô thị mở — động lực tăng trưởng đột phá nhất giai đoạn 2024–2026.",
  },
  {
    id: "s-5k-10k",
    scaleLabel: "5.000 – 10.000 người",
    percentage: 6.7,
    isLargeScale: true,
    color: "#FFAE00",
    note: "Liveshow cá nhân quy mô nhà thi đấu lớn và lễ hội âm nhạc kết hợp thương hiệu.",
  },
  {
    id: "s-over-40k",
    scaleLabel: "Trên 40.000 người",
    percentage: 2.5,
    isLargeScale: true,
    color: "#FFC002",
    note: "Siêu sự kiện (Mega-concert): Concert phái sinh truyền hình thực tế, Concert Quốc gia & G-Dragon World Tour.",
  },
];

export const ICONIC_CONCERTS_2025_2026: IconicConcertItem[] = [
  {
    id: "atvncg-2026",
    name: "Anh Trai Vượt Ngàn Chông Gai 2026",
    artistOrOrganizer: "YeaH1 / Dàn Anh Tài",
    venue: "TP.HCM (2 đêm tháng 10/2026) & Hưng Yên",
    time: "10 – 11/2026",
    audience: "~100.000 khán giả (2 đêm TP.HCM)",
    audienceNumeric: 100000,
    ticketSpeed: "Đêm 1 sold-out sau 5 giờ; vé đợt Hưng Yên hết sạch ngay buổi trưa mở bán 04/11/2026.",
    category: "phai-sinh",
    categoryLabel: "Concert phái sinh THTT",
    highlightColor: "#F97316",
  },
  {
    id: "gdragon-hanoi",
    name: "G-Dragon Übermensch World Tour in Hanoi",
    artistOrOrganizer: "G-Dragon (Quốc tế)",
    venue: "Hà Nội (2 đêm diễn)",
    time: "2025",
    audience: "~100.000 khán giả (2 đêm)",
    audienceNumeric: 100000,
    ticketSpeed: "Cháy vé thần tốc với hàng trăm nghìn lượt xếp hàng trực tuyến từ fan Việt và khu vực.",
    category: "quoc-te",
    categoryLabel: "World Tour Quốc tế",
    highlightColor: "#0284C7",
  },
  {
    id: "ngay-vhvn-2026",
    name: "Đại nhạc hội chào mừng Ngày Văn hóa Việt Nam 24/11",
    artistOrOrganizer: "UBND TP. Hà Nội chủ trì",
    venue: "SVĐ Quốc gia Mỹ Đình (Tối 23/11/2026)",
    time: "23/11/2026",
    audience: "Dự kiến ~60.000 khán giả",
    audienceNumeric: 60000,
    ticketSpeed: "Dấu mốc mở màn kỷ nguyên nghỉ lễ Ngày Văn hóa Việt Nam 24/11 theo Nghị quyết 80-NQ/TW.",
    category: "quoc-gia",
    categoryLabel: "Concert Quốc gia",
    highlightColor: "#DA251D",
  },
  {
    id: "to-quoc-trong-tim",
    name: "Tổ Quốc Trong Tim & V-Concert – Rạng Rỡ Việt Nam",
    artistOrOrganizer: "Mô hình Công – Tư (PPP) & Cơ quan báo chí/truyền hình",
    venue: "Hà Nội & TP.HCM (Chuỗi sự kiện A50 – A80)",
    time: "2025 – 2026",
    audience: "25.000 – 50.000+ khán giả / đêm",
    audienceNumeric: 50000,
    ticketSpeed: "Nằm trong làn sóng 128 sự kiện âm nhạc chủ đề văn hóa, tự hào dân tộc dịp đại lễ.",
    category: "quoc-gia",
    categoryLabel: "Concert Quốc gia",
    highlightColor: "#D97706",
  },
  {
    id: "my-tam-see-the-light",
    name: "Mỹ Tâm – See The Light",
    artistOrOrganizer: "Mỹ Tâm / MT Entertainment",
    venue: "SVĐ Quốc gia Mỹ Đình (Hà Nội)",
    time: "2025",
    audience: "~40.000 khán giả",
    audienceNumeric: 40000,
    ticketSpeed: "Khẳng định kỷ lục liveshow cá nhân sân vận động của nghệ sĩ nữ hàng đầu V-Pop.",
    category: "ca-nhan",
    categoryLabel: "Liveshow cá nhân",
    highlightColor: "#EC4899",
  },
  {
    id: "ha-anh-tuan-sketch-a-rose",
    name: "Hà Anh Tuấn – Sketch A Rose",
    artistOrOrganizer: "Hà Anh Tuấn / Viet Vision",
    venue: "TP.HCM (2 đêm diễn)",
    time: "2025",
    audience: "~30.000 khán giả (2 đêm)",
    audienceNumeric: 30000,
    ticketSpeed: "Tệp khán giả trưởng thành chi trả cao, kết hợp định vị thương hiệu nghệ thuật bền bỉ.",
    category: "ca-nhan",
    categoryLabel: "Liveshow cá nhân",
    highlightColor: "#A855F7",
  },
  {
    id: "soobin-all-rounder",
    name: "Soobin – All-Rounder Concert",
    artistOrOrganizer: "Soobin / SpaceSpeakers",
    venue: "Chuỗi 3 đêm diễn",
    time: "2025 – 2026",
    audience: "~26.000 khán giả (qua 3 đêm)",
    audienceNumeric: 26000,
    ticketSpeed: "Minh chứng sức bật thương mại của thế hệ nghệ sĩ solo bước ra từ làn sóng THTT âm nhạc.",
    category: "ca-nhan",
    categoryLabel: "Liveshow cá nhân",
    highlightColor: "#38BDF8",
  },
];

// [VỊ TRÍ 3] BIỂU ĐỒ 2: SỨC MUA & MỨC SẴN SÀNG CHI TRẢ (RMIT TRANG 27 & 28, N=471)
export const SPENDING_WILLINGNESS_DATA: SpendingWillingnessRow[] = [
  {
    id: "streaming",
    product: "Gói đăng ký nghe nhạc trực tuyến",
    willingnessRate: 71.7,
    tiers: {
      under50k: 32.7,
      from50kTo200k: 50.6,
      from200kTo500k: 13.7,
      from500kTo1M: 1.5,
      over1M: 1.5,
    },
    insight: "Tỷ lệ người dùng sẵn sàng trả phí cao nhất (71,7%), nhưng phần lớn tập trung ở mức chi nhỏ dưới 200.000đ/tháng (83,3%).",
  },
  {
    id: "live-events",
    product: "Sự kiện trực tiếp (Concert, Liveshow, Fan meeting)",
    willingnessRate: 60.9,
    tiers: {
      under50k: 3.8,
      from50kTo200k: 31.9,
      from200kTo500k: 42.0,
      from500kTo1M: 15.3,
      over1M: 7.0,
    },
    insight: "Đứng thứ 2 về độ phổ biến (60,9%), với 64,3% người trả lời sẵn sàng dành ngân sách tích lũy từ 200.000đ đến trên 1 triệu đồng/tháng.",
  },
  {
    id: "brand-collab",
    product: "Sản phẩm thương hiệu kết hợp Nghệ sĩ",
    willingnessRate: 42.0,
    tiers: {
      under50k: 1.3,
      from50kTo200k: 22.0,
      from200kTo500k: 43.5,
      from500kTo1M: 21.1,
      over1M: 12.1,
    },
    insight: "Hiệu ứng thần tượng thúc đẩy 33,2% nhóm chi tiêu sẵn sàng bỏ ra trên 500.000đ/tháng cho sản phẩm đồng thương hiệu.",
  },
  {
    id: "merchandise",
    product: "Merchandise (Áo, Lightstick, Phụ kiện...)",
    willingnessRate: 34.1,
    tiers: {
      under50k: 4.6,
      from50kTo200k: 14.3,
      from200kTo500k: 25.0,
      from500kTo1M: 33.2,
      over1M: 22.9,
    },
    insight: "Nhóm chịu chi mạnh tay nhất tính theo giá trị đơn hàng: 56,1% người mua sẵn sàng chi từ 500.000đ đến trên 1 triệu đồng/tháng.",
  },
  {
    id: "physical-music",
    product: "Nhạc vật lý (CD / Đĩa than Vinyl)",
    willingnessRate: 27.8,
    tiers: {
      under50k: 10.0,
      from50kTo200k: 28.9,
      from200kTo500k: 34.4,
      from500kTo1M: 18.0,
      over1M: 8.7,
    },
    insight: "Phân khúc sưu tầm ngách nhưng bền bỉ, phục vụ nhu cầu lưu giữ kỷ vật vật lý của cộng đồng người hâm mộ trung thành.",
  },
];

// [VỊ TRÍ 4] AUDIO VOXPOP & TEXT VOXBOX (KHÁN GIẢ TRẺ CHIA SẺ CHI PHÍ ĐI XEM CONCERT)
export const VOXPOP_STORIES: VoxpopItem[] = [
  {
    id: "vox-1",
    speakerName: "Hoàng Yến",
    tabLabel: "Chị Hoàng Yến (TP. Cần Thơ)",
    ageAndRole: "21 tuổi • Sinh viên năm 4",
    route: "Cần Thơ → TP.HCM (Xe giường nằm khứ hồi + Lưu trú 2N1Đ)",
    concertAttended: "Anh Trai \"Say Hi\" Concert",
    durationSec: 33,
    totalCost: "4.650.000 VNĐ",
    costBreakdown: [
      { item: "Vé khu vực Fanzone đứng gần sân khấu", amount: "2.200.000\u00A0đ" },
      { item: "Xe khách giường nằm khứ hồi + Grab nội đô", amount: "650.000\u00A0đ" },
      { item: "Khách sạn 2 đêm (ở ghép nhóm 3 bạn)", amount: "700.000\u00A0đ" },
      { item: "Outfit, makeup, lightstick & ăn uống", amount: "1.100.000\u00A0đ" },
    ],
    quote:
      "Tổng chuyến đi từ Cần Thơ lên TP.HCM vừa rồi của mình hết khoảng 4,65 triệu đồng — bằng gần hai tháng tiền làm thêm gia sư. Nhưng khoảnh khắc 30.000 người cùng hòa giọng hát tiếng Việt dưới biển lightstick đổi màu tự động khiến mình nổi da gà. Trước đây tụi mình cứ nghĩ phải bay sang Bangkok mới có cảm giác concert đẳng cấp như vậy, giờ ngay ở Việt Nam đã làm được nên mình thấy hoàn toàn xứng đáng!",
    worthItReason: "Cảm giác cộng hưởng trực tiếp cùng hàng chục nghìn khán giả trẻ Việt và chất lượng dàn dựng sân khấu nội địa vượt kỳ vọng.",
    audioSrc: "/voxpop-hoang-yen.m4a",
    waveformHeights: [
      28, 45, 62, 38, 76, 88, 54, 42, 68, 92, 74, 50, 35, 64, 84, 95, 70, 48, 60, 82,
      66, 40, 55, 78, 90, 62, 46, 72, 85, 58, 36, 65, 80, 52, 44, 68, 50, 32,
    ],
  },
  {
    id: "vox-2",
    speakerName: "Ngọc Thuấn",
    tabLabel: "Anh Ngọc Thuấn (TP. Hồ Chí Minh)",
    ageAndRole: "24 tuổi • Nhân viên thiết kế truyền thông",
    route: "TP.HCM → Hà Nội / Hưng Yên (Vé máy bay khứ hồi + 3N2Đ)",
    concertAttended: "Anh Trai Vượt Ngàn Chông Gai",
    durationSec: 46,
    totalCost: "9.800.000 VNĐ",
    costBreakdown: [
      { item: "Vé hạng ghế ngồi tầm nhìn trực diện", amount: "3.500.000\u00A0đ" },
      { item: "Vé máy bay khứ hồi TP.HCM – Hà Nội", amount: "3.400.000\u00A0đ" },
      { item: "Lưu trú homestay 2 đêm & di chuyển liên tỉnh", amount: "1.600.000\u00A0đ" },
      { item: "Áo merch chính hãng, cổ phục cách tân & ẩm thực", amount: "1.300.000\u00A0đ" },
    ],
    quote:
      "Mình tốn gần 10 triệu đồng cho cả vé concert, vé máy bay khứ hồi từ Sài Gòn ra Bắc, khách sạn và bộ cổ phục cách tân mặc đi xem đêm nhạc. Điều làm mình xúc động nhất không chỉ là âm nhạc mà là cảnh hàng chục nghìn bạn trẻ mặc áo dài, Việt phục hát vang các làn điệu dân gian được phối mới hiện đại. Mình sẵn sàng kết hợp nghỉ phép để biến chuyến đi xem concert thành kỳ du lịch khám phá ẩm thực mùa thu Hà Nội luôn.",
    worthItReason: "Sự giao thoa giữa bản sắc văn hóa dân tộc với công nghệ trình diễn hiện đại, kết hợp trọn vẹn một chuyến du lịch âm nhạc liên vùng.",
    audioSrc: "/voxpop-ngoc-thuan.m4a",
    waveformHeights: [
      34, 52, 74, 60, 85, 94, 68, 45, 58, 82, 90, 76, 48, 62, 88, 72, 54, 40, 70, 96,
      84, 64, 50, 78, 86, 56, 42, 66, 92, 74, 60, 80, 68, 46, 58, 72, 44, 30,
    ],
  },
];

// [VỊ TRÍ 5] INFOGRAPHIC: 5 NHÁNH DỊCH VỤ HƯỞNG LỢI QUANH 1 ĐÊM CONCERT (30.000 KHÁN GIẢ)
export const ECOSYSTEM_SPOKES: EcosystemSpoke[] = [
  {
    id: "hotel",
    code: "01",
    title: "Lưu trú",
    shortTitle: "Lưu trú",
    icon: "🏨",
    color: "#38BDF8",
    angleDeg: -90,
    beneficiaries: "Khách sạn 3–5 sao, căn hộ dịch vụ, homestay bán kính 5–15km quanh điểm diễn.",
    spendingExamples: "Khán giả liên tỉnh thường lưu trú 1-2 đêm dẫn đến khoảng 85–100% số lượng phòng được đặt kín vào dịp cuối tuần diễn ra đại nhạc hội.",
    spilloverNote: "Tạo nguồn thu trực tiếp cho bất động sản, du lịch địa phương thay vì chỉ bán vé trong sân.",
  },
  {
    id: "transport",
    code: "02",
    title: "Di chuyển",
    shortTitle: "Di chuyển",
    icon: "✈️",
    color: "#818CF8",
    angleDeg: -18,
    beneficiaries: "Các hãng hàng không, đường sắt, xe khách liên tỉnh, taxi và ứng dụng gọi xe công nghệ (Grab/Green SM/Be).",
    spendingExamples: "Các chặng bay TP.HCM ↔ Hà Nội, Đà Nẵng tăng vọt lượng vé bán ra, kéo theo hàng chục nghìn cuốc xe di chuyển trong giờ cao điểm trước - sau giờ G.",
    spilloverNote: "Kích hoạt dòng dịch chuyển hành khách nội địa trái mùa thấp điểm du lịch.",
  },
  {
    id: "fnb",
    code: "03",
    title: "Ẩm thực (F&B)",
    shortTitle: "Ẩm thực (F&B)",
    icon: "🍜",
    color: "#F59E0B",
    angleDeg: 54,
    beneficiaries: "Gian hàng F&B trong khu vực sự kiện, chuỗi cà phê, nhà hàng, đặc sản địa phương.",
    spendingExamples: "Khán giả có thể đến săn quà ở các quầy ẩm thực trước sự kiện và ăn đêm sau 23h00.",
    spilloverNote: "Lan tỏa doanh thu trực tiếp đến hộ kinh doanh nhỏ lẻ và chuỗi dịch vụ ăn uống bản địa.",
  },
  {
    id: "fashion-merch",
    code: "04",
    title: "Merch/Goods",
    shortTitle: "Merch/Goods",
    icon: "👕",
    color: "#EC4899",
    angleDeg: 126,
    beneficiaries: "Local brand thời trang, thợ trang điểm/làm tóc, xưởng in ấn quà lưu niệm.",
    spendingExamples: "56,1% nhóm mua merch chi từ 500.000đ đến >1 triệu đồng/tháng cho lightstick, áo concert, quạt, card bo góc, Việt phục.",
    spilloverNote: "Tạo ra một hệ sinh thái sáng tạo quy mô nhỏ, nơi cộng đồng người hâm mộ tự sản xuất và kinh doanh các sản phẩm của riêng họ.",
  },
  {
    id: "ooh-media",
    code: "05",
    title: "Fan Project",
    shortTitle: "Fan Project",
    icon: "🏙️",
    color: "#10B981",
    angleDeg: 198,
    beneficiaries: "Các đơn vị cho thuê quảng cáo trên màn hình LED tòa nhà, trung tâm thương mại, xe buýt 2 tầng và các trạm photobooth.",
    spendingExamples: "Các FC tự gây quỹ hàng trăm triệu đồng thuê màn hình LED cỡ lớn, xe hoa, trạm tiếp sức nghệ sĩ dọc các tuyến phố trung tâm.",
    spilloverNote: "Biến không gian đô thị thành lễ hội thị giác, gia tăng độ nhận diện điểm đến trên mạng xã hội.",
  },
];

// [VỊ TRÍ 6] BẢN ĐỒ NHIỆT: PHÂN BỐ SỰ KIỆN & KHẢ NĂNG GIỮ CHÂN DU KHÁCH
export const VIETNAM_HEATMAP_HUBS: HeatmapHub[] = [
  {
    id: "hanoi-hungyen",
    city: "Hà Nội",
    clusterType: "high-density",
    clusterLabel: "Cực tăng trưởng mật độ cao",
    x: 142,
    y: 118,
    heatRadius: 40,
    flagshipEvents: "Concert Quốc gia (Tổ Quốc Trong Tim, V-Concert, Ngày Văn hóa VN 24/11 – 60.000 người), BigBang 20 năm, Anh Trai Vượt Ngàn Chông Gai",
    eventVolumeStat: "Tâm điểm các Concert Quốc gia 40.000–60.000 người, chuỗi đại nhạc hội tại Mỹ Đình và vùng ven Hưng Yên",
    retentionLevel: "Trung bình – Khá (Khách liên tỉnh lưu trú 1–2 đêm; khách nội vùng ra về ngay trong đêm)",
    retentionScore: 68,
    overnightVsLeaveAnalysis:
      "Thu hút lượng lớn khán giả bay từ TP.HCM và các tỉnh lưu trú 1–2 đêm dịp cuối tuần. Tuy nhiên, tại các khu đô thị vùng ven, phần lớn khán giả miền Bắc vẫn di chuyển bằng xe cá nhân và rời điểm diễn ngay trong đêm do thiếu tổ hợp giải trí đêm liền kề.",
  },
  {
    id: "quangninh",
    city: "Quảng Ninh",
    clusterType: "music-tourism",
    clusterLabel: "Cực du lịch âm nhạc (Music Tourism)",
    x: 195,
    y: 105,
    heatRadius: 24,
    flagshipEvents: "Hạ Long Concert",
    eventVolumeStat: "Điểm sáng kết hợp sân khấu thực cảnh bờ vịnh di sản và du thuyền nghỉ dưỡng",
    retentionLevel: "Trung bình (Nhiều khán giả về ngay trong ngày nếu thiếu gói combo đêm)",
    retentionScore: 56,
    overnightVsLeaveAnalysis:
      "Khoảng cách chỉ 2 giờ cao tốc từ Hà Nội khiến nhiều khán giả chọn xem xong về ngay trong ngày nếu sự kiện không đi kèm gói combo nghỉ đêm du thuyền hay dịch vụ ẩm thực đêm hấp dẫn.",
  },
  {
    id: "quangbinh",
    city: "Quảng Bình",
    clusterType: "music-tourism",
    clusterLabel: "Cực du lịch âm nhạc (Music Tourism)",
    x: 168,
    y: 238,
    flagshipEvents: "Legend Fest",
    heatRadius: 22,
    eventVolumeStat: "Đưa đại nhạc hội vào chiến lược kích cầu du lịch biển và khám phá hang động",
    retentionLevel: "Khá đối với khách xa, nhưng tần suất sự kiện còn thưa theo mùa",
    retentionScore: 58,
    overnightVsLeaveAnalysis:
      "Khán giả ở xa đến xem thường lưu trú lại 1–2 đêm kết hợp tour khám phá hang động kỳ quan, nhưng tần suất sự kiện còn thưa thớt theo mùa nên hiệu ứng giữ chân du khách chưa tạo được nguồn thu thường nhật.",
  },
  {
    id: "hue",
    city: "Huế",
    clusterType: "music-tourism",
    clusterLabel: "Cực du lịch âm nhạc (Music Tourism)",
    x: 198,
    y: 278,
    heatRadius: 24,
    flagshipEvents: "Mega Booming",
    eventVolumeStat: "Đại nhạc hội đương đại gắn kết di sản Cố đô và chuỗi Festival bốn mùa",
    retentionLevel: "Tốt khi gắn kết tour di sản – ẩm thực, thách thức ở dịch vụ giải trí sau 22h",
    retentionScore: 66,
    overnightVsLeaveAnalysis:
      "Khán giả ngoại tỉnh ở lại qua đêm để kết hợp tham quan di sản Cố đô, lăng tẩm và thưởng thức ẩm thực Huế; tuy nhiên dịch vụ giải trí đêm sau 22h còn hạn chế khiến mức chi tiêu giữ chân chưa tối ưu.",
  },
  {
    id: "danang",
    city: "Đà Nẵng",
    clusterType: "music-tourism",
    clusterLabel: "Cực du lịch âm nhạc (Music Tourism)",
    x: 226,
    y: 308,
    heatRadius: 28,
    flagshipEvents: "Lễ hội Tận hưởng Đà Nẵng",
    eventVolumeStat: "Đô thị du lịch biển tiên phong kết hợp đại nhạc hội với kỳ nghỉ dưỡng trọn gói",
    retentionLevel: "Cao (Tỷ lệ lưu trú qua đêm 2–3 đêm vượt trội nhờ hệ sinh thái du lịch biển)",
    retentionScore: 82,
    overnightVsLeaveAnalysis:
      "Tỷ lệ lưu trú qua đêm vượt trội (2–3 đêm) nhờ hệ sinh thái du lịch biển; khán giả hiếm khi chỉ đến xem rồi rời đi ngay mà luôn kết hợp kỳ nghỉ dưỡng, tạo doanh thu du lịch bền vững.",
  },
  {
    id: "dalat-lamdong",
    city: "Lâm Đồng",
    clusterType: "music-tourism",
    clusterLabel: "Cực du lịch âm nhạc (Music Tourism)",
    x: 224,
    y: 422,
    heatRadius: 26,
    flagshipEvents: "Những Thành Phố Mơ Màng",
    eventVolumeStat: "Thủ phủ du lịch âm nhạc Indie/Acoustic chữa lành giữa rừng thông",
    retentionLevel: "Rất cao (Hơn 80% khán giả từ TP.HCM & các tỉnh lưu trú 2–3 ngày)",
    retentionScore: 86,
    overnightVsLeaveAnalysis:
      "Tỷ lệ lưu trú qua đêm đạt mức kỷ lục (hơn 80% khán giả lưu trú từ 2–3 ngày). Khán giả trẻ gần như mặc định đặt phòng khách sạn/homestay kết hợp nghỉ dưỡng, tỷ lệ 'xem xong về ngay' gần như bằng 0.",
  },
  {
    id: "tphcm",
    city: "TP. Hồ Chí Minh",
    clusterType: "high-density",
    clusterLabel: "Cực tăng trưởng mật độ cao",
    x: 186,
    y: 472,
    heatRadius: 44,
    flagshipEvents: "Anh Trai Vượt Ngàn Chông Gai, Tinh hà “Say Hi”, HOZO...",
    eventVolumeStat: "944 chương trình nghệ thuật/sân khấu trong 9 tháng đầu năm 2026",
    retentionLevel: "Sôi động nhất cả nước về F&B đêm, nhưng thiếu Arena mái che chuẩn quốc tế",
    retentionScore: 78,
    overnightVsLeaveAnalysis:
      "Khán giả nội thành và các tỉnh lân cận phần lớn xem xong rồi rời đi ngay trong đêm; trong khi lượng lớn khán giả bay từ miền Bắc và miền Trung lưu trú 1–2 đêm, tạo sức bật lớn cho chuỗi dịch vụ F&B, khách sạn và kinh tế đêm.",
  },
];

// [VỊ TRÍ 7] BIỂU ĐỒ SANKEY: DÒNG TIỀN & ĐƠN VỊ VẬN HÀNH CONCERT
export const SANKEY_ORGANIZER_INPUTS: SankeyInputNode[] = [
  {
    id: "ent-company",
    label: "Công ty / Ê-kíp giải trí chủ trì",
    share: 49.6,
    color: "#38BDF8",
    description: "Đóng vai trò nhà đầu tư chính (Promoter/Producer), tự cân đối bài toán bán vé thương mại và kêu gọi tài trợ.",
  },
  {
    id: "ppp",
    label: "Đối tác Công – Tư (PPP)",
    share: 17.8,
    color: "#DA251D",
    description: "Nhà nước đặt hàng/đồng chủ trì cùng doanh nghiệp tư nhân thực hiện các Concert Quốc gia & lễ hội điểm đến.",
  },
  {
    id: "artist-self",
    label: "Nghệ sĩ tự vận hành",
    share: 16.3,
    color: "#A855F7",
    description: "Công ty riêng của nghệ sĩ tự bỏ vốn sản xuất liveshow cá nhân dựa trên tệp người hâm mộ trung thành.",
  },
  {
    id: "brand-led",
    label: "Doanh nghiệp / Thương hiệu chủ trì",
    share: 13.3,
    color: "#F59E0B",
    description: "Ngân hàng, tập đoàn tiêu dùng hoặc bất động sản tài trợ chính để quảng bá thương hiệu & tri ân khách hàng.",
  },
  {
    id: "other-org",
    label: "Chủ thể khác",
    share: 3.0,
    color: "#64748B",
    description: "Tổ chức cộng đồng, quỹ giao lưu văn hóa quốc tế và hội nhóm độc lập.",
  },
];

export const SANKEY_REVENUE_STREAMS: SankeyRevenueStream[] = [
  {
    id: "rev-ticket",
    label: "Doanh thu bán vé (VIP / Fanzone / GA)",
    shareEstimate: 52,
    color: "#0284C7",
    detail: "Thu qua các nền tảng phân phối vé trực tuyến; chịu áp lực cân bằng giữa sức mua đại chúng và chi phí sản xuất.",
  },
  {
    id: "rev-sponsor",
    label: "Ngân sách Nhà tài trợ (Title / Co-Sponsor)",
    shareEstimate: 35,
    color: "#D97706",
    detail: "Nguồn bù đắp sống còn từ ngân hàng, nhãn hàng FMCG để đổi lấy quyền lợi thương hiệu (brand visibility) và vé mời.",
  },
  {
    id: "rev-merch",
    label: "Merchandise, F&B nội khu & Bản quyền số",
    shareEstimate: 13,
    color: "#DB2777",
    detail: "Áo, lightstick, gian hàng trải nghiệm và khai thác phát sóng lại trên nền tảng OTT/YouTube.",
  },
];

export const SANKEY_COST_OUTPUTS: SankeyOutputNode[] = [
  {
    id: "cost-infra",
    label: "Hạ tầng sân bãi & Âm thanh / Ánh sáng / Sân khấu",
    shareRange: "~42% ngân sách",
    visualWeight: 42,
    color: "#EF4444",
    recipient: "Đơn vị cho thuê mặt bằng, nhà thầu giàn giáo khán đài, thiết bị âm thanh – ánh sáng – LED – pháo hoa.",
    painPoint: "Tỷ trọng phình to nhất vì thiếu Arena chuẩn sẵn có — phải thuê lắp mới từ con số 0 và nhập thiết bị đặc thù.",
  },
  {
    id: "cost-talent",
    label: "Nghệ sĩ, Đạo diễn, Ekip sáng tạo & Tác quyền (VCPMC)",
    shareRange: "~28% ngân sách",
    visualWeight: 28,
    color: "#A855F7",
    recipient: "Ca sĩ biểu diễn, Giám đốc âm nhạc, Tổng đạo diễn, ban nhạc sống, vũ đoàn và Trung tâm bảo vệ quyền tác giả âm nhạc (VCPMC).",
    painPoint: "Cát-xê dàn line-up đông đảo và chi phí hòa âm phối khí mới cho hàng chục tiết mục đòi hỏi đầu tư cao.",
  },
  {
    id: "cost-ops",
    label: "Vận hành, An ninh, Nền tảng bán vé & Marketing",
    shareRange: "~23% ngân sách",
    visualWeight: 23,
    color: "#38BDF8",
    recipient: "Lực lượng an ninh – y tế – PCCC, bảo hiểm sự kiện, phí cổng bán vé (Ticketbox / Eventista-1Zone), truyền thông & hoàn trả quyền lợi Nhà tài trợ.",
    painPoint: "Chi phí nhân sự điều phối đám đông hàng vạn người và dự phòng rủi ro thời tiết phát sinh liên tục sát giờ G.",
  },
  {
    id: "cost-margin",
    label: "Biên lợi nhuận ròng của Nhà sản xuất (NSX)",
    shareRange: "0% – 7% (Hoặc rủi ro âm)",
    visualWeight: 7,
    color: "#10B981",
    recipient: "Tái đầu tư phát triển IP mùa tiếp theo cho Công ty giải trí / Nhà sản xuất.",
    painPoint: "Biên lợi nhuận cực mỏng: chỉ cần mưa bão phải gia cố sân khấu hoặc hụt một gói tài trợ lớn là dù \"cháy vé\" vẫn có thể lỗ.",
  },
];

// [VỊ TRÍ 9] BIỂU ĐỒ TƯƠNG QUAN NGUỒN GỐC NGHỆ SĨ & QUY MÔ KHÁN GIẢ (TRANG 30 BÁO CÁO RMIT)
export const ARTIST_ORIGIN_CORRELATION: ArtistOriginCorrelationRow[] = [
  { scale: "200 – 500 người", domesticOnly: 206, internationalOnly: 10, combined: 6 },
  { scale: "500 – 1.000 người", domesticOnly: 100, internationalOnly: 15, combined: 21 },
  { scale: "1.000 – 5.000 người", domesticOnly: 200, internationalOnly: 29, combined: 28 },
  { scale: "5.000 – 10.000 người", domesticOnly: 45, internationalOnly: 5, combined: 4 },
  {
    scale: "10.000 – 40.000 người",
    domesticOnly: 101,
    internationalOnly: 4,
    combined: 12,
    highlight: true,
  },
  {
    scale: "Trên 40.000 người",
    domesticOnly: 16,
    internationalOnly: 3,
    combined: 1,
    highlight: true,
  },
];

// [VỊ TRÍ 10] BIỂU ĐỒ RADAR & BẢNG SO SÁNH HẠ TẦNG ĐÔNG NAM Á
export const SEA_RADAR_COUNTRIES: SeaRadarCountry[] = [
  {
    id: "singapore",
    country: "Singapore",
    cities: "Singapore Sports Hub",
    color: "#0284C7",
    arpu2030: 45.38,
    scores: {
      venueStandard: 9.5,
      publicTransit: 9.6,
      techSupplyChain: 9.4,
      policyIncentive: 9.5,
      purchasingPower: 9.8,
    },
    venues: "National Stadium & Singapore Indoor Stadium",
    capacityAndRoof: "55.000 chỗ; mái vòm đóng/mở tự động tích hợp hệ thống làm mát điều hòa nhiệt độ tiêu chuẩn quốc tế.",
    transitConnection: "Kết nối trực tiếp ga tàu điện ngầm MRT Stadium ngay chân sân, giải tỏa hàng vạn người trong chưa đầy 45 phút.",
    policyHighlight: "Chính phủ chủ động tài trợ quỹ đặc biệt đàm phán độc quyền khu vực (4 đêm Lady Gaga 5/2025 bán 193.000 vé, thu 40,8 triệu USD, mang về 100–150 triệu USD du lịch).",
  },
  {
    id: "thailand",
    country: "Thái Lan",
    cities: "Bangkok",
    color: "#F59E0B",
    arpu2030: 12.06,
    scores: {
      venueStandard: 8.2,
      publicTransit: 8.0,
      techSupplyChain: 8.5,
      policyIncentive: 8.8,
      purchasingPower: 7.2,
    },
    venues: "Rajamangala National Stadium & Impact Arena Muang Thong Thani",
    capacityAndRoof: "51.500 chỗ (Rajamangala) & cụm Indoor Arena chuyên dụng 12.000+ chỗ sẵn sàng quanh năm.",
    transitConnection: "Kết nối mạng lưới Airport Rail Link / BTS Skytrain và tuyến Monorail mở rộng vận hành tăng cường xuyên đêm.",
    policyHighlight: "Chiến lược quốc gia IGNITE Thailand, thành lập Học viện Lễ hội và miễn giảm thủ tục thị thực đón Mariah Carey, BLACKPINK, Jackson Wang.",
  },
  {
    id: "indonesia",
    country: "Indonesia",
    cities: "Jakarta",
    color: "#A855F7",
    arpu2030: 5.48,
    scores: {
      venueStandard: 8.6,
      publicTransit: 6.8,
      techSupplyChain: 7.4,
      policyIncentive: 8.3,
      purchasingPower: 5.8,
    },
    venues: "Gelora Bung Karno (GBK) & Jakarta International Stadium (JIS)",
    capacityAndRoof: "77.000 – 82.000 chỗ; trong đó siêu sân vận động JIS sở hữu mái che đóng/mở hiện đại bậc nhất ASEAN.",
    transitConnection: "Kết nối MRT Jakarta (ga Istora Mandiri tại GBK) và mạng lưới BRT TransJakarta đang hoàn thiện đồng bộ quanh JIS.",
    policyHighlight: "Chính phủ thiết lập Quỹ Du lịch trị giá 86 triệu USD để hỗ trợ đấu thầu các sự kiện âm nhạc & giải trí quốc tế lớn.",
  },
  {
    id: "vietnam",
    country: "Việt Nam",
    cities: "Hà Nội & TP. Hồ Chí Minh",
    color: "#DA251D",
    arpu2030: 5.44,
    scores: {
      venueStandard: 5.0,
      publicTransit: 4.5,
      techSupplyChain: 5.6,
      policyIncentive: 6.8,
      purchasingPower: 5.5,
    },
    venues: "SVĐ Quốc gia Mỹ Đình & các khu đô thị mở (Vinhomes Ocean Park, The Global City)",
    capacityAndRoof: "40.000 chỗ (Mỹ Đình – không có mái che toàn phần khu vực mặt cỏ) hoặc mặt bằng ngoài trời phải dựng mới toàn bộ khán đài tạm; thiếu Indoor Arena 15.000–20.000 chỗ.",
    transitConnection: "Chưa kết nối trực tiếp ga Metro vào cổng các sân vận động lớn; phụ thuộc chủ yếu xe cá nhân và taxi công nghệ.",
    policyHighlight: "Nghị quyết 80-NQ/TW (1/2026) & gói 122.000 tỷ đồng đang mở ra hành lang pháp lý đột phá mới.",
  },
];

export interface SeaRegionalCardItem {
  id: string;
  country: string;
  flag: string;
  headlineMetric: string;
  metricUnit: string;
  strategyLabel: string;
  summary: string;
  highlightFact: string;
  accentColor: string;
}

export const SEA_REGIONAL_CARDS: SeaRegionalCardItem[] = [
  {
    id: "sg",
    country: "Singapore",
    flag: "🇸🇬",
    headlineMetric: "193.000",
    metricUnit: "vé • 4 đêm Lady Gaga",
    strategyLabel: "Độc quyền châu Á & MRT Stadium",
    summary:
      "Củng cố vị thế trung tâm biểu diễn khu vực với 4 đêm diễn độc quyền châu Á của Lady Gaga, đóng góp ước tính 100–150 triệu USD cho ngành du lịch.",
    highlightFact: "National Stadium nối thẳng tàu điện MRT chạy tăng cường xuyên đêm",
    accentColor: "#0284C7",
  },
  {
    id: "th",
    country: "Thái Lan",
    flag: "🇹🇭",
    headlineMetric: "IGNITE",
    metricUnit: "Thailand & Học viện Lễ hội",
    strategyLabel: "Chiến lược quốc gia hút sao",
    summary:
      "Triển khai chiến lược IGNITE Thailand và thành lập Học viện Lễ hội chuyên biệt để chủ động thu hút hàng loạt tên tuổi quốc tế về Bangkok.",
    highlightFact: "SVĐ Rajamangala kết nối mạng lưới BTS Skytrain & đường sắt đô thị",
    accentColor: "#F59E0B",
  },
  {
    id: "id",
    country: "Indonesia",
    flag: "🇮🇩",
    headlineMetric: "86 triệu",
    metricUnit: "USD Quỹ Du lịch",
    strategyLabel: "Ngân sách hỗ trợ trực tiếp",
    summary:
      "Chủ động thiết lập Quỹ Du lịch trị giá 86 triệu USD nhằm hỗ trợ tài chính và cơ chế thu hút các nghệ sĩ, sự kiện âm nhạc nước ngoài quy mô lớn.",
    highlightFact: "Đầu tư mạnh cả cơ chế lẫn ngân sách đấu thầu tour quốc tế",
    accentColor: "#8B5CF6",
  },
  {
    id: "my",
    country: "Malaysia",
    flag: "🇲🇾",
    headlineMetric: "450",
    metricUnit: "sự kiện âm nhạc mục tiêu",
    strategyLabel: "Mở rộng quy mô công nghiệp",
    summary:
      "Đẩy mạnh đường đua sự kiện khu vực với mục tiêu tổ chức 450 sự kiện âm nhạc nhằm gia tăng sức hút du lịch và doanh thu công nghiệp giải trí.",
    highlightFact: "ARPU nhạc số dự báo 2030 đạt 10,76 USD (gần gấp đôi Việt Nam)",
    accentColor: "#10B981",
  },
];

export const SEA_ARPU_2030: ArpuComparisonItem[] = [
  { rank: 1, country: "Singapore", arpuUsd: 45.38, note: "Dẫn đầu khu vực" },
  { rank: 2, country: "Philippines", arpuUsd: 14.52 },
  { rank: 3, country: "Thái Lan", arpuUsd: 12.06 },
  { rank: 4, country: "Malaysia", arpuUsd: 10.76, note: "Mục tiêu 450 sự kiện âm nhạc" },
  { rank: 5, country: "Indonesia", arpuUsd: 5.48 },
  { rank: 6, country: "Việt Nam", arpuUsd: 5.44, note: "Đứng thứ 6 Đông Nam Á", isVietnam: true },
];

export const FIVE_SYSTEMIC_BOTTLENECKS: BottleneckItem[] = [
  {
    number: "01",
    title: "Hạ tầng sân bãi thiếu chuẩn mực chuyên\u00A0dụng",
    summary:
      "Việt\u00A0Nam thiếu hụt nghiêm trọng các nhà thi đấu đa năng có mái che (Indoor Arena) quy mô 15.000–20.000 chỗ hoặc các sân vận động (Stadium) 40.000–50.000 chỗ được thiết kế tối ưu cho âm học, tải trọng treo hệ thống âm thanh – ánh sáng (rigging load) và lối thoát hiểm tiêu\u00A0chuẩn.",
    evidenceQuote:
      "Như ca sĩ Tùng Dương từng thẳng thắn chia sẻ trên Znews trước thềm concert tại Mỹ\u00A0Đình: Việt\u00A0Nam chưa có mô hình sân vận động có mái che phù hợp; chỉ cần thời tiết chuyển mưa, nhà sản xuất có thể phải thay đổi toàn bộ phương án sân khấu lẫn hình thức vận\u00A0hành.",
    solutionLink: "Quy hoạch Tổ hợp Arena có mái che qua mô hình\u00A0PPP",
  },
  {
    number: "02",
    title: "Chuỗi cung ứng kỹ thuật và logistics phụ thuộc nhập\u00A0khẩu",
    summary:
      "Đối với các World\u00A0Tour hạng A, bản yêu cầu kỹ thuật (Technical Rider) của nghệ sĩ quốc tế rất khắt khe. Do thiết bị trong nước chưa đáp ứng đồng bộ các tiêu chuẩn đặc thù này, các nhà tổ chức tại Việt\u00A0Nam thường phải thuê và vận chuyển thiết bị từ Singapore, Thái\u00A0Lan hoặc Hồng\u00A0Kông sang, khiến chi phí logistics và thuế quan đội lên rất\u00A0cao.",
    solutionLink: "Đơn giản hóa tạm nhập tái xuất & nội địa hóa kho thiết bị chuẩn quốc\u00A0tế",
  },
  {
    number: "03",
    title: "Bài toán tài chính, phí bảo lãnh và sức mua trung\u00A0bình",
    summary:
      "Dù có bộ phận khán giả sẵn sàng mua vé VIP giá cao, mặt bằng chi tiêu chung vẫn cần thời gian tiệm cận khu vực. Theo dự báo của Statista trong báo cáo RMIT, doanh thu nhạc số bình quân mỗi người dùng (ARPU) tại Việt\u00A0Nam giai đoạn 2025–2030 ước đạt 5,44 USD/người — đứng thứ 6 khu vực, cách khá xa Singapore (45,38 USD), Philippines (14,52 USD) hay Thái\u00A0Lan (12,06 USD). Khi phí bảo lãnh (Minimum Guarantee) mời siêu sao quốc tế lên tới hàng triệu USD, Promoter nội địa rất khó cân đối thu – chi nếu không có tập đoàn, ngân hàng tài trợ\u00A0lớn.",
    solutionLink: "Ưu đãi thuế đại nhạc hội du lịch & cơ chế đồng tài trợ chiến\u00A0lược",
  },
  {
    number: "04",
    title: "Hạ tầng giao thông công cộng kết nối điểm\u00A0diễn",
    summary:
      "Khả năng giải tỏa an toàn 40.000–60.000 khán giả trong vòng 1 giờ sau khi đêm nhạc kết thúc là tiêu chí bắt buộc của các đơn vị bảo hiểm sự kiện quốc tế. Trong khi National Stadium (Singapore) hay Rajamangala (Bangkok) kết nối trực tiếp tàu điện ngầm (MRT/BTS) chạy tăng cường xuyên đêm, khán giả tại Việt\u00A0Nam vẫn phụ thuộc chủ yếu vào phương tiện cá nhân và taxi công nghệ, dễ gây ùn tắc cục bộ quanh sân vận\u00A0động.",
    solutionLink: "Gắn quy hoạch tổ hợp biểu diễn mới với mạng lưới ga Metro & xe buýt\u00A0nhanh",
  },
  {
    number: "05",
    title: "Quy trình thủ tục và sự thiếu vắng hệ thống dữ liệu minh\u00A0bạch",
    summary:
      "Dù thủ tục cấp phép biểu diễn đã có nhiều bước cải thiện tích cực, các nhà đầu tư nước ngoài vẫn mong đợi cơ chế \"một cửa\" nhanh gọn hơn về thị thực làm việc, tạm nhập tái xuất thiết bị và ưu đãi thuế nhà thầu. Đồng thời, như các đạo diễn Việt Tú và Phạm Hoàng Nam chỉ ra, Việt\u00A0Nam vẫn thiếu bộ chỉ số đo lường chính thức về doanh thu vé, tỷ lệ lấp đầy và đóng góp kinh tế của từng sự kiện để thuyết phục các hãng giải trí toàn\u00A0cầu.",
    solutionLink: "Cơ chế \"Một cửa\" quốc tế & Bản đồ số Văn hóa / IFPI / Billboard\u00A0Vietnam",
  },
];

// [VỊ TRÍ 11] VIDEO ĐỒ HỌA GIẢI THÍCH (MOTION GRAPHIC 90 GIÂY)
export const MOTION_GRAPHIC_90S_SCENES: MotionGraphicScene[] = [
  {
    id: "mg-scene-1",
    timecode: "00:00 – 00:20",
    startSec: 0,
    endSec: 20,
    stageTitle: "PHÂN CẢNH 1 • BÀI TOÁN ĐẶT CỌC (MINIMUM GUARANTEE)",
    headline: "Khởi điểm đàm phán: 2.000.000 USD phí bảo\u00A0lãnh\u00A0cứng",
    narrative:
      "Một Promoter tại Việt\u00A0Nam muốn mời Ngôi sao Quốc tế hạng A (Artist X) đưa Hà\u00A0Nội hoặc TP.HCM vào lịch trình World\u00A0Tour châu\u00A0Á. Ngay trên bàn đàm phán với đại diện toàn cầu (Agency), nhà tổ chức phải cam kết khoản phí bảo lãnh tối thiểu (Minimum Guarantee) 2 triệu USD tiền mặt trước khi bán tấm vé\u00A0đầu\u00A0tiên.",
    visualCue: "Đồ họa chuyển động: Bản hợp đồng quốc tế đóng dấu 2.000.000 USD chuyển sang đồng hồ đếm ngược ngân sách của Promoter\u00A0nội\u00A0địa.",
  },
  {
    id: "mg-scene-2",
    timecode: "00:20 – 00:50",
    startSec: 20,
    endSec: 50,
    stageTitle: "PHÂN CẢNH 2 • VƯỢT QUA 3 \"TRẠM THU PHÍ\" ĐỘI GIÁ",
    headline: "Chi phí sản xuất phình to khi về tới mặt bằng\u00A0Việt\u00A0Nam",
    narrative:
      "Thay vì cắm thiết bị vào một Indoor Arena có sẵn như tại Singapore hay Bangkok, ngân sách của Promoter Việt\u00A0Nam lập tức bị bào mòn qua 3 trạm chi phí phát sinh mang tính\u00A0cấu\u00A0trúc:",
    costCheckpoints: [
      {
        station: "TRẠM 01",
        title: "Dựng hạ tầng sân bãi từ con\u00A0số\u00A00",
        detail: "Thuê mặt bằng ngoài trời + lắp dựng toàn bộ giàn giáo khán đài, sàn bảo vệ cỏ, hàng rào an ninh và trạm điện\u00A0dự\u00A0phòng.",
        costImpact: "+35% chi phí mặt bằng",
      },
      {
        station: "TRẠM 02",
        title: "Nhập khẩu thiết bị khớp Technical\u00A0Rider",
        detail: "Vận chuyển hệ thống loa, đèn, bàn điều khiển chuyên biệt từ Singapore / Thái\u00A0Lan về vì kho thiết bị nội địa chưa đồng bộ\u00A0mã\u00A0chuẩn.",
        costImpact: "+25% phí logistics & hải quan",
      },
      {
        station: "TRẠM 03",
        title: "Bảo hiểm rủi ro thời tiết ngoài\u00A0trời",
        detail: "Phí bảo hiểm sự kiện và phương án mái che/bạt chống mưa khẩn cấp do thiếu sân vận động mái vòm\u00A0đóng\u00A0mở.",
        costImpact: "+15% phí dự phòng rủi ro",
      },
    ],
    visualCue: "Đồ họa 3 cổng trạm thu phí bật sáng đỏ liên tiếp làm thanh chi phí sản xuất vọt vượt ngưỡng\u00A0an\u00A0toàn.",
  },
  {
    id: "mg-scene-3",
    timecode: "00:50 – 01:30",
    startSec: 50,
    endSec: 90,
    stageTitle: "PHÂN CẢNH 3 • THẾ TIẾN THOÁI LƯỠNG NAN CỦA GIÁ VÉ",
    headline: "Đẩy giá vé thì vượt sức mua đại chúng — Giữ giá thấp thì Promoter cầm chắc\u00A0phần\u00A0lỗ",
    narrative:
      "Khi tổng chi phí đội lên quá cao, Promoter rơi vào bài toán cân não: Nếu đẩy mặt bằng giá vé trung bình lên quá cao để tự hòa vốn thì vượt quá khả năng chi trả của tệp khán giả đại chúng (ARPU nhạc số 5,44 USD), dẫn tới nguy cơ trống khán đài. Ngược lại, nếu giữ giá vé dễ tiếp cận mà không có một Tập đoàn hay Ngân hàng lớn đứng ra gánh gói tài trợ hàng chục tỷ đồng, nhà tổ chức cầm chắc phần\u00A0lỗ\u00A0nặng.",
    visualCue: "Đồ họa bàn cân hai đầu: Một bên là \"Giá vé vượt trần sức mua\", một bên là \"Biên lợi nhuận âm nếu thiếu Nhà tài\u00A0trợ\u00A0lớn\".",
  },
];

// MA TRẬN BỔ SUNG: GIẢI PHÁP DỰA TRÊN 5 ĐIỂM NGHẼN HỆ THỐNG (CHƯƠNG 4)
export const BOTTLENECK_TO_SOLUTION_MATRIX: BottleneckSolutionPair[] = [
  {
    id: "sol-1",
    bottleneck: "Thiếu Arena mái che 15.000–20.000 chỗ & Stadium chuẩn âm\u00A0học",
    pillarTag: "Trụ cột PPP Hạ tầng",
    solutionTitle: "Quy hoạch Tổ hợp biểu diễn – thể thao – thương mại đa năng có mái\u00A0che",
    actionDetail:
      "Nhân rộng mô hình Hợp tác Công – Tư (PPP đã chiếm 17,8% sự kiện năm 2025) để đầu tư các Indoor Arena và Stadium mái vòm tại Hà\u00A0Nội, TP.HCM, Đà\u00A0Nẵng thay vì để nhà sản xuất tự dựng giàn giáo tạm ngoài\u00A0trời.",
    milestoneMetric: "Mô hình PPP dẫn dắt đại nhạc hội 60.000 khách chào mừng Ngày Văn hóa VN 24/11 tại Mỹ\u00A0Đình.",
  },
  {
    id: "sol-2",
    bottleneck: "Thủ tục thị thực, tạm nhập tái xuất thiết bị & thuế nhà thầu phức\u00A0tạp",
    pillarTag: "Trụ cột Thể chế 80-NQ/TW",
    solutionTitle: "Cơ chế \"Một cửa\" liên thông quốc tế & ưu đãi thuế du lịch âm\u00A0nhạc",
    actionDetail:
      "Rút gọn quy trình thẩm định hồ sơ biểu diễn quốc tế, luồng xanh hải quan cho container thiết bị sân khấu lưu diễn tạm nhập tái xuất và gói ưu đãi thuế cho đại nhạc hội gắn xúc tiến du lịch quốc\u00A0gia.",
    milestoneMetric: "Hành lang từ Nghị quyết 80-NQ/TW & gói 122.000 tỷ đồng giai đoạn\u00A02025–2030.",
  },
  {
    id: "sol-3",
    bottleneck: "Ùn tắc giải tỏa 40.000–60.000 khán giả sau giờ\u00A0diễn",
    pillarTag: "Trụ cột Đô thị TOD",
    solutionTitle: "Kết nối trực tiếp điểm diễn với mạng lưới Metro & xe buýt nhanh lệch\u00A0giờ",
    actionDetail:
      "Tích hợp quy hoạch tổ hợp sự kiện ngay trên trục các tuyến đường sắt đô thị tại Hà\u00A0Nội và TP.HCM; thiết lập quy chuẩn vận hành tàu Metro/xe buýt tăng cường sau 23h00 đáp ứng tiêu chuẩn bảo hiểm quốc\u00A0tế.",
    milestoneMetric: "Đáp ứng chuẩn giải tỏa đám đông an toàn trong vòng 60 phút sau đêm\u00A0nhạc.",
  },
  {
    id: "sol-4",
    bottleneck: "Phụ thuộc thiết bị nhập khẩu, thiếu IP dài hạn & rác thải sự\u00A0kiện",
    pillarTag: "Trụ cột Glocalization",
    solutionTitle: "Lấy \"concert nội sinh\" làm thao trường chuẩn hóa nhân lực, thiết bị & IP\u00A0xanh",
    actionDetail:
      "Rèn luyện đội ngũ đạo diễn, kỹ sư âm thanh – ánh sáng, liên doanh kho thiết bị đạt chuẩn Technical Rider ngay trong nước; xây dựng 5 thương hiệu lễ hội văn hóa – âm nhạc quốc tế đi kèm tiêu chuẩn \"Âm nhạc\u00A0xanh\".",
    milestoneMetric: "Mục tiêu 5 thương hiệu lễ hội quốc tế & Top 3 ASEAN về Soft Power Index năm\u00A02030.",
  },
  {
    id: "sol-5",
    bottleneck: "Thiếu hệ thống đo lường doanh thu vé & tỷ lệ lấp đầy minh\u00A0bạch",
    pillarTag: "Trụ cột Hạ tầng dữ liệu",
    solutionTitle: "Chuẩn hóa dữ liệu thị trường qua Bản đồ số Văn hóa & Bảng xếp hạng quốc\u00A0tế",
    actionDetail:
      "Kết nối dữ liệu từ 13 nền tảng bán vé trực tuyến (Ticketbox, Eventista/1Zone hỗ trợ 200+ phương thức thanh toán tại 145 quốc gia) với Nền tảng Bản đồ số Văn hóa Việt\u00A0Nam, IFPI Official Vietnam Chart và Billboard\u00A0Vietnam.",
    milestoneMetric: "Ra mắt Nền tảng Bản đồ số Văn hóa Việt\u00A0Nam (11/2026), IFPI Chart & Billboard\u00A0Vietnam.",
  },
];

// [VỊ TRÍ 12] TRÍCH DẪN NỔI BẬT (LOKI VŨ & CA SĨ TÙNG DƯƠNG)
export const EXPERT_QUOTES: ExpertQuoteCard[] = [
  {
    id: "q-loki-vu",
    speaker: "Ông Loki Vũ",
    title: "Tổng Giám đốc SCBC Vietnam & Novel\u00A0Production",
    quote:
      "Làm concert quy mô lớn tại Việt\u00A0Nam giống như “đi khai phá vùng đất mới”: thiếu mức giá sàn, thiếu quy trình chuẩn và liên tục phát sinh chi phí ngầm, dẫn đến nghịch lý có những đêm nhạc bán sạch vé nhưng nhà tổ chức vẫn đứng trước nguy cơ thua\u00A0lỗ.",
    source: "Báo cáo Tổng quan ngành công nghiệp âm nhạc Việt Nam 2025–2026 (Đại học RMIT Việt Nam)",
    accentColor: "#F59E0B",
  },
  {
    id: "q-tung-duong",
    speaker: "Ca sĩ Tùng Dương",
    title: "Nghệ sĩ biểu diễn tại SVĐ Quốc gia Mỹ\u00A0Đình",
    quote:
      "Vì thiếu sân vận động có mái che phù hợp, chỉ cần một cơn mưa bất chợt cũng đủ khiến nhà sản xuất phải đập đi làm lại toàn bộ phương án sân\u00A0khấu.",
    source: "Znews",
    accentColor: "#0284C7",
  },
];

// [VỊ TRÍ 13] BOX THĂM DÒ ĐỘC GIẢ (INTERACTIVE POLL)
export const READER_POLL_CONFIG = {
  question:
    "Theo bạn, điểm nghẽn nào cần được ưu tiên tháo gỡ đầu tiên để Việt\u00A0Nam trở thành điểm dừng chân thường xuyên của các World\u00A0Tour\u00A0quốc\u00A0tế?",
  options: [
    {
      id: "poll-venue",
      label: "Đầu tư nhà thi đấu đa năng có mái che (15.000–20.000 chỗ) và nâng cấp SVĐ gắn kết nối Metro/xe\u00A0buýt.",
      tag: "Hạ tầng vật lý & Giao thông",
      initialVotes: 3960,
    },
    {
      id: "poll-policy",
      label: "Thiết lập cơ chế “một cửa” liên thông cấp phép biểu diễn, thị thực nghệ sĩ và tạm nhập tái xuất thiết\u00A0bị.",
      tag: "Thủ tục hành chính",
      initialVotes: 2580,
    },
    {
      id: "poll-supply",
      label: "Ưu đãi thuế TNDN, lập quỹ đầu tư văn hóa và nội địa hóa chuỗi cung ứng âm thanh – ánh\u00A0sáng.",
      tag: "Tài chính & Chuỗi cung ứng",
      initialVotes: 1875,
    },
    {
      id: "poll-data",
      label: "Xây dựng hệ thống dữ liệu thị trường minh bạch về doanh thu vé, tỷ lệ lấp đầy và bảng xếp\u00A0hạng.",
      tag: "Dữ liệu thị trường",
      initialVotes: 1584,
    },
  ] as PollOption[],
};

// BẢNG NGUỒN 1: TỪ BÁO CÁO RMIT 2025–2026 (CHỈ GIỮ CÁC DỮ LIỆU SỬ DỤNG TRONG BÀI MỚI)
export const RMIT_PDF_SOURCES: RmitSourceRow[] = [
  {
    id: "rmit-1",
    factUsed:
      "Cả nước ghi nhận hơn 810 sự kiện âm nhạc trong năm 2025; 60,9% khán giả được khảo sát sẵn sàng trả tiền mua vé xem biểu diễn trực tiếp.",
    pdfLocation: "Trang 27 & Trang 30 (Báo cáo RMIT 2025–2026).",
    originalSourceNote:
      "Bộ dữ liệu sự kiện âm nhạc 2025 và khảo sát sơ cấp định lượng (N=471) của Trường Đại học RMIT Việt Nam.",
  },
  {
    id: "rmit-2",
    factUsed:
      "Tương quan nguồn gốc nghệ sĩ & quy mô khán giả năm 2025:\n• Phân khúc đại nhạc hội 10.000–40.000 khán giả: 101 sự kiện nội địa độc lập so với 4 sự kiện quốc tế độc lập (và 12 sự kiện kết hợp).\n• Phân khúc siêu sự kiện trên 40.000 khán giả: 16 sự kiện nội địa so với 3 sự kiện quốc tế độc lập (và 1 sự kiện kết hợp).",
    pdfLocation:
      "Trang 30 (Biểu đồ Tương quan giữa nguồn gốc nghệ sĩ biểu diễn và lượng khán giả tham dự).",
    originalSourceNote: "Bộ dữ liệu sự kiện của nhóm nghiên cứu Trường Đại học RMIT Việt Nam.",
  },
  {
    id: "rmit-3",
    factUsed:
      "So sánh cuộc đua khu vực Đông Nam Á:\n• Singapore: 4 đêm diễn độc quyền châu Á của Lady Gaga bán ra 193.000 vé, đóng góp ước tính 100–150 triệu USD cho ngành du lịch.\n• Thái Lan: Chiến lược IGNITE Thailand và thành lập Học viện Lễ hội.\n• Indonesia: Quỹ Du lịch 86 triệu USD hỗ trợ thu hút nghệ sĩ nước ngoài.\n• Malaysia: Mục tiêu 450 sự kiện âm nhạc.",
    pdfLocation: "Trang 14 & 15 (Các điểm nhấn thị trường âm nhạc Đông Nam Á).",
    originalSourceNote:
      "The Straits Times, ZULA, Travel and Tour World (dẫn lại trong Báo cáo RMIT 2025–2026).",
  },
  {
    id: "rmit-4",
    factUsed:
      "Doanh thu nhạc số bình quân trên mỗi người dùng (ARPU) dự báo đến năm 2030: Việt Nam ước đạt 5,44 USD/người — đứng thứ 6 Đông Nam Á, cách rất xa Singapore (45,38 USD), Philippines (14,52 USD), Thái Lan (12,06 USD), Malaysia (10,76 USD) và Indonesia (5,48 USD).",
    pdfLocation: "Trang 11 (So sánh dự báo thị trường nhạc số theo quốc gia 2030).",
    originalSourceNote: "Statista Market Insights (trích dẫn trong Báo cáo RMIT 2025–2026).",
  },
  {
    id: "rmit-5",
    factUsed:
      "Nhận định của ông Loki Vũ (Tổng Giám đốc SCBC Vietnam & Novel Production) về việc tổ chức concert quy mô lớn tại Việt Nam giống như “đi khai phá vùng đất mới”: thiếu giá sàn, thiếu quy trình chuẩn, phát sinh chi phí ngầm.",
    pdfLocation: "Báo cáo Tổng quan ngành công nghiệp âm nhạc Việt Nam 2025–2026.",
    originalSourceNote: "Phỏng vấn chuyên gia trong Báo cáo RMIT Việt Nam.",
  },
  {
    id: "rmit-6",
    factUsed:
      "Nguồn lực 122.000 tỷ đồng cho Chương trình Mục tiêu Quốc gia về Phát triển Văn hóa giai đoạn 2025–2030; thương vụ hợp tác chiến lược giữa Sony Music và YeaH1; hệ thống bảng xếp hạng (IFPI Official Vietnam Chart, Billboard Vietnam) và nền tảng bán vé công nghệ (Ticketbox, Eventista/1Zone).",
    pdfLocation: "Trang 13, 17, 56, 62, 73–74 (Báo cáo RMIT 2025–2026).",
    originalSourceNote: "Tổng hợp từ Báo cáo RMIT 2025–2026.",
  },
];

// BẢNG NGUỒN 2: BÁO CHÍ CHÍNH THỐNG, CHUYÊN GIA & CHÍNH SÁCH (ĐỐI KHỚP ĐÚNG BÀI MỚI)
export const PRESS_POLICY_SOURCES: PressPolicySourceRow[] = [
  {
    id: "press-1",
    category: "press",
    categoryLabel: "Thị trường nội địa 2026",
    factUsed:
      "Trong 9 tháng đầu năm 2026, TP.HCM đã tiếp nhận, thẩm định và chấp thuận 1.064 hồ sơ hoạt động nghệ thuật biểu diễn, trong đó có 944 chương trình nghệ thuật, sân khấu.",
    articleSource:
      "Thống kê công bố tại Hội nghị tổng kết hoạt động văn nghệ TP.HCM (Tháng 10/2026).",
    authorityOrExpert: "Sở Văn hóa và Thể thao TP.HCM.",
  },
  {
    id: "press-2",
    category: "press",
    categoryLabel: "Thị trường nội địa 2026",
    factUsed:
      "Quy mô các chương trình nội địa nổi bật:\n• Anh Trai Vượt Ngàn Chông Gai 2026 (2 đêm tại TP.HCM): gần 100.000 khán giả.\n• Tổ Quốc Trong Tim 2026: hơn 40.000 khán giả tại sân khấu chính.\n• V Concert – Rạng Rỡ Việt Nam: khoảng 25.000 khán giả tại Hà Nội.\n• Đại nhạc hội chào mừng Ngày Văn hóa Việt Nam 24/11 tại Hà Nội: quy mô dự kiến 60.000 người.",
    articleSource: "VTV Online, Báo Nhân Dân, VietnamPlus, Đại biểu Nhân dân (2025–2026).",
    authorityOrExpert: "Ban tổ chức các chương trình & Bộ VHTTDL.",
  },
  {
    id: "press-3",
    category: "international",
    categoryLabel: "Sự kiện quốc tế 2025–2026",
    factUsed:
      "Các sự kiện âm nhạc quốc tế quy mô lớn tại Việt Nam:\n• 8Wonder: Moments of Wonder (23/8/2025, Hà Nội): hơn 50.000 khán giả (J Balvin, Tlinh...).\n• G-DRAGON 2025 WORLD TOUR [Übermensch] in Hanoi (8–9/11/2025, Vinhomes Ocean Park 3): gần 100.000 khán giả trong 2 đêm.\n• BIGBANG kỷ niệm 20 năm tại SVĐ Mỹ Đình (tháng 10/2026): khoảng 90.000 lượt khán giả.",
    articleSource:
      "Báo Thanh Niên, Đài Tiếng nói Việt Nam (VOV), Báo Tiền Phong (2025–2026).",
    authorityOrExpert: "Đơn vị tổ chức (Vingroup, VPBank, AEG Presents Asia) & cơ quan báo chí.",
  },
  {
    id: "press-4",
    category: "international",
    categoryLabel: "Sự kiện quốc tế 2025–2026",
    factUsed:
      "Sức bật du lịch từ 2 đêm diễn BIGBANG tại Hà Nội (tháng 10/2026): du lịch Hà Nội đón khoảng 220.000 lượt khách (gồm gần 68.000 khách quốc tế), mang về tổng thu ước tính 750 tỷ đồng.",
    articleSource: "VTV, VnExpress dẫn số liệu thống kê chính thức (Tháng 10/2026).",
    authorityOrExpert: "Sở Du lịch Hà Nội.",
  },
  {
    id: "press-5",
    category: "press",
    categoryLabel: "Chuyên gia & Hạ tầng",
    factUsed:
      "Nhận diện điểm nghẽn hạ tầng và dữ liệu:\n• Ca sĩ Tùng Dương: thiếu sân vận động có mái che phù hợp, chỉ cần một cơn mưa bất chợt cũng đủ khiến nhà sản xuất phải đập đi làm lại toàn bộ phương án sân khấu.\n• Đạo diễn Việt Tú & đạo diễn Phạm Hoàng Nam: thiếu hệ thống thống kê chính thức, minh bạch về doanh thu vé, tỷ lệ lấp đầy và tác động kinh tế.\n• Thực trạng ùn tắc giao thông quanh SVĐ Mỹ Đình hơn 1 giờ sau đêm diễn BIGBANG (25/10/2026).",
    articleSource: "Znews, Báo Nhân Dân, Báo Tiền Phong (Tháng 10/2026).",
    authorityOrExpert: "Ca sĩ Tùng Dương, Đạo diễn Việt Tú, Đạo diễn Phạm Hoàng Nam.",
  },
  {
    id: "press-6",
    category: "policy",
    categoryLabel: "Nghị quyết 80-NQ/TW & 3 Giải pháp",
    factUsed:
      "Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam (ban hành ngày 07/01/2026):\n• Mục tiêu đến năm 2030: công nghiệp văn hóa đóng góp 7% GDP và xây dựng 5 thương hiệu liên hoan nghệ thuật, lễ hội văn hóa quốc tế.\n• 3 nhóm giải pháp thực thi: (1) Đầu tư tổ hợp biểu diễn đạt chuẩn qua PPP gắn quy hoạch giao thông đô thị (Metro, xe buýt); (2) Ưu đãi đất đai, miễn giảm thuế TNDN, lập quỹ đầu tư văn hóa & nội địa hóa chuỗi cung ứng; (3) Chuyển mạnh từ “tiền kiểm sang hậu kiểm”, cơ chế “một cửa” liên thông và Nền tảng Bản đồ số Văn hóa Việt Nam (công bố tháng 11/2026).",
    articleSource:
      "Nghị quyết số 80-NQ/TW của Bộ Chính trị (07/01/2026) & Báo Nhân Dân, Đại biểu Nhân dân.",
    authorityOrExpert: "Bộ Chính trị, Quốc hội & Bộ Văn hóa, Thể thao và Du lịch.",
  },
];
