import Dotenv from "dotenv-webpack";
import webpack from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

const commonConfig: webpack.Configuration = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "static/js/bundle.js",
    clean: true,
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      publicPath: "/",
      template: "./public/index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "./public/app.webmanifest" },
        { from: "./public/robots.txt" },
        { from: "./public/icons/", to: "icons" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
  resolve: { extensions: [".tsx", ".ts", ".js"] },
};

export default commonConfig;
