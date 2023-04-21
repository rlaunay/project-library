<template>
  <v-app-bar> <v-app-bar-nav-icon @click="a" /> </v-app-bar>
</template>

<script lang="ts" setup>
const emit = defineEmits(["onOpenDrawer"]);

function a() {
  emit("onOpenDrawer");
}
</script>
