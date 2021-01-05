<template>
  <b-container-fluid class="main-body">
    <b-row align-v="center" class="flex justify-content-center pt-1">
      <!-- <b-col col="12" class="p-5">
        <b-text class="display-4 mb-4 font-weight-bolder">Settings</b-text>
      </b-col> -->
      <b-col class="p-5 text-primary col-md-10 col-lg-5 order-md-2 mb-4">
        <div>
          <div class="text-center pt-3">
            <b-card class="shadow-lg py-5 px-2 rounded-card bg-tint">
              <div>
                <span class="display-4 font-weight-bolder">0 </span> Products
                Available
              </div>
              <div>
                <span class="display-4 font-weight-bolder">0 </span> Services
                Available
              </div>
              <div class="text-left mt-5">
                <b-text
                  >Activate Marketplace to sync your products and
                  services</b-text
                >
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
                  * Get an online store to display products 
   and services
                </li>
                <li>* Invoicing, sales & customer service       
   apps</li>
              </ul>
            </b-card-text>
            <!-- <template #footer>
              <small class="text-muted">Last updated 3 mins ago</small>
            </template> -->

            <b-button
              block
              size="lg"
              class="bg-primary my-4 text-fluid font-weight-bold"
              >Activate Marketplace</b-button>
          </b-card>
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

.bg-tint {
  background-color: #e7f4fe;
}

.rounded-card {
  border-radius: 15px;
}
</style>
