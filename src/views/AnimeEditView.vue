<template>
    <!--
        <v-row>
      <v-col cols="1" v-for="i in 13" :key="i" >
        {{ 'col -'+i }}
      </v-col>
    </v-row>
    -->
  <v-container>
    <v-row>
        <v-col cols="12">
      <Animeedit />
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Animeedit from "../components/Animeedit.vue";
export default {
  components: {
    Animeedit,
  },
};
</script>

<style>
</style>