<template>
  <section id="faehigkeiten" class="section">
    <div class="section-inner">
      <h2 class="section-title">Fähigkeiten</h2>

      <div class="skills-grid">
        <div class="skills-block">
          <h3>Frontend</h3>
          <ul>
            <li>Vue & TypeScript</li>
            <li>CSS Layouts</li>
          </ul>
        </div>

        <div class="skills-block">
          <h3>Backend</h3>
          <ul>
            <li>Java</li>
            <li>C#</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}
.skills-block {
  background: rgba(17, 17, 27, 0.8);
  border-radius: 16px;
  padding: 18px;
  border: 1px solid rgba(148, 163, 184, 0.2);
}
.skills-block h3 {
  margin-top: 0;
}
.skills-block ul {
  margin: 0;
  padding-left: 20px;
}
</style>
