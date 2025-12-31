<script setup lang="ts"></script>

<template>
  <nav class="navbar">
    <div class="navbar-innen">
      <div class="navbar-logo">Mirac Sancak</div>

      <ul class="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projekte">Projekte</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#werdegang">Werdegang</a></li>
        <li><a href="#kontakt">Kontakt</a></li>
        <li><a href="#lebenslauf" class="nav-button">Lebenslauf</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 20px;
  left: 0;
  right: 0;

  max-width: 98%;
  width: 96%;
  margin: 0 auto;

  height: 80px;
  display: flex;
  align-items: center;

  background: var(--glas-bg);
  border-radius: 30px;
  backdrop-filter: blur(18px);
  z-index: 200;
}

.navbar-innen {
  width: 100%;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo {
  font-family: var(--font);
  font-size: 18px;
  font-weight: 600;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 22px;
}

.navbar-links a {
  color: var(--text-color);
  text-decoration: none;
  font-size: 18px;
  transition: 0.2s;
  font-family: var(--font);
}

.navbar-links a:hover {
  color: var(--detail);
  transform: translateY(-1px);
}

.nav-button {
  padding: 8px 18px;
  border-radius: 999px;
  border: 1px solid var(--detail);
}
</style>
