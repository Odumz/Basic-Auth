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
              <p v-if="errors.business_name" class="text-secondary small">
                {{ error_msg.business_name }}
              </p>
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
              <p v-if="errors.email" class="text-secondary small">
                {{ error_msg.email }}
              </p>
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
                <p v-if="errors.first_name" class="text-secondary small">
                  {{ error_msg.first_name }}
                </p>
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
                <p v-if="errors.last_name" class="text-secondary small">
                  {{ error_msg.last_name }}
                </p>
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
              <p v-if="errors.phone" class="text-secondary small">
                {{ error_msg.phone }}
              </p>
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
              <p v-if="errors.category" class="text-secondary small">
                {{ error_msg.category }}
              </p>
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
              <p v-if="errors.password" class="text-secondary small">
                {{ error_msg.password }}
              </p>
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
              <p v-if="errors.confirm_password" class="text-secondary small">
                {{ error_msg.confirm_password }}
              </p>
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
                @click.prevent="navigate('password')"
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

          <div v-if="step == 4">
            <p class="lead font-weight-bold pb-2">
              Welcome,<span class="font-bold">
                {{ data.first_name }} {{ data.last_name }}</span
              >! 😃
              <br />
              <span class="h6">
                Let's head over to your dashboard.
              </span>
            </p>
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
      error_msg: {},
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
      console.log(key);
      this.errors = {};
      if (key === 'email') {
        const email_pattern =
          '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
        if (
          !this.data[key] ||
          !this.data.business_name ||
          this.data.business_name.length <= 3 ||
          !this.data.email.match(email_pattern)
        ) {
          this.$toasted
            .error('Please fill in all fields with valid input', {
              theme: 'bubble',
              position: 'top-center',
              duration: 5000,
            })
            .goAway(3200);

          if (!this.data[key]) {
            this.errors[key] = true;
            this.error_msg[key] = 'Please enter your email';
          } else {
            this.error_msg[key] = '';
          }
          if (!this.data.business_name) {
            this.errors[key] = true;
            this.errors.business_name = true;
            this.error_msg.business_name = `Business name is required`;
          }
          if (this.data.business_name.length <= 3) {
            this.errors[key] = true;
            this.errors.business_name = true;
            this.error_msg.business_name = `Business name must be more than 3 characters`;
          }
          if (!this.data.email.match(email_pattern)) {
            this.errors[key] = true;
            this.error_msg[
              key
            ] = `Email must match pattern 'brainadams@gmail.com'`;
          }
        } else {
          this.errors[key] = false;
          this.errors.business_name = false;
        }
      }
      if (key === 'category') {
        const phone_pattern = '^[0-9]{9,}$';
        if (
          !this.data[key] ||
          !this.data.first_name ||
          !this.data.last_name ||
          !this.data.phone ||
          this.data.first_name.length <= 3 ||
          this.data.last_name.length <= 3 ||
          !this.data.phone.match(phone_pattern)
        ) {
          this.$toasted
            .error('Please fill in all fields with valid input', {
              theme: 'bubble',
              position: 'top-center',
              duration: 5000,
            })
            .goAway(3200);

          if (!this.data[key]) {
            this.errors[key] = true;
            this.error_msg[key] = `Category is required`;
          } else {
            this.error_msg[key] = '';
          }
          if (!this.data.first_name) {
            this.errors.first_name = true;
            this.error_msg.first_name = `First name is required`;
          }
          if (!this.data.last_name) {
            this.errors[key] = true;
            this.errors.last_name = true;
            this.error_msg.last_name = `Last name is required`;
          }
          if (!this.data.phone) {
            this.errors[key] = true;
            this.errors.phone = true;
            this.error_msg.phone = `Phone is required`;
          }
          if (this.data.first_name.length <= 3) {
            this.errors[key] = true;
            this.errors.first_name = true;
            this.error_msg.first_name = `First name must be more than 3 characters`;
          }
          if (this.data.last_name.length <= 3) {
            this.errors[key] = true;
            this.errors.last_name = true;
            this.error_msg.last_name = `Last name must be more than 3 characters`;
          }
          if (!this.data.phone.match(phone_pattern)) {
            this.errors[key] = true;
            this.errors.phone = true;
            this.error_msg.phone = `Phone must be a number and more than 9 digits`;
          }
        } else {
          this.errors[key] = false;
          this.errors.first_name = false;
          this.errors.last_name = false;
          this.errors.phone = false;
        }
      }
      if (key === 'password') {
        const password_pattern =
          '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$';
        if (
          !this.data[key] ||
          !this.data.password.match(password_pattern) ||
          !this.data.confirm_password ||
          this.data.password !== this.data.confirm_password
        ) {
          if (!this.data[key]) {
            this.errors[key] = true;
            this.error_msg[key] = `Password is required`;
          } else {
            this.error_msg[key] = '';
          }
          if (!this.data.confirm_password) {
            this.errors.confirm_password = true;
            this.errors[key] = true;
            this.error_msg.confirm_password = `Password confirmation is required`;
          }
          if (!this.data.password.match(password_pattern)) {
            this.errors[key] = true;
            this.error_msg[
              key
            ] = `Password must be at least 8 characters, contain at least one number, one symbol, one uppercase and one lowercase letter`;
          }
          if (this.data.password !== this.data.confirm_password) {
            this.errors.confirm_password = true;
            this.errors[key] = true;
            this.error_msg.confirm_password = `Passwords must match`;
          }

          this.$toasted
            .error('Please fill in all fields correctly', {
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
      if (!this.errors[key]) {
        this.step = ++this.step;
      }
      if (this.step === 3) {
        this.button_text = 'Submit';
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
