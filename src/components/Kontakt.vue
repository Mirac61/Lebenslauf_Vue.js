<script setup lang="ts">
import github from "@/assets/logos/githubmark.png";
import linkedin from "@/assets/logos/linkedin.png";
import Mail from "@/assets/logos/Mail.png";

const email = "mi.sancak@icloud.de";

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email);
  } catch {}
}
</script>

<template>
  <section id="kontakt" class="kontakt">
    <div class="sektion-innen">
      <h2 class="sektion-titel">Kontakt</h2>

      <div class="box-grid">
        <article class="box full-width">
          <div class="content">
            <h3 class="title">Direkter Kontakt</h3>

            <p class="desc">Für Projekte, Fragen oder fachlichen Austausch.</p>

            <div class="kontakt-grid">
              <a href="mailto:mi.sancak@icloud.com" class="kontakt-item">
                <span class="label">E-Mail</span>
                <img :src="Mail" alt="LinkedIn" class="icon" />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                class="kontakt-item"
                @click="copyEmail"
              >
                <span class="label">Mail kopieren</span>
                <img :src="Mail" alt="LinkedIn" class="icon" />
              </a>

              <a
                href="https://www.linkedin.com/in/mirac-sancak-47917238b/"
                target="_blank"
                rel="noreferrer"
                class="kontakt-item"
              >
                <span class="label">LinkedIn</span>
                <img :src="linkedin" alt="LinkedIn" class="icon" />
              </a>

              <a
                href="https://github.com/Mirac61"
                target="_blank"
                rel="noreferrer"
                class="kontakt-item"
              >
                <span class="label">GitHub</span>
                <img :src="github" alt="GitHub" class="icon" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.kontakt {
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
  text-align: center;
  color: var(--detail);
}

/* Grid bleibt identisch zu anderen Sektionen */
.box-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
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

/* Box */
.box {
  position: relative;
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.28);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.6);
  transition:
    transform 0.18s ease,
    border-color 0.18s ease,
    box-shadow 0.18s ease;
}

.box.full-width {
  grid-column: 1 / -1;
}

/* Content */
.content {
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.title {
  margin: 0;
  font-size: 28px;
}

.desc {
  margin: 0;
  font-size: 14px;
  opacity: 0.85;
  max-width: 520px;
}

/* Kontakt-Infos */
.kontakt-grid {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
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

.kontakt-item {
  position: relative;
  padding: 16px 18px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.12);
  text-decoration: none;
  color: #e2e8f0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;
}

.kontakt-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.8);
}

.label {
  font-size: 16px;
  opacity: 0.6;
}

.value {
  font-size: 14px;
  font-weight: 500;
}

.icon {
  position: absolute;
  right: 14px;
  top: 14px;
  width: 28px;
  height: 28px;
  opacity: 0.85;
}
</style>
