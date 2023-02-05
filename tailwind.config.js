module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      serif: ['Prata', 'ui-serif', 'Georgia']
    },
    extend: {
      backgroundImage: {
        banner: "url('../images/main_banner.jpg')",
        map: "url('../images/world_map.png')"
      },
      boxShadow: {
        'DEFAULT': 'rgb(0 0 0 / 30%) 0px 0px 30px',
      },
      colors: {
        gold: '#a6977d',
        dark: '#222830',
      },
    },
    theme: {
    },
  },
  plugins: []
}
