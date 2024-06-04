<script setup lang="ts">
import ModsCards from '@/components/mods/ModsCards.vue';
import type { modsCards } from '@/types/mods';
import type { ModsRespones } from '@/types/mods.d';
import { getMods } from '@/apis/dashboard';
import { onMounted, ref } from 'vue';

let mods = ref<modsCards[]>([]);
let total = ref(0);
let page = ref(1);
let loading:boolean = true

onMounted(() => {
  queryList()
});

const queryList = () => {
  const params = {
    page: page.value,
    pageSize: 20
  };
  loading = false
  getMods(params)
    .then((res) => {
      const typedRes = res as ModsRespones;
      loading = true
      if (typedRes && typedRes.data && typedRes.data.publishedfiledetails) {
        mods.value = typedRes.data.publishedfiledetails;
        total.value = typedRes.data.total;
      }
    })
    .catch((error) => {
      loading = true
      console.error('Error fetching mods: ', error);
    });
}

const changePage = (_page: number) => {
  page.value = _page
  queryList()
}

</script>
<template>
  <v-row>
    <v-col cols="12">
      <ModsCards :mods-card="mods" v-if="loading"/>
    </v-col>
  </v-row>
  <v-pagination :total-visible="10" :length="Math.ceil(total / 10)" v-model="page" @update:model-value="changePage"></v-pagination>
</template>
