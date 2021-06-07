<template>
  <header>

    <div class="logo-container">
      <img src="/logo.jpg" alt="" class="logo">
      <div class="logo-text">hello world</div>
    </div>

    <ul class="nav-links">
      <li><a href="#" class="nav-link">menu1</a></li>
      <li><a href="#" class="nav-link">menu2</a></li>
      <li><a href="#" class="nav-link">menu3</a></li>
    </ul>

    <div class="search-box">
      <img src="/svg/search.svg" alt="">
      <input type="text">
    </div>

    <div class="datetime">{{ dateTime }}</div>
  </header>
</template>

<script lang="ts">
import {Vue, Options} from 'vue-class-component';
import moment from "moment";

@Options({
  name: 'Header'
})
export default class extends Vue {
  dateTime = '';

  created() {
    setInterval(() => {
      moment.locale('zh-cn');
      this.dateTime = moment().format('a h:mm:ss');
    }, 1000);
  }
}
</script>

<style scoped lang="scss">
header {
  height: 5vh;
  //background-color: #42b0b9;
  display: flex;
  box-shadow: 0 1px 10px 1px #4978a0;

  .logo-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .logo {
      width: auto;
      height: 80%;
      margin-left: 20px;
      filter: drop-shadow(2px 4px 6px #4978a0);
      border-radius: 50%;
    }

    .logo-text {
      color: #42b983;
      font-size: 1.2rem;
      margin-left: 10px;
      font-weight: bold;
      cursor: pointer;
    }
  }

  .nav-links {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 2;

    .nav-link {
      text-decoration: none;
      color: #42b0b9;
      background-color: transparent;
      padding: 10px 20px;
    }

    .nav-link:hover {
      background-color: #4978a0;
      color: white;
      border-radius: 5px;
    }
  }

  .search-box {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 1.8rem;
      margin-right: 1rem;
    }

    input {
      border: none;
      background: transparent;
      height: 50%;
      width: 50%;
      border-radius: 5px;
      text-indent: 1rem;
      caret-color: white;
      outline: 1px solid #4978a0;
      color: white;
    }

  }
}

.datetime {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0 10px;
}
</style>
