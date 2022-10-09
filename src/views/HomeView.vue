<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useInfiniteScroll } from "@vueuse/core";
import { useWordsStore } from "@/stores/wordStore";

import RowItem from "../components/RowItem.vue";

const store = useWordsStore();

const mainEl = ref(null);

useInfiniteScroll(mainEl, async () => {
  await store.generateWords();
});

onMounted(async () => {
  await store.generateWords();
});
</script>

<template>
  <main
    ref="mainEl"
    class="h-[calc(100vh-4rem)] overflow-y-auto divide-y md:px-12"
  >
    <RowItem v-for="item in store.wordList" :word="item" :key="item.name" />
  </main>
</template>
