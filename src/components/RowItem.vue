<script setup lang="ts">
import { HeartIcon as SolidHeartIcon } from "@heroicons/vue/24/solid";
import { HeartIcon as OutlineHeartIcon } from "@heroicons/vue/24/outline";
import type { Word } from "@/types/Word";
import { useWordsStore } from "@/stores/wordStore";

interface Props {
  word: Word;
}

const store = useWordsStore();

const props = defineProps<Props>();

const handleClick = () => {
  store.favoriteWord(props.word.name);
};
</script>
<template>
  <div class="flex items-center justify-between p-4">
    <span class="text-gray-600">{{ word.name }}</span>
    <button type="button" @click="handleClick">
      <SolidHeartIcon class="w-6 h-6 text-red-500" v-if="word.favorited" />
      <OutlineHeartIcon class="w-6 h-6" v-else />
    </button>
  </div>
</template>
<style scoped></style>
