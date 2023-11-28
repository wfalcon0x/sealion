import { promises as fs } from 'node:fs'

const copy = (from, to) => ({
  async writeBundle() { await fs.writeFile(to, await fs.readFile(from)) }
})

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'umd',
      name: 'sealion.walk'
    },
    {
      file: 'dist/index.mjs',
      format: 'es'
    }
  ],
  plugins: [
    copy('src/typings.d.ts', 'dist/index.d.ts'),
    copy('src/typings.d.ts', 'dist/index.d.mts')
  ]
}
