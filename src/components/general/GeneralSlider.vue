<template>
  <section class="hero-home">
      <div class="swiper-container hero-slider">
        <div class="swiper-wrapper">
          <div class="swiper-slide" id="slide-1"></div>
          <div class="swiper-slide" id="slide-2"></div>
          <div class="swiper-slide" id="slide-3"></div>
          <div class="swiper-slide" id="slide-4"></div>
          <div class="swiper-slide" id="slide-5"></div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'GeneralSlider',
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero-home {
  top: 72px;
}
#slide-1 {
  background-image:url('../../assets/photo/home-horeca.jpg');
}
#slide-2 {
  background-image:url('../../assets/photo/home-productores.jpg');
}
#slide-3 {
  background-image:url('../../assets/photo/home-horeca-2.jpg');
}
#slide-4 {
  background-image:url('../../assets/photo/home-productores-3.jpg');
}
#slide-5 {
  background-image:url('../../assets/photo/home-productores-2.jpg');
}
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
