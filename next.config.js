const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   eslint: {
      dirs: ['pages', 'components'],
   },
   sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
   },
   env: {
      // Environment variables
      apiUrl: process.env.NEXT_PUBLIC_API_URL,
      selfUrl: process.env.NEXT_PUBLIC_SElF_URL,
      author: process.env.NEXT_PUBLIC_AUTHOR,
      authorEmail: process.env.NEXT_PUBLIC_AUTHOR_EMAIL,
      authorPhone: process.env.NEXT_PUBLIC_AUTHOR_PHONE,
      authorGithub: process.env.NEXT_PUBLIC_AUTHOR_GITHUB,
   },
   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Important: return the modified config
      // const { module: { rules } } = config
      // rules?.push({
      //    test: /\.(png|jpe?g|gif|svg|webp)$/i,
      //    use: [
      //       {
      //          loader: 'file-loader',
      //       },
      //    ],
      // })
      return config
   }
}

module.exports = nextConfig
