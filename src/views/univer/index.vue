<template>
  <div id="m-univer-sheet">
    <v-toolbar>
      <v-btn @click="getData" title="print current workbook data to console">Get Data</v-btn>
      <v-btn @click="destroy">destroy</v-btn>
      <v-btn @click="show">show</v-btn>
    </v-toolbar>
    <UniverSheet v-if="isShow" id="sheet" ref="univerRef" :data="data" />
  </div>
</template>

<script setup lang="ts">
import UniverSheet from '@/components/univer/UniverSheet.vue';
import { DEFAULT_WORKBOOK_DATA } from '@/assets/default-workbook-data';
import { ref } from 'vue';

const data = ref(DEFAULT_WORKBOOK_DATA);
const univerRef = ref<InstanceType<typeof UniverSheet> | null>(null);
const isShow = ref(true);

const getData = () => {
  const result = univerRef.value?.getData();
  console.log(JSON.stringify(result, null, 2));
};

const destroy = () => {
  isShow.value = false;
};

const show = () => {
  isShow.value = true;
};
</script>
