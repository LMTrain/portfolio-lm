const env = require('./env-config.js');

module.exports = {
    process: ['next/babel'],
    plugins: [['transform-define', env]]
}