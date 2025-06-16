import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    githubToken: process.env.githubToken
  }
};

export default nextConfig;
