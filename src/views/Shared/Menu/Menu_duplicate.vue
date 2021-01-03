<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      class="tw-text-left tw-text-white tw-eko-dark tw-shadow-lg elevation-0 tw-border-0"
      color="#1E2933"
      width="220"
    >
      <img
        class="inline tw-mx-auto  my-img"
        src="https://res.cloudinary.com/dldd8ucby/image/upload/v1587851649/cerebro/cerebrologo_2x.png"
      />

      <div id="tw-p-4 tw-mx-auto ">
        <router-link to="/dashboard" class="tw-py-2">
          <span class="sidebar-text tw-text-2xl tw-py-3 tw-px-8">
            <i class="fas fa-home tw-mr-2"></i>
            Home
          </span>
        </router-link>

        <router-link
          v-if="user.developer_account || user.business_account"
          to="/dashboard/inbox"
          class="tw-py-2"
        >
          <span class="sidebar-text tw-text-2xl tw-py-3 tw-px-8">
            <i class="fas fa-inbox tw-mr-2"></i>
            Inbox
          </span>
        </router-link>

        <!-- <router-link
          v-if="user.developer_account || user.business_account"
          to="/dashboard/projects"
          class="tw-py-2"
        >
          <span class="sidebar-text tw-text-2xl tw-py-3 tw-px-8">
            <i class="fas fa-briefcase tw-mr-2"></i>
            Projects
          </span>
        </router-link> -->

        <router-link
          v-if="user.developer_account"
          to="/dashboard/projects"
          class="tw-py-2"
        >
          <span class="sidebar-text tw-text-2xl tw-py-3 tw-px-8">
            <i class="fas fa-briefcase tw-mr-2"></i>
            Projects
          </span>
        </router-link>

        <router-link
          v-if="user.business_account"
          to="/dashboard/business-requests"
          class="tw-py-2"
        >
          <span class="sidebar-text tw-text-2xl tw-py-3 tw-px-8">
            <i class="fas fa-briefcase tw-mr-2"></i>
            Projects
          </span>
        </router-link>

        <router-link
          v-if="
            !user.developer_account &&
              !user.faculty_account &&
              !user.business_account
          "
          to="/dashboard/admin/business-requests"
          class="tw-py-2"
        >
          <span class="sidebar-text tw-text-2xl tw-py-3 tw-px-8">
            <i class="fas fa-briefcase tw-mr-2"></i>
            Business Projects
          </span>
        </router-link>

        <router-link
          v-if="
            !user.developer_account &&
              !user.faculty_account &&
              !user.business_account
          "
          to="/dashboard/skills"
          class="tw-py-2"
        >
          <span class="sidebar-text tw-text-2xl tw-py-3 tw-px-8">
            <i class="fas fa-brain tw-mr-2"></i>
            Skills
          </span>
        </router-link>

        <router-link
          v-if="
            !user.developer_account &&
              !user.faculty_account &&
              !user.business_account
          "
          to="/dashboard/invites"
          class="tw-py-2"
        >
          <span class="sidebar-text tw-text-2xl tw-py-3 tw-px-8">
            <i class="fas fa-university tw-mr-2"></i>
            Faculty
          </span>
        </router-link>

        <router-link
          v-if="
            !user.developer_account &&
              !user.faculty_account &&
              !user.business_account
          "
          to="/dashboard/category"
          class="tw-py-2"
        >
          <span class="sidebar-text tw-text-2xl tw-py-3 tw-px-8">
            <i class="fab fa-windows tw-mr-2"></i>
            Category
          </span>
        </router-link>

        <router-link
          v-if="
            !user.developer_account &&
              !user.faculty_account &&
              !user.business_account
          "
          to="/dashboard/services"
          class="tw-py-2"
        >
          <span class="sidebar-text tw-text-2xl tw-py-3 tw-px-8">
            <i class="fas fa-archive tw-mr-2"></i>
            Services
          </span>
        </router-link>

        <router-link
          v-if="
            !user.developer_account &&
              !user.faculty_account &&
              !user.business_account
          "
          to="/dashboard/sector"
          class="tw-py-2"
        >
          <span class="sidebar-text tw-text-2xl tw-py-3 tw-px-8">
            <i class="fas fa-chart-pie tw-mr-2"></i>
            Sectors
          </span>
        </router-link>

        <router-link
          v-if="user.business_account"
          to="/dashboard/business/consultation-requests"
          class="tw-py-2"
        >
          <span class="sidebar-text tw-text-2xl tw-py-3 tw-px-8">
            <i class="fas fa-people-carry tw-mr-2"></i>
            Consultations
          </span>
        </router-link>

        <!-- <router-link
          v-if="
            !user.developer_account &&
              !user.faculty_account &&
              !user.business_account
          "
          to="/dashboard/admin/consultation-requests"
          class="tw-py-2"
        >
          <span class="sidebar-text tw-text-2xl tw-py-3 tw-px-8">
            <i class="fas fa-briefcase tw-mr-2"></i>
            All Consultations
          </span>
        </router-link> -->

        <router-link
          v-if="
            !user.developer_account &&
              !user.business_account
          "
          to="/dashboard/admin/consultation-requests"
          class="tw-py-2"
        >
          <span class="sidebar-text tw-text-2xl tw-py-3 tw-px-8">
            <i class="fas fa-people-carry tw-mr-2"></i>
            Consultations
          </span>
        </router-link>

        <router-link
          v-if="
            !user.developer_account &&
              !user.faculty_account &&
              !user.business_account
          "
          to="/dashboard/allevents"
          class="tw-py-2"
        >
          <span class="sidebar-text tw-text-2xl tw-py-3 tw-px-8">
            <i class="fas fa-calendar-alt tw-mr-2"></i>
            Events
          </span>
        </router-link>

        <router-link
          v-if="
            !user.developer_account &&
              !user.faculty_account &&
              !user.business_account
          "
          to="/dashboard/event/create"
          class="tw-py-2"
        >
          <span class="sidebar-text tw-text-2xl tw-py-3 tw-px-8">
            <i class="fas fa-calendar-plus tw-mr-2"></i>
            Create Event
          </span>
        </router-link>

        <router-link
          v-if="!user.developer_account &&
              !user.faculty_account &&
              !user.business_account"
          to="/dashboard/requests"
          class="tw-py-2"
        >
          <span class="sidebar-text tw-text-2xl tw-py-3 tw-px-8">
            <i class="fas fa-concierge-bell tw-mr-2"></i>
            Requests
          </span>
        </router-link>

        <router-link
          v-if="user.faculty_account"
          to="/dashboard/talents"
          class="tw-py-2"
        >
          <span class="sidebar-text tw-text-2xl tw-py-3 tw-px-8">
            <i class="fas fa-user-tie tw-mr-2"></i>
            Talents
          </span>
        </router-link>

        <router-link
          v-if="user.faculty_account"
          to="/dashboard/events"
          class="tw-py-2"
        >
          <span class="sidebar-text tw-text-2xl tw-py-3 tw-px-8">
            <i class="fas fa-calendar-alt tw-mr-2"></i>
            Events
          </span>
        </router-link>

        <router-link
          v-if="
            !user.developer_account &&
              !user.faculty_account &&
              !user.business_account
          "
          to="/dashboard/roles"
          class="tw-py-2"
        >
          <span class="sidebar-text tw-text-2xl tw-py-3 tw-px-8">
            <i class="fas fa-user-tag tw-mr-2"></i>
            Roles
          </span>
        </router-link>

        <router-link to="/dashboard/profile" class="tw-py-2">
          <span class="sidebar-text tw-text-2xl tw-py-3 tw-px-8">
            <i class="fas fa-id-badge tw-mr-2"></i>
            Profile
          </span>
        </router-link>

        <router-link
          v-if="user.developer_account"
          to="/dashboard/verification"
          class="tw-py-2"
        >
          <span class="sidebar-text tw-text-2xl tw-py-3 tw-px-8">
            <i class="fas fa-user-check tw-mr-2"></i>
            Skills
          </span>
        </router-link>

        <p @click="logOut">
          <span
            class="sidebar-text tw-text-2xl tw-py-3 tw-px-8 tw-cursor-pointer"
          >
            <i class="fas fa-sign-out-alt tw-mr-2"></i>
            Log out
          </span>
        </p>
      </div>
    </v-navigation-drawer>
    <v-content class="tw-min-h-screen tw-bg-cerebro-grey">
      <div class="body">
        <template>
          <div>
            <v-app-bar class="elevation-0 button-shadow" color="white">
              <v-app-bar-nav-icon
                color="#2C316C"
                class="tw-block xl:tw-hidden"
                @click.stop="drawer = !drawer"
              ></v-app-bar-nav-icon>

              <v-toolbar-title v-if="user.developer_account"
                >Cerebro Talent Portal</v-toolbar-title
              >
              <v-toolbar-title v-if="user.faculty_account"
                >Cerebro Faculty Portal</v-toolbar-title
              >
              <v-toolbar-title v-if="user.business_account"
                >Cerebro Smart Working Portal</v-toolbar-title
              >

              <v-spacer></v-spacer>

              <i
                class="fas fa-user-circle tw-text-3xl tw-text-cerebro-purple"
              ></i>
              <span class="tw-mx-2 tw-text-cerebro-purple"
                >{{ user.firstname }} {{ user.lastname }}</span
              >

              <v-menu left bottom>
                <template v-slot:activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item>
                    <v-list-item-title class="tw-cursor-pointer" @click="logOut"
                      >Logout</v-list-item-title
                    >
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-app-bar>
          </div>
          <vue-element-loading
            v-if="loading"
            :active="loading"
            :is-full-screen="true"
          />
        </template>
        <div class="">
          <router-view></router-view>
        </div>
      </div>
    </v-content>

        <body class="has-drawer row flex justify-content-center pt-3"> <!-- add this class to your body for proper sizing -->
        <div class="col-2 bg-white pt-5 pb-5">
            <div class="pt-1 pb-2 px-3">
                <router-link to="/">
                <img
                src="https://res.cloudinary.com/griffintech/image/upload/v1609532960/edc-logo_kfuetw.png"
                alt="EDC Marketplace"
                width="65%"
                class="ml-auto"
                />
                </router-link>
            </div>
            <div id="drawerExample" class="drawer dw-xs-10 dw-sm-6 dw-md-4 fold" aria-labelledby="drawerExample">
                <div class="drawer-controls">
                    <a href="#drawerExample" data-toggle="drawer" aria-foldedopen="false" aria-controls="drawerExample" class="btn btn-primary btn-sm">Menu</a>
                </div>
                <div class="drawer-contents">
                    <div class="drawer-heading">
                        <h2 class="drawer-title">Menu</h2>
                    </div>
                    <div class="drawer-body">
                        <p>
                            This is a properly padded container for content in the
                            drawer that isn't a navigation.
                        </p>
                        <a href="#">A Regular Link</a>
                    </div>
                    <ul class="drawer-nav">
                        <li role="presentation" class="active"><a href="/dashboard">Home</a></li>
                        <li role="presentation"><a href="/dashboard">Profile</a></li>
                        <li role="presentation"><a href="/dashboard">Messages</a></li>
                    </ul>
                    <div class="drawer-footer">
                        <small>&copy; Caroline Amaba</small>
                    </div>
                </div>
            </div></div>
            <div class="col-10 bg-menu pt-3 ">
                <div class="container">
                    <!-- content as per usual -->
                    <router-view></router-view>
                </div>
            </div>
        </body>
  </v-app>
</template>

<script>
export default {
  components: {
    // Sidebar
  },
  data() {
    return {
      user: {},
      token: "",
      drawer: true,
      admin: null,
      loading: false,
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem("cerebro-user");
      localStorage.removeItem("cerebro-token");
      this.$router.push("/auth/login");
    },
  },
  mounted() {
    this.token = localStorage.getItem("cerebro-token");
    this.user = JSON.parse(localStorage.getItem("cerebro-user"));
    if (!this.user || !this.token) {
      this.$router.push("/auth/login");
    }
  },
};
</script>

<style lang="css" scoped>
.my-img {
  width: 100px;
}
.my-icon {
  height: 50%;
  width: auto !important;
}
.v-application p {
  margin-bottom: 0 !important;
}
.sidebar-text {
  font-weight: 550;
  font-size: 15px;
  line-height: 22px;
  display: block;
  /* letter-spacing: 0.025em; */
  /* identical to box height */
  color: #fff;
}
.button-shadow {
  box-shadow: 0px 5px 5px #dfe0e2 !important;
}
.nav-button {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #555555;
}
a.router-link-exact-active.router-link-active span {
  background: #5965db;
  border-radius: 5px;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height */
  color: #fff;
}
</style>