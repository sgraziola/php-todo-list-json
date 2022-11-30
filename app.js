const { createApp } = Vue;

createApp({
  data() {
    return {
      todoList: [],
      apiUrl: "server.php",
      todo: "",
    };
  },
  methods: {
    readTodos(url) {
      axios
        .get(url)
        .then((response) => {
          //console.log(response);
          this.todoList = response.data;
        })
        .catch((err) => {
          console.error(err.message);
        });
    },
    addTodo() {
      const data = {
        todo: this.todo,
      };
      axios
        .post(this.apiUrl, data, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((resp) => {
          //console.log(resp);
          this.todoList = resp.data;
        })
        .catch((e) => {
          console.error(e.message);
        });
    },
  },
  mounted() {
    this.readTodos(this.apiUrl);
  },
}).mount("#app");
