const path = require("path"); //No need to install, this is a core NodeJS-feature

module.exports = {
	entry: ".src/app.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, dist), //Constructs an absolute path to the dist-folder
	},
};
