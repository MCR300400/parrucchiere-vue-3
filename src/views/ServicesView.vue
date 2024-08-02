<template>
  <div class="services">
    <h1>I Nostri Servizi</h1>
    <div class="services-list">
      <div class="category" v-for="(category, index) in categorizedServices" :key="index">
        <h2>{{ category.name }}</h2>
        <div class="services-container">
          <div class="service-item" v-for="(service, serviceIndex) in category.services" :key="serviceIndex">
            <h3 @click="openModal(service.imageUrl)">{{ service.name }}</h3>
            <p class="price">{{ service.price }}</p>
            <p>{{ service.description }}</p>
          </div>
        </div>
        <!-- Linea di separazione tra le categorie -->
        <div v-if="index < categorizedServices.length - 1" class="category-separator"></div>
      </div>
    </div>

    <!-- Modal per la visualizzazione dell'immagine -->
    <div v-if="modalImage" class="modal" @click="closeModal">
      <img :src="modalImage" alt="Servizio" class="modal-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesView',
  data() {
    return {
      services: [
        { name: 'Taglio Old School', price: '€20', description: 'Taglio e piega personalizzata per il tuo stile.', category: 'Tagli', imageUrl: 'https://via.placeholder.com/600x400.png?text=Taglio+Old+School' },
        { name: 'Taglio Junior', price: '€15', description: 'Taglio per bambini.', category: 'Tagli', imageUrl: 'https://via.placeholder.com/600x400.png?text=Taglio+Junior' },
        { name: 'Taglio Settimanale', price: '€12', description: 'Offerta per clienti abituali.', category: 'Tagli', imageUrl: 'https://via.placeholder.com/600x400.png?text=Taglio+Settimanale' },
        { name: 'Shampo', price: '€4', description: 'Shampo.', category: 'Shampoo e Trattamenti', imageUrl: 'https://via.placeholder.com/600x400.png?text=Shampo' },
        { name: 'Shampo AntiForfora/AntiCaduta', price: '€6', description: 'Shampo AntiForfora e/o AntiCaduta.', category: 'Shampoo e Trattamenti', imageUrl: 'https://via.placeholder.com/600x400.png?text=Shampo+AntiForfora' },
        { name: 'Trattamento "ABSINTHE"', price: '€12', description: 'Trattamento.', category: 'Shampoo e Trattamenti', imageUrl: 'https://via.placeholder.com/600x400.png?text=Trattamento+ABSINTHE' },
        { name: 'Trattamento "OCTOPUS"', price: '€5', description: 'Trattamento.', category: 'Shampoo e Trattamenti', imageUrl: 'https://via.placeholder.com/600x400.png?text=Trattamento+OCTOPUS' },
        { name: 'Rifinitura Barba', price: '€5', description: 'Vi aggiusteremo la barba.', category: 'Barba', imageUrl: 'https://via.placeholder.com/600x400.png?text=Rifinitura+Barba' },
        { name: 'Barba Corta', price: '€8', description: 'Taglio barba corta.', category: 'Barba', imageUrl: 'https://via.placeholder.com/600x400.png?text=Barba+Corta' },
        { name: 'Barba Lunga', price: '€15', description: 'Taglio barba lunga.', category: 'Barba', imageUrl: 'https://via.placeholder.com/600x400.png?text=Barba+Lunga' },
        { name: 'Rasatura A Lama', price: '€4', description: 'Rasatura con lametta.', category: 'Barba', imageUrl: 'https://via.placeholder.com/600x400.png?text=Rasatura+A+Lama' },
        { name: 'Relax Barba', price: '€8', description: 'Trattamento relax per la barba.', category: 'Barba', imageUrl: 'https://via.placeholder.com/600x400.png?text=Relax+Barba' },
        { name: 'Colore Capelli', price: 'A PARTIRE DA: €20', description: 'Colore capelli.', category: 'Colorazioni', imageUrl: 'https://via.placeholder.com/600x400.png?text=Colore+Capelli' },
        { name: 'Colore Barba', price: 'A PARTIRE DA: €20', description: 'Colore barba.', category: 'Colorazioni', imageUrl: 'https://via.placeholder.com/600x400.png?text=Colore+Barba' },
        { name: 'Decolorazione', price: 'A PARTIRE DA: €50', description: 'Decolorazione.', category: 'Colorazioni', imageUrl: 'https://via.placeholder.com/600x400.png?text=Decolorazione' },
        { name: 'Meches', price: 'A SECONDA DELLA TECNICA', description: 'Meches.', category: 'Colorazioni', imageUrl: 'https://via.placeholder.com/600x400.png?text=Meches' },
        { name: 'Permanente', price: 'A PARTIRE DA: €40', description: 'Permanente capelli.', category: 'Colorazioni', imageUrl: 'https://via.placeholder.com/600x400.png?text=Permanente' }
      ],
      modalImage: null
    };
  },
  computed: {
    categorizedServices() {
      const categories = ['Tagli', 'Shampoo e Trattamenti', 'Barba', 'Colorazioni'];
      return categories.map(category => ({
        name: category,
        services: this.services.filter(service => service.category === category)
      }));
    }
  },
  methods: {
    openModal(imageUrl) {
      this.modalImage = imageUrl;
    },
    closeModal() {
      this.modalImage = null;
    }
  }
}
</script>

