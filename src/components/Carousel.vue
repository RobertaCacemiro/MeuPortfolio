<template>
  <Carousel
    :items-to-show="1"
    :autoplay="3000"
    wrap-around
    class="relative w-full max-w-6xl mx-auto"
  >
    <Slide v-for="(project, index) in projects" :key="index">
      <!-- Card -->
      <div
        class="lg:w-[450px] h-auto min-h-[400px] bg-[#000000] border border-[#000000] rounded-lg shadow-sm m-8 flex flex-col"
      >
        <!-- Imagem -->
        <div class="w-full aspect-[17/9] overflow-hidden rounded-t-lg">
          <img
            :src="project.img"
            alt=""
            class="w-full h-full object-cover border-white"
          />
        </div>

        <!-- Container do conteúdo -->
        <div class="p-5 flex flex-col h-full">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-white"
          >
            {{ project.title }}
          </h5>

          <!-- Descrição  -->
          <p
            class="mb-3 font-normal text-white flex-grow"
          >
            {{ project.description }}
          </p>

          <!-- Builds  -->
          <div class="flex flex-wrap gap-2 mt-5">
            <span
              v-for="(build, sIndex) in project.builds"
              :key="sIndex"
              class="bg-purple-500 text-white text-xs font-medium px-2 py-1 rounded-sm"
            >
              {{ build }}
            </span>
          </div>

          <!-- Status  -->
          <div class="mt-5">
            <span
              class="text-white px-2 py-1 rounded-md text-sm"
              :class="project.status ? 'bg-green-500' : 'bg-yellow-500'"
            >
              {{ project.status ? "FINALIZADO" : "EM ANDAMENTO" }}
            </span>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <div class="hidden md:block">
        <Navigation />
      </div>
      <div class="mt-10">
        <Pagination />
      </div>
    </template>
  </Carousel>
</template>

<script setup>
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { getImagePath } from '@/utils/images';

const projects = [
  {
    title: "How Is The Weather?",
    description:
      "Aplicação web para consulta de clima em tempo real em qualquer lugar do mundo, utilizando a API da OpenWeather. O usuário poderá buscar uma cidade e visualizar informações como temperatura atual, sensação térmica, umidade, velocidade do vento e previsão para os próximos dias, tudo de forma simples e visualmente agradável.",
    img: getImagePath("projects/howisTheWeather.png"), 
    status: false,
    builds: [
      "Vue.js",
      "Inertia.js",
      "TailwindCSS",
      "Flowbite",
      "OpenWeather API",
    ],
  },
  {
    title: "OrganizeMei",
    description: "Sistema web de gestão financeira desenvolvido para MEIs, autônomos e pequenos negócios. Permite controlar receitas, despesas, gerar boletos, acompanhar fluxo de caixa e receber alertas de vencimentos.",
    img: getImagePath("projects/organizeMei.png"),
    status: false,
    builds: ["Vue.js", "Laravel", "Inertia.js", "TailwindCSS", "DaisyUI"],
  },
  {
    title: "¿Cuánto Cuesta?",
    description: "Aplicação web simples e prática para conversão de moedas. O usuário seleciona a moeda de origem e a moeda de destino e visualiza o valor convertido em tempo real. Ideal para viajantes, estudantes e profissionais que lidam com diferentes moedas.",
    img: getImagePath("projects/cuantoCuesta.png"),
    status: false,
    builds: ["Java", "Spring Boot", "Thymeleaf", "OpenExchangeRates API"],
  },
];
</script>

<style>
/* SETAS */
.carousel__prev,
.carousel__next {
  width: 3.5rem !important;
  height: 3.5rem !important;
  font-size: 1.5rem !important;
  color: white !important;
  background-color: #8b5cf6 !important;
  border-radius: 50px !important;
  border: none !important;
}

/* PAGINAÇÃO */
.carousel__pagination {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}

.carousel__pagination-button {
  width: 20px !important;
  height: 20px !important;
  border-radius: 50% !important;
  background-color: #000000 !important;
  opacity: 0.7;
  transition: all 0.3s;
}

.carousel__pagination-button--active {
  background-color: #8b5cf6 !important;
  opacity: 1 !important;
  transform: scale(1.2);
}
</style>
