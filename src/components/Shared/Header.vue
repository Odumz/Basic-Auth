<template>
  <div class="antialiased w-full z-10" id="app">
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="nav"
      class="p-1 fixed-top"
      v-if="isLoggedIn == false"
    >
      <b-navbar-brand href="/" class="">
        <img
          src="../../assets/logo.png"
          alt="Temp"
          width="45%"
          class="d-flex ml-3"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="mr-3"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav> -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-navbar-nav class="mr-5"> -->
          <!-- <b-nav-item href="#">Notifications</b-nav-item> -->
          <b-nav-item href="/auth/register" class="font-weight-bold"
            >Discover</b-nav-item
          >
          <b-nav-item href="/auth/login" class="font-weight-bold mr-lg-5"
            >Sign In</b-nav-item
          >
          <!-- </b-navbar-nav> -->

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
    <b-navbar
      toggleable="md"
      variant="primary"
      type="dark"
      class="py-2 fixed-top "
      v-else
    >
      <b-navbar-brand href="/" class="">
        <img
          src="../../assets/logo.png"
          alt="Temp"
          width="45%"
          class="d-flex ml-3"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="mr-3">
        <b-icon icon="border-width" variant="white"></b-icon>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav> -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav class="mr-md-5">
            <!-- <b-nav-item href="/dashboard/notifications" class="font-weight-bold"
              >Notifications</b-nav-item
            >
            <b-nav-item href="/dashboard/profile" class="font-weight-bold"
              >Profile</b-nav-item
            > -->
            <b-nav-item href="/" class="font-weight-bold">Log Out</b-nav-item>
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
      isLoggedIn: false,
      fullpath: '',
    };
  },
  async mounted() {
    await this.getFullpath();
    await this.getUserLog();
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    getFullpath() {
      // console.log('fdom');
      this.fullpath = this.$route.fullPath;
      // console.log(this.fullpath);
      return this.fullpath;
    },
    getUserLog() {
      if (
        this.fullpath == '/auth/login' ||
        this.fullpath == '/' ||
        this.fullpath == '/auth/register' ||
        this.fullpath == '/forgot-password'
      ) {
        this.isLoggedIn = false;
      } else this.isLoggedIn = true;
    },
  },
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

.navbar-dark .navbar-nav .nav-link {
  /* color: #6398da !important; */
  color: #fff !important;
  /* color: #043F6C !important; */
}

.navbar-primary .navbar-nav .nav-link {
  /* color: #ffffff !important; */
  color: #6398da !important;
}

.navbar-toggler-icon {
  color: #6398da;
}

.top {
  z-index: -1;
}

.ml-n6 {
  margin-left: -10rem !important;
}
</style>
