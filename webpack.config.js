var path = require("path");

module.exports = {
    entry: {
        app: "./src/app.js"
    },
    output: {
        path: path.resolve("dist"),
        filename: "[name].bundle.js"
    },
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 8080
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.(js|jsx)?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
};