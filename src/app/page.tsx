import InteractiveDemo from "./InteractiveDemo";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Decorative ambient background lights */}
      <div className={styles.ambientLight1} aria-hidden="true" />
      <div className={styles.ambientLight2} aria-hidden="true" />

      {/* Navigation Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.brand}>
            <div className={styles.brandLogo}>M</div>
            <span className={styles.brandName}>MMJ1</span>
            <span className={styles.versionBadge}>v0.1.0</span>
          </div>

          <div className={styles.navActions}>
            <div className={styles.statusPill}>
              <span className={styles.statusDot} />
              <span>Turbopack Ready</span>
            </div>
            <a
              href="https://github.com/v06012005/mmj1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBadge}>
            <span className={styles.sparkle}>✨</span>
            <span>Next.js 16 + React 19 + TypeScript</span>
          </div>

          <h1 className={styles.heroTitle}>
            Khởi Đầu Dự Án <span className={styles.gradientText}>MMJ1</span>
            <br />
            Hiện Đại & Siêu Tốc
          </h1>

          <p className={styles.heroSubtitle}>
            Dự án Next.js của bạn đã được khởi tạo hoàn tất với App Router,
            kiến trúc type-safe và sẵn sàng đẩy lên kho lưu trữ GitHub.
          </p>

          <div className={styles.heroCtas}>
            <a
              href="https://github.com/v06012005/mmj1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryButton}
            >
              <span>Khám Phá GitHub Repo</span>
              <span className={styles.btnArrow}>→</span>
            </a>

            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              <span>Tài Liệu Next.js</span>
            </a>
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section className={styles.featuresSection} aria-label="Tính năng nổi bật">
          <div className={styles.card}>
            <div className={styles.cardIconWrapper}>
              <span className={styles.cardIcon}>⚡</span>
            </div>
            <h2 className={styles.cardTitle}>Turbopack Engine</h2>
            <p className={styles.cardText}>
              Trải nghiệm biên dịch tức thì và Fast Refresh siêu tốc, tối ưu hóa
              quy trình lập trình hàng ngày.
            </p>
            <div className={styles.cardTag}>Sub-second HMR</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIconWrapper}>
              <span className={styles.cardIcon}>🛡️</span>
            </div>
            <h2 className={styles.cardTitle}>Type-Safe Architecture</h2>
            <p className={styles.cardText}>
              Cấu hình nghiêm ngặt với TypeScript 5 giúp phát hiện lỗi sớm và
              đảm bảo chất lượng mã nguồn bền vững.
            </p>
            <div className={styles.cardTag}>Strict Mode TS</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIconWrapper}>
              <span className={styles.cardIcon}>🎨</span>
            </div>
            <h2 className={styles.cardTitle}>Design System Mượt Mà</h2>
            <p className={styles.cardText}>
              Giao diện Dark Theme cao cấp kết hợp hiệu ứng kính (Glassmorphism),
              gradient tinh tế và không có độ trễ runtime.
            </p>
            <div className={styles.cardTag}>Vanilla CSS</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIconWrapper}>
              <span className={styles.cardIcon}>🚀</span>
            </div>
            <h2 className={styles.cardTitle}>Git & Cloud Ready</h2>
            <p className={styles.cardText}>
              Đã liên kết trực tiếp với remote repository GitHub, hỗ trợ triển khai
              ngay lập tức lên Vercel hoặc server riêng.
            </p>
            <div className={styles.cardTag}>Auto Deployable</div>
          </div>
        </section>

        {/* Interactive Playground / Quickstart */}
        <InteractiveDemo />
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <span>MMJ1 Project</span>
            <span className={styles.footerDot}>•</span>
            <span>Tạo bởi Antigravity Pair Programmer</span>
          </div>
          <div className={styles.footerLinks}>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              Next.js
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              React 19
            </a>
            <a
              href="https://github.com/v06012005/mmj1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerLink}
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
