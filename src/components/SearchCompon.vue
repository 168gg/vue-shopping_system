<template>
  <div class="search-container">
    <div class="search-input-container">
      <input
        v-model="query"
        @input="performSearch"
        @focus="clearResults"
        type="text"
        placeholder="搜索奶茶..."
        class="search-input"
      />
      <span class="search-icon">🔍</span>
    </div>
    <ul v-if="filteredResults.length" class="results-grid">
      <li v-for="(item, index) in filteredResults" :key="index" class="result-item">
        <img :src="item.image" :alt="item.name" class="result-image" />
        <div class="result-info">
          <p class="result-name">{{ item.name }}</p>
          <p class="result-price">¥10 起</p>
          <button class="add-button">+</button>
        </div>
      </li>
    </ul>
    <p v-else-if="query" class="no-results">没有找到相关结果。</p>
    <p v-else-if="!searching" class="default-text">点击搜索栏开始搜索！</p>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      query: "", // 用户的搜索关键词
      results: [
        { name: "经典奶茶", image: require("@/assets/images/zr001.png") },
        { name: "芋圆奶茶", image: require("@/assets/images/zr003.png") },
        { name: "抹茶奶茶", image: require("@/assets/images/zr004.png") },
        { name: "黑糖奶茶", image: require("@/assets/images/zr002.png") },
        { name: "草莓奶茶", image: require("@/assets/images/zr001.png") },
        { name: "哈密瓜奶茶", image:require("@/assets/images/zr002.png") },
        { name: "巧克力奶茶",  image:require("@/assets/images/zr006.png") },
        { name: "芒果奶茶", image:require("@/assets/images/zr002.png") },
        { name: "泰式奶茶",  image:require("@/assets/images/zr003.png") },
        { name: "乌龙奶茶", image:require("@/assets/images/zr004.png") },
      ], // 每个奶茶包含名称和图片 URL
      filteredResults: [], // 初始为空
      searching: false, // 搜索状态标志
    };
  },
  methods: {
    performSearch() {
      // 更新搜索状态
      this.searching = true;

      // 根据关键词过滤
      if (this.query.trim()) {
        this.filteredResults = this.results.filter(item =>
          item.name.includes(this.query) // 支持中文匹配
        );
      } else {
        this.filteredResults = [];
      }
    },
    clearResults() {
      // 点击搜索栏时清空结果，并标记为搜索中
      this.searching = true;
      this.filteredResults = [];
    },
  },
};
</script>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.search-input-container {
  display: flex;
  align-items: center;
  width: 80%;
  margin-bottom: 10px;
  position: relative;
}

.search-input {
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-icon {
  position: absolute;
  right: 10px;
  font-size: 18px;
  color: #888;
  cursor: pointer;
}

/* 调整搜索结果位置，避免被底部导航栏遮挡 */
.results-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 每行显示2个 */
  gap: 20px;
  width: 80%;
  padding: 0;
  list-style: none;
  margin-bottom: 80px; /* 为底部导航栏留出空间 */
  position: relative;
  z-index: 1; /* 确保结果不被导航栏遮挡 */
}

.result-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.result-image {
  width: 120px;
  height: 120px;
  margin-bottom: 10px;
  border-radius: 10px;
  object-fit: cover;
}

.result-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result-name {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.result-price {
  font-size: 12px;
  color: #888;
  margin-bottom: 5px;
}

.add-button {
  padding: 5px 10px;
  font-size: 14px;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #218838;
}

.no-results {
  color: #888;
  font-size: 14px;
}

.default-text {
  color: #555;
  font-size: 16px;
  margin-top: 20px;
}
</style>