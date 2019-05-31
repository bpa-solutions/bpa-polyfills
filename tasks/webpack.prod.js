const webpack = require('webpack');

const mode = 'production';

process.stdout.write(`mode: production\n`);

let config = {
    mode,
    entry: {
        main: './index.ts'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(mode)
            }
        }),
    ]
}

module.exports = config;