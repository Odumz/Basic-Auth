<template>
  <b-container-fluid>
    <b-row>
      <b-col class="m-2">
        <div
          class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"
        >
          <b-card-text
            style="font-size:5vw;"
            class="my-1 text-primary font-weight-bold"
            >What We Offer</b-card-text
          >
        </div>
        <b-card-group deck class="m-4 text-center">
          <b-card
            img-src="https://picsum.photos/300/300/?image=41"
            img-alt="Image"
            img-top
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
            img-src="https://picsum.photos/300/300/?image=41"
            img-alt="Image"
            img-top
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
            img-src="https://picsum.photos/300/300/?image=41"
            img-alt="Image"
            img-top
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
</style>
