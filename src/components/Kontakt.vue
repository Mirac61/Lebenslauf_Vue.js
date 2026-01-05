<script setup lang="ts">
import githubIcon from "@/assets/logos/githubmark.png";
import linkedinIcon from "@/assets/logos/linkedin.png";
import mailIcon from "@/assets/logos/Mail.png";
import ortIcon from "@/assets/logos/Ort.png";
import documentIcon from "@/assets/logos/Document.png";
import { ref } from "vue";

const email = "mi.sancak@icloud.de";
const copied = ref(false);

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email);
    copied.value = true;
    window.setTimeout(() => (copied.value = false), 1200);
  } catch {}
}
</script>

<template>
  <section id="kontakt" class="kontakt">
    <div class="sektion-innen">
      <header class="kontakt-header">
        <h2 class="sektion-titel">Kontakt</h2>
        <p class="sektion-sub">
          Schnell erreichbar – per Mail oder über meine Profile.
        </p>
      </header>

      <article class="box full-width">
        <div class="content">
          <div class="kontakt-grid">
            <a :href="`mailto:${email}`" class="kontakt-card action">
              <img :src="mailIcon" alt="E-Mail" class="icon-left" />
              <div class="text">
                <span class="title">E-Mail</span>
                <span class="hint">{{ email }}</span>
              </div>
              <span class="chev" aria-hidden="true">↗</span>
            </a>

            <button
              type="button"
              class="kontakt-card action"
              @click="copyEmail"
            >
              <img :src="mailIcon" alt="E-Mail kopieren" class="icon-left" />
              <div class="text">
                <span class="title">Mail kopieren</span>
                <span class="hint">{{
                  copied ? "Kopiert ✓" : "In Zwischenablage"
                }}</span>
              </div>
              <span class="chev" aria-hidden="true">⎘</span>
            </button>

            <a
              href="https://www.linkedin.com/in/mirac-sancak-47917238b/"
              target="_blank"
              rel="noreferrer"
              class="kontakt-card action"
            >
              <img :src="linkedinIcon" alt="LinkedIn" class="icon-left" />
              <div class="text">
                <span class="title">LinkedIn</span>
                <span class="hint">Profil ansehen</span>
              </div>
              <span class="chev" aria-hidden="true">↗</span>
            </a>

            <a
              href="https://github.com/Mirac61"
              target="_blank"
              rel="noreferrer"
              class="kontakt-card action"
            >
              <img :src="githubIcon" alt="GitHub" class="icon-left" />
              <div class="text">
                <span class="title">GitHub</span>
                <span class="hint">Repositories</span>
              </div>
              <span class="chev" aria-hidden="true">↗</span>
            </a>

            <div class="kontakt-card info" role="group" aria-label="Ort">
              <img :src="ortIcon" alt="" class="icon-left" />
              <div class="text">
                <span class="title">Ort</span>
                <span class="hint">Nähe Stuttgart</span>
              </div>
              <span class="chev" aria-hidden="true">•</span>
            </div>

            <div
              class="kontakt-card info"
              role="group"
              aria-label="Verfügbarkeit"
            >
              <img :src="documentIcon" alt="" class="icon-left" />
              <div class="text">
                <span class="title">Verfügbarkeit</span>
                <span class="hint">Offen für Werkstudenten Jobs</span>
              </div>
              <span class="chev" aria-hidden="true">•</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.kontakt {
  padding: 70px 2rem;
}

.kontakt-header {
  text-align: center;
  margin-bottom: 26px;
}

.sektion-titel {
  font-size: clamp(40px, 5vw, 64px);
  font-weight: 750;
  margin: 0;
  color: var(--detail);
  letter-spacing: 0.5px;
}

.sektion-sub {
  margin: 10px 0 0;
  opacity: 0.7;
  font-size: 15px;
}

.box {
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(148, 163, 184, 0.22);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(10px);
}

.box.full-width {
  grid-column: 1 / -1;
}

.content {
  padding: 24px;
}

.kontakt-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 14px;
  row-gap: 20px;
}

@media (max-width: 980px) {
  .kontakt-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .kontakt-grid {
    grid-template-columns: 1fr;
  }
}

.kontakt-card {
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 12px 14px;
  border-radius: 16px;

  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);

  color: #e2e8f0;
  text-decoration: none;

  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease;
}

.kontakt-card.action {
  cursor: pointer;
}

.kontakt-card.action:hover {
  transform: translateY(-2px);
  border-color: rgba(167, 139, 250, 0.45);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.65);
}

.kontakt-card.action:focus-visible {
  outline: 2px solid rgba(167, 139, 250, 0.7);
  outline-offset: 2px;
}

.kontakt-card.info {
  background: rgba(255, 255, 255, 0.035);
  border: 1px dashed rgba(255, 255, 255, 0.18);
  opacity: 0.9;
}

button.kontakt-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  font: inherit;
}

.icon-left {
  width: 28px;
  height: 28px;
  opacity: 0.95;
  flex: 0 0 auto;
}

.text {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}

.title {
  font-size: 16px;
  font-weight: 650;
}

.hint {
  font-size: 13px;
  opacity: 0.65;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chev {
  margin-left: auto;
  opacity: 0.55;
  font-size: 14px;
  flex: 0 0 auto;
}

.sektion-innen {
  max-width: 1400px;
  margin: 0 auto;
}
</style>
