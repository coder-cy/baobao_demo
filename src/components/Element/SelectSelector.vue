<template>
  <div class="select_selector">
      <div>
          <div class='main' @click="isOpen=!isOpen;">
            <span class='fold_icon' :style="{transform: foldRotate}">^</span>
            <input v-model="myZone" type="text" placeholder="请选择">
          </div>
          <div class='lis' v-show="isOpen">
            <div class='tri_icon'></div>
            <ul>
                <li @click="clsLis($event)" v-for="(item, i) in selectInfo" :key="i">{{item.name}}</li>
            </ul>
          </div>
      </div>
  </div>
</template>

<script>
import schoolInfo from '../../assets/school.json';

export default {
    name: "selectSelector",
    data(){
        return{
            selectInfo: schoolInfo.zone,
            myZone: '上海',
            isOpen: false
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
            return this.isOpen ? "rotate(-180deg)" : "rotate(0deg)";
        }
    }
}
</script>

<style scoped>
    .select_selector>div{
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
        position: relative;
        left: 15%;
        width: 5px;
        height: 5px;
        border: 8px solid transparent;
        border-bottom-color: #eee;
    }
    ul{
        height: 200px;
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