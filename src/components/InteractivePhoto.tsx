"use client";

import React, { useState, useEffect } from "react";

export interface ArticlePhotoItem {
  id: string;
  src: string;
  alt: string;
  caption: React.ReactNode;
}

export const ARTICLE_PHOTOS: ArticlePhotoItem[] = [
  {
    id: "photo-0",
    src: "/concert-to-quoc-trong-tim.jpg",
    alt: "“Concert Quốc gia” Tổ quốc trong tim 2026 tổ chức tại Khu đô thị Vạn Phúc City",
    caption: (
      <>
        “Concert Quốc gia” Tổ quốc trong tim 2026 tổ chức tại Khu đô thị Vạn Phúc City vào tối ngày 23/8. Hơn 40.000 khán giả tại Vạn Phúc, gần 30.000 người tại phố đi bộ Nguyễn Huệ và hàng triệu lượt khán giả trên mạng xã hội cùng hòa vào không gian nghệ thuật đặc biệt. (Ảnh: Báo Nhân Dân)
      </>
    ),
  },
  {
    id: "photo-1",
    src: "/concert-anh-trai-vuot-ngan-chong-gai.jpg",
    alt: "Concert Anh Trai Vượt Ngàn Chông Gai 2026 tại TP. Hồ Chí Minh",
    caption: (
      <>
        Concert Anh Trai Vượt Ngàn Chông Gai 2026 diễn ra tại TP. Hồ Chí Minh vào ngày 17 /10, quy mô gần 50.000 khán giả. (Ảnh: Fanpage Anh Trai Vượt Ngàn Chông Gai)
      </>
    ),
  },
  {
    id: "photo-2",
    src: "/concert-tinh-ha-say-hi.jpg",
    alt: "Concert Tinh Hà “Say Hi” mang chủ đề Hẹn giữa tinh hà tại TP. Hồ Chí Minh",
    caption: (
      <>
        Concert Tinh Hà “Say Hi” mang chủ đề &ldquo;Hẹn giữa tinh hà&rdquo; diễn ra tối 17/10, tại TP. Hồ Chí Minh thu hút chục ngàn khán giả hào hứng tham gia. (Ảnh: BTC)
      </>
    ),
  },
  {
    id: "photo-3",
    src: "/concert-atvngc-hoa-tam.jpg",
    alt: "33 Anh Tài với ca khúc chủ đề Hoả Tâm mở màn Concert Anh Trai Vượt Ngàn Chông Gai 2026",
    caption: (
      <>
        33 Anh Tài đốt cháy sân khấu với ca khúc chủ đề Hoả Tâm mở màn Concert Anh Trai Vượt Ngàn Chông Gai 2026 diễn ra tại TP. Hồ Chí Minh vào tối 17 /10. (Ảnh: Fanpage Anh Trai Vượt Ngàn Chông Gai)
      </>
    ),
  },
  {
    id: "photo-4",
    src: "/concert-tinh-ha-say-hi-van-phuc.jpg",
    alt: "Concert Tinh Hà Say Hi tại Vạn Phúc City, TP. Hồ Chí Minh",
    caption: (
      <>
        Concert Tinh Hà “Say Hi” thu hút hàng chục nghìn khán giả tại Vạn Phúc City, TP. Hồ Chí Minh thành điểm hẹn âm nhạc với 24 nghệ sĩ cùng nhiều màn trình diễn bùng nổ. (Ảnh: DatVietVAC)
      </>
    ),
  },
  {
    id: "photo-5",
    src: "/concert-my-tam-see-the-light.jpg",
    alt: "Concert See The Light của Mỹ Tâm tại sân vận động Mỹ Đình",
    caption: (
      <>
        Concert See The Light của Mỹ Tâm diễn ra vào tối ngày 13/12 tại sân vận động Mỹ Đình (Hà Nội) với 40.000 khán giả, kéo dài gần 4 tiếng với hơn 30 bài hát. Đây là concert cá nhân lớn nhất Việt Nam hiện nay. (Ảnh: Ban Tổ chức Chương trình See The Light)
      </>
    ),
  },
  {
    id: "photo-6",
    src: "/concert-v-concert-rang-ro-viet-nam.jpg",
    alt: "V Concert với chủ đề Rạng rỡ Việt Nam tại Trung tâm Triển lãm Việt Nam",
    caption: (
      <>
        V Concert với chủ đề Rạng rỡ Việt Nam diễn ra tại Trung tâm Triển lãm Việt Nam (Đông Anh, Hà Nội). Concert bắt đầu từ 19h tối 9-8, concert kéo dài gần 7 tiếng. Đây được xem là “bước chuyển” của VTV với vị thế đài truyền hình quốc gia khi tổ chức concert hướng tới Ngày Quốc khánh 2-9 một cách trẻ trung, gần gũi với quy mô gần 20.000 khán giả. (Ảnh: Nam Trần/ Báo Tuổi trẻ)
      </>
    ),
  },
  {
    id: "photo-7",
    src: "/merch-tinh-ha-say-hi-collection.jpg",
    alt: "Các sản phẩm thuộc Tinh Hà “Say Hi” Collection với quyền lợi Random Photocard đi kèm sản phẩm",
    caption: (
      <>
        Các sản phẩm thuộc Tinh Hà &ldquo;Say Hi&rdquo; Collection với quyền lợi Random Photocard đi kèm sản phẩm. (Ảnh: Fanpage VieShop)
      </>
    ),
  },
  {
    id: "photo-8",
    src: "/merch-together-we-shine-vieshop.jpg",
    alt: "Bộ sưu tập TOGETHER WE SHINE trên nền tảng VieSHOP",
    caption: (
      <>
        Bộ sưu tập TOGETHER WE SHINE trên nền tảng VieSHOP. Cơ chế quy đổi đơn hàng hợp lệ thành lượt bình chọn trực tiếp đã thúc đẩy người hâm mộ mạnh tay chi tiền để ủng hộ các &lsquo;Anh Trai&rsquo;. (Ảnh: Fanpage VieShop)
      </>
    ),
  },
  {
    id: "photo-9",
    src: "/concert-atvngc-dem-2-tphcm.jpg",
    alt: "Concert Anh Trai Vượt Ngàn Chông Gai 2026 tối 18/10 tại TP.HCM",
    caption: (
      <>
        Concert Anh Trai Vượt Ngàn Chông Gai 2026 diễn ra vào tối 18/10 tại TP.HCM đã thu hút gần 100.000 khán giả. Concert thắng lớn về doanh thu lẫn hiệu ứng khán giả, cho thấy khâu tổ chức show ca nhạc quy mô lớn tại Việt Nam đã có bước tiến rõ rệt. (Ảnh: Ban Tổ chức Chương trình)
      </>
    ),
  },
  {
    id: "photo-10",
    src: "/concert-tinh-ha-say-hi-dem-2.jpg",
    alt: "Đêm thứ hai của concert Tinh Hà Say Hi tối 18/10 ở TP.HCM",
    caption: (
      <>
        Đêm thứ hai của concert Tinh Hà “Say Hi” diễn ra vào tối 18/10 ở TP HCM. Concert mang chủ đề “Hẹn giữa tinh hà”, quy tụ đầy đủ 24 ca sĩ của mùa giải đầu tiên. Theo ban tổ chức, ước tính chương trình thu hút gần 40.000 khán giả đến xem. (Ảnh: Ban Tổ chức Chương trình)
      </>
    ),
  },
  {
    id: "photo-11",
    src: "/concert-bigbang-world-tour-hanoi.jpg",
    alt: "Toàn cảnh concert BIGBANG 2026-2027 World Tour in Hanoi tại Mỹ Đình",
    caption: (
      <>
        Toàn cảnh concert BIGBANG 2026-2027 World Tour in Hanoi diễn ra vào tối 25/10 tại Sân vận động quốc gia Mỹ Đình (Hà Nội). Sự kiện nhằm kỷ niệm 20 năm ra mắt nhóm nhạc huyền thoại Hàn Quốc BIGBANG. (Ảnh: Xuân Mai/ Báo VnExpress)
      </>
    ),
  },
  {
    id: "photo-12",
    src: "/concert-tu-hao-la-nguoi-viet-nam-thai-nguyen.jpg",
    alt: "Concert Tự hào là người Việt Nam 2026 tại Sân vận động Thái Nguyên",
    caption: (
      <>
        Concert “Tự hào là người Việt Nam 2026” với chủ đề “Nối vòng tay lớn”diễn ra vào tối 1/11 tại Sân vận động Thái Nguyên (xã Đại Phúc, tỉnh Thái Nguyên). Đây là lần đầu có một concert quy mô quốc gia tổ chức tại Thái Nguyên, quy tụ tới 30.000 khán giả. (Ảnh: Vũ Hoàng Giang/ Thông tấn xã Việt Nam)
      </>
    ),
  },
  {
    id: "photo-13",
    src: "/concert-quang-ninh-dat-mo-anh-hung.jpg",
    alt: "Chương trình nghệ thuật chính luận Quảng Ninh - Đất mỏ anh hùng",
    caption: (
      <>
        Chào mừng 89 năm Ngày Truyền thống công nhân vùng Mỏ - Truyền thống ngành Than, tối 12/11, tại Quảng trường 30/10, UBND tỉnh Quảng Ninh tổ chức chương trình nghệ thuật chính luận đặc sắc “Quảng Ninh - Đất mỏ anh hùng”.Chương trình là sự hòa quyện giữa âm nhạc - xiếc - phóng sự và trình diễn hiện đại, quy tụ dàn nghệ sĩ hàng đầu với quy mô 30.000 khán giả. (Ảnh: Bùi My/ Báo Dân Việt)
      </>
    ),
  },
  {
    id: "photo-14",
    src: "/concert-mach-nguon-kinh-bac.jpg",
    alt: "Chương trình nghệ thuật Mạch nguồn Kinh Bắc - Vươn cao thời đại tại Bắc Ninh",
    caption: (
      <>
        Chương trình nghệ thuật “Mạch nguồn Kinh Bắc - Vươn cao thời đại” diễn ra vào tối 19/9, tại Quảng trường 3/2 (phường Bắc Giang) nhằm chào mừng thành lập thành phố Bắc Ninh và đón nhận Huân chương Lao động hạng Nhất. (Ảnh: Đồng Thúy/ Thông tấn xã Việt Nam)
      </>
    ),
  },
  {
    id: "photo-15",
    src: "/concert-hue-wonderverse-music-fest.jpg",
    alt: "Huế Wonderverse Music Fest 2026 tại Quảng trường Hà Huy Tập",
    caption: (
      <>
        Với chủ đề “City Awakening - Đánh thức Di sản,” Huế Wonderverse Music Fest 2026 lần đầu được tổ chức tại Huế, mở cửa miễn phí phục vụ người dân và du khách. Từ ngày 30-8 đến 1-9, Quảng trường Hà Huy Tập trở thành điểm hội tụ của âm nhạc, nghệ thuật và công nghệ thu hút hàng ngàn khán giả tham gia. (Ảnh: Ủy ban Nhân dân Thành phố Huế)
      </>
    ),
  },
  {
    id: "photo-16",
    src: "/concert-8wonder-moments-of-wonder.jpg",
    alt: "Đại nhạc hội 8Wonder: Moments of Wonder 2025 tại Trung tâm Hội chợ Triển lãm Quốc gia Hà Nội",
    caption: (
      <>
        Tối 23/8, tại Trung tâm Hội chợ Triển lãm Quốc gia (Hà Nội), hơn 50.000 khán giả tham gia nhạc hội 8Wonder: Moments of Wonder 2025, sự kiện nghệ thuật do Tập đoàn Vingroup tổ chức, nằm trong chuỗi hoạt động chào mừng 80 năm Quốc khánh. (Ảnh: Ban Tổ chức Chương trình)
      </>
    ),
  },
];

