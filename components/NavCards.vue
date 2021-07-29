<template>
<div>
    <div class="title-container">
          <div class="title">
Каталог
          </div>
          <div class="sort">
            <span class="des">Сортировать по:</span>
        <span class="active">{{ofPrice ? 'цене' : 'популярности' }}</span>
            <svg @mousemove="isModal=true" width="10" height="7" viewBox="0 0 5 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 0H0L2.5 2.5L5 0Z" fill="#59606D"/>
</svg>


<div v-if="isModal" @mouseleave="isModal=false" class="modal">
  <div @click="ofPrice=true" class="m-link">По цене</div>
    <div @click="ofPrice=false" class="m-link">По популярности</div>
</div>

          </div>
        </div>

    <div class="main-products">
        
        <div class="nav">
            <div v-for="i in urls" :key="i.id" class="link"   :class="{'active-link': rt == i.id}" @click="render(i.id)">
                {{i.name}}
            </div>
        </div>
        <div class="products">
            <Card v-for="i of DATA" :key="i.id" :card="i"/>
        </div>
    </div>

</div>
</template>

<script>
import Card from './Card.vue'
export default {
    async fetch() {
      this.urls = await fetch(
        'https://frontend-test.idaproject.com/api/product-category'
      ).then(res => res.json())
    },
    components:{
        Card
    },
    data:()=>({
        urls:'',
        rt:1,
        isModal:false,
        ofPrice:true
    }),
    async beforeMount(){
         await this.$store.dispatch('products/fetchProducts')
    },
        methods:{
          render(id=1){
            return this.rt = id
        },

        },
        computed:{           
        DATA(){
            return  this.$store.getters['products/allProducts'].filter(i=>i.category === this.rt)
        },
},
        
}
</script>

<style scoped>
.modal{
  position: absolute;
  width: 160px;
top: 40px;
/* white */
display: flex;
flex-direction: column;

padding: 10px 0;
background: #FFFFFF;
box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
border-radius: 8px;
}
.m-link{
  cursor: pointer;
 font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
padding:5px 10px ;
/* grey-light */

color: #959DAD;
}
.m-link:hover{
  color: #1F1F1F;
  background: #F8F8F8;
}
.sort{
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  position: relative;
}
.title-container{
  display: flex;
  align-items: center;
  justify-content: space-between;
    width: 100%;
    margin-top: 66px;
}
.active{
  font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 21px;

/* grey */

color: #59606D;
}
.des{
  font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 21px;
/* identical to box height */

display: flex;
align-items: flex-end;

/* black */

color: #1F1F1F;
}
.title{
  font-family: PT Sans;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 41px;

/* black */

color: #1F1F1F;

}
.main-products{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 20px;
    margin: 20px 0 0 0;
}
.link{
    cursor: pointer;
    font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 21px;
/* grey-light */

color: #959DAD;

}
.nav{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.active-link{
text-decoration-line: underline;

/* black */

color: #1F1F1F;
}
.products{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
}
.link:hover{
    color: #59606D;
}
</style>