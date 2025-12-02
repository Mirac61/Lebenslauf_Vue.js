<script setup lang="ts">
import githubLogo from "@/assets/githubmark.png";
import linkedinLogo from "@/assets/linkedin.png";
</script>

<template>
  <section id="home" class="home">
    <div class="start-innen">
      <p class="start-kicker">SOFTWARETECHNIK-STUDENT · 3. SEMESTER</p>

      <h1 class="start-titel">
        Schlaue <span>Software</span><br />zum Verändern.
      </h1>

      <p class="start-subtitel">
        Fokus auf .NET Sprachen, Java und Webseiten mit HTML, CSS, TS/JS und
        Vue.js. Backend-Grundlagen und Interesse an sauberer
        Softwarearchitektur.
      </p>

      <div class="start-aktionen">
        <a href="https://github.com/Mirac61" target="_blank">
          <img :src="githubLogo" class="logos" />
        </a>
        <a
          href="https://www.linkedin.com/in/mirac-sancak-47917238b/"
          target="_blank"
        >
          <img :src="linkedinLogo" class="logos" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home {
  min-height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.start-kicker {
  font-size: clamp(12px, 1.8vw, 18px);
  opacity: 0.7;
  margin-bottom: 20px;
  letter-spacing: 1.5px;
}

.start-innen {
  text-align: center;
  max-width: 900px;
}

.start-titel {
  font-size: clamp(48px, 8vw, 86px);
  line-height: 1.15;
  margin-bottom: 22px;
}

.start-titel span {
  color: var(--detail);
}

.start-subtitel {
  font-size: 22px;
  opacity: 0.85;
  max-width: 600px;
  margin: 0 auto 28px;
}

.start-aktionen {
  display: flex;
  justify-content: center;
  gap: 18px;
}

.logos {
  width: 32px;
  height: 32px;
  flex: warp;
}
</style>
