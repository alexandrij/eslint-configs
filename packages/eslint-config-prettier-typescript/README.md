# Настройки для проектов @geux

# EsLint настройки TypeScript c Prettier

## Использование

### Установка

```bash
$ npm i @geux/eslint-config-prettier-typescript -D
```

### Наследование правил

в `.eslintrc.js`

```js
module.exports = {
  root: true,

  extends: ['@geux/prettier-typescript'],

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
    "extends": "@geux/prettier-typescript"
  }
}
```
