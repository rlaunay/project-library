<template>
  <Header @onOpenDrawer="drawer = !drawer" />
  <v-navigation-drawer v-model="drawer">
    <Navigation />
  </v-navigation-drawer>
  <v-main>
    <RouterView />
  </v-main>
</template>

<script setup lang="ts">
import Header from "@/layout/Main/Header.vue";
import Navigation from "@/layout/Main/Navigation.vue";
import { ref } from "vue";
import { useDisplay } from "vuetify";

const { mdAndDown } = useDisplay();

const drawer = ref(!mdAndDown.value);
</script>
