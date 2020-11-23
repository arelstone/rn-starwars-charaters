module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupFilesAfterEnv: [
        './node_modules/react-native-gesture-handler/jestSetup.js',
        '<rootDir>setup-tests.js',
    ],
    transformIgnorePatterns: [
        'node_modules/(?!static-container)/',
        'node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)',
    ],
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$',
    transform: {
        '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
        '\\.(tsx)$': 'ts-jest',
        '\\.(ts)$': 'ts-jest',
    },
    globals: {
        tsConfig: {
            tsConfig: 'tsconfig.jest.json',
            isolatedModules: true,
        },
        __DEV__: false,
    },
};
