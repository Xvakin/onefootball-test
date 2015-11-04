var path = require('path');

var include = [
    path.resolve('./')
];

var preLoaders = [{test: /\.spec\.js$/, loader: 'babel', include: include}];
var loaders = [
    {
        test: /\.js$/,
        loader: 'babel',
        exclude: [/node_modules/]
    },
    {
        test: /\.html$/,
        loader: 'raw'
    },
    {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
    },
    {
        test: /\.svg$/,
        loader: 'svg-sprite?' + JSON.stringify({
            name: '[name]',
            prefixize: true,
            angularBaseWorkaround: true
        }) + '!svgo-loader?' + JSON.stringify({
            plugins: [
                {removeTitle: true},
                {convertColors: {shorthex: false}},
                {convertPathData: false}
            ]
        })
    }
];


module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'spec.js'
        ],
        webpack: {
            devtool: 'eval',
            module: {
                loaders: loaders,
                preLoaders: preLoaders
            },
            cache: true
        },
        webpackMiddleware: {
            stats: {
                chunkModules: false,
                colors: true
            }
        },
        preprocessors: {
            'spec.js': ['webpack']
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true
    });
};