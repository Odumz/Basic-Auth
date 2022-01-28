<template>
  <b-container-fluid class="main-body">
    <b-row align-v="center" class="flex justify-content-center">
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
              class="px-lg-5 px-3 mt-2 pb-3 font-weight-bold text-break display-lg-1 display-4"
            >
              We build digital experiences.
            </b-card-title>
            <b-card-text
              class="col-lg-9 text-break py-1 px-lg-5 px-3"
              style="font-size: 1.1em;"
            >
              Having a well-planned, well-executed online strategy is the key to
              online success.
            </b-card-text>
          </b-col>
        </b-card>
      </b-col>
      <b-col cols="12" md="5" class="p-5 text-primary">
        <b-form class="pr-4">
          <div v-if="step == 1">
            <p class="col-lg-9 text-break lead font-weight-bold pb-3">
              Enter your name and email to get started
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
              class="bg-primary border border-primary mt-4 font-weight-bold"
              size="lg"
              type="submit"
              @click.prevent="navigate('email')"
              block
              >{{ button_text }}</b-button
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
            <div class="row my-2">
              <b-form-group
                id="input_first_name"
                label-for="first_name"
                :valid-feedback="validFeedback.first_name"
                :invalid-feedback="invalidFeedback.first_name"
                class="col-6"
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
                class="col-6"
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
            </div>

            <b-form-group
              id="input_phone"
              label-for="phone"
              :valid-feedback="validFeedback.phone"
              :invalid-feedback="invalidFeedback.phone"
              class="my-2"
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

            <b-form-group
              id="input_category"
              label-for="category"
              :valid-feedback="validFeedback.category"
              :invalid-feedback="invalidFeedback.category"
              class=""
            >
              <b-form-select
                v-model="data.category"
                class="bg-input my-3"
                id="category"
                :options="options"
              ></b-form-select>
            </b-form-group>

            <main class="flex d-flex justify-content-between my-2">
              <b-button
                class="bg-white mt-4 text-primary font-weight-bold ml-2"
                size="md"
                @click.prevent="step = step - 1"
                >Previous</b-button
              >
              <b-button
                class="bg-primary mt-4 px-4 font-weight-bold mr-2"
                size="md"
                @click.prevent="navigate('category')"
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
</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {
      step: 1,
      clicked: false,
      key: '',
      user: {},
      data: {
        category: null,
      },
      options: [
        { value: null, text: 'Please select a category' },
        { value: 'agriculture', text: 'Agriculture' },
        { value: 'creatives', text: 'Creatives' },
      ],
      errors: {},
      button_text: 'Discover',
      validFeedback: {
        name: `Thanks`,
        email: `Thank you`,
      },
      invalidFeedback: {
        name: '',
        email: '',
      },
    };
  },
  methods: {
    navigate(key) {
      // console.log(key);
      this.errors = {};
      if (!this.data[key]) {
        // console.log('error key', this.errors[key]);
        this.errors[key] = true;
        return;
      }
      this.checkError(key);
      // console.log('data key', this.data[key]);
      // console.log('in error', this.errors);
      if (!this.errors[key]) {
        this.step = ++this.step;
        if (this.step === 3) {
          this.button_text = 'Submit';
        }
      }
      // console.log(this.data);
      // console.log(this.errors);
    },
    submit(key) {
      this.checkError(key);

      console.log('erroror', this.errors[key]);

      if (!this.errors[key]) {
        // this.clicked = true;
        // this.button_text = 'Submitting...';
        // this.register();
      }

      this.clicked = true;
      this.button_text = 'Processing...';
      this.button_text = 'Submitting...';
      this.button_text = 'Submitted';
      // const self = this;
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
      //   setTimeout(function() {
      //     self.$toasted
      //       .success('Account successfully created', {
      //         theme: 'bubble',
      //         position: 'top-center',
      //         duration: 5000,
      //       })
      //       .goAway(2500);
      //   }, 3200);
      //   setTimeout(function() {
      //     self.clicked = false;
      //     self.$router.push('/dashboard');
      //   }, 4000);
      // }
    },
    checkError(key) {
      const email_pattern = '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
      const password_pattern =
        '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$';

      // console.log('email', this.data.email);
      // console.log('business_name', this.data.business_name);

      if (key === 'email') {
        if (!this.data.email.match(email_pattern) || !this.data.email) {
          this.errors[key] = true;
          // console.log('error', this.errors);
          return;
        }
        if (this.data.business_name.length < 3 || !this.data.business_name) {
          this.errors[key] = true;
          // console.log('error', this.errors);
          return;
        }
      }

      if (key === 'category') {
        console.log(!isNaN(parseInt(this.data.phone)));
        if (this.data.first_name.length < 3 || !this.data.first_name) {
          this.errors[key] = true;
          console.log('error', this.errors);
          return;
        }
        if (this.data.last_name.length < 3 || !this.data.last_name) {
          this.errors[key] = true;
          console.log('error', this.errors);
          return;
        }
        if (
          isNaN(parseInt(this.data.phone)) ||
          this.data.phone.toString().length <= 10 ||
          !this.data.phone
        ) {
          console.log('type of', typeof this.data.phone);
          this.errors[key] = true;
          console.log('error', this.errors);
          return;
        }
      }

      if (key === 'password') {
        if (
          !this.data.password.match(password_pattern) ||
          !this.data.password
        ) {
          this.errors[key] = true;
          // console.log('error', this.errors);
          return;
        }
        if (
          !this.data.password !== this.data.confirm_password ||
          !this.data.confirm_password
        ) {
          this.errors[key] = true;
          // console.log('error', this.errors);
          return;
        }
      }
      // if (this.data.password !== this.data.confirm_password) {
      //   this.errors = true;
      //   return;
      // }

      // if (this.data.password.length < 6) {
      //   this.errors = true;
      //   return;
      // }

      // if (this.data.email) {
      //   if (!this.data.email.match(email_pattern)) {
      //     this.errors = true;
      //     return;
      //   }
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

.main-body {
  max-width: 100vw !important;
  overflow-x: hidden;
}

.centered {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media screen and (min-width: 640px) {
  .centered {
    top: 50%;
  }
}

.img-gradient {
  background-image: linear-gradient(
      84.81deg,
      #111111 0.05%,
      rgba(17, 17, 17, 0.55) 41.25%
    ),
    url('../../assets/landing-hero.jpg');
  height: 100vh;
  background-size: cover;
}

.letter-space {
  letter-spacing: 2px;
}

input::placeholder {
  color: #6398da !important;
}
</style>
