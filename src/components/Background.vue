<template>
  <teleport to="body">
    <div class="background-panel">

    </div>
  </teleport>
</template>

<script>
export default {
  name: "Background"
}
</script>

<style scoped lang="scss">
.background-panel {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
