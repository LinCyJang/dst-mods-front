<script setup lang="ts">
import type { RoomsType, RegionsType } from '@/types/rooms';
import type { RoomsResponse } from '@/types/rooms.d';
import { getRooms, getRegions, getRoom } from '@/apis/rooms';
import { onMounted, ref } from 'vue';
import VRoom from '@/components/rooms/VRoom.vue'

import bg from '@/assets/dst/bg.png'
import bg1 from '@/assets/dst/bg1.png'
import spring from '@/assets/dst/spring.png'
import summer from '@/assets/dst/summer.png'
import autumn from '@/assets/dst/autumn.png'
import winter from '@/assets/dst/winter.png'

let currentRooms = ref<RoomsType[]>([]);
let rooms = ref<RoomsType[]>([]);
let regions = ref<RegionsType[]>([]);
let page = ref(1);
let pageSize = ref(60);
let total = ref(0);
let pageRooms = ref<RoomsType[]>([]);
let searchKey = ref('')
let region = ref('ap-east-1')
let platform = ref('Steam')
let loading = ref(false)
let imageMap = ref({
  'adventure': bg1,
  'endless': bg,
  'survival': bg,
  'wilderness': bg,
  '': bg,
})
let showRoomDetails = ref(false)

const regionsItems = ref([
  {title: '美国东部（弗吉尼亚北部）',value: "us-east-1",},
  {title: '欧洲中部（法兰克福）',value: "eu-central-1",},
  {title: '亚太地区（新加坡）',value: "ap-southeast-1",},
  {title: '亚太地区（香港）',value: "ap-east-1"},
])
const platformItems = ref([
  'Steam','PSN','Rail','XBone','Switch'
])
const gamePlatformMap = {
  1: 'Steam|mdi-steam',
  2: 'PSN|mdi-playstation',
  4: 'WeGame|mdi-gamepad-square',
  16: 'XBone|mdi-xbox',
  32: 'Switch|mdi-nintendo-switch',
};

const seasonMap = {
  'spring': '春',
  'summer': '夏',
  'autumn': '秋',
  'winter': '冬',
}

const seasonImg = {
  'spring': spring,
  'summer': summer,
  'autumn': autumn,
  'winter': winter,
}

const modeMap = {
  'adventure': '轻松',
  'endless': '无尽',
  'survival': '生存',
  'wilderness': '荒野',
  '': '暗无天日',
}

onMounted(() => {
  queryRooms();
});

const searchRegionRooms = () => {
  page.value = 1
  queryRooms()
}

const queryRooms = () => {
  loading.value = true
  let params = {
    region: region.value,
    platform: platform.value
  };
  getRooms(params).then((res) => {
    const typedRes = res as RoomsResponse;
    rooms.value = typedRes.data.GET;
    currentRooms.value = typedRes.data.GET || []
    total.value = currentRooms.value.length
    loading.value = false
    changePage(page.value);
  }).catch(() => {
    loading.value = false
  });
};

const changePage = (pageNumber: number) => {
  const startIndex = (pageNumber - 1) * pageSize.value;
  const endIndex = startIndex + pageSize.value;
  pageRooms.value = currentRooms.value.slice(startIndex, endIndex);
};

const searchPage = (key: string) => {
  currentRooms.value = rooms.value.filter(room => room.name.indexOf(key) > -1)
  total.value = currentRooms.value.length
  page.value = 1
  changePage(page.value);
}

const handleReset = () => {
  searchKey.value = ''
  searchPage(searchKey.value)
}

const platformName = (platform: number) => {
  return gamePlatformMap[platform].split('|')[0] || '';
};
const platformIcon = (platform: number) => {
  return gamePlatformMap[platform].split('|')[1] || '';
};
const roomTags = (tags: string) => {
  return tags.split(',')
}

const getRoomDetails = (rowId: string) => {
  let params = {
    region: region.value,
    rowId: rowId
  }
  getRoom(params).then(res => {
    showRoomDetails.value = true
    console.log(showRoomDetails.value);
    
  })
}
</script>
<template>
  {{ showRoomDetails }}
  <VRoom :dialog="showRoomDetails" v-model="showRoomDetails" ></VRoom>
  <v-app-bar class="px-2" flat>
    <v-row>
      <v-col cols="3">
        <v-select  variant="outlined" v-model="region" density="compact" :items="regionsItems" hide-details placeholder="选择服务器地区"></v-select>
      </v-col>
      <v-col cols="3">
        <v-select  variant="outlined" v-model="platform" density="compact" :items="platformItems" hide-details placeholder="选择游戏平台"></v-select>
      </v-col>
      <v-col cols="3">
        <v-btn width="100" :loading="loading" :disabled="loading" class="bg-primary" @click='searchRegionRooms'>搜索</v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
  <v-app-bar class="px-2" flat="">
    <v-row>
      <v-col cols="3">
        <v-text-field v-model="searchKey"  variant="outlined" density="compact" hide-details placeholder="输入房间名称"></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-btn width="100" class="bg-primary" @click='searchPage(searchKey)'>搜索</v-btn>
        <v-btn width="100" class="bg-grey-lighten-4 ml-3" @click="handleReset">重置</v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
  <v-app-bar  elevation="1">
    <v-spacer></v-spacer>
    <v-pagination :total-visible="6" :length="Math.ceil(total / 10)" v-model="page" @update:model-value="changePage"></v-pagination>
  </v-app-bar>
  <v-row>
    <v-col cols="3" v-for="(room, index) in pageRooms" :key="index">
      <v-card>
        <v-img
          height="250"
          :src="imageMap[room.mode]"
          cover
        ></v-img>
        <v-card-item>
          <v-card-title>{{ room.name }}</v-card-title>
          <v-card-subtitle>
            <span class="me-1">{{ platformName(room.platform) }}</span>
            <v-icon :icon="platformIcon(room.platform)" size="small" color="#263238"></v-icon>
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <v-row align="center" class="mx-0 text-truncate flex-nowrap" :title="`${ room.connected }/${ room.maxconnections }`">
            <v-rating
              empty-icon="mdi-account-outline"
              full-icon="mdi-account"
              half-icon="mdi-circle-half"
              :model-value="room.connected"
              color="#5D87FF"
              active-color="#5D87FF"
              density="compact"
              size="small"
              half-increments
              readonly
              :length="room.maxconnections"
            ></v-rating>
            <div class="text-grey ms-2">{{ room.connected }}/{{ room.maxconnections }}</div>
          </v-row>
          <div class="my-4 text-subtitle-1">
              <v-icon size="small" color="#D50000" v-if="room.password">mdi-lock</v-icon>
              <v-icon size="small" color="#795548" v-if="room.serverpaused">mdi-pause-circle</v-icon>
              <v-icon size="small" color="#0091EA" v-if="room.dedicated">mdi-server</v-icon>
              <v-icon size="small" color="#D50000" v-if="room.pvp">mdi-heart-circle</v-icon>
              <v-icon size="small" color="#fff" >mdi-heart-circle</v-icon>
            </div>
          <div class="my-4 text-subtitle-1 d-flex align-center">
            <v-avatar size="x-small">
              <img
                :src="seasonImg[room.season]"
                height="20"
              />
            </v-avatar>
            {{ seasonMap[room.season] }}季
          </div>

          <div>{{ modeMap[room.mode] }}模式</div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>
        <!-- <div class="px-4 mb-2">
          <v-chip v-for="tag in roomTags(room.tags)" :key="tag" class="ma-1">{{ tag }}</v-chip>
        </div> -->
        <v-card-actions>
          <v-btn block border color="primary" @click="getRoomDetails(room.__rowId)">详情</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
