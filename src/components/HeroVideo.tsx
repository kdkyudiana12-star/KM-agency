"use client";

import { useEffect, useRef } from "react";

/**
 * iOS only autoplays muted inline video, and React doesn't reliably render
 * the `muted` attribute into server HTML — so Safari can see an unmuted
 * video, refuse autoplay, and show its big play button. This sets muted on
 * the element directly and starts playback from code. When the browser
 * still blocks it (e.g. iOS Low Power Mode), the first touch, click, or
 * scroll retries, which iOS allows.
 */
export default function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const events = ["touchstart", "click", "scroll", "keydown"] as const;
    const removeListeners = () =>
      events.forEach((event) => window.removeEventListener(event, tryPlay));

    function tryPlay() {
      if (!video) return;
      video
        .play()
        .then(removeListeners)
        .catch(() => {
          // Still blocked; the poster stays visible until the next attempt.
        });
    }

    tryPlay();
    events.forEach((event) =>
      window.addEventListener(event, tryPlay, { passive: true })
    );
    return removeListeners;
  }, []);

  return (
    <video
      ref={ref}
      className="hero-video absolute inset-0 h-full w-full object-cover"
      src={src}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      disablePictureInPicture
      disableRemotePlayback
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}
