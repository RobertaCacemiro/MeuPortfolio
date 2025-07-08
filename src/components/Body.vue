<script setup>
// Telas
import Home from "./Home.vue";
import Skills from "./Skills.vue";
import Experience from "./Experience.vue";
import Projects from "./Projects.vue";

// svg
import FinalSection from "/img/FinalSection.vue";
import StartSection from "/img/StartSection.vue";
</script>

<template>
  <section id="home" class="mx-auto bg-[#000000]">
    <Home />
  </section>
  <FinalSection />

  <!-- Seção de Habilidades -->
  <section id="skills" class="relative flex flex-col items-center pt-0">
    <Skills />
  </section>

  <StartSection />
  <section id="experience" class="min-h-screen bg-[#000000]">
    <Experience />
  </section>
  <FinalSection />

  <section id="projects">
    <Projects />
  </section>
</template>
