<template>
  <b-container-fluid class="main-body">
    <b-row align-v="center" class="flex justify-content-center pt-1">
      <!-- <b-col col="12" class="p-5">
        <b-text class="display-4 mb-4 font-weight-bolder">Settings</b-text>
      </b-col> -->
      <b-col class="p-5 text-primary col-md-10 col-lg-5 order-md-2 mb-4">
        <div>
          <div class="pt-3">
            <b-card
              v-if="!data.isMarketplaceActivated"
              class="shadow-lg pl-4 py-5 px-2 rounded-card bg-tint"
            >
              <div>
                <span class="display-4 font-weight-bolder">0 </span> Products
                Available
              </div>
              <div>
                <span class="display-4 font-weight-bolder">0 </span> Services
                Available
              </div>
              <div class="text-left mt-5">
                <b-text class="font-weight-bold"
                  >Activate Marketplace to sync your products and
                  services</b-text
                >
              </div>
            </b-card>
            <b-card
              v-else
              class="shadow-lg py-5 pl-4 px-2 rounded-card bg-tint"
            >
              <div>
                <span class="display-4 font-weight-bolder">3,000 </span>
                <p>Products Available</p>
              </div>
              <div>
                <span class="display-4 font-weight-bolder">5,000 </span>
                <p>Services Available</p>
              </div>
            </b-card>
          </div>
        </div>
      </b-col>
      <b-col class="p-5 text-primary col-md-12 col-lg-7 order-md-1 mb-4">
        <b-text class="display-4 mb-4 font-weight-bolder">Marketplace</b-text>
        <b-card
          img-src="https://res.cloudinary.com/griffintech/image/upload/v1609534435/samples/people-in-a-meeting-1367274_1_jhi20n.png"
          img-alt="Image"
          img-top
          class="rounded-card my-5 col-10 mx-auto"
        >
          <b-card-text>
            <ul class="text-fluid list-unstyled my-3">
              <li>
                * Get an online store to display products and services
              </li>
              <li>* Invoicing, sales & customer service apps</li>
            </ul>
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
  </b-container-fluid>
</template>

<script>
export default {
  data() {
    return {
      button_text: '',
      data: {
        isMarketplaceActivated: false,
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
        this.button_text = 'Launch Marketplace';
        return this.button_text;
      } else {
        this.button_text = 'Activate Marketplace';
        return this.button_text;
      }
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

.bg-tint {
  background-color: #e7f4fe;
}

.rounded-card {
  border-radius: 15px;
}
</style>
