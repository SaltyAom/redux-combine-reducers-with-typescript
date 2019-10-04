const path = require('path')

module.exports = {
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
    },
    env: {
        space_id: process.env.space_id,
        access_token: process.env.access_token
    }
}