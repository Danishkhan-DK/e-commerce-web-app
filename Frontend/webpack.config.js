const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output file name
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Handle .js and .jsx files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use Babel loader for transpiling JavaScript files
        }
      },
      {
        test: /\.css$/, // Handle CSS files
        use: ['style-loader', 'css-loader'] // Use style-loader and css-loader
      },
      {
        enforce: 'pre',
        test: /\.js$/, // Pre-process .js files
        exclude: /node_modules/, // Exclude node_modules
        use: ['source-map-loader'] // Use source-map-loader for source maps
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'), // Serve content from the "public" directory
    compress: true, // Enable gzip compression
    port: 9000 // Port to run the dev server on
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Resolve these extensions
  }
};
