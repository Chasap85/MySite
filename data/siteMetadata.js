
const siteMetadata = {
    title: '',
    author: '',
    headerTitle: '',
    description: '',
    language: 'en-us',
    theme: 'system', // system, dark or light
    siteUrl: '',
    siteRepo: '',
    siteLogo: '',
    socialBanner: '',
    email: 'address@yoursite.com',
    github: 'https://github.com',
    x: 'https://twitter.com/x',
    next: 'https://nextjs.org/',
    linkedin: 'https://www.linkedin.com',
    threads: 'https://www.threads.net',
    locale: 'en-US',
    analytics: {
      // If you want to use an analytics provider you have to add it to the
      // content security policy in the `next.config.js` file.
      // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
      umamiAnalytics: {
        // We use an env variable for this site to avoid other users cloning our analytics ID
        umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
        // You may also need to overwrite the script if you're storing data in the US - ex:
        // src: 'https://us.umami.is/script.js'
        // Remember to add 'us.umami.is' in `next.config.js` as a permitted domain for the CSP
      },
      // plausibleAnalytics: {
      //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
           // If you are hosting your own Plausible.
      //   src: '', // e.g. https://plausible.my-domain.com/js/script.js
      // },
      // simpleAnalytics: {},
      // posthogAnalytics: {
      //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
      // },
      // googleAnalytics: {
      //   googleAnalyticsId: '', // e.g. G-XXXXXXX
      // },
    },
  }
  
  export default siteMetadata
  