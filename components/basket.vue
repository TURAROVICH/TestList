<template>
<div>
    <div class="basket-bg"></div>

    <div class="basket-container">
        
        <div  class="title-close-container">
            <div class="title">
Корзина
            </div>

            <svg @click="$emit('close')" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="black"/>
</svg>

        </div>

        <div v-if="inBasket == 0 && !clr" class="empty">
            <div class="text">
                Пока что вы ничего не добавили
в корзину.
            </div>

            <div @click="$emit('close')" class="btn">
                <span>Перейти к выбору</span>
            </div>
        </div>

        <div v-else class="isset">
            <div v-if="!clr" class="isset-des">
Товары в корзине
            </div>

            <div class="cards">
                <CardInBasket v-for="i in products" :key="i.id" :mine="i"  />
            </div>
        </div>
          <div v-if="clr" class="success">
        <img src="../assets/emoji.png" alt="">
        <div class="title-succes">Заявка успешно отправлена</div>
        <div class="des-succes">Вскоре наш менеджер свяжется с Вами</div>
    </div>
        <div v-if="inBasket!=0" class="des-of">
                        Оформить заказ
                    </div>

                    <div v-if="inBasket!=0" class="form">
                        <input v-model="name" type="text" placeholder="Ваше имя">
                        <input v-model="phone" type="number"  placeholder="+7__-__-_-_">
                        <input v-model="adders" type="text" placeholder="Адрес">
                        <div v-if="error" class="error">
                            {{error}}
                        </div>
                        <div @click="clear()" class="btn"><span>Отправить</span></div>
                    </div>
    </div>


  
</div>
</template>

<script>
import CardInBasket from './cardInbasket.vue'
export default {
    data:()=>({
        fill:'#959DAD',
        clr:false,
        name:'',
        phone:'',
        adders:'',
        error:''
    }),
    methods:{
        clear(){
            if(this.name.length>4 && this.phone.length>4 && this.adders.length>4){
            this.$store.dispatch('basket/clearBasket')
            this.clr = true
            }else{
                this.error = "Поля заполнены не коректно"
            }
        }
    },
    computed:{
        inBasket(){
            return this.$store.getters['basket/count'] 
        },
        products(){
            return this.$store.getters['basket/inBasket'] 
        }
    },
    components:{
        CardInBasket
    }
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
*{
        font-family: PT Sans;
}
.error{
    font-size: 14px;;
color: #EB5757;
}
.success{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:10px
}
.title-succes{
font-family: PT Sans;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 31px;
color: #000000;
}
.des-succes{
font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 21px;


color: #59606D;
}
input{
    padding: 10px;
    background: #F8F8F8;
border-radius: 8px;
width: 100%;
border: none;
outline: none;
height: 50px;
}
.btn{
    background: #1F1F1F;
border-radius: 8px;
height: 50px;
width: 100%;
display:flex;
align-items: center;
justify-content: center;
}
.btn span{
    font-family: PT Sans;
font-size: 16px;
line-height: 21px;
color: #FFFFFF;
}
.btn:hover{
    background: #59606D;
}
.form{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 25px 0;
}
.input{
    position: absolute;
    top: 60px;
    font-size: 14px;
}
.des-of{
    font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 23px;
display: flex;
align-items: flex-end;

/* grey */

color: #59606D;
}
.cards{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 20px 0;
}
.description{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.isset{
    margin: 30px 0;
}
.isset-des{
    font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 23px;
display: flex;
align-items: flex-end;

/* grey */

color: #59606D;
}
.empty .btn{
    background: #1F1F1F;
border-radius: 8px;
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
}
.btn span{
    font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 21px;
color: #FFFFFF;
}
.empty{
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 50px 0;
}
.empty .text{
    font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 28px;

color: #000000;
}
.basket-bg{
    position: fixed;
    top: 0%;
    left: 0%;
    height: 100vh;
    width: 100%;
    background: #FFFFFF;
opacity: 0.8;
}
.basket-container
{
    padding: 50px 30px;

    position: fixed;
    width: 460px;
height: 100vh;
right: 0px;
top:0;
overflow-y: scroll;
z-index: 70;
background: #FFFFFF;
opacity: 1;
box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
border-radius: 8px 0px 0px 8px;
}
.title-close-container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.title{
    font-family: PT Sans;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 41px;
display: flex;
align-items: flex-end;

color: #000000;
}
@media screen and (max-width:480px) {
    .basket-container{
        width: 100%;
    }
    .basket-bg{
        display: none;
    }
}
</style>