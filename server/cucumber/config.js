exports.config = {
    baseUrl: 'http://localhost:3000',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 11000,
    specs: [
        './features/*.feature'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'custom',
    frameworkPath: '../../node_modules/protractor-cucumber-framework',
    cucumberOpts: {
        require: './steps/definitions.js',
        format: "pretty"
    }
};
