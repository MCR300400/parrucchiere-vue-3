<template>
  <div id="app">
    <NavBarView />
    <router-view />
  </div>
</template>

<script>
import NavBarView from './components/NavBarView.vue';

export default {
  name: 'App',
  components: {
    NavBarView
  }
};
</script>

<style>
/* Stili di base per l'intero documento */
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4E342E; /* Marrone Scuro per il testo principale */
  background-color: #F5F5DC; /* Beige per lo sfondo */
}

/* Personalizzazione della barra di scorrimento per WebKit (Chrome, Safari) */
#app::-webkit-scrollbar {
  width: 8px;
}

#app::-webkit-scrollbar-track {
  background: #F5F5DC;
}

#app::-webkit-scrollbar-thumb {
  background: #4E342E;
  border-radius: 8px;
}

#app::-webkit-scrollbar-thumb:hover {
  background: #800020;
}

/* Personalizzazione della barra di scorrimento per Firefox */
html {
  scrollbar-width: thin;
  scrollbar-color: #4E342E #F5F5DC;
}
</style>
