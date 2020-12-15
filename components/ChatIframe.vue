<template>
  <iframe
    :src="`https://chat.csml.dev/channels/xxneg4neyafrlgczyqyl3iikmqhezxwm?debug=${debug_mode}`"
    width="100%"
    height="100%"
    frameborder="0"
  ></iframe>
</template>

<script>
export default {
  data() {
    let debug_mode = 'false';
    if (process.client) {
      const q = new URLSearchParams(window.location.search);
      debug_mode = q.get('debug') || 'false';
    }
    return {
      debug_mode,
    };
  },
};
</script>
