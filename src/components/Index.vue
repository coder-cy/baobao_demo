<template>
  <div class="index">
    <nav>
        <p>目录列表:</p>
        <router-link to='/infoTable'>资料表</router-link>
        <router-link to='/elementIndex'>Element组件</router-link>
        <router-link to='/weibo'>微博发布框</router-link>
        <router-link to='/transferString'>字符串转换</router-link>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'index',
    data(){
        return{

        }
    }

}
</script>

<style>
  li{
    list-style: none;
  }
</style>