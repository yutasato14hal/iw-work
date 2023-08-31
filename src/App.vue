<script setup>
import Loading from './components/Loading.vue';
import { RouterLink, RouterView } from 'vue-router';


</script>
<template>
  <div
    class="wrapper"
    style="height: 100%; display: flex; flex-direction: column"
  >
    <loading :isLoading="isLoading"></loading>
    <nav class="headerNav aic">
      <div class="account">{{ userId }}</div>
      <ul>
        <RouterLink class="link" to="/login">ろぐいん</RouterLink>
      </ul>
    </nav>
    <div class="character">
      <img src="../src/assets/character.png" alt="キャラ" />
    </div>
    <RouterLink class="startButton" to="/question">はじめる</RouterLink>
    <div class="footer">
      <nav class="footerNav">
        <ul>
          <li><RouterLink class="a" to="/">ほーむ</RouterLink></li>
          <li class="”current”">
            <RouterLink class="a" to="/memo">めも</RouterLink>
          </li>
          <li><RouterLink class="a" to="/memory">きろく</RouterLink></li>
        </ul>
      </nav>
    </div>
  </div>
  <RouterView />
</template>

<script>


export default {
  name: "home",
  components: {
    Loading,
  },
  data() {
    return {
      userId: window.localStorage.getItem("userId") || "ゲスト",
       isLoading: false
    }
  },
  methods: {
    loadData() {
      this.isLoading = true;
      // データをフェッチするなどの非同期処理
      setTimeout(() => {
        this.isLoading = false;
      }, 2000); // 2秒後にローディングを終了（実際にはAPI呼び出しや他の非同期処理の結果に基づいて終了する必要があります）
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style scoped>
.account {
  width: fit-content;
  padding: 15px;
  background-color: #fff;
  border-radius: 0px 10px 35px 0;
  font-weight: bold;
  font-size: large;
}
.headerNav {
  margin-top: 10%;
  justify-content: space-between;
}
.headerNav ul {
  display: flex;
  margin-right: 4%;
  gap: 1rem;
}
.headerNav ul li {
  background-color: #fff;
  border-radius: 10px;
  padding: 0.5rem 0rem;
}

.link {
  background-color: #fff;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  font-size: small;
}
.character {
  width: 40%;
  margin: 0 auto;
}

.startButton {
  display: block;
  border-radius: 15px;
  background-color: rgb(247, 57, 57);
  font-size: large;
  font-weight: bold;
  color: #fff;
  padding: 1.5rem 2rem;
  width: fit-content;
  margin: 0 auto;
  margin-top: 5%;
}
.footer {
  width: 100%;
  margin-top: auto;
}

.footerNav ul {
  border-top: 0.5px solid #ffffff;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  text-align: center;
}
.footerNav ul li {
  min-width: 50px;
}
.footerNav ul li .a {
  display: block;
  width: 100%;
  height: 100%;
  padding: 15px 0;
  text-decoration: none;
  color: #fff;
}
.footerNav ul li.current {
  font-weight: bold;
  border-top: 5px solid rgb(247, 57, 57);
}
.footerNav ul li.current .a {
  color: #ffffff;
}
.footerNav ul li .a:hover {
  color: #ffffff;
  background-color: rgb(161, 51, 51);
}
.footerNav ul li:hover {
  border-top: 5px solid rgb(255, 255, 255);
}
</style>
