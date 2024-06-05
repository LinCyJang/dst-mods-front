<script setup lang="ts">
import type { PropType } from 'vue';
import type { modsCards } from '@/types/mods';
import UiParentCard from '@/components/shared/UiParentCard.vue';
/**
 * props
 */
const props = defineProps({
  modsCard: {
    type: Array as PropType<modsCards[]>,
    default: () => []
  },
  loading: Boolean
});

const imageLoaded = (card: modsCards) => {
  console.log(card.banned);
};
</script>
<template>
  <v-row>
    <v-col cols="2" lg="2" sm="6" v-for="(card, index) in props.modsCard" :key="index">
        <v-card>
          <div class="pa-1 d-flex align-center justify-center">
            <img :src="card.preview_url"  height="200" class="rounded-sm" />
          </div>
          <div class="d-flex justify-end mr-4 mt-n5">
            <v-btn size="40" icon class="bg-primary d-flex">
              <v-avatar size="30" class="text-white">
                <PlusIcon size="15" />
              </v-avatar>
              <v-tooltip activator="parent" location="bottom">添加mod</v-tooltip>
            </v-btn>
          </div>
          <v-card-item class="pt-0 px-2">
            <h6 class="text-body-1 text-truncate" v-text="card.title"></h6>
            <div class="d-flex align-center mt-1">
              <v-icon size="18">mdi-download</v-icon>
              <span class="" v-text="card.subscriptions"></span>
            </div>
            <v-rating density="compact" color="primary" size="small" v-model="card.vote_data.score" readonly></v-rating>

          </v-card-item>
        </v-card>
    </v-col>
  </v-row>
</template>
