<template>
  <div class="element_index">
    <nav>
        <div>
            <h2>计数器</h2>
            <input-number @numChange="numChange" :numStep="20">
                <!-- <h3 slot="hahaha">I'm slot</h3>
                 -->
            </input-number>
        </div>
        <div>
            <h2>级联选择器</h2>
            <cascader-selector></cascader-selector>
            <hr>
        </div>
        <div>
            <h2>选择器</h2>
            <select-selector></select-selector>
            <hr>
        </div>
    </nav>
  </div>
</template>

<script>
import inputNumber from "./InputNumber";
import selectSelector from "./SelectSelector";
import cascaderSelector from './CascaderSelector';

export default {
    name: 'elementIndex',
    components: {
        inputNumber,
        selectSelector,
        cascaderSelector
    },
    data(){
        return{

        }
    },
    methods: {
        numChange({val, oldVal}) {
            console.log(val,oldVal)
        }
    }
}
</script>

<style>

</style>