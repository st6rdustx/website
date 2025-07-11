import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    name: "diogo's site",
    url: 'https://diogo.wtf'
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2025-06-09',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxtjs/sitemap', '@nuxt/icon', '@nuxt/content'],

  runtimeConfig: {
    spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
    spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    spotifyRefreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
    appleMusicToken: process.env.APPLE_MUSIC_TOKEN,
    appleMusicUserToken: process.env.APPLE_MUSIC_USER_TOKEN
  },

  sourcemap: { client: true, server: false },

  css: ['~/assets/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  fonts: {
    families: [{ name: 'Maple Mono', provider: 'fontsource' }]
  },

  experimental: {
    viewTransition: true
  },

  app: {
    head: {
      script: [{ src: '/oneko/oneko.js', tagPosition: 'bodyOpen' }],
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#000000' },
        { name: 'color-scheme', content: 'dark' },
        {
          name: 'description',
          content: "diogo's site"
        },
        { name: 'author', content: 'Diogo Castro' },
        {
          name: 'keywords',
          content: 'star, diogo, diogo castro, software developer, meeows'
        },

        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: "diogo's site" },
        { property: 'og:title', content: "diogo's site" },
        {
          property: 'og:description',
          content: "diogo's site"
        },
        { property: 'og:url', content: 'https://diogo.wtf' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: "diogo's site" },
        { property: 'og:locale', content: 'en_US' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@st6rdustx' },
        { name: 'twitter:creator', content: '@st6rdustx' },
        { name: 'twitter:title', content: "diogo's site" },
        {
          name: 'twitter:description',
          content: "diogo's site"
        },
        { name: 'twitter:image:alt', content: "diogo's site" }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://diogo.wtf/' },
        { rel: 'sitemap', type: 'application/xml', href: '/sitemap.xml' }
      ]
    },

    rootAttrs: {
      id: 'star' // <3
    }
  },

  content: {
    renderer: {
      anchorLinks: { h1: true, h2: true, h3: false }
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/uses', '/legal/privacy', '/domains']
    },
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
      wrangler: {
        name: 'website',
        observability: {
          logs: { enabled: true }
        },
        keep_vars: true,
        d1_databases: [
          {
            binding: 'DB',
            database_name: 'website',
            database_id: 'b544c2a3-2e53-474e-848f-e6ecc1fa8d3c'
          }
        ]
      }
    }
  }
})
