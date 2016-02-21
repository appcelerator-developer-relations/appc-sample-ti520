var log = require('log');

var EVENTS = ['touchstart', 'touchend', 'click', 'touchmove', 'dblclick', 'touchcancel'];
var PROPS = ['x', 'y', 'force', 'maximumPossibleForce', 'timestamp', 'altitudeAngle'];

EVENTS.forEach(function(name) {

  $.touchArea.addEventListener(name, function(e) {

    if (e.maximumPossibleForce === undefined) {
      return alert('This should never happen. Force Touch is supported by maximumPossibleForce is undefined.');
    }

    $.feedback.text = 'type: ' + e.type + '\n' + PROPS.map(function(prop) {
      return prop + ': ' + e[prop];
    }).join('\n');

    // the harder you press, the less opaque the view becomes
    $.touchArea.opacity = 1 - (e.force / e.maximumPossibleForce);
  });

});
