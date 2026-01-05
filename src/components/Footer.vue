<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer-innen">
      <p class="footer-copyright">
        © 2026 Mirac Sancak · Alle Rechte vorbehalten
      </p>

      <ul class="footer-links">
        <li><a href="/impressum">Impressum</a></li>
        <li><a href="/datenschutz">Datenschutz</a></li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 60px;
  padding: 30px 2rem 40px;
}

.footer-innen {
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  background: rgba(15, 23, 42, 0.55);
  border-radius: 20px;
  backdrop-filter: blur(22px);

  padding: 28px 32px;
}

.footer-copyright {
  margin: 0;
  font-family: var(--font);
  font-size: 14.5px;
  font-weight: 500;
  color: var(--text-color);
  opacity: 0.85;
  letter-spacing: 0.2px;
  white-space: nowrap;
}

.footer-links {
  list-style: none;
  display: flex;
  gap: 22px;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
}

.footer-links a {
  color: var(--text-color);
  text-decoration: none;
  font-family: var(--font);
  font-size: 14.5px;
  font-weight: 500;
  opacity: 0.8;
  transition:
    opacity 0.2s ease,
    color 0.2s ease;
}

.footer-links a:hover {
  opacity: 1;
  color: var(--detail);
}

@media (max-width: 720px) {
  .footer-innen {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 22px 22px;
  }

  .footer-copy {
    white-space: normal;
  }
}
</style>