interface InteractiveArticlePhotoProps {
  src: string;
  alt: string;
  caption: React.ReactNode;
  photoIndex: number;
  totalPhotos?: number;
  onOpenModal: (index: number) => void;
}

export function InteractiveArticlePhoto({
  src,
  alt,
  caption,
  photoIndex,
  onOpenModal,
}: InteractiveArticlePhotoProps) {
  const [isFullBleed, setIsFullBleed] = useState(false);

  const toggleFullBleed = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFullBleed((prev) => !prev);
  };

  const handleImageClick = () => {
    // Tapping/clicking the image toggles inline full-bleed like the video
    setIsFullBleed((prev) => !prev);
  };

  const handleOpenFullscreenModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    onOpenModal(photoIndex);
  };

  return (
    <figure
      className={`article-photo-figure ${isFullBleed ? "is-full-bleed" : ""}`}
      id={`photo-${photoIndex}`}
    >
      <div
        className="article-photo-img-wrap"
        onClick={handleImageClick}
        title={isFullBleed ? "Nhấp để thu nhỏ lại" : "Nhấp để xem tràn viền (Full-bleed)"}
      >
        <img
          src={src}
          alt={alt}
          className="article-photo-img"
          loading="lazy"
        />

        {/* Hover / Tap Actions Toolbar */}
        <div className="article-photo-overlay-actions">
          <button
            type="button"
            className={`photo-action-btn ${isFullBleed ? "btn-primary" : ""}`}
            onClick={toggleFullBleed}
            aria-label={isFullBleed ? "Thu nhỏ viền" : "Xem tràn viền"}
          >
            {isFullBleed ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7" />
                </svg>
                <span>Thu nhỏ</span>
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
                <span>Tràn viền</span>
              </>
            )}
          </button>

          <button
            type="button"
            className="photo-action-btn"
            onClick={handleOpenFullscreenModal}
            aria-label="Phóng to toàn màn hình"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            <span>Toàn màn hình</span>
          </button>
        </div>

        {/* Bottom Left Hint Badge */}
        {!isFullBleed && (
          <div className="photo-hint-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
            <span>Bấm để hiện full viền</span>
          </div>
        )}
      </div>

      <figcaption className="article-photo-caption">{caption}</figcaption>
    </figure>
  );
}

