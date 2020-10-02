<template>
  <div class="Loader my-3">
    <img src="@/assets/loader.gif">
  </div>
</template>

<style lang="scss" scoped>
@keyframes fadeIn {
  from { opacity: 0; }
}

.Loader {
  img {
    animation: fadeIn .3s infinite alternate;
  }
}

</style>
