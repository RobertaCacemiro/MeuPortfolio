<script setup>
import Carousel from "../components/Carousel.vue";
</script>

<template>
  <div class="container min-h-screen mx-auto flex flex-col items-center">
    <!-- Título -->
    <div class="relative flex flex-col items-center">
      <div
        class="top-full left-1/2 -translate-x-1/2 w-1 lg:h-10 h-10 bg-purple-500 "
      ></div>
      <p class="italic text-[#000000] lg:text-5xl text-3xl font-extrabold">
        PROJETOS
      </p>
    </div>

    <!-- Container do Carousel -->
    <div class="w-full flex-1 flex items-center justify-center pt-0 pb-10"> <!-- Removi padding-top -->
      <Carousel />
    </div>
  </div>
</template>
