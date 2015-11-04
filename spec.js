var testsContext;

require('babel-polyfill');
require('angular');
require('angular-mocks');

testsContext = require.context('./app', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);