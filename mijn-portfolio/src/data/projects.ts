export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  tags: string[];
  cover: string;
};

// ── Placeholderprojecten: vervang later door je eigen werk ──
export const projects: Project[] = [
  { slug: "project-een", title: "Project Een", client: "Klant A", year: "2026", tags: ["Web design", "Development"], cover: "https://picsum.photos/seed/proj-1/1200/900" },
  { slug: "project-twee", title: "Project Twee", client: "Klant B", year: "2026", tags: ["Branding"], cover: "https://picsum.photos/seed/proj-2/1200/900" },
  { slug: "project-drie", title: "Project Drie", client: "Klant C", year: "2025", tags: ["Web design"], cover: "https://picsum.photos/seed/proj-3/1200/900" },
  { slug: "project-vier", title: "Project Vier", client: "Klant D", year: "2025", tags: ["Development", "Motion"], cover: "https://picsum.photos/seed/proj-4/1200/900" },
  { slug: "project-vijf", title: "Project Vijf", client: "Klant E", year: "2025", tags: ["Art direction"], cover: "https://picsum.photos/seed/proj-5/1200/900" },
  { slug: "project-zes", title: "Project Zes", client: "Klant F", year: "2024", tags: ["Web design", "Branding"], cover: "https://picsum.photos/seed/proj-6/1200/900" },
];