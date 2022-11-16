const path = require('path')

const PROFILE = process.env.PROFILE || 'real'
const PORT = process.env.PORT || '3000'
const NODE_ENV = process.env.NODE_ENV || 'development'
const basePath = ''

// 서버/클라이언트 모두 접근 가능
const publicRuntimeConfig = {
    NODE_ENV,
    BASE_PATH: basePath,
    PROFILE,
    PORT,
}

/* eslint-disable no-console */
console.table({
    PROFILE,
    NODE_ENV,
    PORT,
    BASE_PATH: basePath,
})
/* eslint-enable no-console */

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    ...basePath && {basePath, assetPrefix: `${basePath}`},

    experimental:{appDir: true},

    publicRuntimeConfig,
    generateEtags: true,
    productionBrowserSourceMaps: true,
    poweredByHeader: false,
    webpack: ({entry: originalEntry, plugins, ...restConfig}, {webpack}) => {
        return {
            ...restConfig,
            entry: async () => {
                const entries = await originalEntry()
                const polyfillsChunkPath = './src/polyfills/chunk.js'

                if (entries['main.js'] && !entries['main.js'].includes(polyfillsChunkPath)) {
                    entries['main.js'].unshift(polyfillsChunkPath)
                }

                return entries
            },
            plugins: [...plugins, new webpack.IgnorePlugin({resourceRegExp: /\/__tests__\//})],
        }
    },
    async redirects() {
        return []
    }
}

module.exports = nextConfig
