<template>
  <div class="membership-section">
    <!-- 顶部信息 -->
    <div class="header">
      <div class="info">
        <span>{{ user.name }}</span>
        <p>甜蜜值 {{ user.points }}/100</p>
        <div class="progress-bar">
          <div class="progress" :style="{ width: user.points + '%' }"></div>
        </div>
        <p>再升一级可享【新品试饮】等 {{ benefitsCount }} 项权益</p>
      </div>
      <img class="mascot head-image" src="@/assets/images/daodian.png" alt="Mascot" />
    </div>

    <!-- 已解锁权益 -->
    <div class="benefits">
      <div class="title  head-title" >
        您已解锁 {{ currentBenefits.length }} 项特权
        <span class="arrow">〉</span>
      </div>
      <div class="tabs">
        <div class="tab" v-for="(tab, index) in tabs" :key="index" :class="{ active: activeTab === index }"
          @click="activeTab = index">
          {{ tab }}
        </div>
      </div>
      <div class="benefit-items">
        <div class="benefit-item" v-for="(item, index) in currentBenefits" :key="index">
          <img :src="item.icon" :alt="item.title" />
          <p class="title">{{ item.title }}</p>
          <p class="desc">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "myCardCompon",
  data() {
    return {
      user: {
        name: "小雪球",
        points: 81,
      },
      tabs: ["每日礼", "成长礼", "心意礼"],
      activeTab: 0, // 默认选中第一个标签
      benefitsCount: 12,
      benefits: {
        // 不同标签对应的权益
        daily: [
          {
            icon: require("@/assets/images/app.png"),
            title: "周三会员日",
            description: "满12元减2元",
          },
          {
            icon: require("@/assets/images/app.png"),
            title: "周四加料日",
            description: "满12元可享",
          },
          {
            icon: require("@/assets/images/app.png"),
            title: "周五秒杀日",
            description: "雪王币秒杀券",
          },
          {
            icon: require("@/assets/images/app.png"),
            title: "周一咖啡日",
            description: "3.99喝美式",
          },
        ],
        growth: [
          {
            icon: require("@/assets/images/app.png"), // 示例图标
            title: "新手礼包",
            description: "20元券包",
          },
          {
            icon: require("@/assets/images/app.png"),
            title: "生日礼物",
            description: "优惠券7折起",
          },
          {
            icon: require("@/assets/images/app.png"),
            title: "等级加速",
            description: "速度加10%",
          },
          {
            icon: require("@/assets/images/app.png"),
            title: "升级礼包",
            description: "优惠券85折起",
          },
        ],
        gifts: [
          {
            icon: require("@/assets/images/app.png"),
            title: "客服绿色通道",
            description: "优先接线",
          },
          {
            icon: require("@/assets/images/app.png"),
            title: "周边特价",
            description: "最低8折买周边",
          },
          {
            icon: require("@/assets/images/app.png"),
            title: "免费一袋冰",
            description: "敬请期待",
          },
          {
            icon: require("@/assets/images/app.png"),
            title: "音乐节门票",
            description: "免费抽门票",
          },
        ],
      },
    };
  },
  computed: {
    currentBenefits() {
      // 根据当前选中的标签返回对应的权益
      const mapping = {
        0: "daily",
        1: "growth",
        2: "gifts",
      };
      return this.benefits[mapping[this.activeTab]];
    },
  },
};
</script>


<style scoped>
.membership-section {
  margin: 4px;
  background: #fff8e5;
  padding: 1px;
  border-radius: 10px;
  font-family: Arial, sans-serif;
}

/* 顶部信息 */
.header {
  display: flex;
}
.info{
  text-align: left;
  margin-left: 10px;
}
.info span {
  display: block;
  font-size: 18px;
  color: #ff8c00;
 
}
.head-title{
  margin: 2px 0 4px 10px; 
}
.info p {
  font-size: 12px;
  color: #666;
}


.progress-bar {
  background: #f3e2c7;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px 0;
}

.progress {
  height: 100%;
  background: #ff8c00;
  transition: width 0.3s;
}

.mascot {
  width: 80px;
  height: 80px;
}
.head-image{
  
  width: 120px;
  height: 100px;
  margin-left: 20px;

}
.benefits {
  padding-top: 5px;
 box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);
 border-radius: 10px;
 width: 100%;
}

.benefits .title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.arrow {
  color: #999;
}

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
}

.tab {
  padding: 5px 10px;
  background: #ffffff;
  border-radius: 20px;
  border: 2px solid #a9a7a7d1;
  font-size: 14px;
  font-weight: bold;

}

.tab.active {
  background: #ff8c00;
  color: #fff;
}

.benefit-items {
  width: 100%;
  display: flex;
  justify-content: space-between;

}

.benefit-item {
width: 23%;
  background: #fff;
  border-radius: 6px;
  flex-direction: column;
 
}

.benefit-item img {
  width: 60px;
  height: 50px;
 margin-top: 10px;
}

.benefit-item .title {
  font-size: 12px;
  font-weight: bold;
  color: #333;
  margin: 2px 0 0 10px;
}

.benefit-item .desc {
  font-size: 11px;
  color: #999;
  text-align: center;
  line-height: 1.4;
}
</style>
