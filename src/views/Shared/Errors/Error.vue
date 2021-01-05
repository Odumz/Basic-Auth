<template>
  <main class="main">
    <b-container-fluid class="main-body">
      <b-row align-v="center" class="flex justify-content-center mt-n3">
        <b-col>
          <b-card
            overlay
            img-alt="Card image"
            img-fluid-grow
            text-variant="white"
            class="mt-3 img-gradient"
          >
          </b-card>
          <b-col class="centered col-8">
            <b-card
              v-if="error == 404"
              overlay
              img-alt="Card image"
              img-fluid-grow
              text-variant="white"
              class="mt-3 img-404 text-center"
            >
              <b-col class="centered">
                <b-card-title
                  class="px-4 mt-2 font-weight-bold display-2 text-break"
                >
                  {{ error_text.not_found }}
                </b-card-title>
                <b-card-text class="text-break py-1 px-4">
                  {{ error_subtext.not_found }}

                  <main class="flex d-flex justify-content-md-center my-2">
                    <b-button
                      class="bg-white mt-4 text-primary font-weight-bold mx-3"
                      size="md"
                      @click="homepage"
                      >Homepage</b-button
                    >
                    <b-button
                      class="bg-primary mt-4 font-weight-bold mx-3"
                      size="md"
                      @click="goBack"
                      >Go back</b-button
                    >
                  </main>
                </b-card-text>
              </b-col>
            </b-card>
            <!-- <b-card
              v-if="error == 401"
              overlay
              img-alt="Card imge"
              img-fluid-grow
              text-variant="white"
              class="mt-3 img-401 text-center"
            >
              <b-col class="centered">
                <b-card-title
                  class="px-4 mt-2 font-weight-bold display-2 text-break"
                >
                  {{ error_text.unauthorized }}
                </b-card-title>
                <b-card-text class="text-break py-1 px-4">
                  {{ error_subtext.unauthorized }}

                  <main class="flex d-flex justify-content-md-center my-2">
                    <b-button
                      class="bg-white mt-4 text-primary font-weight-bold mx-3"
                      size="md"
                      @click="homepage"
                      >Homepage</b-button
                    >
                    <b-button
                      class="bg-primary mt-4 font-weight-bold mx-3"
                      size="md"
                      @click="goBack"
                      >Go back</b-button
                    >
                  </main>
                </b-card-text>
              </b-col>
            </b-card>
            <b-card
              v-if="error == 403"
              overlay
              img-alt="Card image"
              img-fluid-grow
              text-variant="white"
              class="mt-3 img-403 text-center"
            >
              <b-col class="centered">
                <b-card-title
                  class="px-4 mt-2 font-weight-bold display-2 text-break"
                >
                  {{ error_text.forbidden }}
                </b-card-title>
                <b-card-text class="text-break py-1 px-4">
                  {{ error_subtext.forbidden }}

                  <main class="row flex d-flex justify-content-center my-2">
                    <b-button
                      class="bg-white mt-4 text-primary font-weight-bold mx-3"
                      size="md"
                      @click="homepage"
                      >Homepage</b-button
                    >
                    <b-button
                      class="bg-primary mt-4 font-weight-bold mx-3"
                      size="md"
                      @click="goBack"
                      >Go back</b-button
                    >
                  </main>
                </b-card-text>
              </b-col>
            </b-card> -->
          </b-col>
        </b-col>
      </b-row>
    </b-container-fluid>
  </main>
</template>

<script>
export default {
  data() {
    return {
      prevRoute: null,
      error: '404',
      error_text: {
        not_found: 'Error 404',
        forbidden: 'Error 403',
        unauthorized: 'Error 401',
      },
      error_subtext: {
        not_found: "We couldn't find what you were looking for",
        forbidden: 'You are not allowed to do that!',
        unauthorized: 'You are not properly authenticated to take that action',
      },
      button_text: 'Log In',
      fullpath: '',
    };
  },
  async mounted() {
    await this.getFullpath();
  },
  methods: {
    getFullpath() {
      // console.log('fdom');
      this.fullpath = this.$route.fullPath;
      // console.log(this.fullpath);
      return this.fullpath;
    },
    goBack() {
      this.$router.go(-1);
    },
    homepage() {
      const path = JSON.stringify(this.fullpath);
      const includes = path.includes('/dashboard');
      if (includes) {
        this.$router.push('/dashboard');
      } else {
        this.$router.push('/');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-height: 750px) {
  .main {
    min-height: calc(100vh - 5px) !important;
    overflow-x: hidden;
  }
}

.main {
  max-width: 100vw !important;
  overflow-x: hidden;
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
  filter: blur(5px);
}

.img-404 {
  background-image: linear-gradient(
      84.81deg,
      #111111 0.05%,
      rgba(17, 17, 17, 0.55) 41.25%
    ),
    url('https://res.cloudinary.com/griffintech/image/upload/v1608201552/samples/pexels-jopwell-2422280_sze4ek.jpg');
  height: 75vh;
  background-size: cover;
}

.img-401 {
  background-image: linear-gradient(
      84.81deg,
      #111111 0.05%,
      rgba(17, 17, 17, 0.55) 41.25%
    ),
    url('https://res.cloudinary.com/griffintech/image/upload/v1608201552/samples/pexels-jopwell-2422280_sze4ek.jpg');
  height: 75vh;
  background-size: cover;
}

.img-403 {
  background-image: linear-gradient(
      84.81deg,
      #111111 0.05%,
      rgba(17, 17, 17, 0.55) 41.25%
    ),
    url('https://res.cloudinary.com/griffintech/image/upload/v1608201552/samples/pexels-jopwell-2422280_sze4ek.jpg');
  height: 75vh;
  background-size: cover;
}

button {
  max-width: 170px;
  min-width: 170px;
}
</style>
