// src/projects.ts
export interface Project {
  name: string; // Name im Terminal (z.B. "zeit")
  owner: string; // GitHub-User
  repo: string; // Repo-Name
}

export const projects: Project[] = [
  {
    name: "zeit",
    owner: "DanielTrbara",
    repo: "Zeiterfassung",
  },
  {
    name: "rechnungen",
    owner: "Mirac61",
    repo: "DEIN-RECHNUNGS-REPO",
  },
  {
    name: "lebenslauf",
    owner: "Mirac61",
    repo: "Lebenslauf_Vue_js", // anpassen
  },
];
