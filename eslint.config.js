import { FlatCompat } from '@eslint/eslintrc';
import * as tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';

const compat = new FlatCompat();

export default [
    {
        ignores: ['dist/**', 'node_modules/**', 'coverage/**', '.vscode/**', '.idea/**', 'public/**', 'build/**'],
    },
    // Configuration pour les fichiers source
    {
        files: ['src/**/*.{ts,tsx}'],
        plugins: {
            '@typescript-eslint': tseslint,
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: './tsconfig.json',
            },
        },
    },
    // Configuration pour les fichiers de config
    {
        files: ['*.config.{ts,js}', 'vite.config.ts'],
        plugins: {
            '@typescript-eslint': tseslint,
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
    },
    ...compat.config({
        extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
    }),
    {
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
        },
        settings: {
            react: {
                version: '18.2.0',
            },
        },
    },
    eslintConfigPrettier,
];
