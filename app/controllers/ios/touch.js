var log = require('log');

var EVENTS = ['touchstart', 'touchend', 'click', 'touchmove', 'dblclick', 'touchcancel'];
var PROPS = ['x', 'y', 'force', 'maximumPossibleForce', 'timestamp', 'altitudeAngle'];

/**
 * I wrap code that executes on creation in a self-executing function just to
 * keep it organised, not to protect global scope like it would in alloy.js
 */

(function constructor() {
  
  // For each event
  EVENTS.forEach(function(name) {

    $.touchArea.addEventListener(name, function(e) {

      if (e.maximumPossibleForce === undefined) {
        return alert('This should never happen. Force Touch is supported by maximumPossibleForce is undefined.');
      }

      // Show property values
      $.feedback.text = 'type: ' + e.type + '\n' + PROPS.map(function(prop) {
        return prop + ': ' + e[prop];
      }).join('\n');

      // the harder you press, the less opaque the view becomes
      $.touchArea.opacity = 1 - (e.force / e.maximumPossibleForce);
    });

  });

})();
