<template>
  <Nuxt id="app" />
</template>

<style>
body {
  min-height: 100vh;
  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;
  display: flex;
  height: -moz-available;          /* WebKit-based browsers will ignore this. */
  height: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
  height: fill-available;
}

html {
  height: -webkit-fill-available;
}

#__nuxt, #__layout {
  min-height: 100%;
  position: relative;
}
</style>
