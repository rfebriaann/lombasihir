import { useEffect, useRef } from "react";

export default function Group() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => console.error("Autoplay gagal:", error));
      }
    }
  }, []);

  return (
    <div className="w-full h-64 md:h-screen relative">
      <div className="h-full w-full relative">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/compo.mp4" type="video/mp4" />
          Browser Anda tidak mendukung video.
        </video>
      </div>
    </div>
  );
}
