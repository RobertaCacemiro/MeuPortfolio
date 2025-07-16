<script setup>
import { ref, computed } from "vue";
import Tab from "../components/Tab.vue";

// Anos de experiência calculdas
const startDate = new Date("2022-10-20");
const today = ref(new Date());

const experienceYears = computed(() => {
  let years = today.value.getFullYear() - startDate.getFullYear();
  const notYetPassed =
    today.value.getMonth() < startDate.getMonth() ||
    (today.value.getMonth() === startDate.getMonth() &&
      today.value.getDate() < startDate.getDate());

  if (notYetPassed) {
    years -= 1;
  }

  return `${years} ano${years !== 1 ? "s" : ""}`;
});
</script>

<template>
  <div class="container min-h-screen mx-auto flex flex-col items-center">
    <!-- Títulos  -->
    <div class="relative flex flex-col items-center">
      <div
        class="top-full left-1/2 -translate-x-1/2 w-1 lg:h-10 h-10 bg-purple-500 z-10"
      ></div>
      <p class="italic text-black lg:text-5xl text-3xl font-extrabold">
        HABILIDADES
      </p>
    </div>

    <!-- Conteúdo -->
    <div
      class="lg:flex lg:flex-row items-center justify-center min-h-screen lg:gap-50"
    >
      <div>
        <h1
          class="mb-4 text-center text-3xl lg:text-6xl font-extrabold leading-none tracking-tight text-black"
        >
          <mark
            class="px-2 text-white rounded-sm bg-purple-500 text-3xl lg:text-6xl"
          >
            {{ experienceYears }}
          </mark>
          de <br />
          experiência <br />
          profissional
        </h1>
      </div>

      <!-- Tab -->
      <div>
        <Tab />
      </div>
    </div>
  </div>
</template>
