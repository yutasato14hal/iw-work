<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <div class="wrapper">
    <header class="subHeader">
      <div class="subHeaderCon"><RouterLink to="/"><img style="width:200px" src="../assets/logo.png" alt=""></RouterLink></div>
    </header>
    <div class="memos">
  <div class="memo" :class="memo.color" v-for="memo in memos" :key="memo.text">
    <p>{{ memo.text }}</p>
  </div>
</div>
    <RouterLink class="newMemo" to="/createMemo">あたらしくメモる</RouterLink>
  </div>
  <RouterView />
</template>
<script>
export default {
  name:'memo',
  data() {
    return {
      memos: [],
    };
  },
  mounted() {
    // ローカルストレージからメモを取得してセット
    this.memos = JSON.parse(localStorage.getItem('memos')) || [];
  },
};

</script>

<style scoped>

.memos {
  margin-top: 20%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1px;
}
.subHeaderCon h2 {
  margin: 0;
}
.memo {
  width: 100%;
  min-height: 100px;
  margin: 0 auto;
  max-width: 40%;
  background-color: #fff;
  border-radius: 5px;
}
.newMemo {
  padding: 1.25rem;
  background-color: rgb(255, 218, 218);
  text-align: center;
  margin-top: auto;
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
</style>
