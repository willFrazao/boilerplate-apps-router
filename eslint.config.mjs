import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),

  {
    rules: {
      'react-hooks/rules-of-hooks': 'error', // Garante o uso correto de hooks
      'react-hooks/exhaustive-deps': 'warn', // Garante que as dependências estejam corretas
      'react/prop-types': 'off', // Desativa a exigência de PropTypes
      'react/react-in-jsx-scope': 'off', // Não exige 'import React' no Next.js
      '@typescript-eslint/explicit-module-boundary-types': 'off' // Permite funções sem tipagem explícita
    }
  }
]

export default eslintConfig
