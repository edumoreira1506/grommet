module.exports = {
  getPackageJSON: function () {
    delete require.cache[require.resolve('./package.json')];
    var packageJSON = require('./package.json');
    delete packageJSON.config;
    delete packageJSON.scripts;
    packageJSON.main = 'index.js';
    return packageJSON;
  }
};
