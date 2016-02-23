var log = require('log');

function closeWindow() {
  $.win.close();
}

function installShortcut(e) {
  var currentIntent = Ti.Android.currentActivity.getIntent();
  currentIntent.setAction(Ti.Android.ACTION_MAIN);

  // Add custom metadata to read when your App is launched from the shortcut.
  currentIntent.putExtra("shortcut", "gallery");

  // Create an Intent
  var shortcutIntent = Ti.Android.createIntent({
    action: "com.android.launcher.action.INSTALL_SHORTCUT",
  });

  // Title that will appear with the shortcut
  shortcutIntent.putExtra(Ti.Android.EXTRA_SHORTCUT_NAME, "Gallery");

  shortcutIntent.putExtra(Ti.Android.EXTRA_SHORTCUT_INTENT, currentIntent); // Not currently possible
  shortcutIntent.putExtra("duplicate", false);

  // Set the icon for the shortcut
  var iconImage = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "appicon.png").read();
  shortcutIntent.putExtra(Ti.Android.EXTRA_SHORTCUT_ICON, iconImage); // Not currently possible

  // Adds the shortcut to the home screen.
  Ti.Android.currentActivity.sendBroadcast(shortcutIntent);
}
