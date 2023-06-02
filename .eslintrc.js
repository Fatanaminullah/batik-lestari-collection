module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true
  },
  "extends": ["plugin:react/recommended", "plugin:@next/next/recommended", "airbnb", "next/core-web-vitals", "prettier", "plugin:storybook/recommended", "plugin:storybook/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react", "prettier"],
  "rules": {
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/forbid-prop-types": "off",
    "semi": "off",
    "quotes": "off",
    "no-nested-ternary": "off",
    "no-irregular-whitespace": "off",
    "react/no-array-index-key": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "react/jsx-no-useless-fragment": "off",
    "react/button-has-type": "off",
    // "no-console": "off",
    // "react/no-danger": "off",
    // "react/function-component-definition": "off",
    "no-unused-vars": "off",
    "react/require-default-props": ["error", {
      "ignoreFunctionalComponents": true
    }],
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "alias": {
        "map": [["@components", "./src/components"], ["@assets", "./src/assets"], ["@base", "./src/components/base"], ["store", "./store"], ["lib", "./lib"], ["src", "./src"], ["@public", "./public"]],
        "extensions": [".ts", ".js", ".jsx", ".json"]
      }
    }
  }
}; 

// DEFAULT NEXTJS
// {
//   "extends": "next/core-web-vitals"
// }