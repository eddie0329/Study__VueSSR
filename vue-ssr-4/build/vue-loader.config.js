module.exports = {
  extractCSS: process.env.NODE_ENV === 'production',
  preserveWhitespace: false,
  postcss: [
    require('autoprefixer')({
      overrideBrowserslist: ['last 3 versions']
    })
  ]
}