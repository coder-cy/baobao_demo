<template>
  <div class="cascader_selector">
      <div>
        <div class='lis' v-show="isShow">
            <ul>
                <li class="test" @click="ShowUl2" >城市</li>
            </ul>
            <div class='tri_icon'></div>
        </div>
        <div class='lis2' v-show="isShow2">
            <ul>
                <li v-for="(item, i) in selectInfo.city" :key="i" class="test" @click="ShowUl3($event)">{{item.title}}
                </li>
            </ul>
        </div>
        <div class='lis3' v-show="isShow3">
            <ul v-for="(item, i) in selectInfo.city" :key="i" >
                <li v-for="(item2, j) in item.lists" :key="j" @click="clsLis($event)">{{item2}}</li>
            </ul>
        </div>
        <div class='main' @click="isShow=!isShow;">
            <input v-model="myZone" type="text" placeholder="请选择">
            <span class='fold_icon' :style="{transform: foldRotate}"></span>
        </div>
      </div>

  </div>
</template>

<script>
import citiesInfo from '../../assets/cities.json';
export default {
  name: 'cascaderSelector',
  data() {
        return {
            selectInfo: citiesInfo,
            myZone: '地区',
            myZoneBuffer: '',
            isShow: false,
            isShow2: false,
            isShow3: false
        }
    },
  methods: {
      ShowUl2(){
          this.isShow2 = true;
      },
      ShowUl3(e){
          this.isShow3 = true;
          console.log(e,e.detail)
          this.myZoneBuffer = e.target.innerHTML;
      },
      clsLis(e){
            this.myZone = '城市' + this.myZoneBuffer + e.target.innerHTML;
            this.isShow = this.isShow2 = this.isShow3 = false;
       }
    },
  computed: {
        foldRotate:function(){
            return this.isShow ? "rotate(0deg)" : "rotate(-180deg)";
        }
    }
}
</script>

<style scoped>
    .cascader_selector>div>div{
        position: relative;
        margin: 0 auto;
        width: 300px;
        text-align: left;
    }
    .main{
      border: 1px #eee solid;
      border-radius: 5px;
    }
    .main>input{
        width: 100%;
        height: 50px;
        padding: 0 15% 0 5%;
        user-select: none;
        cursor: pointer;
        border: none;
    }
    .main:hover{
      border: 1px #bbb solid;
    }
    .main>input:hover{
        /* border-color: #bbb; */
        outline: none;
    }
    .main>input:focus{
        /* border-color: #f50; */
        outline: none;
    }
    .lis{
        position: absolute;
    }
    .lis2{
        position: absolute;
        left: 90px;
    } 
    .lis3{
        position: absolute;
        left: 180px;
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
    .fold_icon{
        position: absolute;
        color: #bbb;
        /* background: blue; */
        width: 16px;
        height: 8px;
        top: 20px;
        right: 20px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        user-select: none;
        cursor: pointer;
        transition: .1s;
    }
    .fold_icon:after {
        position: absolute;
        right: 2px;
        top: 2px;
        width: 0;
        height: 0;
        content: "";
        border-width: 0 6px 6px 6px;
        border-style: solid;
        border-color: white transparent ;
    }
    .fold_icon:before {
        position: absolute;
        right: 0px;
        top: 0px;
        content: "";
        border-width: 0 8px 8px 8px;
        border-style: solid;
        border-color: #f50 transparent;
    }
    ul{
        position: absolute;
        top: -120px;
        width: 30%;
        height: 110px;
        overflow: auto;
        padding: 5px 0;
        border: 1px #eee solid;
        border-radius: 5px;
        background: white;
    }
    .lis3>ul{
        width: 60%;
    }
    li{
        list-style: none;
        text-indent: 1em;
        padding: 5px 0;
        user-select: none;
        cursor: pointer;
    }
    .test {
    position: relative;
    }
    .test:after {
        position: absolute;
        right: 14px;
        top: 10px;
        width: 0;
        height: 0;
        content: "";
        border-width: 6px 0 6px 6px;
        border-style: solid;
        border-color: transparent white;
    }
    .test:before {
        position: absolute;
        right: 12px;
        top: 8px;
        content: "";
        border-width: 8px 0 8px 8px;
        border-style: solid;
        border-color: transparent #f50;
    }
    li:hover{
        background: rgba(255, 85, 0, .1)
    }
</style>