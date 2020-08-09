const fs = require('fs')

const path =
  './platforms/sketch/chart2.sketchplugin/Contents/Resources/_webpack_resources'

const changes = [
  { regEx: new RegExp('module.exports = "', 'g'), newString: '' },
  { regEx: new RegExp('";', 'g'), newString: '' },
  { regEx: new RegExp('[ \\t]+ [<]', 'g'), newString: '<' },
  { regEx: new RegExp('\\\\n', 'g'), newString: '' },
  { regEx: new RegExp('\\\\"', 'g'), newString: '"' },
  {
    regEx: new RegExp('\\Q"\\s+\\srequire\\("\\E', 'g'),
    newString: '',
  },
]

fs.readdir(path, (_, files) => {
  files.forEach((file) => {
    fs.readFile(`${path}/${file}`, 'utf8', (err, fileString) => {
      if (err) throw err

      const result = changes.reduce(
        (string, change) => string.replace(change.regEx, change.newString),
        fileString
      )

      fs.writeFile(`${path}/${file}`, result, (err) => {
        if (err) console.log(err)

        console.log('Successfully Written to File.')
      })
    })
  })
})
