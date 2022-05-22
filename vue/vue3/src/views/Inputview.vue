<template>
  <div class="input">
    <h1>안녕하세요 {{title}}!</h1>
    <input type="text" v-model="text" />
    <button type="button" @click="getData">GET</button>
    <button type="button" @click="setData">SET</button>


    <select style="display:block;" v-model="resign" @click="chageRegion">
    <!-- v-model를 통해서 데이터를 가지옴 -->
      <option :key="i" :value="d.v" v-for="(d, i) in options">{{d.t}}</option>
      <!-- key의 값은 유일한 번호  v-for는 배열처리 부분-->
    </select>

    <table v-show="tableShow">
    <!-- v-show는 리소스를 덜 잡아먹는다 -->
        <tbody>
          <tr :key="i" v-for="(d, i) in options">
            <td>{{d.v}}</td>
            <td>{{d.t}}</td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    // 텍스트 바인딩 방법
    data() {
      return{
        title: "타라탁",
        text: "abcd",
        options : [
          {v:"s",t:"seoul"},
          {v:"j",t:"jeju"},
          {v:"b",t:"busan"},
        ],
        resign: "j",
        tableShow :true
      };
    },
    methods : {
      getData() {
        alert(this.text);
      },
      setData() {
        this.text = "1234";
      },
      chageRegion(){
        alert(this.resign)
      }
    }
  };
</script>
