const gh = require('gh-pages')

gh.publish('/dist', err => {
  if (err) throw err

  console.log('Docs success publish!')
})
