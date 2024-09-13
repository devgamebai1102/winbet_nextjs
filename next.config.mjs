import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, 'app'), // Sử dụng thư mục 'app' hoặc 'src' nếu bạn dùng src
    };
    return config;
  },
  distDir: 'build',
};

export default nextConfig;
