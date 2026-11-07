"use client";

import { useState, useEffect, useRef } from "react";

type VoiceOption = "nu-bac" | "nu-nam" | "nam-bac" | "nam-nam";

interface VoiceMeta {
  id: VoiceOption;
  label: string;
  gender: "female" | "male";
  region: "bac" | "nam";
  pitch: number;
  rateMultiplier: number;
}

const VOICE_OPTIONS: VoiceMeta[] = [
  {
    id: "nu-bac",
    label: "Nữ miền Bắc",
    gender: "female",
    region: "bac",
    pitch: 1.06,
    rateMultiplier: 0.96,
  },
  {
    id: "nu-nam",
    label: "Nữ miền Nam",
    gender: "female",
    region: "nam",
    pitch: 1.18,
    rateMultiplier: 1.02,
  },
  {
    id: "nam-bac",
    label: "Nam miền Bắc",
    gender: "male",
    region: "bac",
    pitch: 0.82,
    rateMultiplier: 0.97,
  },
  {
    id: "nam-nam",
    label: "Nam miền Nam",
    gender: "male",
    region: "nam",
    pitch: 0.88,
    rateMultiplier: 1.0,
  },
];

const SPEED_OPTIONS = [
  { value: 0.75, label: "0.75x" },
  { value: 1.0, label: "1.00x" },
  { value: 1.25, label: "1.25x" },
  { value: 1.5, label: "1.50x" },
  { value: 2.0, label: "2.00x" },
];

