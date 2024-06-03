<script setup lang="ts">
import type { RoomsType, RegionsType } from '@/types/rooms'
import { getRooms, getRegions } from '@/apis/rooms'
import { ref } from 'vue'

let rooms = ref<RoomsType[]>([])
let regions = ref<RegionsType[]>([])

const queryRooms = () => {
  let params = {
    region: 'ap-east-1',
    platform: 'Steam',
  }
  getRooms(params).then(res => {
    console.log(res);
    
  })
}
</script>
<template>
  <v-row></v-row>
</template>