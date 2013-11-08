var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');
    
var BackgroundLocationEnabler = function()
{
};

BackgroundLocationEnabler.enableUnlimited = function()
{
    exec(null,null,"BackgroundLocationEnabler","enableUnlimited",[]);
}

module.exports = BackgroundLocationEnabler;