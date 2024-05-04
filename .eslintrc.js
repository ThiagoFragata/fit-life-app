module.exports = {
  root: true,
  extends: ['universe/native', 'universe/shared/typescript-analysis'],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
