<template>
  <b-col class="p-5 text-primary order-md-1 mb-4">
    <b-text class="display-4 mb-4 font-weight-bolder">Subscription</b-text>
    <b-card-group deck class="m-4 mt-5 text-center ">
      <b-card class="shadow-lg p-2 rounded-card">
        <b-card-title class="title-fluid mt-3 center font-weight-bold"
          >Starter</b-card-title
        >
        <b-card-subtitle class="subtitle-fluid mb-5"
          >(Getting Started)</b-card-subtitle
        >
        <ul class="text-fluid list-unstyled my-5">
          <li>* 1 business advisory session monthly</li>
          <li>* 1 technology advisory session monthly</li>
          <li>* Access to basic business software tools</li>
          <li>* Access to 5 business courses</li>
          <li>* Funding email notifications</li>
        </ul>
        <b-card-text
          class="pricing-text-fluid my-3 text-primary font-weight-bold h1"
        >
          N2,000 monthly
        </b-card-text>
        <b-button
          id="starter"
          block
          @click="subscribe"
          size="lg"
          class="bg-primary my-4 text-fluid font-weight-bold"
          >{{ button_text }}</b-button
        >
      </b-card>
      <b-card
        bg-variant="primary"
        text-variant="white"
        class="shadow-lg p-2 rounded-card"
      >
        <b-card-title class="title-fluid mt-3 center font-weight-bold"
          >Classic</b-card-title
        >
        <b-card-subtitle class="subtitle-fluid mb-5">(Popular)</b-card-subtitle>
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
          id="classic"
          size="lg"
          block
          @click="subscribe"
          variant="light"
          class="my-4 text-fluid text-primary font-weight-bold"
          >{{ button_text }}</b-button
        >
      </b-card>
      <b-card class="shadow-lg p-2 rounded-card">
        <b-card-title class="title-fluid mt-3 center font-weight-bold"
          >Premium</b-card-title
        >
        <b-card-subtitle class="subtitle-fluid mb-5"
          >(Full Support)</b-card-subtitle
        >
        <ul class="text-fluid list-unstyled my-5">
          <li>* 3 business advisory session monthly</li>
          <li>* 3 technology advisory session monthly</li>
          <li>* Access to standard business software tools</li>
          <li>* Access to 20 business courses</li>
          <li>
            * Funding email notifications, application guidance, funding
            recommendations and mentoring
          </li>
        </ul>
        <b-card-text
          class="pricing-text-fluid my-3 text-primary font-weight-bold h1"
        >
          N5,000 monthly
        </b-card-text>
        <b-button
          id="premium"
          block
          @click="subscribe"
          size="lg"
          class="bg-primary my-4 text-fluid font-weight-bold"
          >{{ button_text }}</b-button
        >
      </b-card>
    </b-card-group>
  </b-col>
</template>

<script>
export default {
  data() {
    return {
      button_text: 'Get Started',
      data: {
        hasSubscription: true,
        subscription_type: '',
      },
    };
  },
  async mounted() {
    // await this.getUser();
    await this.getBtnText();
  },
  methods: {
    getBtnText() {
      let data = this.data;

      if (data.hasSubscription) {
        if (data.subscription_type == 'starter') {
          console.log(data.subscription_type);
          return (document.getElementById('starter').innerText =
            'This is your current subscription');
        } else if (data.subscription_type == 'classic') {
          console.log(data.subscription_type);
          return (document.getElementById('classic').innerText =
            'This is your current subscription');
        } else if (data.subscription_type == 'premium') {
          console.log(data.subscription_type);
          return (document.getElementById('premium').innerText =
            'This is your current subscription');
        }
      }
    },
  },
};
</script>

<style>
.bg-tint {
  background-color: #e7f4fe;
}

.rounded-card {
  border-radius: 15px;
}
</style>
