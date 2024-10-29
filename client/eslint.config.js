import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config({ 
  ignores: [
    'node_modules',
    'dist',
    'build',
    'coverage',
    '*.config.js',
    'vite.config.ts',
    '.eslintrc.js',
    '.prettierrc',
    'eslint.config.js',
    'index.html',
    'jest.config.js',
    'package.json',
    'playwright-report',
    'README.md',
    'test-results',
    'tests-examples'
  ]
 },
{
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
},
)