<style scoped>
/* Container principale della pagina */
.services {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: #FFF5E1; /* Crema per lo sfondo della sezione */
  min-height: 100vh; /* Assicura che il contenuto sia centrato anche se la pagina è più alta */
}

/* Titolo principale */
.services h1 {
  font-size: 2.8rem;
  color: #4E342E; /* Marrone Scuro per il titolo principale */
  margin-bottom: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
}

/* Contenitore della lista dei servizi */
.services-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 1200px; /* Limita la larghezza massima per migliorare la leggibilità */
  position: relative;
}

/* Linea di separazione prima della prima categoria */
.services-list::before {
  content: "";
  position: absolute;
  top: -2rem; /* Posizione sopra il contenuto */
  left: 0;
  width: 100%;
  height: 0.6vw; /* Altezza della linea con unità viewport width */
  background-color: #4E342E; /* Marrone Scuro per la linea di separazione */
}

/* Categoria */
.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* Assicura che la categoria occupi tutta la larghezza del contenitore */
}

/* Titolo della categoria */
.category h2 {
  font-size: 2rem;
  color: #4E342E; /* Marrone Scuro per il titolo della categoria */
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  width: 95%;
  text-align: center;
  border-bottom: 0.3vw solid #4E342E; /* Marrone Scuro per la linea sotto il titolo della categoria */
}

/* Contenitore dei servizi nella categoria */
.services-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 1000px; /* Limita la larghezza per mantenere un layout coerente */
  margin: 0 auto; /* Centra il contenitore */
}

/* Elemento di servizio */
.service-item {
  padding-bottom: 1rem;
  width: 100%;
  text-align: center;
  border-bottom: 0.1vw solid #ccc; /* Bordo inferiore chiaro per la separazione degli elementi */
}

/* Rimuovi il bordo inferiore dall'ultimo elemento */
.services-container .service-item:last-child {
  border-bottom: none;
}

/* Titolo del servizio */
.service-item h3 {
  font-size: 1.6rem;
  color: #4E342E; /* Marrone Scuro per il titolo del servizio */
  margin-bottom: 0.75rem;
  font-weight: bold;
  cursor: pointer; /* Cambia il cursore per indicare che l'elemento è cliccabile */
}

.service-item h3:hover {
  text-decoration: underline; /* Aggiungi un effetto hover */
}

/* Prezzo del servizio */
.service-item .price {
  font-size: 1.4rem;
  color: #800020; /* Rosso Borgogna per il prezzo */
  margin-bottom: 1rem;
}

/* Descrizione del servizio */
.service-item p {
  font-size: 1rem;
  color: #666;
  margin: 0;
}

/* Linea di separazione tra le categorie */
.category-separator {
  height: 0.6vw; /* Altezza della linea con unità viewport width */
  background-color: #4E342E; /* Marrone Scuro per la linea di separazione tra categorie */
  width: 100%; /* Larghezza della linea */
  margin: 2rem 0; /* Spaziatura sopra e sotto la linea */
}

/* Stili per il modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-image {
  max-width: 90%;
  max-height: 90%;
  border: 2px solid #fff;
  border-radius: 8px;
}

/* Media Queries */
@media (max-width: 1440px) {
  .services h1 {
    font-size: 2.6rem;
  }

  .category h2 {
    font-size: 1.8rem;
  }

  .service-item h3 {
    font-size: 1.4rem;
  }

  .service-item .price {
    font-size: 1.2rem;
  }

  .service-item p {
    font-size: 0.9rem;
  }
}

@media (max-width: 1024px) {
  .services h1 {
    font-size: 2.4rem;
  }

  .category h2 {
    font-size: 1.6rem;
  }

  .service-item h3 {
    font-size: 1.2rem;
  }

  .service-item .price {
    font-size: 1rem;
  }

  .service-item p {
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .services h1 {
    font-size: 2rem;
  }

  .category h2 {
    font-size: 1.6rem;
  }

  .service-item h3 {
    font-size: 1.2rem;
  }

  .service-item .price {
    font-size: 1rem;
  }

  .service-item p {
    font-size: 0.8rem;
  }
}
</style>












