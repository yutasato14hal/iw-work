<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="wrapper">
    <header class="subHeader">
      <div class="subHeaderCon"><RouterLink to="/"><img style="width:200px" src="../assets/logo.png" alt=""></RouterLink></div>
    </header>
    <div class="content">
      <textarea name="newMemo" id="newMemo" cols="30" rows="10"></textarea>
    </div>
    <div class="colors">
      <div class="color red"></div>
      <div class="color blue"></div>
      <div class="color green"></div>
      <div class="color yellow"></div>
      <div class="color pink"></div>
      <div class="color orange"></div>
    </div>
    <RouterLink class="newMemo" to="/memo">メモをさくせい</RouterLink>
  </div>
  <RouterView />
</template>
<script>
export default {
  name:'createMemo',
  components: {
    // Loading,
   
  },
  data() {
    return {
      
    };
  },
  methods: {
  
  },
 
};
</script>

<style scoped>
textarea {
  display: block;
  width: 80%;
  margin: 0 auto;
  margin-top: 10%;
  font-size: 16pt;
}
.colors{
 display: grid;
 grid-template-columns:1fr 1fr 1fr ;
 margin: 0 auto;
 margin-top: 10%;
 gap: 10px;
}
.color{
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background-color: #eee;
  transition: 0.3s;
}
.color:hover{
  color: white;
  opacity: 0.1;
  
}
.red{
  background-color: red;
}
.blue{
  background-color: blue;
}
.green{
  background-color: green;
}
.yellow{
  background-color: yellow;
}
.pink{
  background-color: pink;
}
.orange{
  background-color: orange;
}
.newMemo {
  padding: 1.25rem;
  background-color: rgb(255, 218, 218);
  text-align: center;
  margin-top: auto;
}
</style>
