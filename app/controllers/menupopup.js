var log = require('log');

var timeout;

$.isSupported = function() {

  if (OS_IOS) {
    return true;
  }

  alert('This example requires iOS');
};

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

  show({
    view: e.source,
    arrowDirection: Ti.UI.iOS[arrowDirection]
  });
}

function show(params) {

  log.args('timeout', timeout);

  // if we didn't do so already, clear the timeout to auto-hide
  clearTimeout(timeout);

  log.args('Ti.UI.iOS.MenuPopup.show()', stringifyArrowDirection(params));

  $.menu.show(params);

  timeout = setTimeout(function() {

    var isVisible = $.menu.isVisible();
    log.args('Ti.UI.iOS.MenuPopup.isVisible()', isVisible);

    if (isVisible) {
      var hideParams = _.pick(params, 'animated');
      log.args('Ti.UI.iOS.MenuPopup.hide()', hideParams);

      $.menu.hide(hideParams);
    }

  }, 1000);
}

function stringifyArrowDirection(params) {
  var clone = _.clone(params);

  if (clone.arrowDirection) {

    switch (clone.arrowDirection) {
      case Ti.UI.iOS.MENU_POPUP_ARROW_DIRECTION_LEFT:
        clone.arrowDirection = 'Ti.UI.iOS.MENU_POPUP_ARROW_DIRECTION_LEFT';
        break;
      case Ti.UI.iOS.MENU_POPUP_ARROW_DIRECTION_UP:
        clone.arrowDirection = 'Ti.UI.iOS.MENU_POPUP_ARROW_DIRECTION_UP';
        break;
      case Ti.UI.iOS.MENU_POPUP_ARROW_DIRECTION_DOWN:
        clone.arrowDirection = 'Ti.UI.iOS.MENU_POPUP_ARROW_DIRECTION_DOWN';
        break;
      case Ti.UI.iOS.MENU_POPUP_ARROW_DIRECTION_RIGHT:
        clone.arrowDirection = 'Ti.UI.iOS.MENU_POPUP_ARROW_DIRECTION_RIGHT';
        break;
    }
  }

  return clone;
}
