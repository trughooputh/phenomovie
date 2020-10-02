<template>
  <div class="Logo">
    <img
      alt="LoveToKnow Media logo"
      src="../../assets/ltkm-logo.png"
    >
    <span class="Logo__Subtitle is-uppercase">Movies</span>
  </div>
</template>

<style lang="scss" scoped>
.Logo {
  position: relative;
  height: 34px;
  &__Subtitle {
    position: absolute;
    bottom: -5px;
    left: 25px;
    font-size: 10px;
  }
  img {
    height: 30px;
  }
}
</style>
