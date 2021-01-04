<template>
  <main>
    <Header />
    <b-container-fluid class="main-body">
      <b-row align-v="center" class="flex justify-content-center pt-5">
        <b-col cols="12" md="7">
          <b-card
            overlay
            img-alt="Card image"
            img-fluid-grow
            text-variant="white"
            class="mt-3 img-gradient"
          >
            <b-col class="centered">
              <b-card-title
                class="px-4 mt-2 font-weight-bold col-8 h2 text-break"
              >
                EDC Smarter Business Program
              </b-card-title>
              <b-card-text class="col-10 text-break py-1 px-4">
                Premium SME Support featuring remotely-delivered
                business/funding advisory, learning & technology support.
              </b-card-text>
            </b-col>
          </b-card>
        </b-col>
        <b-col cols="12" md="5" class="p-5 text-primary">
          <b-form class="mr-4">
            <p class="lead display-5 font-weight-bold pb-2">
              Log In
            </p>
            <b-form-group
              id="input-group-name"
              label-for="name"
              :valid-feedback="validFeedback.name"
              :invalid-feedback="invalidFeedback.name"
              class="my-4"
            >
              <b-form-input
                id="name"
                v-model="form.name"
                placeholder="Enter name"
                class="bg-input"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-email"
              label-for="email"
              :valid-feedback="validFeedback.email"
              :invalid-feedback="invalidFeedback.email"
              class="my-4"
            >
              <b-form-input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="E-mail"
                class="bg-input"
                required
              ></b-form-input>
            </b-form-group>

            <b-button
              class="bg-primary mt-4 font-weight-bold"
              size="lg"
              @click.prevent="submit"
              :disabled="clicked"
              block
              ><span
                v-if="clicked"
                class="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>
              {{ button_text }}</b-button
            >
            <router-link style="text-decoration: none;" to="/forgot-password">
              <p class="p-2 d-flex flex-row-reverse text-sm">
                Forgot Password?
              </p></router-link
            >
          </b-form>
        </b-col>
      </b-row>
    </b-container-fluid>
  </main>
</template>

<script>
import Header from '../../../components/Shared/Header';
export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      clicked: false,
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
    submit() {
      this.clicked = true;
      this.button_text = 'Processing...';
      const self = this;
      this.errors = false;

      if (this.errors) {
        self.button_text = 'Submit';
        setTimeout(function() {
          self.$toasted
            .error('Incorrect email or password!', {
              theme: 'bubble',
              position: 'top-center',
              duration: 5000,
            })
            .goAway(2500);
        }, 2500);
        setTimeout(function() {
          self.clicked = false;
        }, 3500);
      } else {
        setTimeout(function() {
          self.$toasted
            .success('Login successful', {
              theme: 'bubble',
              position: 'top-center',
              duration: 5000,
            })
            .goAway(2500);
        }, 3200);
        setTimeout(function() {
          self.clicked = false;
          self.$router.push('/dashboard');
        }, 4000);
      }
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

input::placeholder {
  color: #043f6c !important;
}
</style>
