/* global Alloy, ENV_PROD */

var log = require('log');

// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

/**
 * It's a best practice to your code in alloy.js in a self-executing function
 * since any variable declared here will be in global scope and never garbage
 * collected. Use this or global to explicitly define a global, but rather
 * use Alloy.Globals or a CommonJS module you require where needed.
 */
(function(global) {

  // This variable would have been global without the above SEF
  var versions = Ti.version.split('.');

  // Used in the index view and controller to check if the appw as build with Ti 5.2 or later
  Alloy.Globals.isSupported = (parseInt(versions[0], 10) >= 5 && parseInt(versions[1], 10) >= 2);

  // Used in index.tss to set flags for supported examples
  Alloy.Globals.isForceTouchSupported = (OS_IOS && Ti.UI.iOS.forceTouchSupported);
  Alloy.Globals.isWatchSupported = (OS_IOS && Ti.WatchSession.isSupported);

  if (OS_IOS) {
    initAppshortcuts();
  }

})(this);

// Set in controllers/appshortcuts.js
function initAppshortcuts() {

  // Fired when the shortcut is used
  Ti.App.iOS.addEventListener('shortcutitemclick', function onShortcutitemclick(e) {
    log.args('Ti.App.iOS:shortcutitemclick', e);

    alert('Hi ' + e.userInfo.person.fullName);
  });
}
