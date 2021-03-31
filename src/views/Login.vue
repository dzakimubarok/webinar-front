<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card elevation="12">
              <v-window>
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 teal--text text--accent-3"
                        >
                          Sign In Webinar
                        </h1>
                        <div class="text-center" mt-4>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon medium> mdi-facebook </v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon medium> mdi-google </v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon medium> mdi-linkedin </v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mlt-4">
                          Ensure your email for registration
                        </h4>
                        <v-form @submit.prevent="handlelogin">
                          <v-text-field
                            v-model="user.email"
                            v-validate="'required'"
                            label="Email"
                            name="Email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="teal accent-3"
                          />
                          <v-text-field
                            v-model="user.password"
                            v-validate="'required'"
                            label="password"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="teal accent-3"
                          />
                        </v-form>
                        <h3 class="text-center mt-3">Forget your password</h3>
                      </v-card-text>
                      <div class="text-center mt-3 mb-3">
                        <v-btn
                          rounded
                          color="teal accent-3"
                          dark
                          :disabled="loading"
                          ><span v-show="loading"></span>
                          <span>SignIn</span></v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="teal accent-4">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello, friends!</h1>
                        <h5 class="text-center">
                          Enter your personal details and start Journey with us
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined="" dark to="/register"
                          >Sign UP</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import User from "../models/user";

export default {
  name: "Login",
  data() {
    return {
      user: new User("", ""),
      loading: false,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.router.push("/profile");
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then((isValid) => {
        if (isValid) {
          this.loading = false;
          return;
        }

        if (this.user.username && this.user.password) {
          this.$store.dispatch("auth/login", this.user).then(
            () => {
              this.$router.push("/profile");
            },
            (error) => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }
      });
    },
  },
};
</script>