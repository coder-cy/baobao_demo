<template>
  <div class="rate">
      <div class="box" @mouseout='resetRate' @click="rated=true">
          <span class="one" :style="{color:colorOne}" @mouseover='rateOne'>★</span>
          <span class="two" :style="{color:colorTwo}" @mouseover='rateTwo'>★</span>
          <span class="three" :style="{color:colorThree}" @mouseover='rateThree'>★</span>
          <span class="four" :style="{color:colorFour}" @mouseover='rateFour'>★</span>
          <span class="five" :style="{color:colorFive}" @mouseover='rateFive'>★</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'rate',
    data() {
        return {
            colorOne: '#eee',
            colorTwo: '#eee',
            colorThree: '#eee',
            colorFour: '#eee',
            colorFive: '#eee',
            local: 0,
            localBuffer: 0,
            rated: false
        }
    },
    watch: {
        local(val, oldval) {
            this.rated = false;
        }
    },
    methods:{
        resetRate(){
            if(this.rated){
                this.local = this.localBuffer;
            }
            
            switch(parseInt(this.local)) {
                case 0:
                    this.rateZero();
                    break
                case 1:
                    this.rateOne();
                    break
                case 2:
                    this.rateTwo();
                    break
                case 3:
                    this.rateThree();
                    break
                case 4:
                    this.rateFour();
                    break
                case 5:
                    this.rateFive();
                    break
            }
        },
        rateZero(){
            this.colorOne = this.colorTwo = this.colorThree = this.colorFour = this.colorFive = '#eee';
        },
        rateOne(){
            this.colorOne = '#bbb';
            this.colorTwo = this.colorThree = this.colorFour = this.colorFive = '#eee';
                this.localBuffer = 1;
        },
        rateTwo(){
            this.colorOne = this.colorTwo = '#db9';
            this.colorThree = this.colorFour = this.colorFive = '#eee';
                this.localBuffer = 2;
        },
        rateThree(){
            this.colorOne = this.colorTwo = this.colorThree = '#fb6';
            this.colorFour = this.colorFive = '#eee';
                this.localBuffer = 3;
        },
        rateFour(){
            this.colorOne = this.colorTwo = this.colorThree = this.colorFour = '#f83';
            this.colorFive = '#eee';
                this.localBuffer = 4;
        },
        rateFive(){
            this.colorOne = this.colorTwo = this.colorThree = this.colorFour = this.colorFive = '#f50';
                this.localBuffer = 5;
        }

    }
}
</script>

<style scoped>
    .box {
        color: #eee;
        font-size: 1.5em;
        cursor: pointer;
        user-select: none;
    }
    span {
        display: inline-block;
        transition: .5s;
    }
    span:hover {
        transform: scale(1.2);
    }
    /* .box>div::after {
        position: absolute;
        content: '★★★★★';
        background-image: -webkit-linear-gradient(left,#eee,#f50);
        -webkit-background-clip: text; 
        -webkit-text-fill-color: transparent; 
    } */
</style>