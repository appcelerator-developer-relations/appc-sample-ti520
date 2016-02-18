var log = require('log');

$.isSupported = function() {

  if (OS_IOS) {
    return true;
  }

  alert('This example requires iOS');
};

var PROPS = ['isSupported', 'isPaired', 'isReachable', 'isWatchAppInstalled'];

(function constructor() {

  if (Ti.WatchSession.isSupported) {
    Ti.WatchSession.activateSession();
  }

  $.feedback.text = PROPS.map(function(prop) {
    return 'Ti.WatchSession.' + prop + ':\n' + Ti.WatchSession[prop];
  }).join('\n');

})();
