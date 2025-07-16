<script setup>
import { ref } from "vue";

// Scrool suave
const smoothScroll = (target) => {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const isOpen = ref(false);
</script>

<template>
  <nav class="bg-black relative">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="#" class="-mt-7 flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/img/logoP2.png" class="h-20" alt="Logo" />
      </a>

      <button
        @click="isOpen = !isOpen"
        type="button"
        class="!p-2 !rounded-lg md:!hidden focus:!outline-none !bg-black !text-white hover:!bg-gray-800 !transition-colors"
      >
        <svg
          class="!w-6 !h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div :class="[isOpen ? 'block' : 'hidden', 'w-full md:block md:w-auto']">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-[#000000] rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-[#000000]"
        >
          <li class="text-white">
            <a
              href="#home"
              class="block py-2 px-3 !text-purple-500 rounded-sm md:p-0 hover:!text-purple-800"
              @click.prevent="smoothScroll('#home')"
              >HOME</a
            >
          </li>
          <li>
            <a
              href="#skills"
              class="block py-2 px-3 !text-purple-500 rounded-sm md:p-0 hover:!text-purple-800"
              @click.prevent="smoothScroll('#skills')"
              >HABILIDADES</a
            >
          </li>
          <li>
            <a
              href="#experience"
              class="block py-2 px-3 !text-purple-500 rounded-sm md:p-0 hover:!text-purple-800"
              @click.prevent="smoothScroll('#experience')"
              >EXPERIÊNCIA</a
            >
          </li>
          <li>
            <a
              href="#projects"
              class="block py-2 px-3 !text-purple-500 rounded-sm md:p-0 hover:!text-purple-800"
              @click.prevent="smoothScroll('#projects')"
              >PROJETOS</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
