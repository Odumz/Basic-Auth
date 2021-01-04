<template>
  <main>
    <Header />
    <Landing />
    <About />
    <Footer />
  </main>
</template>

<script>
import Header from '../../components/Shared/Header';
import Landing from '../../components/Shared/Landing';
import About from '../../components/Shared/About';
import Footer from '../../components/Shared/Footer';
export default {
  components: {
    Header,
    Landing,
    About,
    Footer,
  },
};
</script>

<style scoped>
main {
  max-width: 100vw !important;
  overflow-x: hidden;
}
</style>
