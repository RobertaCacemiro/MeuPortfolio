<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <footer class="w-full bg-[#000000] text-white py-6">
    <div
      class="max-w-screen-xl mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between px-4"
    >
      <p class="text-sm text-center">
        &copy; 2025 Rúbia Cacemiro - Todos os direitos reservados
      </p>

      <div class="flex space-x-4 mt-4 md:mt-0">
        <a
          href="https://www.linkedin.com/in/rúbia-cacemiro"
          target="_blank"
          class="hover:text-purple-600 text-purple-500 transition-colors"
        >
          <Icon icon="mdi:linkedin" width="30" height="30" />
        </a>
        <a
          href="https://github.com/RobertaCacemiro"
          target="_blank"
          class="hover:text-purple-600 text-purple-500 transition-colors"
        >
          <Icon icon="mdi:github" width="30" height="30" />
        </a>
      </div>
    </div>
  </footer>
</template>
