<template>
  <main>
    <Header />
    <b-container-fluid class="main-body">
      <b-row align-v="center" class="flex justify-content-center">
        <b-col cols="12" lg="7">
          <b-card
            overlay
            img-alt="Card image"
            img-fluid-grow
            text-variant="white"
            class="mt-3 img-gradient"
          >
            <b-col class="centered mt-10 mt-md-5 mt-lg-1">
              <b-card-title
                class="px-lg-5 px-3 mt-2 pb-3 font-weight-bold text-break display-lg-1 display-4"
              >
                We build digital experiences
              </b-card-title>
              <b-card-text
                class="col-lg-9 text-break py-1 px-lg-5 px-3"
                style="font-size: 1.1em;"
              >
                Having a well-planned, well-executed online strategy is the key
                to online success.
              </b-card-text>
            </b-col>
          </b-card>
        </b-col>
        <b-col cols="12" lg="5" class="p-5 text-primary">
          <b-form class="pr-4">
            <div>
              <p
                class="col-lg-9 text-break lead font-weight-bold pb-3"
                style="font-size: 2rem"
              >
                Login to proceed!
              </p>

              <b-form-group id="input_email" label-for="email" class="my-4">
                <b-form-input
                  id="email"
                  v-model="data.email"
                  type="email"
                  placeholder="E-mail"
                  class="bg-input"
                  required
                ></b-form-input>
                <p v-if="errors.email" class="text-secondary small">
                  {{ error_msg.email }}
                </p>
              </b-form-group>

              <b-form-group
                id="input_password"
                label-for="password"
                class="my-4"
              >
                <b-form-input
                  id="password"
                  v-model="data.password"
                  type="password"
                  placeholder="Enter password"
                  class="bg-input"
                  required
                ></b-form-input>
                <p v-if="errors.password" class="text-secondary small">
                  {{ error_msg.password }}
                </p>
              </b-form-group>

              <b-button
                class="bg-primary mt-4 font-weight-bold mr-2"
                size="lg"
                block
                @click.prevent="navigate('email')"
                :disabled="clicked"
                ><span
                  v-if="clicked"
                  class="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                {{ button_text }}</b-button
              >
            </div>
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
import Header from '../../../components/Shared/Header.vue';
export default {
  name: 'Login',
  components: {
    Header,
  },
  data() {
    return {
      clicked: false,
      key: '',
      error_msg: {},
      data: {},
      errors: {},
      button_text: 'Log In',
    };
  },
  methods: {
    navigate(key) {
      // console.log(key);
      this.errors = {};
      if (key === 'email') {
        const email_pattern =
          '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
        const password_pattern =
          '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$';
        if (
          !this.data[key] ||
          !this.data.password ||
          !this.data.password.match(password_pattern) ||
          !this.data.email.match(email_pattern)
        ) {
          if (!this.data[key]) {
            this.errors[key] = true;
            this.error_msg[key] = 'Please enter your email';
          } else {
            this.error_msg[key] = '';
          }
          if (!this.data.password) {
            this.errors[key] = true;
            this.errors.password = true;
            this.error_msg.password = `Password is required`;
          }
          if (!this.data.password.match(password_pattern)) {
            this.errors[key] = true;
            this.errors.password = true;
            this.error_msg.password = `Password must be at least 8 characters, contain at least one number, one symbol, one uppercase and one lowercase letter`;
          }
          if (!this.data.email.match(email_pattern)) {
            this.errors[key] = true;
            this.error_msg[
              key
            ] = `Email must match pattern 'brainadams@gmail.com'`;
          }

          this.$toasted
            .error('Please fill in all fields with valid input', {
              theme: 'bubble',
              position: 'top-center',
              duration: 5000,
            })
            .goAway(3200);
        } else {
          this.errors = {};
        }

        if (
          !this.errors.email &&
          !this.errors.category &&
          !this.errors.password
        ) {
          this.submit();
        }
      }
    },
    submit() {
      this.clicked = true;
      this.button_text = 'Processing...';
      const self = this;
      // this.errors = false;

      // if (this.errors[key]) {
      //   self.button_text = 'Submit';
      //   setTimeout(function() {
      //     self.$toasted
      //       .error('Account with email exists', {
      //         theme: 'bubble',
      //         position: 'top-center',
      //         duration: 5000,
      //       })
      //       .goAway(2500);
      //   }, 2500);
      //   setTimeout(function() {
      //     self.clicked = false;
      //   }, 3500);
      // } else {
      setTimeout(function() {
        self.$toasted
          .success('Account successfully created', {
            theme: 'bubble',
            position: 'top-center',
            duration: 5000,
          })
          .goAway(1200);
      }, 1300);
      setTimeout(function() {
        self.clicked = false;
        self.$router.push('/dashboard');
      }, 1500);
      // }
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

.img-gradient {
  background-image: linear-gradient(
      84.81deg,
      #111111 0.05%,
      rgba(17, 17, 17, 0.55) 41.25%
    ),
    url('../../../assets/landing-hero.jpg');
  height: 100vh;
  background-size: cover;
}

.mt-10 {
  margin-top: 6rem;
}

input::placeholder {
  color: #043f6c !important;
}
</style>
