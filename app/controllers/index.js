var log = require('log');

var activity;

/**
 * I wrap code that executes on creation in a self-executing function just to
 * keep it organised, not to protect global scope like it would in alloy.js
 */
(function constructor(args) {

  if (Alloy.Globals.isSupported) {

    if (OS_IOS) {
      initActivity();
    }

    if (OS_ANDROID) {
      initTabMenus();
    }
  }

  // To make it easier to see the full-screen splash screen on Android
  if (OS_ANDROID) {

    setTimeout(function() {

      // Opens either the TabGroup or "Not Supported" Window depending on
      // the Alloy.Globals.isSupported flag used in index.xml
      $.index.open();

    }, 3000);

  } else {
    $.index.open();
  }

})(arguments[0] || {});

function onListViewItemclick(e) {
  var item = e.section.getItemAt(e.itemIndex);

  // We use classes in index.xml with conditional TSS in index.tss to set this flag
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

// iOS: Show how the usage of needsSave has changed
function initActivity() {

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

      // Activate the tab active on the other device
      if (e.activityType === 'com.appcelerator.sample.ti520.tab') {
        $.index.tabs[e.userInfo.activeTabIndex].active = true;
      }

    });

    // When a tab receives focus
    $.index.addEventListener('focus', function(e) {
      var userInfo = {
        activeTabIndex: e.index
      };

      log.args('Ti.App.iOS.UserActivity.userInfo', userInfo);

      // Update the userInfo here, where before we would need to wait for
      // the useractivitywillsave event
      activity.userInfo = userInfo;

      // Inform iOS the activity has changed
      activity.needsSave = true;
    });
  }
}

// Android: Hack to delegate the creation of the TabGroup's menu to the active tab
function initTabMenus() {

  $.index.addEventListener('open', function(e) {

    $.index.activity.onCreateOptionsMenu = function(e) {

      // Delegate the creation of the menu to the active tab
      if ($.index.activeTab.window.activity.onCreateOptionsMenu) {
        $.index.activeTab.window.activity.onCreateOptionsMenu(e);
      }
    };

  });

  // When a tab receives focus
  $.index.addEventListener('focus', function(e) {

    // Force the TabGroup's menu to be regenerated
    $.index.activity.invalidateOptionsMenu();
  });

}
