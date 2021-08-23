// https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/utils/inline-non-void-elements.json
// 仅仅是除去 'a'
const OTHER_INLINE_ELEMENTS = [
    'abbr',
    'audio',
    'b',
    'bdi',
    'bdo',
    'canvas',
    'cite',
    'code',
    'data',
    'del',
    'dfn',
    'em',
    'i',
    'iframe',
    'ins',
    'kbd',
    'label',
    'map',
    'mark',
    'noscript',
    'object',
    'output',
    'picture',
    'q',
    'ruby',
    's',
    'samp',
    'small',
    'span',
    'strong',
    'sub',
    'sup',
    'svg',
    'time',
    'u',
    'var',
    'video',
];

module.exports = {
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        // 'plugin:vue/vue3-recommended', Use this if you are using Vue.js 3.x.
        'plugin:vue/recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        // "off"   or 0 - 关闭规则
        // "warn"  or 1 - 将规则视为一个警告（不会影响退出码）
        // "error" or 2 - 将规则视为一个错误 (退出码为1)
        // https://cn.eslint.org/docs/rules/indent
        indent: ['error', 4],
        // https://cn.eslint.org/docs/rules/quotes
        quotes: ['error', 'single'],
        // https://eslint.bootcss.com/docs/rules/semi
        // ;
        semi: ['error', 'always'],
        // https://cn.eslint.org/docs/rules/comma-dangle
        'comma-dangle': ['error', 'always-multiline'],
        // https://eslint.vuejs.org/rules/
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 1,
                baseIndent: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: [],
            },
        ],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'always',
            },
        ],
        // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/singleline-html-element-content-newline.md
        'vue/singleline-html-element-content-newline': [
            'error',
            {
                ignoreWhenNoAttributes: true,
                ignoreWhenEmpty: true,
                ignores: ['pre', 'textarea', ...OTHER_INLINE_ELEMENTS],
            },
        ],
        'no-param-reassign': [
            'error',
            { props: true, ignorePropertyModificationsFor: ['state'] },
        ],
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src'],
                    ['~', './src/js'],
                ],
                extensions: ['.js', '.vue'],
            },
        },
    },
};
