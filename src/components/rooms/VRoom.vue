<script setup lang="ts">
import { ref, defineEmits, defineProps, watch } from 'vue';
import { boolean } from 'yup';
const props = defineProps({
  dialog: Boolean
});
let internalDialog = ref(props.dialog);

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
    console.log(newval, 'newval');
    internalDialog.value = newval
  }
)

const closeDialog = () => {
  emit('update:dialog', false);
};
</script>

<template>
  11 {{ dialog }} {{ internalDialog }}
  <v-dialog v-model="internalDialog" width="auto">
    <v-card max-width="400" prepend-icon="mdi-update" title="Update in progress">
      <v-card-text> text="Your application will relaunch automatically after the update is complete." </v-card-text>
      <v-card-actions>
        <v-btn class="ms-auto"  @click="closeDialog">ok</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
