<template>
  <b-container-fluid class=" bg-services">
    <b-row class="py-5 bg-services">
      <b-col class="m-2">
        <div
          class="services-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"
        >
          <b-card-text class="my-1 text-primary h2 font-weight-bold"
            >What We Offer</b-card-text
          >
        </div>
        <b-card-group deck class="m-4 text-center text-primary">
          <b-card
            img-src="https://res.cloudinary.com/griffintech/image/upload/v1609534435/samples/people-in-a-meeting-1367274_1_jhi20n.png"
            img-alt="Image"
            img-top
            class="rounded-card"
          >
            <b-card-title class="title-fluid font-weight-bold">
              On Demand Business Advisory
            </b-card-title>
            <b-card-text>
              <ul class="text-fluid list-unstyled my-3">
                <li>
                  * Book sessions with HR, Tax, Marketing, Governance
                  Consultants
                </li>
                <li>* Support with drafting plans and documentation</li>
              </ul>
            </b-card-text>
            <!-- <template #footer>
              <small class="text-muted">Last updated 3 mins ago</small>
            </template> -->
          </b-card>

          <b-card
            img-src="https://res.cloudinary.com/griffintech/image/upload/v1609534910/samples/auditorium-benches-chairs-class-207691_1_vhfih3.png"
            img-alt="Image"
            img-top
            class="rounded-card"
          >
            <b-card-title class="title-fluid font-weight-bold">
              Learning Academy
            </b-card-title>
            <b-card-text>
              <ul class="text-fluid list-unstyled my-3">
                <li>
                  * Access to free and paid courses
                </li>
                <li>* Custom learning paths and growth plans</li>
              </ul>
            </b-card-text>
            <!-- <template #footer>
              <small class="text-muted">Last updated 3 mins ago</small>
            </template> -->
          </b-card>

          <b-card
            img-src="https://res.cloudinary.com/griffintech/image/upload/v1609534909/samples/business-people-talking-4427618_1_mn5aos.png"
            img-alt="Image"
            img-top
            class="rounded-card"
          >
            <b-card-title class="title-fluid font-weight-bold">
              Marketplace
            </b-card-title>
            <b-card-text>
              <ul class="text-fluid list-unstyled my-3">
                <li>
                  * Get an online store to display products and services
                </li>
                <li>* Invoicing Sales & customer service apps</li>
              </ul>
            </b-card-text>
            <!-- <template #footer>
              <small class="text-muted">Last updated 3 mins ago</small>
            </template> -->
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="py-2 bg-services">
        <b-card body-class="text-primary text-center">
          <b-card-text class="m-3">
            All these for a single affordable monthly/annual subscription
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container-fluid>
</template>

<script>
export default {};
</script>

<style scoped>
.services-header {
  max-width: 700px;
}

/* .title-fluid {
  font-size: 2vw !important;
}

.text-fluid {
  font-size: 1.3vw !important;
} */

.bg-services {
  background-color: #e7f4fe;
}

.rounded-card {
  border-radius: 25px;
}
</style>
