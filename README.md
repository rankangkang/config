# @cmkk/eslint-config

* [eslint-config](./packages/eslint-config/): simple eslint config which extends [eslint-config-ts](./packages/eslint-config-ts/)
* [eslint-config-ts](./packages/eslint-config-ts/): base eslint config for ts project
* [eslint-config-lib](./packages/eslint-config-lib/): eslint config for libraries
* [eslint-config-react](./packages/eslint-config-react/): eslint config for react

* [prettier-config](./packages/prettier-config/): simple prettier config

## installation

```bash
npm install @cmkk/eslint-config

# react project
npm install @cmkk/eslint-config-react

# nodejs libraries
npm install @cmkk/eslint-config-lib

```

## usage

```js
// .eslintrc.js
module.exports = {
  extends: ["@cmkk"]
}
```

```json
{
  "extends": ["@cmkk/eslint-config-react"]
}
```