export default function ArticleAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedVoiceId, setSelectedVoiceId] = useState<VoiceOption>("nu-bac");
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [progressPct, setProgressPct] = useState<number>(0);
  const [elapsedSec, setElapsedSec] = useState<number>(0);
  const [totalSec, setTotalSec] = useState<number>(285); // 4:45 reference
  const [sentences, setSentences] = useState<string[]>([]);
  const [currentSentenceIdx, setCurrentSentenceIdx] = useState<number>(0);

  const sentencesRef = useRef<string[]>([]);
  const currentSentenceIdxRef = useRef<number>(0);
  const isPlayingRef = useRef<boolean>(false);
  const speedRef = useRef<number>(1.0);
  const voiceIdRef = useRef<VoiceOption>("nu-bac");
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);

  sentencesRef.current = sentences;
  currentSentenceIdxRef.current = currentSentenceIdx;
  isPlayingRef.current = isPlaying;
  speedRef.current = playbackSpeed;
  voiceIdRef.current = selectedVoiceId;

  // Extract article paragraphs on mount
  useEffect(() => {
    const extractText = () => {
      const nodes = Array.from(
        document.querySelectorAll(".hero-sapo, .body-p")
      );
      const textList: string[] = [];
      nodes.forEach((node) => {
        const text = node.textContent?.trim();
        if (text) {
          // Split into reasonable sentence chunks
          const sList = text
            .split(/(?<=[.?!…])\s+/)
            .map((s) => s.trim())
            .filter((s) => s.length > 5);
          textList.push(...sList);
        }
      });

      if (textList.length > 0) {
        setSentences(textList);
        // Estimate total duration (~160 wpm)
        const totalWords = textList.reduce(
          (sum, s) => sum + s.split(/\s+/).length,
          0
        );
        const estSec = Math.max(180, Math.round((totalWords / 160) * 60));
        setTotalSec(estSec);
      }
    };

    // Run after DOM has settled
    const t = setTimeout(extractText, 800);
    return () => clearTimeout(t);
  }, []);

  // Cleanup speech on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      if (progressTimerRef.current) {
        clearInterval(progressTimerRef.current);
      }
    };
  }, []);

  const speakSentence = (idx: number) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }

    window.speechSynthesis.cancel();

    const list = sentencesRef.current;
    if (idx >= list.length) {
      setIsPlaying(false);
      setCurrentSentenceIdx(0);
      setProgressPct(100);
      return;
    }

    const currentVoiceMeta =
      VOICE_OPTIONS.find((v) => v.id === voiceIdRef.current) || VOICE_OPTIONS[0];

    const utterance = new SpeechSynthesisUtterance(list[idx]);
    utterance.lang = "vi-VN";
    utterance.rate = speedRef.current * currentVoiceMeta.rateMultiplier;
    utterance.pitch = currentVoiceMeta.pitch;

    // Pick a Vietnamese system voice if available
    const availableVoices = window.speechSynthesis.getVoices();
    const viVoices = availableVoices.filter(
      (v) => v.lang.startsWith("vi") || v.lang.includes("VN")
    );
    if (viVoices.length > 0) {
      if (currentVoiceMeta.gender === "female") {
        const femaleVoice = viVoices.find((v) =>
          /female|linh|mai|nu|woman/i.test(v.name)
        );
        utterance.voice = femaleVoice || viVoices[0];
      } else {
        const maleVoice = viVoices.find((v) =>
          /male|nam|minh|khoa|man/i.test(v.name)
        );
        utterance.voice = maleVoice || viVoices[0];
      }
    }

    utterance.onend = () => {
      if (isPlayingRef.current) {
        const nextIdx = idx + 1;
        setCurrentSentenceIdx(nextIdx);
        if (list.length > 0) {
          setProgressPct((nextIdx / list.length) * 100);
        }
        speakSentence(nextIdx);
      }
    };

    utterance.onerror = (e) => {
      if (e.error !== "canceled" && isPlayingRef.current) {
        const nextIdx = idx + 1;
        setCurrentSentenceIdx(nextIdx);
        speakSentence(nextIdx);
      }
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleTogglePlay = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("Trình duyệt không hỗ trợ Web Speech API.");
      return;
    }

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    } else {
      setIsPlaying(true);
      speakSentence(currentSentenceIdx);

      // Start elapsed timer
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      progressTimerRef.current = setInterval(() => {
        setElapsedSec((prev) => {
          const next = prev + 1;
          if (next >= totalSec) {
            return totalSec;
          }
          return next;
        });
      }, 1000 / playbackSpeed);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPct = parseFloat(e.target.value);
    setProgressPct(newPct);

    const list = sentencesRef.current;
    if (list.length > 0) {
      const newIdx = Math.min(
        list.length - 1,
        Math.floor((newPct / 100) * list.length)
      );
      setCurrentSentenceIdx(newIdx);
      setElapsedSec(Math.round((newPct / 100) * totalSec));
      if (isPlaying) {
        speakSentence(newIdx);
      }
    }
  };

  const handleChangeVoice = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newVoiceId = e.target.value as VoiceOption;
    setSelectedVoiceId(newVoiceId);
    voiceIdRef.current = newVoiceId;
    if (isPlaying) {
      speakSentence(currentSentenceIdx);
    }
  };

  const handleChangeSpeed = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSpeed = parseFloat(e.target.value);
    setPlaybackSpeed(newSpeed);
    speedRef.current = newSpeed;
    if (isPlaying) {
      speakSentence(currentSentenceIdx);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div
      className="article-audio-player-bar"
      role="region"
      aria-label="Thanh phát giọng đọc AI toàn bộ bài báo"
    >
      {/* Play / Pause Button */}
      <button
        type="button"
        className="audio-bar-play-btn"
        onClick={handleTogglePlay}
        aria-label={isPlaying ? "Tạm dừng đọc bài báo" : "Phát giọng đọc AI bài báo"}
      >
        {isPlaying ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 4.5v15l12-7.5-12-7.5z" />
          </svg>
        )}
      </button>

      {/* Progress Track */}
      <div className="audio-bar-track-wrap">
        <input
          type="range"
          min="0"
          max="100"
          step="0.5"
          value={progressPct}
          onChange={handleSeek}
          className="audio-bar-slider"
          aria-label="Tiến trình đọc bài báo"
        />
        <div
          className="audio-bar-fill"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Duration Countdown / Elapsed */}
      <div className="audio-bar-time" aria-live="off">
        {formatTime(totalSec - elapsedSec > 0 ? totalSec - elapsedSec : totalSec)}
      </div>

      {/* Speed Dropdown */}
      <div className="audio-bar-select-wrap">
        <select
          value={playbackSpeed}
          onChange={handleChangeSpeed}
          className="audio-bar-dropdown"
          aria-label="Chọn tốc độ đọc"
        >
          {SPEED_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="audio-bar-caret">⌄</span>
      </div>

      {/* Vertical Pipe Divider */}
      <span className="audio-bar-divider" aria-hidden="true">|</span>

      {/* Microphone Icon */}
      <div className="audio-bar-mic-icon" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
          <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
        </svg>
      </div>

      {/* Voice Selection Dropdown */}
      <div className="audio-bar-select-wrap audio-voice-select-wrap">
        <select
          value={selectedVoiceId}
          onChange={handleChangeVoice}
          className="audio-bar-dropdown audio-voice-dropdown"
          aria-label="Chọn giọng đọc AI"
        >
          {VOICE_OPTIONS.map((v) => (
            <option key={v.id} value={v.id}>
              {v.label}
            </option>
          ))}
        </select>
        <span className="audio-bar-caret">⌄</span>
      </div>
    </div>
  );
}
