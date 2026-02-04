import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};
const renderText = (text, className, baseWeight = 400) => {
  return [... text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};
const setupTextHover = (container, type) => {
  if (!container) return()=>{};
  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];
  const animateLetters = (letter, weight, duration = 0.25) => {
    return gsap.to(letter, {
      duration: duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
    });
  };
  const handleMouseMove = (e) => {
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;
    letters.forEach((letter) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w / 2));
      const intensity = Math.exp(-(distance ** 2) / 20000);
      animateLetters(letter, min + (max - min) * intensity);
    });
  };
  const handleMouseLeave = () => {

    letters.forEach((letter) => animateLetters(letter, base, 0.3));
  };
  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);
  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};
const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  useGSAP(() => {
    const titleCleanup = setupTextHover(titleRef.current, "title");
    const subTitleCleanup = setupTextHover(subtitleRef.current, "subtitle");
    return () => {
      titleCleanup();
      subTitleCleanup();
    };
  }, []);
  return (
    <section id="welcome">
      <p ref={titleRef}>
        {renderText(
          "Hey. I'm someone! Welcome to my",
          "text-3xl font-georama",
          100
        )}
      </p>
      <h1 ref={subtitleRef} className="mt-7">
        {renderText("Portfolio", "text-9xl italic font-georama",200)}
      </h1>
      <div className="small-screen">
        <p>
          This portfolio is just and only made for desktop/tablet view as for
          now!
        </p>
      </div>
    </section>
  );
};

export default Welcome;
