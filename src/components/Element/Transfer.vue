<template>
  <div class="transfer">
    <hjCheckbox></hjCheckbox>
      <div class="list">
        <div class="title">
          <div class='self_defining_checkbox'></div>
          <span>选项1</span>
          <span>{{0}}/{{list1Item.length}}</span>
        </div>
        <ul>
          <li v-for="(item, i) in list1Item" :key="i">
            <div class='self_defining_checkbox'></div>
            <span>{{item.label}}</span>
          </li>
        </ul>
      </div>
      <div class='transfer_btn'>        
        <div>&lt;</div>
        <div>&gt;</div>
      </div>
      <div class="list">
        <div class="title">
          <div class='self_defining_checkbox'></div>
          <span>选项2</span>
          <span>{{0}}/{{list2Item.length}}</span>
        </div>
        <ul>
          <li v-for="(item, i) in list2Item" :key="i" @click="transferData[i].isChecked = !transferData[i].isChecked">
            <div class='self_defining_checkbox' :style="{background: transferData[i].isChecked ? '#f50' : '#fff', borderColor: transferData[i].isChecked ? '#f50' : '#eee', }"></div>
            <span>{{item.label}}</span>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import hjCheckbox from './HJCheckbox';
export default {
    name: 'transfer',
    components: {
      hjCheckbox
    },
    props: {
      transferValue: {
        type: Array,
        default() {
          return []
        }
      },
      transferData: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
        return {
        }
    },
    mounted() {
      console.log(this.transferData[0].isChecked)
    },
    computed: {
      list1Item() {
        let arr = [];
        for (let i = 0; i < this.transferData.length; i++) {
          arr.push(this.transferData[i])
        }
        for (let i = this.transferValue.length; i >0 ; i--) {
          arr.splice(this.transferValue[i]-2, 1);
        }
        return arr;
      },
      list2Item() {
        let arr = [];
        for (let i = 0; i < this.transferValue.length; i++) {
          arr.push (this.transferData[this.transferValue[i]-1])
        }
        return arr;
      }
    }

}
</script>

<style scoped>
  /* input[type='checkbox']{
    width: 1em;
    height: 1em;
    background-color: #fff;
    -webkit-appearance: none;
    border: 1px #bbb solid;
    border-radius: 5px;
    outline: none;
  } */
  .transfer {
    display: flex;
    margin: 0 auto;
    width: 500px;
    height: 300px;
    user-select: none;
  }
  .list {
    width: 45%;
    border: 1px solid #ddd;
  }
  .transfer_btn{
    margin: 100px 20px;
  }
  .transfer_btn>div {
    position: relative;
    width: 2em;
    height: 2em;
    line-height: 2em;
    font-family: 'Courier New', Courier, monospace;
    background: #eee;
    border: 1px #bbb solid;
    border-radius: 50%;
    color: #bbb;
    margin: 5px;
    cursor: not-allowed;
  }
  .title {
    position: relative;
    width: 100%;
    height: 10%;
    line-height: 30px;
    cursor: pointer;
    background-color: #eee;
    border-bottom: 1px #ddd solid;
  }
  .title>div {
    width: 1em;
    height: 1em;
    top: 5px;
  }
  .self_defining_checkbox {
    position: relative;
    border: 1px #bbb solid;
    border-radius: 2px;
    margin-left: 5px;
    background-color: #fff;
    font-family: cursive;
    font-weight: bolder;
  }
  .self_defining_checkbox:hover {
    border-color: #f50; 
  }
  .title>span {
    position: absolute;
    top: 0;
    left: 1.5em;
  }
  .title>span:nth-of-type(2) {
    top: 0;
    left: 178px;
    font-size: 12px;
  }
  ul {
    position: relative;
    padding: 0;
    overflow: auto;
    height: 90%;
  }
  li {
    display: flex;
    cursor: pointer;
    font-size: 16px;
    margin: 8px 0;
  }
  li:hover {
    color: #f50;
  }
  li>div {
    width: 15px;
    height: 15px;
    top: 2px;

  }
  li>span {
    margin-left: 5px;
  }
</style>