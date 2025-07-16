<template>
   <div class="w-full px-5 lg:px-0 lg:w-250 mt-10">
    <div
      class="w-full lg:w-250 border border-[#000000] rounded-lg shadow-sm bg-[#000000]"
    >
      <!-- Abas -->
      <ul
        class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-[#000000]"
        role="tablist"
      >
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          class="me-2"
          role="presentation"
        >
          <button
            :class="[
              'inline-block p-4 rounded-t-lg transition-colors duration-200',
              activeTab === index
                ? 'bg-purple-900 text-purple-600' // Aba ativa
                : 'bg-purple-700 text-gray-500 hover:bg-purple-600', // Aba inativa
            ]"
            @click="activeTab = index"
            type="button"
          >
            {{ tab.name }}
          </button>
        </li>
      </ul>

      <!-- Conteúdo -->
      <div class="p-4 bg-[#000000] border border-[#000000] rounded-b-lg shadow">
        <component :is="tabs[activeTab].component" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import Technologies from "./Technologies.vue";
import Tools from "./Tools.vue";
import Others from "./Others.vue";

const tabs = [
  { name: "Tecnologias ", component: Technologies },
  { name: "Ferramentas", component: Tools },
  { name: "Outros", component: Others },
];

const activeTab = ref(0);
</script>
