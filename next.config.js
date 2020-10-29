module.exports = {
  // Target must be serverless
  target: 'serverless',
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    iconSizes: [],
    domains: ['bloxy.dev'],
    path: '/_next/image',
    loader: 'default',
  },
}
