<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ref } from 'vue';
// import VerticalSidebarVue from './vertical-sidebar/VerticalSidebar.vue';
// import VerticalHeaderVue from './vertical-header/VerticalHeader.vue';
import MainView from './Main.vue';

let isOverlay = ref(true);
</script>

<template>
  <v-locale-provider>
    <v-app>
      <!-- <VerticalSidebarVue />
            <VerticalHeaderVue  /> -->
      <MainView />
      <v-main class="grey-lighten-5">
        <v-container fluid class="page-wrapper">
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>
