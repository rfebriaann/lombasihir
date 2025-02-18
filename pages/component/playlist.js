import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Playlist() {
  const bintang = useRef(null);
  const pathRef = useRef(null);
  const judul = useRef(null);
  const gallerykiri = useRef(null);
  const gallerykanan = useRef(null);
  const stick = useRef(null);
  const tangankiri = useRef(null);
  const cewek = useRef(null);
  const cowok = useRef(null);
  const wajik = useRef(null);
  useEffect(() => {
    const path = pathRef.current;
    const pathLength = pathRef.current.getTotalLength();
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });
    gsap.fromTo(
      path,
      { strokeDashoffset: pathLength }, // Dari
      {
        strokeDashoffset: 2,
        duration: 5,
        ease: "power3.out",
        yoyo: true,
        scrollTrigger: {
          trigger: path,
          start: "100vh 300vh",
          end: "bottom center",
          // markers: true,
          scrub: 5,
        },
      }
    );
    gsap.fromTo(
      bintang.current,
      1,
      { scale: 0 },
      {
        scrollTrigger: {
          trigger: bintang.current,
          start: "-1900vh top",
          end: "-800vh bottom",
          // markers: true,
          scrub: 3,
        },
        scale: 1.5,
      }
    );
    gsap.fromTo(
      judul.current,
      1,
      {
        y: -200,
        duration: 3,
        ease: "back.in",
      },
      {
        scrollTrigger: {
          trigger: judul.current,
          start: "100vh center",
          end: "100vh center",
          // markers: true,
          scrub: 1,
        },
        y: 0,
        duration: 3,
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
        y: -240,
      }
    );
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
        y: -540,
      }
    );
    gsap.fromTo(
      stick.current,
      3,
      { rotate: 0, y: 0 },
      {
        scrollTrigger: {
          trigger: stick.current,
          start: "top center",
          end: "bottom bottom",
          // markers: true,
          scrub: 3,
        },
        // y: -540,
        rotate: 20,
        x: 80,
      }
    );
    gsap.fromTo(
      tangankiri.current,
      3,
      { rotate: 0, y: 0 },
      {
        scrollTrigger: {
          trigger: tangankiri.current,
          start: "top center",
          end: "bottom bottom",
          // markers: true,
          scrub: 3,
        },
        y: -80,
        rotate: -10,
        x: 80,
      }
    );
    gsap.fromTo(
      cewek.current,
      3,
      { rotate: -10, y: 80, x: -180 },
      {
        scrollTrigger: {
          trigger: cewek.current,
          start: "top center",
          end: "bottom bottom",
          // markers: true,
          scrub: 3,
        },
        y: 0,
        rotate: 0,
        x: 0,
      }
    );
    gsap.fromTo(
      cowok.current,
      3,
      { rotate: 10, y: 80, x: 180 },
      {
        scrollTrigger: {
          trigger: cowok.current,
          start: "top center",
          end: "bottom bottom",
          // markers: true,
          scrub: 3,
        },
        y: 0,
        rotate: 0,
        x: 0,
      }
    );
    gsap.fromTo(
      wajik.current,
      3,
      { x: -200 },
      {
        scrollTrigger: {
          trigger: wajik.current,
          start: "top center",
          end: "300vh bottom",
          // markers: true,
          scrub: 3,
        },
        ease: "power3.out",
        x: 0,
        // scale: 1.5,
      }
    );
  });
  return (
    <div>
      <div className="relative h-[2200px] w-full bg-[#8E538F] overflow-y-visible overflow-x-clip">
        <div className="">
          <Image
            ref={bintang}
            className="absolute -top-64 left-1/2 transform -translate-x-1/2 scale-125"
            src="/svg/star.svg"
            width={9000}
            height={9000}
          />
          <svg
            className="absolute left-1/2 -top-[550px] transform -translate-x-1/2 scale-125"
            width="400"
            height="800"
            viewBox="0 0 400 837"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              ref={pathRef}
              d="M197.5 12V382C197.5 441 388 426 388 636C388 923.5 12 850 12 636C12 422 342 435.5 342 636C342 836.5 61 768 61 636C61 504 302.5 477.5 302.5 636C302.5 794.5 108.5 728.703 108.5 636C108.5 543.297 258.5 547.553 258.5 636C258.5 724.447 147.5 701.07 147.5 636C147.5 570.93 224 600.5 224 636C224 664.4 200.833 656.333 192.5 654.5"
              stroke="url(#paint0_linear_178_187)"
              stroke-width="23"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_178_187"
                x1="200"
                y1="12"
                x2="200"
                y2="825.062"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.0896039"
                  stop-color="#562E75"
                  stop-opacity="0"
                />
                <stop offset="0.439" stop-color="#562E75" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 w-full h-20">
          <div className="relative w-full h-full">
            <Image
              ref={wajik}
              className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 scale-150"
              src="/svg/wajik2.svg"
              width={9000}
              height={9000}
            />
          </div>
        </div>
        <div className="relative h-1/4 w-full flex items-center gap-20">
          <Image
            ref={cewek}
            className="absolute left-0"
            src="/svg/cewek.svg"
            width={250}
            height={250}
          />
          <div className="p-2 w-full overflow-hidden">
            <div
              ref={judul}
              className="w-full flex flex-col justify-center font-kyiv font-semibold text-[46px] leading-none z-50 text-white text-center"
            >
              <span>Lagu-lagu yang menemani</span>
              <span className="-mt-8">
                {" "}
                <text className="font-marck font-medium text-[100px] text-[#F1B154] -tracking-wider">
                  Perjalanan
                </text>{" "}
                dari pagi yang
              </span>
              <span className="-mt-8">sibuk hingga malam </span>
              <span className="">yang penuh renungan.</span>
            </div>
          </div>
          <Image
            ref={cowok}
            className="absolute right-0"
            src="/svg/cowok.svg"
            width={250}
            height={250}
          />
        </div>
        <Image
          ref={stick}
          className="absolute w-[300px] top-[740px] right-32 scale-[250%] -rotate-12"
          src="/svg/stick.svg"
          width={500}
          height={500}
        />
        <Image
          ref={tangankiri}
          className="absolute w-[300px] bottom-20 -left-24 scale-[180%] rotate-12"
          src="/svg/tangankiri1.svg"
          width={500}
          height={500}
        />
        <div className="relative w-[900px] grid grid-cols-2 gap-[1px] mt-40 ">
          <div
            ref={gallerykiri}
            className="relative h-full w-full flex flex-col gap-10 px-28"
          >
            <div className="relative h-[709px] w-[406px] bg-[#562E75] rounded-[30px] p-[23px]">
              <div className="relative w-[360px] h-2/3 bg-white/80 rounded-[15px] overflow-hidden">
                <Image
                  src="https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b9/ca/26/b9ca266d-2fd6-bc7f-3ee6-6934b07bc1a1/23UM1IM64708.rgb.jpg/1200x1200bb.jpg"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="h-1/3 flex flex-col justify-between">
                <h1 className="font-kyiv font-semibold text-[40px] tracking-tight text-white">
                  Ribuan Memori
                </h1>
                <div className="w-full flex justify-between items-center px-2">
                  <h1 className="font-poppins font-medium text-[20px] tracking-tight text-white">
                    Dengarkan di
                  </h1>
                  <Image
                    className=""
                    src="/svg/spotify.svg"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
            <div className="relative h-[709px] w-[406px] bg-[#562E75] rounded-[30px] p-[23px]">
              <div className="relative w-[360px] h-2/3 bg-white/80 rounded-[15px] overflow-hidden">
                <Image
                  src="https://cdn-images.dzcdn.net/images/cover/029076d4c5a327bc06a04f9e13ccac52/0x1900-000000-80-0-0.jpg"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="h-1/3 flex flex-col justify-between">
                <h1 className="font-kyiv font-semibold text-[40px] tracking-tight text-white py-4 leading-none">
                  Tidak Ada Waktu Tepat untuk Berita Buruk
                </h1>
                <div className="w-full flex justify-between items-center px-2">
                  <h1 className="font-poppins font-medium text-[20px] tracking-tight text-white">
                    Dengarkan di
                  </h1>
                  <Image
                    className=""
                    src="/svg/spotify.svg"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            ref={gallerykanan}
            className="relative h-full w-full flex flex-col gap-10 px-28 -mt-64"
          >
            <div className="relative h-[709px] w-[406px] bg-[#562E75] rounded-[30px] p-[23px]">
              <div className="relative w-[360px] h-2/3 bg-white/80 rounded-[15px] overflow-hidden">
                <Image
                  src="https://i.scdn.co/image/ab67616d0000b273e7ade99f8d4323ff427e654f"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="h-1/3 flex flex-col justify-between">
                <h1 className="font-kyiv font-semibold text-[40px] tracking-tight text-white leading-none py-4">
                  Selamat Datang di Ujung Dunia
                </h1>
                <div className="w-full flex justify-between items-center px-2">
                  <h1 className="font-poppins font-medium text-[20px] tracking-tight text-white">
                    Dengarkan di
                  </h1>
                  <Image
                    className=""
                    src="/svg/spotify.svg"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
            <div className="relative h-[709px] w-[406px] bg-[#562E75] rounded-[30px] p-[23px]">
              <div className="relative w-[360px] h-2/3 bg-white/80 rounded-[15px] overflow-hidden">
                <Image
                  src="https://images.genius.com/dfa34e0b194fe309d2bc206171daff23.1000x1000x1.png"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="h-1/3 flex flex-col justify-between">
                <h1 className="font-kyiv font-semibold text-[40px] tracking-tight text-white">
                  Selamanya
                </h1>
                <div className="w-full flex justify-between items-center px-2">
                  <h1 className="font-poppins font-medium text-[20px] tracking-tight text-white">
                    Dengarkan di
                  </h1>
                  <Image
                    className=""
                    src="/svg/spotify.svg"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
