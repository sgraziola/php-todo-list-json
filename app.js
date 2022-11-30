const { createApp } = Vue;

createApp({
  data() {
    return {
      todos: [],
      apiUrl: "server.php",
    };
  },
  methods: {
    readTodos(url) {
      axios
        .get(url)
        .then((response) => {
          console.log(response);
          this.todos = response.data;
        })
        .catch((err) => {
          console.error(err.message);
        });
    },
  },
  mounted() {
    this.readTodos(this.apiUrl);
  },
}).mount("#app");
