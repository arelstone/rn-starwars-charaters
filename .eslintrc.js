module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            modules: true,
        },
    },
    env: {
        node: true,
        es6: true,
        jest: true,
        'react-native/react-native': true,
    },
    settings: {
        react: {
            version: 'detetect',
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: [
        'react',
        'react-native',
        'import',
        'eslint-plugin-react',
        '@typescript-eslint',
        'no-only-tests',
        'no-unused-react-component-methods',
    ],
    rules: {
        '@typescript-eslint/no-empty-interface': 0,
        'react/jsx-uses-vars': ['error'],

        '@typescript-eslint/no-empty-function': [
            'error',
            {
                allow: ['arrowFunctions'],
            },
        ],
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-inferrable-types': [
            'error',
            {
                ignoreParameters: true,
                ignoreProperties: true,
            },
        ],
        '@typescript-eslint/member-delimiter-style': [
            2,
            {
                multiline: { delimiter: 'semi', requireLast: true },
                singleline: { delimiter: 'semi', requireLast: true },
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: false,
            },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.js', '.jsx', '.tsx'],
            },
        ],

        'react/jsx-uses-react': 'error',
        'react/sort-comp': ['off'],
        'react/destructuring-assignment': ['off'],
        'react/forbid-prop-types': ['off'],
        'react/no-unescaped-entities': [
            'error',
            {
                forbid: ['>', '}'],
            },
        ],
        'react/no-access-state-in-setstate': 'error',
        'react/jsx-max-props-per-line': [
            'error',
            {
                maximum: 1,
                when: 'always',
            },
        ],
        'react/jsx-indent': [
            'error',
            4,
            {
                checkAttributes: true,
                indentLogicalExpressions: true,
            },
        ],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
        'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
        'react/jsx-no-duplicate-props': [
            'error',
            {
                ignoreCase: true,
            },
        ],
        'react/jsx-no-useless-fragment': ['warn'],
        'react/jsx-key': [
            'warn',
            {
                checkFragmentShorthand: true,
            },
        ],

        'no-only-tests/no-only-tests': 'error',

        'import/prefer-default-export': 'off',
        'import/order': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                optionalDependencies: false,
            },
        ],

        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                ignoreComments: false,
                ignoredNodes: [
                    'JSXElement',
                    'JSXElement > *',
                    'JSXAttribute',
                    'JSXIdentifier',
                    'JSXNamespacedName',
                    'JSXMemberExpression',
                    'JSXSpreadAttribute',
                    'JSXExpressionContainer',
                    'JSXOpeningElement',
                    'JSXClosingElement',
                    'JSXText',
                    'JSXEmptyExpression',
                    'JSXSpreadChild',
                ],
            },
        ],
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: false,
            },
        ],
        'jsx-quotes': ['error', 'prefer-double'],
        'no-use-before-define': 'off',
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true,
            },
        ],
        'max-len': [
            'error',
            130,
            {
                ignoreUrls: true,
                ignoreComments: true,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'constructor-super': 'error',
        'no-useless-constructor': 'error',
        'no-duplicate-imports': 'error',
        'prefer-arrow-callback': 'error',
        'no-invalid-regexp': 'error',
        'no-dupe-args': 'error',
        'no-duplicate-case': 'error',
        'no-var': 'error',
        'no-irregular-whitespace': 'off',
        eqeqeq: 'error',
        'eol-last': ['error', 'always'],
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
            },
        ],
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true,
                overrides: {
                    return: { after: true },
                    throw: { after: true },
                    case: { after: true },
                },
            },
        ],
        'lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: false,
            },
        ],
        'newline-after-var': 'error',
        'newline-before-return': 'warn',
        '@typescript-eslint/no-var-requires': 'off',
        'no-var-requires': 'off',

        'react-native/no-unused-styles': 2,
        'react-native/no-raw-text': 2,
        'react-native/no-single-element-style-arrays': 2,
        'no-unused-react-component-methods/no-unused-react-component-methods': 2,
        'no-extra-boolean-cast': 0,
    },
};
