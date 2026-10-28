/**
 * DATA JOURNALISM TEMPLATE CONFIGURATION & DATASET
 * -------------------------------------------------------------
 * Bạn có thể dễ dàng thay đổi các thông tin, chỉ số, dữ liệu bản đồ,
 * biểu đồ và danh sách dự án tại đây để biến thành bài báo dữ liệu của bạn!
 */

export interface FloodSpot {
  id: number;
  name: string;
  district: string;
  region: string;
  severity: "severe" | "moderate" | "minor";
  severityText: string;
  depth: string;
  duration: string;
  cause: string;
  causeText: string;
  lat: number;
  lng: number;
  status: string;
  description: string;
}

export interface KeyMetric {
  id: string;
  value: string;
  unit: string;
  label: string;
  desc: string;
  badge: string;
  color: string;
}

export interface SeverityChartItem {
  label: string;
  count: number;
  percent: number;
  color: string;
}

export interface CausesChartItem {
  cause: string;
  count: number;
  percent: number;
  color: string;
}

export interface RegionChartItem {
  name: string;
  spots: number;
  heavy: number;
}

export interface RootCause {
  step: string;
  title: string;
  desc: string;
  icon: string;
}

export interface ProjectItem {
  name: string;
  budget: string;
  status: string;
  impact: string;
}

export interface RoadmapPhase {
  phase: string;
  time: string;
  badge: string;
  budget: string;
  projectsCount: number;
  description: string;
  keyProjects: ProjectItem[];
}

export interface ExpertQuote {
  author: string;
  role: string;
  quote: string;
}

