<template>
  <main>
    <Header />
    <div class=" container-fluid bg-secondary">
      <div class="row flex justify-content-center pt-3">
        <div class="col-lg-2-5 col-md-3 col-sm-4 bg-white pt-5 pb-5">
          <div class="pt-1 pb-2 px-3">
            <router-link to="/">
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
            <a
              class="nav-link active mt-3 mb-2"
              id="v-pills-home-tab"
              data-toggle="pill"
              href="/dashboard"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              <b-icon icon="house-door-fill"></b-icon>
              <span class="px-1"> Home</span></a
            >
            <a
              class="nav-link mb-2"
              id="v-pills-profile-tab"
              data-toggle="pill"
              href="/dashboard/settings"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
              ><b-icon icon="display-fill" variant="primary"></b-icon>
              <span class="px-1">Advisory</span></a
            >
            <a
              class="nav-link mb-2"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="/dashboard/profile"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
              ><b-icon icon="basket-fill" variant="primary"></b-icon>
              <span class="px-1">Marketplace</span></a
            >
            <a
              class="nav-link mb-2"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="/dashboard/settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
              ><b-icon icon="basket-fill" variant="primary"></b-icon>
              <span class="px-1">Subscription</span></a
            >
            <a
              class="nav-link mb-2"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="/dashboard/profile"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
              ><b-icon icon="chat-left-dots-fill" variant="primary"></b-icon>
              <span class="px-1">Inbox</span></a
            >
            <a
              class="nav-link mb-2"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="/dashboard/settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
              ><b-icon icon="gear-fill" variant="primary"></b-icon>
              <span class="px-1">Settings</span></a
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
      button_text: 'Log In',
      form: {
        email: '',
        name: '',
        food: null,
        checked: [],
      },
      validFeedback: {
        name: `Thanks`,
        email: `Thank you`,
      },
      invalidFeedback: {
        name: '',
        email: '',
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots',
        'Beans',
        'Tomatoes',
        'Corn',
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
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
</style>
