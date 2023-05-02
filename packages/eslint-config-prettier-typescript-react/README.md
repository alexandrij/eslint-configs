# Настройки для проектов @geux

# EsLint настройки для React и TypeScript с Prettier

## Использование

### Установка

```bash
$ npm i @geux/eslint-config-prettier-typescript-react -D
```

### Наследование правил

в `.eslintrc.js`

```js
module.exports = {
  root: true,

  extends: ['@geux/prettier-typescript-react'],

  rules: {
    // Override rules
  },
}
```

в `package.json`

```json
{
  "eslintConfig": {
    "root": true,
    "extends": "@geux/prettier-typescript-react"
  }
}
```
