#!/usr/bin/env node

import { join } from 'desm'
import { readFile, writeFile } from 'node:fs/promises'
import { relative } from 'node:path'

const dist = join(import.meta.url, '..', 'dist')
const pkg = JSON.parse(await readFile(join(import.meta.url, '..', 'package.json')))

for (const prop of ['private', 'files', 'scripts', 'devDependencies']) {
  delete pkg[prop]
}

for (const prop of ['main', 'module', 'types']) {
  pkg[prop] = relative(dist, join(import.meta.url, '..', pkg[prop]))
}

await writeFile(join(import.meta.url, '..', 'dist', 'package.json'), JSON.stringify(pkg, undefined, 2))
