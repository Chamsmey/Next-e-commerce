/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images:{
    domains: ['fakestoreapi.com','datagma.com'],
    
  },
  publicRuntimeConfig:{
    requestUrl:process.env.NEXT_PUBLIC_REQUEST_URL,
  },
    reactStrictMode: true,
    swcMinify: true,
  }


