<template>
  <div class="font-sans fixed antialiased w-full bg-white z-10" id="app">
    <nav class="flex items-center justify-between flex-wrap py-2 px-8">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <router-link to="/">
          <div class="flex items-center flex-no-shrink text-black mr-6">
            <img
              class="inline m-1 my-img"
              src="https://res.cloudinary.com/dldd8ucby/image/upload/v1587851649/cerebro/cerebrologo_2x.png"
            />
          </div>
        </router-link>
      </div>
      <div class="block lg:hidden">
        <button
          @click="toggle"
          class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :class="open ? 'block' : 'hidden'"
        class="w-full flex-grow lg:flex sm:items-center lg:w-auto"
      >
        <div class="text-sm lg:flex-grow"></div>
        <div>
          <router-link
            to="/auth/register"
            class="block bg-cerebro-purple px-4 py-2 rounded text-lg mt-4 lg:inline-block nav-button  lg:mt-0 mr-4"
            >Get Started</router-link
          >
          <router-link
            to="/auth/login"
            class="block bg-cerebro-purple px-4 py-2 rounded text-lg mt-4 lg:inline-block nav-button  lg:mt-0 mr-4"
            >Login</router-link
          >
        </div>
      </div>
    </nav>

    <!-- <vue-element-loading
      v-if="loading"
      :active="loading"
      :is-full-screen="true"
    /> -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>

<style scoped>
.nav-button {
  /* font-family: Poppins; */
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #555555;
}
.v-application a {
  color: white;
}
.signup {
  color: #4a4edd !important;
}
</style>
