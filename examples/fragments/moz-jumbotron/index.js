new Vue({
  el: "#moz-jumbotron",
  template: `
  <div class="flex items-center w-full justify-center">
    <div class="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="text-4xl mb-2">Kami murni jualan</h1>
      <h3 class="text-xl">Tidak ada social impact, apalagi investor buat bakan duit</h3>
      <div class="flex items-center justify-center m-8">
        <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Beli sekarang
        </button>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      hello: "world"
    };
  }
});
