<script setup lang="ts">
type Entry = {
  title: string;
  place: string;
  time: string;
  desc: string;
};

const entries: Entry[] = [
  {
    title: "Softwaretechnik (B.Sc.)",
    place: "Hochschule Esslingen",
    time: "WS 2024/25 – heute",
    desc: "Studium der Softwaretechnik. Projekte u. a. Autovermietung (Java, JavaFX), Zeiterfassung (HTML, CSS, C#), Portfolio (Vue.js). Grundlagen in C, C++, SQL und Softwarearchitektur.",
  },
  {
    title: "Berufskolleg IT & Kommunikationstechnik",
    place: "Max-Eyth-Schule, Kirchheim unter Teck",
    time: "2022 – 2024",
    desc: "Programmiergrundlagen und Praxisprojekte: Schiffe versenken (C#), C mit Arduino zur Hardware-Ansteuerung, kleinere Anwendungen.",
  },
  {
    title: "Realschule Plochingen",
    place: "Plochingen",
    time: "bis 2022",
    desc: "IT-Unterricht und erste Einblicke in Programmierung. Einfaches Browser-Projekt auf Tutorial-Basis.",
  },
];
</script>

<template>
  <section id="werdegang" class="timeline">
    <div class="sektion-innen">
      <h2 class="sektion-titel">Werdegang</h2>

      <div class="timeline-wrapper">
        <div
          v-for="(e, i) in entries"
          :key="i"
          class="timeline-item"
          :class="{ right: i % 2 === 1 }"
        >
          <div class="dot"></div>

          <article class="card">
            <span class="time">{{ e.time }}</span>
            <h3>{{ e.title }}</h3>
            <p class="place">{{ e.place }}</p>
            <p class="desc">{{ e.desc }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  padding: 80px 2rem;
}

.sektion-innen {
  max-width: 1200px;
  margin: 0 auto;
}

.sektion-titel {
  font-size: 64px;
  text-align: center;
  margin-bottom: 80px;
  color: var(--detail);
}

/* Mittellinie */
.timeline-wrapper {
  position: relative;
}

.timeline-wrapper::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(148, 163, 184, 0.25);
  transform: translateX(-50%);
}

/* Eintrag */
.timeline-item {
  position: relative;
  width: 50%;
  padding: 0 40px 60px;
}

.timeline-item.right {
  margin-left: auto;
}

/* Punkt */
.dot {
  position: absolute;
  top: 12px;
  right: -6px;
  width: 14px;
  height: 14px;
  background: var(--detail);
  border-radius: 50%;
}

.timeline-item.right .dot {
  left: -6px;
  right: auto;
}

/* Card */
.card {
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.28);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.6);
}

.time {
  font-size: 12px;
  opacity: 0.7;
}

.place {
  font-size: 13px;
  opacity: 0.85;
}

.desc {
  font-size: 13.5px;
  opacity: 0.9;
  margin-top: 6px;
}

/* Mobile: alles untereinander */
@media (max-width: 768px) {
  .timeline-wrapper::before {
    left: 0;
  }

  .timeline-item,
  .timeline-item.right {
    width: 100%;
    padding-left: 30px;
    margin-left: 0;
  }

  .dot {
    left: -7px;
    right: auto;
  }
}
</style>
