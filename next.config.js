/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  images: {
    domains: ['img.roommategeorgia.ge'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  redirects: [
    {
      source: '/',
      destination: '/lol/?path=foo',
    },
  ],
}

module.exports = nextConfig
