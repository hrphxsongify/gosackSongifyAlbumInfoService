## ESLint/Prettier/VSCode Installation Instructions

1. `npm install -D eslint prettier`
2. `npm install -g install-peerdeps`
3. `install-peerdeps --dev eslint-config-airbnb`
4. `npm install -D eslint-config-prettier eslint-plugin-prettier`
5. Create `.eslintrc.json` file in your project’s root directory:

````json
{
  "extends": ["airbnb-base", "prettier", "plugin:react/recommended"],
  "settings": {
    "react": {
      "createClass": "createReactClass",
      "pragma": "React",
      "version": "^16.8.6",
      "flowVersion": "0.53"
    },
    "propWrapperFunctions": [
      "forbidExtraProps",
      { "property": "freeze", "object": "Object" },
      { "property": "myFavoriteWrapper" }
    ],
    "linkComponents": ["Hyperlink", { "name": "Link", "linkAttribute": "to" }]
  }
}```

7. Create `.prettierrc`:

```javascript
{
"printWidth": 100,
"singleQuote": true
}```

8. Enable editor.formatOnSave: true in your User Settings in VSCode.
````
