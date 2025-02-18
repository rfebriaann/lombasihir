import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function About() {
  const judul = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const paragraph1 = useRef(null);
  const paragraph2 = useRef(null);
  const paragraph3 = useRef(null);
  const paragraph4 = useRef(null);
  const paragraph5 = useRef(null);
  const paragraph6 = useRef(null);
  const paragraph11 = useRef(null);
  const paragraph22 = useRef(null);
  const paragraph33 = useRef(null);
  const paragraph44 = useRef(null);
  const paragraph55 = useRef(null);
  const paragraph66 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      judul.current,
      1,
      {
        scrollTrigger: {
          trigger: judul.current,
          start: "100vh center",
          end: "bottom bottom",
          scrub: 1,
        },
        y: -480,
        duration: 3,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: judul.current,
          start: "100vh center",
          end: "400vh center",
          scrub: 1,
        },
        y: 0,
        duration: 3,
      }
    );

    gsap.fromTo(
      image1.current,
      1,
      {
        x: -800,
        y: 540,
      },
      {
        scrollTrigger: {
          trigger: image1.current,
          start: "-1000vh top",
          end: "center bottom",
          //
          scrub: 1,
        },
        x: 0,
        y: 0,
      }
    );
    gsap.fromTo(
      text2.current,
      1,
      {
        x: -800,
        y: 40,
      },
      {
        scrollTrigger: {
          trigger: text2.current,
          start: "top 300vh",
          end: "bottom bottom",
          //
          scrub: 1,
        },
        x: 0,
        y: 0,
      }
    );
    // gsap.fromTo(
    //   text1.current,
    //   1,
    //   {
    //     x: 800,
    //     y: 40,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: text1.current,
    //       start: "top 300vh",
    //       end: "bottom bottom",
    //       //
    //       scrub: 1,
    //     },
    //     x: 0,
    //     y: 0,
    //   }
    // );
    gsap.fromTo(
      image2.current,
      1,
      {
        x: 800,
        y: 540,
      },
      {
        scrollTrigger: {
          trigger: image2.current,
          start: "-1000vh top",
          end: "center bottom",
          //
          scrub: 1,
        },
        x: 0,
        y: 0,
      }
    );
    gsap.fromTo(
      paragraph1.current,
      1,
      {
        y: -280,
        duration: 3,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: paragraph1.current,
          start: "100vh center",
          end: "100vh center",

          scrub: 1,
        },
        y: 0,
        duration: 3,
      }
    );
    gsap.fromTo(
      paragraph11.current,
      1,
      {
        y: -280,
        duration: 3,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: paragraph11.current,
          start: "100vh center",
          end: "100vh center",

          scrub: 1,
        },
        y: 0,
        duration: 3,
      }
    );
    gsap.fromTo(
      paragraph2.current,
      1,
      {
        y: -280,
        duration: 3,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: paragraph2.current,
          start: "100vh center",
          end: "100vh center",

          scrub: 1,
        },
        y: 0,
        duration: 3,
      }
    );
    gsap.fromTo(
      paragraph22.current,
      1,
      {
        y: -280,
        duration: 3,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: paragraph22.current,
          start: "100vh center",
          end: "100vh center",

          scrub: 1,
        },
        y: 0,
        duration: 3,
      }
    );
    gsap.fromTo(
      paragraph3.current,
      1,
      {
        y: -280,
        duration: 3,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: paragraph3.current,
          start: "100vh center",
          end: "100vh center",

          scrub: 1,
        },
        y: 0,
        duration: 3,
      }
    );
    gsap.fromTo(
      paragraph33.current,
      1,
      {
        y: -280,
        duration: 3,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: paragraph33.current,
          start: "100vh center",
          end: "100vh center",

          scrub: 1,
        },
        y: 0,
        duration: 3,
      }
    );
    gsap.fromTo(
      paragraph4.current,
      1,
      {
        y: -280,
        duration: 3,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: paragraph4.current,
          start: "100vh center",
          end: "100vh center",

          scrub: 1,
        },
        y: 0,
        duration: 3,
      }
    );
    gsap.fromTo(
      paragraph44.current,
      1,
      {
        y: -280,
        duration: 3,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: paragraph44.current,
          start: "100vh center",
          end: "100vh center",

          scrub: 1,
        },
        y: 0,
        duration: 3,
      }
    );
    gsap.fromTo(
      paragraph5.current,
      1,
      {
        y: -280,
        duration: 3,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: paragraph5.current,
          start: "100vh center",
          end: "100vh center",

          scrub: 1,
        },
        y: 0,
        duration: 3,
      }
    );
    gsap.fromTo(
      paragraph55.current,
      1,
      {
        y: -280,
        duration: 3,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: paragraph55.current,
          start: "100vh center",
          end: "100vh center",

          scrub: 1,
        },
        y: 0,
        duration: 3,
      }
    );
    gsap.fromTo(
      paragraph6.current,
      1,
      {
        y: -280,
        duration: 3,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: paragraph6.current,
          start: "100vh center",
          end: "100vh center",

          scrub: 1,
        },
        y: 0,
        duration: 3,
      }
    );
    gsap.fromTo(
      paragraph66.current,
      1,
      {
        y: -280,
        duration: 3,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: paragraph66.current,
          start: "100vh center",
          end: "100vh center",

          scrub: 1,
        },
        y: 0,
        duration: 3,
      }
    );
  });

  return (
    <div>
      <div className="relative h-[1535px] w-full bg-black/90 pl-[86px] pr-[86px] pb-[86px] overflow-hidden">
        <div className=" h-full w-full bg-[#EDAE46] rounded-[49px] p-20">
          <div className=" overflow-hidden">
            <div
              ref={judul}
              className="h-full w-full flex flex-col font-kyiv font-semibold text-[64px] leading-none z-50 text-white text-center"
            >
              <span>Musik yang menghinoptis.</span>
              <span className="-mt-8">
                Lirik yang{" "}
                <text className="font-marck font-medium text-[120px] text-black/90 -tracking-wider">
                  Bercerita
                </text>{" "}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-end gap-20 h-1/2 w-full">
            <Image
              ref={image1}
              className="absolute -left-0 top-[240px] transform z-30"
              src="/svg/gallerykiri.svg"
              width={500}
              height={500}
            />
            <div className="basis-2/3 flex flex-col text-right leading-tight">
              <span className="overflow-hidden">
                <p
                  ref={paragraph1}
                  className="font-poppins font-medium text-[40px] overflow-hidden"
                >
                  Lomba Sihir bukan sekadar band, kami
                </p>
              </span>
              <span className="overflow-hidden">
                <p
                  ref={paragraph2}
                  className="font-poppins font-medium text-[40px] overflow-hidden"
                >
                  adalah sekumpulan pemimpi yang
                </p>
              </span>
              <span className="overflow-hidden">
                <p
                  ref={paragraph3}
                  className="font-poppins font-medium text-[40px] overflow-hidden"
                >
                  yang menjahit melodi dan kata menjadi
                </p>
              </span>{" "}
              <span className="overflow-hidden">
                <p
                  ref={paragraph4}
                  className="font-poppins font-medium text-[40px] overflow-hidden"
                >
                  satu. Terinspirasi dari realitas dan
                </p>
              </span>
              <span className="overflow-hidden">
                <p
                  ref={paragraph5}
                  className="font-poppins font-medium text-[40px] overflow-hidden"
                >
                  imajinasi, kami menciptakan musik yang
                </p>
              </span>
              <span className="overflow-hidden">
                <p
                  ref={paragraph6}
                  className="font-poppins font-medium text-[40px] overflow-hidden"
                >
                  bisa menjadi latar cerita hidupmu.
                </p>
              </span>
            </div>
          </div>
          <div className="relative -mt-10 flex items-center justify-start gap-20 h-1/2 w-full">
            <div className="basis-2/3 flex flex-col text-left leading-tight -mt-10">
              <span className="overflow-hidden">
                <p
                  ref={paragraph11}
                  className="font-poppins font-medium text-[40px] overflow-hidden"
                >
                  Dari panggung kecil hingga festival
                </p>
              </span>
              <span className="overflow-hidden">
                <p
                  ref={paragraph22}
                  className="font-poppins font-medium text-[40px] overflow-hidden"
                >
                  besar, kami hadir untuk membawa
                </p>
              </span>
              <span className="overflow-hidden">
                <p
                  ref={paragraph33}
                  className="font-poppins font-medium text-[40px] overflow-hidden"
                >
                  pengalaman yang lebih dari sekadar
                </p>
              </span>
              <span className="overflow-hidden">
                <p
                  ref={paragraph44}
                  className="font-poppins font-medium text-[40px] overflow-hidden"
                >
                  lagu. Setiap nada, setiap kata, adalah
                </p>
              </span>
              <span className="overflow-hidden">
                <p
                  ref={paragraph55}
                  className="font-poppins font-medium text-[40px] overflow-hidden"
                >
                  perjalanan yang ingin kami bagikan
                </p>
              </span>
              <span className="overflow-hidden">
                <p
                  ref={paragraph66}
                  className="font-poppins font-medium text-[40px] overflow-hidden"
                >
                  bersamamu.
                </p>
              </span>
            </div>
            <Image
              ref={image2}
              className="absolute -right-40  transform z-30"
              src="/svg/gallerykanan.svg"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
