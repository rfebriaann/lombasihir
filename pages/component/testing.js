import { TimelineMax } from "gsap/dist/gsap";
import { TimelineLite } from "gsap/dist/gsap";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger, TimelineMax);

export default function Testing() {
  const tunjuk = useRef(null);
  const tab = useRef(null);
  const hold = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    TimelineLite.prototype.wait = function (position) {
      return this.set({}, {}, position);
    };

    var tl = new TimelineMax({ repeat: 0 })
      .wait("+=2")
      .set([tab.current, hold.current, text.current], { y: 0 })
      .to([tab.current, hold.current, text.current], 2, {
        y: (i) => (i === 0 ? -620 : i === 1 ? -310 : -300),
      })
      .wait("-=10")
      .to(tunjuk.current, 1, { y: -540 })
      .wait("+=0.2")
      .to(tunjuk.current, 0.2, { rotateX: -30 })
      .wait("+=0.1")
      .to(tunjuk.current, 0.1, { rotateX: 0 })
      .wait("+=0.1");
    // .to(tab.current, 0.1, { scale: 1.02 })
    // .wait("-=0.1")
    // .to(tab.current, 0.1, { scale: 1 })
    // .wait("-=0.5");
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        className="absolute -right-60 -top-10 z-30 scale-110"
        src="/svg/eclipse2.svg"
        width={800}
        height={800}
      />
      <Image
        ref={tunjuk}
        className="absolute right-[280px] -bottom-[600px] z-50 scale-150 -rotate-6"
        src="/svg/tunjuk2.svg"
        width={250}
        height={250}
      />
      <Image
        ref={hold}
        className="absolute left-[170px] -bottom-[400px] z-50 scale-150 rotate-6"
        src="/svg/pegang.svg"
        width={150}
        height={150}
      />
      <Image
        className="absolute right-60 -bottom-40 z-50 rotate-180"
        src="/svg/eclipse3.svg"
        width={800}
        height={800}
      />
      <Image
        className="absolute right-60 -top-40 z-50"
        src="/svg/eclipse3.svg"
        width={800}
        height={800}
      />
      <Image
        className="absolute -left-40 -top-20 z-30 scale-150"
        src="/svg/eclipse.svg"
        width={500}
        height={500}
      />
      {/* <div className="absolute h-1/3 w-full bg-gradient-to-br from-[#503290] to-[#503290]/0 z-30"></div> */}
      <div className="absolute h-full w-full z-40 flex flex-col items-center">
        <div
          ref={text}
          class="absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-full h-1/4"
        >
          <span class="absolute font-figtree flex border w-fit -tracking-wide bg-gradient-to-r blur-md from-white to-white bg-clip-text text-[100px] box-content font-bold text-transparent text-center select-auto">
            Showreel
          </span>
          <h1 class="relative font-figtree top-0 justify-center -tracking-wide flex bg-gradient-to-r items-center from-white to-white bg-clip-text text-[100px] font-bold text-transparent text-center select-auto">
            Showreel
          </h1>
        </div>
        <div className="relative h-[550px] w-1/2 pt-20">
          <div
            ref={tab}
            className="absolute -bottom-[720px] h-full w-full bg-[#9570e3] rounded-3xl z-50 overflow-hidden border-[10px] border-white/45 
            [transform:perspective(700px)_rotateX(10deg)] skew-x-3"
          >
            <Image src="/cover.jpg" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
      <div className="absolute h-full w-full bg-gradient-to-b from-[#7350C0] via-[#7350C0]/100 to-[#7350C0]/40 z-10"></div>
      <Image
        className="absolute"
        src="/sky2.jpeg"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
