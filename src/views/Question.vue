<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="wrapper">
    <header class="qCon">
      <div class="q">
        {{ qText }}
      </div>
    </header>
    <div class="character">
      <img src="@/assets/character.png" alt="キャラ" />
    </div>
    <div class="button-container">
      <button @click="handleClick('no')" class="qBtn">いいえ</button>
      <button @click="handleClick('yes')" class="qBtn">はい</button>
    </div>
    <RouterLink class="startButton" to="/">トップへ</RouterLink>
  </div>
  <RouterView />
</template>
<script>
export default {
  name: 'question',
  components: {
    // Loading,
  },
  data() {
    return {
      questionState: 'initial',
      qText: 'しつもんをはじめます！',
    };
  },

  methods: {
    handleClick(answer) {
      if (this.questionState === 'initial') {
        if (answer === 'yes') {
          this.qText = '準備はいいですか？';
          this.questionState = 'question1Yes';
        } else {
          this.qText = 'なくしものには気を付けてね！ばいばい！';
          this.questionState = 'question1No';
        }
      } else if (this.questionState === 'question1Yes') {
        // 'yes' が選択された後に行う処理
        if (answer === 'yes') {
          this.qText = '素晴らしい！一緒に探しましょう！';
          this.questionState = 'question2Yes';
        } else {
          this.qText = '準備はいいですか？';
          this.questionState = 'question2No';
        }
      } else if (this.questionState === 'question2No') {
        // 'yes' が選択された後に行う処理
        if (answer === 'yes') {
          this.qText = '素晴らしい！一緒に探しましょう！';
          this.questionState = 'question2Yes';
        } else {
          this.qText = 'なくしものには気を付けてね！ばいばい！';
          this.questionState = 'question2No';
        }
      } else if (this.questionState === 'question2Yes') {
        // 'yes' が選択された後に行う処理
        if (answer === 'yes') {
          this.qText = '家でなくしましたか？';
          this.questionState = 'question3Yes';
        } else {
          this.qText = 'なくしものには気を付けてね！ばいばい！';
          this.questionState = 'question3No';
        }
      } else if (this.questionState === 'question3Yes') {
        // 'yes' が選択された後に行う処理
        if (answer === 'yes') {
          this.qText =
            'まずは服や鞄のポケットをさがしてみましょう！見つかりましたか？';
          this.questionState = 'question4Yes';
        } else {
          this.qText =
            '心当たりのあるお店や公共交通機関に電話でききましょう！見つかりましたか？';
          this.questionState = 'question4No';
        }
      } else if (this.questionState === 'question4Yes') {
        // 'yes' が選択された後に行う処理
        if (answer === 'yes') {
          this.qText = 'おめでとうございます！次も気を付けてくださいね！';
          this.questionState = 'question5Yes';

          const currentDate = new Date();
          const memoryData = {
            date: currentDate.toLocaleDateString(),
            time: currentDate.toLocaleTimeString(),
            message: '服や鞄のポケットで発見！',
          };

          let memories = JSON.parse(localStorage.getItem('memories')) || [];
          memories.push(memoryData);
          localStorage.setItem('memories', JSON.stringify(memories));
        } else {
          this.qText =
            '次に、家具の隙間やベッドの下をかくにんしましょう！見つかりましたか？';
          this.questionState = 'question5No';
        }
      } else if (this.questionState === 'question4No') {
        // 'yes' が選択された後に行う処理
        if (answer === 'yes') {
          this.qText = 'おめでとうございます！次も気を付けてくださいね！';
          this.questionState = 'question6Yes';

          const currentDate = new Date();
          const memoryData = {
            date: currentDate.toLocaleDateString(),
            time: currentDate.toLocaleTimeString(),
            message: 'お店や公共交通機関に電話して発見！',
          };

          let memories = JSON.parse(localStorage.getItem('memories')) || [];
          memories.push(memoryData);
          localStorage.setItem('memories', JSON.stringify(memories));
        } else {
          this.qText =
            '近くの交番に電話してかくにんしましょう！見つかりましたか？';
          this.questionState = 'question6No';
        }
      } else if (this.questionState === 'question5No') {
        // 'yes' が選択された後に行う処理
        if (answer === 'yes') {
          this.qText = 'おめでとうございます！次も気を付けてくださいね！';
          this.questionState = 'question7Yes';

          const currentDate = new Date();
          const memoryData = {
            date: currentDate.toLocaleDateString(),
            time: currentDate.toLocaleTimeString(),
            message: '家具の隙間やベッドの下で発見！',
          };

          let memories = JSON.parse(localStorage.getItem('memories')) || [];
          memories.push(memoryData);
          localStorage.setItem('memories', JSON.stringify(memories));
        } else {
          this.qText = '予想結果：何かと一緒に洗濯してしまった可能性が高いです！';
          this.questionState = 'question7No';
        }
      } else if (this.questionState === 'question6No') {
        // 'yes' が選択された後に行う処理
        if (answer === 'yes') {
          this.qText = 'おめでとうございます！次も気を付けてくださいね！';
          this.questionState = 'question7Yes';

          const currentDate = new Date();
          const memoryData = {
            date: currentDate.toLocaleDateString(),
            time: currentDate.toLocaleTimeString(),
            message: '近くの交番に電話して発見！',
          };

          let memories = JSON.parse(localStorage.getItem('memories')) || [];
          memories.push(memoryData);
          localStorage.setItem('memories', JSON.stringify(memories));
        } else {
          this.qText = '予想結果：車の中の可能性が高いです！';
          this.questionState = 'question7No';
        }
      }
    },
  },
};
</script>

<style scoped>
.character {
  width: 40%;
  margin: 0 auto;
}
.qCon {
  padding: 0rem 2rem;
  background-color: #fff;
  border-radius: 0 0 15px 15px;
}
.q {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.button-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.qBtn {
  padding: 10px 20px;
  min-width: 30%;
  transition: 0.3s;
  border: none;
  border-radius: 15px;
}
.qBtn:hover {
  opacity: 0.3;
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
  margin-top: 20%;
}
</style>
