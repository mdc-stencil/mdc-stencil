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
          external: Object.keys(pkg.dependencies)
        })
      }
    ]
  },
  outputTargets: [
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
      dir: 'dist',
      copy: [
        { src: '**/*.scss', dest : 'dist' }
      ]
    },
    {
      type: 'docs-readme',
    }
  ],
};
