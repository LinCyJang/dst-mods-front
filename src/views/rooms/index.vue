<script setup lang="ts">
import type { RoomsType, RegionsType } from '@/types/rooms';
import type { RoomsResponse } from '@/types/rooms.d';
import { getRooms, getRegions } from '@/apis/rooms';
import { onMounted, ref } from 'vue';
let currentRooms = ref<RoomsType[]>([]);
let rooms = ref<RoomsType[]>([]);
let regions = ref<RegionsType[]>([]);
let page = ref(1);
let pageSize = ref(60);
let total = ref(0);
let pageRooms = ref<RoomsType[]>([]);
let searchKey = ref('')

const gamePlatformMap = {
  1: 'Steam|mdi-steam',
  2: 'WeGame|mdi-qqchat'
};

const seasonMap = {
  'spring': '春',
  'summer': '夏',
  'autumn': '秋',
  'winter': '冬',
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

const queryRooms = () => {
  let params = {
    region: 'ap-east-1',
    platform: 'Steam'
  };
  getRooms(params).then((res) => {
    const typedRes = res as RoomsResponse;
    rooms.value = typedRes.data.GET;
    currentRooms.value = typedRes.data.GET
    total.value = currentRooms.value.length
    changePage(page.value);
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
  searchKey = ''
  searchPage(searchKey)
}

const platformName = (platform: number) => {
  return gamePlatformMap[platform].split('|')[0];
};
const platformIcon = (platform: number) => {
  return gamePlatformMap[platform].split('|')[1];
};
const roomTags = (tags: string) => {
  return tags.split(',')
}
</script>
<template>
  <v-app-bar class="px-2">
    <v-row>
      <v-col cols="3">
        <v-select  variant="outlined" density="compact" hide-details placeholder="选择服务器地区"></v-select>
      </v-col>
      <v-col cols="3">
        <v-select  variant="outlined" density="compact" hide-details placeholder="选择游戏平台"></v-select>
      </v-col>
      <v-col cols="3">
        <v-text-field v-model="searchKey"  variant="outlined" density="compact" hide-details placeholder="输入房间名称"></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-btn width="100" class="bg-primary" @click='searchPage(searchKey)'>搜索</v-btn>
        <v-btn width="100" class="bg-grey-lighten-4 ml-3" @click="handleReset">重置</v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
  <v-row>
    <v-col cols="3" v-for="(room, index) in pageRooms" :key="index">
      <v-card>
        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
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
          <div class="my-4 text-subtitle-1">{{ seasonMap[room.season] }}季</div>

          <div>{{ modeMap[room.mode] }}模式</div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>
        <!-- <div class="px-4 mb-2">
          <v-chip v-for="tag in roomTags(room.tags)" :key="tag" class="ma-1">{{ tag }}</v-chip>
        </div> -->
        <v-card-actions>
          <v-btn block border color="primary">详情</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  <v-pagination :total-visible="10" :length="Math.ceil(total / 10)" v-model="page" @update:model-value="changePage" class="mt-3 position-sticky bottom-0"></v-pagination>
</template>
