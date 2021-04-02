<template>
  <div>
    <v-app-bar color="deep-purple accent-4">
      <v-toolbar-title class="white--text"> WEBINAR INDONESIA </v-toolbar-title>

      <v-spacer> </v-spacer>

      <span class="hidden-sm-and-up">
        <v-btn @click.stop="drawer = !drawer">MENU</v-btn>
      </span>

      <v-toolbar-items class="hidden-xs-only" v-if="!user">
        <v-btn to="/login" color="deep-purple accent-4 white--text">
          <font-awesome-icon icon="sign-in-alt" class="small" />login</v-btn
        >
        <v-btn to="/register" color="deep-purple accent-4 white--text">
          <font-awesome-icon icon="sign-in-alt" class="small" />signup</v-btn
        >
      </v-toolbar-items>

      <v-toolbar-items v-if="user">
        <v-btn @click.prevent="logout">
          <span>
            <font-awesome-icon icon="sign-in-alt" class="small" />logout</span
          ></v-btn
        >
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary right>
      Hello
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      user: this.$store.state.events.initialState.status.loggedIn,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("events/logout");
      this.$router.push("/login");
    },
  },
};
</script>