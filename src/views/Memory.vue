<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="wrapper">
    <header class="subHeader">
      <div class="subHeaderCon">
        <RouterLink to="/"
          ><img style="width: 200px" src="../assets/logo.png" alt=""
        /></RouterLink>
      </div>
    </header>
    <div class="items">
      <div class="item">
        <div class="innerItem">
          <img
            style="width: 17%; object-fit: cover; display: block"
            src="../assets/character.png"
            alt=""
          />
          <p style="width: 50%; display: block">
            3/12<br />鞄のポケットに保険証
          </p>
        </div>
      </div>
      <div class="item">
        <div class="innerItem">
          <img
            style="width: 17%; object-fit: cover; display: block"
            src="../assets/character.png"
            alt=""
          />
          <p style="width: 50%; display: block">5/23<br />パスモ</p>
        </div>
      </div>
      <div class="item">
        <div class="innerItem">
          <img
            style="width: 17%; object-fit: cover; display: block"
            src="../assets/character.png"
            alt=""
          />
          <p style="width: 50%; display: block">1/19<br />机の下に鍵</p>
        </div>
      </div>
    </div>
  </div>
  <RouterView />
</template>
<script>
export default {
  name: 'memory',
  components: {
    // Loading,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.items {
  margin-top: 10%;
}
.item {
  margin-top: 10px;
  width: 100%;
  height: 100px;
  background-color: #ffffff;
}
.innerItem {
  display: flex;
  justify-content: space-around;
}
</style>
