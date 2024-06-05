<script setup lang="ts">
import ModsCards from '@/components/mods/ModsCards.vue';
import type { modsCards } from '@/types/mods';
import type { ModsRespones } from '@/types/mods.d';
import { getMods } from '@/apis/dashboard';
import { onMounted, ref } from 'vue';

let mods = ref<modsCards[]>([]);
let total = ref(0);
let page = ref(1);
let loading = ref(false)
let searchKey = ref('')
onMounted(() => {
  queryList()
});

const queryList = () => {
  const params = {
    page: page.value,
    pageSize: 20,
    searchText: searchKey.value
  };
  loading.value = true
  getMods(params)
    .then((res) => {
      const typedRes = res as ModsRespones;
      loading.value = false
      if (typedRes && typedRes.data && typedRes.data.publishedfiledetails) {
        mods.value = typedRes.data.publishedfiledetails;
        total.value = typedRes.data.total;
      }
    })
    .catch((error) => {
      loading.value = false
      console.error('Error fetching mods: ', error);
    });
}

const searchMods = () => {
  page.value = 1
  queryList()
}

const changePage = (_page: number) => {
  page.value = _page
  queryList()
}
const handleReset = () => {
  if(searchKey.value === '') return
  searchKey.value = ''
  page.value = 1
  queryList()
}

</script>
<template>
   <v-app-bar class="px-2" flat="">
    <v-row>
      <v-col cols="3">
        <v-text-field v-model="searchKey"  variant="outlined" density="compact" hide-details placeholder="输入MOD名称"></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-btn width="100" :loading="loading" :disabled="loading" class="bg-primary" @click='searchMods(searchKey)'>查找Mod</v-btn>
        <v-btn width="100" class="bg-grey-lighten-4 ml-3" @click="handleReset">重置</v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
  <v-app-bar elevation="1">
    <v-spacer></v-spacer>
    <v-pagination :total-visible="6" :length="Math.ceil(total / 10)" v-model="page" @update:model-value="changePage"></v-pagination>
  </v-app-bar>
  <v-row>
    <v-col cols="12">
      <ModsCards :mods-card="mods"/>
    </v-col>
  </v-row>
</template>
