<template>
  <div>
    <Header/>
    <HelloWorld/>
    


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '../components/layout/header.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Header
}
}
</script>
