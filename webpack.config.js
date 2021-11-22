const path = require("path"); //No need to install, this is a core NodeJS-feature

module.exports = {
	entry: "./src/app.ts",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"), //Constructs an absolute path to the dist-folder
	},
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.ts$/, //looks for every file with the .ts-file extension
                use: "ts-loader", //Any file should be handles by the ts-loader
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"] //Bundles all files with those extensions into one
    }
};
