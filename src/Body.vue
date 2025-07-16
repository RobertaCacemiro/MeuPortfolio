<script setup>
// Telas
import Home from "./screens/Home.vue"; 
import Skills from "./screens/Skills.vue";
import Experience from "./screens/Experience.vue";
import Projects from "./screens/Projects.vue";

// svg
import FinalSection from "/svg/FinalSection.vue";
import StartSection from "/svg/StartSection.vue";
</script>

<template>
  <!-- Seção principal -->
  <section id="home" class="min-h-screen bg-[#000000]">
    <Home />
  </section>
  <FinalSection />

  <!-- Seção de habilidades -->
  <section id="skills" class="relative flex flex-col items-center min-h-screen ">
    <Skills />
  </section>

  <!-- svg -->
  <StartSection />

  <!-- Seção de experiência -->
  <section id="experience" class="min-h-screen bg-[#000000]">
    <Experience />
  </section>

  <!-- svg -->
  <FinalSection />

  <!-- Seção de projetos -->
  <section id="projects" class="min-h-screen">
    <Projects />
  </section>
</template>