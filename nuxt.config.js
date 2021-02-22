export default {
  target: 'static',

  head: {
    title: 'Owlie le chatbot',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0' },
      { hid: 'description', name: 'description', content: 'Owlie est un chatbot gratuit de soutien psychologique' },
      { name: 'application-name', content: 'Owlie le chatbot' },
      { name: 'description', content: 'Owlie est un chatbot gratuit de soutien psychologique' },
      { name: 'image', content: 'https://www.owlielechatbot.fr/img/social-banner.png' },
      { name: 'author', content: 'Clevy' },
      { itemprop: 'name', content: 'Owlie le chatbot' },
      { itemprop: 'description', content: 'Owlie est un chatbot gratuit de soutien psychologique' },
      { itemprop: 'image', content: 'https://www.owlielechatbot.fr/img/social-banner.png' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Owlie le chatbot' },
      { name: 'twitter:description', content: 'Owlie est un chatbot gratuit de soutien psychologique' },
      { name: 'twitter:site', content: '@owlielechatbot' },
      { name: 'twitter:image:src', content: 'https://www.owlielechatbot.fr/img/social-banner.png' },
      { name: 'og:title', content: 'Owlie le chatbot' },
      { name: 'og:description', content: 'Owlie est un chatbot gratuit de soutien psychologique' },
      { name: 'og:image', content: 'https://www.owlielechatbot.fr/img/social-banner.png' },
      { name: 'og:url', content: 'https://www.owlielechatbot.fr' },
      { name: 'og:site_name', content: 'CSML' },
      { name: 'og:type', content: 'website' },
      { rel: 'canonical', href: 'https://www.owlielechatbot.fr/' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-196x196.png', async: true },
      { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: '/favicons/apple-icon-57x57.png', async: true },
      { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: '/favicons/apple-icon-60x60.png', async: true },
      { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/favicons/apple-icon-72x72.png', async: true },
      { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: '/favicons/apple-icon-76x76.png', async: true },
      { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/favicons/apple-icon-114x114.png', async: true },
      { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: '/favicons/apple-icon-120x120.png', async: true },
      { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: '/favicons/apple-icon-144x144.png', async: true },
      { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '/favicons/apple-icon-152x152.png', async: true },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-196x196.png', sizes: '196x196', async: true },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-96x96.png', sizes: '96x96', async: true },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png', sizes: '32x32', async: true },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-16x16.png', sizes: '16x16', async: true },
      { rel: 'icon', type: 'image/png', href: '/favicons/favicon-128.png', sizes: '128x128', async: true },
    ],
    script: [],
  },
  css: [
    '@/assets/scss/main.scss',
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  modules: [
    '@nuxt/content',
  ],

  googleFonts: {
    families: {
      'Bree Serif': true,
      'Open Sans': true,
    },
    display: 'swap',
  },

  build: {
    indicator: false,
    postcss: {
      plugins: {},
      preset: {
        autoprefixer: {
          grid: false,
        },
      },
    },
  },
};
