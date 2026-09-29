export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  role: string;
  tags: string[];
  summary: string;
  cover: string;
  gallery: string[];
};

const img = (seed: string, w = 1600, h = 1000) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

const summary =
  "Een korte beschrijving van het project: wat de vraag was, hoe ik het heb aangepakt en wat het resultaat is geworden.";

// ── Placeholderprojecten: vervang later door je eigen werk ──
export const projects: Project[] = [
  {
    slug: "project-een",
    title: "Project Een",
    client: "Klant A",
    year: "2026",
    role: "Design & development",
    tags: ["Web design", "Development"],
    summary,
    cover: img("proj-1", 1200, 900),
    gallery: [img("proj-1-a"), img("proj-1-b", 1000, 1250), img("proj-1-c", 1000, 1250)],
  },
  {
    slug: "project-twee",
    title: "Project Twee",
    client: "Klant B",
    year: "2026",
    role: "Brand identity",
    tags: ["Branding"],
    summary,
    cover: img("proj-2", 1200, 900),
    gallery: [img("proj-2-a"), img("proj-2-b", 1000, 1250), img("proj-2-c", 1000, 1250)],
  },
  {
    slug: "project-drie",
    title: "Project Drie",
    client: "Klant C",
    year: "2025",
    role: "Web design",
    tags: ["Web design"],
    summary,
    cover: img("proj-3", 1200, 900),
    gallery: [img("proj-3-a"), img("proj-3-b", 1000, 1250), img("proj-3-c", 1000, 1250)],
  },
  {
    slug: "project-vier",
    title: "Project Vier",
    client: "Klant D",
    year: "2025",
    role: "Development",
    tags: ["Development", "Motion"],
    summary,
    cover: img("proj-4", 1200, 900),
    gallery: [img("proj-4-a"), img("proj-4-b", 1000, 1250), img("proj-4-c", 1000, 1250)],
  },
  {
    slug: "project-vijf",
    title: "Project Vijf",
    client: "Klant E",
    year: "2025",
    role: "Art direction",
    tags: ["Art direction"],
    summary,
    cover: img("proj-5", 1200, 900),
    gallery: [img("proj-5-a"), img("proj-5-b", 1000, 1250), img("proj-5-c", 1000, 1250)],
  },
  {
    slug: "project-zes",
    title: "Project Zes",
    client: "Klant F",
    year: "2024",
    role: "Design & branding",
    tags: ["Web design", "Branding"],
    summary,
    cover: img("proj-6", 1200, 900),
    gallery: [img("proj-6-a"), img("proj-6-b", 1000, 1250), img("proj-6-c", 1000, 1250)],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);