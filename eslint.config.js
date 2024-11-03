// @ts-check

import eslint from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import ts from 'typescript-eslint'

export default ts.config(
  {ignores: ['dist']},
  {
    files: ['*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.commonjs,
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        {allowConstantExport: true},
      ],
    },
  },
  eslint.configs.recommended,
  ...ts.configs.strict,
  ...ts.configs.stylistic,
)
