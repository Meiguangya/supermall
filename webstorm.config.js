'use strict'
const path = require('path')

module.exports = {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve('src'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'content': path.resolve(__dirname, 'src/components/content'),
      'common': path.resolve(__dirname, 'src/components/common'),
      'network':path.resolve(__dirname,'src/network')

    }
  }
}