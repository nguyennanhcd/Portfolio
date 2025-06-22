import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    githubToken: process.env.githubToken
  },
  swcMinify: true,
   experimental: {
    
  },
};

export default nextConfig;
