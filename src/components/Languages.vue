<script setup>
import { Icon } from "@iconify/vue";
</script>
<template>
  <!-- <Icon icon="logos:vue" width="32" height="32" />
  <Icon icon="logos:tailwindcss" width="32" height="32" />
  <Icon icon="logos:github-icon" width="32" height="32" /> -->

  <div
    class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8"
  >
    <div class="flex flex-col text-center">
      <div class="mb-2 text-3xl font-extrabold inset-shadow-sm inset-shadow-indigo-500">
        <Icon icon="logos:javascript" width="32" height="32" />

      </div>
      <dd class="text-gray-500 dark:text-gray-400">Boas práticas</dd>
    </div>
    <div class="flex flex-col">
      <dt class="mb-2 text-3xl font-extrabold">MVC</dt>
      <dd class="text-gray-500 dark:text-gray-400">Arquitetura</dd>
    </div>
    <div class="flex flex-col">
      <dt class="mb-2 text-3xl font-extrabold">TDD</dt>
      <dd class="text-gray-500 dark:text-gray-400">Testes</dd>
    </div>
  </div>
</template>
