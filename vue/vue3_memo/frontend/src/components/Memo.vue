<template>
  <div class="memo">
      <div class="act">
        <button class="btn btn-primary" @click="add()">+ 추가</button>
    </div>
    <ul>
      <li v-for="(d, i) in data" :key="i">{{ d }}</li>
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
            padding: 5px 10px;
            margin:5px;
        }
    }
    }
</style>

<script>
import { reactive } from 'vue';

    export default {
        setup() {
            const state = reactive({
                
            })
            const data = [
                "메모 1 내용",
                "메모 2 내용",
                "메모 3 내용",
                "메모 4 내용",
                "메모 5 내용",
            ]
            const add = () => {
                data.push("추가된 메모 내용");
            }

            return{ data, add };
        }
    }

</script>