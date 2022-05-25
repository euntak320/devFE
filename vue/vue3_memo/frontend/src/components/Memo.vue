<template>
  <div class="memo">
      <div class="act">
        <button class="btn btn-primary" @click="add()">+ 추가</button>
    </div>
    <ul>
      <li v-for="(d, i) in state.data" :key="i">{{ d }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
    .memo  {
        .act {
            padding: 10px 5px 5px 5px;
            text-align: right;
        }
        ul {
        list-style: none;
        padding: 15px 0;
        margin:0;
        
        li {
            padding: 10px 15px;
            margin:5px;
            border:1px solid #eee;
        }
    }
    }
</style>

<script>
import { reactive } from 'vue';
import axois from "axios";

    export default {
        setup() {
            const state = reactive({
                // 데이터를 동적으로 가지고 오게 하는거
                data: []
            })
            const add = () => {
                state.data.push("추가된 메모 내용");
            }

            axois.get("/api/memos").then((res) => {
                console.log(res)
            });

            return{ state, add };
        }
    }

</script>