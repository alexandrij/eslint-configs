# Настройки для проектов @geux

# EsLint настройки Typescript

## Использование

### Установка

```bash
$ npm i @geux/eslint-config-typescript -D
```

### Наследование правил

в `.eslintrc.js`

```js
module.exports = {
  root: true,

  extends: ['@geux/typescript'],

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
    "extends": "@geux/typescript"
  }
}
```
