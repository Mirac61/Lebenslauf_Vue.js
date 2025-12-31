<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

// Projekt-Bilder
import lebenslaufHell from "@/assets/Lebenslauf/LebenslaufHell.png";
import lebenslaufDunkel from "@/assets/Lebenslauf/LebenslaufDunkel.png";

import zeit1 from "@/assets/Zeit/ZeiterfassungEins.png";
import zeit2 from "@/assets/Zeit/ZeiterfassungZwei.png";
import zeit3 from "@/assets/Zeit/ZeiterfassungDrei.png";
import zeit4 from "@/assets/Zeit/ZeiterfassungVier.png";

import iHtml from "@/assets/logos/HTMLKH.png";
import iCss from "@/assets/logos/CSSKH.png";
import iJs from "@/assets/logos/JSKH.png";
import iTs from "@/assets/logos/TSKH.png";
import iVue from "@/assets/logos/VUEJSKH.png";
import iCs from "@/assets/logos/CSharpKH.png";
import iDotnet from "@/assets/logos/DotNetKH.png";
import iSqlite from "@/assets/logos/SQLiteKH.png";

type Project = {
  title: string;
  desc: string;
  tech: { label: string; icon: string }[];
  github?: string;
  live?: string;
  images?: string[];
};

const projects: Project[] = [
  {
    title: "Interaktiver Lebenslauf",
    desc: "Ein moderner, interaktiver Lebenslauf mit Fokus auf cleanes Developer-Design, klare Struktur und gute Lesbarkeit.",
    tech: [
      { label: "HTML", icon: iHtml },
      { label: "CSS", icon: iCss },
      { label: "JavaScript", icon: iJs },
    ],
    images: [lebenslaufHell, lebenslaufDunkel],
    github: "https://github.com/Mirac61/Lebenslauf_IT/tree/main",
  },
  {
    title: "Zeiterfassungssystem",
    desc: "Webbasierte Zeiterfassung mit Rollen, Arbeitszeitverwaltung und übersichtlichem Dashboard – gedacht für kleine Teams.",
    tech: [
      { label: "C#", icon: iCs },
      { label: ".NET", icon: iDotnet },
      { label: "SQLite", icon: iSqlite },
    ],
    images: [zeit1, zeit2, zeit3, zeit4],
    github: "https://github.com/DanielTrbara/Zeiterfassung",
  },
  {
    title: "Rechnung-Ersteller",
    desc: "Tool zum Erstellen und Verwalten von Rechnungen – gedacht für kleine Solo-Selbstständige und Side-Businesses.",
    tech: [
      { label: "C#", icon: iCs },
      { label: ".NET", icon: iDotnet },
      { label: "SQLite", icon: iSqlite },
    ],
    github: "",
  },
  {
    title: "Coming Soon",
    desc: "Ein weiteres Projekt aus dem Studium / Alltag folgt bald.",
    tech: [
      { label: "Vue", icon: iVue },
      { label: "TypeScript", icon: iTs },
    ],
  },
];

// Slideshow-Index pro Projekt
const slideIndex = ref<number[]>(projects.map(() => 0));
let timer: number | null = null;

onMounted(() => {
  timer = window.setInterval(() => {
    for (let i = 0; i < projects.length; i++) {
      const imgs = projects[i].images;
      if (!imgs || imgs.length <= 1) continue;
      slideIndex.value[i] = (slideIndex.value[i] + 1) % imgs.length;
    }
  }, 5000);
});

onUnmounted(() => {
  if (timer !== null) clearInterval(timer);
});
</script>

<template>
  <section id="projekte" class="projekte">
    <div class="sektion-innen">
      <h2 class="sektion-titel">Projekte</h2>

      <div class="box-grid">
        <article v-for="(p, i) in projects" :key="p.title" class="box">
          <div v-if="p.images?.length" class="media">
            <Transition name="slide">
              <img
                :key="slideIndex[i]"
                :src="p.images[slideIndex[i]]"
                :alt="`${p.title} Vorschau`"
                class="media-img"
              />
            </Transition>
          </div>

          <div class="content">
            <div class="top-row">
              <h3 class="title">{{ p.title }}</h3>

              <div class="links">
                <a
                  v-if="p.github"
                  :href="p.github"
                  target="_blank"
                  rel="noreferrer"
                  class="icon-btn"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <img src="@/assets/logos/githubmark.png" alt="" />
                </a>

                <a
                  v-if="p.live"
                  :href="p.live"
                  target="_blank"
                  rel="noreferrer"
                  class="icon-btn"
                  aria-label="Live"
                  title="Live"
                >
                  ↗
                </a>
              </div>
            </div>

            <p class="desc">{{ p.desc }}</p>

            <div class="tech-row">
              <span
                v-for="t in p.tech"
                :key="t.label"
                class="tech-badge"
                :title="t.label"
              >
                <img :src="t.icon" :alt="t.label" class="tech-ico" />
                <span class="tech-label">{{ t.label }}</span>
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projekte {
  padding: 80px 2rem;
}

.sektion-innen {
  max-width: 1400px;
  margin: 0 auto;
}

.sektion-titel {
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 60px;
  margin: 0 auto;
  text-align: center;
  color: var(--detail);
}

/* 3 pro Reihe */
.box-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

@media (max-width: 980px) {
  .box-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 640px) {
  .box-grid {
    grid-template-columns: 1fr;
  }
}

/* Card */
.box {
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.28);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.6);
  padding: 0;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.18s ease,
    border-color 0.18s ease;
}

.box {
  transition:
    transform 0.18s ease,
    border-color 0.18s ease,
    box-shadow 0.18s ease;
}

.box:hover {
  transform: translateY(-4px);
  border-color: rgba(168, 85, 247, 0.35);
  box-shadow:
    0 22px 60px rgba(15, 23, 42, 0.85),
    0 0 0 1px rgba(168, 85, 247, 0.15);
}
.box:hover::before {
  opacity: 1;
}

/* Bild oben */
.media {
  aspect-ratio: 16 / 9;
  background: #020617;
  border-bottom: 1px solid rgba(148, 163, 184, 0.16);
  overflow: hidden;
}

.media-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Content unten */
.content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 190px;
}

.top-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.title {
  margin: 0;
  font-size: 16px;
  line-height: 1.2;
}

/* Links */
.links {
  display: flex;
  gap: 8px;
}

.icon-btn {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.14);
  text-decoration: none;
  color: #e2e8f0;

  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;
}

.icon-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.8);
}

.icon-btn img {
  width: 18px;
  height: 18px;
}

/* Beschreibung */
.desc {
  margin: 0;
  font-size: 13.5px;
  line-height: 1.45;
  opacity: 0.9;
}

/* Tech Badges */
.tech-row {
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 10px;

  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);

  font-size: 12.5px;
  color: #e2e8f0;
}

.tech-ico {
  width: 16px;
  height: 16px;
  display: block;
}

/* Slide Transition */
.slide-enter-active,
.slide-leave-active {
  transition:
    opacity 0.28s ease,
    transform 0.28s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(8px);
}
</style>
