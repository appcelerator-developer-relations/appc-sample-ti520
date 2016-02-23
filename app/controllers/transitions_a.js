var log = require('log');

function closeWindow() {
  $.win.close();
}

function openWindowB() {

  ['activityEnterTransition', 'activityReturnTransition', 'activitySharedElementEnterTransition', 'activitySharedElementReturnTransition'].forEach(function(prop) {
    var constant = $[prop].getSelectedRow(0).title;

    if (constant === 'undefined') {
      log.args('Ti.UI.Window.' + prop, 'undefined');
      Alloy.Globals[prop] = undefined;
    } else {
      log.args('Ti.UI.Window.' + prop, 'Ti.UI.Android.' + constant);
      Alloy.Globals[prop] = Ti.UI.Android[constant];
    }

  });

  var win = Alloy.createController('transitions_b').getView();

  win.addSharedElement($.logo, 'logo');

  win.open();
}
