new Vue({
  el: "#moz-cookie-popup",
  template: `
  <div>
    <h3 class="title">
      Apakah Anda mau setiap aktivitas Anda dilacak?
    </h3>
    <button @click="confirm">Mau</button>
    <button>Terpaksa mau</button>
  </div>
  `,
  data() {
    return {
      hello: "world"
    };
  },
  methods: {
    confirm() {
      alert("Yeay Anda mau dilacak");
    }
  }
});
