<script lang="ts">
export default {
  name: 'Home',
  data() {
    const brands = [
      //   {
      //     name: 'travelgo',
      //     img:
      //       'https://res.cloudinary.com/griffintech/image/upload/v1643710008/samples/c1_qnhkoh.png',
      //   },
      //   {
      //     name: 'digitalpoint',
      //     img:
      //       'https://res.cloudinary.com/griffintech/image/upload/v1643710008/samples/c5_uvow1m.png',
      //   },
      //   {
      //     name: 'peoplegroup',
      //     img:
      //       'https://res.cloudinary.com/griffintech/image/upload/v1643710008/samples/c6_fx2ted.png',
      //   },
      //   {
      //     name: 'lawfirm',
      //     img:
      //       'https://res.cloudinary.com/griffintech/image/upload/v1643710007/samples/c4_qzakae.png',
      //   },
      //   {
      //     name: 'artfocus',
      //     img:
      //       'https://res.cloudinary.com/griffintech/image/upload/v1643710007/samples/c2_jrjpny.png',
      //   },
      //   {
      //     name: 'company',
      //     img:
      //       'https://res.cloudinary.com/griffintech/image/upload/v1643710007/samples/c3_suzugv.png',
      //   },
      {
        name: 'design',
        img:
          'https://res.cloudinary.com/odumz/image/upload/v1666515419/projects/l21_w3f061.png',
      },
      {
        name: 'apple',
        img:
          'https://res.cloudinary.com/odumz/image/upload/v1666515419/projects/l23_q1xfpv.png',
      },
      {
        name: 'abstract',
        img:
          'https://res.cloudinary.com/odumz/image/upload/v1666515419/projects/l24_sng8t0.png',
      },
      {
        name: 'asome',
        img:
          'https://res.cloudinary.com/odumz/image/upload/v1666515419/projects/l26_uctxoo.png',
      },
      {
        name: 'artfocus',
        img:
          'https://res.cloudinary.com/odumz/image/upload/v1666515419/projects/l25_nqhpw2.png',
      },
      {
        name: 'studio',
        img:
          'https://res.cloudinary.com/odumz/image/upload/v1666515419/projects/l22_tyabiw.png',
      },
    ];

    return {
      brands,
    };
  },
};
</script>

<template lang="en">
<div class="row row-cols-lg-6 row-cols-md-3 row-cols-2 justify-content-around align-items-center">
    <div v-for="(brand, index) in brands" :key="index" class="col">
      <img :src="brand.img" :alt="brand.name" width="150px" class="rounded shadow-md opacity-75 hover:opacity-100 my-md-5 my-3 mx-3">
    </div>
</div>

</template>

<style scoped></style>
