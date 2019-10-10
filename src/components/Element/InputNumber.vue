<template>
  <div class="input_number">
      <slot name="hahaha"></slot>
      <div>
          <input @focus="saveNum" @blur="validateNum" type="text" v-model="num">
          <div @click="minusNum" class='minus'>-</div>
          <div @click="plusNum" class='plus'>+</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'inputNumber',
    data(){
        return{
            num: 0,
            oldNum: 0
        }
    },
    props:{
        numStep:{
            type: Number,
            default: 1
        }
    },
    watch: {
        num(val, oldVal){
            this.$emit('numChange',{val, oldVal})
        }
    },
    methods: {
        minusNum(){
           this.num-=this.numStep
        },
        plusNum(){
           this.num+=this.numStep
        },
        saveNum(){
            if(!isNaN(this.num+1)){
                if(this.num>=0){  
                    this.oldNum = parseInt(this.num)
                }else{
                    this.oldNum = this.num
                }
            }
        },
        validateNum(){
            if(isNaN(this.num+1)){  
                this.num = this.oldNum
                return
            }
            this.num = parseInt(this.num)
        }
    },
    computed: {
    }
}
</script>

<style scoped>
  /* input[type=number] {
    appearance: textfield;
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }    */
  .input_number>div{
      margin: 0 auto;
      position: relative;
      width: 300px;
      height: 50px; /*同时需要修改main>div 的line-height*/
      border: 2px solid #ddd;
      border-radius: 5px;
  }
  .input_number>div:hover{
      border-color: #aaa;
  }
  .input_number>div>div{
      position: absolute;
      width: 20%; 
      height: 100%;
      line-height: 50px;
      background: #ddd;
      user-select: none;
      cursor: pointer;
  }
  .input_number>div>div:hover{
      background: #dde;
      color: #aaa;
  }
  .minus{
      border-radius: 2px 0 0 2px;
  }
  .plus{
      right: 0;
      border-radius: 0 2px 2px 0;
  }
  .input_number>div>input{
      float: left;
      height: 100%;
      width: 100%;
      padding: 0 25%;
      border: 2px transparent solid;
      border-radius: 5px;
      text-align: center;
      outline: none;
      background: #fff;
      /* box-sizing: content-box; */
  }
</style>