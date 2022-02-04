<template>
  <main>
    <Header />
    <Landing class="mb-5" />
    <!-- <About /> -->
    <Brands />
    <Footer />
  </main>
</template>

<script>
import Header from '../../components/Shared/Header';
import Landing from '../../components/Shared/Landing';
// import About from '../../components/Shared/About';
import Footer from '../../components/Shared/Footer';
import Brands from '../../components/Shared/Brands';

export default {
  name: 'Home',
  components: {
    Header,
    Landing,
    // About,
    Footer,
    Brands,
  },
};
</script>

<style scoped>
main {
  max-width: 100vw !important;
  overflow-x: hidden;
}
</style>
