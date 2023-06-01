const { createApp } = Vue
    createApp({
    data() {
      return {
        message: 'Welcome VueJs!',
        immagine: 'img'
      }
    }
  }).mount('#hello');

  import immagine from "./img/Vue.js_Logo_2.svg.png"

export default {
  data: function () {
    return {
      image: immagine,
    }
  }
}