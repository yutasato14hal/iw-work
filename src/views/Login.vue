<template>
  <div class="wrapper">
    <header class="subHeader">
      <div class="subHeaderCon">
        <RouterLink to="/"
          ><img style="width: 200px" src="../assets/logo.png" alt=""
        /></RouterLink>
      </div>
    </header>
    <div class="error-message" v-if="errorMsg">
      <span @click="clearError">×</span>
      <span>{{ errorMsg }}</span>
    </div>

    <form @submit.prevent="submit">
      <div  class="input-container">
        <input class="input-field" v-model="user.userId" type="text" placeholder="ユーザー名" />
      </div>

      <div  class="input-container">
        <input  class="input-field" v-model="user.password" type="password" placeholder="パスワード" />
      </div>

      <div  class="input-container"  v-if="!isLogin">
        <input class="input-field" v-model.number="user.age" type="number" min="0" placeholder="年齢" />
      </div>
<div class="input-container"><button :disabled="isButtonDisabled" class="submitBtn" style="" type="submit">{{ submitBtnText }}</button></div>
      
    </form>

    <button @click="toggleMode"  class="submit">{{ toggledBtnText }}</button>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      isLogin: true,
      user: {
        userId: '',
        password: '',
        age: 0,
      },
      errorMsg: '',
    };
  },

  computed: {
    isButtonDisabled() {
      return !this.user.userId || !this.user.password || (!this.isLogin && !this.user.age);
    },
    submitBtnText() {
      return this.isLogin ? 'ログイン' : '新規登録';
    },
    toggledBtnText() {
      return this.isLogin ? '新規登録に切り替え' : 'ログインに切り替え';
    },
  },

  methods: {
    toggleMode() {
      this.isLogin = !this.isLogin;
    },

    clearError() {
      this.errorMsg = '';
    },

    submit() {
      if (this.isLogin) {
        // ログイン処理
        sessionStorage.setItem('userId', this.user.userId);
        // 他のログイン処理
        alert("ろぐいんかんりょう！")
        this.$router.push({ name: 'home' });
      } else {
        // 新規登録処理
        sessionStorage.setItem('userId', this.user.userId);
        sessionStorage.setItem('age', this.user.age); 
        alert("とうろくかんりょう！")
        this.$router.push({ name: 'home' });
        // 他の新規登録処理
      }
    },
  },
};
</script>

<style scoped>

header{
  margin-bottom: 60px;
}
.error-message {
  /* styles */
  color: red;
}

.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-field {
  width: 75%;
  height: 50px;
  margin-top: 10px;
  border: none;

}

.submit{
  width: 80%;
  margin:  0 auto;
  height: 40px;
  margin-top: 10px;
  border: none;
  background-color: rgb(255, 218, 218);
  border-radius: 5px;
}
.submitBtn{
  margin-top: 40px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: none;
  background-color: rgb(218, 232, 255);
  border-radius: 5px;
}
button:hover{
  cursor: pointer;
}
</style>
