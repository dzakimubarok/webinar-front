<template>
  <v-app>
    <v-content>
      <v-container class="fill-height">
        <v-row align="center" justify="center">
          <v-col cols="12" md="8" sm="8">
            <v-card elevation="12">
              <v-window>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-10">
                        <h1 class="text-center display-1">
                          Welcome Back Bro and Sis
                        </h1>
                        <h5 class="text-center">
                          To Keep connected with us please login your personel
                          info
                        </h5>
                      </v-card-text>
                      <div class="text-center mb-2">
                        <v-btn rounded outlined dark to="/login">Sign In</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 teal--text text--accent-3"
                        >
                          Create Your Personal
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon medium>mdi-facebook</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon medium>mdi-google</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon medium>mdi-linkedin</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">
                          Ensure your email for registration
                        </h4>
                        <v-form id="signup-form" name="form">
                          <v-text-field
                            label="Username"
                            name="Username"
                            v-model="user.username"
                            v-validate="'required|min:3|max:50'"
                            prepend-icon="mdi-account"
                            type="text"
                            color="teal accent-3"
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            v-model="user.email"
                            v-validate="'required|email|max:50'"
                            prepend-icon="mdi-email "
                            type="Email"
                            color="teal accent-3"
                          />
                          <v-text-field
                            label="Password"
                            name="Password"
                            v-model="user.password"
                            v-validate="'required|min:6|max:40'"
                            prepend-icon="mdi-lock "
                            type="Password"
                            color="teal accent-3"
                          />
                          <div class="text-center mb-2">
                            <v-btn
                              rounded
                              color="teal accent-3"
                              dark
                              form="signup-form"
                              @click.prevent="handleRegister"
                            >
                              SIGN UP</v-btn
                            >
                          </div>
                        </v-form>
                      </v-card-text>
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
  name: "Register",
  data() {
    return {
      user: new User("", "", ""),
    };
  },
  computed: {
    loggedIn() {
      console.log("loggedIn");

      return this.$store.state.events.initialState.status.loggedIn;
    },
  },

  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },

  methods: {
    handleRegister() {
      this.submitted = true;
      this.$validator.validate().then((isValid) => {
        if (isValid) {
          this.$store.dispatch("events/register", this.user).then(
            (data) => {
              this.message = data.message;
              this.successful = true;
              this.$router.push("/profile");
            },
            (error) => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              this.successful = false;
            }
          );
        }
      });
    },
  },
};
</script>