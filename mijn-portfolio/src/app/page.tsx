import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8">
      <h1 className="text-6xl font-medium tracking-tight">Siem van Hoof</h1>
      <p className="text-muted">Lorem Ipsum</p>
      <ThemeToggle/>
    </main>
  );  
}