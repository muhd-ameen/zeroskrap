"use client";

import { useEffect, useRef } from "react";
import { ASSETS } from "@/lib/assets";

/**
 * Full-bleed hero loop.
 *
 * iOS Safari (especially Low Power Mode / cellular) often ignores the autoplay
 * attribute. We force muted + playsInline on the DOM node, call play() when
 * the file is ready, and unlock on the first user gesture as a fallback.
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

    const armMutedInline = () => {
      video.defaultMuted = true;
      video.muted = true;
      video.volume = 0;
      video.playsInline = true;
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "true");
      video.setAttribute("webkit-playsinline", "true");
    };

    armMutedInline();

    let unlocked = false;

    const tryPlay = async () => {
      if (!video.paused) {
        unlocked = true;
        detachGestures();
        return;
      }

      armMutedInline();

      try {
        await video.play();
        unlocked = true;
        detachGestures();
      } catch {
        // Still blocked — wait for a user gesture.
      }
    };

    const onGesture = () => {
      void tryPlay();
    };

    const gestureEvents = [
      "touchstart",
      "touchend",
      "pointerdown",
      "click",
      "scroll",
    ] as const;

    const attachGestures = () => {
      for (const event of gestureEvents) {
        document.addEventListener(event, onGesture, {
          capture: true,
          passive: true,
        });
      }
    };

    const detachGestures = () => {
      for (const event of gestureEvents) {
        document.removeEventListener(event, onGesture, {
          capture: true,
        } as EventListenerOptions);
      }
    };

    attachGestures();

    // Kick off load + play as soon as bytes are available.
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      void tryPlay();
    } else {
      video.load();
    }

    const onReady = () => {
      void tryPlay();
    };

    video.addEventListener("loadedmetadata", onReady);
    video.addEventListener("loadeddata", onReady);
    video.addEventListener("canplay", onReady);
    video.addEventListener("canplaythrough", onReady);

    const onVisible = () => {
      if (document.visibilityState === "visible") void tryPlay();
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("pageshow", onVisible);

    // One more attempt after layout settles (hydration / font swap).
    const bootTimer = window.setTimeout(() => {
      void tryPlay();
    }, 250);

    return () => {
      window.clearTimeout(bootTimer);
      detachGestures();
      video.removeEventListener("loadedmetadata", onReady);
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
      video.removeEventListener("canplaythrough", onReady);
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
