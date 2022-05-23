<template>
  <div class="ground">
    <Header/>
    <div class="">Content</div>
    <Footer/>
  </div>
  
</template>

<script>
import Header from "./Header.vue"
import Footer from "./Footer.vue"
export default {
  components :{
    Header,
    Footer
  }
  
}
</script>