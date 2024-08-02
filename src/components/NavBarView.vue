<template>
  <header>
    <nav class="navbar">
      <div class="navbar-logo">
        <img src="../assets/logo.png" alt="Logo" />
      </div>
      <div class="navbar-brand">
        <span @click="toggleMenu" class="navbar-toggle">BARBER CLUB 150-152</span>
      </div>
      <ul class="navbar-menu" :class="{ 'is-active': menuActive }">
        <li v-if="$route.path !== '/'" class="navbar-item">
          <router-link to="/">Home</router-link>
        </li>
        <li v-if="$route.path !== '/services'" class="navbar-item">
          <router-link to="/services">Servizi</router-link>
        </li>
        <li v-if="$route.path !== '/about'" class="navbar-item">
          <router-link to="/about">Chi Siamo</router-link>
        </li>
        <li v-if="$route.path !== '/contact'" class="navbar-item">
          <router-link to="/contact">Contatti</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBarView',
  data() {
    return {
      menuActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    }
  }
};
</script>

<style scoped>
/* Navbar container */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #4E342E; /* Marrone Scuro per lo sfondo della nav */
  color: #F5F5DC; /* Beige per il testo */
  position: relative;
}

/* Navbar logo */
.navbar-logo {
  margin-right: 2rem; /* Spazio tra il logo e il testo del brand */
}

.navbar-logo img {
  height: 100%; /* Imposta l'altezza dell'immagine al 100% dell'altezza della navbar */
  width: auto; /* Mantieni le proporzioni dell'immagine */
  max-height: 20px; /* Imposta un'altezza massima per il logo */
}

/* Brand name */
.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #F5F5DC; /* Beige per il testo del brand */
  cursor: pointer;
}

/* Navbar toggle button */
.navbar-toggle {
  font-size: 1.5rem;
  background: none;
  color: #F5F5DC; /* Beige per il testo del toggle */
  cursor: pointer;
  padding: 0.5rem;
}

/* Navbar menu */
.navbar-menu {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

/* Navbar items */
.navbar-item {
  margin-left: 2rem;
}

.navbar-item a {
  color: #F5F5DC; /* Beige per i link */
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
}

/* Navbar item hover effect */
.navbar-item a:hover {
  color: #800020; /* Rosso Borgogna per l'hover dei link */
}



@media (max-width: 1024px) {
  .navbar {
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-logo {
    margin-right: 0; /* Resetta il margine del logo in modalità mobile */
    margin-bottom: 1rem; /* Distanza tra il logo e il menu su dispositivi mobili */
    display: none;
  }

  .navbar-menu {
    display: none; /* Hide menu by default on tablets and small devices */
    flex-direction: column;
    width: 100%;
    padding: 0;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #4E342E; /* Marrone Scuro per lo sfondo del menu */
    z-index: 1; /* Ensure the menu is above other content */
  }

  .navbar-menu.is-active {
    display: flex; /* Show menu when active */
  }

  .navbar-item {
    margin: 0.5rem 0;
    width: 100%;
    text-align: center;
  }

  .navbar-item a {
    display: block;
    padding: 0.5rem;
    font-size: 1.2rem;
  }

  .navbar-toggle {
    display: block; /* Show the toggle button on tablets and small devices */
  }
}

/* Ensure the toggle button is hidden on larger screens */
@media (min-width: 1025px) {
  .navbar-toggle {
    display: none; /* Hide toggle button on larger devices */
  }

  .navbar-menu {
    display: flex; /* Ensure the menu is displayed on larger screens */
    margin-left: auto; /* Push the menu to the right */
  }
}
</style>
