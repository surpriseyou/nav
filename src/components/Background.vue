<template>
  <teleport to="body">
    <canvas id="bgCanvas"></canvas>
  </teleport>
</template>

<script lang="ts">


import {defineComponent, onMounted} from "vue";
import Sky from "@/canvas/sky";

export default defineComponent({
  name: "Background",
  setup() {
    onMounted(() => {
      const canvas = document.getElementById('bgCanvas') as HTMLCanvasElement;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const ctx = canvas.getContext('2d')!;
      new Sky(ctx).draw();
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
