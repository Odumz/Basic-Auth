<template>
  <div class="tw-flex tw-justify-center">
    <router-link class="hover:tw-underline-none" to="/">
      <img
        class="tw-mx-auto my-img tw-fixed tw-hidden md:tw-block"
        src="https://res.cloudinary.com/dldd8ucby/image/upload/v1587851649/cerebro/cerebrologo_2x.png"
      />
    </router-link>
    <div
      style="background: linear-gradient(89.81deg, #111111 0.05%, rgba(17, 17, 17, 0.65) 41.25%), url('https://res.cloudinary.com/dldd8ucby/image/upload/v1587851451/cerebro/top-view-photo-of-people-near-wooden-table-3183150.jpg') no-repeat center center ; background-size: cover;"
      class="log tw-bg-cerebro-purple md:tw-w-2/5 md:tw-flex tw-h-screen  tw-hidden tw-p-4 tw-items-center tw-justify-center"
    >
      <div class="tw-block">
        <span
          class="tw-block tw-text-2xl md:tw-text-5xl tw-font-normal tw-text-white tw-mx-4"
        >
          Welcome to the <span class="tw-font-bold">Smart Consultancy Service</span>
        </span>
        <span class="tw-block tw-text-xl tw-font-bold tw-text-white tw-mx-4">
          Let’s create an account for you
        </span>
      </div>
    </div>
    <div
      class="log tw-bg-cerebro-grey md:tw-w-3/5 tw-w-full tw-h-screen tw-flex tw-items-center tw-justify-center"
    >
      <div class="tw-block tw-w-full md:tw-w-4/5 tw-mx-auto">
        <div class="tw-mx-4 tw-px-8  tw-pt-6 tw-pb-8 tw-mb-4">
          <div class="tw-w-full tw-mx-auto">
            <form class="tw-mx-auto">
              <router-link class="hover:tw-underline-none" to="/">
                <img
                  class="tw-mx-auto my-img  tw-block md:tw-hidden"
                  src="https://res.cloudinary.com/dldd8ucby/image/upload/v1587851649/cerebro/cerebrologo_2x.png"
                />
              </router-link>
              <div v-if="step == 1">
                <p class="tw-text-2xl tw-text-gray-700 tw-mb-4">
                  We’ll need some information to setup your account.
                  <span class="tw-block tw-text-sm"
                    >It will be quick, we promise 🤗</span
                  >
                </p>

                <div class="tw-w-full ">
                  <label
                    class="tw-block tw-text-gray-700 tw-text-left tw-text-sm tw-my-2"
                    for="firstname"
                    >Your First Name</label
                  >

                  <input
                    class="tw-bg-white tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                    id="firstname"
                    type="text"
                    placeholder="e.g Jane"
                    v-model="data.firstname"
                  />
                  <p v-if="errors.firstname" class="tw-text-xs tw-text-red-500">
                    Please enter your firstname
                  </p>
                </div>

                <main class="tw-flex tw-justify-end tw-items-end tw-my-3">
                  <button
                    class="tw-my-2 tw-bg-cerebro-purple tw-text-white tw-p-2 tw-rounded-lg"
                    @click.prevent="navigate('firstname')"
                  >
                    Next <i class="fas fa-long-arrow-alt-right"></i>
                  </button>
                </main>
              </div>

              <div v-if="step == 2">
                <p class="tw-text-2xl tw-text-gray-700 tw-mb-4">
                  Thanks <span class="tw-font-bold"> {{ data.firstname }}</span>,
                  <span class="tw-block tw-text-sm"
                    >Kindly provide your Last Name as well</span
                  >
                </p>

                <div class="tw-w-full ">
                  <label
                    class="tw-block tw-text-gray-700 tw-text-left tw-text-sm tw-my-2"
                    for="lastname"
                    >Your Last Name</label
                  >
                  <input
                    class="tw-bg-white tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                    id="lastname"
                    type="text"
                    placeholder="e.g Jane"
                    v-model="data.lastname"
                  />
                  <p v-if="errors.lastname" class="tw-text-xs tw-text-red-500">
                    Please enter your lastname
                  </p>
                </div>

                <main class="tw-flex tw-justify-between tw-items-end tw-my-3">
                  <button
                    class="tw-my-2 tw-bg-cerebro-purple tw-text-white tw-p-2 tw-rounded-lg"
                    @click.prevent="step = step - 1"
                  >
                    <i class="fas fa-long-arrow-alt-left"></i> Back
                  </button>
                  <button
                    class="tw-my-2 tw-bg-cerebro-purple tw-text-white tw-p-2 tw-rounded-lg"
                    @click.prevent="navigate('lastname')"
                  >
                    Next <i class="fas fa-long-arrow-alt-right"></i>
                  </button>
                </main>
              </div>

              <div v-if="step == 3">
                <p class="tw-text-2xl tw-text-gray-700 tw-mb-4">
                  Thanks <span class="tw-font-bold"> {{ data.firstname }} {{ data.lastname }}</span>! 😃
                  <span class="tw-block tw-text-sm">
                    And then a little about your business or organization...</span
                  >
                </p>

                <div class="tw-w-full ">
                  <label
                    class="tw-block tw-text-gray-700 tw-text-left tw-text-sm tw-my-2"
                    for="business_name"
                    >Your Business Name</label
                  >
                  <input
                    class="tw-bg-white tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                    id="business_name"
                    type="text"
                    placeholder="e.g Cerebro Inc."
                    v-model="data.business_name"
                  />
                  <p
                    v-if="errors.business_name"
                    class="tw-text-xs tw-text-red-500"
                  >
                    Please enter your business name
                  </p>
                </div>

                <main class="tw-flex tw-justify-between tw-items-end tw-my-3">
                  <button
                    class="tw-my-2 tw-bg-cerebro-purple tw-text-white tw-p-2 tw-rounded-lg"
                    @click.prevent="step = step - 1"
                  >
                    <i class="fas fa-long-arrow-alt-left"></i> Back
                  </button>
                  <button
                    class="tw-my-2 tw-bg-cerebro-purple tw-text-white tw-p-2 tw-rounded-lg"
                    @click.prevent="navigate('business_name')"
                  >
                    Next <i class="fas fa-long-arrow-alt-right"></i>
                  </button>
                </main>
              </div>

              <div v-if="step == 4">
                <p class="tw-text-2xl tw-text-gray-700 tw-mb-4">
                  Great! Welcome to Cerebro, <span class="tw-font-bold"> {{ data.business_name }}</span>
                  <span class="tw-block tw-text-sm">
                    Please provide a contact email
                  </span>
                </p>

                <div class="tw-w-full ">
                  <label
                    class="tw-block tw-text-gray-700 tw-text-left tw-text-sm tw-my-2"
                    for="email"
                    >Your Email Address</label
                  >
                  <input
                    class="tw-bg-white tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                    id="email"
                    type="text"
                    placeholder="e.g mail@jane.doe"
                    v-model="data.email"
                  />
                  <p v-if="errors.email" class="tw-text-xs tw-text-red-500">
                    Please enter your email
                  </p>
                </div>

                <main class="tw-flex tw-justify-between tw-items-end tw-my-3">
                  <button
                    class="tw-my-2 tw-bg-cerebro-purple tw-text-white tw-p-2 tw-rounded-lg"
                    @click.prevent="step = step - 1"
                  >
                    <i class="fas fa-long-arrow-alt-left"></i> Back
                  </button>
                  <button
                    class="tw-my-2 tw-bg-cerebro-purple tw-text-white tw-p-2 tw-rounded-lg"
                    @click.prevent="navigate('email')"
                  >
                    Next <i class="fas fa-long-arrow-alt-right"></i>
                  </button>
                </main>
              </div>

              <div v-if="step == 5">
                <p class="tw-text-2xl tw-text-gray-700 tw-mb-4">
                  Great!
                  <span class="tw-block tw-text-sm">
                    Please provide a contact phone</span
                  >
                </p>

                <div class="tw-w-full ">
                  <label
                    class="tw-block tw-text-gray-700 tw-text-left tw-text-sm tw-my-2"
                    for="phone"
                    >Your Phone Number</label
                  >
                  <input
                    class="tw-bg-white tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                    id="phone"
                    type="text"
                    placeholder="e.g 08022112211"
                    v-model="data.phone"
                  />
                  <p v-if="errors.phone" class="tw-text-xs tw-text-red-500">
                    Please enter your phone number
                  </p>
                </div>

                <main class="tw-flex tw-justify-between tw-items-end tw-my-3">
                  <button
                    class="tw-my-2 tw-bg-cerebro-purple tw-text-white tw-p-2 tw-rounded-lg"
                    @click.prevent="step = step - 1"
                  >
                    <i class="fas fa-long-arrow-alt-left"></i> Back
                  </button>
                  <button
                    class="tw-my-2 tw-bg-cerebro-purple tw-text-white tw-p-2 tw-rounded-lg"
                    @click.prevent="navigate('phone')"
                  >
                    Next <i class="fas fa-long-arrow-alt-right"></i>
                  </button>
                </main>
              </div>

              <div v-if="step == 6">
                <p class="tw-text-2xl tw-text-gray-700 tw-mb-4">
                  Thanks for your patience <span class="tw-font-bold"> {{ data.firstname }}</span>! 😃
                  <span class="tw-block tw-text-sm"
                    >Kindly create a password so we can create an account for you</span
                  >
                </p>

                <div class="tw-w-full ">
                  <label
                    class="tw-block tw-text-gray-700 tw-text-left tw-text-sm tw-my-2"
                    for="password"
                    >Your Password</label
                  >
                  <input
                    class="tw-bg-white tw-shadow tw-appearance-none tw-border tw-rounded tw-w-full tw-py-2 tw-px-3 tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******"
                    v-model="data.password"
                  />
                  <p v-if="errors.password" class="tw-text-xs tw-text-red-500">
                    Please enter your password
                  </p>
                </div>

                <main class="tw-flex tw-justify-between tw-items-end tw-my-3">
                  <button
                    class="tw-my-2 tw-bg-cerebro-purple tw-text-white tw-p-2 tw-rounded-lg"
                    @click.prevent="step = step - 1"
                  >
                    <i class="fas fa-long-arrow-alt-left"></i> Back
                  </button>
                  <button
                    class="tw-my-2 tw-bg-cerebro-purple tw-text-white tw-p-2 tw-rounded-lg"
                    @click.prevent="submit"
                  >
                    <v-progress-circular
                      v-if="loading"
                      :disabled="loading"
                      indeterminate
                      color="white"
                    ></v-progress-circular>
                    {{ button_text }}
                  </button>
                </main>
              </div>

              <div class="tw-text-center" v-if="step == 7">
                <div class="tw-flex tw-justify-center">
                  <img
                    class="tw-w-64"
                    src="https://res.cloudinary.com/ekoicentre/image/upload/v1599750296/Consult/cerebro-consult-success-hill_vguj6w.png"
                  />
                </div>
                
                We have sent an email to {{ data.email }} for confirmation. To continue with your Request for a Consultation, click the <span class="tw-font-bold"> Place Order </span> button below
                <div class="tw-mt-4">
                  <span class="tw-text-gray-700"
                    >Click the button below to proceed with booking a consultation session</span
                  >
                  <div class="tw-w-full md:w-1/2 tw-text-center">
                    <div class="tw-my-6">
                      <button
                        class="tw-bg-cerebro-purple tw-text-white tw-p-2 tw-rounded-lg"
                        @click.prevent="
                      $router.push('/dashboard/business/create/consult')"
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <p class="tw-text-center tw-text-gray-500 tw-mt-4 tw-text-xs">
              &copy; Cerebro
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: {},
      button_text: "Save Profile",
      loading: false,
      errors: {},
      error_msg: {},
      disabled: false,
      step: 1,
      user: {},
      key: "",
    };
  },
  components: {},
  mounted() {},
  methods: {
    jumpTo() {
      this.$router.push(this.key);
    },
    navigate(key) {
      this.errors = {};
      if (!this.data[key]) {
        this.errors[key] = true;
        return;
      }
      this.step = ++this.step;
    },
    submit() {
      this.errors = {};
      if (!this.data.phone) {
        this.errors.phone = true;
        return;
      }
      this.loading = true;
      this.button_text = "Loading...";
      const self = this;
      this.data.client_id = 2;
      this.data.grant_type = "password";
      this.data.client_secret = "oDgySym8lQwoRUyERKnmTahkjPLBtZtwm2MsItLH";
      axios
        .post(`${this.$baseUrl}/business/register`, this.data)
        .then((response) => {
          self.loading = false;
          localStorage.setItem(
            "cerebro-user",
            JSON.stringify(response.data.user.data)
          );
          localStorage.setItem("cerebro-token", response.data.access_token);
          // this.$swal("Fantastic!", "Welcome to Cerebro", "success");
          this.$toasted.success("Account successfully created").goAway(2500);
          this.step = 7;
          // this.$router.push("/dashboard/business/create/consult");
          // setTimeout( () => this.$router.push("/dashboard/business/create/consult"), 3000);
          this.loading = false;
        })
        .catch((error) => {
          self.loading = false;
          self.button_text = "Save Profile";
          self.step = 1;
          self.$toasted.error(error.response.data.errors[0].source.email).goAway(2500);
        });
    },
  },
};
</script>

<style scoped>
.log {
  min-height: 100vh;
}
.v-application a {
  color: white;
}
</style>