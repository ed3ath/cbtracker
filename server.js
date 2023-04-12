const express = require('express')
const app = express()
let port = process.env.PORT || 3000

process.argv.forEach((val) => {
  if (val.startsWith('--port')) port = val.split('=')[1];
});

if (process.env.NODE_ENV === 'production') {
  app.use(requireHTTPS)
}
app.use(express.static('./dist/cbtracker'))

app.get('/*', (req, res) =>
  res.sendFile('index.html', { root: 'dist/cbtracker/' })
)

app.listen(port, () => {
  console.log('listening at port', port)
})

function requireHTTPS (req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
    return res.redirect('https://' + req.get('host') + req.url)
  }
  next()
}
