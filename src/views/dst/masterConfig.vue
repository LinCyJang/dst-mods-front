<template>
  <div>
    <v-card v-for="(module, index) in settings" :key="index" variant="outlined" class="mt-3">
      <v-card-title>{{ module.title }}</v-card-title>
      <v-divider></v-divider>
      <v-row class="pa-3">
        <v-col class="d-flex align-center " cols="3" v-for="(n, index) in module.data" :key="index">
          <div :class="module.class" class="bg" :style="{ backgroundPosition: backgroundPosition(n.icon_id) }"></div>
          <v-col class="ml-3 col-6">
            <div>{{ n.lable_cn }}</div>
            <v-select  :model-value="n.default" class="col-12" :items="n.list" hide-details></v-select>
          </v-col>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { wordSettings } from '@/config/dstSettings';
const settings = wordSettings;
const backgroundPosition = (n: number) => {
  return `${-(((n - 1) % 16) * 64)}px -${Math.floor((n - 1) / 16) * 64}px`;
};
</script>
<style lang="scss" scoped>
.worldsettings {
  background-image: url('../../assets/dst/worldsettings_customization.webp');
}
.worldgen {
  background-image: url('../../assets/dst/worldgen_customization.webp');
}
.bg {
  width: 64px;
  height: 63px;
  display: inline-block;
  border-radius: 2px;
}
.icon-item {
  background-position: -64px -0px;
}
</style>