/* ============================================================================
   LIGHTBOX MODAL COMPONENT (TOÀN MÀN HÌNH CHUẨN ĐỒNG BỘ NỀN ĐEN NHƯ VIDEO)
   ============================================================================ */
interface ImageLightboxModalProps {
  photos: ArticlePhotoItem[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function ImageLightboxModal({
  photos,
  currentIndex,
  onClose,
  onSelectIndex,
}: ImageLightboxModalProps) {
  useEffect(() => {
    if (currentIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        onSelectIndex((currentIndex - 1 + photos.length) % photos.length);
      } else if (e.key === "ArrowRight") {
        onSelectIndex((currentIndex + 1) % photos.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, photos.length, onClose, onSelectIndex]);

  if (currentIndex === null) return null;

  const currentPhoto = photos[currentIndex];
  if (!currentPhoto) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex + 1) % photos.length);
  };

  const toggleNativeFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <div
      className="image-lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Xem ảnh toàn màn hình full viền"
    >
      {/* Header Bar */}
      <div className="lightbox-header" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-title-wrap">
          <span className="lightbox-counter-pill">
            {currentIndex + 1} / {photos.length}
          </span>
          <span>Chế độ xem full viền</span>
        </div>

        <div className="lightbox-controls">
          <button
            type="button"
            className="lightbox-ctrl-btn"
            onClick={toggleNativeFullscreen}
            title="Bật/Tắt toàn màn hình trình duyệt"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            </svg>
            <span>Toàn màn hình</span>
          </button>

          <button
            type="button"
            className="lightbox-ctrl-btn"
            onClick={onClose}
            title="Đóng (phím Esc)"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <span>Đóng (Esc)</span>
          </button>
        </div>
      </div>

      {/* Main Stage */}
      <div className="lightbox-main-stage" onClick={onClose}>
        <button
          type="button"
          className="lightbox-nav-btn prev"
          onClick={handlePrev}
          aria-label="Ảnh trước (mũi tên trái)"
        >
          ‹
        </button>

        <img
          key={currentPhoto.src}
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          className="lightbox-img"
          onClick={(e) => e.stopPropagation()}
        />

        <button
          type="button"
          className="lightbox-nav-btn next"
          onClick={handleNext}
          aria-label="Ảnh sau (mũi tên phải)"
        >
          ›
        </button>
      </div>

      {/* Footer Caption */}
      <div className="lightbox-footer" onClick={(e) => e.stopPropagation()}>
        <figcaption className="lightbox-caption-text">
          {currentPhoto.caption}
        </figcaption>
      </div>
    </div>
  );
}
