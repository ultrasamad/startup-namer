<script setup lang="ts">
import { useWordsStore } from "@/stores/wordStore";

import RowItem from "../components/RowItem.vue";

const store = useWordsStore();
</script>

<template>
  <main class="h-[calc(100vh-4rem)] overflow-y-auto divide-y">
    <RowItem v-for="item in store.favorites" :word="item" :key="item.name" />
  </main>
</template>

<style scoped></style>
