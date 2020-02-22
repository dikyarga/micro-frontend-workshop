new Vue({
  el: "#moz-cookie-popup",
  template: `
  <div class="flex w-full absolute bottom-0 left-0 justify-center">
    <div class="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h3 class="text-2xl mb-4">Apakah setiap aktivitas Anda ingin dilacak?</h3>
      <div class="flex items-center justify-center">
        <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline" type="button" @click="confirm">
          Mau, lacak saya
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-orange-500 ml-2 hover:text-orange-800" href="#">
          tutup website ini
        </a>
      </div>
    </div>
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
