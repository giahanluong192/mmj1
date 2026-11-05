/**
 * HỒ SƠ DỮ LIỆU & NỘI DUNG BÁO CHÍ DỮ LIỆU ĐA PHƯƠNG TIỆN (DATA JOURNALISM & SCROLLYTELLING)
 * ĐỀ TÀI: BẢN ĐỒ CONCERT VIỆT NAM: SỨC BẬT NỘI SINH
 * -----------------------------------------------------------------------------------------
 * Nguồn dữ liệu đối chiếu:
 * 1. Báo cáo Tổng quan ngành công nghiệp âm nhạc Việt Nam 2025–2026 (Đại học RMIT Việt Nam)
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
  ageAndRole: string;
  route: string;
  concertAttended: string;
  durationSec: number;
  totalCost: string;
  costBreakdown: { item: string; amount: string }[];
  quote: string;
  worthItReason: string;
  waveformHeights: number[];
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
  factUsed: string;
  articleSource: string;
  authorityOrExpert: string;
}

export const ARTICLE_META = {
  category: "BÁO CHÍ DỮ LIỆU ĐA PHƯƠNG TIỆN • MULTIMEDIA DATA JOURNALISM",
  specialIssue: "CHUYÊN ĐỀ CÔNG NGHIỆP VĂN HÓA VIỆT NAM 2025–2026",
  titleMain: "BẢN ĐỒ CONCERT VIỆT\u00A0NAM:",
  titleAccent: "SỨC BẬT NỘI\u00A0SINH",
  // Sapo ngắn gọn, đi thẳng vào nội dung chính và tương quan dữ liệu theo chuẩn báo chí dữ liệu
  sapo: "Hơn 810 sự kiện âm nhạc bùng nổ trong một năm cùng những đại nhạc hội nội địa 20.000–50.000 khán giả liên tục “cháy vé” chỉ sau vài chục phút mở bán đang đưa thị trường biểu diễn Việt\u00A0Nam bước vào độ chín chưa từng có. Thế nhưng, đằng sau những khán đài rực sáng ấy là dấu hỏi về tính bền vững của chuỗi giá trị kinh tế địa phương và một thực tế đáng suy ngẫm: Vì sao trên bản đồ World\u00A0Tour toàn cầu của các siêu sao quốc tế, Việt\u00A0Nam vẫn là điểm dừng chân đầy\u00A0thách\u00A0thức?",
  publishDate: "Tháng 11/2026",
  author: "Nhóm 01",
  advisor: "ThS. Nguyễn Thanh Liêm",
  readTime: "10 phút",
  footageCredits:
    "Nguồn tư liệu hình ảnh & đối chiếu footage: Ban tổ chức Anh Trai Vượt Ngàn Chông Gai (YeaH1), Anh Trai \"Say Hi\" (Vie Channel / DatVietVAC), Concert Quốc gia Tổ Quốc Trong Tim & V-Concert (Báo Nhân Dân, VTV).",
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
    detail: "Đạt đỉnh vào tháng 8/2025 với 108 sự kiện; nhóm quy mô lớn (>5.000 khách) chiếm\u00A023,8%.",
    source: "Báo cáo RMIT 2025–2026 (Tr. 30)",
    accent: "cyan",
  },
  {
    id: "m2",
    value: "944",
    unit: "chương trình",
    label: "Biểu diễn nghệ thuật tại\u00A0TP.HCM",
    detail: "Thuộc 1.064 hồ sơ hoạt động nghệ thuật biểu diễn được thẩm định, chấp thuận trong 9 tháng\u00A0đầu\u00A02026.",
    source: "Sở VH&TT TP.HCM (10/2026)",
    accent: "magenta",
  },
  {
    id: "m3",
    value: "101 : 4",
    unit: "nội địa vs. quốc tế",
    label: "Chênh lệch ở phân khúc 10k–40k\u00A0khách",
    detail: "Nghệ sĩ nội địa làm chủ 101 đại nhạc hội, trong khi show độc lập của sao quốc tế chỉ\u00A0có\u00A04.",
    source: "Báo cáo RMIT 2025–2026 (Tr. 30)",
    accent: "gold",
  },
  {
    id: "m4",
    value: "122.000",
    unit: "tỷ đồng",
    label: "Nguồn lực phát triển văn\u00A0hóa\u00A02025–2030",
    detail: "Cùng Nghị quyết 80-NQ/TW hướng tới mục tiêu công nghiệp văn hóa đóng góp 7% GDP vào\u00A0năm\u00A02030.",
    source: "Quốc hội & Nghị quyết 80-NQ/TW",
    accent: "redstar",
  },
];

// [VỊ TRÍ 2] BIỂU ĐỒ 1: QUY MÔ SỰ KIỆN & CÁC CONCERT TIÊU BIỂU
export const EVENT_SCALE_DISTRIBUTION: EventScaleSlice[] = [
  {
    id: "s-1k-5k",
    scaleLabel: "1.000 – 5.000 người",
    percentage: 31.5,
    isLargeScale: false,
    color: "#38BDF8",
    note: "Phân khúc xương sống tại các nhà thi đấu, trung tâm hội nghị và không gian ngoài trời tầm trung.",
  },
  {
    id: "s-200-500",
    scaleLabel: "200 – 500 người",
    percentage: 27.7,
    isLargeScale: false,
    color: "#6366F1",
    note: "Mini-show, livehouse, phòng trà và đêm nhạc indie định kỳ tại các đô thị lớn.",
  },
  {
    id: "s-500-1k",
    scaleLabel: "500 – 1.000 người",
    percentage: 17.0,
    isLargeScale: false,
    color: "#8B5CF6",
    note: "Fan meeting, showcase ra mắt album và không gian âm nhạc du lịch như Đà Lạt, Huế.",
  },
  {
    id: "s-10k-40k",
    scaleLabel: "10.000 – 40.000 người",
    percentage: 14.6,
    isLargeScale: true,
    color: "#EC4899",
    note: "Đại nhạc hội sân vận động & khu đô thị mở — động lực tăng trưởng đột phá nhất giai đoạn 2024–2026.",
  },
  {
    id: "s-5k-10k",
    scaleLabel: "5.000 – 10.000 người",
    percentage: 6.7,
    isLargeScale: true,
    color: "#F59E0B",
    note: "Liveshow cá nhân quy mô nhà thi đấu lớn và lễ hội âm nhạc kết hợp thương hiệu.",
  },
  {
    id: "s-over-40k",
    scaleLabel: "Trên 40.000 người",
    percentage: 2.5,
    isLargeScale: true,
    color: "#DA251D",
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
    speakerName: "Minh Thư",
    ageAndRole: "21 tuổi • Sinh viên năm 4 tại TP. Cần Thơ",
    route: "Cần Thơ → TP.HCM (Xe giường nằm khứ hồi + Lưu trú 2N1Đ)",
    concertAttended: "Anh Trai \"Say Hi\" Concert",
    durationSec: 38,
    totalCost: "4.650.000 VNĐ",
    costBreakdown: [
      { item: "Vé khu vực Fanzone đứng gần sân khấu", amount: "2.200.000 đ" },
      { item: "Xe khách giường nằm khứ hồi + Grab nội đô", amount: "650.000 đ" },
      { item: "Khách sạn 2 đêm (ở ghép nhóm 3 bạn)", amount: "700.000 đ" },
      { item: "Outfit, makeup, lightstick & ăn uống", amount: "1.100.000 đ" },
    ],
    quote:
      "Tổng chuyến đi từ Cần Thơ lên TP.HCM vừa rồi của mình hết khoảng 4,65 triệu đồng — bằng gần hai tháng tiền làm thêm gia sư. Nhưng khoảnh khắc 30.000 người cùng hòa giọng hát tiếng Việt dưới biển lightstick đổi màu tự động khiến mình nổi da gà. Trước đây tụi mình cứ nghĩ phải bay sang Bangkok mới có cảm giác concert đẳng cấp như vậy, giờ ngay ở Việt Nam đã làm được nên mình thấy hoàn toàn xứng đáng!",
    worthItReason: "Cảm giác cộng hưởng trực tiếp cùng hàng chục nghìn khán giả trẻ Việt và chất lượng dàn dựng sân khấu nội địa vượt kỳ vọng.",
    waveformHeights: [
      28, 45, 62, 38, 76, 88, 54, 42, 68, 92, 74, 50, 35, 64, 84, 95, 70, 48, 60, 82,
      66, 40, 55, 78, 90, 62, 46, 72, 85, 58, 36, 65, 80, 52, 44, 68, 50, 32,
    ],
  },
  {
    id: "vox-2",
    speakerName: "Hoàng Khang",
    ageAndRole: "24 tuổi • Nhân viên thiết kế truyền thông tại TP.HCM",
    route: "TP.HCM → Hà Nội / Hưng Yên (Vé máy bay khứ hồi + 3N2Đ)",
    concertAttended: "Anh Trai Vượt Ngàn Chông Gai",
    durationSec: 42,
    totalCost: "9.800.000 VNĐ",
    costBreakdown: [
      { item: "Vé hạng ghế ngồi tầm nhìn trực diện", amount: "3.500.000 đ" },
      { item: "Vé máy bay khứ hồi TP.HCM – Hà Nội", amount: "3.400.000 đ" },
      { item: "Lưu trú homestay 2 đêm & di chuyển liên tỉnh", amount: "1.600.000 đ" },
      { item: "Áo merch chính hãng, cổ phục cách tân & ẩm thực", amount: "1.300.000 đ" },
    ],
    quote:
      "Mình tốn gần 10 triệu đồng cho cả vé concert, vé máy bay khứ hồi từ Sài Gòn ra Bắc, khách sạn và bộ cổ phục cách tân mặc đi xem đêm nhạc. Điều làm mình xúc động nhất không chỉ là âm nhạc mà là cảnh hàng chục nghìn bạn trẻ mặc áo dài, Việt phục hát vang các làn điệu dân gian được phối mới hiện đại. Mình sẵn sàng kết hợp nghỉ phép để biến chuyến đi xem concert thành kỳ du lịch khám phá ẩm thực mùa thu Hà Nội luôn.",
    worthItReason: "Sự giao thoa giữa bản sắc văn hóa dân tộc với công nghệ trình diễn hiện đại, kết hợp trọn vẹn một chuyến du lịch âm nhạc liên vùng.",
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
    title: "Lưu trú & Khách sạn",
    shortTitle: "Lưu trú & Khách sạn",
    icon: "🏨",
    color: "#38BDF8",
    angleDeg: -90,
    beneficiaries: "Khách sạn 3–5 sao, căn hộ dịch vụ, homestay bán kính 5–15km quanh điểm diễn.",
    spendingExamples: "Công suất phòng lấp đầy 85–100% dịp cuối tuần diễn ra đại nhạc hội; khán giả liên tỉnh thường lưu trú 1–2 đêm.",
    spilloverNote: "Tạo nguồn thu trực tiếp cho bất động sản du lịch địa phương thay vì chỉ bán vé trong sân.",
  },
  {
    id: "transport",
    code: "02",
    title: "Hàng không & Vận tải nội đô",
    shortTitle: "Hàng không & Vận tải",
    icon: "✈️",
    color: "#818CF8",
    angleDeg: -18,
    beneficiaries: "Hãng hàng không, đường sắt, xe khách liên tỉnh, taxi và ứng dụng gọi xe công nghệ (Grab/Xanh SM/Be).",
    spendingExamples: "Tăng vọt các chặng bay TP.HCM ↔ Hà Nội, Đà Nẵng và hàng chục nghìn cuốc xe di chuyển giờ cao điểm trước – sau giờ G.",
    spilloverNote: "Kích hoạt dòng dịch chuyển hành khách nội địa trái mùa thấp điểm du lịch.",
  },
  {
    id: "fnb",
    code: "03",
    title: "Ẩm thực (F&B quanh điểm diễn)",
    shortTitle: "Ẩm thực (F&B)",
    icon: "🍜",
    color: "#F59E0B",
    angleDeg: 54,
    beneficiaries: "Gian hàng F&B nội khu sự kiện, chuỗi cà phê hộp họp FC (off-fan), nhà hàng đặc sản địa phương.",
    spendingExamples: "Từ các buổi café phát quà miễn phí (freebies) trước giờ diễn đến các bữa ăn đêm sau 23h00 của hàng vạn khán giả.",
    spilloverNote: "Lan tỏa doanh thu trực tiếp đến hộ kinh doanh nhỏ lẻ và chuỗi dịch vụ ăn uống bản địa.",
  },
  {
    id: "fashion-merch",
    code: "04",
    title: "Thời trang, Makeup & Merchandise",
    shortTitle: "Thời trang & Merch",
    icon: "👕",
    color: "#EC4899",
    angleDeg: 126,
    beneficiaries: "Local brand thời trang, thợ trang điểm/làm tóc, xưởng in ấn vật phẩm Prosumer Fan Projects.",
    spendingExamples: "56,1% nhóm mua merch chi từ 500.000đ đến >1 triệu đồng/tháng cho lightstick, áo concert, quạt, card bo góc, Việt phục.",
    spilloverNote: "Hình thành nền kinh tế sáng tạo vi mô vận hành bởi chính cộng đồng người hâm mộ chuyên nghiệp.",
  },
  {
    id: "ooh-media",
    code: "05",
    title: "Quảng cáo ngoài trời (LED / Roadshow FC)",
    shortTitle: "OOH & LED Fan Project",
    icon: "🏙️",
    color: "#10B981",
    angleDeg: 198,
    beneficiaries: "Đơn vị khai thác màn hình LED tòa nhà, trung tâm thương mại, xe buýt 2 tầng, photobooth.",
    spendingExamples: "Các FC tự gây quỹ hàng trăm triệu đồng thuê màn hình LED cỡ lớn, xe hoa, trạm tiếp sức nghệ sĩ dọc các tuyến phố trung tâm.",
    spilloverNote: "Biến không gian đô thị thành lễ hội thị giác, gia tăng độ nhận diện điểm đến trên mạng xã hội.",
  },
];

// [VỊ TRÍ 6] BẢN ĐỒ NHIỆT: PHÂN BỐ SỰ KIỆN & KHẢ NĂNG GIỮ CHÂN DU KHÁCH
export const VIETNAM_HEATMAP_HUBS: HeatmapHub[] = [
  {
    id: "hanoi-hungyen",
    city: "Hà Nội & Vùng ven Hưng Yên",
    clusterType: "high-density",
    clusterLabel: "Cực tăng trưởng mật độ cao",
    x: 215,
    y: 128,
    heatRadius: 42,
    flagshipEvents: "Concert Quốc gia (Tổ Quốc Trong Tim, V-Concert, Đại nhạc hội Ngày Văn hóa VN 24/11 – 60.000 khách), G-Dragon World Tour, Anh Trai Vượt Ngàn Chông Gai, Mỹ Tâm See The Light.",
    eventVolumeStat: "Tâm điểm siêu sự kiện 40.000 – 100.000 khán giả tại SVĐ Mỹ Đình & đại đô thị phía Đông.",
    retentionLevel: "Trung bình – Khá (Khách liên tỉnh lưu trú 1–2 đêm; khách nội vùng ra về ngay trong đêm)",
    retentionScore: 68,
    overnightVsLeaveAnalysis:
      "Thu hút lượng lớn khán giả bay từ TP.HCM và các tỉnh phía Nam lưu trú 2–3 ngày dịp cuối tuần. Tuy nhiên, tại các khu đô thị vùng ven, phần lớn khán giả miền Bắc vẫn di chuyển bằng xe cá nhân/xe ghép và rời điểm diễn ngay sau 23h30 do thiếu tổ hợp giải trí đêm liền kề.",
  },
  {
    id: "quangninh",
    city: "Quảng Ninh (Hạ Long)",
    clusterType: "music-tourism",
    clusterLabel: "Cực du lịch âm nhạc (Music Tourism)",
    x: 262,
    y: 118,
    heatRadius: 24,
    flagshipEvents: "Hạ Long Concert, chuỗi đại nhạc hội quảng trường biển & du thuyền vịnh di sản.",
    eventVolumeStat: "Điểm sáng kết hợp sân khấu thực cảnh vịnh biển và du lịch nghỉ dưỡng cuối tuần.",
    retentionLevel: "Trung bình (Cần tăng sản phẩm trải nghiệm đêm sau concert)",
    retentionScore: 56,
    overnightVsLeaveAnalysis:
      "Nhờ cao tốc kết nối Hà Nội – Hạ Long chỉ khoảng 2 giờ di chuyển, một bộ phận không nhỏ khán giả trẻ chọn phương án đi – về trong ngày nếu sự kiện không gắn kèm gói combo du thuyền, ẩm thực đêm hoặc lễ hội kéo dài nhiều ngày.",
  },
  {
    id: "quangbinh",
    city: "Quảng Bình",
    clusterType: "music-tourism",
    clusterLabel: "Cực du lịch âm nhạc (Music Tourism)",
    x: 238,
    y: 256,
    flagshipEvents: "Legend Fest và các lễ hội âm nhạc biển miền Trung.",
    heatRadius: 20,
    eventVolumeStat: "Đưa đại nhạc hội vào chiến lược kích cầu du lịch biển và khám phá hang động.",
    retentionLevel: "Khá đối với khách xa, nhưng tần suất sự kiện còn thưa theo mùa",
    retentionScore: 58,
    overnightVsLeaveAnalysis:
      "Khán giả ngoại tỉnh đến xem thường kết hợp nghỉ dưỡng 2 ngày 1 đêm, song hiệu ứng kinh tế dễ rơi vào trạng thái \"sáng rực một cuối tuần rồi vắng lặng\" nếu thiếu lịch trình sự kiện định kỳ quanh năm.",
  },
  {
    id: "hue",
    city: "Thừa Thiên Huế",
    clusterType: "music-tourism",
    clusterLabel: "Cực du lịch âm nhạc (Music Tourism)",
    x: 262,
    y: 292,
    heatRadius: 23,
    flagshipEvents: "Mega Booming Huế, chương trình nghệ thuật đương đại gắn với Festival Huế bốn mùa.",
    eventVolumeStat: "Lợi thế di sản Cố đô tạo chất liệu bản sắc khác biệt cho sân khấu biểu diễn.",
    retentionLevel: "Tốt khi gắn kết tour di sản – ẩm thực, thách thức ở dịch vụ giải trí sau 22h",
    retentionScore: 66,
    overnightVsLeaveAnalysis:
      "Du khách xem concert có xu hướng ở lại qua đêm để tham quan Đại Nội, lăng tẩm và thưởng thức ẩm thực Huế. Tuy nhiên, hệ sinh thái kinh tế đêm sau 23h00 vẫn cần mở rộng để giữ dòng chi tiêu tiếp nối sau khi khán giả rời sân khấu.",
  },
  {
    id: "danang",
    city: "Đà Nẵng",
    clusterType: "music-tourism",
    clusterLabel: "Cực du lịch âm nhạc (Music Tourism)",
    x: 284,
    y: 318,
    heatRadius: 28,
    flagshipEvents: "Lễ hội Tận hưởng Đà Nẵng (Enjoy Danang Festival), nhạc hội pháo hoa & biển quốc tế.",
    eventVolumeStat: "Hạ tầng lưu trú biển và sân bay quốc tế đồng bộ hàng đầu miền Trung.",
    retentionLevel: "Cao (Tỷ lệ lưu trú qua đêm 2–3 đêm vượt trội nhờ hệ sinh thái du lịch biển)",
    retentionScore: 82,
    overnightVsLeaveAnalysis:
      "Là hình mẫu kết hợp tốt giữa sự kiện âm nhạc và kỳ nghỉ dưỡng: khán giả hiếm khi chỉ đến xem rồi về ngay mà thường lưu trú 2–3 đêm. Bài toán tiếp theo là phát triển các thương hiệu concert bán vé độc lập thay vì phụ thuộc vào sự kiện miễn phí kích cầu.",
  },
  {
    id: "dalat-lamdong",
    city: "Lâm Đồng – Đà Lạt",
    clusterType: "music-tourism",
    clusterLabel: "Cực du lịch âm nhạc (Music Tourism)",
    x: 282,
    y: 446,
    heatRadius: 26,
    flagshipEvents: "Những Thành Phố Mơ Màng, chuỗi live-session hoàng hôn giữa rừng thông (500 – 5.000 khách).",
    eventVolumeStat: "Thủ phủ du lịch âm nhạc Indie/Pop chữa lành có sức sống định kỳ rõ nét nhất.",
    retentionLevel: "Rất cao (Hơn 80% khán giả từ TP.HCM & các tỉnh lưu trú 2–3 ngày)",
    retentionScore: 86,
    overnightVsLeaveAnalysis:
      "Nhờ định hình được bản sắc IP lễ hội gắn liền với khí hậu và cảnh quan bản địa, khán giả trẻ gần như mặc định mua combo vé nhạc + homestay + cà phê Đà Lạt cuối tuần, tránh được cái bẫy \"pháo hoa một đêm\".",
  },
  {
    id: "tphcm",
    city: "TP. Hồ Chí Minh",
    clusterType: "high-density",
    clusterLabel: "Cực tăng trưởng mật độ cao",
    x: 244,
    y: 492,
    heatRadius: 46,
    flagshipEvents: "Anh Trai Vượt Ngàn Chông Gai, Anh Trai \"Say Hi\", Em Xinh \"Say Hi\", Hà Anh Tuấn Sketch A Rose, Hò Dô (HOZO)...",
    eventVolumeStat: "944 chương trình nghệ thuật, sân khấu được chấp thuận chỉ trong 9 tháng đầu năm 2026 (trên 1.064 hồ sơ).",
    retentionLevel: "Sôi động nhất cả nước về F&B đêm, nhưng thiếu Arena mái che chuẩn quốc tế",
    retentionScore: 78,
    overnightVsLeaveAnalysis:
      "Đầu tàu tiêu dùng văn hóa với dòng khán giả đổ về từ ĐBSCL, Đông Nam Bộ và miền Bắc. Dịch vụ F&B, khách sạn, xe công nghệ hoạt động xuyên đêm hấp thụ tốt sức mua; điểm nghẽn lớn nhất nằm ở việc phải dựng sân khấu tạm ngoài trời và ùn tắc giao thông sau giờ diễn.",
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
    cities: "TP.HCM & Hà Nội",
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
    policyHighlight: "ARPU nhạc số dự báo đạt 5,44 USD; Nghị quyết 80-NQ/TW (1/2026) & gói 122.000 tỷ đồng đang mở ra hành lang pháp lý đột phá mới.",
  },
];

export const SEA_ARPU_2030: ArpuComparisonItem[] = [
  { rank: 1, country: "Singapore", arpuUsd: 45.38, note: "Dẫn đầu khu vực" },
  { rank: 2, country: "Philippines", arpuUsd: 14.52 },
  { rank: 3, country: "Thái Lan", arpuUsd: 12.06 },
  { rank: 4, country: "Malaysia", arpuUsd: 10.76, note: "Hướng tới 450 sự kiện / 1,7 tỷ RM" },
  { rank: 5, country: "Indonesia", arpuUsd: 5.48 },
  { rank: 6, country: "Việt Nam", arpuUsd: 5.44, note: "Hạng 6 ARPU • Hạng 4 quy mô người dùng", isVietnam: true },
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

// [VỊ TRÍ 12] QUOTE CARDS – GÓC NHÌN CHUYÊN GIA & NHÀ QUẢN LÝ
export const EXPERT_QUOTES: ExpertQuoteCard[] = [
  {
    id: "q-bui-hoai-son",
    speaker: "PGS.TS Bùi Hoài Sơn",
    title: "Ủy viên Thường trực Ủy ban Văn hóa, Giáo dục của Quốc\u00A0hội",
    quote:
      "Công nghiệp văn hóa không phải là cuộc đua xem địa phương nào tổ chức concert lớn hơn, mời nhiều ngôi sao hơn hay đầu tư sân khấu hoành tráng hơn. Đó phải là quá trình tạo ra những sản phẩm mà khi nhắc đến, công chúng nhận ra ngay bản sắc và sức hấp dẫn riêng của địa\u00A0phương\u00A0ấy.",
    source: "Báo Tuổi Trẻ (10/2026)",
    accentColor: "#DA251D",
  },
  {
    id: "q-nguyen-van-thang-long",
    speaker: "PGS.TS Nguyễn Văn Thăng Long",
    title: "Đại học RMIT Việt\u00A0Nam",
    quote:
      "Đã đến lúc chúng ta không chỉ tổ chức những sự kiện lớn, mà còn phải xây dựng một nền công nghiệp văn hóa có chiều sâu và\u00A0bản\u00A0sắc.",
    source: "Báo cáo Tổng quan ngành công nghiệp âm nhạc Việt Nam 2025–2026 (RMIT)",
    accentColor: "#0284C7",
  },
  {
    id: "q-loki-vu",
    speaker: "Ông Loki Vũ",
    title: "Tổng Giám đốc SCBC Vietnam & Novel\u00A0Production",
    quote:
      "Ở Việt\u00A0Nam, làm được một concert lớn giống như 'đi khai phá vùng đất mới': không có mức giá sàn, quy trình chuẩn, chi phí phát sinh liên tục và rủi ro tài chính\u00A0rất\u00A0cao.",
    source: "Báo cáo Tổng quan ngành công nghiệp âm nhạc Việt Nam 2025–2026 (RMIT)",
    accentColor: "#D97706",
  },
];

// [VỊ TRÍ 13] BOX THĂM DÒ ĐỘC GIẢ (INTERACTIVE POLL)
export const READER_POLL_CONFIG = {
  question:
    "Theo bạn, yếu tố nào cần được ưu tiên tháo gỡ đầu tiên để Việt\u00A0Nam trở thành điểm đến thường xuyên của các World\u00A0Tour\u00A0quốc\u00A0tế?",
  options: [
    {
      id: "poll-venue",
      label: "Xây dựng các Tổ hợp biểu diễn / Sân vận động có mái che đạt chuẩn\u00A0quốc\u00A0tế.",
      tag: "Hạ tầng sân bãi",
      initialVotes: 412,
    },
    {
      id: "poll-policy",
      label: "Rút gọn thủ tục cấp phép theo cơ chế \"Một cửa\" và ưu\u00A0đãi\u00A0thuế.",
      tag: "Cơ chế & Chính sách",
      initialVotes: 268,
    },
    {
      id: "poll-transit",
      label: "Phát triển giao thông công cộng (Metro/Bus) kết nối trực tiếp đến\u00A0điểm\u00A0diễn.",
      tag: "Giao thông đô thị",
      initialVotes: 195,
    },
    {
      id: "poll-supply",
      label: "Nâng cao năng lực chuỗi cung ứng thiết bị và nhân sự sản xuất\u00A0nội\u00A0địa.",
      tag: "Chuỗi cung ứng & Nhân lực",
      initialVotes: 165,
    },
  ] as PollOption[],
};

// BẢNG NGUỒN 1: TỪ FILE PDF BÁO CÁO RMIT 2025–2026
export const RMIT_PDF_SOURCES: RmitSourceRow[] = [
  {
    id: "rmit-1",
    factUsed: "810+ sự kiện âm nhạc đã diễn ra hoặc được công bố trong năm 2025 (đạt đỉnh vào tháng 8 với 108 sự kiện).",
    pdfLocation: "Trang 30 (Sự kiện âm nhạc Việt Nam 2025 qua những con số).",
    originalSourceNote: "Tổng hợp từ dữ liệu bán vé và truy vấn tin tức đến ngày 08/12/2025 của nhóm nghiên cứu RMIT.",
  },
  {
    id: "rmit-2",
    factUsed:
      "Cơ cấu quy mô sự kiện: 200–500 người (27,7%); 500–1.000 người (17%); 1.000–5.000 người (31,5%); 5.000–10.000 người (6,7%); 10.000–40.000 người (14,6%); Trên 40.000 người (2,5%).",
    pdfLocation: "Trang 30 (Biểu đồ tròn Phân bố quy mô sự kiện).",
    originalSourceNote: "Bộ dữ liệu sự kiện của nhóm nghiên cứu RMIT.",
  },
  {
    id: "rmit-3",
    factUsed:
      "Cơ cấu đơn vị tổ chức: Công ty/Ê-kíp giải trí (49,6%), Đối tác công - tư PPP (17,8%), Nghệ sĩ tự vận hành (16,3%), Doanh nghiệp/thương hiệu chủ trì (13,3%), Khác (3,0%).",
    pdfLocation: "Trang 30 (Biểu đồ tròn Phân bố loại hình sự kiện dựa trên đơn vị tổ chức).",
    originalSourceNote: "Bộ dữ liệu sự kiện của nhóm nghiên cứu RMIT.",
  },
  {
    id: "rmit-4",
    factUsed:
      "Tương quan nguồn gốc nghệ sĩ & lượng khán giả: Quy mô 200–500 (206 nội địa / 10 quốc tế / 6 kết hợp); 500–1.000 (100 / 15 / 21); 1.000–5.000 (200 / 29 / 28); 5.000–10.000 (45 / 5 / 4); 10.000–40.000 (101 / 4 / 12); >40.000 khách (16 / 3 / 1).",
    pdfLocation: "Trang 30 (Biểu đồ cột ngang Tương quan giữa nguồn gốc nghệ sĩ biểu diễn trong sự kiện và lượng khán giả tham dự).",
    originalSourceNote: "Bộ dữ liệu sự kiện của nhóm nghiên cứu RMIT.",
  },
  {
    id: "rmit-5",
    factUsed:
      "Quy mô khán giả các Concert tiêu biểu: G-Dragon Übermensch World Tour in Hanoi (~100.000 khán giả, 2 đêm); Mỹ Tâm See The Light (~40.000 khán giả); Hà Anh Tuấn Sketch A Rose (~30.000 khán giả, 2 đêm ở TP.HCM); Soobin All-Rounder Concert (~26.000 khán giả, 3 đêm); Concert Quốc gia V-Concert, Tổ Quốc Trong Tim (25.000–50.000 khán giả/đêm và 128 sự kiện chủ đề văn hóa, tự hào dân tộc dịp A50–A80).",
    pdfLocation: "Trang 18, 29, 40, 82.",
    originalSourceNote: "Tổng hợp từ Báo Nhân Dân, Tuổi Trẻ, Thanh Niên, VnExpress, Dân Trí (Chú thích số 25, 28, 42–46 trong báo cáo).",
  },
  {
    id: "rmit-6",
    factUsed:
      "Tỷ lệ khán giả sẵn sàng chi trả: Gói nghe nhạc trả phí (71,7%), Sự kiện trực tiếp - concert/liveshow (60,9%), Sản phẩm thương hiệu kết hợp nghệ sĩ (42,0%), Merchandise (34,1%), Nhạc vật lý (27,8%).",
    pdfLocation: "Trang 27 (Các sản phẩm âm nhạc phổ biến được khán thính giả sẵn sàng chi trả).",
    originalSourceNote: "Khảo sát sơ cấp định lượng của RMIT với N=471 người dùng trẻ (Phương pháp nghiên cứu ở Trang 112).",
  },
  {
    id: "rmit-7",
    factUsed:
      "Mức sẵn sàng chi trung bình/tháng: Cho sự kiện trực tiếp: 50k–200k (31,9%), 200k–500k (42,0%), 500k–1 triệu (15,3%), >1 triệu (7,0%). Cho Merchandise: 500k–1 triệu (33,2%), trên 1 triệu đồng (22,9%).",
    pdfLocation: "Trang 28 (Mức sẵn sàng chi trung bình mỗi tháng cho các sản phẩm âm nhạc).",
    originalSourceNote: "Khảo sát sơ cấp định lượng của RMIT (N=471).",
  },
  {
    id: "rmit-8",
    factUsed:
      "So sánh thị trường Đông Nam Á: Lady Gaga MAYHEM Ball Tour (Singapore, 5/2025) 4 đêm độc quyền châu Á, bán 193.000 vé, thu 40,8 triệu USD, đóng góp 100–150 triệu USD cho du lịch Singapore; Indonesia lập Quỹ Du lịch 86 triệu USD; Malaysia dự kiến 450 sự kiện âm nhạc mang lại 1,7 tỷ RM.",
    pdfLocation: "Trang 14 & 15 (Các điểm nhấn thị trường âm nhạc Đông Nam Á).",
    originalSourceNote: "The Straits Times, ZULA, Travel and Tour World (Chú thích số 14, 15, 18, 21 trong báo cáo).",
  },
  {
    id: "rmit-9",
    factUsed:
      "Doanh thu nhạc số bình quân trên mỗi người dùng (ARPU) dự báo đến năm 2030: Singapore dẫn đầu (45,38 USD/người), Philippines (14,52 USD), Thái Lan (12,06 USD), Malaysia (10,76 USD), Indonesia (5,48 USD), Việt Nam xếp thứ 6 (5,44 USD/người, đứng thứ 4 về quy mô người dùng).",
    pdfLocation: "Trang 11 (So sánh dự đoán thị trường nhạc số theo quốc gia 2030).",
    originalSourceNote: "Statista Market Insights (Cập nhật đến tháng 12/2025).",
  },
  {
    id: "rmit-10",
    factUsed:
      "Ngân sách đầu tư văn hóa: Quốc hội phê duyệt 122.000 tỷ đồng trong 5 năm (2025–2030) cho Chương trình Mục tiêu Quốc gia Phát triển Văn hóa.",
    pdfLocation: "Trang 17 & 56.",
    originalSourceNote: "VnExpress, Báo Tuổi Trẻ (Chú thích số 23, 89).",
  },
  {
    id: "rmit-11",
    factUsed:
      "Hệ thống nền tảng bán vé & xu hướng Âm nhạc xanh: Có 13 doanh nghiệp bán vé sự kiện trực tuyến tại Việt Nam (Ticketbox dẫn đầu; Eventista/1Zone hỗ trợ hơn 200 phương thức thanh toán tại 145 quốc gia); cảnh báo rác thải nhựa sự kiện và định hướng Âm nhạc xanh.",
    pdfLocation: "Trang 73, 74 & Trang 100–102 (Nền tảng bán vé & Âm nhạc xanh).",
    originalSourceNote: "Tracxn, Báo Người Lao Động (Chú thích số 114, 118) & Nhóm nghiên cứu RMIT.",
  },
];

// BẢNG NGUỒN 2: NHÓM SỐ LIỆU & THÔNG TIN CHÍNH SÁCH TỪ BÁO CHÍNH THỐNG
export const PRESS_POLICY_SOURCES: PressPolicySourceRow[] = [
  {
    id: "press-1",
    factUsed:
      "Số liệu biểu diễn tại TP.HCM (9 tháng đầu năm 2026): Tiếp nhận và chấp thuận 1.064 hồ sơ hoạt động nghệ thuật biểu diễn, trong đó có 944 chương trình biểu diễn nghệ thuật, sân khấu.",
    articleSource: "Bài: TP.HCM tổ chức 944 chương trình biểu diễn nghệ thuật, sân khấu trong 9 tháng qua (Tháng 10/2026).",
    authorityOrExpert: "Báo cáo của Sở Văn hóa và Thể thao TP.HCM tại Hội nghị tổng kết hoạt động văn nghệ TP.HCM.",
  },
  {
    id: "press-2",
    factUsed:
      "Quy mô Concert chào mừng Ngày Văn hóa Việt Nam 24/11: Giao UBND TP. Hà Nội chủ trì tổ chức concert quy mô khoảng 60.000 người vào tối 23/11/2026 tại SVĐ Quốc gia Mỹ Đình.",
    articleSource: "Bài: Giao Hà Nội tổ chức concert quy mô khoảng 60 nghìn người chào mừng Ngày Văn hóa Việt Nam 24/11 (Tháng 10–11/2026).",
    authorityOrExpert: "Kết luận của Ban Chỉ đạo Trung ương kỷ niệm các ngày lễ lớn và sự kiện lịch sử quan trọng của đất nước & Bộ VHTTDL.",
  },
  {
    id: "press-3",
    factUsed:
      "Các chỉ tiêu của Nghị quyết số 80-NQ/TW (ban hành ngày 07/01/2026): Chọn ngày 24/11 hằng năm là \"Ngày Văn hóa Việt Nam\" (nghỉ lễ hưởng nguyên lương); phấn đấu đến năm 2030 công nghiệp văn hóa đóng góp 7% GDP; xây dựng 5 thương hiệu liên hoan nghệ thuật, lễ hội văn hóa quốc tế; thuộc Top 3 ASEAN và Top 30 thế giới về Chỉ số Sức mạnh mềm (Soft Power Index) và giá trị xuất khẩu công nghiệp văn hóa.",
    articleSource: "Nghị quyết số 80-NQ/TW của Bộ Chính trị về phát triển văn hóa Việt Nam & Chuỗi bài trên Báo Nhân Dân, Đại biểu Nhân dân, Tuổi Trẻ (Tháng 10/2026).",
    authorityOrExpert: "Bộ Chính trị (Nghị quyết 80-NQ/TW) & Quốc hội (Nghị quyết về Ngày Văn hóa Việt Nam).",
  },
  {
    id: "press-4",
    factUsed:
      "Số liệu concert Anh Trai Vượt Ngàn Chông Gai 2026: Thu hút khoảng 100.000 khán giả trong 2 đêm diễn tại TP.HCM (tháng 10/2026), vé đêm 1 bán hết sau 5 giờ; vé đêm diễn Hưng Yên bán hết ngay trong buổi trưa mở bán (04/11/2026).",
    articleSource: "Chuỗi bài phân tích thị trường concert trên VietnamPlus, Đại biểu Nhân dân và Znews (Tháng 10–11/2026).",
    authorityOrExpert: "Thống kê từ Ban tổ chức (YeaH1) và nền tảng phân phối vé được báo chí dẫn lại.",
  },
  {
    id: "press-5",
    factUsed:
      "Nhận diện các điểm nghẽn (Hạ tầng không mái che, thiếu dữ liệu chuẩn, phụ thuộc thiết bị nhập khẩu, thiếu IP độc lập): SVĐ Mỹ Đình không có mái che khu vực mặt sân, mưa là phải đổi toàn bộ phương án; thiếu hệ thống thống kê doanh thu vé, tỷ lệ lấp đầy minh bạch.",
    articleSource: "Bài: Nhận diện điểm nghẽn của cơn sốt concert ở Việt Nam trên Znews.vn & Bài Hướng tới tính bền vững trong công nghiệp concert và giải trí trên Báo Nhân Dân (18–19/10/2026).",
    authorityOrExpert: "Ca sĩ Tùng Dương, Đạo diễn Việt Tú, Đạo diễn Phạm Hoàng Nam, Nhạc sĩ Quốc Trung (Hội thảo \"Công nghiệp concert và giải trí: Từ bùng nổ đến bền vững\").",
  },
  {
    id: "press-6",
    factUsed:
      "Góc nhìn phản biện về cuộc đua concert địa phương và chuỗi giá trị sau đêm diễn: \"Công nghiệp văn hóa không phải là cuộc đua xem địa phương nào tổ chức concert lớn hơn...\"; bài toán \"nền kinh tế chú ý\" (attention economy) và hệ sinh thái dịch vụ giữ chân khách du lịch.",
    articleSource: "2 bài trên Báo Tuổi Trẻ (18–19/10/2026) và bài trên VietnamPlus: Công nghiệp văn hóa không phải là cuộc đua xem địa phương nào tổ chức concert lớn hơn; Dư địa văn hóa Việt Nam rất rộng, nhưng một concert bùng nổ rồi sau đó còn lại gì?",
    authorityOrExpert: "PGS.TS Bùi Hoài Sơn (Ủy viên Thường trực Ủy ban Văn hóa, Giáo dục của Quốc hội) & các chuyên gia tại Hội thảo Công nghiệp văn hóa tháng 10/2026.",
  },
];
