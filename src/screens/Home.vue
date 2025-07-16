<script setup>
import { ref, onMounted } from "vue";
import Download from "/icon/Download.vue";
import LinkedIn from "/icon/LinkedIn.vue";
import Typewriter from "typewriter-effect/dist/core"; // usamos o core diretamente

// Efeito de digitação
const typewriterTarget = ref(null);

onMounted(() => {
  const typewriter = new Typewriter(typewriterTarget.value, {
    loop: false,
    delay: 75,
  });

  typewriter
    .typeString(
      '<span class="text-2xl lg:text-6xl font-bold lg:whitespace-nowrap">Desenvolvedora Fullstack.</span>'
    )
    .start();
});

// Alternância com rotação Y
const images = ["/img/fotoPerfil.jpg", "/img/logo.png"];

const currentImage = ref(images[0]);
const rotating = ref(false);

onMounted(() => {
  let i = 1;
  setInterval(() => {
    rotating.value = true;

    // metade da rotação: esconde a imagem e troca
    setTimeout(() => {
      currentImage.value = images[i % images.length];
      i++;
    }, 250);

    // fim da rotação
    setTimeout(() => {
      rotating.value = false;
    }, 500);
  }, 5000);
});
</script>

<template>
  <div
    class="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center lg:h-screen lg:gap-70"
  >
    <!-- Texto -->
    <div class="max-w-xl lg:mt-10 m-6 text-left">
      <h2
        class="font-extrabold tracking-tight leading-snug text-3xl lg:text-7xl lg:leading-tight"
      >
        Olá, eu sou
        <br />
        <mark
          class="px-2 text-white font-extrabold text-3xl lg:text-6xl rounded-sm bg-purple-500"
          >Rúbia Cacemiro,</mark
        >
        <br />
        <span class="typewriter" ref="typewriterTarget"></span>
      </h2>

      <p class="text-base lg:text-xl mb-8 mt-5">
        Sou uma desenvolvedora Full Stack, apaixonada por criar experiências web
        intuitivas e visualmente impressionantes. Com uma combinação única de
        habilidades técnicas e criatividade, tenho confiança na minha capacidade
        de entregar soluções personalizadas que atendem às necessidades de cada
        projeto.
      </p>

      <div class="flex items-center">
        <a
          href="/curriculo.pdf"
          download
          class="inline-flex px-5 py-3 text-base font-medium text-white bg-purple-500 rounded-lg hover:bg-purple-700"
        >
          <Download class="font-bold" />
          <p class="text-white">Currículo</p>
        </a>

        <a
          href="https://www.linkedin.com/in/rúbia-cacemiro"
          target="_blank"
          class="ml-5 inline-flex items-center px-5 py-3 text-base font-medium text-white bg-white rounded-lg hover:bg-[#004182] transition-colors duration-300"
        >
          <LinkedIn />
          <span>LinkedIn</span>
        </a>

        <!-- Seta mobile -->
        <div class="ml-5 flex items-center md:hidden">
          <div class="animate-bounce">
            <a href="#skills">
              <svg
                class="w-10 h-10 text-purple-500"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7 13L12 18L17 13M7 6L12 11L17 6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Imagem com transação -->
    <div class="perspective mt-5">
      <img
        :src="currentImage"
        :class="[
          'w-32 h-32 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-80 lg:h-80 rounded-full shadow-lg overflow-hidden object-cover transition-transform duration-500 ease-in-out',
          rotating ? 'rotateY' : '',
        ]"
        alt="Logo e Foto de Perfil"
      />
    </div>

    <!-- Seta desktop -->
    <div
      class="hidden md:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
    >
      <a href="#skills" class="group flex flex-col items-center">
        <div
          class="animate-bounce flex flex-col items-center transition-transform duration-300 group-hover:scale-110"
        >
          <span
            class="text-xs font-bold text-purple-400 mb-1 transition-colors duration-300 group-hover:text-purple-300"
          >
            VEJA MAIS
          </span>
          <svg
            class="w-6 h-6 text-purple-500 transition-colors duration-300 group-hover:text-purple-300"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 14L12 21L5 14"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.perspective {
  perspective: 1000px;
}
.rotateY {
  transform: rotateY(180deg);
}
</style>
