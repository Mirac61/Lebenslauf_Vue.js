<script setup lang="ts">
import iHtml from "@/assets/logos/HTMLKH.png";
import iCss from "@/assets/logos/CSSKH.png";
import iJs from "@/assets/logos/JSKH.png";
import iTs from "@/assets/logos/TSKH.png";
import iVue from "@/assets/logos/VUEJSKH.png";

import iCs from "@/assets/logos/CSharpKH.png";
import iDotnet from "@/assets/logos/DotNetKH.png";

// Diese Icons musst du ggf. noch hinzufügen:
import iJava from "@/assets/logos/JAVAKH.png";
import iC from "@/assets/logos/CKH.png";
import iCpp from "@/assets/logos/C++KH.png";
import iSql from "@/assets/logos/sql.png";
import iSqlite from "@/assets/logos/SQLITEKH.png";

type SkillItem = {
  label: string;
  icon: string;
  note: string; // 1 ehrliche Zeile (Proof)
};

type SkillCategory = {
  title: string;
  subtitle: string;
  items: SkillItem[];
};

const categories: SkillCategory[] = [
  {
    title: "Web / Frontend",
    subtitle: "Basics bis solide – gerade im Ausbau",
    items: [
      {
        label: "HTML",
        icon: iHtml,
        note: "Layout, Semantik, strukturierte Seiten",
      },
      { label: "CSS", icon: iCss, note: "Responsive, Grid/Flex, saubere UI" },
      {
        label: "JavaScript",
        icon: iJs,
        note: "noch wacklig – wird im Labor besser",
      },
      {
        label: "TypeScript",
        icon: iTs,
        note: "noch katastrophe – aktuell Lernfokus",
      },
      {
        label: "Vue",
        icon: iVue,
        note: "Portfolio/Komponenten, Routing-Grundlagen",
      },
    ],
  },
  {
    title: "Backend / Sprachen",
    subtitle: "Grundlagen vorhanden, noch nicht „stark“",
    items: [
      { label: "C#", icon: iCs, note: "Basics: Klassen, OOP, kleine Apps" },
      {
        label: ".NET",
        icon: iDotnet,
        note: "Basics: ASP.NET Core grob verstanden",
      },
      {
        label: "Java",
        icon: iJava,
        note: "nur Basics – aktuell am schwächsten",
      },
      { label: "C", icon: iC, note: "Basics: Syntax, kleine Aufgaben" },
      { label: "C++", icon: iCpp, note: "Basics: ähnliche Schiene wie C" },
    ],
  },
  {
    title: "Datenbanken",
    subtitle: "SQL ok – Joins nochmal festigen",
    items: [
      { label: "SQL", icon: iSql, note: "SELECT, WHERE, GROUP BY, COUNT/SUM" },
      { label: "Joins", icon: iSql, note: "muss ich nochmal gezielt üben" },
      {
        label: "SQLite",
        icon: iSqlite,
        note: "für kleine Projekte/Prototypen",
      },
    ],
  },
];
</script>

<template>
  <section id="skills" class="skills">
    <div class="sektion-innen">
      <h2 class="sektion-titel">Skills</h2>
      <p class="sektion-subtitle">
        Ehrlich, kurz und auf Praxis bezogen – ohne Prozentbalken.
      </p>

      <div class="box-grid">
        <article v-for="c in categories" :key="c.title" class="box">
          <div class="content">
            <div class="head">
              <div>
                <h3 class="title">{{ c.title }}</h3>
                <p class="sub">{{ c.subtitle }}</p>
              </div>
            </div>

            <div class="list">
              <div v-for="s in c.items" :key="s.label" class="row">
                <div class="left">
                  <img :src="s.icon" :alt="s.label" class="ico" />
                  <span class="label">{{ s.label }}</span>
                </div>
                <span class="note">{{ s.note }}</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: 80px 2rem;
}

.sektion-innen {
  max-width: 1400px;
  margin: 0 auto;
}

.sektion-titel {
  font-size: 64px;
  font-weight: 700;
  margin: 0 auto 10px;
  text-align: center;
  color: var(--detail);
}

.sektion-subtitle {
  text-align: center;
  opacity: 0.85;
  margin-bottom: 40px;
  font-size: 14px;
}

/* Grid wie Projekte */
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

/* Card Style wie Projekte */
.box {
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.28);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.6);
  overflow: hidden;

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
    0 0 0 1px rgba(168, 85, 247, 0.12);
}

.content {
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

/* Header */
.title {
  margin: 0;
  font-size: 18px;
  line-height: 1.2;
}

.sub {
  margin: 6px 0 0;
  opacity: 0.8;
  font-size: 13px;
}

/* List */
.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.row {
  display: flex;
  justify-content: space-between;
  gap: 12px;

  padding: 10px 10px;
  border-radius: 12px;

  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.left {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-width: 140px;
}

.ico {
  width: 18px;
  height: 18px;
  display: block;
}

.label {
  font-size: 13.5px;
}

.note {
  font-size: 13px;
  opacity: 0.85;
  text-align: right;
}
</style>
