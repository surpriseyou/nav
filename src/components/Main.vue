<template>
  <main>
    <ul class="left-nav">
      <li class="nav-tab-item">常用</li>
      <li class="nav-tab-item">前端</li>
      <li class="nav-tab-item">后端</li>
    </ul>

    <div class="nav-container">
      <div class="panel">
        <div class="title"></div>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style scoped lang="scss">
main {
  display: flex;
  min-height: 50vh;

  .left-nav {
    width: 150px;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .nav-tab-item {
      padding: 10px 20px;
      color: white;
      margin-bottom: 10px;
      cursor: pointer;
    }

    .nav-tab-item:hover {
      background-color: #4978a0;
    }
  }

  .nav-container {
    flex: 1;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
