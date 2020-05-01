import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

// CommonJS module - for Node.js environment
const cjsConfig = {
  input: 'src/index.js',
  output: [
    {
      file: 'build/index.js',
      format: 'cjs',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        [
          '@babel/env',
          {
            modules: false,
            useBuiltIns: 'usage',
            corejs: '2',
            targets: 'maintained node versions',
          },
        ],
      ],
    }),
  ],
  external: [
    'lodash/reduce',
  ],
};

// Minified CommonJS module - for Node.js environment
const cjsMinConfig = {
  input: 'src/index.js',
  output: [
    {
      file: 'build/index.min.js',
      format: 'cjs',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        [
          '@babel/env',
          {
            modules: false,
            useBuiltIns: 'usage',
            corejs: '2',
            targets: 'maintained node versions',
          },
        ],
      ],
    }),
    terser(),
  ],
  external: [
    'lodash/reduce',
  ],
};

// UMD module - for browser environment
const umdConfig = {
  input: 'src/index.js',
  output: [
    {
      file: 'build/index.umd.js',
      format: 'umd',
      name: 'math',
      globals: {
        'lodash/reduce': '_.reduce',
      },
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        [
          '@babel/env',
          {
            modules: false,
            useBuiltIns: 'usage',
            corejs: '2',
            targets: [
              'maintained node versions',
              'last 1 version',
              '> 5%',
            ],
          },
        ],
      ],
    }),
  ],
  external: [
    'lodash/reduce',
  ],
};

// Minified UMD module - for browser environment
const umdConfigMinConfig = {
  input: 'src/index.js',
  output: [
    {
      file: 'build/index.umd.min.js',
      format: 'umd',
      name: 'math',
      globals: {
        'lodash/reduce': '_.reduce',
      },
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        [
          '@babel/env',
          {
            modules: false,
            useBuiltIns: 'usage',
            corejs: '2',
            targets: [
              'maintained node versions',
              'last 1 version',
              '> 5%',
            ],
          },
        ],
      ],
    }),
    terser(),
  ],
  external: [
    'lodash/reduce',
  ],
};

// ES Module - for environment that support ES modules
const esConfig = {
  input: 'src/index.js',
  output: [
    {
      file: 'build/index.es.js',
      format: 'es',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        [
          '@babel/env',
          {
            modules: false,
            useBuiltIns: 'usage',
            corejs: '2',
            targets: 'maintained node versions',
          },
        ],
      ],
    }),
  ],
  external: [
    'lodash/reduce',
  ],
};

// Minified ES Module - for environment that support ES modules
const esMinConfig = {
  input: 'src/index.js',
  output: [
    {
      file: 'build/index.es.min.js',
      format: 'es',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        [
          '@babel/env',
          {
            modules: false,
            useBuiltIns: 'usage',
            corejs: '2',
            targets: 'maintained node versions',
          },
        ],
      ],
    }),
    terser(),
  ],
  external: [
    'lodash/reduce',
  ],
};

export default [
  cjsConfig,
  cjsMinConfig,
  umdConfig,
  umdConfigMinConfig,
  esConfig,
  esMinConfig,
];
