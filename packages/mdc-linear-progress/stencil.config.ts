import { Config } from '@stencil/core';
import { RollupInputOptions } from '@stencil/core/internal';
import { sass } from '@stencil/sass';
import pkg from './package.json' assert { type: 'json' }


export const config: Config = {
  namespace: 'mdc-stencil',
  plugins: [
    sass({
      includePaths: [
        'node_modules',
        '../../node_modules'
      ],
    }),
  ],
  rollupPlugins: {
    before: [
      {
        name: 'overwrite-rollup-options',
        options: (options: RollupInputOptions) => ({
          ...options,
          treeshake: false,
          external: Object.keys(pkg.dependencies)
        })
      }
    ]
  },
  outputTargets: [
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
      includeGlobalScripts: false,
      copy: [
        { src: '**/_*.scss', dest : 'dist/styles' }
      ]
    },
    {
      type: 'docs-readme',
    }
  ],
};
