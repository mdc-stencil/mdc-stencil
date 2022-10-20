#!/usr/bin/env node

import { join } from 'desm'
import shell from 'shelljs'

const source = [
  join(import.meta.url, '..', 'dist'),
  join(import.meta.url, '..', '*.tsbuildinfo')
]

shell.rm('-rf', source)
