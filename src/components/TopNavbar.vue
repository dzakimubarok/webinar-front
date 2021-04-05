<template>
  <div>
    <v-app-bar>
      <v-toolbar-title class="purple--text">
        WEBINAR INDONESIA
      </v-toolbar-title>

      <v-spacer> </v-spacer>

      <span class="hidden-sm-and-up">
        <v-btn @click.stop="drawer = !drawer">MENU</v-btn>
      </span>

      <v-toolbar-items class="hidden-xs-only" v-if="!user">
        <v-btn to="/login" text>
          <font-awesome-icon icon="sign-in-alt" class="small" />login</v-btn
        >
        <v-btn to="/register" text>
          <font-awesome-icon icon="sign-in-alt" class="small" />signup</v-btn
        >
      </v-toolbar-items>

      <v-toolbar-items class="hidden-xs-only" v-if="user">
        <v-btn text>
          <span> <font-awesome-icon icon="plus" class="small" /></span>
          <br />
          <span>Create Event</span></v-btn
        >
        <v-btn text>
          <span>
            <font-awesome-icon icon="heart" class="small" />Like</span
          ></v-btn
        >
        <v-btn @click.stop="drawer1 = !drawer1" text>fauziye</v-btn>

        <!-- <v-btn @click.prevent="logout" text>
          <font-awesome-icon icon="sign-out-alt" class="small" /> <br />
          <span>logout</span></v-btn
        > -->
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer1" absolute temporary right>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Jack Komboy</v-list-item-title>
            <v-list-item-subtitle>loggedIn</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-subtitle>{{ item.title }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
      drawer1: false,
      user: this.$store.state.events.initialState.status.loggedIn,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
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