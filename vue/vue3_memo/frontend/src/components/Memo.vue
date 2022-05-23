<template>
  <div class="memo">
    <ul>
      <li v-for="(d, i) in data" :key="i">{{ d }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
    .memo ul {
        list-style: none;
        padding: 15px 0;
        margin:0;
        li {
            padding: 5px 10px;
            margin:5px;
        }
    }
</style>

<script>
    export default {
        setup() {
            const data = [
                "메모 1 내용",
                "메모 2 내용",
                "메모 3 내용",
                "메모 4 내용",
                "메모 5 내용",
            ]

            return{ data };
        }
    }

</script>