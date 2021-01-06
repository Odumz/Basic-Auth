<template>
  <main>
    <Header />
    <div class=" container-fluid bg-secondary">
      <div class="row flex justify-content-center pt-3">
        <div class="col-lg-2-5 col-md-3 col-sm-4 bg-white pt-5 pb-5">
          <div class="pt-1 pb-2 px-3">
            <router-link to="/dashboard">
              <img
                src="https://res.cloudinary.com/griffintech/image/upload/v1609532960/edc-logo_kfuetw.png"
                alt="EDC Marketplace"
                width="65%"
                class="mx-auto d-block"
              />
            </router-link>
          </div>
          <div
            class="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <router-link
              class="nav-link mt-3 mb-2"
              id="v-pills-home-tab"
              data-toggle="pill"
              to="/dashboard"
              role="tab"
              variant="primary"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              <b-icon icon="house-door-fill"></b-icon>
              <span class="px-1"> Home</span></router-link
            >
            <router-link
              v-if="user.type == 'admin'"
              class="nav-link mb-2"
              id="v-pills-home-tab"
              data-toggle="pill"
              to="/dashboard/users"
              role="tab"
              variant="primary"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              <b-icon icon="person-fill"></b-icon>
              <span class="px-1"> Users</span></router-link
            >
            <router-link
              v-if="user.type == 'admin'"
              class="nav-link mb-2"
              id="v-pills-home-tab"
              data-toggle="pill"
              to="/dashboard/sme"
              role="tab"
              variant="primary"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              <b-icon icon="people-fill"></b-icon>
              <span class="px-1"> SMEs</span></router-link
            >
            <router-link
              v-if="user.type == 'admin'"
              class="nav-link mb-2"
              id="v-pills-home-tab"
              data-toggle="pill"
              to="/dashboard/consultations"
              role="tab"
              variant="primary"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              <b-icon icon="laptop-fill"></b-icon>
              <span class="px-1"> Consultations</span></router-link
            >
            <router-link
              v-if="user.type == 'consultant'"
              class="nav-link mb-2"
              id="v-pills-home-tab"
              data-toggle="pill"
              to="/dashboard/my-consultations"
              role="tab"
              variant="primary"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              <b-icon icon="laptop-fill"></b-icon>
              <span class="px-1"> My Consultations</span></router-link
            >
            <router-link
              v-if="user.type == 'sme'"
              class="nav-link mb-2"
              id="v-pills-profile-tab"
              data-toggle="pill"
              to="/dashboard/advisory"
              role="tab"
              variant="primary"
              aria-controls="v-pills-profile"
              aria-selected="false"
              ><b-icon icon="display-fill"></b-icon>
              <span class="px-1">Advisory</span></router-link
            >
            <router-link
              v-if="user.type == 'sme'"
              class="nav-link mb-2"
              id="v-pills-messages-tab"
              data-toggle="pill"
              to="/dashboard/marketplace"
              role="tab"
              variant="primary"
              aria-controls="v-pills-messages"
              aria-selected="false"
              ><b-icon icon="basket-fill"></b-icon>
              <span class="px-1">Marketplace</span></router-link
            >
            <router-link
              v-if="user.type == 'sme'"
              class="nav-link mb-2"
              id="v-pills-settings-tab"
              data-toggle="pill"
              to="/dashboard/subscription"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
              variant="primary"
              ><b-icon icon="upc-scan"></b-icon>
              <span class="px-1">Subscription</span></router-link
            >
            <router-link
              class="nav-link mb-2"
              id="v-pills-settings-tab"
              data-toggle="pill"
              to="/dashboard/inbox"
              role="tab"
              variant="primary"
              aria-controls="v-pills-settings"
              aria-selected="false"
              ><b-icon icon="chat-left-dots-fill"></b-icon>
              <span class="px-1">Inbox</span></router-link
            >
            <router-link
              class="nav-link mb-2"
              id="v-pills-settings-tab"
              data-toggle="pill"
              to="/dashboard/settings"
              role="tab"
              variant="primary"
              aria-controls="v-pills-settings"
              aria-selected="false"
              ><b-icon icon="gear-fill"></b-icon>
              <span class="px-1">Settings</span></router-link
            >
          </div>
        </div>
        <div class="col-lg-9-5 col-md-9 bg-menu pt-3 ">
          <div
            class="tab-content mt-5 ml-3 px-5 bg-white"
            id="v-pills-tabContent"
          >
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from '../../../components/Shared/Header';
export default {
  components: {
    Header,
  },
  data() {
    return {
      user: {},
    };
  },
  async mounted() {
    await this.getUser();
  },
  methods: {
    getUser() {
      this.user = {
        type: 'sme',
      };
      return this.user;
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-height: 750px) {
  .main-body {
    min-height: calc(100vh - 5px) !important;
    overflow-x: hidden;
  }
}

main {
  max-width: 100vw !important;
  overflow-x: hidden;
}

.col-lg-2-5,
.col-lg-9-5 {
  -ms-flex: 0 0 20.666667%;
  flex: 0 0 20.666667%;
  max-width: 20.666667%;
  position: relative;
}

.col-lg-2-5 {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.col-lg-9-5 {
  -ms-flex: 0 0 79.333333%;
  flex: 0 0 79.333333%;
  max-width: 79.333333%;
}

.bg-menu {
  background-color: #e7f4fe;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.text-sm {
  font-size: 0.8rem;
}

.display-5 {
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.img-gradient {
  background-image: linear-gradient(
      84.81deg,
      #111111 0.05%,
      rgba(17, 17, 17, 0.55) 41.25%
    ),
    url('https://res.cloudinary.com/griffintech/image/upload/v1608201552/samples/pexels-jopwell-2422280_sze4ek.jpg');
  height: 100vh;
  background-size: cover;
}

.router-link-exact-active,
.router-link-active span {
  background: #043f6c !important;
  border-radius: 5px;
  font-weight: 500;
  /* identical to box height */
  color: #fff;
}
</style>
