<template>
  <div class="err_msg">
      <div class="overlay">
      <div id='box'>
          <div>
              {{errTitle}}
              <a @click='handleClose'>X</a>
          </div>
          <div v-html="errContent">
          </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'errMsg',
    props: {
            errContent: {
                default:'身份证信息不合法,请重新输入!'
            }
        },
    data(){
        return{
            errTitle: '注意:'
        }
    },
    methods: {
        handleClose() {
            this.$emit("closeModal");
        }
    }
}
</script>

<style>
    #box{
        width: 300px;
        height: 200px;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        background: #fff;
        border: #ddd 2px solid;
    }
    #box>div:nth-child(1){
        text-align: left;
        border-bottom: #ddd 2px solid;
        color: red;
    }
    #box a{
        float: right;
        margin-right: 5px;
        cursor: pointer;
    }
    .overlay {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgb(0, 0, 0, .3);
        transition: all .3s;
        opacity: 1;
    }
</style>