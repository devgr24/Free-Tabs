<template>
    <v-container fluid column>
        <v-flex xs6 offset-xs3>
            <div class="white elevation-2">
                <v-toolbar flat dense class="cyan">
                    <v-toolbar-title>Register</v-toolbar-title>
                </v-toolbar>
                <div class="pl-4 pr-4 pt-2 pb-2">
                    <form name="tab-tracker-form" autocomplete="off">
                        <v-text-field
                            label="Email"
                            box
                            v-model="email"
                        ></v-text-field>  
                        <br/>
                        <v-text-field
                            label="Password"
                            type="password"
                            box
                            v-model="password"
                        ></v-text-field>  
                        <br />
                        <div v-html="err" class="error" />
                        <br />
                        <v-btn small color="success" @click="register">Register</v-btn>
                    </form>
                </div>
            </div>
        </v-flex>
  </v-container>
</template>
<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "HelloWorld",
  data() {
    return {
      email: "",
      password: "",
      err: null
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch('setToken',response.data.token)
		    this.$store.dispatch('setUser',response.data.user)
      } catch (err) {
        this.err = err.response.data.error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
