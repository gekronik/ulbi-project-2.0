import {BuildOptions} from "./types/config";
import webpack from "webpack";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options
    return {
        mode: mode,
        entry: paths.entry, // стартовая точка приложения
        output: {
            filename: "[name].[contenthash].js", // название
            path: paths.build, // путь
            clean:true,
        }, // куда и как делаем сборку приложения
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers()

    }
}