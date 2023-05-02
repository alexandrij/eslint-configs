# Настройки для проектов @geux

# EsLint настройки React

## Использование

### Установка

```bash
$ npm i @geux/eslint-config-react -D
```

### Наследование правил

в `.eslintrc.js`

```js
module.exports = {
  root: true,

  extends: ['@geux/react'],

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
    "extends": "@geux/react"
  }
}
```
