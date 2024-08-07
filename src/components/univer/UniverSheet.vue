<template>
  <div ref="container" class="univer-container" id="univer-container" />
</template>

<script setup lang="ts">
import { Univer, UniverInstanceType, Workbook, LocaleType, type IWorkbookData } from "@univerjs/core";
import { defaultTheme } from "@univerjs/design";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverSheetsPlugin } from "@univerjs/sheets";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import { UniverSheetsUIPlugin } from "@univerjs/sheets-ui";
import { UniverUIPlugin } from "@univerjs/ui";
import { onBeforeUnmount, onMounted, ref, toRaw } from "vue";
// import { RowHeaderCustomExtension } from "@/plugins/univer-row-header";
// import { ColumnHeaderCustomExtension } from "@/plugins/univer-column-header";
// import { MainCustomExtension } from "@/plugins/univer-main-content";
// import { FUniver } from '@univerjs/facade';
import '@univerjs/sheets-filter-ui/lib/index.css';
 
// import { UniverSheetsFilterPlugin } from '@univerjs/sheets-filter';
// import { UniverSheetsFilterUIPlugin } from '@univerjs/sheets-filter-ui';

import { zhCN, enUS } from 'univer:locales'

const { data } = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});

const univerRef = ref<Univer | null>(null);
const workbook = ref<Workbook | null>(null);
const container = ref<HTMLElement | null>(null);

onMounted(() => {
  init(data);
});

onBeforeUnmount(() => {
  destroyUniver();
});

const init = (data = {}) => {
  const univer = new Univer({
    theme: defaultTheme,
    locale: LocaleType.ZH_CN,
    locales: {
      [LocaleType.ZH_CN]: zhCN,
      [LocaleType.EN_US]: enUS,
    },
  });
  univerRef.value = univer;
  console.log(container.value);
  

  // core plugins
  univer.registerPlugin(UniverRenderEnginePlugin);
  univer.registerPlugin(UniverFormulaEnginePlugin);
  univer.registerPlugin(UniverUIPlugin, {
    container: container.value!,
  });

  // doc plugins
  univer.registerPlugin(UniverDocsPlugin, {
    hasScroll: false,
  });
  univer.registerPlugin(UniverDocsUIPlugin);

  // sheet plugins
  univer.registerPlugin(UniverSheetsPlugin);
  univer.registerPlugin(UniverSheetsUIPlugin);
  univer.registerPlugin(UniverSheetsFormulaPlugin);
  // univer.registerPlugin(UniverSheetsFilterPlugin);
  // univer.registerPlugin(UniverSheetsFilterUIPlugin);
  // const unitId = 'workbook'
  // const univerAPI = FUniver.newAPI(univer);

  // // register custom extension
  // univerAPI.getHooks().onRendered(() => {
  //   univerAPI.registerSheetRowHeaderExtension(unitId, new RowHeaderCustomExtension());
  //   univerAPI.registerSheetColumnHeaderExtension(unitId, new ColumnHeaderCustomExtension());
  //   univerAPI.registerSheetMainExtension(unitId, new MainCustomExtension());
  // })
  // create workbook instance
  workbook.value = univer.createUnit<IWorkbookData, Workbook>(UniverInstanceType.UNIVER_SHEET, data)
};

/**
 * Destroy univer instance and workbook instance
 */
const destroyUniver = () => {
  toRaw(univerRef.value)?.dispose();
  univerRef.value = null;
  workbook.value = null;
};

/**
 * Get workbook data
 */
const getData = () => {
  if (!workbook.value) {
    throw new Error('Workbook is not initialized');
  }
  return workbook.value.save();
};

defineExpose({
  getData,
  destroyUniver
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.univer-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

/* Also hide the menubar */
:global(.univer-menubar) {
  display: none;
}

</style>