<template>
  <div class="transfer_string">
    <el-tabs class='tab' value="transferString" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="transferString" name="transferString">
        <el-input autofocus clearable class='input input-with-select' v-model="input" @blur="changeInput" @keyup.enter.native='changeInput'>
          <el-select v-model="select" slot="prepend" placeholder="???" @select=''>
            <el-option label="underline" value="1"></el-option>
            <el-option label="dash" value="2"></el-option>
          </el-select>
        </el-input>
        <p><el-button type="text">{{answer||'answer'}}</el-button></p>
      </el-tab-pane>
      <el-tab-pane label="factorial" name="factorial">
        <el-input-number class='input' v-model="number" :min=0 :max=100 @change='factorial'></el-input-number>
        <p><el-button type="text" @click="dialogVisible = true">{{answer||'answer'}}</el-button></p>
      </el-tab-pane>
      <el-tab-pane label="PPDI" name="PPDI">
        <el-slider class='slider' v-model="value" :step="1" :min='3' :max="6" show-stops @change='renderPPDI(value)'></el-slider>
        <p><el-button type="text" @click="dialogVisible = true">{{answer||'answer'}}</el-button></p>
        <el-dialog title="Info" :visible.sync="dialogVisible" width="30%">
          <span>{{answerOfPPDI || 'Please Choose a number'}}</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
          </span>
        </el-dialog>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'transferString',
  data(){
    return {
      input: 'INPUT_YOUR_STRING',
      answer: '',
      answerOfPPDI: [],
      number: 0,
      value: 3,
      dialogVisible: false,
      select: true
    }
  },
  methods: {
    changeInput(){
      const data = this.input.split("_");
      let res = '';
      data.forEach( (item, i) => {
          for (const index in item) {
            if (index === '0' && i > 0) {
              res += item[index].toUpperCase();
            } else {
              res += item[index].toLowerCase();
            }
          }
      })
      this.answer = res;
    },
    factorial(){
      let data = this.number;
      if (data < 0) return;
      let res = 1;
      for (let i = data; i > 1; i--) {
        res *= i;
      }
      this.answer = res;
    },
    renderPPDI(value){
      let res = [];

      // for (let i = Math.pow(10, value-1); i < Math.pow(10, value)-1; i++) {
      //   const a = parseInt(i/100);
      //   const b = parseInt((i-a*100)/10);
      //   const c = parseInt(i-a*100-b*10);
      //     console.log(a,b,c)
      //   if ((Math.pow(a, value)+Math.pow(b, value)+Math.pow(c, value))===i) {
      //     res.push(i) 
      //   } 
      // }

      for (let i = Math.pow(10, value-1); i < Math.pow(10, value)-1; i++) {
        // for (const index of i.toString()) {
          const data = i.toString().split('');
          let buffer = 0;
          data.forEach(element => {
            buffer += Math.pow(element, value);
          });
          if(buffer == i) {
            res.push(i)
          }
        // }
      }

      this.answerOfPPDI = res;
      this.answer = res.length + ' answers, show more details';
    },
    handleClick(){
      this.answer = this.answerOfPPDI = '';
    },
    handleClose(done) {
      this.$confirm('Confirm to close?')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
  .transfer_string{
    width: 500px;
    margin: 0 auto;
  }
  .tab{
    height: 180px;
  }
  .input{
    width: 300px;
    margin: 10px;
  }
  .slider{
    margin: 10px;
  }
</style>