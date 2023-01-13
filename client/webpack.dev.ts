import { merge } from "webpack-merge";
import commonConfig from "./webpack.common";
import path from "path";

export default merge([
  commonConfig,
  {
    mode: "development",
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
          ],
        },
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      port: 3000,
      historyApiFallback: true,
    },
  },
]);
