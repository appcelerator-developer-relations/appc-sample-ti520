var log = require('log');

var PROPS = ['isSupported', 'isPaired', 'isReachable', 'isWatchAppInstalled'];

/**
 * I wrap code that executes on creation in a self-executing function just to
 * keep it organised, not to protect global scope like it would in alloy.js
 */
(function constructor() {

  if (Ti.WatchSession.isSupported) {
    Ti.WatchSession.activateSession();
  }

  // Show properties values
  $.feedback.text = PROPS.map(function(prop) {
    return 'Ti.WatchSession.' + prop + ':\n' + Ti.WatchSession[prop];
  }).join('\n\n');

})();
