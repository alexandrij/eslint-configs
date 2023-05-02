# Настройки для проектов @geux

# EsLint настройки

## Использование

### Установка

```bash
$ npm i @geux/eslint-config -D
```

### Extend this config

в `.eslintrc.js`

```js
module.exports = {
  root: true,

  extends: ['@geux'],

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
    "extends": "@geux"
  }
}
```
