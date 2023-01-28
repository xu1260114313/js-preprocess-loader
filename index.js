const pp = require('preprocess');
const platform = process.env.platform || 'development';
const path = require('path');
module.exports = function(source) {
    let option = {};
    option[platform] = true;
    let content = '';
    if('.js' === path.extname(this.resourcePath) && !this.context.includes('node_modules')) {
        let scriptCompile = pp.preprocess(source, option, {type: "js"});
        content = scriptCompile;
        return content;
    }
    return source;
}