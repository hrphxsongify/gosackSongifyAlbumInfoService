## ESLint/Prettier/VSCode Installation Instructions

1. `npm install -D eslint prettier`
2. `npm install -g install-peerdeps`
3. `install-peerdeps --dev eslint-config-airbnb`
4. `npm install -D eslint-config-prettier eslint-plugin-prettier`
5. Create `.eslintrc.json` file in your project’s root directory:

```json
{
  "extends": ["airbnb", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": ["error"]
  }
}
```

7. Create `.prettierrc`:

'''javascript
{
"printWidth": 100,
"singleQuote": true
}

```

8. Enable editor.formatOnSave: true in your User Settings in VSCode.
```
