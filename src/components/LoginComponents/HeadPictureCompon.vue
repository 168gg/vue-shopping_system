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
    getSMSCode() {
      console.log('获取验证码');
    },
    login_confirm() {
      this.$router.push({ name: "home" });
    }
  }
}
</script>

<style scoped>
img {
  width: 80%;
  margin: 20px auto;
}

.custom-input >>> .van-field__control {
  color: rgb(7, 0, 0);
  background-color: #f0f0f0;
  font-size: 16px;
  border-radius: 4px;
  padding: 10px 0 10px 20px;
  font-size: 18px;
}

.custom-button {
  height: 40px;
  background-color: #f16a5b;
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
  padding: 25px 0 25px 0;
  font-size: 16px;
  border-radius: 16px;
  background-color: #EBB0A9;
}
</style>