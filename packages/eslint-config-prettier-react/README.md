# Настройки для проектов @geux

# EsLint настройки React c Prettier

## Использование

### Установка

```bash
$ npm i @geux/eslint-config-prettier-react -D
```

### Наследование правил

в `.eslintrc.js`

```js
module.exports = {
  root: true,

  extends: ['@geux/prettier-react'],

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
    "extends": "@geux/prettier-react"
  }
}
```
