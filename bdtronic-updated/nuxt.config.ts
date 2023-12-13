import tailwindAspectRatio from '@tailwindcss/aspect-ratio'
import { repositoryName } from './slicemachine.config.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: true,

  app: {
    head: {
      title: 'Prismic + Nuxt blog example',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Prismic + Nuxt blog example'
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],

      script: [
        {
          type: "text/javascript",
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-54TMMKX');`
        },
        {
          src: "https://js.hsforms.net/forms/shell.js",
          // @ts-ignore
          charset: "utf-8",
          type: "text/javascript",
          defer: true
        }
      ]
    }
  },

  css: [
    '~/styles/global.css',
    '@fontsource/inter/400.css',
    '@fontsource/inter/600.css',
    '@fontsource/libre-baskerville/400.css',
    '@fontsource/libre-baskerville/400-italic.css',
    '@fontsource/libre-baskerville/700.css',
    'flag-icons/css/flag-icons.css'
  ],

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/prismic',
    '@nuxtjs/tailwindcss'
  ],

  i18n: {
    locales: ['en-us', 'fr-fr'],
    defaultLocale: 'en-us'
  },

  prismic: {
    endpoint: repositoryName,
    preview: '/api/preview'
  },

  tailwindcss: {
    config: {
      content: [
        './app/**/*.{js,ts,vue}',
        './slices/**/*.{js,ts,vue}'
      ],
      theme: {
        fontFamily: {
          sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          serif:
            '"Libre Baskerville", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
        },
      },
      plugins: [tailwindAspectRatio]
    }
  }
})
