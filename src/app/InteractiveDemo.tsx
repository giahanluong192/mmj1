"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function InteractiveDemo() {
  const [copied, setCopied] = useState(false);
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState<"quickstart" | "stack" | "git">("quickstart");

  const repoCommand = "git clone https://github.com/v06012005/mmj1.git";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(repoCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section className={styles.interactiveSection} id="interactive-demo">
      <div className={styles.interactiveHeader}>
        <div className={styles.tabList}>
          <button
            className={`${styles.tabBtn} ${activeTab === "quickstart" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("quickstart")}
            type="button"
          >
            🚀 Khởi chạy nhanh
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === "stack" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("stack")}
            type="button"
          >
            ⚡ Tech Stack
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === "git" ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab("git")}
            type="button"
          >
            📦 Git & Repo
          </button>
        </div>

        <div className={styles.counterWidget}>
          <span className={styles.counterLabel}>Tương tác thử:</span>
          <button
            className={styles.counterBtn}
            onClick={() => setCount((prev) => prev + 1)}
            type="button"
            title="Nhấp để tăng bộ đếm"
          >
            🔥 {count} clicks
          </button>
          {count > 0 && (
            <button
              className={styles.counterResetBtn}
              onClick={() => setCount(0)}
              type="button"
              title="Đặt lại"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      <div className={styles.interactiveBody}>
        {activeTab === "quickstart" && (
          <div className={styles.tabContent}>
            <div className={styles.codeSnippet}>
              <div className={styles.codeSnippetHeader}>
                <span className={styles.terminalDots}>
                  <span className={styles.dotRed} />
                  <span className={styles.dotYellow} />
                  <span className={styles.dotGreen} />
                </span>
                <span className={styles.codeSnippetTitle}>bash — dev server</span>
                <button
                  className={styles.copyBtn}
                  onClick={() => {
                    navigator.clipboard.writeText("npm run dev");
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  type="button"
                >
                  {copied ? "✓ Đã sao chép!" : "Copy"}
                </button>
              </div>
              <pre className={styles.codeBlock}>
                <code>
                  <span className={styles.codeComment}># Khởi động máy chủ phát triển (Turbopack)</span>
                  <br />
                  <span className={styles.codeCommand}>npm run dev</span>
                  <br />
                  <br />
                  <span className={styles.codeComment}># Mở trình duyệt tại:</span>
                  <br />
                  <span className={styles.codeOutput}>Ready in 800ms ➜ http://localhost:3000</span>
                </code>
              </pre>
            </div>
          </div>
        )}

        {activeTab === "stack" && (
          <div className={styles.tabContent}>
            <div className={styles.stackGrid}>
              <div className={styles.stackItem}>
                <span className={styles.stackIcon}>▲</span>
                <div>
                  <strong>Next.js 16</strong>
                  <p>Turbopack, App Router & Server Components</p>
                </div>
              </div>
              <div className={styles.stackItem}>
                <span className={styles.stackIcon}>⚛️</span>
                <div>
                  <strong>React 19</strong>
                  <p>Modern Actions & Compiler Optimizations</p>
                </div>
              </div>
              <div className={styles.stackItem}>
                <span className={styles.stackIcon}>🔷</span>
                <div>
                  <strong>TypeScript 5</strong>
                  <p>Strict typing & end-to-end type safety</p>
                </div>
              </div>
              <div className={styles.stackItem}>
                <span className={styles.stackIcon}>🎨</span>
                <div>
                  <strong>Vanilla CSS</strong>
                  <p>Custom CSS Variables & zero runtime overhead</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "git" && (
          <div className={styles.tabContent}>
            <div className={styles.gitContainer}>
              <p className={styles.gitDesc}>
                Repository đã được đồng bộ với GitHub tại remote origin:
              </p>
              <div className={styles.copyBox}>
                <code className={styles.copyCode}>{repoCommand}</code>
                <button className={styles.actionBtn} onClick={handleCopy} type="button">
                  {copied ? "✓ Đã copy" : "Copy lệnh clone"}
                </button>
              </div>
              <div className={styles.gitBadges}>
                <span className={styles.gitStatusBadge}>● main branch</span>
                <span className={styles.gitStatusBadge}>● origin/main (up to date)</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
