"use client";

import { useEffect, useRef, useState } from "react";
import { ASSETS } from "@/lib/assets";
import { cn } from "@/lib/utils";

/**
 * Full-bleed muted hero loop tuned for mobile Chrome / iOS Safari.
 *
 * Why this shape works:
 * 1. Never put `autoplay` in the markup — on Low Power Mode / strict autoplay
 *    policies, that attribute forces a native play overlay you cannot hide.
 * 2. Arm muted + playsInline BEFORE assigning `src`, then call play() from JS.
 * 3. Keep the <video> invisible until the `playing` event — poster underneath
 *    covers the gap, so users never see a giant play button.
 * 4. First touch / scroll unlocks playback when the browser still blocks it.
 */
export const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let cancelled = false;
    let playing = false;

    const arm = () => {
      video.defaultMuted = true;
      video.muted = true;
      video.volume = 0;
      video.playsInline = true;
      video.loop = true;
      video.disablePictureInPicture = true;
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.setAttribute("x5-playsinline", "true");
      video.setAttribute("x5-video-player-type", "h5");
      video.setAttribute("x5-video-player-fullscreen", "false");
    };

    const markPlaying = () => {
      if (cancelled || playing) return;
      playing = true;
      setVisible(true);
      detachGestures();
    };

    const tryPlay = async () => {
      if (cancelled || !video.paused) {
        if (!video.paused) markPlaying();
        return;
      }

      arm();

      try {
        await video.play();
        markPlaying();
      } catch {
        // Blocked until a gesture — poster stays; video stays opacity-0.
      }
    };

    const onGesture = () => {
      void tryPlay();
    };

    const gestureEvents = [
      "touchstart",
      "pointerdown",
      "click",
      "keydown",
      "scroll",
      "wheel",
    ] as const;

    const attachGestures = () => {
      for (const event of gestureEvents) {
        window.addEventListener(event, onGesture, {
          capture: true,
          passive: true,
        });
      }
    };

    const detachGestures = () => {
      for (const event of gestureEvents) {
        window.removeEventListener(event, onGesture, {
          capture: true,
        } as EventListenerOptions);
      }
    };

    arm();
    attachGestures();

    // Assign src only after mute is locked — avoids a unmuted autoplay attempt.
    if (video.getAttribute("src") !== ASSETS.heroVideo) {
      video.src = ASSETS.heroVideo;
    }
    video.load();

    const onPlaying = () => markPlaying();
    const onReady = () => {
      void tryPlay();
    };

    video.addEventListener("playing", onPlaying);
    video.addEventListener("loadeddata", onReady);
    video.addEventListener("canplay", onReady);

    // Apple pattern: start via timed JS play(), not the autoplay attribute.
    const bootTimers = [0, 100, 400, 1000].map((ms) =>
      window.setTimeout(() => {
        void tryPlay();
      }, ms),
    );

    const onVisible = () => {
      if (document.visibilityState === "visible") void tryPlay();
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("pageshow", onVisible);

    const io =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            (entries) => {
              if (entries.some((entry) => entry.isIntersecting)) {
                void tryPlay();
              }
            },
            { threshold: 0.15 },
          )
        : null;
    io?.observe(video);

    return () => {
      cancelled = true;
      bootTimers.forEach((id) => window.clearTimeout(id));
      detachGestures();
      io?.disconnect();
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("pageshow", onVisible);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="auto"
      controls={false}
      disablePictureInPicture
      disableRemotePlayback
      // No autoPlay / poster / src here — see effect above.
      className={cn(
        "hero-video pointer-events-none h-full w-full object-cover motion-reduce:hidden",
        "transition-opacity duration-500 ease-soft",
        visible ? "opacity-100" : "opacity-0",
      )}
      aria-hidden
    />
  );
};
