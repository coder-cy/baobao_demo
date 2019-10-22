<template>
  <div id="app">
    <div>
      <router-view/>
    </div>
    <div>
      <hr>
      <!-- <span @click='back'>back</span> -->
      <router-link to='/'>index</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  components: {
    
  },
  methods: {
    back(){
      if(window.history.length <=1){
        this.$router.push({path:'/'});
        return false;
      }else{
        this.$router.back();
      }
    },
    axiosTest(){
      axios.post("http://192.168.0.101:9090/test").then(data => {
        console.log(data)
      })
    }
  },
  mounted() {
    this.axiosTest();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  font-size: 18px;
};
</style>
