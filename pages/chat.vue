<template>
  <chat-iframe class="full-height w-screen" />
</template>

<style lang="css" scoped>
.full-height {
  min-height: 100vh;
  /* fix for mobile full height without scroll */
  /* https://allthingssmitty.com/2020/05/11/css-fix-for-100vh-in-mobile-webkit/ */
  min-height: -webkit-fill-available;
}
</style>
