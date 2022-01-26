<template>
  <b-container-fluid class=" bg-services">
    <b-row class="py-5 bg-services">
      <b-col class="m-2">
        <div
          class="services-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"
        >
          <b-card-text class="text-secondary-blue"
            >We believe scaling startups require a radically different kind of
            agency</b-card-text
          >
          <b-card-text class="my-1 text-primary h1 font-weight-bold"
            >We build digital <br />
            products and experiences</b-card-text
          >
          <b-card-text class="letter-space h1 text-secondary">...</b-card-text>
        </div>
        <b-card-group deck class="m-4 text-center text-primary">
          <b-card img-top class="rounded-card">
            <img src="../../assets/branding.svg" alt="branding" width="200px" />
            <b-card-title class="title-fluid font-weight-bold mt-4">
              Branding
            </b-card-title>
            <b-card-text>
              <ul class="text-fluid list-unstyled my-4">
                <li>
                  Our goal is to create unique, digital experiences for brands
                  who are prepared to make an impact.
                </li>
                <li class="mt-3">
                  Learn More
                </li>
              </ul>
            </b-card-text>
            <!-- <template #footer>
              <small class="text-muted">Last updated 3 mins ago</small>
            </template> -->
          </b-card>

          <b-card class="rounded-card">
            <img
              src="../../assets/development.svg"
              alt="branding"
              width="200px"
            />
            <b-card-title class="title-fluid font-weight-bold mt-4">
              Development
            </b-card-title>
            <b-card-text>
              <ul class="text-fluid list-unstyled my-4">
                <li>
                  Our goal is to create unique, digital experiences for brands
                  who are prepared to make an impact.
                </li>
                <li class="mt-3">
                  Learn More
                </li>
              </ul>
            </b-card-text>
            <!-- <template #footer>
              <small class="text-muted">Last updated 3 mins ago</small>
            </template> -->
          </b-card>

          <b-card class="rounded-card">
            <img
              src="../../assets/ux-design.svg"
              alt="ux-design"
              width="200px"
            />
            <b-card-title class="title-fluid font-weight-bold mt-4">
              UX Design
            </b-card-title>
            <b-card-text>
              <ul class="text-fluid list-unstyled my-4">
                <li>
                  Our goal is to create unique, digital experiences for brands
                  who are prepared to make an impact.
                </li>
                <li class="mt-3">
                  Learn More
                </li>
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
