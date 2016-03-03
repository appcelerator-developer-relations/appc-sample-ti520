var log = require('log');

function closeWindow() {
  $.win.close();
}

function openWindowB() {

  // For each setting
  ['activityEnterTransition', 'activityReturnTransition', 'activitySharedElementEnterTransition', 'activitySharedElementReturnTransition'].forEach(function(prop) {
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

  // Get Window B
  var win = Alloy.createController('transitions_b').getView();

  // Link shared elements using the transitionName also set in both XML files
  win.addSharedElement($.logo, 'logo');
  win.addSharedElement($.text, 'text');

  // Open the Window
  win.open();
}
