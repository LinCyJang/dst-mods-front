<script setup lang="ts">
import { getSystemInfo, installSteamcmd,installDST } from '@/apis/steam'
import { onMounted, ref } from 'vue'
import type { SystemResponse, InstallResponse, DSTResponse } from '@/types/steam.d'

import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'
import 'xterm/css/xterm.css'

const systemInfo = ref({})
const loading = ref(false)
const steamcmdPath = ref('')

const terminal = ref<HTMLElement | null>(null)
const fitAddon = new FitAddon()
const term = ref<null | Terminal>(null)

onMounted(() => {
  querySystem()
  initTerminal()
})

const initTerminal = () => {
  if (!term.value) {
    term.value = new Terminal({
      fontSize: 14,
      allowTransparency: true,
      fontFamily: 'Monaco, Menlo, Consolas, Courier New, monospace',
			rows: 40,
			cursorBlink: false,
			theme: {
				foreground: '#fff',
				background: '#000',
				cursor: 'help'
			}
    })
  }
  setTimeout(() => {
    console.log(terminal.value );
		term.value?.open(terminal.value as HTMLElement)
		// term.value?.clear()
		term.value?.loadAddon(fitAddon)
		fitAddon.fit()
	}, 500)
}
const installCmd = () => {
  loading.value = true
  installSteamcmd().then(res => {
    const refRes = res as InstallResponse
    steamcmdPath.value = refRes.data.path
    loading.value = false
  }).catch(() =>{
    loading.value = false
  })
}

const installGame = () => {
  let params = {
    path: steamcmdPath.value 
  }
  installDST(params).then(res => {
    console.log(res);
    
  })
}

const querySystem = () => {
  getSystemInfo().then(res => {
    // console.log(res);
    const refRes = res as SystemResponse
    systemInfo.value = refRes.data.system
  })
}

</script>
<template>
  <v-row>
    <v-col cols="3">
      <v-card variant="outlined" class="white">
        <v-col>
          操作系统：{{ systemInfo.system }} - {{ systemInfo.version }}
        </v-col>
        <v-col>
          <v-btn color="primary" flat @click="installCmd" :loading="loading" :disabled="loading">一键安装steamcmd</v-btn>
        </v-col>
        <v-col>
          <v-text-field v-model="steamcmdPath" disabled readonly variant="outlined" density="compact" hide-details placeholder="Steamcmd路径"></v-text-field>
        </v-col>
        <v-divider></v-divider>
        <v-col>
          <v-btn color="primary" flat @click="installGame">安装DST-Server</v-btn>
        </v-col>
        <v-col>
          <v-text-field variant="outlined" density="compact" hide-details placeholder="DST-Server路径" readonly disabled></v-text-field>
        </v-col>
      </v-card>
    </v-col>
    <v-col cols="9">
      <div
        ref="terminal"
        class="terminal"
      ></div>
    </v-col>
  </v-row>
</template>
