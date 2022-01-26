<template>
  <main>
    <Header />
    <div class="container-fluid">
      <div class="row flex justify-content-center pt-3">
        <div
          class="custom-nav col-lg-2-5 col-md-3 col-sm-4 bg-white pt-5 pb-5"
          ref="nav"
        >
          <div class="pt-1 pb-2 px-3">
            <figure @click="toggleNav()">
              <img
                src="https://res.cloudinary.com/griffintech/image/upload/v1613159634/logo_v11goz.png"
                alt="Some finance"
                width="45%"
                class="mx-auto d-block"
              />
            </figure>
          </div>
          <div
            v-for="(route, index) in routes"
            :key="index"
            class="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <router-link
              v-if="user.type == route.type"
              class="nav-link mb-2"
              id="v-pills-home-tab"
              data-toggle="pill"
              :to="route.path"
              role="tab"
              variant="primary"
              aria-controls="v-pills-home"
              aria-selected="true"
              exact
            >
              <b-icon :icon="route.icon"></b-icon>
              <span class="px-1"> {{ route.name }} </span></router-link
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
      routes: [
        {
          name: 'Home',
          path: '/dashboard',
          icon: 'house-door-fill',
          type: 'sme',
        },
        {
          name: 'Home',
          path: '/dashboard',
          icon: 'house-door-fill',
          type: 'admin',
        },
        {
          name: 'Home',
          path: '/dashboard',
          icon: 'house-door-fill',
          type: 'consultant',
        },
        {
          name: 'Users',
          path: '/dashboard/users',
          icon: 'person-fill',
          type: 'admin',
        },
        {
          name: 'SMEs',
          path: '/dashboard/sme',
          icon: 'person-fill',
          type: 'sme',
        },
        {
          name: 'Consultations',
          path: '/dashboard/consultations',
          icon: 'laptop-fill',
          type: 'admin',
        },
        {
          name: 'My Consultations',
          path: '/dashboard/my-consultations',
          icon: 'laptop-fill',
          type: 'consultant',
        },
        {
          name: 'Advisory',
          path: '/dashboard/advisory',
          icon: 'display-fill',
          type: 'sme',
        },
        {
          name: 'Marketplace',
          path: '/dashboard/marketplace',
          icon: 'basket-fill',
          type: 'sme',
        },
        {
          name: 'Subscription',
          path: '/dashboard/subscription',
          icon: 'upc-scan',
          type: 'sme',
        },
        {
          name: 'Inbox',
          path: '/dashboard/inbox',
          icon: 'chat-left-dots-fill',
          type: 'admin',
        },
        {
          name: 'Inbox',
          path: '/dashboard/inbox',
          icon: 'chat-left-dots-fill',
          type: 'sme',
        },
        {
          name: 'Inbox',
          path: '/dashboard/inbox',
          icon: 'chat-left-dots-fill',
          type: 'consultant',
        },
        {
          name: 'Settings',
          path: '/dashboard/settings',
          icon: 'gear-fill',
          type: 'admin',
        },
        {
          name: 'Settings',
          path: '/dashboard/settings',
          icon: 'gear-fill',
          type: 'sme',
        },
        {
          name: 'Settings',
          path: '/dashboard/settings',
          icon: 'gear-fill',
          type: 'consultant',
        },
      ],
    };
  },
  async mounted() {
    await this.getUser();
  },
  methods: {
    getUser() {
      this.user = {
        type: 'consultant',
      };
      return this.user;
    },
    toggleNav() {
      const nav = this.$refs.nav.classList;
      nav.contains('active') ? nav.remove('active') : nav.add('active');
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1053px) {
  .custom-nav {
    position: absolute;
    left: -50px;
    transition: 300ms ease all;
  }

  figure {
    width: 170% !important;
  }
}
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
  background: #6398da !important;
  border-radius: 10px;
  font-weight: 500;
  /* identical to box height */
  color: #fff;
}
</style>
