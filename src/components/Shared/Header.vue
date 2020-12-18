<template>
  <div class="font-sans fixed antialiased w-full bg-white z-10" id="app">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="/">
        <img src="https://placekitten.com/g/30/30" alt="Kitten" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav> -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav class="mr-5" v-if="isLoggedIn == false">
            <!-- <b-nav-item href="#">Notifications</b-nav-item> -->
            <b-nav-item href="#">Get Started</b-nav-item>
            <b-nav-item href="#">Sign In</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="mr-5" v-else>
            <b-nav-item href="#">Notifications</b-nav-item>
            <b-nav-item href="#">Profile</b-nav-item>
            <b-nav-item href="#">Log Out</b-nav-item>
          </b-navbar-nav>
          <!-- <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form> -->

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->

          <!-- <b-nav-item-dropdown right> -->
          <!-- Using 'button-content' slot -->
          <!-- <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      open: false,
      isLoggedIn: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>

<style scoped>
.nav-button {
  /* font-family: Poppins; */
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #555555;
}
.v-application a {
  color: white;
}
.signup {
  color: #4a4edd !important;
}
</style>
