<template>
  <b-container-fluid class="main-body">
    <b-row align-v="center" class="flex justify-content-center pt-5">
      <b-col cols="12" md="7">
        <b-card
          overlay
          img-src="https://res.cloudinary.com/griffintech/image/upload/v1608201552/samples/pexels-jopwell-2422280_sze4ek.jpg"
          img-alt="Card image"
          img-fluid-grow
          text-variant="white"
          ><b-col align-self="center" class="m-3 pt-4">
            <b-card-title class="p-3 mt-5 font-weight-bold col-8 h1 text-break">
              EDC Smarter Business Program
            </b-card-title>
            <b-card-text class="col-10 text-break p-3">
              Premium SME Support featuring remotely-delivered business/funding
              advisory, learning & technology support.
            </b-card-text>
          </b-col>
        </b-card>
      </b-col>
      <b-col cols="12" md="5" class="p-5 text-primary">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <p class="col-9 text-break font-weight-bold pb-4">
            Enter your name and email to get started
          </p>
          <b-form-group
            id="input-group-name"
            label-for="name"
            :valid-feedback="validFeedback.name"
            :invalid-feedback="invalidFeedback.name"
            :state="state"
            class="my-4"
          >
            <b-form-input
              id="name"
              v-model="form.name"
              placeholder="Enter name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-email"
            label-for="email"
            :valid-feedback="validFeedback.email"
            :invalid-feedback="invalidFeedback.email"
            :state="state"
            class="my-4"
          >
            <b-form-input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="E-mail"
              required
            ></b-form-input>
          </b-form-group>

          <b-button
            class="bg-primary mt-4 font-weight-bold"
            size="lg"
            type="submit"
            block
            >Get Started</b-button
          >
        </b-form>
      </b-col>
    </b-row>
  </b-container-fluid>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      validFeedback: {
        name: `Thanks`,
        email: `Thank you`
      },
      invalidFeedback: {
        name: "",
        email: ""
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
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
</style>
