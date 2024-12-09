<template>
    <div>
      <img :src="headPicture" alt="logo">
      <span>{{ text_title }}</span>
      <van-cell-group inset class="custom-cell-groups">
        <van-field v-model="phoneNumber" :placeholder="text_phone_input" class="custom-input" />
      </van-cell-group>
      <van-cell-group inset>
        <van-field v-model="smsCode" center clearable :placeholder="text_smscode_input" class="custom-input">
          <template #button>
            <van-button size="small" type="primary" class="custom-button" @click="getSMSCode">
              {{ text_smscode_button }}
            </van-button>
          </template>
        </van-field>
      </van-cell-group>
      <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" class="login" @click="login_confirm">
        {{ text_login_button }}
      </van-button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeadPictureCompon',
    data() {
      return {
        text_title: '手机验证码登录',
        text_phone_input: '手机号码',
        text_smscode_input: '短信验证码',
        text_smscode_button: '获取验证码',
        text_login_button: '登录',
        phoneNumber: '',
        smsCode: '',
        headPicture: require('@/assets/images/mxt.png')
      }
    },
    methods: {
        /* 插眼
        
        这个地方需要两个接口
        一个用来获取验证码
        一个用来登录（将输入的验证码和手机号码提交到服务器）
        */
        getSMSCode(){
            console.log('获取验证码');
        },
        login_confirm(){
            console.log(this.phoneNumber, this.smsCode);
        }

    }
  }
  </script>
  
  <style scoped>
  img {
    width: 60%;
    margin: 20px auto;
  }
  
  .custom-input >>> .van-field__control {
    color: rgb(7, 0, 0);
    height: 34px;
    background-color: #f0f0f0;
    font-size: 16px;
    border-radius: 4px;
    padding-left: 10px;
  }
  
  .custom-button {
    background-color: #f56839;
    color: #fdfdfd;
    font-size: 16px;
  }
  
  span {
    width: 100%;
    display: block;
    margin: 2px 0 2px 0;
    font-weight: bold;
  }
  
  .login {
    width: 80%;
    margin: 20px auto;
    font-size: 16px;
    border-radius: 16px ;
    background-color: #f56839;
  
  }
  </style>