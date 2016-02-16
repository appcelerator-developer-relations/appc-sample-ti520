var log = require('log');

$.isSupported = function() {

  if (OS_IOS && Ti.UI.iOS.forceTouchSupported) {
    return true;
  }

  alert('This example requires iOS and an iOS device that supports the 3D-Touch capability "Force Touch"');
};

(function constructor() {
  Ti.App.iOS.addEventListener('shortcutitemclick', onShortcutitemclick);
})();

function onClose(e) {
  Ti.App.iOS.removeEventListener('shortcutitemclick', onShortcutitemclick);
}

function onShortcutitemclick(e) {
  log.args('Ti.App.iOS:shortcutitemclick', e);

  alert('Hi ' + e.userInfo.person.fullName);
}

function createShortcut(e) {

  if (Ti.Contacts.hasContactsPermissions()) {
    return _createShortcut();
  }

  if (Ti.Contacts.contactsAuthorization === Ti.Contacts.AUTHORIZATION_RESTRICTED) {
    return alert('Access to contacts has been restricted');
  }

  Ti.Contacts.requestContactsPermissions(function(e) {

    if (!e.success) {
      return alert(e.error || 'Error #' + code);
    }

    _createShortcut();
  });
}

function _createShortcut() {
  Ti.Contacts.showContacts({
    selectedPerson: function(e) {
      var appShortcuts = Ti.UI.iOS.createApplicationShortcuts();

      // remove previous shortcut of this type, if any
      appShortcuts.removeDynamicShortcut('contact');

      appShortcuts.addDynamicShortcut({
        itemtype: 'contact',
        title: e.person.fullName,
        icon: e.person,
        userInfo: {
          person: {
            fullName: e.person.fullName
          }
        }
      });

      alert('Now move your app to the background and force touch the app icon to see the contact icon');
    }
  });
}
