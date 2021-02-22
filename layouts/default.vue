<template>
  <Nuxt id="app" />
</template>

<style>
body {
  min-height: 100vh;
  /* mobile viewport bug fix */
  min-height: -webkit-fill-available;
  display: flex;
}

html {
  height: -webkit-fill-available;
}

#__nuxt, #__layout {
  min-height: 100%;
}
</style>
