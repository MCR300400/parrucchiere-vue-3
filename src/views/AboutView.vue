<template>
  <div class="about">
    <h1>Chi Siamo</h1>
    <div class="about-content">
      <p>
        Benvenuti nel nostro salone di bellezza! Siamo un team di professionisti
        dedicati a fornirvi il miglior servizio di parrucchiere possibile. La nostra
        missione è di offrirvi un'esperienza unica, personalizzata per soddisfare le
        vostre esigenze e superare le vostre aspettative.
      </p>
      <p>
        Da anni operiamo nel settore, con passione e dedizione, e siamo sempre
        aggiornati sulle ultime tendenze e tecniche. Il nostro obiettivo è farvi
        sentire speciali e coccolati ogni volta che varcate la nostra porta.
      </p>
    </div>
  
    <div class="team">
      <h2>Il Nostro Team</h2>
      <div class="team-member" v-for="(member, index) in teamMembers" :key="index">
        <img :src="member.photo" :alt="member.name" class="team-photo" />
        <div class="team-info">
          <h3>{{ member.name }}</h3>
          <p class="position">{{ member.position }}</p>
          <p>{{ member.description }}</p>
          <a :href="member.instagram" target="_blank" class="instagram-link">Segui su Instagram</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      teamMembers: [
        {
          name: 'Martin Parretti',
          position: 'Master Stylist',
          description: 'Martin è un esperto di tagli e colorazioni con anni di esperienza nel settore. La sua passione per il dettaglio e le tecniche innovative lo rendono un maestro nel suo campo.',
          photo: 'https://example.com/path/to/martin-photo.jpg', // Inserisci il link corretto
          instagram: 'https://www.instagram.com/martin_parretti' // Profilo Instagram di Martin Parretti
        },
        {
          name: 'Matteo Pasqualoni',
          position: 'Senior Stylist',
          description: 'Matteo è un stilista senior noto per la sua creatività e abilità nel design dei capelli. La sua esperienza e attenzione ai dettagli assicurano un look unico e personalizzato per ogni cliente.',
          photo: 'https://example.com/path/to/matteo-photo.jpg', // Inserisci il link corretto
          instagram: 'https://www.instagram.com/matteo_pasqua' // Profilo Instagram di Matteo Pasqualoni
        }
      ]
    };
  }
}
</script>

<style scoped>
/* Container principale della pagina */
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: #FFF5E1; /* Crema per lo sfondo della pagina */
  min-height: 100vh; /* Assicura che il contenuto sia centrato anche se la pagina è più alta */
}

/* Titolo principale */
.about h1 {
  font-size: 2.8rem;
  color: #4E342E; /* Marrone Scuro per il titolo principale */
  margin-bottom: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
}

/* Contenuto dell'about */
.about-content {
  max-width: 800px;
  margin-bottom: 3rem;
  font-size: 1.2rem;
  color: #666;
}

/* Sezione del team */
.team {
  width: 100%;
  max-width: 1200px;
}

/* Titolo della sezione del team */
.team h2 {
  font-size: 2.4rem;
  color: #4E342E; /* Marrone Scuro per il titolo della sezione del team */
  margin-bottom: 2rem;
}

/* Membri del team */
.team-member {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 2rem;
}

/* Foto del membro del team */
.team-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1.5rem;
  background: #ddd; /* Colore di sfondo per immagini mancanti */
}

/* Informazioni del membro del team */
.team-info {
  max-width: 600px;
  text-align: left;
}

/* Nome e posizione del membro del team */
.team-info h3 {
  font-size: 1.8rem;
  color: #4E342E; /* Marrone Scuro per il nome del membro del team */
  margin-bottom: 0.5rem;
}

.team-info .position {
  font-size: 1.4rem;
  color: #800020; /* Rosso Borgogna per la posizione del membro del team */
  margin-bottom: 1rem;
}

/* Descrizione del membro del team */
.team-info p {
  font-size: 1rem;
  color: #666;
  margin: 0;
}

/* Link Instagram */
.instagram-link {
  display: inline-block;
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
  margin-top: 0.5rem;
}

.instagram-link:hover {
  text-decoration: underline;
}

/* Media Queries */
@media (max-width: 768px) {
  .about h1 {
    font-size: 2.4rem;
  }

  .about-content {
    font-size: 1rem;
  }

  .team h2 {
    font-size: 2rem;
  }

  .team-member {
    flex-direction: column;
    align-items: center;
  }

  .team-photo {
    margin-bottom: 1rem;
  }

  .team-info {
    text-align: center;
  }
}
</style>
