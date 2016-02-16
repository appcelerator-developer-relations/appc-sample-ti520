var log = require('log');

// Cannot be created in Alloy XML yet
// FIXME: https://jira.appcelerator.org/browse/ALOY-1357
$.menu = (function() {

  var menu = Ti.UI.iOS.createMenuPopup({
    items: ['Option 1', 'Option 2']
  });

  menu.addEventListener('click', function(e) {
    log.args('Ti.UI.iOS.MenuPopup:click', e);
  });

  return menu;

})();

$.isSupported = function() {

  if (OS_IOS) {
    return true;
  }

  alert('This example requires iOS');
};

function showWithDefaults(e) {
  show({
    view: e.source
  });
}

function showWithAnimated(e) {
  show({
    view: e.source,
    animated: (e.index === 0)
  });
}

function showWithArrowDirection(e) {
  var arrowDirection = 'MENU_POPUP_ARROW_DIRECTION_' + e.source.labels[e.index].title;
  log.args('arrowDirection', 'Ti.UI.iOS.' + arrowDirection);

  show({
    view: e.source,
    arrowDirection: Ti.UI.iOS[arrowDirection]
  });
}

function show(params) {

  log.args('Ti.UI.iOS.MenuPopup.show()', params);
  $.menu.show(params);

  setTimeout(function() {
    var isVisible = $.menu.isVisible();
    log.args('Ti.UI.iOS.MenuPopup.isVisible()', isVisible);

    if (isVisible) {
      var hideParams = _.pick(params, 'animated');
      log.args('Ti.UI.iOS.MenuPopup.hide()', hideParams);
      $.menu.hide(hideParams);
    }

  }, 1000);
}
