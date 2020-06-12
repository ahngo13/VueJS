<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to 햄릿슈"/>
    <!-- 3. 컴포넌트를 추가한다. -->
    <TodoList :todos="todos"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//1. TodoList.vue를 import 한다.
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    //2. 컴포넌트를 등록한다.
    TodoList
  },
  data(){
    return {
    todos: [
        {id: 1, content: `Vue.js 복습`, isCompleted: false},
        {id: 2, content: `JS 복습`, isCompleted: false},
        {id: 3, content: `알고리즘 복습`, isCompleted: false},
        {id: 4, content: `React 복습`, isCompleted: false}
    ]}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
