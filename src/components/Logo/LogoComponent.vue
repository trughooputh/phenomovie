<template>
  <div class="Logo">
    <img
      alt="MyTheresa logo"
      src="../../assets/mytheresa-logo.png"
    >
    <br>
    <span class="Logo__Subtitle is-uppercase">Movie</span>
  </div>
</template>

<style lang="scss" scoped>
.Logo {
  position: relative;
  height: 34px;
  &__Subtitle {
    position: absolute;
    bottom: -5px;
    left: 34px;
    font-size: 10px;
  }
  img {
    height: 30px;
  }
}
</style>
