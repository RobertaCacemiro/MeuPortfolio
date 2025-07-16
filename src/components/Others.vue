<script setup>
const others = [
  {
    title: "APIs REST",
    description: "Criação e consumo de APIs seguindo o protocolo HTTP",
  },
  {
    title: "Clean Code",
    description: "Boas práticas de código limpo e legível",
  },
  {
    title: "Escrita Técnica",
    description: "Criação e manutenção de documentação",
  },
  { title: "PHPDoc", description: "Documentação de código PHP padronizada" },
  {
    title: "PSR",
    description:
      "Normas de boas práticas em PHP (PHP Standards Recommendations)",
  },
  {
    title: "UX Design",
    description: "Foco na experiência e usabilidade do usuário",
  },
  { title: "Web Design", description: "Design voltado para aplicações web" },
  { title: "POO", description: "Programação Orientada a Objetos (OOP)" },
];
</script>

<template>
  <div class="max-w-screen-xl mx-auto p-4 md:p-8">
    <ul
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <li
        v-for="(other, index) in others"
        :key="index"
        class="p-4 border border-[#2a2a2a] rounded-lg bg-[#1a1a1a]"
      >
        <h3 class="text-lg font-semibold text-white mb-1">
          {{ other.title }}
        </h3>
        <p class="text-sm text-gray-400">{{ other.description }}</p>
      </li>
    </ul>
  </div>
</template>
