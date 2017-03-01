<!--  TODO: ADD STYLES HERE -->

<template>
  <div id="app">
    <div>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/hero">Hero</router-link>
        <router-link to="/hero-2">Hero 2</router-link>
        <router-link to="/foo">Foo</router-link>
      </nav>
      <main>
        <h2 class="message">Welcome {{firstName}}!</h2>
        <a href="#" @click.prevent="showDialog">Tell us about you!</a>
        <router-view></router-view>
      </main>

      <dialog id="dialog">
        <h3>Tell us about you!</h3>
        <div>
          <label for="firstName" v-model="firstName">First Name</label>
          <input id="firstName" v-model="firstName" />
        </div>
        <button @click.prevent="hideDialog">close</button>
      </dialog>
    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 0,
        firstName: ''
      }
    },
    methods: {
      showDialog () {
        document.querySelector('#dialog').show();
      },
      hideDialog () {
        document.querySelector('#dialog').close();
      },
      showWelcomeMsg () {
        this.count ++;
      }
    }
  }
</script>
