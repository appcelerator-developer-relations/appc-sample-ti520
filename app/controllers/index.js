var log = require('log');

var activity;

/**
 * I wrap code that executes on creation in a self-executing function just to
 * keep it organised, not to protect global scope like it would in alloy.js
 */
(function constructor(args) {

  // Open either the TabGroup or "Not Supported" Window depending on
  // the Alloy.Globals.isSupported flag used in index.xml
  $.index.open();

  initActivity();

})(arguments[0] || {});

function onListViewItemclick(e) {
  var item = e.section.getItemAt(e.itemIndex);

  if (item.properties.unsupported) {
    return alert('Your device does not meet the requirements for this example.');
  }

  var controllerSrc = e.itemId;

  // Special case. We want to list the Tab sample but it should select the middle tab.
  if (controllerSrc === 'tab') {
    $.index.tabs[1].active = true;
    return;
  }

  var controller = Alloy.createController(controllerSrc);

  $.samplesTab.open(controller.getView());
}

function initActivity() {

  if (!OS_IOS || !Alloy.Globals.isSupported) {
    return;
  }

  activity = Ti.App.iOS.createUserActivity({
    activityType: 'com.appcelerator.sample.ti520.tab',
    title: Ti.App.name,
    userInfo: {
      activeTabIndex: 0
    }
  });

  if (activity.isSupported()) {
    activity.becomeCurrent();

    Ti.App.iOS.addEventListener('continueactivity', function(e) {
      log.args('Ti.App.iOS:continueactivity', e);

      if (e.activityType === 'com.appcelerator.sample.ti520.tab') {
        $.index.tabs[e.userInfo.activeTabIndex].active = true;
      }

    });

    $.index.addEventListener('focus', function(e) {
      var userInfo = {
        activeTabIndex: e.index
      };

      log.args('Ti.App.iOS.UserActivity.userInfo', userInfo);

      activity.userInfo = userInfo;

      activity.needsSave = true;
    });
  }
}
