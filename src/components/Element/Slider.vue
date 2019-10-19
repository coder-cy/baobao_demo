<template>
  <div class="slider">
      <div class="box">
          <div class="bg_bar">
              <div class="bar_slider" :style="{cursor:sliderCursor}" @mousedown="isDrag($event)"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'slider',
    data() {
        return{
            sliderCursor: 'grab'
        }
    },
    methods: {
        isDrag(){
            this.sliderCursor = 'grabbing';
            
        }
    }
}
</script>

<style scoped>
    .box {
        margin: 0 auto;
        width: 300px;
        height: 10px;
    }
    .bg_bar {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background: #eee;
        cursor: pointer;
    }
    .bg_bar:before {
        content: "";
        width: 80%;
        height: 100%;
        background: #f50;
        border-radius: 10px;
        /* border: 20px solid #f50; */
        position: absolute;
        left: 0;
    }
    .bar_slider {
        position: absolute;
        top: -4px;
        left: 78%;
        content: "";
        width: 1em;
        height: 1em;
        background: #fff;
        border: 2px solid #f50;
        border-radius: 50%;
        cursor: grab;
    }
    .bar_slider:hover{
        transform: scale(1.5);
        transition: .1s;
    }
</style>