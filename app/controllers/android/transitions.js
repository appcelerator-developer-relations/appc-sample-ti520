var log = require('log');

function closeWindow() {
  $.win.close();
}

function openWindowA() {

  // For each setting
  ['activityExitTransition', 'activityReenterTransition', 'activitySharedElementExitTransition', 'activitySharedElementReenterTransition'].forEach(function(prop) {
    var constant = $[prop].getSelectedRow(0).title;

    if (constant.indexOf('TRANSITION_') === -1) {
      log.args('Ti.UI.Window.' + prop, constant);

      // We set a global that will be used for the creation-only property in transitions_a.tss
      Alloy.Globals[prop] = undefined;

    } else {
      log.args('Ti.UI.Window.' + prop, 'Ti.UI.Android.' + constant);
      Alloy.Globals[prop] = Ti.UI.Android[constant];
    }

  });

  // Open Window A
  Alloy.createController('transitions_a').getView().open();
}
