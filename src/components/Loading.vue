<template>
  <transition name="fade" @after-leave="afterLeave">
    <div v-if="isLoading" class="loading-screen wrapper">
      <div class="logoCon">
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </div>
    </div>
  </transition>
</template>

<script>
import styled from '@emotion/styled';

export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    afterLeave() {
      this.$emit('after-leave');
      
    },
  },
};
</script>

<style scoped>
.loading-screen {
  
/* 画面幅を480pxに固定 */
  margin: auto; /* 中央寄せ */
  background-color: #333; /* 背景色を#333に設定 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.logoCon {
  width: 95%;
  margin: auto; /* 中央寄せ */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.fade-enter-active
{
  transition: none;
}
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.fade-enter-active{
  transition: none;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
