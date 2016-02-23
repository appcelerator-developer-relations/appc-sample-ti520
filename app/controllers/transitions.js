var log = require('log');

function closeWindow() {
  $.win.close();
}

function openWindowA() {

  ['activityExitTransition', 'activityReenterTransition', 'activitySharedElementExitTransition', 'activitySharedElementReenterTransition'].forEach(function(prop) {
    var constant = $[prop].getSelectedRow(0).title;

    if (constant === 'undefined') {
      log.args('Ti.UI.Window.' + prop, 'undefined');
      Alloy.Globals[prop] = undefined;
    } else {
      log.args('Ti.UI.Window.' + prop, 'Ti.UI.Android.' + constant);
      Alloy.Globals[prop] = Ti.UI.Android[constant];
    }

  });

  Alloy.createController('transitions_a').getView().open();
}
