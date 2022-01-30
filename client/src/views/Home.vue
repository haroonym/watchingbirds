<template>
  <div>
    <v-container>
      <h3 class="font-weight-bold">Our Endangered Birds</h3>
      <v-row>
        <v-col cols="4">
          <v-text-field v-model="vorname" label="Vorname" clearable></v-text-field>
        </v-col>
        <v-col cols="6">
          <WatchedBirdname :lastWatched="lastWatched" v-if="lastWatched != null" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-text-field v-model="nachname" label="Nachname" clearable></v-text-field>
        </v-col>
      </v-row>
      <h4 class="font-italic">
        Click on the <span class="red--text">eye</span> icon if you have observed that bird!
      </h4>
      <v-data-table
        class="elevation-4 mt-5"
        max-width="100px"
        :headers="headers"
        :items="birds"
        item-key="id"
      >
        <!-- eslint-disable-next-line -->
        <template v-slot:item.pic="{ item }"> <v-img :src="item.pic" width="150px"></v-img> </template>
        <!-- eslint-disable-next-line -->
        <template v-slot:item.actions="{ item }">
          <!-- Icon wird nur angezeigt, wenn Namen ausgefüllt ist, ansonsten bleibt es disabled -->
          <v-icon
            v-if="vorname != '' && nachname != ''"
            @click="updateCount(item)"
            small
            color="red darken-2"
          >
            mdi-eye
          </v-icon>
          <v-icon v-else disable small>mdi-eye</v-icon>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import WatchedBirdname from '@/components/WatchedBirdname.vue';

export default {
  name: 'Home',
  props: {
    birds: {
      type: Array,
    },
  },
  data: () => ({
    headers: [
      {
        text: 'ID',
        align: 'start',
        value: 'id',
      },
      { text: 'Image', value: 'pic' },
      { text: 'common Name', value: 'commonName' },
      { text: 'scientific Name', value: 'scientificName' },
      { text: 'Observed', value: 'count' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    vorname: '',
    nachname: '',
    lastWatched: null,
  }),
  methods: {
    updateCount(item) {
      item.name = this.vorname + ' ' + this.nachname;
      this.$emit('updateCount', item);
      this.lastWatched = item.commonName;
    },
  },
  components: {
    WatchedBirdname,
  },
};
</script>
