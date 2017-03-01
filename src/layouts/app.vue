<!--  TODO: ADD STYLES HERE -->

<template>
  <main id="app">
    <div>
      <h2 class="message">Welcome {{firstName}}!</h2>
      <a href="#" @click.prevent="showDialog">Tell us about you!</a>

      <router-view></router-view>

      <dialog id="dialog">
        <h3>Tell us about you!</h3>
        <div>
          <label for="firstName" v-model="firstName">First Name</label>
          <input id="firstName" v-model="firstName" />
        </div>
        <button @click.prevent="hideDialog">close</button>
      </dialog>
    </div>

  </main>
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
