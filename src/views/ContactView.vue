<template>
  <section class="contact">
    <h2>Contattaci</h2>
    <p>
      Per prenotare un appuntamento o per ulteriori informazioni, contattaci al numero <strong>075-8507197</strong> o inviaci un'email a <a href="mailto:info@parrucchiere.com">info@parrucchiere.com</a>.
    </p>
    <div class="divider"></div>
    <p>
      <strong>Instagram:</strong> <a href="https://www.instagram.com/150_152_barberclub" target="_blank" rel="noopener noreferrer">@150_152_barberclub</a>
    </p>
    <div class="divider"></div>
    <p>
      <strong>Parrucchieri:</strong> <a href="https://www.instagram.com/martin_parretti" target="_blank" rel="noopener noreferrer">@martin_parretti</a>, <a href="https://www.instagram.com/matteo_pasqua" target="_blank" rel="noopener noreferrer">@matteo_pasqua</a>
    </p>
    <div class="divider"></div>
    <p>
      <strong>Dove Siamo:</strong> Via Antonio Gramsci 150, Corciano (PG)
    </p>
  </section>
</template>

<script>
export default {
  name: 'ContactView'
}
</script>

<style scoped>
.contact {
  padding: 2rem;
  text-align: center;
  margin: 2rem auto;
  max-width: 80%; /* Larghezza massima per coerenza */
  background-color: #FFF5E1; /* Crema per lo sfondo della sezione */
  border-radius: 8px; /* Arrotondamento degli angoli */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ombra leggera per un effetto di sollevamento */
}

.contact h2 {
  margin-bottom: 1.5rem;
  color: #800020; /* Rosso Borgogna per il titolo */
  font-size: 2rem; /* Dimensione del font simile agli altri titoli */
  font-weight: bold; /* Grassetto per maggiore impatto */
  text-transform: uppercase; /* Testo in maiuscolo per un look più forte */
}

.contact p {
  font-size: 1.2rem;
  color: #4E342E; /* Marrone Scuro per il testo */
  margin: 1rem 0; /* Maggiore spaziatura tra i paragrafi */
}

.contact a {
  color: #800020; /* Rosso Borgogna per i link */
  text-decoration: none;
  transition: color 0.3s, text-decoration 0.3s; /* Transizione per effetto hover */
}

.contact a:hover {
  color: #4E342E; /* Marrone Scuro per l'hover dei link */
  text-decoration: underline; /* Sottolineatura al passaggio del mouse */
}

.contact strong {
  color: #800020; /* Rosso Borgogna per i testi forti */
}

.divider {
  margin: 1.5rem 0; /* Spaziatura sopra e sotto il divisore */
  border-top: 1px solid #F5F5DC; /* Beige per il bordo del divisore */
}
</style>
