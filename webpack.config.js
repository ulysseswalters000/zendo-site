//webpack needs an absolute path. npm package 'path'
//allows automatic resolving of local dirname,
//enabling relative pathing
var path = require('path');


//webpack takes an entry file, 
//in this case takes the main app.js file
//and outputs it to a temp directory
module.exports = {
	//entry takes the app to be packed
	entry: {
		//bundles code that needs to be written to work
		App: './app/assets/scripts/App.js',
		//bundles packages that don't need code for them to work
		Vendor: './app/assets/scripts/Vendor.js'
	},
	output: {
		path: path.resolve(__dirname, './app/temp/scripts'),
		//allows filenames to be dynamic
		filename: '[name].js'
	},
	module: {
		rules: [
		 {
		 	loader: 'babel-loader',
		 	query: {
		 		'presets': ['es2015']
		 	},
		 	test: /\.js$/,
		 	exclude: /node_modules/
		 }
		]
	}
}