<template>
    <div class="main">
        <div class="top-data">
            <div class="star">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="20" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.125C10.2379 3.125 10.4552 3.26005 10.5605 3.47336L12.3464 7.09154L16.3404 7.67532C16.5758 7.70972 16.7712 7.87473 16.8445 8.10098C16.9179 8.32723 16.8565 8.57552 16.6861 8.74147L13.7966 11.5559L14.4785 15.5318C14.5187 15.7663 14.4223 16.0033 14.2299 16.1432C14.0374 16.283 13.7822 16.3014 13.5716 16.1907L10 14.3124L6.42843 16.1907C6.21785 16.3014 5.96267 16.283 5.77018 16.1432C5.5777 16.0033 5.48129 15.7663 5.52151 15.5318L6.20344 11.5559L3.31394 8.74147C3.14355 8.57552 3.08213 8.32723 3.15549 8.10098C3.22885 7.87473 3.42428 7.70972 3.65963 7.67532L7.6536 7.09154L9.43958 3.47336C9.54487 3.26005 9.76213 3.125 10 3.125ZM10 5.16203L8.62921 7.93914C8.53825 8.12342 8.36251 8.25121 8.15916 8.28093L5.09278 8.72913L7.3111 10.8898C7.45852 11.0334 7.52581 11.2403 7.49102 11.4432L6.96763 14.4948L9.70911 13.0531C9.89122 12.9573 10.1088 12.9573 10.2909 13.0531L13.0324 14.4948L12.509 11.4432C12.4742 11.2403 12.5415 11.0334 12.6889 10.8898L14.9073 8.72913L11.8409 8.28093C11.6375 8.25121 11.4618 8.12342 11.3708 7.93914L10 5.16203Z" fill="#F2C94C"/>
                <path d="M6.5 11L4 8H10H16L13.5 11V14.5L13 15.5L10 14L9 14.5L6.5 15.5V14.5V11Z" fill="#F2C94C"/>
                </svg>

                <span>4,5</span>
            </div>

        <div > <img ref="img" width="143px" alt=""></div>
        <div @mousemove="fill=`#000`" @mouseleave="fill=`#959DAD`" @click="addToBasket()">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.92 1.74C4.03331 1.58892 4.21115 1.5 4.4 1.5H11.6C11.7889 1.5 11.9667 1.58892 12.08 1.74L13.88 4.14C13.9579 4.24386 14 4.37018 14 4.5V12.9C14 13.3774 13.8104 13.8352 13.4728 14.1728C13.1352 14.5104 12.6774 14.7 12.2 14.7H3.8C3.32261 14.7 2.86477 14.5104 2.52721 14.1728C2.18964 13.8352 2 13.3774 2 12.9V4.5C2 4.37018 2.04211 4.24386 2.12 4.14L3.92 1.74ZM4.7 2.7L3.2 4.7V12.9C3.2 13.0591 3.26321 13.2117 3.37574 13.3243C3.48826 13.4368 3.64087 13.5 3.8 13.5H12.2C12.3591 13.5 12.5117 13.4368 12.6243 13.3243C12.7368 13.2117 12.8 13.0591 12.8 12.9V4.7L11.3 2.7H4.7Z" :fill="fill"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C2 4.16863 2.26863 3.9 2.6 3.9H13.4C13.7314 3.9 14 4.16863 14 4.5C14 4.83137 13.7314 5.1 13.4 5.1H2.6C2.26863 5.1 2 4.83137 2 4.5Z" :fill="fill"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.6 6.3C5.93137 6.3 6.2 6.56863 6.2 6.9C6.2 7.37739 6.38964 7.83523 6.72721 8.17279C7.06477 8.51036 7.52261 8.7 8 8.7C8.47739 8.7 8.93523 8.51036 9.27279 8.17279C9.61036 7.83523 9.8 7.37739 9.8 6.9C9.8 6.56863 10.0686 6.3 10.4 6.3C10.7314 6.3 11 6.56863 11 6.9C11 7.69565 10.6839 8.45871 10.1213 9.02132C9.55871 9.58393 8.79565 9.9 8 9.9C7.20435 9.9 6.44129 9.58393 5.87868 9.02132C5.31607 8.45871 5 7.69565 5 6.9C5 6.56863 5.26863 6.3 5.6 6.3Z" :fill="fill"/>
            </svg>
        </div>
    </div>
    <div class="bottom-data">
        <div class="des">
{{card.name}}
        </div>
        <div class="price">{{card.price}} ₽</div>
    </div>
    </div>
</template>


<script>
export default {
    props:['card'],
    mounted(url=this.card.photo){
        this.$refs.img.setAttribute('src',`https://frontend-test.idaproject.com${url}`)
    },
    data:()=>({
        fill:'#959DAD'
    }),
    methods:{
        addToBasket(){
            this.$store.dispatch('basket/fetchProduct',this.card)
        }
    }
}
</script>


<style scoped>
.main{
    width: 100%;
    background: #FFFFFF;
box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
border-radius: 8px;
padding: 15px;
display: flex;
flex-direction: column;
gap: 20px;
}
.top-data{
    
display: grid;
grid-template-columns: 1fr 5fr 1fr;
}
.star{
    
    display: flex;
    gap: 5px;
}
.star span{
    font-family: PT Sans;
font-style: normal;
font-weight: bold;
font-size: 10px;
line-height: 13px;

color: #F2C94C;
margin-top: 5px;
}

.des{
    font-family: PT Sans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: flex-end;

/* grey */

color: #59606D;
}
.price{
    font-family: PT Sans;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: flex-end;

/* black */

color: #1F1F1F;
}
.bottom-data{
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
}
</style>