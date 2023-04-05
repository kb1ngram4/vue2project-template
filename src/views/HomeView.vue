<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleC">发送get请求</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import axios from 'axios'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods:{
    handleC(){
      this.$http({
        method:'get',
        url:'/search',
        params:{
          keywords:'海阔天空'
        }
      }).then(res=>console.log(res))
    }
  }
}
</script>
