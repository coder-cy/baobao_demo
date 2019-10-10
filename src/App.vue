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
    }
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