export const ARTICLE_DATA = {
  // 1. THÔNG TIN CHUNG BÀI BÁO
  meta: {
    category: "BÁO DỮ LIỆU TƯƠNG TÁC • DATA JOURNALISM",
    title: "TP.HCM ngập ở đâu và lộ trình khắc phục ra sao?",
    subtitle: "Dữ liệu toàn cảnh 159 điểm ngập úng tại TP.HCM, phân tích nguyên nhân và lộ trình giải ngân hơn 142.000 tỉ đồng xóa các 'rốn ngập' đến năm 2030.",
    author: "Nhóm Phóng viên Dữ liệu",
    graphics: "Đồ họa tương tác & Kỹ thuật dữ liệu",
    source: "Sở Xây dựng TP.HCM, Viện Quy hoạch đô thị & Báo Thanh Niên",
    publishedDate: "27/10/2026",
    readTime: "7 phút đọc",
    heroImage: "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1920&q=80"
  },

  // 2. CÁC CHỈ SỐ QUAN TRỌNG (KEY TAKEAWAY METRICS)
  keyMetrics: [
    {
      id: "total_spots",
      value: "159",
      unit: "điểm",
      label: "Tổng số điểm ngập",
      desc: "Toàn thành phố do mưa lớn & triều cường",
      badge: "Toàn cảnh",
      color: "emerald"
    },
    {
      id: "severe_spots",
      value: "39",
      unit: "điểm",
      label: "Ngập nghiêm trọng",
      desc: "Nước sâu >30cm, tụ nước kéo dài >120 phút",
      badge: "Cấp bách",
      color: "rose"
    },
    {
      id: "budget",
      value: "142.000+",
      unit: "tỉ đồng",
      label: "Vốn đầu tư 2026 - 2030",
      desc: "Dành cho các công trình tiêu thoát nước & cống triều",
      badge: "Nguồn lực",
      color: "blue"
    },
    {
      id: "projects",
      value: "87",
      unit: "dự án",
      label: "Dự án chống ngập",
      desc: "54 dự án ưu tiên hoàn thành trước 2027",
      badge: "Kế hoạch",
      color: "amber"
    }
  ],

  // 3. DỮ LIỆU CÁC ĐIỂM NGẬP TƯƠNG TÁC (159 ĐIỂM - CHỌN LỌC CÁC TỌA ĐỘ TIÊU BIỂU)
  floodSpots: [
    {
      id: 1,
      name: "Chợ Thủ Đức (Đặng Thị Rành - Kha Vạn Cân - Dương Văn Cam)",
      district: "TP. Thủ Đức",
      region: "thuduc",
      severity: "severe",
      severityText: "Ngập rất nặng",
      depth: "50 - 70 cm",
      duration: "150 - 240 phút",
      cause: "rain_topography",
      causeText: "Mưa lớn & Địa hình lòng chảo",
      lat: 10.8523,
      lng: 106.7584,
      status: "Dự án nâng cấp rạch Thủ Đức 5.100 tỉ đồng đang triển khai",
      description: "Là một trong những rốn ngập lịch sử do nước từ đồi dốc dồn về lòng chảo chợ Thủ Đức, rạch thoát nước bị bồi lắng và nghẽn dòng."
    },
    {
      id: 2,
      name: "Đường Quốc Hương (Khu Thảo Điền)",
      district: "TP. Thủ Đức",
      region: "thuduc",
      severity: "severe",
      severityText: "Ngập rất nặng",
      depth: "40 - 60 cm",
      duration: "180 phút",
      cause: "tide_rain",
      causeText: "Triều cường kết hợp mưa",
      lat: 10.8055,
      lng: 106.7328,
      status: "Đang nâng cấp cống ngăn triều & trạm bơm tăng áp",
      description: "Khu vực bán đảo Thảo Điền có cốt nền thấp, giáp sông Sài Gòn nên chịu ảnh hưởng trực tiếp của đỉnh triều cường."
    },
    {
      id: 3,
      name: "Đường Nguyễn Văn Khối (Cây Trâm cũ)",
      district: "Gò Vấp",
      region: "inner",
      severity: "severe",
      severityText: "Ngập rất nặng",
      depth: "40 - 65 cm",
      duration: "120 - 180 phút",
      cause: "rain",
      causeText: "Mưa lớn vượt tần suất thiết kế",
      lat: 10.8415,
      lng: 106.6578,
      status: "Dự án cải tạo kênh Tham Lương - Bến Cát - Rạch Nước Lên",
      description: "Tuyến đường trũng thấp, hệ thống cống khẩu độ nhỏ không kịp gom nước chảy về rạch Tham Lương."
    },
    {
      id: 4,
      name: "Quốc lộ 13 (đoạn cầu Ông Dầu - cầu Bình Triệu)",
      district: "TP. Thủ Đức",
      region: "thuduc",
      severity: "severe",
      severityText: "Ngập rất nặng",
      depth: "35 - 50 cm",
      duration: "150 phút",
      cause: "tide_rain",
      causeText: "Triều cường & Mưa lớn",
      lat: 10.8329,
      lng: 106.7118,
      status: "Dự án mở rộng QL13 kết hợp cống hộp thoát nước lớn",
      description: "Cửa ngõ phía Đông Bắc, thường xuyên tê liệt giao thông mỗi khi triều cường dâng kết hợp mưa to vào giờ cao điểm."
    },
    {
      id: 5,
      name: "Đường Ung Văn Khiêm - Nguyễn Xí",
      district: "Bình Thạnh",
      region: "inner",
      severity: "severe",
      severityText: "Ngập rất nặng",
      depth: "35 - 55 cm",
      duration: "120 - 160 phút",
      cause: "rain",
      causeText: "Hệ thống cống quá tải",
      lat: 10.8078,
      lng: 106.7135,
      status: "Cải tạo rạch Văn Thánh & xây dựng trạm bơm tiêu",
      description: "Nằm sát ngã năm Đài Liệt Sĩ, dòng chảy thoát ra sông bị nghẽn do lấn chiếm rạch."
    },
    {
      id: 6,
      name: "Đường Huỳnh Tấn Phát (đoạn Nhà Bè & Q.7)",
      district: "Quận 7",
      region: "inner",
      severity: "severe",
      severityText: "Ngập triều cường nặng",
      depth: "30 - 45 cm",
      duration: "120 phút",
      cause: "tide",
      causeText: "Triều cường dâng cao",
      lat: 10.7381,
      lng: 106.7337,
      status: "Chờ hoàn thành siêu cống ngăn triều Mương Chuối & Phú Xuân",
      description: "Tuyến giao thông huyết mạch ven sông, nước sông dâng ngập trắng đường mỗi đợt triều rằm và mùng một."
    },
    {
      id: 7,
      name: "Đường Phan Văn Hớn",
      district: "Quận 12",
      region: "inner",
      severity: "moderate",
      severityText: "Ngập vừa",
      depth: "20 - 30 cm",
      duration: "60 - 90 phút",
      cause: "rain",
      causeText: "Mưa lớn",
      lat: 10.8427,
      lng: 106.6082,
      status: "Lắp đặt cống hộp D1200",
      description: "Khu vực đô thị hóa nhanh, mặt phủ bê tông cao khiến lượng nước mặt dồn nhanh."
    },
    {
      id: 8,
      name: "Đường Trần Xuân Soạn",
      district: "Quận 7",
      region: "inner",
      severity: "severe",
      severityText: "Ngập triều cường",
      depth: "30 - 50 cm",
      duration: "120 - 150 phút",
      cause: "tide",
      causeText: "Triều cường Kênh Tẻ",
      lat: 10.7538,
      lng: 106.7029,
      status: "Kè bờ kênh Tẻ và chờ vận hành cống Tân Thuận",
      description: "Đoạn đường ven bờ kênh Tẻ không có bờ kè bảo vệ khép kín, nước tràn trực tiếp từ kênh lên mặt đường."
    },
    {
      id: 9,
      name: "Đường Lê Đức Thọ (đoạn giáp sông Vàm Thuật)",
      district: "Gò Vấp",
      region: "inner",
      severity: "moderate",
      severityText: "Ngập vừa",
      depth: "25 - 35 cm",
      duration: "70 phút",
      cause: "rain_tide",
      causeText: "Mưa và triều",
      lat: 10.8475,
      lng: 106.6749,
      status: "Xây kè bờ Vàm Thuật",
      description: "Hạ lưu thoát chậm khi mực nước sông Vàm Thuật dâng cao."
    },
    {
      id: 10,
      name: "Khu vực xung quanh Sân bay Tân Sơn Nhất (Phan Thúc Duyện, Hậu Giang)",
      district: "Tân Bình",
      region: "inner",
      severity: "moderate",
      severityText: "Ngập vừa",
      depth: "20 - 30 cm",
      duration: "60 phút",
      cause: "rain",
      causeText: "Mưa lớn dồn dập",
      lat: 10.8087,
      lng: 106.6625,
      status: "Cải tạo mương A41 & kênh Nhật Bản",
      description: "Cửa thoát nước độc quyền của sân bay đang được giải tỏa mặt bằng để mở rộng lòng mương."
    },
    {
      id: 11,
      name: "Đường Đỗ Xuân Hợp (đoạn cống Cây Khế)",
      district: "TP. Thủ Đức",
      region: "thuduc",
      severity: "severe",
      severityText: "Ngập rất nặng",
      depth: "35 - 50 cm",
      duration: "120 phút",
      cause: "rain",
      causeText: "Hạ tầng thoát nước chưa đồng bộ",
      lat: 10.8034,
      lng: 106.7791,
      status: "Đang thi công cống thoát nước đoạn qua phường Phước Long B",
      description: "Tốc độ xây dựng đô thị mới nhanh hơn hệ thống thoát nước hạ lưu."
    },
    {
      id: 12,
      name: "Khu vực Đại lộ Bình Dương (Đoạn Thuận An cũ)",
      district: "Bình Dương mở rộng",
      region: "binhduong",
      severity: "severe",
      severityText: "Ngập nặng",
      depth: "30 - 45 cm",
      duration: "100 phút",
      cause: "rain",
      causeText: "Mưa lưu vực thượng nguồn",
      lat: 10.9238,
      lng: 106.6974,
      status: "Dự án nạo vét rạch Lái Thiêu",
      description: "Khu vực kết nối giáp ranh, dòng chảy thoát nước từ khu công nghiệp ra sông Sài Gòn."
    },
    {
      id: 13,
      name: "Khu vực Quốc lộ 51 (kết nối Bà Rịa - Vũng Tàu)",
      district: "BR-VT mở rộng",
      region: "brvt",
      severity: "moderate",
      severityText: "Ngập vừa",
      depth: "25 - 35 cm",
      duration: "80 phút",
      cause: "rain",
      causeText: "Hệ thống thoát nước ven đường quá tải",
      lat: 10.5842,
      lng: 107.0863,
      status: "Đang bổ sung hệ thống mương thoát nước dọc tuyến",
      description: "Đoạn qua các khu dân cư tập trung, cống rãnh thường xuyên bị cát đất bồi lấp."
    },
    {
      id: 14,
      name: "Đường An Dương Vương (đoạn bến Phú Định)",
      district: "Quận 8",
      region: "inner",
      severity: "severe",
      severityText: "Ngập nặng do triều",
      depth: "40 - 55 cm",
      duration: "140 phút",
      cause: "tide",
      causeText: "Triều cường Kênh Đôi",
      lat: 10.7245,
      lng: 106.6212,
      status: "Chờ cống kiểm soát triều Phú Định hoàn thành",
      description: "Địa hình cực thấp, mép sông sâu, nước tràn qua bờ tràn lan mỗi dịp triều cao."
    },
    {
      id: 15,
      name: "Đường Nguyễn Văn Quá",
      district: "Quận 12",
      region: "inner",
      severity: "minor",
      severityText: "Đã giảm ngập đáng kể",
      depth: "15 - 20 cm",
      duration: "30 - 45 phút",
      cause: "rain",
      causeText: "Mưa lớn",
      lat: 10.8406,
      lng: 106.6253,
      status: "Đã hoàn thành cống hộp lớn, chỉ còn ngập cục bộ ở hẻm",
      description: "Từng là rốn ngập khét tiếng, nay đã giảm hơn 70% sau khi đưa vào vận hành trạm bơm và cống hộp mới."
    }
  ],

  // 4. DỮ LIỆU BIỂU ĐỒ TRỰC QUAN HÓA (DATA CHARTS)
  charts: {
    // Phân bổ mức độ nghiêm trọng
    severityDistribution: [
      { label: "Ngập thường xuyên (>30cm, >120ph)", count: 39, percent: 24.5, color: "#f43f5e" },
      { label: "Ngập mức độ vừa (15 - 30cm)", count: 33, percent: 20.8, color: "#f97316" },
      { label: "Ngập nhẹ (<15cm, rút nhanh)", count: 22, percent: 13.8, color: "#eab308" },
      { label: "Chưa phân loại cụ thể (vùng mở rộng)", count: 65, percent: 40.9, color: "#64748b" }
    ],

    // Phân bổ theo nguyên nhân
    causesDistribution: [
      { cause: "Mưa lớn cực đoan vượt chuẩn thiết kế cống", count: 82, percent: 51.6, color: "#3b82f6" },
      { cause: "Triều cường dâng cao từ sông Sài Gòn & Kênh rạch", count: 48, percent: 30.2, color: "#06b6d4" },
      { cause: "Tác động kép (Mưa dông trùng đỉnh triều)", count: 29, percent: 18.2, color: "#8b5cf6" }
    ],

    // Top các khu vực có số điểm ngập cao nhất
    topRegions: [
      { name: "Khu vực Nội đô TP.HCM cũ", spots: 57, heavy: 24 },
      { name: "Khu vực Bình Dương (mở rộng)", spots: 52, heavy: 12 },
      { name: "Khu vực Bà Rịa - Vũng Tàu (mở rộng)", spots: 31, heavy: 8 },
      { name: "Khu vực TP. Thủ Đức", spots: 19, heavy: 11 }
    ]
  },

  // 5. CÁC NGUYÊN NHÂN CỐT LÕI (ROOT CAUSES EXPLAINER)
  rootCauses: [
    {
      step: "01",
      title: "Hạ tầng cống cũ & Mưa cực đoan vượt thiết kế",
      desc: "Quy hoạch thoát nước trước đây chỉ tính toán cho các cơn mưa có vũ lượng từ 70 - 80 mm trong 3 giờ. Tuy nhiên, biến đổi khí hậu khiến TP.HCM xuất hiện ngày càng nhiều vũ lượng trên 120 - 180 mm trong vòng chưa đầy 1 giờ, gây quá tải gấp 2 - 3 lần khả năng tự chảy.",
      icon: "cloud-rain"
    },
    {
      step: "02",
      title: "Đỉnh triều cường lịch sử vượt báo động III",
      desc: "Trước năm 2000, đỉnh triều cao nhất trên sông Sài Gòn hiếm khi vượt 1,40m. Nhưng trong những năm gần đây, mực nước triều thường xuyên đạt ngưỡng 1,72 - 1,78m, cao hơn phần lớn cao độ mặt đường của các quận phía Nam (Q.7, Q.8, Nhà Bè).",
      icon: "waves"
    },
    {
      step: "03",
      title: "Lún sụt địa chất và bê tông hóa xóa sổ hồ điều tiết",
      desc: "Mỗi năm TP.HCM lún sụt từ 1 đến 3 cm (đặc biệt tại Bình Chánh, Q.7, Thủ Đức). Đồng thời, hàng loạt đầm lầy, kênh rạch tự nhiên bị san lấp để xây dựng đô thị, làm mất đi hàng triệu m3 không gian trữ nước tự nhiên khi mưa lớn.",
      icon: "arrow-down-circle"
    }
  ],

  // 6. LỘ TRÌNH VỐN & 87 DỰ ÁN ĐẾN NĂM 2030 (142.000 TỈ ĐỒNG)
  roadmap: {
    totalBudget: "142.000 tỉ VNĐ",
    targetYear: "2030",
    summary: "Xử lý triệt để 50 vị trí trọng điểm, chuyển dịch từ tư duy chống ngập cục bộ sang quản lý rủi ro ngập tích hợp toàn lưu vực.",
    phases: [
      {
        phase: "Giai đoạn 1",
        time: "2026 - 2027",
        badge: "Tăng tốc cấp bách",
        budget: "69.348 tỉ đồng",
        projectsCount: 54,
        description: "Ưu tiên dứt điểm các rốn ngập dân sinh bức xúc nhất, hoàn thành công tác chuẩn bị mặt bằng các dự án trọng điểm.",
        keyProjects: [
          {
            name: "Cải tạo rạch Thủ Đức giải cứu Chợ Thủ Đức",
            budget: "5.100 tỉ đồng",
            status: "Đang thi công kè & cống",
            impact: "Xóa ngập hoàn toàn cho khu chợ Thủ Đức và các tuyến Dương Văn Cam, Đặng Thị Rành"
          },
          {
            name: "Hệ thống thoát nước & trạm bơm khu vực Thảo Điền",
            budget: "1.250 tỉ đồng",
            status: "Đang hoàn thiện trạm bơm",
            impact: "Bảo vệ bán đảo Thảo Điền khỏi triều cường sông Sài Gòn"
          },
          {
            name: "Cải tạo mương A41 & kênh Nhật Bản quanh sân bay Tân Sơn Nhất",
            budget: "980 tỉ đồng",
            status: "Giải phóng mặt bằng 85%",
            impact: "Ngăn chặn nguy cơ ngập đường lăn và nhà ga sân bay"
          },
          {
            name: "Xây dựng cống hộp lớn đường Nguyễn Văn Khối (Gò Vấp)",
            budget: "650 tỉ đồng",
            status: "Đang đào cống hộp D2000",
            impact: "Tiêu thoát nước nhanh về lưu vực rạch Tham Lương"
          }
        ]
      },
      {
        phase: "Giai đoạn 2",
        time: "2028 - 2030",
        badge: "Bền vững & Chuyển đổi số",
        budget: "72.652 tỉ đồng",
        projectsCount: 33,
        description: "Vận hành đồng bộ các công trình đê bao lớn, hồ điều tiết ngầm kết hợp hệ thống SCADA & AI dự báo ngập tự động.",
        keyProjects: [
          {
            name: "Vận hành đồng bộ toàn diện dự án Giải quyết ngập do triều (10.000 tỉ đồng)",
            budget: "Đã đầu tư & bổ sung vận hành",
            status: "Giai đoạn tích hợp kiểm soát",
            impact: "Bảo vệ vùng lõi trung tâm bờ hữu sông Sài Gòn diện tích 570 km²"
          },
          {
            name: "Mạng lưới 10 hồ điều tiết ngầm thông minh kết hợp công viên cây xanh",
            budget: "8.500 tỉ đồng",
            status: "Lập báo cáo khả thi",
            impact: "Tạo dung tích trữ hơn 1,5 triệu m³ nước mưa đệm khi có mưa dông cực đoan"
          },
          {
            name: "Hệ thống cảm biến IoT & Trí tuệ nhân tạo (AI) điều tiết cống tự động",
            budget: "1.800 tỉ đồng",
            status: "Thí điểm mở rộng",
            impact: "Dự báo ngập trước 60 phút, tự động kích hoạt van một chiều và trạm bơm"
          }
        ]
      }
    ]
  },

  // 7. CÂU HỎI THƯỜNG GẶP / GÓC NHÌN CHUYÊN GIA
  expertQuotes: [
    {
      author: "PGS-TS. Nguyễn Minh Hà",
      role: "Chuyên gia Thủy văn & Biến đổi khí hậu",
      quote: "Chống ngập cho TP.HCM không thể chỉ dựa vào việc đào cống to hơn. Bản chất của nước là cần chỗ chảy và chỗ trữ. Nếu chúng ta tiếp tục bê tông hóa và không trả lại các hồ trữ nước tự nhiên, thì nước sẽ biến đường phố thành hồ chứa."
    },
    {
      author: "Đại diện Sở Xây dựng TP.HCM",
      role: "Ban Quản lý Hạ tầng Kỹ thuật",
      quote: "Lộ trình 142.000 tỉ đồng đến năm 2030 không chỉ giải quyết 50 vị trí trọng điểm trước mắt, mà là bước chuyển căn cơ sang mô hình quản lý rủi ro ngập tích hợp toàn vùng đô thị mở rộng."
    }
  ]
};

export default ARTICLE_DATA;
