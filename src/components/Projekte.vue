<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import lhell from "@/assets/LebenslaufHell.png";
import ldunkel from "@/assets/LebenslaufDunkel.png";

const bilder = [lhell, ldunkel];
const index = ref(0);
let timer: number | null = null;

onMounted(() => {
  timer = window.setInterval(() => {
    index.value = (index.value + 1) % bilder.length;
  }, 5000);
});

onBeforeUnmount(() => {
  if (timer !== null) clearInterval(timer);
});
</script>

<template>
  <section id="projekte" class="projekte">
    <div class="sektion-innen">
      <h2 class="sektion-titel">Projekte</h2>

      <div class="box-grid">
        <div class="box">
          <h3>Interaktiver Lebenslauf</h3>

          <div class="vorschau-wrapper">
            <Transition name="slide">
              <img
                :key="index"
                :src="bilder[index]"
                alt="Lebenslauf Vorschau"
                class="vorschau"
              />
            </Transition>
          </div>

          <p>HTML, CSS und JavaScript mit Fokus auf Developer-Design.</p>
          <span class="meta">HTML · CSS · JavaScript </span>
        </div>

        <div class="box">
          <h3>Autovermietung Dashboard</h3>
          <p>JavaFX-Dashboard mit SQLite und Hibernate.</p>
          <span class="meta">Java · Hibernate</span>
        </div>

        <div class="box">
          <h3>Rechnung Ersteller-Tool</h3>
          <p>Tool zum Erstellen und Verwalten von Rechnungen.</p>
          <span class="meta">C# · ASP.NET</span>
        </div>

        <div class="box">
          <h3>Coming Soon</h3>
          <p>Neues Projekt wird bald ergänzt.</p>
          <span class="meta">—</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projekte {
  padding: 80px 2rem;
}

.sektion-titel {
  font-size: 28px;
  margin-bottom: 20px;
}

.box-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.box {
  background: rgba(17, 17, 27, 0.85);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid rgba(148, 163, 184, 0.3);
}

.box h3 {
  margin: 0 0 8px;
}

.box p {
  margin: 0 0 10px;
  font-size: 14px;
}

.meta {
  opacity: 0.7;
  font-size: 13px;
}

.vorschau-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 12px;
  aspect-ratio: 16 / 9;
}

.vorschau {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Slide-Transition */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
  position: absolute;
  inset: 0;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
