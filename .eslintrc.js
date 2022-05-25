module.exports = {
   parser: '@typescript-eslint/parser',
   parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
      tsconfigRootDir: __dirname,
   },
   plugins: ['@typescript-eslint/eslint-plugin'],
   extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'next/core-web-vitals',
   ],
   root: true,
   env: {
      node: true,
      jest: true,
   },
   ignorePatterns: [
      'plugins',
      '.eslintrc.js',
      'next.config.js',
      'postcss.config.js',
      'tailwind.config.js',
   ],
   rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'prettier/prettier': 'off',
      '@typescript-eslint/ban-ts-comment': [
         'error',
         { 'ts-expect-error': 'allow-with-description' },
      ],
   },
}
