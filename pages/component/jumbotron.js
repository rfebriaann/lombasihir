import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function Jumbotron() {
  const bunga = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      bunga.current,
      1,
      {
        scrollTrigger: {
          trigger: bunga.current,
          start: "top top",
          end: "end end",
          scrub: 1,
          // markers: true,
        },
        y: 620,
        duration: 3,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: bunga.current,
          start: "top center",
          end: "end end",
          scrub: 1,
          // markers: true,
        },
        y: 860,
        duration: 3,
        // scale: 1.5,
        // ease: "power1.in",
      }
    );
  });
  return (
    <div>
      <div className="relative pt-[86px] pl-[86px] pr-[86px] pb-[223px] h-[1383px] w-full bg-black/90 overflow-hidden">
        <Image
          className="absolute top-0 left-0"
          src="/svg/circle2.svg"
          width={1920}
          height={0}
          alt="Circle"
        />
        <Image
          className="absolute top-0 left-0"
          src="/svg/circlekiri.svg"
          width={50}
          height={20}
          alt="Circle"
        />
        <Image
          className="absolute top-0 right-0"
          src="/svg/circlekanan.svg"
          width={50}
          height={20}
          alt="Circle"
        />
        <Image
          className="absolute -mt-32 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-30"
          src="/svg/mata.svg"
          width={270}
          height={270}
        />
        <Image
          className="absolute -mt-[500px] z-20"
          src="/svg/sinar.svg"
          layout="fill"
          // objectFit="cover"
        />
        <Image
          ref={bunga}
          className="absolute left-1/2 -translate-x-1/2 transform z-50"
          src="/svg/bunga.svg"
          width={300}
          height={300}
        />
        <div className="relative h-full w-full bg-[#8E528F] rounded-[49px] overflow-hidden">
          <Image
            className="absolute"
            src="/svg/batu.svg"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute z-10 bg-gradient-to-t from-[#8E528F] to-black-500/5 h-full w-full">
            <div className="mt-20 flex flex-col font-kyiv font-semibold text-[64px] leading-none z-50 absolute bottom-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full text-white">
              <span>Kadang-kadang Sihir itu Nyata.</span>
              <span className="-mt-8">
                Tanya saja{" "}
                <text className="font-marck font-medium text-[120px] text-[#FFA829]">
                  LombaSihir
                </text>{" "}
                Kalau
              </span>
              <span className="-mt-8">tidak Percaya.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
