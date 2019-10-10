<template>
  <div class="cascader_selector">
      <div>
          <div class='lis' v-show="isOpen">
            <ul>
                <li @click="clsLis($event)" v-for="(item, i) in schoolInfo" :key="i">{{item.name}}</li>
            </ul>
            <div class='tri_icon'></div>
          </div>
          <div class='main' @click="isOpen=!isOpen;">
            <span class='fold_icon' :style="{transform: foldRotate}">^</span>
            <input v-model="myZone" type="text" placeholder="请选择">
          </div>
      </div>
  </div>
</template>

<script>
import schoolInfo from '../../assets/school.json';

export default {
    name: "cascaderSelector",
    data(){
        return{
            myZone: '上海',
            isOpen: false,
            schoolInfo
        }
    },
    methods:{
        clsLis(e){
            this.myZone = e.target.innerHTML;
            this.isOpen=!this.isOpen;
        }
    },
    computed:{
        foldRotate:function(){
            return this.isOpen ? "rotate(0deg)" : "rotate(-180deg)";
        }
    }
}
</script>

<style scoped>
    .cascader_selector>div{
        position: relative;
        margin: 0 auto;
        width: 300px;
    }
    .main>input{
        width: 100%;
        height: 50px;
        padding: 0 15% 0 5%;
        user-select: none;
        cursor: pointer;
        border: 1px #eee solid;
        border-radius: 5px;
    }
    .main>input:hover{
        border-color: #bbb;
        outline: none;
    }
    .main>input:focus{
        border-color: #f50;
        outline: none;
    }
    .lis{
        position: absolute;
        width: 100%;
    }
    .fold_icon{
        position: absolute;
        color: #bbb;
        top: 15px;
        right: 20px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        user-select: none;
        cursor: pointer;
        transition: .1s;
    }
    .tri_icon{
        position: absolute;
        top: -10px;
        left: 15%;
        width: 5px;
        height: 5px;
        border: 8px solid transparent;
        border-top-color: #eee;
    }
    ul{
        position: relative;
        bottom: 160px;
        height: 150px;
        overflow: auto;
        padding: 5px 0;
        border: 1px #eee solid;
        border-radius: 5px;
        background: white;
    }
    li{
        list-style: none;
        padding: 5px 0;
        user-select: none;
        cursor: pointer;
    }
    li:hover{
        background: rgba(255, 85, 0, .1)
    }
</style>