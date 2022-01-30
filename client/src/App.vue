<template>
  <v-app>
    <v-main>
      <v-app-bar color="blue accent-4" dark app>
        <v-toolbar-title>
          <v-img src="./assets/bird.png" width="50px" class="mr-3"></v-img>
        </v-toolbar-title>
        <h3>Bird Watch</h3>

        <v-spacer></v-spacer>

        <v-btn class="mr-2 blue accent-4" to="/"> Home </v-btn>
        <v-btn class="mr-2 blue accent-4" to="/gallery"> Gallery </v-btn>
        <v-btn class="blue accent-4" to="/about"> About </v-btn>
      </v-app-bar>
      <v-container> <router-view :birds="birds" @updateCount="updateCount" /></v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',

  data() {
    return { birds: [] };
  },
  created() {
    this.getBirds();
  },
  methods: {
    async getBirds() {
      try {
        const { data } = await axios({
          url: 'http://localhost:3000/birds',
          method: 'GET',
        });
        this.birds = data;
      } catch (error) {
        console.error(error);
      }
    },
    async updateCount(item) {
      await axios({
        url: 'http://127.0.0.1:3000/bird/' + item.id,
        method: 'PATCH',
        contentType: 'application/json',
        data: {
          count: item.count + 1,
          name: item.name,
        },
      });
      this.getBirds();
    },
  },
};
</script>
