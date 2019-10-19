<template>
  <div class="element_index">
    <div>
        <h3>开关</h3>
        <switcher :switcherIsOn='switcherIsOn' @switcherTurnOn='switcherTurnOn'></switcher>
    </div>
    <nav v-show="!switcherIsOn">
        <hr>
        <div>
            <h3>穿梭框</h3>
            <transfer :transferValue="transferValue" :transferData="transferData"></transfer>
            <hr>
        </div>
        <div>
            <h3>级联选择器</h3>
            <cascader-selector></cascader-selector>
            <hr>
        </div>
         <div>
            <h3>滑块</h3>
            <slider></slider>
            <hr>
        </div>
        <div>
            <h3>计数器</h3>
            <input-number @numChange="numChange" :numStep="30">
                <!-- <h3 slot="hahaha">I'm slot</h3>
                 -->
            </input-number>
            <hr>
        </div>
        <div>
            <h3>选择器</h3>
            <select-selector></select-selector>
            <hr>
        </div>
        <!-- <div>
            <h3>评分</h3>
            <rate></rate>
            <hr>
        </div> -->
    </nav>
  </div>
</template>

<script>
import inputNumber from "./InputNumber";
import selectSelector from "./SelectSelector";
import cascaderSelector from './CascaderSelector';
import switcher from './Switcher';
import slider from './Slider';
import rate from './Rate';
import transfer from './Transfer';

export default {
    name: 'elementIndex',
    components: {
        inputNumber,
        selectSelector,
        cascaderSelector,
        switcher,
        slider,
        rate,
        transfer
    },
    data() {
        const generateData = _ => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
                data.push({
                    key: i,
                    label: `备选项 ${ i }`,
                    disabled: i % 4 === 0,
                    isChecked: false
                });
            }
            return data;
        };
        return {
            switcherIsOn: true,
            transferData: generateData(),
            transferValue: [1, 4, 6]
        }
    },
    methods: {
        numChange({val, oldVal}) {
            console.log(val,oldVal)
        },
        switcherTurnOn(){
            this.switcherIsOn = !this.switcherIsOn;
            console.log('e',this.switcherIsOn)
        }
    }
}
</script>

<style>
    li{
        list-style: none;
    }
</style>