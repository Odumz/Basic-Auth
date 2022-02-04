<template>
  <main class="main">
    <b-container-fluid
      class="main-body vh-100 d-flex flex-column justify-content-center"
    >
      <b-row align-v="center" class="flex justify-content-center mt-n2">
        <b-col class="flex d-flex justify-content-center">
          <img
            src="../../../assets/error.jpg"
            class="new-width"
            alt="Error image"
          />
        </b-col>
      </b-row>
      <b-row align-v="center" class="flex justify-content-center mt-n4 mb-5">
        <main class="">
          <b-button
            class="bg-white mt-4 border-primary text-primary font-weight-bold mx-3"
            size="lg"
            href="/"
            >Homepage</b-button
          >
          <b-button
            class="bg-primary mt-4 border-primary font-weight-bold mx-3"
            size="lg"
            href="/"
            >Go back</b-button
          >
        </main>
      </b-row>
    </b-container-fluid>
  </main>
</template>

<script>
export default {
  name: 'Error',
};
</script>

<style lang="scss" scoped>
@media screen and (max-height: 750px) {
  .main {
    min-height: calc(100vh - 5px) !important;
    overflow-x: hidden;
  }
}

@media screen and (max-height: 750px) {
  .new-width {
    width: 55vw !important;
  }
}

.main {
  max-width: 100vw !important;
  overflow-x: hidden;
}

.card {
  background-color: transparent;
  border: none;
}
</style>
