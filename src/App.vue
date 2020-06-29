<template>
  <div id="app">
    <CustomMenu></CustomMenu>
    <main>
      <router-view/>
    </main>
    <CustomFooter></CustomFooter>
  </div>
</template>

<script>
import CustomMenu from '@/components/CustomMenu/CustomMenuComponent.vue'
import CustomFooter from '@/components/CustomFooter/CustomFooterComponent.vue'

export default {
  name: 'App',
  components: {
    CustomMenu,
    CustomFooter
  },
  created () {
    console.log(process.env)
  }
}
</script>

<style>
html, body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
  height: 100vh;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

#app > * {
  flex-shrink: 0;
}

#app {
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
}
</style>
