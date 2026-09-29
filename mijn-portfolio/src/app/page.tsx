import Hero from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import Process from "@/components/Process";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkGrid />
      <Process />
      <section
        id="contact-cta"
        className="flex min-h-screen items-center border-t border-line px-3 md:px-8"
      >
        <Reveal>
          <h2 className="text-6xl font-medium tracking-tight md:text-8xl">Contact.</h2>
        </Reveal>
      </section>
    </main>
  );
}