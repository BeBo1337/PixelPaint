export default {
    // ...other Jest configuration options...
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    extensionsToTreatAsEsm: ['.ts'], // Add this line
    globals: {
        'ts-jest': {
            useESM: true // Add this line
        }
    }
}
