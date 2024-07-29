<script setup lang="ts">
import type { playerType } from '@/types/rooms';
import { ref, defineEmits, defineProps, watch } from 'vue';
import walter from '@/assets/dst/walter_inv.png'
import wanda from '@/assets/dst/wanda_inv.png'
import warly from '@/assets/dst/warly_inv.png'
import wathgrithr from '@/assets/dst/wathgrithr_inv.png'
import waxwell from '@/assets/dst/waxwell_inv.png'
import webber from '@/assets/dst/webber_inv.png'
import wendy from '@/assets/dst/wendy_inv.png'
import wes from '@/assets/dst/wes_inv.png'
import wickerbottom from '@/assets/dst/wickerbottom_inv.png'
import willow from '@/assets/dst/willow_inv.png'
import wilson from '@/assets/dst/wilson_inv.png'
import winona from '@/assets/dst/winona_inv.png'
import wolfgang from '@/assets/dst/wolfgang_inv.png'
import woodie from '@/assets/dst/woodie_inv.png'
import wormwood from '@/assets/dst/wormwood_inv.png'
import wortox from '@/assets/dst/wortox_inv.png'
import wurt from '@/assets/dst/wurt_inv.png'
import wx78 from '@/assets/dst/wx78_inv.png'
import mod_ch from '@/assets/dst/mod_ch_inv.png'
const props = defineProps({
  dialog: Boolean,
  room: {
    type: Object,
    default: () => {}
  }
});
// 222
const avatarMap = {
  walter: walter,
  wanda: wanda,
  warly: warly,
  wathgrithr: wathgrithr,
  waxwell: waxwell,
  webber: webber,
  wendy: wendy,
  wes: wes,
  wickerbottom: wickerbottom,
  willow: willow,
  wilson: wilson,
  winona: winona,
  wolfgang: wolfgang,
  woodie: woodie,
  wormwood: wormwood,
  wortox: wortox,
  wurt: wurt,
  wx78: wormwood,
}
let internalDialog = ref(props.dialog);

const players = ref<playerType[]>()

const emit = defineEmits<(e: 'update:dialog', value: boolean) => void>();

watch(
  internalDialog,
  (newValue) => {
    emit('update:dialog', newValue);
  },
  {
    deep: true,
    immediate: true
  }
);

watch(() => props.dialog,
  (newval) => {
    internalDialog.value = newval
  }
)

watch(() => props.room, (newval) => {
  players.value = convertToJSArray(newval.players)
})

const closeDialog = () => {
  internalDialog.value = false
};

const convertToJSArray = (str: string) => {
  // 正则表达式匹配花括号内的字符串（即对象的字符串表示）
  const objStr = str.replace("return ", "").trim().replace(/(\w+)=/g, '"$1":').replace(/^\{\n/, '[').replace(/\n}/, ']')
  // 替换错误的等号和引号，将对象字符串转换为有效的JSON格式
  return JSON.parse(objStr)
  
}
</script>

<template>
  <v-dialog v-model="internalDialog" width="auto" close-delay="0">
    <v-card width="400">
      <v-card-title>
        <h5>房间信息</h5>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text> 
        <v-list>
          <v-list-item v-for="(player, index) in players" :key="index" >
            <div class="d-flex align-center">
              <img :src="avatarMap[player.prefab] || mod_ch" alt="" height="25" >
              <span class="ml-3 mt-1" :style="{color: '#' + player.colour}">{{ player.name }}</span>
            </div>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn class="ms-auto" width="100" block color="primary"  @click="closeDialog">确定</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
