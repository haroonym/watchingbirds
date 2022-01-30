<template>
  <div>
    <v-alert color="red darken-4 text-center white--text" dense width="350px">
      Last watched: {{ lastWatched }}</v-alert
    >
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  props: {
    lastWatched: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
