let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path : __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    // devtool: "inline-source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias : {
            moment$: 'moment/moment.js'
        }
    },

    module: {
        loaders : [
            // LESS
            { test: /\.less$/, loader: 'style!css!less' }
        ],
        rules: [
            { 
                test: /\.less$/,
                use: [
                    { loader: "style-loader" }, // creates style nodes from JS strings
                    { loader: "css-loader" }, // translates CSS into CommonJS
                    { loader: "less-loader" } // compiles Less to CSS
                ]
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            // CSS loader
            // { test: /\.css$/, loader: 'style-loader!css-loader'},
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    plugins : [
        // new WebpackShellPlugin({
        //     onBuildEnd: ['npm run deploy']
        // })
        // Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html', // Name of file in ./dist/
            template: 'index.html', // Name of template in ./src
            hash: true
        }),
        new ExtractTextPlugin({
            filename: '[chunkhash].[name].css', 
            disable: false, 
            allChunks: true}),
    ],

    // onBuildExit: 
    //     config.plugins.push(new WebpackShellPlugin({
    //         onBuildExit : ["npm run deploy"]
    //     })),
};