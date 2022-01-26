<template>
  <div>
    <v-container>
      <template>
        <h1 class="text-center mb-3">Our Birds!</h1>
        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="(bird, i) in birds"
            :key="i"
            :src="bird.pic"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </template>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    birds: {
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
