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
      <loginpage />
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
import loginpage from "../components/Login.vue";
export default {
  components: {
    loginpage,
  },
};
</script>

<style>
</style>