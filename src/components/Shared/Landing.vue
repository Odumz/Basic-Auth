<template>
  <b-container-fluid class="main-body">
    <b-row align-v="center" class="d-md-flex">
      <b-col cols="12">
        <b-card
          overlay
          img-alt="Card image"
          img-fluid-grow
          text-variant="primary"
          class="mt-3 img-gradient d-md-flex grid"
        >
          <b-col cols="12" lg="7">
            <img src="../../assets/landing.png" alt="" class="hero-gradient " />
          </b-col>
          <b-col cols="12" lg="5" class="centered">
            <div class="text-bg">
              <b-card-title
                class="px-lg-5 text-center px-3 mt-2 font-weight-bold text-break text-md-left display-lg-1 display-4"
              >
                We build digital experiences.
              </b-card-title>
              <b-card-text
                class="col-lg-9 col-10 text-break py-1 px-lg-5 px-3 text-center text-md-left"
                style="font-size: 1.1em;"
              >
                Having a well-planned, well-executed online strategy is the key
                to online success.
              </b-card-text>
              <div class="d-flex justify-content-center">
                <b-button
                  variant="primary"
                  class="py-2 px-lg-5 ml-n7 px-3"
                  href="/auth/register"
                  ><p class="h4">Discover</p></b-button
                >
              </div>
            </div>
          </b-col>
        </b-card>
      </b-col>
    </b-row>
  </b-container-fluid>
</template>

<script>
export default {
  name: 'Landing',
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

.centered {
  position: absolute;
  top: 70%;
  left: 80%;
  transform: translate(-70%, -10%);
}

@media screen and (min-width: 640px) {
  .centered {
    top: 50%;
  }
}

@media screen and (max-width: 425px) {
  .hero-gradient {
    height: 350px !important;
    transform: translate(0%, 40%) !important;
  }

  .img-gradient {
    height: 150vh !important;
  }

  .centered {
    // top: 70%;
    // left: 80%;
    transform: translate(-78%, -35%);
  }
}

@media screen and (min-width: 426px) {
  .hero-gradient {
    height: 350px !important;
    transform: translate(35%, 25%) !important;
  }

  .img-gradient {
    height: 120vh !important;
  }

  .centered {
    // top: 70%;
    // left: 80%;
    transform: translate(-78%, 55%);
  }
}

@media screen and (min-width: 641px) {
  .hero-gradient {
    height: 350px !important;
    transform: translate(35%, 25%) !important;
  }

  .img-gradient {
    height: 120vh !important;
  }

  .centered {
    // top: 70%;
    // left: 80%;
    transform: translate(-78%, 90%);
  }
}

@media screen and (min-width: 769px) {
  .hero-gradient {
    height: 350px !important;
    transform: translate(55%, 25%) !important;
  }

  .img-gradient {
    height: 120vh !important;
  }

  .ml-n7 {
    margin-left: -7rem !important;
  }

  .centered {
    // top: 70%;
    // left: 80%;
    transform: translate(-75%, 60%);
  }
}

@media screen and (min-width: 1043px) {
  .hero-gradient {
    height: 500px !important;
    transform: translate(15%, 15%) !important;
  }

  .img-gradient {
    height: 100vh !important;
  }

  .centered {
    // top: 70%;
    // left: 80%;
    transform: translate(-78%, -10%);
  }
}

@media screen and (min-width: 1281px) {
  .hero-gradient {
    height: 520px !important;
    transform: translate(15%, 15%) !important;
  }

  .centered {
    // top: 70%;
    // left: 80%;
    transform: translate(-78%, -20%);
  }
}

@media screen and (min-width: 1366px) {
  .hero-gradient {
    transform: translate(15%, 15%) !important;
  }

  .centered {
    // top: 70%;
    // left: 80%;
    transform: translate(-78%, -10%);
  }
}

.img-gradient {
  background-image: url('../../assets/hero.jpg');
  height: 100vh;
  width: 100vw;
  background-size: cover;
}

.hero-gradient {
  position: absolute;
  height: 500px;
  top: 70%;
  transform: translate(25%, 18%);
}

.letter-space {
  letter-spacing: 2px;
}

input::placeholder {
  color: #6398da !important;
}
</style>
