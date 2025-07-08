<script setup>
import Languages from "./Languages.vue";
import { ref, computed } from "vue";

const activeTab = ref("about"); // Manipula visualização das tab

// Anos de experiência
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
    <!-- Título -->
    
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
      class="lg:flex lg:flex-row items-center justify-center h-screen lg:gap-50"
    >
      <div>
        <h1
          class="mb-4 text-center text-3xl lg:text-6xl font-extrabold leading-none tracking-tight text-black"
        >
          <mark class="px-2 text-white rounded-sm bg-purple-500  text-3xl lg:text-6xl ">
            {{ experienceYears }}
          </mark>
          de <br />
          experiência <br>
          profissional
        </h1>
      </div>

      <!-- Cartão de Tabs -->
      <div>
        <div
          class="w-full lg:w-250 border border-[#000000] rounded-lg shadow-sm bg-[#000000]"
        >
          <!-- Abas -->
          <ul
            class="flex flex-wrap text-sm font-medium text-center border-b rounded-t-lg bg-[#000000] border-[#000000]"
          >
            <li class="me-2">
              <button
                @click="activeTab = 'about'"
                :class="[
                  'inline-block p-4 rounded-ss-lg',
                  activeTab === 'about'
                    ? 'text-purple-500 bg-white'
                    : 'hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400',
                ]"
              >
                Linguagens
              </button>
            </li>
            <li class="me-2">
              <button
                @click="activeTab = 'services'"
                :class="[
                  'inline-block p-4',
                  activeTab === 'services'
                    ? 'text-blue-600 bg-white dark:bg-gray-800 dark:text-blue-500'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400',
                ]"
              >
                Ferramentas
              </button>
            </li>
            <li class="me-2">
              <button
                @click="activeTab = 'statistics'"
                :class="[
                  'inline-block p-4',
                  activeTab === 'statistics'
                    ? 'text-blue-600 bg-white dark:bg-gray-800 dark:text-blue-500'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400',
                ]"
              >
                Arquiteturas e Outras Habilidades
              </button>
            </li>
          </ul>

          <!-- Conteúdo das Abas -->
          <div>
            <div
              v-if="activeTab === 'about'"
              class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
            >
              <Languages />
            </div>

            <div
              v-if="activeTab === 'services'"
              class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
            >
              <h2
                class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white"
              >
                Ferramentas
              </h2>
              <ul
                role="list"
                class="space-y-4 text-gray-500 dark:text-gray-400"
              >
                <li class="flex items-center space-x-2">
                  <span class="leading-tight">VS Code, GitHub, Docker...</span>
                </li>
              </ul>
            </div>

            <div
              v-if="activeTab === 'statistics'"
              class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
            >
              <div
                class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8"
              >
                <div class="flex flex-col">
                  <dt class="mb-2 text-3xl font-extrabold">Clean Code</dt>
                  <dd class="text-gray-500 dark:text-gray-400">
                    Boas práticas
                  </dd>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
