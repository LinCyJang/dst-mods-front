<script setup lang="ts">
import ModsCards from '@/components/mods/ModsCards.vue';
import type { modsCards } from "@/types/mods";
import type { ModsRespones } from "@/types/mods.d";
import { getMods } from '@/apis/dashboard'
import { onMounted, ref } from "vue";

let mods = ref<modsCards[]>([]);

onMounted(() => {
    const params = {
        page: 1,
        pageSize: 10
    }
    getMods(params).then((res) => {
      const typedRes = res as ModsRespones;
      if (typedRes && typedRes.data && typedRes.data.publishedfiledetails) {
          mods.value = typedRes.data.publishedfiledetails;
      }
    }).catch(error => {
        console.error("Error fetching mods: ", error);
    });
})
</script>
<template>
  <v-row>
    <v-col cols="12">
      <ModsCards :mods-card="mods"/>
    </v-col>
  </v-row>
</template>