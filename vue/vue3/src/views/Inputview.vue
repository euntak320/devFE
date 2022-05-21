<template>
  <div class="input">
    <h1>안녕하세요 {{title}}!</h1>
    <input type="text" v-model="text" />
    <button type="button" @click="getData">GET</button>
  </div>
</template>

<script>
  export default {
    // 텍스트 바인딩 방법
    data() {
      return{
        title: "타라탁",
        text: "abcd",
      };
    },
    methods : {
      getData() {
        alert(this.text);
      }
    }
  };
</script>
