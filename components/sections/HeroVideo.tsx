"use client";

import { useEffect, useRef } from "react";
import { ASSETS } from "@/lib/assets";

/**
 * Full-bleed hero loop. Mobile Safari only autoplays when muted + playsInline
 * are set as real DOM properties and play() is invoked after the element is ready.
 */
export const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      video.pause();
      video.removeAttribute("autoplay");
      return;
    }

    // React's muted prop can miss Safari's autoplay gate — force both.
    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("muted", "");

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        void playPromise.catch(() => {
          // Autoplay blocked (Low Power Mode, data saver). Poster stays visible.
        });
      }
    };

    tryPlay();

    const onReady = () => tryPlay();
    video.addEventListener("loadeddata", onReady);
    video.addEventListener("canplay", onReady);

    // Resume if the tab was backgrounded or bfcache-restored.
    const onVisible = () => {
      if (document.visibilityState === "visible" && video.paused) tryPlay();
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("pageshow", onVisible);

    return () => {
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("pageshow", onVisible);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={ASSETS.heroPoster}
      src={ASSETS.heroVideo}
      controls={false}
      disablePictureInPicture
      disableRemotePlayback
      className="pointer-events-none h-full w-full object-cover motion-reduce:hidden"
      aria-hidden
    />
  );
};
