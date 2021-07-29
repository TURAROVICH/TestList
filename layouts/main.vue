<template>
    <div>
       <div>
         <headerTMP/>
       </div>
        <Nuxt/>
    </div>
</template>

<script>
import headerTMP from '../components/static/header.vue'
import '../static/index.css'
export default {
    components:{
        headerTMP
    },
    
}
</script>