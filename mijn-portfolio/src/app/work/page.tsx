import type { Metadata } from "next";
import LineReveal from "@/components/LineReveal";
import Reveal from "@/components/Reveal";
import ProjectList from "@/components/ProjectList";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <main className="pt-32 md:pt-40">
      <div className="flex flex-col gap-8 px-3 pb-16 md:flex-row md:items-end md:justify-between md:px-8 md:pb-20">
        <LineReveal
          tag="h1"
          lines={["Selected", "work."]}
          className="text-[16vw] font-medium leading-[1.05] tracking-tighter md:text-[9vw]"
        />
        <Reveal delay={0.2}>
          <p className="max-w-xs text-sm leading-relaxed text-muted md:mb-[0.8em] md:text-right md:text-base">
            Een overzicht van projecten waar ik aan heb gewerkt, van landingspagina&apos;s tot complete websites.
          </p>
        </Reveal>
      </div>

      <ProjectList />
    </main>
  );
}