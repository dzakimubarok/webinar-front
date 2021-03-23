<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>WEBINAR INDONESIA</v-toolbar-title>

      <v-spacer> </v-spacer>

      <span class="hidden-sm-and-up">
        <v-btn @click.stop="drawer = !drawer">MENU</v-btn>
      </span>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn>
          <font-awesome-icon icon="sign-in-alt" class="small" /> LOGIN</v-btn
        >
        <v-btn>
          <font-awesome-icon icon="sign-in-alt" class="small" />LOGIN</v-btn
        >
        <v-btn>
          <font-awesome-icon icon="sign-in-alt" class="small" />LOGIN</v-btn
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
    };
  },
};
</script>