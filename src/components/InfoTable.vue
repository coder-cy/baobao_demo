<template>
  <div class="info_table">
      <!-- <errMsg ref='errMsg' v-if="this.$refs.errMsg.showErrMsg==='block'" /> -->
      <errMsg ref="defineErr" :errContent="errContent" @closeModal="closeModal" v-show="isShowErrMsgComp" />
      <table>
          <tr>
            <th colspan=4>填写资料</th>
          </tr>
          <tr>
              <td>
                <span>学生姓名</span>
              </td>
              <td colspan=3>
                <input v-model="myData.name" type="text">
              </td>
          </tr>
          <tr>
            <td>
                <span>身份证号码</span>
            </td>
            <td colspan=3>
                <input @blur='judging' v-model="myData.idNumber" :style='{borderColor:borderClr}' type="number">
            </td>
          </tr>
          <tr>
              <td>
                <span>性别</span>
              </td>
              <td>
                <select v-model="sex" disabled="disabled">
                    <option value="male">男</option>
                    <option value="female">女</option>
                </select>
              </td>
              <td>
                <span>出生日期</span>
              </td>
              <td>
                <input v-model="birthday" disabled="disabled" type="date">
              </td>
          </tr>
          <tr>
              <td>
                  <span>申请学校</span>
              </td>
              <td colspan=3>
                <select v-model="myData.mySchool">
                    <option v-for="(item, i) in schoolName" :key="i">{{item.name}}</option>
                </select>
              </td>
          </tr>
          <tr>
              <td colspan=4>
                  <button @click="saveInfo">提交</button>
              </td>
          </tr>
        
      </table>
  </div>
</template>

<script>
import errMsg from './ErrMsg';
import schoolInfo from '../assets/school.json';

export default {
    name: 'infoTable',
    components:{
        errMsg
    },
    data(){
        return{
            myData: {
                name: "小兔子",
                idNumber: '',
                mySchool: '上海交通大学'
            },
            borderClr: 'initial',
            isShowErrMsgComp: false,
            errContent: '',
            schoolName: schoolInfo.university,
            regId: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/
        }
    },
    mounted() {
        const myInfo = localStorage.getItem("myInfo");
        // console.log(myInfo, typeof myInfo);
        if (myInfo != null) {
            const myInfoObj = JSON.parse(myInfo);
            // console.log(myInfoObj)
        }
        
    },
    methods:{
        judging(){
            let regId = this.regId;
            if (this.myData.idNumber.length !== 18 || !regId.test(this.myData.idNumber)){
                this.borderClr = 'red';
                this.isShowErrMsgComp = true;
                this.errContent = "身份证信息不合法!";
            }else{
                this.borderClr = 'initial';
            }
        },
        closeModal() {
            this.isShowErrMsgComp = false;
        },
        saveInfo() {
            if (this.isAllValidated) {
                this.myData.sex = this.sex;
                this.myData.birthday = this.birthday;
                localStorage.setItem("myInfo", JSON.stringify(this.myData));
                this.errContent = "储存成功!";
            } else {
                this.errContent = "表单信息不合法!";
                
            }
            this.isShowErrMsgComp = true;
        }
    },
    computed:{
        sex(){
            let info = this.myData.idNumber.toString().split('');
            let res = parseInt(info[16]);
            // return res%2==0 ? 'female' : 'male';
            if(res%2===0){
                return 'female'
            }else if(res%2===1){
                return 'male'
            }else{
                return 0
            }
        },
        birthday(){
            const info = this.myData.idNumber;
            if (info.length < 14) {
                return "";
            }
            return `${info.substring(6, 10)}-${info.substring(10, 12)}-${info.substring(12, 14)}`;
        },
        isAllValidated(){
            return this.myData.name !== ""
                && this.myData.idNumber.length === 18
                && this.regId.test(this.myData.idNumber)
                && this.sex !== ""
                && this.birthday !== ""
        }
    }
}
</script>

<style scoped>
    table{
        margin: 0 auto;
        text-align: left;
    }
    td>input{
        width: 100%;
        height: 100%;
        background: #fff;
    }
    
    input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button {
        appearance: none;
        margin: 0;
    }

    td>select{
        box-sizing: border-box;
        padding-bottom: 7px;
        height: 100%;
        width: 100%;
        background: #ddd;
    }
    td>button{
        width: 100%;
        background: #fff;
        /* border: 2px #ddd solid; */
    }
    td>span::after{
        content: "*";
        color: red;
        margin-right: 10px;
    }
    th{
        text-align: center;
    }

</style>