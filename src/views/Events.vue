<template>
  <div class="Events">
    <v-app>
      <TopNavbar />
      <v-main>
        <Header />
        <!-- <EventHome /> -->
        <v-row>
          <v-col sm="10" offset-sm="1" md="8" offset-md="2">
            <v-row>
              <v-col sm="6" md="4" v-for="event in events" :key="event.id">
                <Card
                  :name="event.name"
                  :image="event.image"
                  :description="event.description"
                  :eventStart="event.eventStart"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <Footer />
      </v-main>
    </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNavbar from "../components/TopNavbar";
import Header from "../components/CardsHome/Header";
import Card from "../components/CardsHome/Card";
import Footer from "../components/CardsHome/Footer";
import { mapState } from "vuex";

export default {
  name: "Events",
  components: {
    TopNavbar,
    Header,
    Card,
    // EventHome,
    Footer,
  },
  computed: {
    ...mapState("events", ["events"]),
  },
  created() {
    this.$store.dispatch("events/getAllPost");
  },
};
</script>
