<script setup>
import { Icon } from "@iconify/vue";
import { getImagePath } from '@/utils/images';

const stacks = [
  { icon: "logos:php", name: "PHP" },
  { icon: "logos:javascript", name: "JavaScript" },
  { icon: "devicon:html5", name: "HTML" },
  { icon: "vscode-icons:file-type-css2", name: "CSS" },
  { icon: "skill-icons:mysql-light", name: "MySQL" },
  { icon: "logos:laravel", name: "Laravel" },
  { icon: "logos:vue", name: "Vue.js" },
  { icon: "devicon:jquery", name: "jQuery" },
  { icon: "devicon:inertiajs", name: "Inertia.js" },
  { icon: "devicon:tailwindcss", name: "TailwindCSS" },
  { icon: "logos:daisyui-icon", name: "DaisyUI" },
  { icon: "flowbite:flowbite-solid", name: "Flowbite" },
  { icon: "simple-icons:shadcnui", name: "Shadcn" },
  { icon: "devicon:bootstrap", name: "Bootstrap" },
  { icon: "", name: "EasyUI", localPath: getImagePath('EasyUi.png') },
];

</script>
<template>
  <div
    class="grid max-w-screen-xl grid-cols-2 gap-6 p-4 mx-auto sm:grid-cols-3 lg:grid-cols-4 sm:p-8"
  >
    <div
      v-for="(stack, index) in stacks"
      :key="index"
      class="flex flex-col items-center"
    >
      <!-- Caixa com o ícone -->
      <div
        class="tooltip flex items-center justify-center w-[80px] h-[80px] rounded-lg hover:border-[#6366f1] transition-colors duration-300"
        :data-tip="stack.name"
      >
        <!-- Ícone da biblioteca Iconify -->
        <Icon
          v-if="stack.icon"
          :icon="stack.icon"
          class="w-full h-full object-contain text-white"
        />

        <!-- Imagem salva no diretorio -->
        <img
          v-else-if="stack.localPath"
          :src="stack.localPath"
          alt="Ícone local"
          class="w-full h-full object-contain"
        />
      </div>

      <!-- Nome da tecnologia -->
      <span class="mt-2 text-sm text-white text-center max-w-[100px]">
        {{ stack.name }}
      </span>
    </div>
  </div>
</template>
