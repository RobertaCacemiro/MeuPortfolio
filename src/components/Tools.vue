<script setup>
import { Icon } from "@iconify/vue";

const stacks = [
    { icon: "skill-icons:postman", name: "Postman" },
    { icon: "skill-icons:git", name: "GIT" },
    { icon: "skill-icons:bitbucket-light", name: "Bitbucket" },
    { icon: "skill-icons:gitlab-light", name: "Gitlab" },
    { icon: "logos:jira", name: "Jira" },
    { icon: "skill-icons:aws-dark", name: "AWS (Textract e S3)" },
    { icon: "logos:google-cloud", name: "Google Cloud Document AI" },
];

</script>

<template>
  <div
    class="grid max-w-screen-xl grid-cols-2 gap-6 p-4 mx-auto sm:grid-cols-3 lg:grid-cols-4 sm:p-8 "
  >
    <div
      v-for="(stack, index) in stacks"
      :key="index"
      class="flex flex-col items-center"
    >

      <div
        class="tooltip flex items-center justify-center w-[80px] h-[80px] rounded-lg hover:border-[#6366f1] transition-colors duration-300"
        :data-tip="stack.name"
      >
        <Icon
          v-if="stack.icon"
          :icon="stack.icon"
          class="w-full h-full object-contain text-white"
        />

        <img
          v-else-if="stack.localPath"
          :src="stack.localPath"
          alt="Ícone local"
          class="w-full h-full object-contain"
        />

      </div>

      <span class="mt-2 text-sm text-white text-center max-w-[100px]">
        {{ stack.name }}
      </span>
    </div>
  </div>
</template>
