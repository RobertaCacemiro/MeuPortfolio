<script setup>
import Calendar from "/icon/Calendar.vue";

const experiences = [
  {
    title: "Energy Simple",
    function: "Desenvolvedora Trainee",
    time: "Novembro/2023",
    description:
      "Desenvolvimento de novas funcionalidades, correções e suporte técnico em sistemas SaaS do setor energético. Participação ativa em melhorias de performance, integração de APIs e aplicação de padrões de código.",
    current: true,
    skills: ["HTML", "CSS", "JavaScript", "Git", "MySQL", "APIs REST"],
  },
  {
    title: "Energy Simple",
    function: "Estagiária em Desenvolvimento Web",
    time: "Outubro/2022 - Novembro/2023",
    description:
      "Atuação no desenvolvimento e manutenção de sistemas SaaS voltados à gestão do mercado livre de energia. Envolvimento com tarefas de frontend e backend, utilizando boas práticas e tecnologias modernas.",
    current: false,
    skills: ["HTML", "CSS", "JavaScript", "Git", "MySQL"],
  },
  {
    title: "Clínica Toten",
    function: "Recepcionista",
    time: "Janeiro/2022 - Outubro/2022",
    description:
      "Responsável pelo atendimento ao público, organização de agendas médicas e suporte administrativo.",
    current: false,
    skills: ["Atendimento", "Organização", "Comunicação"],
  },
];
</script>

<template>
  <div class="container min-h-screen mx-auto flex flex-col items-center">
    <!-- Título  -->
    <div class="relative flex flex-col items-center">
      <div
        class="top-full left-1/2 -translate-x-1/2 w-1 lg:h-10 h-10 bg-purple-500 z-10"
      ></div>
      <p class="italic text-white lg:text-5xl text-3xl font-extrabold">
        EXPERIÊNCIA <br />
        PROFISSIONAL
      </p>
    </div>

    <!-- Conteúdo -->

    <div
      class="lg:flex lg:flex-row items-center justify-center min-h-screen mt-8 p-8"
    >
      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        <li
          v-for="(experience, index) in experiences"
          :key="index"
          class="mb-20 ms-8"
        >
          <span
            class="absolute flex items-center justify-center w-6 h-6 bg-purple-500 rounded-full -start-3 ring-8 ring-white"
          >
            <Calendar />
          </span>
          <h3
            class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
          >
            {{ experience.title }}
            <span
              v-if="experience.current"
              class="text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm bg-purple-500 ms-3"
              >Atualmente</span
            >
          </h3>
          <time
            class="block mb-2 text-sm font-normal text-gray-400 dark:text-gray-500"
            >{{ experience.time }}</time
          >
          <p
            class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
          >
            {{ experience.description }}
          </p>

          <!-- Habilidades aprendidas  -->
          <div class="flex flex-wrap gap-2 mt-10">
            <span
              v-for="(skill, sIndex) in experience.skills"
              :key="sIndex"
              class="bg-purple-500 text-white text-xs font-medium px-2 py-1 rounded-sm"
            >
              {{ skill }}
            </span>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>
