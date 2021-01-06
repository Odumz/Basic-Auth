<template>
    <b-container-fluid class="main-body">
        <div v-if="!data.hasConsultations">
            <b-row align-v="center" class="flex justify-content-center pt-1">
                <b-col class="p-5 text-primary col-md-12 order-md-1 mb-4">
                    <b-text class="display-4 mb-4 font-weight-bolder">Advisory</b-text>
                    <b-card class="rounded-card my-5 text-center border-0 col-10 mx-auto"
                    >
                        <div class="mb-2">
                            <img src="https://res.cloudinary.com/griffintech/image/upload/v1609973343/advisory_cbzsfz.png" class="img-fluid flex-row mx-auto" alt="Responsive image" width="30%">
                        </div>
                    <b-card-text>
                        <p class="text-fluid text-center mt-5 list-unstyled my-3">
                        You haven’t booked any consultations yet.
                        </p>
                    </b-card-text>
                    <!-- <template #footer>
                        <small class="text-muted">Last updated 3 mins ago</small>
                        </template> -->

                    <b-button
                        block
                        size="lg"
                        class="bg-primary my-4 text-fluid font-weight-bold"
                        @click="activateMarketplace()"
                        >{{ button_text }}</b-button
                    >
                    </b-card>
                </b-col>
            </b-row>
        </div>
        <div></div>
  </b-container-fluid>
</template>

<script>
export default {
  data() {
    return {
      button_text: "",
      data: {
        isMarketplaceActivated: false,
        hasConsultations: false,
      },
    };
  },
  async mounted() {
    await this.getUser();
    await this.getBtnText();
  },
  methods: {
    activateMarketplace() {
      const data = this.data;
      if (data.isMarketplaceActivated) {
        this.$router.push('/dashboard');
      } else {
        this.$router.push('/dashboard/settings');
      }
    },
    getUser() {},
    getBtnText() {
      const data = this.data;
      // let button_text = this.button_text;
      if (data.isMarketplaceActivated) {
        this.button_text = "Launch Marketplace"
        return this.button_text;
      } else {
        this.button_text = "Book a Consultation"
        return this.button_text;
      }
    },
    // getConsultations() {
    //     const data = this.data;
    //     if (data.hasConsultations) {

    //     }
    // },
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

.bg-tint {
  background-color: #e7f4fe;
}

.rounded-card {
  border-radius: 15px;
}
</style>
