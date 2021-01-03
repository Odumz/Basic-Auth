<template>
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
            <b-card-title class="px-4 mt-2 pb-3 letter-space font-weight-bold col-9 h1 text-break">
              EDC Smarter Business Program
            </b-card-title>
            <b-card-text class="col-11 text-break py-1 px-4">
              Premium SME Support featuring remotely-delivered business/funding
              advisory, learning & technology support.
            </b-card-text>
          </b-col>
        </b-card>
      </b-col>
      <b-col cols="12" md="5" class="p-5 text-primary">
        <b-form @submit="onSubmit" @reset="onReset" class="pr-4">
          <p class="col-9 text-break lead font-weight-bold pb-3">
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
              class="bg-input"
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
              class="bg-input"
              required
            ></b-form-input>
          </b-form-group>

          <b-button
            class="bg-primary mt-5 font-weight-bold"
            size="lg"
            @click.prevent="submit"
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

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.img-gradient {
  background-image: linear-gradient(84.81deg, #111111 0.05%, rgba(17, 17, 17, 0.55) 41.25%),
  url('https://res.cloudinary.com/griffintech/image/upload/v1609534435/samples/people-in-a-meeting-1367274_1_jhi20n.png');
  height: 100vh;
  background-size: cover;
}

.letter-space {
  letter-spacing: 2px;
}

input::placeholder {
  color: #043F6C !important;
}

</style>
