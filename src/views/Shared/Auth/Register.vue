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
            <div v-if="step == 1">
              <p class="col-9 text-break h2 font-weight-bold pb-2">
                Register
              </p>
              <b-form-group
                id="input_business_name"
                label-for="business_name"
                :valid-feedback="validFeedback.business_name"
                :invalid-feedback="invalidFeedback.business_name"
                class="my-4"
              >
                <b-form-input
                  id="business_name"
                  v-model="data.business_name"
                  placeholder="Enter Business name"
                  class="bg-input"
                  type="text"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input_email"
                label-for="email"
                :valid-feedback="validFeedback.email"
                :invalid-feedback="invalidFeedback.email"
                class="my-4"
              >
                <b-form-input
                  id="email"
                  v-model="data.email"
                  type="email"
                  placeholder="E-mail"
                  class="bg-input"
                  required
                ></b-form-input>
              </b-form-group>

              <b-button
                class="bg-primary mt-4 font-weight-bold"
                size="lg"
                type="submit"
                @click.prevent="navigate('email')"
                block
                >Continue</b-button
              >
            </div>

            <div v-if="step == 2">
              <p class="lead font-weight-bold pb-2">
                Welcome<span class="font-bold"> {{ data.business_name }}</span
                >! 😃
                <br />
                <span class="h6">
                  We’ll need some information to setup your account.
                </span>
              </p>
              <b-form-group
                id="input_first_name"
                label-for="first_name"
                :valid-feedback="validFeedback.first_name"
                :invalid-feedback="invalidFeedback.first_name"
                class="my-4"
              >
                <b-form-input
                  id="first_name"
                  v-model="data.first_name"
                  placeholder="Enter first name"
                  class="bg-input"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input_last_name"
                label-for="last_name"
                :valid-feedback="validFeedback.last_name"
                :invalid-feedback="invalidFeedback.last_name"
                class="my-4"
              >
                <b-form-input
                  id="last_name"
                  v-model="data.last_name"
                  type="last_name"
                  placeholder="Enter last name"
                  class="bg-input"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input_phone"
                label-for="phone"
                :valid-feedback="validFeedback.phone"
                :invalid-feedback="invalidFeedback.phone"
                class="my-4"
              >
                <b-form-input
                  id="phone"
                  v-model="data.phone"
                  type="phone"
                  placeholder="Enter phone"
                  class="bg-input"
                  required
                ></b-form-input>
              </b-form-group>

              <main class="flex d-flex justify-content-between my-2">
                <b-button
                  class="bg-white mt-4 text-primary font-weight-bold ml-2"
                  size="md"
                  @click.prevent="step = step - 1"
                  >Previous</b-button
                >
                <b-button
                  class="bg-primary mt-4 font-weight-bold mr-2"
                  size="md"
                  @click.prevent="navigate('email')"
                  >Next</b-button
                >
              </main>
            </div>

            <div v-if="step == 3">
              <p class="lead font-weight-bold pb-2">
                Thanks<span class="font-bold">
                  {{ data.first_name }} {{ data.last_name }}</span
                >! 😃
                <br />
                <span class="h6">
                  Now let's secure your account.
                </span>
              </p>
              <b-form-group
                id="input_password"
                label-for="password"
                :valid-feedback="validFeedback.password"
                :invalid-feedback="invalidFeedback.password"
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
              </b-form-group>

              <b-form-group
                id="input_confirm_password"
                label-for="confirm_password"
                :valid-feedback="validFeedback.confirm_password"
                :invalid-feedback="invalidFeedback.confirm_password"
                class="my-4"
              >
                <b-form-input
                  id="confirm_password"
                  v-model="data.confirm_password"
                  type="password"
                  placeholder="Confirm password"
                  class="bg-input"
                  required
                ></b-form-input>
              </b-form-group>

              <main class="flex d-flex justify-content-between my-2">
                <b-button
                  class="bg-white mt-4 text-primary font-weight-bold ml-2"
                  size="md"
                  @click.prevent="step = step - 1"
                  >Previous</b-button
                >
                <!-- <b-button
                  v-if="click == 0"
                  class="bg-primary mt-4 font-weight-bold mr-2"
                  size="md"
                  @click.prevent="submit"
                  >{{ button_text }}</b-button
                > -->
                <b-button
                  class="bg-primary mt-4 font-weight-bold mr-2"
                  size="md"
                  @click.prevent="submit"
                  :disabled="clicked"
                  ><span
                    v-if="clicked"
                    class="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  {{ button_text }}</b-button
                >
              </main>
            </div>
          </b-form>
        </b-col>
      </b-row>
    </b-container-fluid>
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
      step: 1,
      clicked: false,
      key: '',
      user: {},
      data: {},
      errors: {},
      button_text: 'Submit',
      validFeedback: {
        business_name: `Thanks`,
        first_name: `Thanks`,
        last_name: `Thanks`,
        email: `Thank you`,
        phone: `Thanks`,
      },
      invalidFeedback: {
        business_name: `Thanks`,
        first_name: `Thanks`,
        last_name: `Thanks`,
        email: `Thank you`,
        phone: `Thanks`,
        password: `Minimum of 8 characters (at least one lowercase, uppercase, number and symbol)`,
        confirm_password: `Passwords don't match`,
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
    navigate(key) {
      this.errors = {};
      if (!this.data[key]) {
        this.errors[key] = true;
        return;
      }
      this.step = ++this.step;
    },
    submit() {
      this.clicked = true;
      this.button_text = 'Processing...';
      const self = this;
      this.errors = false;

      if (this.errors) {
        self.button_text = 'Submit';
        setTimeout(function() {
          self.$toasted
            .error('Account with email exists', {
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
            .success('Account successfully created', {
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
