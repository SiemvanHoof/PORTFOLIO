import Reveal from "@/components/Reveal";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="flex min-h-screen items-center px-6 md:px-12">
      <Reveal>
        <h1 className="text-6xl font-medium tracking-tight md:text-8xl">About.</h1>
      </Reveal>
    </main>
  );
}