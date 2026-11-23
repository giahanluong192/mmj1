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
    src: "/photo-v-concert-vtv.jpg",
    alt: "Khán giả tại V Concert – Rạng rỡ Việt Nam đón khoảng 25.000 người ở Hà Nội",
    caption: (
      <>
        <em>V Concert – Rạng rỡ Việt&nbsp;Nam</em> đã đón khoảng 25.000 khán giả tại Hà&nbsp;Nội, sự trưởng thành về tâm lý sẵn sàng chi trả của công chúng nội địa là bệ phóng lớn nhất của thị trường biểu diễn Việt&nbsp;Nam giai đoạn 2024–2026. (Ảnh: VTV Online)
      </>
    ),
  },
  {
    id: "photo-1",
    src: "/photo-gdragon-ocean-park-3.jpg",
    alt: "Hai đêm diễn G-DRAGON 2025 WORLD TOUR [Übermensch] in Hanoi tại Vinhomes Ocean Park 3",
    caption: (
      <>
        Gần 100.000 khán giả đã đến xem hai đêm diễn <em>G-DRAGON 2025 WORLD TOUR [Übermensch] in Hanoi</em> tại Vinhomes Ocean Park 3 vào ngày 8 và 9/11/2025. Những siêu sự kiện chứng minh sức hút của thị trường Việt&nbsp;Nam, nhưng vẫn chỉ là những điểm sáng đơn lẻ giữa bức tranh tổng thể. (Ảnh: Tiếng nói Việt&nbsp;Nam)
      </>
    ),
  },
  {
    id: "photo-2",
    src: "/photo-mydinh-traffic-bigbang.jpg",
    alt: "Giao thông quanh sân vận động Quốc gia Mỹ Đình tắc nghẽn hơn một giờ đồng hồ sau đêm diễn BIGBANG",
    caption: (
      <>
        Giao thông quanh sân vận động Quốc gia Mỹ&nbsp;Đình tắc nghẽn hơn một giờ đồng hồ sau đêm diễn thứ hai đón hơn 40.000 khán giả của BIGBANG (25/10/2026). Hạ tầng kết nối chưa theo kịp quy mô đại nhạc hội là một trong những điểm nghẽn lớn với các đơn vị tổ chức quốc tế. (Ảnh: Báo Tiền Phong)
      </>
    ),
  },
  {
    id: "photo-3",
    src: "/photo-8wonder-jbalvin-tlinh.jpg",
    alt: "Siêu sao J Balvin và rapper Tlinh biểu diễn chung tại đại nhạc hội 8Wonder: Moments of Wonder ở Hà Nội",
    caption: (
      <>
        Tối 23/8/2025, siêu sao J Balvin (Colombia) và rapper Tlinh (Việt&nbsp;Nam) biểu diễn chung tại đại nhạc hội <em>8Wonder: Moments of Wonder</em> trước hơn 50.000 khán giả ở Hà&nbsp;Nội. Sự kết hợp giữa nội lực sản xuất trong nước và chính sách tiến bộ sẽ là chìa khóa đưa Việt&nbsp;Nam trở thành điểm hẹn mới của nền công nghiệp biểu diễn châu&nbsp;Á. (Ảnh: Báo Thanh niên)
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
