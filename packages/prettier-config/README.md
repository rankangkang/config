# @cmkk/prettier-config

cmkk's prittier config.

## install

```bash
npm install --save-dev @cmkk/prettier-config
```

## usage

use in `package.json`:

```json
{
  "prettier": "@cmkk/prettier-config"
}
```

or in config file:

```jsonc
// .prettierrc
"@cmkk/prettier-config"
```

```js
// .prettierrc.cjs
module.exports = '@cmkk/prettier-config'
```

if you want to extend config, you need a configuration written by javascript:

```js
// .prettierrc.cjs
module.exports = {
  ...require('@cmkk/prettier-config'),
  // your config ...
  semi: true,
  // ...
}
```
