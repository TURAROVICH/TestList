<template>
  <div class="main">
    <div class="container">


      <nav-cards/>

    </div>
  </div>
</template>

<script>
import NavCards from '../components/NavCards.vue'

export default {
  data :()=>({
    isModal:false
  }),

  components: { NavCards },
   layout () {
    return 'main'
  }
}
</script>


<style scoped>

.main{
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin: 30px 0 0 0 ;
}
.container{
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
}
</style>
