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
        <b-text class="display-4 mb-4 d-block font-weight-bolder">Home </b-text
        ><br />

        <b-card
          bg-variant="primary"
          text-variant="white"
          class="shadow-lg p-2 rounded-card mb-4"
          v-if="user.type == 'consultant'"
        >
          <div class="row col-12">
            <div class="col-4">
              <span class="display-4 font-weight-bolder">5 </span> Consultations
              Today
            </div>
            <div class="col-4">
              <span class="display-4 font-weight-bolder">20 </span> Total
              Consultations
            </div>
          </div>
        </b-card>

        <div v-if="user.type == 'admin'">
          <!-- <b-text 
              class="mb-4 font-weight-bolder"
              ><b-icon icon="bell-fill" variant="primary"></b-icon>
              <span class="ml-2">Upcoming Consultants</span>
            </b-text> -->

          <b-card-group deck class="m-2 text-left text-primary">
            <b-card class="shadow-lg p-2 pl-4 rounded-card">
              <!-- <b-card-title class="title-fluid mt-3 font-weight-bold"
                >Marketing Consultation</b-card-title
              >
              <b-card-subtitle class="subtitle-fluid mb-5"
                >(Getting Started)</b-card-subtitle
              > -->
              <!-- <b-card-text class="pricing-text-fluid my-3 text-left text-primary">
                <p class="">Advisory Topic</p>
                <p class="">Consultant: Bolanle Sopeju</p>
                <p class="">
                  Description: ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam,
                </p>
              </b-card-text> -->
              <div>
                <span class="display-4 font-weight-bolder">2000 </span>
                <p>Past Consultations</p>
              </div>
              <!-- <main class="flex d-flex justify-content-md-center my-2">
                <b-button
                  class="bg-primary mt-4 font-weight-bold mx-3"
                  size="sm"
                  @click="goBack"
                  >More Details</b-button
                >
                <b-button
                  class="bg-white mt-4 text-primary font-weight-bold mx-3 border-primary"
                  size="sm"
                  @click="homepage"
                  >Send Consultant a Message</b-button
                >
              </main> -->
            </b-card>

            <b-card class="shadow-lg p-2 pl-4 rounded-card">
              <!-- <b-card-title class="title-fluid mt-3 font-weight-bold"
                >Marketing Consultation</b-card-title
              >
              <b-card-subtitle class="subtitle-fluid mb-5"
                >(Getting Started)</b-card-subtitle
              >
              <b-card-text class="pricing-text-fluid my-3 text-left text-primary">
                <p class="">Advisory Topic</p>
                <p class="">Consultant: Bolanle Sopeju</p>
                <p class="">
                  Description: ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam,
                </p>
              </b-card-text>
              <main class="flex d-flex justify-content-md-center my-2">
                <b-button
                  class="bg-primary mt-4 font-weight-bold mx-3"
                  size="sm"
                  @click="goBack"
                  >More Details</b-button
                >
                <b-button
                  class="bg-white mt-4 text-primary font-weight-bold mx-3 border-primary"
                  size="sm"
                  @click="homepage"
                  >Send Consultant a Message</b-button
                >
              </main> -->
              <div>
                <span class="display-4 font-weight-bolder">5,000 </span>
                <p>Total Number of SMEs</p>
              </div>
            </b-card>
          </b-card-group>

          <b-card-group deck class="m-2 text-left text-primary">
            <b-card class="shadow-lg p-2 pl-4 rounded-card">
              <!-- <b-card-title class="title-fluid mt-3 font-weight-bold"
                >Marketing Consultation</b-card-title
              >
              <b-card-subtitle class="subtitle-fluid mb-5"
                >(Getting Started)</b-card-subtitle
              >
              <b-card-text class="pricing-text-fluid my-3 text-left text-primary">
                <p class="">Advisory Topic</p>
                <p class="">Consultant: Bolanle Sopeju</p>
                <p class="">
                  Description: ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam,
                </p>
              </b-card-text>
              <main class="flex d-flex justify-content-md-center my-2">
                <b-button
                  class="bg-primary mt-4 font-weight-bold mx-3"
                  size="sm"
                  @click="goBack"
                  >More Details</b-button
                >
                <b-button
                  class="bg-white mt-4 text-primary font-weight-bold mx-3 border-primary"
                  size="sm"
                  @click="homepage"
                  >Send Consultant a Message</b-button
                >
              </main> -->
              <div>
                <span class="display-4 font-weight-bolder">1,500 </span>
                <p>Upcoming Consultations</p>
              </div>
            </b-card>

            <b-card class="shadow-lg p-2 pl-4 rounded-card">
              <!-- <b-card-title class="title-fluid mt-3 font-weight-bold"
                >Marketing Consultation</b-card-title
              >
              <b-card-subtitle class="subtitle-fluid mb-5"
                >(Getting Started)</b-card-subtitle
              >
              <b-card-text class="pricing-text-fluid my-3 text-left text-primary">
                <p class="">Advisory Topic</p>
                <p class="">Consultant: Bolanle Sopeju</p>
                <p class="">
                  Description: ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam,
                </p>
              </b-card-text>
              <main class="flex d-flex justify-content-md-center my-2">
                <b-button
                  class="bg-primary mt-4 font-weight-bold mx-3"
                  size="sm"
                  @click="goBack"
                  >More Details</b-button
                >
                <b-button
                  class="bg-white mt-4 text-primary font-weight-bold mx-3 border-primary"
                  size="sm"
                  @click="homepage"
                  >Send Consultant a Message</b-button
                >
              </main> -->
              <div>
                <span class="display-4 font-weight-bolder">Classic </span>
                <p>Plan with the highest subscriptions</p>
              </div>
            </b-card>
          </b-card-group>
        </div>

        <div v-else-if="user.type == 'sme' || 'consultant'">
          <b-text class="mb-4 font-weight-bolder"
            ><b-icon icon="bell-fill" variant="primary"></b-icon>
            <span class="ml-2">Upcoming Consultations</span>
          </b-text>

          <b-card-group deck class="m-2 text-center text-primary">
            <b-card class="shadow-lg p-2 rounded-card">
              <b-card-title class="title-fluid mt-3 font-weight-bold"
                >Marketing Consultation</b-card-title
              >
              <b-card-subtitle class="subtitle-fluid mb-5"
                >(Getting Started)</b-card-subtitle
              >
              <b-card-text
                class="pricing-text-fluid my-3 text-left text-primary"
              >
                <p class="">Advisory Topic</p>
                <p class="">Consultant: Bolanle Sopeju</p>
                <p class="">
                  Description: ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam,
                </p>
              </b-card-text>
              <main class="flex d-flex justify-content-md-center my-2">
                <b-button
                  class="bg-primary mt-4 font-weight-bold mx-3"
                  size="sm"
                  @click="goBack"
                  >More Details</b-button
                >
                <b-button
                  class="bg-white mt-4 text-primary font-weight-bold mx-3 border-primary"
                  size="sm"
                  @click="homepage"
                  >Send Consultant a Message</b-button
                >
              </main>
            </b-card>

            <b-card class="shadow-lg p-2 rounded-card">
              <b-card-title class="title-fluid mt-3 font-weight-bold"
                >Marketing Consultation</b-card-title
              >
              <b-card-subtitle class="subtitle-fluid mb-5"
                >(Getting Started)</b-card-subtitle
              >
              <b-card-text
                class="pricing-text-fluid my-3 text-left text-primary"
              >
                <p class="">Advisory Topic</p>
                <p class="">Consultant: Bolanle Sopeju</p>
                <p class="">
                  Description: ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam,
                </p>
              </b-card-text>
              <main class="flex d-flex justify-content-md-center my-2">
                <b-button
                  class="bg-primary mt-4 font-weight-bold mx-3"
                  size="sm"
                  @click="goBack"
                  >More Details</b-button
                >
                <b-button
                  class="bg-white mt-4 text-primary font-weight-bold mx-3 border-primary"
                  size="sm"
                  @click="homepage"
                  >Send Consultant a Message</b-button
                >
              </main>
            </b-card>
          </b-card-group>

          <b-card-group deck class="m-2 text-center text-primary">
            <b-card class="shadow-lg p-2 rounded-card">
              <b-card-title class="title-fluid mt-3 font-weight-bold"
                >Marketing Consultation</b-card-title
              >
              <b-card-subtitle class="subtitle-fluid mb-5"
                >(Getting Started)</b-card-subtitle
              >
              <b-card-text
                class="pricing-text-fluid my-3 text-left text-primary"
              >
                <p class="">Advisory Topic</p>
                <p class="">Consultant: Bolanle Sopeju</p>
                <p class="">
                  Description: ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam,
                </p>
              </b-card-text>
              <main class="flex d-flex justify-content-md-center my-2">
                <b-button
                  class="bg-primary mt-4 font-weight-bold mx-3"
                  size="sm"
                  @click="goBack"
                  >More Details</b-button
                >
                <b-button
                  class="bg-white mt-4 text-primary font-weight-bold mx-3 border-primary"
                  size="sm"
                  @click="homepage"
                  >Send Consultant a Message</b-button
                >
              </main>
            </b-card>

            <b-card class="shadow-lg p-2 rounded-card">
              <b-card-title class="title-fluid mt-3 font-weight-bold"
                >Marketing Consultation</b-card-title
              >
              <b-card-subtitle class="subtitle-fluid mb-5"
                >(Getting Started)</b-card-subtitle
              >
              <b-card-text
                class="pricing-text-fluid my-3 text-left text-primary"
              >
                <p class="">Advisory Topic</p>
                <p class="">Consultant: Bolanle Sopeju</p>
                <p class="">
                  Description: ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam,
                </p>
              </b-card-text>
              <main class="flex d-flex justify-content-md-center my-2">
                <b-button
                  class="bg-primary mt-4 font-weight-bold mx-3"
                  size="sm"
                  @click="goBack"
                  >More Details</b-button
                >
                <b-button
                  class="bg-white mt-4 text-primary font-weight-bold mx-3 border-primary"
                  size="sm"
                  @click="homepage"
                  >Send Consultant a Message</b-button
                >
              </main>
            </b-card>
          </b-card-group>
        </div>
      </b-col>
    </b-row>
  </b-container-fluid>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      show: true,
    };
  },
  async mounted() {
    await this.getUser();
  },
  methods: {
    getUser() {
      this.user = {
        type: 'sme',
      };
      return this.user;
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

.bg-pricing {
  background-color: #e7f4fe;
}

.rounded-card {
  border-radius: 15px;
  background-color: #e7f4fe;
}
</style>
