<template>
  <b-container-fluid class="main-body">
    <b-row align-v="center" class="flex justify-content-center pt-1">
      <!-- <b-col col="12" class="p-5">
        <b-text class="display-4 mb-4 font-weight-bolder">Settings</b-text>
      </b-col> -->
      <b-col class="p-5 text-primary col-md-10 col-lg-5 order-md-2 mb-4">
        <div class="text-center">
          <b-text class="lead font-weight-bold">Subscription Plan</b-text>

          <div class="text-center pt-3">
            <b-card
              bg-variant="primary"
              text-variant="white"
              class="shadow-lg p-2 rounded-card"
            >
              <b-card-title class="title-fluid mt-3 center font-weight-bold"
                >Classic</b-card-title
              >
              <b-card-subtitle class="subtitle-fluid mb-5"
                >(Popular)</b-card-subtitle
              >
              <ul class="text-fluid list-unstyled my-5">
                <li>* 2 business advisory session monthly</li>
                <li>* 2 technology advisory session monthly</li>
                <li>* Access to standard business software tools</li>
                <li>* Access to 10 business courses</li>
                <li>* Funding email notifications plus application guidance</li>
              </ul>
              <b-card-text
                class="pricing-text-fluid my-3 text-white font-weight-bold h1"
              >
                N3,000 monthly
              </b-card-text>
              <b-button
                size="md"
                block
                variant="light"
                class="my-4 text-fluid text-primary font-weight-bold"
                >Get Started</b-button
              >
              <b-button
                size="md"
                block
                class="my-4 text-fluid text-white bg-primary font-weight-bold"
                >Downgrade Plan</b-button
              >
            </b-card>
          </div>
        </div>
      </b-col>
      <b-col class="p-5 text-primary col-md-12 col-lg-7 order-md-1 mb-4">
        <b-text class="display-4 mb-4 font-weight-bolder">Settings</b-text>
        <b-form @submit="onSubmit" @reset="onReset" class="my-5">
          <b-form-group
            id="input-group-name"
            label-for="name"
            label="Business Name"
            :valid-feedback="validFeedback.name"
            :invalid-feedback="invalidFeedback.name"
            :state="state"
            class="my-4 font-weight-bold"
          >
            <b-form-input
              id="name"
              v-model="form.name"
              class="border-0 text-primary pl-4"
              placeholder="Business Name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-description"
            label-for="description"
            label="Description"
            :valid-feedback="validFeedback.description"
            :invalid-feedback="invalidFeedback.description"
            :state="state"
            class="my-4 font-weight-bold"
          >
            <b-form-textarea
              id="description"
              v-model="form.description"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .Ut enim ad minim veniam,"
              rows="4"
              class="border-0 text-primary pl-4"
              max-rows="6"
              required
            ></b-form-textarea>
          </b-form-group>

          <b-form-group
            id="input-group-sector"
            label-for="sector"
            label="Sector"
            :valid-feedback="validFeedback.sector"
            :invalid-feedback="invalidFeedback.sector"
            :state="state"
            class="my-4 font-weight-bold"
          >
            <b-form-input
              id="sector"
              v-model="form.sector"
              class="border-0 text-primary pl-4"
              placeholder="Sector"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-contact"
            label-for="contact"
            label="Contact Information"
            :valid-feedback="validFeedback.contact"
            :invalid-feedback="invalidFeedback.contact"
            :state="state"
            class="my-4 font-weight-bold"
          >
            <b-form-input
              id="contact"
              v-model="form.contact"
              class="border-0 text-primary pl-4"
              placeholder="Contact Info"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-email"
            label-for="email"
            label="Email"
            :valid-feedback="validFeedback.email"
            :invalid-feedback="invalidFeedback.email"
            :state="state"
            class="my-4 font-weight-bold"
          >
            <b-form-input
              id="email"
              v-model="form.email"
              class="border-0 text-primary pl-4"
              type="email"
              placeholder="Email"
              required
            ></b-form-input>
          </b-form-group>

          <b-button
            class="bg-primary mt-4 font-weight-bold"
            size="md"
            type="submit"
            ><b-icon icon="pencil-square"></b-icon> Edit</b-button
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
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
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
</style>
