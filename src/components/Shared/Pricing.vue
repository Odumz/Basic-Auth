<template>
  <b-container-fluid>
    <b-row class="bg-pricing">
      <b-col class="m-2 text-primary">
        <div
          class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"
        >
          <b-card-text
            style="font-size:3vw;"
            class="my-1 text-primary font-weight-bold"
            >Pricing</b-card-text
          >
        </div>
        <b-card-group deck class="m-4 text-center ">
          <b-card class="shadow-lg">
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
              class="pricing-text-fluid my-3 text-primary font-weight-bold display-4"
            >
              N2,000 monthly
            </b-card-text>
            <b-button
              block
              size="lg"
              class="bg-primary my-4 text-fluid font-weight-bold"
              >Get Started</b-button
            >
          </b-card>
          <b-card bg-variant="primary" text-variant="white" class="shadow-lg">
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
              class="pricing-text-fluid my-3 text-white font-weight-bold display-4"
            >
              N3,000 monthly
            </b-card-text>
            <b-button
              size="lg"
              block
              variant="light"
              class="my-4 text-fluid text-primary font-weight-bold"
              >Get Started</b-button
            >
          </b-card>
          <b-card class="shadow-lg">
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
              class="pricing-text-fluid my-3 text-primary font-weight-bold display-4"
            >
              N5,000 monthly
            </b-card-text>
            <b-button
              block
              size="lg"
              class="bg-primary my-4 text-fluid font-weight-bold"
              >Get Started</b-button
            >
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </b-container-fluid>
</template>

<script>
export default {};
</script>

<style scoped>
.pricing-header {
  max-width: 700px;
}

.title-fluid {
  font-size: 2vw !important;
}

.text-fluid {
  font-size: 1vw !important;
}

.pricing-text-fluid {
  font-size: 3vw !important;
}

.subtitle-fluid {
  font-size: 1vw !important;
}

.bg-pricing {
  background-color: #f9f9f9;
}
</style>
