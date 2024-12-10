<template>
    <div class="MiddleCompon">
      <!-- 顶部功能区域 -->
      <div class="top-section">
        <div class="option" v-for="item in topOptions" :key="item.message">
          <div class="icon">
            <img :src="item.image" :alt="item.message" />
          </div>
          <div class="text">
            <h3>{{ item.title }}</h3>
            <p>{{ item.message }}</p>
          </div>
        </div>
      </div>
      <div class="menu-section">
        <div class="menu-item" v-for="menu in menuItems" :key="menu.message">
          <!-- Vant 图标 -->
          <van-icon :name="menu.icon" class="menu-icon" />
          <p>{{ menu.message }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MiddleCompon",
    data() {
      return {
        // 顶部功能区数据
        topOptions: [
          {
            title: "到店自取",
            message: "下单免排队",
            image: require("@/assets/images/daodian.png"),
          },
          {
            title: "雪王外送",
            message: "甜蜜送到家",
            image: require("@/assets/images/waimai.png"),
          },
        ],
        // 底部菜单数据（改为使用 Vant 图标）
        menuItems: [
          {
            message: "周边商城",
            icon: "shop-o", // Vant 图标名
          },
          {
            message: "进群有礼",
            icon: "gift-o", // Vant 图标名
          },
          {
            message: "雪王魔法铺",
            icon: "shop-collect-o",
          },
          {
            message: "每日抽奖",
            icon: "fire-o", // Vant 图标名
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .MiddleCompon {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f0f3;
    padding: 20px;
  }
  
  .top-section {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .option {
    flex: 1;
    margin: 0 10px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 15px;
  }
  
  .option .icon img {
    width: 90px;
    height: 90px;
    margin-bottom: 1px;
  }
  
  .option .text h3 {
    font-size: 16px;
    color: #333;
    margin: 0;
    margin-top: 0px;
    margin-bottom: 1px;
  }
  
  .option .text p {
    font-size: 14px;
    color: #666;
    margin-top: 2px;
    margin-bottom: 0px;
  }
  
  .menu-section {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  
  .menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .menu-icon {
    font-size: 40px;
    color: #666;
    margin-bottom: 5px;
  }
  
  .menu-item p {
    font-size: 14px;
    color: #333;
  }
  </style>
