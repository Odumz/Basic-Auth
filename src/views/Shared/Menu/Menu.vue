<template>
  <main>
    <Header />
    <div class="container-fluid">
      <div class="row flex justify-content-center vh-100 align-items-center">
        <div class="display-4">
          <p>Welcome to your <span class="text-primary">dashboard!</span></p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from '../../../components/Shared/Header';
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1053px) {
  .custom-nav {
    position: absolute;
    left: -50px;
    transition: 300ms ease all;
  }

  figure {
    width: 170% !important;
  }
}
@media screen and (max-height: 750px) {
  .main-body {
    min-height: calc(100vh - 5px) !important;
    overflow-x: hidden;
  }
}

main {
  max-width: 100vw !important;
  overflow-x: hidden;
}

// .bg-menu {
//   background-color: #e7f4fe;
// }

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.text-sm {
  font-size: 0.8rem;
}

.display-5 {
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.img-gradient {
  background-image: linear-gradient(
      84.81deg,
      #111111 0.05%,
      rgba(17, 17, 17, 0.55) 41.25%
    ),
    url('https://res.cloudinary.com/griffintech/image/upload/v1608201552/samples/pexels-jopwell-2422280_sze4ek.jpg');
  height: 100vh;
  background-size: cover;
}

.router-link-exact-active,
.router-link-active span {
  background: #6398da !important;
  border-radius: 10px;
  font-weight: 500;
  /* identical to box height */
  color: #fff;
}
</style>
