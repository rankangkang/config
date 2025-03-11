# @cmkk/commitlint-config

## installation

```bash
pnpm add @cmkk/commitlint-config
```

## usage

```js
// commitlint.config.js
module.exports = {
  extends: ['@cmkk/commitlint-config'],
}
```

## integrate with husky

```bash
pnpm add husky -D
pnpm husky init # this code create a pre-commit hook script
```

then create `.husky/commit-msg` hook

```bash
echo '👉 commitlint'
npx --no-install commitlint --edit "$1"
echo '👏 done\n'
```
