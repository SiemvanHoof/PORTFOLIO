"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

type Props = {
  lines: string[];
  className?: string;
  tag?: "h1" | "h2" | "h3";
};

export default function LineReveal({ lines, className, tag = "h2" }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const Tag = tag;

  useGSAP(
    () => {
      const els = ref.current!.querySelectorAll(".lr-line");
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(els, { y: 0 });
        return;
      }
      gsap.to(els, {
        y: 0,
        duration: 1.1,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line) => (
        <span key={line} className="block overflow-hidden pb-[0.06em]">
          <span className="lr-line block" style={{ transform: "translateY(110%)" }}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}