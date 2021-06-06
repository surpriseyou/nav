<template>
  <Header></Header>
  <Main></Main>
  <Background />
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import Header from '@/components/Header.vue';
import Background from '@/components/Background.vue';
import Main from '@/components/Main.vue'

@Options({
  components: {
    Header,
    Background,
    Main
  },
})
export default class App extends Vue {

}
</script>

<style lang="scss">
</style>
