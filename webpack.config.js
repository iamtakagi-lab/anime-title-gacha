const path = require("path")
const nodeExternals = require("webpack-node-externals");
const isProduction = process.env.NODE_ENV === "production"

/** @type {import("webpack").Configuration} */
const webConfig = {
    mode: isProduction ? "production" : "development",
    entry: {
        main: "./src/renderer/index.tsx",
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, "public", "assets"),
        filename: "[name].js",
        publicPath: "/assets/"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: { compilerOptions: { module: "ES2020", moduleResolution: "node" } },
            },
            {
                test: /\.ts?$/,
                loader: "ts-loader",
                options: { compilerOptions: { module: "ES2020", moduleResolution: "node" } },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    devtool: "source-map",
}

const nodeConfig  = {
    mode: isProduction ? "production" : "development",
    target: 'node',
    externals: [nodeExternals()],
    entry: {
        main: "./src/index.ts"
    },
    output: {
        path: path.resolve(__dirname, "server"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: "ts-loader",
                options: { compilerOptions: { module: "esnext", moduleResolution: "node" } },
            }
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    devtool: "source-map",
}

module.exports = [webConfig, nodeConfig]