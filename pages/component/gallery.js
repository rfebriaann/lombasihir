import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function Gallery() {
  const gallerykiri = useRef(null);
  const gallerykanan = useRef(null);
  const gallerytengah = useRef(null);
  const judul = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      gallerykiri.current,
      3,
      { y: 0 },
      {
        scrollTrigger: {
          trigger: gallerykiri.current,
          start: "top center",
          end: "bottom bottom",
          // markers: true,
          scrub: 3,
        },
        y: -440,
      }
    );
    gsap.fromTo(
      gallerykanan.current,
      3,
      { y: 0 },
      {
        scrollTrigger: {
          trigger: gallerykanan.current,
          start: "top center",
          end: "bottom bottom",
          // markers: true,
          scrub: 3,
        },
        y: -440,
      }
    );
    gsap.fromTo(
      gallerytengah.current,
      1,
      { y: 0 },
      {
        scrollTrigger: {
          trigger: gallerytengah.current,
          start: "top center",
          end: "bottom bottom",
          // markers: true,
          scrub: 1,
        },
        y: -540,
      }
    );
    gsap.fromTo(
      judul.current,
      1,
      { opacity: 1 },
      {
        scrollTrigger: {
          trigger: judul.current,
          start: "350vh center",
          end: "bottom bottom",
          // markers: true,
          scrub: 1,
        },
        opacity: 0,
      }
    );
  });
  return (
    <div>
      <div className="relative h-[2340px] w-full bg-black/90 flex flex-col gap-20 pt-[109px] overflow-hidden">
        <h1
          ref={judul}
          className="font-kyiv font-semibold text-[44px] leading-none z-50 text-white text-center w-1/2 -left-1/2 transform translate-x-1/2"
        >
          Dengarkan, resapi, dan temukan diri sendiri di antara nada dan kata.
        </h1>
        <div className="relative w-full h-full grid grid-cols-3 gap-10">
          <div
            ref={gallerykiri}
            className="absolute flex flex-col gap-14 -left-56 -top-36"
          >
            <div className="relative w-[550px] h-[663px] bg-red-500 rounded-[49px] overflow-hidden">
              <Image
                className=""
                src="https://pophariini.com/wp-content/uploads/2024/09/Lomba-Sihir-Publicity-05-1080x720.jpeg"
                fill
                objectFit="cover"
              />
            </div>
            <div className="relative w-[550px] h-[663px] bg-red-500 rounded-[49px] overflow-hidden">
              <Image
                className=""
                src="https://dapurletter.id/wp-content/uploads/2024/06/Lomba-Sihir-04.jpg"
                fill
                objectFit="cover"
              />
            </div>
            <div className="relative w-[550px] h-[663px] bg-red-500 rounded-[49px] overflow-hidden">
              <Image
                className=""
                src="https://www.nme.com/wp-content/uploads/2021/04/lomba-sihir-credit-press@2000-3000.jpg"
                fill
                objectFit="cover"
              />
            </div>
          </div>
          <div
            ref={gallerytengah}
            className="absolute left-1/2 transform -translate-x-1/2 flex flex-col gap-14"
          >
            <div className="relative w-[680px] h-[663px] bg-red-500 rounded-[49px] overflow-hidden">
              <Image
                className=""
                src="https://bolehmusic.com/wp-content/uploads/2024/05/Lombah-Sihir-Publicity-02.jpg"
                fill
                objectFit="cover"
              />
            </div>
            <div className="relative w-[680px] h-[663px] bg-red-500 rounded-[49px] overflow-hidden">
              <Image
                className=""
                src="https://cdn.grid.id/crop/0x0:0x0/filters:format(webp):quality(100)/photo/2022/07/20/lomba-sihir-photo-3jpg-20220720111725.jpg"
                fill
                objectFit="cover"
              />
            </div>
            <div className="relative w-[680px] h-[663px] bg-red-500 rounded-[49px] overflow-hidden">
              <Image
                className=""
                src="https://manual.co.id/wp-content/uploads/2021/03/Lomba-Sihir-9-980x719.jpg"
                fill
                objectFit="cover"
              />
            </div>
          </div>
          <div
            ref={gallerykanan}
            className="absolute flex flex-col gap-14 -right-56 -top-36"
          >
            <div className="relative w-[550px] h-[663px]  rounded-[49px] overflow-hidden">
              <Image
                className=""
                src="https://cdn.antaranews.com/cache/1200x800/2023/04/12/ED448029-DA00-4E96-B77C-C2C4D8F50208.jpeg"
                fill
                objectFit="cover"
              />
            </div>
            <div className="relative w-[550px] h-[663px] bg-red-500 rounded-[49px] overflow-hidden">
              <Image
                className=""
                src="https://awsimages.detik.net.id/community/media/visual/2024/07/04/lomba-sihir.jpeg?w=700&q=90"
                fill
                objectFit="cover"
              />
            </div>
            <div className="relative w-[550px] h-[663px] bg-red-500 rounded-[49px] overflow-hidden">
              <Image
                className=""
                src="https://soundcorners.com/wp-content/uploads/2021/03/4-3-1024x683.jpg"
                fill
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
