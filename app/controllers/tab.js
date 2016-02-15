var log = require('log');

$.isSupported = function() {

  if (OS_IOS) {
    return true;
  }

  alert('This example requires iOS');
};

function onTabSelection(e) {
  log.argsWithoutApis('Ti.UI.Tab:' + e.type, e);
}
