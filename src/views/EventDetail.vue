<template>
  <div class="EventDetail">
    <TopNavbar />
    <v-container>
      <v-row no-gutters>
        <v-col lg="8">
          <v-row no-gutters>
            <v-col lg="12">
              <v-img :src="event.image"></v-img>
            </v-col>
            <!-- <v-col :style="{ backgroundColor: 'orange' }" lg="12"
            >MAKAN BANG</v-col
          > -->
          </v-row>
        </v-col>
        <v-col lg="4">
          <v-row no-gutters>
            <v-col lg="12"></v-col>
            <v-col lg="12"
              ><v-img
                src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
              ></v-img
            ></v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row no-gutters class="pa-4">
        <v-col lg="8">
          <v-row no-gutters>
            <v-icon class="mx-10">mdi-heart</v-icon>
            <v-divider vertical></v-divider>
            <v-icon class="mx-10"> mdi-share-variant</v-icon>
          </v-row>
        </v-col>
        <v-col lg="4" class="pl-4">
          <v-row no-gutters>
            <v-btn block color="indigo">REGISTER</v-btn>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col></v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/CardsHome/Footer";
import { mapState } from "vuex";

export default {
  components: {
    TopNavbar,
    Footer,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("events", ["event"]),
  },
  created() {
    this.$store.dispatch("events/getPostID", 1);
  },
};
</script>