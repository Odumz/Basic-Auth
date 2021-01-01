<template>
  <div class="flex justify-center">
    <router-link class="hover:underline-none" to="/">
      <img
        class="mx-auto my-img fixed hidden md:block"
        src="https://res.cloudinary.com/dldd8ucby/image/upload/v1587851649/cerebro/cerebrologo_2x.png"
      />
    </router-link>
    <div
      style="background: linear-gradient(89.81deg, #111111 0.05%, rgba(17, 17, 17, 0.65) 41.25%), url('https://res.cloudinary.com/dldd8ucby/image/upload/v1587851451/cerebro/top-view-photo-of-people-near-wooden-table-3183150.jpg') no-repeat center center ; background-size: cover;"
      class="log bg-cerebro-purple md:w-2/5 md:flex h-screen  hidden p-4 items-center justify-center"
    >
      <div class="block">
        <span
          class="block text-2xl md:text-5xl font-normal text-white mx-4"
        >
          Welcome to the <span class="font-bold">Smart Consultancy Service</span>
        </span>
        <span class="block text-xl font-bold text-white mx-4">
          Let’s create an account for you
        </span>
      </div>
    </div>
    <div
      class="log bg-cerebro-grey md:w-3/5 w-full h-screen flex items-center justify-center"
    >
      <div class="block w-full md:w-4/5 mx-auto">
        <div class="mx-4 px-8  pt-6 pb-8 mb-4">
          <div class="w-full mx-auto">
            <form class="mx-auto">
              <router-link class="hover:underline-none" to="/">
                <img
                  class="mx-auto my-img  block md:hidden"
                  src="https://res.cloudinary.com/dldd8ucby/image/upload/v1587851649/cerebro/cerebrologo_2x.png"
                />
              </router-link>
              <div v-if="step == 1">
                <p class="text-2xl text-gray-700 mb-4">
                  We’ll need some information to setup your account.
                  <span class="block text-sm"
                    >It will be quick, we promise 🤗</span
                  >
                </p>

                <div class="w-full ">
                  <label
                    class="block text-gray-700 text-left text-sm my-2"
                    for="firstname"
                    >Your First Name</label
                  >

                  <input
                    class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstname"
                    type="text"
                    placeholder="e.g Jane"
                    v-model="data.firstname"
                  />
                  <p v-if="errors.firstname" class="text-xs text-red-500">
                    Please enter your firstname
                  </p>
                </div>

                <main class="flex justify-end items-end my-3">
                  <button
                    class="my-2 bg-cerebro-purple text-white p-2 rounded-lg"
                    @click.prevent="navigate('firstname')"
                  >
                    Next <i class="fas fa-long-arrow-alt-right"></i>
                  </button>
                </main>
              </div>

              <div v-if="step == 2">
                <p class="text-2xl text-gray-700 mb-4">
                  Thanks <span class="font-bold"> {{ data.firstname }}</span>,
                  <span class="block text-sm"
                    >Kindly provide your Last Name as well</span
                  >
                </p>

                <div class="w-full ">
                  <label
                    class="block text-gray-700 text-left text-sm my-2"
                    for="lastname"
                    >Your Last Name</label
                  >
                  <input
                    class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="lastname"
                    type="text"
                    placeholder="e.g Jane"
                    v-model="data.lastname"
                  />
                  <p v-if="errors.lastname" class="text-xs text-red-500">
                    Please enter your lastname
                  </p>
                </div>

                <main class="flex justify-between items-end my-3">
                  <button
                    class="my-2 bg-cerebro-purple text-white p-2 rounded-lg"
                    @click.prevent="step = step - 1"
                  >
                    <i class="fas fa-long-arrow-alt-left"></i> Back
                  </button>
                  <button
                    class="my-2 bg-cerebro-purple text-white p-2 rounded-lg"
                    @click.prevent="navigate('lastname')"
                  >
                    Next <i class="fas fa-long-arrow-alt-right"></i>
                  </button>
                </main>
              </div>

              <div v-if="step == 3">
                <p class="text-2xl text-gray-700 mb-4">
                  Thanks <span class="font-bold"> {{ data.firstname }} {{ data.lastname }}</span>! 😃
                  <span class="block text-sm">
                    And then a little about your business or organization...</span
                  >
                </p>

                <div class="w-full ">
                  <label
                    class="block text-gray-700 text-left text-sm my-2"
                    for="business_name"
                    >Your Business Name</label
                  >
                  <input
                    class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="business_name"
                    type="text"
                    placeholder="e.g Cerebro Inc."
                    v-model="data.business_name"
                  />
                  <p
                    v-if="errors.business_name"
                    class="text-xs text-red-500"
                  >
                    Please enter your business name
                  </p>
                </div>

                <main class="flex justify-between items-end my-3">
                  <button
                    class="my-2 bg-cerebro-purple text-white p-2 rounded-lg"
                    @click.prevent="step = step - 1"
                  >
                    <i class="fas fa-long-arrow-alt-left"></i> Back
                  </button>
                  <button
                    class="my-2 bg-cerebro-purple text-white p-2 rounded-lg"
                    @click.prevent="navigate('business_name')"
                  >
                    Next <i class="fas fa-long-arrow-alt-right"></i>
                  </button>
                </main>
              </div>

              <div v-if="step == 4">
                <p class="text-2xl text-gray-700 mb-4">
                  Great! Welcome to Cerebro, <span class="font-bold"> {{ data.business_name }}</span>
                  <span class="block text-sm">
                    Please provide a contact email
                  </span>
                </p>

                <div class="w-full ">
                  <label
                    class="block text-gray-700 text-left text-sm my-2"
                    for="email"
                    >Your Email Address</label
                  >
                  <input
                    class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="e.g mail@jane.doe"
                    v-model="data.email"
                  />
                  <p v-if="errors.email" class="text-xs text-red-500">
                    Please enter your email
                  </p>
                </div>

                <main class="flex justify-between items-end my-3">
                  <button
                    class="my-2 bg-cerebro-purple text-white p-2 rounded-lg"
                    @click.prevent="step = step - 1"
                  >
                    <i class="fas fa-long-arrow-alt-left"></i> Back
                  </button>
                  <button
                    class="my-2 bg-cerebro-purple text-white p-2 rounded-lg"
                    @click.prevent="navigate('email')"
                  >
                    Next <i class="fas fa-long-arrow-alt-right"></i>
                  </button>
                </main>
              </div>

              <div v-if="step == 5">
                <p class="text-2xl text-gray-700 mb-4">
                  Great!
                  <span class="block text-sm">
                    Please provide a contact phone</span
                  >
                </p>

                <div class="w-full ">
                  <label
                    class="block text-gray-700 text-left text-sm my-2"
                    for="phone"
                    >Your Phone Number</label
                  >
                  <input
                    class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="text"
                    placeholder="e.g 08022112211"
                    v-model="data.phone"
                  />
                  <p v-if="errors.phone" class="text-xs text-red-500">
                    Please enter your phone number
                  </p>
                </div>

                <main class="flex justify-between items-end my-3">
                  <button
                    class="my-2 bg-cerebro-purple text-white p-2 rounded-lg"
                    @click.prevent="step = step - 1"
                  >
                    <i class="fas fa-long-arrow-alt-left"></i> Back
                  </button>
                  <button
                    class="my-2 bg-cerebro-purple text-white p-2 rounded-lg"
                    @click.prevent="navigate('phone')"
                  >
                    Next <i class="fas fa-long-arrow-alt-right"></i>
                  </button>
                </main>
              </div>

              <div v-if="step == 6">
                <p class="text-2xl text-gray-700 mb-4">
                  Thanks for your patience <span class="font-bold"> {{ data.firstname }}</span>! 😃
                  <span class="block text-sm"
                    >Kindly create a password so we can create an account for you</span
                  >
                </p>

                <div class="w-full ">
                  <label
                    class="block text-gray-700 text-left text-sm my-2"
                    for="password"
                    >Your Password</label
                  >
                  <input
                    class="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******"
                    v-model="data.password"
                  />
                  <p v-if="errors.password" class="text-xs text-red-500">
                    Please enter your password
                  </p>
                </div>

                <main class="flex justify-between items-end my-3">
                  <button
                    class="my-2 bg-cerebro-purple text-white p-2 rounded-lg"
                    @click.prevent="step = step - 1"
                  >
                    <i class="fas fa-long-arrow-alt-left"></i> Back
                  </button>
                  <button
                    class="my-2 bg-cerebro-purple text-white p-2 rounded-lg"
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

              <div class="text-center" v-if="step == 7">
                <div class="flex justify-center">
                  <img
                    class="w-64"
                    src="https://res.cloudinary.com/ekoicentre/image/upload/v1599750296/Consult/cerebro-consult-success-hill_vguj6w.png"
                  />
                </div>
                
                We have sent an email to {{ data.email }} for confirmation. To continue with your Request for a Consultation, click the <span class="font-bold"> Place Order </span> button below
                <div class="mt-4">
                  <span class="text-gray-700"
                    >Click the button below to proceed with booking a consultation session</span
                  >
                  <div class="w-full md:w-1/2 text-center">
                    <div class="my-6">
                      <button
                        class="bg-cerebro-purple text-white p-2 rounded-lg"
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
            <p class="text-center text-gray-500 mt-4 text-xs">
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