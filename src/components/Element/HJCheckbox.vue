<template>
  <div class="hj_checkbox">
    <div :style="{background: 1 ? '#fff' : '#f50'}">{{checkIcon}}</div>
  </div>
</template>

<script>
export default {
    name: 'hjCheckbox',
    props: {

    },
    data() {
        return {

        }
    },
    computed: {
        checkIcon(){
            switch(isChecked) {
                case 'partChecked':
                    return '-'
                case true:
                    return '√'
                case false:
                    return ''
            }
        }
    }
}
</script>

<style scoped>
  .hj_checkbox>div {
    height: 1em;
    width: 1em;
    position: relative;
    border: 1px #bbb solid;
    border-radius: 2px;
    margin-left: 5px;
    background-color: #fff;
    font-family: cursive;
    font-weight: bolder;
    cursor: pointer;
  }
  .hj_checkbox>div:hover {
    border-color: #f50;
  }
</style>