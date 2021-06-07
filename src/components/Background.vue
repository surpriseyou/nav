<template>
  <teleport to="body">
    <canvas id="bgCanvas"></canvas>
  </teleport>
</template>

<script lang="ts">

import {skyBg} from "@/canvas/sky";

import {defineComponent, onMounted} from "vue";

export default defineComponent({
  name: "Background",
  setup() {
    onMounted(() => {
      const canvas = document.getElementById('bgCanvas') as HTMLCanvasElement;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext('2d')!;
      skyBg(ctx);
    })
    return {}
  }
})
</script>

<style scoped lang="scss">
canvas {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
}
</style>
