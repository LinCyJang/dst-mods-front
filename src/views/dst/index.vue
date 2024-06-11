<script lang="ts" setup>
import { ref } from "vue"
import clusterConfig from "./clusterConfig.vue"
import masterConfig from "./masterConfig.vue"
import coverConfig from "./coverConfig.vue"
import modsConfig from "./modsConfig.vue"


const roomConfig = ref(1)
const tabs = [
    { text: '基础设置', value: 1 },
    { text: '地面世界', value: 2 },
    { text: '洞穴世界', value: 3 },
    { text: '模组配置', value: 4 },
  ]
</script>
<template>
  <v-app-bar elevation="1" height="48" >
    <v-tabs color="primary" v-model="roomConfig">
      <v-tab v-for="tab, in tabs" :key="tab.value" :value="tab.value">
        {{ tab.text }}
      </v-tab>
    </v-tabs>
  </v-app-bar>
  <clusterConfig v-if="roomConfig === 1"></clusterConfig>
  <masterConfig v-if="roomConfig === 2"></masterConfig>
  <coverConfig v-if="roomConfig === 3"></coverConfig>
  <modsConfig v-if="roomConfig === 4"></modsConfig>
</template>