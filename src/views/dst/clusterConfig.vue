<script lang="ts" setup>
const modeMap = {
  adventure: '轻松',
  endless: '无尽',
  survival: '生存',
  wilderness: '荒野',
  '': '暗无天日'
};
</script>
<template>
  <v-col cols="3"
    ><v-text-field variant="outlined" label="房间名称" density="compact" hide-details placeholder="输入房间名称"></v-text-field
  ></v-col>
  <v-col cols="3"><v-textarea variant="outlined" label="房间描述" density="compact" hide-details placeholder="描述"></v-textarea></v-col>
  <v-col
    ><v-radio-group height="15" inline hide-details="" :ripple="false" color="primary">
      <v-radio :ripple="false" v-for="(mode, index) in modeMap" :key="index" :label="mode" :value="index"></v-radio> </v-radio-group
  ></v-col>
  <v-col cols="3"
    ><v-text-field
      variant="outlined"
      label="最大玩家数"
      type="number"
      density="compact"
      hide-details
      placeholder="最大玩家数"
    ></v-text-field
  ></v-col>
  <v-col cols="3">
    <v-switch hide-details="" label="PVP" :ripple="false" color="primary"></v-switch>
  </v-col>
  <v-col cols="3"
    ><v-text-field variant="outlined" label="房间密码" density="compact" hide-details placeholder="房间密码"></v-text-field
  ></v-col>
  <v-col cols="3"
    ><v-text-field
      variant="outlined"
      label="服务器端口"
      type="number"
      density="compact"
      hide-details
      placeholder="服务器端口"
    ></v-text-field
  ></v-col>
</template>
