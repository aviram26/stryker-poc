module.exports = function (config) {
    config.set({
        testRunner: 'mocha',
        testFramework: 'mocha',

        mutator: 'javascript',
        mutate: [
            'src/js/**/*.js',
        ],
        files: [
            'src/**/*.js',
            'test/**/*.js',
        ],

        transpilers: ['webpack'],
        reporter: ['progress', 'clear-text', 'dots', 'html', 'event-recorder'],
        coverageAnalysis: 'off',
        webpack: {
            configFile: 'webpack.test.config.js'
        },
        mochaOptions: {
            files: ['dist/test.bundle.js']
        }
    });
};
