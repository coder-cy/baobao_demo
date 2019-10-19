<template>
  <div class="switcher">
      <div class='box'>
          <div class='outer_box' :style="{backgroundColor:bgColor}" @click="switcherTurn">
              <div class="inner_box" :style="{left:leftPos}"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'switcher',
    props: {
        switcherIsOn: {
            default: false
        }
    },
    data() {
        return{
            bgColor: '#ddd',
            leftPos: '2px'
        }
    },
    methods: {
        switcherTurn(){
            this.$emit("switcherTurnOn");
            this.bgColor = this.switcherIsOn ? '#f50' : '#ddd';
            this.leftPos = this.switcherIsOn ? '22px' : '2px';
            console.log('s',this.switcherIsOn)
        }
    }
}
</script>

<style scoped>
    .box {
        width: 40px;
        height: 20px;
        margin: 0 auto;
        font-size: 16px;
    }
    .outer_box {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        cursor: pointer;
        transition: .5s;
    }
    .inner_box {
        position: relative;
        top: 2px;
        width: 1em;
        height: 1em;
        background: #fff;
        border-radius: 50%;
        transition: .2s;
    }
</style>