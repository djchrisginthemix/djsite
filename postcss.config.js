// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    process.env.NODE_ENV === 'production'
      ? require('@fullhuman/postcss-purgecss')({
          content: ['./src/**/*.js'],
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        })
      : null,
  ],
};
