import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";

const sections = [
  { id: "work", title: "Selected work." },
  { id: "process", title: "Werkwijze." },
  { id: "contact-cta", title: "Contact." },
];

export default function Home() {
  return (
    <main>
      <Hero />
      {sections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className="flex min-h-screen items-center border-t border-line px-3 md:px-8"
        >
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-widest text-muted">0{i + 1}</p>
            <h2 className="text-6xl font-medium tracking-tight md:text-8xl">{s.title}</h2>
          </Reveal>
        </section>
      ))}
    </main>
  );
}