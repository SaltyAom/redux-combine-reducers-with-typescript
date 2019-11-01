const path = require('path')
const withBabelMinify = require("next-babel-minify")()

module.exports = withBabelMinify({
    exportPathMap: () => {
        return {
            '/': { page: '/' }
        };
    },
    target: 'serverless',
    webpack (config, options) {
        config.resolve.alias['stores'] = path.join(__dirname, 'stores'),
        config.resolve.alias['styles'] = path.join(__dirname, 'styles')

        return config
    }
})