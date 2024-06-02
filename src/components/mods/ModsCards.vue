<script setup lang="ts">
import type { PropType } from 'vue';
import type{ modsCards } from "@/types/mods";

const props = defineProps({
  modsCard: {
    type: Array as PropType<modsCards[]>,
    default: () => []
  }
})
</script>
<template>
  <v-row>
    <v-col cols="12" lg="3" sm="6" v-for="(card, index) in props.modsCard" :key="index">
      <v-card elevation="10" class="withbg" rounded="md">
        <v-img :src="card.preview_url" height="100%" class="rounded-t-md"></v-img>
        <div class="d-flex justify-end mr-4 mt-n5">
          <v-btn size="40" icon class="bg-primary d-flex">
            <v-avatar size="30" class="text-white">
              <PlusIcon size="15" />
            </v-avatar>
            <v-tooltip activator="parent" location="bottom">添加mod</v-tooltip>
          </v-btn>
        </div>
        <v-card-item class="pt-0">
          <h6 class="text-h6" v-text="card.title"></h6>
          <div class="d-flex align-center justify-space-between mt-1">
            <div>
              <span class="text-h6" v-text="card.num_comments_public"></span>
            </div>
            <v-rating density="compact" color="warning" size="small" v-model="card.rating" readonly></v-rating>
          </div>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>
