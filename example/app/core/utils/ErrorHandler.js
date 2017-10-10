let _e = require('ErrorUtils');
module.exports = function () {
    // if (!__DEV__)
        _e.setGlobalHandler(function (err) {
            console.log('捕获了一个问题：' + err);
        });
};