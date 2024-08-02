<template>
  <div class="home">
    <!-- Sezione del logo -->
    <section class="logo-section">
      <img src="@/assets/logo.png" alt="Logo del Salone" class="logo-image" />
    </section>

    <!-- Sezione di benvenuto -->
    <section class="welcome">
      <h1>Benvenuti a Barber Club 150-152</h1>
      <p>
        Scopri il nostro salone, dove l'eleganza e il servizio di alta qualità
        si incontrano per offrirti un'esperienza di bellezza unica. Il nostro
        team di esperti è pronto a coccolarti e a trasformare il tuo look con
        passione e professionalità.
      </p>
      
      <!-- Carosello del negozio -->
      <CarouselSection title="Il Nostro Salone" :items="storeItems" />
      
      <!-- Carosello tagli maschio -->
      <CarouselSection title="Tagli Maschio" :items="maleCuts" />
      
      <!-- Carosello tagli donna -->
      <CarouselSection title="Tagli Donna" :items="femaleCuts" />
    </section>

    <!-- Sezione orari di apertura -->
    <section class="hours">
      <h2>Orari di Apertura</h2>
      <table>
        <thead>
          <tr>
            <th>Giorno</th>
            <th>Mattina</th>
            <th>Pomeriggio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(hours, day) in openingHours" :key="day">
            <td>{{ day }}</td>
            <td v-if="!hours.continuous">{{ hours.morning || 'Chiuso' }}</td>
            <td v-if="!hours.continuous">{{ hours.afternoon || 'Chiuso' }}</td>
            <td v-if="hours.continuous" :colspan="2">{{ hours.continuous }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Sezione dei contatti -->
    <section class="contact">
      <h2>Contatti</h2>
      <p>Per ulteriori informazioni o per prenotare un appuntamento, puoi contattarci ai seguenti recapiti:</p>
      <ul>
        <li><strong>Telefono:</strong> <a href="tel:+390758507197">075 8507197</a></li>
        <li><strong>Instagram:</strong> <a href="https://www.instagram.com/150_152_barberclub" target="_blank" rel="noopener noreferrer">@150_152_barberclub</a></li>
      </ul>
    </section>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

const CarouselSection = {
  props: {
    title: String,
    items: Array
  },
  template: `
    <div class="carousel-container">
      <h2>{{ title }}</h2>
      <carousel :perPage="1" navigation pagination :loop="true" class="carousel">
        <slide v-for="(item, index) in items" :key="index">
          <img :src="item.src" :alt="item.alt" class="carousel-image" />
        </slide>
      </carousel>
    </div>
  `,
  components: {
    Carousel,
    Slide
  }
};

export default {
  components: {
    CarouselSection
  },
  data() {
    return {
      storeItems: [
        { src: 'https://via.placeholder.com/1200x600.png?text=Salone+1', alt: 'Foto del Salone 1' },
        { src: 'https://via.placeholder.com/1200x600.png?text=Salone+2', alt: 'Foto del Salone 2' },
        { src: 'https://via.placeholder.com/1200x600.png?text=Salone+3', alt: 'Foto del Salone 3' },
        { src: 'https://via.placeholder.com/1200x600.png?text=Salone+4', alt: 'Foto del Salone 4' },
        { src: 'https://via.placeholder.com/1200x600.png?text=Salone+5', alt: 'Foto del Salone 5' },
      ],
      maleCuts: [
        { src: 'https://via.placeholder.com/1200x600.png?text=Taglio+Maschio+1', alt: 'Taglio Maschio 1' },
        { src: 'https://via.placeholder.com/1200x600.png?text=Taglio+Maschio+2', alt: 'Taglio Maschio 2' },
        { src: 'https://via.placeholder.com/1200x600.png?text=Taglio+Maschio+3', alt: 'Taglio Maschio 3' },
        { src: 'https://via.placeholder.com/1200x600.png?text=Taglio+Maschio+4', alt: 'Taglio Maschio 4' },
        { src: 'https://via.placeholder.com/1200x600.png?text=Taglio+Maschio+5', alt: 'Taglio Maschio 5' }
      ],
      femaleCuts: [
        { src: 'https://via.placeholder.com/1200x600.png?text=Taglio+Donna+1', alt: 'Taglio Donna 1' },
        { src: 'https://via.placeholder.com/1200x600.png?text=Taglio+Donna+2', alt: 'Taglio Donna 2' },
        { src: 'https://via.placeholder.com/1200x600.png?text=Taglio+Donna+3', alt: 'Taglio Donna 3' },
        { src: 'https://via.placeholder.com/1200x600.png?text=Taglio+Donna+4', alt: 'Taglio Donna 4' },
        { src: 'https://via.placeholder.com/1200x600.png?text=Taglio+Donna+5', alt: 'Taglio Donna 5' }
      ],
      openingHours: {
        Lunedì: { continuous: 'Chiuso' },
        Martedì: { morning: '10:00 - 13:00', afternoon: '15:00 - 19:00' },
        Mercoledì: { morning: '10:00 - 13:00', afternoon: '15:00 - 19:00' },
        Giovedì: { continuous: '10:00 - 19:00' },
        Venerdì: { continuous: '10:00 - 19:00' },
        Sabato: { continuous: '10:00 - 19:00' },
        Domenica: { continuous: 'Chiuso' }
      }
    };
  }
};
</script>

<style scoped>
/* Sezione del logo */
.logo-section {
  text-align: center;
  padding: 2rem 0;
}

.logo-image {
  max-width: 100%;
  height: auto;
}

/* Sfondo della pagina */
.home {
  background-color: #FFF5E1; /* Crema per lo sfondo della pagina */
  padding: 2rem;
}

/* Stili per i caroselli */
.carousel-container {
  margin-bottom: 2rem;
  position: relative;
}

.carousel-container h2 {
  text-align: center;
  margin-bottom: 1rem;
  color: #4E342E; /* Marrone Scuro per il titolo del carosello */
}

.carousel {
  margin: 0 auto;
  max-width: 100%;
}

.carousel .slide {
  display: flex;
  justify-content: center;
}

/* Immagini nel carosello */
.carousel .slide img {
  border-radius: 8px;
  width: 100%; /* Adatta la larghezza dell'immagine */
  max-width: 1200px; /* Limita la larghezza massima */
  height: auto; /* Mantiene l'aspetto originale delle immagini */
  aspect-ratio: 16/9; /* Rapporto larghezza/altezza 16:9 per immagini più larghe */
  border: 3px solid #4E342E; /* Marrone Scuro per il bordo delle immagini del carosello */
}

/* Stili per la sezione degli orari di apertura */
.hours {
  padding: 2rem;
  margin: 2rem auto;
  max-width: 80%;
  border-radius: 12px;
}

.hours h2 {
  margin-bottom: 1rem;
  color: #4E342E; /* Marrone Scuro per il titolo della sezione */
  text-align: center;
}

.hours table {
  width: 100%;
  border-collapse: collapse;
}

.hours th, .hours td {
  border: 1px solid #4E342E; /* Marrone Scuro per i bordi della tabella */
  padding: 0.75rem;
  text-align: center;
  font-size: 1rem;
}

.hours th {
  background-color: #800020; /* Rosso Borgogna per lo sfondo dell'intestazione */
  color: #FFF; /* Colore del testo dell'intestazione */
}

.hours tr:nth-child(even) td {
  background-color: #F5F5DC; /* Beige per le righe alternate della tabella */
}

/* Stili per la sezione dei contatti */
.contact {
  padding: 2rem;
  background-color: #4E342E; /* Marrone Scuro per lo sfondo della sezione */
  color: #FFF; /* Colore del testo per contrastare lo sfondo */
  text-align: center;
  margin: 2rem auto;
  max-width: 80%;
  border-radius: 12px;
}

.contact h2 {
  margin-bottom: 1rem;
}

.contact ul {
  list-style: none;
  padding: 0;
}

.contact li {
  margin-bottom: 0.5rem;
}

.contact a {
  color: #F5F5DC; /* Beige per i link */
  text-decoration: none;
}

.contact a:hover {
  text-decoration: underline;
}

/* Media Queries per dispositivi più grandi */
@media (min-width: 769px) {
  .carousel {
    max-width: 800px;
  }

  .hours, .contact {
    max-width: 60%;
  }
}
</style>
