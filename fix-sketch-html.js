const fs = require('fs')

const htmlPath =
  './platforms/sketch/chart2.sketchplugin/Contents/Resources/_webpack_resources'

const changes = [
  { regEx: new RegExp('module.exports = "', 'g'), newString: '' },
  { regEx: new RegExp('";', 'g'), newString: '' },
  { regEx: new RegExp('[ \\t]+ [<]', 'g'), newString: '<' },
  { regEx: new RegExp('\\\\n', 'g'), newString: '' },
  { regEx: new RegExp('\\\\"', 'g'), newString: '"' },
  { regEx: new RegExp('\\) \\+ \\"\\"', 'g'), newString: '' },
  { regEx: new RegExp('\\"\\" \\+ require\\(', 'g'), newString: '' },
]

fs.readdir(htmlPath, (_, files) => {
  files.forEach((file) => {
    fs.readFile(`${htmlPath}/${file}`, 'utf8', (err, fileString) => {
      if (err) throw err

      if (file.endsWith('.html')) {
        const result = changes.reduce(
          (string, change) => string.replace(change.regEx, change.newString),
          fileString
        )

        fs.writeFile(`${htmlPath}/${file}`, result, (err) => {
          if (err) console.log(err)

          console.log('Successfully Written to File.')
        })
      }
    })
  })
})
