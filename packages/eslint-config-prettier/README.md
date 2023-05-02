# Настройки для проектов @geux

# EsLint настройки Prettier

## Использование

### Установка

```bash
$ npm i @geux/eslint-config-prettier -D
```

### Наследование правил

в `.eslintrc.js`

```js
module.exports = {
  root: true,

  extends: ['@geux/prettier'],

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
    "extends": "@geux/prettier"
  }
}
```
