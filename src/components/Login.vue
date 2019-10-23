<template>
  <div class="login">
      <div class="login_head">
        <span class="login_in" @click='regMode=false'>登录</span>
        <span class="regist_in" @click='regMode=true'>注册</span>
      </div>
      <div v-show="!regMode" class="login_main">
          <div>
              <p>账户：</p>
              <input  v-model="loginInfo.account" type="text">
          </div>
          <div>
              <p>密码：</p>
              <input type='password' v-model="loginInfo.pwd">
          </div>
          <button @click="validateLoginInfo">登录</button>
      </div>
      <div v-show="regMode" class="regist_main">
          <div>
              <p>账户：</p>
              <input @blur="validateRegistAccount" v-model="registInfo.account" type="text">
              <span :style="{color: valRegist.clr}">{{valRegist.msg}}</span>
          </div>
          <div>
              <p>用户名：</p>
              <input @blur="validateRegistName" v-model="registInfo.name" type="text">
          </div>
          <!-- <div>
              <p>密码：</p>
              <input @blur="validateRegistPwd" v-model="registInfo.pwd" type="password">
          </div>
          <div>
              <p>重复密码：</p>
              <input @blur="validateRegistPwdAgain" v-model="registInfo.pwd2" type="password">
          </div> -->
          <button @click="validateRegistInfo">注册</button>
      </div>

  </div>
</template>

<script>
import { validateAccount, validateName } from "../axiosJS.js";
import * as CONSTANT from "../assets/constant.js";

export default {
    name: 'login',
    data() {
        return {
            regMode: false,
            loginInfo: {
                account: '',
                pwd: 0
            },
            registInfo: {
                account: 'aaa@163.com',
                name: '',
                pwd: 0,
                pwd2: 0
            },
            valRegist: {
                msg: '',
                clr: '',
            }
        }
    },
    computed: {
    },
    methods: {
        loginIn() {

        },
        registIn() {

        },
        //校验登录账号是否重复
        validateLoginInfo() {
            const param = {
                userAccount: this.loginInfo.account
            }
            console.log(param)
            api.validateAccount(param);
        },
        validateRegistInfo() {
        },
        //校验账号是否合法
        validateRegistAccount() {
            const param = {
                userAccount: this.registInfo.account
            };
            this.valRegist.clr = 'red';
            if(!(/^1[3456789]\d{9}$/.test(param.userAccount)) && !(/^\w+(\.\w+)*@\w+(\.\w+)+$/.test(param.userAccount))) {
                this.valRegist.msg = '请输入手机号或邮箱';
                return
            };
            validateAccount(param).then(res=> {
                // const {data} = res;
                if (res == null || res.data == null || res.data.result == null) {
                    return;
                }
                const result = res.data.result;
                if (result === CONSTANT.VALIDATE_ACCOUNT_FAILED) {
                    this.valRegist.msg = '该账户已被注册'
                } else {
                    this.valRegist.clr = 'green';
                    this.valRegist.msg = '该账户可以被注册'
                }
            });

            // try {
            //     const res = await api.validateAccount(param);
            //     console.log(res.data);
            // } catch(err) {

            // }

        },
        validateRegistName() {
            validateName(param).then(res=> {
                // const {data} = res;
                if (res == null || res.data == null || res.data.result == null) {
                    return;
                }
                const result = res.data.result;
                if (result === CONSTANT.VALIDATE_ACCOUNT_FAILED) {
                    this.valRegist.msg = '该账户已被注册'
                } else {
                    this.valRegist.clr = 'green';
                    this.valRegist.msg = '该账户可以被注册'
                }
            });
        }
    }
}
</script>

<style scoped>
 .login {
     margin: 0 auto;
     width: 300px;
     min-height: 200px;
     padding: 5px;
 }
 .login_head {
     text-align: left;
 }
 .login_main {
     text-align: left;
 }
 .login_main>span {
     display: inline-block;
     width: 100px;
 }
 .login_main>button {
     text-align: center;
 }
</style>