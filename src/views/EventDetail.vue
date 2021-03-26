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
            <v-col lg="12">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="display-1 mt-5">
                    {{ event.name }}
                  </v-list-item-title>
                  <v-list-item-title class="mt-5 grey--text mb-2 right">
                    <!-- {{ event.organizer.name }} -->
                  </v-list-item-title>
                  <v-divider></v-divider>
                  <v-list-item-title class=".display-1 mb-2 mt-5"
                    >Event Schedule</v-list-item-title
                  >
                  <div class="overline mt-1 mb-3">
                    {{ formatDate(event.eventStart) }}
                    <span> -</span>
                    {{ formatDate(event.eventEnd) }}
                  </div>
                  <div class="overline mb-4"></div>
                  <v-divider></v-divider>
                  <div>
                    <v-list-item-title class="mt-4"
                      >Kuota : {{ event.quota }}</v-list-item-title
                    >
                  </div>
                  <v-list-item-subtitle>
                    {{ event.qouta }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col lg="12"></v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row
        no-gutters
        class="pa-4"
        align="center"
        justify="end"
        :style="{ backgroundColor: 'white' }"
      >
        <v-col lg="8">
          <v-row no-gutters>
            <v-icon class="mx-10" x-large color="red darken-2"
              >mdi-heart</v-icon
            >
            <v-divider vertical></v-divider>
            <v-icon class="mx-10" x-large color="blue darken-2">
              mdi-share-variant</v-icon
            >
          </v-row>
        </v-col>
        <v-col lg="4">
          <v-row no-gutters>
            <v-col lg="12">
              <div>
                <v-btn block color="green" class="white--text">REGISTER</v-btn>
              </div>
            </v-col>
            <v-col lg="12">
              <div class="grey--text mb-2 right">
                <v-card-text align="right" justify="end">
                  Registration berakhir {{ formatDate(event.registrationEnd) }}
                </v-card-text>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col lg-12 :style="{ backgroundColor: 'red' }">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                {{ event.description }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
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

  computed: {
    ...mapState("events", ["event"]),
  },
  mounted() {
    this.$store.dispatch("events/getPostID", this.$route.params.id);
  },
  methods: {
    formatDate(date) {
      let localDate = new Date(date);

      return localDate.toLocaleString("id-ID", {
        timeZone: "Asia/Jakarta",
        month: "2-digit",
        year: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },
};
</script>