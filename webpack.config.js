const path = require('path');

module.exports = {
    entry: 'script.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    divServer: { contentBase: path.join(__dirname, 'dist'),
compress: true, port:9000 }
};