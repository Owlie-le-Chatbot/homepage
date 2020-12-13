<template>
  <div class="flex flex-row">
    <div class="flex-grow h-screen overflow-auto">
      <header
        class="w-full flex px-2 py-2 lg:hidden block fixed bg-white shadow"
      >
        <chat-button class="flex-shrink ml-auto" />
      </header>

      <div class="container lg:px-24 px-12 mt-24 lg:mt-12 mb-12 mx-auto">
        <logo class="w-48 mx-auto mb-12" />

        <nuxt-content class="prose" :document="data" />

        <app-footer />
      </div>
    </div>

    <div class="hidden lg:block flex-shrink h-screen chatbot border-l-2">
      <chat-iframe />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const data = await $content('home').fetch();
    return {
      data,
    };
  },
};
</script>

<style>
.chatbot {
  width: 650px;
}
h1 {
  @apply text-center;
}
</style>
