const path = require('path')
const cpy = require('cpy')
const fs = require('fs')

const dir = path.resolve(__dirname, 'node_modules/prism-react-renderer/themes')

cpy([`**/*`], path.resolve('themes'), { cwd: dir, parents: true }).then(() => {
  fs.readdirSync(dir)
    .filter((p) => fs.statSync(path.join(dir, p)).isDirectory())
    .map((d) => fs.copyFileSync('theme.d.ts', `themes/${d}/index.d.ts`))
})
