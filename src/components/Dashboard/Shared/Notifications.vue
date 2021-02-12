<template>
  <b-container-fluid class="main-body">
    <b-row align-v="center" class="flex justify-content-center pt-5">
      <!-- <b-col col="12" class="p-5">
        <b-text class="display-4 mb-4 font-weight-bolder">Settings</b-text>
      </b-col> -->
      <!-- <b-col class="p-5 text-primary col-md-4 order-md-2 mb-4">
        <b-text class="lead font-weight-bold">Subscription Plan</b-text>

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
            >Upgrade Plan</b-button
          >
          <b-button
            size="lg"
            block
            class="my-4 text-fluid text-white font-weight-bold"
            >Downgrade Plan</b-button
          >
        </b-card>
      </b-col> -->
      <b-col class="px-5 text-primary col-12 order-md-1 mb-4">
        <b-text class="display-4 mb-4 font-weight-bolder"
          >Notifications
        </b-text>
      </b-col>
    </b-row>
  </b-container-fluid>
</template>

<script>
export default {
  data() {
    return {
      data: {},
    };
  },
  methods: {},
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
