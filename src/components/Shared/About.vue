<template>
  <main>
    <Services />
    <!-- <Pricing /> -->
  </main>
</template>

<script>
import Services from '../../components/Shared/Services';
// import Pricing from '../../components/Shared/Pricing';
export default {
  components: {
    Services,
    // Pricing,
  },
};
</script>

<style scoped>
main {
  max-width: 100vw !important;
  overflow-x: hidden;
}
</style>
