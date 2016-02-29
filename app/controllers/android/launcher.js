var log = require('log');

/**
 * I wrap code that executes on creation in a self-executing function just to
 * keep it organised, not to protect global scope like it would in alloy.js
 */
(function constructor() {

  // If the app was launched with the shortcut it would have this extra metadata
  $.feedback.text = Ti.App.Android.launchIntent.hasExtra('sample') ? 'Yes' : 'No';

})();

function closeWindow() {
  $.win.close();
}

function installShortcut(e) {

  // Copy the intent used to launch the app
  var intentForShortcut = Ti.App.Android.launchIntent;

  // Re-set the action to have the intent be the app entry point
  intentForShortcut.action = Ti.Android.ACTION_MAIN;
  intentForShortcut.addFlags(Ti.Android.FLAG_ACTIVITY_SINGLE_TOP);

  // Add custom metadata to read when the app is launched from the shortcut.
  // See index.js to see how we use this to directly open the launcher sample.
  intentForShortcut.putExtra('sample', 'launcher');

  // Create an intent to install the shortcut
  var intentToInstallShortcut = Ti.Android.createIntent({
    action: 'com.android.launcher.action.INSTALL_SHORTCUT',
  });

  // NEW: Link the actual intent for the shortcut
  intentToInstallShortcut.putExtra(Ti.Android.EXTRA_SHORTCUT_INTENT, intentForShortcut);

  // Title for the shortcut
  intentToInstallShortcut.putExtra(Ti.Android.EXTRA_SHORTCUT_NAME, 'Launch Sample');

  // NEW: Icon for the shortcut
  var icon = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'images', 'launcher.png').read();
  intentToInstallShortcut.putExtra(Ti.Android.EXTRA_SHORTCUT_ICON, icon);

  // Broadcast the intent
  Ti.Android.currentActivity.sendBroadcast(intentToInstallShortcut);

  if (Ti.App.Properties.getBool('installedShortcut', false)) {
    alert('You already installed the shortcut before. You might now have an additional one if, unless you have removed the previous one(s).');
  } else {
    alert('The shortcut has been installed. Force quit the app (3rd button in the system navigation bar, then swipe to close) to try it.');
  }

  Ti.App.Properties.setBool('installedShortcut', true);
}
