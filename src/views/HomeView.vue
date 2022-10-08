<script setup lang="ts">
import { useWordsStore } from "@/stores/wordStore";

import { onMounted } from "vue";
import RowItem from "../components/RowItem.vue";

const store = useWordsStore();

onMounted(async () => {
  await store.generateWords();
});
</script>

<template>
  <main class="h-[calc(100vh-4rem)] overflow-y-auto divide-y md:px-12">
    <RowItem v-for="item in store.wordList" :word="item" :key="item.name" />
  </main>
</template>
