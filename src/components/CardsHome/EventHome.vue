<template>
  <v-container mb-12>
    <v-row>
      <v-col sm="10" offset-sm="1" md="8" offset-md="2">
        <h2>
          Popular Event <v-btn to="" color="primary" small text>viewall</v-btn>
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" md="8" offset-md="2">
        <v-row>
          <v-col sm="6" md="4" v-for="event in events" :key="event.id">
            <v-card outlined>
              <v-img :src="event.image" height="280px"></v-img>
              <v-card-subtitle> {{ event.name }} </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "EventHome",
  data() {
    return {};
  },
  computed: {
    ...mapState("events", ["events"]),
  },
  created() {
    this.$store.dispatch("events/getAllPost");
  },
};
</script>