<template>
  <main>
    <Header />
    <b-container-fluid class="main-body">
      <b-row align-v="center" class="flex mt-10 justify-content-center">
        <b-col cols="12" lg="6" class="new-height">
          <b-card
            overlay
            img-alt="Card image"
            img-fluid-grow
            text-variant="white"
            class="mt-3 img-gradient"
          >
          </b-card>
        </b-col>
        <b-col cols="12" lg="6" class="p-3 text-primary">
          <div class="">
            <b-col class="mt-10 mt-md-5 mt-lg-1">
              <b-card-title
                class="px-lg-5 px-3 mt-2 pb-3 text-center text-lg-left font-weight-bold text-break display-lg-1 display-4"
              >
                We build digital experiences
              </b-card-title>
              <b-card-text
                class="col-lg-9 text-break py-1 text-center text-lg-left px-lg-5 px-3"
                style="font-size: 1.1em;"
              >
                Having a well-planned, well-executed online strategy is the key
                to online success.
              </b-card-text>
              <b-button
                variant="primary"
                class="bg-primary d-flex justify-content-center border border-primary mx-5 mt-4 font-weight-bold"
                size="lg"
                href="/auth/register"
                >{{ button_text }}</b-button
              >
            </b-col>
          </div>
        </b-col>
      </b-row>
    </b-container-fluid>
  </main>
</template>

<script>
import Header from '../../components/Shared/Header.vue';
export default {
  name: 'Landing',
  components: {
    Header,
  },
  data() {
    return {
      button_text: 'Discover',
    };
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

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.img-gradient {
  background-image: url('../../assets/landing.png');
  height: 100vh;
  background-size: cover;
}

.mt-10 {
  margin-top: 6rem;
}

.card {
  background-color: transparent;
  border: none;
}

input::placeholder {
  color: #043f6c !important;
}
</style>
