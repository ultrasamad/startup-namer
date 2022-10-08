<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { ListBulletIcon } from "@heroicons/vue/24/solid";
import { ArrowLeftIcon } from "@heroicons/vue/24/solid";

const route = useRoute();
</script>

<template>
  <header>
    <div class="h-16 shadow-md sticky top-0">
      <nav class="flex justify-around items-center font-bold pt-4">
        <RouterLink to="/" v-if="route.name === 'favorites'">
          <ArrowLeftIcon class="w-6 h-6" />
        </RouterLink>
        <span class="text-lg">Startup Name Generator</span>
        <RouterLink to="/favorites" v-if="route.name === 'home'">
          <ListBulletIcon class="h-6 w-6" />
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
