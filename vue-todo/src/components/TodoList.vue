<script setup>
import { ref } from "vue";

const todos = ref([]);
const input = ref("");

const addTodo = () => {
  todos.value.push({
    text: input.value,
    done: false,
  });
  input.value = "";
};

const removeTodo = (index) => {
  todos.value.splice(index, 1);
};
</script>


<template>
  <div id="main-todos">
    <form @submit.prevent="addTodo">
      <input v-model="input" type="text" placeholder="What needs to be done?" />
      <button id="add-button" type="submit">Add</button>
    </form>

    <div class="list-todo">
      <div id="main-todo" v-for="(todo, index) in todos" :key="index">
        <div id="todo-text">{{ todo.text }}</div>
        <div id="todo-done">Tamamlandı: {{ todo.done }}</div>
        <button id="delete-button" @click="removeTodo(index)">Delete</button>
      </div>
    </div>
  </div>
</template>

<style >
form {
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  width: 30%;
  padding: 10px;
  font-size: 1.2rem;
  display: flex;
  border-radius: 15px;
}

#add-button {
  width: 10%;
  padding: 10px;
  font-size: 1.2rem;
  display: flex;
  border-radius: 15px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
}

.list-todo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#main-todo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  border: 1px solid black;
  width: 40%;
  height: 50px;
  padding: 10px;
  border-radius: 15px;

  background-color: #f5f5f5;
}

#delete-button {
  width: 20%;
  padding: 10px;
  font-size: 1.2rem;
  display: flex;
  border-radius: 15px;
  text-align: center;
  justify-content: center;
  align-items: center;
}
</style>
