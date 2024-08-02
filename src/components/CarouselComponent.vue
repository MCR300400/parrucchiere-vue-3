<template>
    <div class="carousel-container">
      <h2>{{ title }}</h2>
      <carousel :perPage="1" navigation pagination :loop="true" class="carousel">
        <slide v-for="(item, index) in items" :key="index">
          <img :src="item.src" :alt="item.alt" class="carousel-image" />
        </slide>
      </carousel>
    </div>
  </template>
  
  <script>
  import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
  
  export default {
    name: 'CarouselSection',
    props: {
      title: String,
      items: Array
    },
    components: {
      Carousel,
      Slide
    }
  };
  </script>
  
  <style scoped>
  .carousel-container {
    margin-bottom: 2rem;
    position: relative;
  }
  
  .carousel-container h2 {
    text-align: center;
    margin-bottom: 1rem;
    color: #4E342E;
  }
  
  .carousel {
    margin: 0 auto;
    max-width: 100%;
  }
  
  .carousel .slide {
    display: flex;
    justify-content: center;
  }
  
  .carousel-image {

    width: 100%;
    max-width: 1200px;
    height: 400px; /* Imposta un'altezza fissa per l'immagine */
    object-fit: cover; /* Mantiene l'aspetto senza distorcere */

  }
  </style>
  