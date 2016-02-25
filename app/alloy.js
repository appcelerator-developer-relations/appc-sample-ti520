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

  if (OS_IOS && Alloy.isTablet) {

    // This event fires when the app was still active in the background when it Slides Over another app
    Ti.App.addEventListener('resume', function(e) {
      log.args('Ti.App:resume', e);
    });

    // Will (also) fires when:
    // 1) This app Slides Over another app
    // 2) This app goes from Slide Over to Split View
    // 3) This app goes from quarter to half Split View or visa versa
    // 4) The Split View devider is dragged but bounces back to existing mode
    // 5) This app goes from Split View to full view by dragging the devider to the left edge
    // 6) This app goes from Split View to Slide Over (via singletap on devider)
    // 7) Another app that was Slide Over this app goes to Split View
    //
    // It does not fire when:
    // 1) This app goes from Split View back full view because the other app goes back from Split View to Slide Over (via singletap on devider)
    Ti.App.addEventListener('resumed', function(e) {
      log.args('Ti.App:resumed', e);
    });

  }

})(this);
