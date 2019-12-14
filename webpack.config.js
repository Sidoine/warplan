const MiniCssExtractPlugin  = require("mini-css-extract-plugin");
const extractCss = new MiniCssExtractPlugin({ filename: "[name].css" });

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/wwwroot"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "ts-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            { test: /\.less$/, use: [{ loader: MiniCssExtractPlugin.loader }, { loader: "css-loader" }, { loader: "less-loader" }] },
            { test: /\.(woff|woff2|ttf|eot|svg|gif|png|jpg)(\?.*)?$/, loader: 'file-loader', options: { name: "files/[name].[hash].[ext]" } }
        ]
    },
    plugins: [
        extractCss
    ]
};