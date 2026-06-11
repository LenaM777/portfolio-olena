import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "../Icons/Icons";
import "./BackstagePass.scss";

const TRACKS = [
  { artist: "Rammstein", song: "Du Hast", src: "/audio/du_hast.mp3" },
  {
    artist: "Lady Gaga",
    song: "Poker Face",
    src: "/audio/poker_face.mp3",
  },
  {
    artist: "Imagine Dragons",
    song: "Believer",
    src: "/audio/believer.mp3",
  },
  {
    artist: "KONGOS",
    song: "Come with Me Now",
    src: "/audio/come_with_me_now.mp3",
  },
  {
    artist: "Lyuk",
    song: "Ti Vi",
    src: "/audio/ti_vi.mp3",
  },
];

const BackstagePass = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isDocked, setIsDocked] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying && isActive) {
      audioRef.current
        .play()
        .catch((err) => console.log("Audio play blocked:", err));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrackIndex, isActive]);

  useEffect(() => {
    const footerElement = document.querySelector(".footer");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsDocked(entry.isIntersecting);
      },
      { rootMargin: "40px" }
    );

    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.disconnect();
      }
    };
  }, []);

  const closeBackstagePass = () => {
    setIsActive(false);
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
    setIsPlaying(true);
  };

  return (
    <>
      <AnimatePresence>
        {!isActive && (
          <motion.button
            className={`rock-trigger ${isDocked ? "rock-trigger__docked" : ""}`}
            onClick={() => setIsActive(true)}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Activate secret rock mode"
            type="button"
          >
            <Icon name="headphones" className="rock-trigger__icon" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isActive && (
          <>
            <motion.div
              className={`rock-player ${isDocked ? "rock-player__docked" : ""}`}
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <button
                className="rock-player__close"
                onClick={closeBackstagePass}
                type="button"
                aria-label="Close player"
              >
                <Icon name="close" className="rock-player__close--icon" />
              </button>

              <div className="rock-player__title">⚡MODE ACTIVE⚡</div>

              <div className="rock-player__track-name">
                <span className="rock-player__artist">
                  {TRACKS[currentTrackIndex].artist}
                </span>
                <span className="rock-player__song">
                  {TRACKS[currentTrackIndex].song}
                </span>
              </div>

              <div className="rock-player__controls">
                <button
                  onClick={handlePrev}
                  type="button"
                  className="rock-player__btn"
                  aria-label="Previous track"
                >
                  <Icon name="prev" />
                </button>
                <button
                  className="rock-player__btn"
                  onClick={() => setIsPlaying(!isPlaying)}
                  type="button"
                  aria-label={isPlaying ? "Pause track" : "Play track"}
                >
                  {isPlaying ? <Icon name="pause" /> : <Icon name="play3" />}
                </button>
                <button
                  onClick={handleNext}
                  type="button"
                  className="rock-player__btn"
                  aria-label="Next track"
                >
                  <Icon name="prev" className="rock-player__next" />
                </button>
              </div>

              <audio
                ref={audioRef}
                src={TRACKS[currentTrackIndex].src}
                onEnded={handleNext}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default BackstagePass;
