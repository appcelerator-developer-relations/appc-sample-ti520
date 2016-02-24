var log = require('log');

/**
 * I wrap code that executes on creation in a self-executing function just to
 * keep it organised, not to protect global scope like it would in alloy.js
 */
(function constructor() {
  Ti.App.iOS.addEventListener('shortcutitemclick', onShortcutitemclick);
})();

function onClose(e) {

  // Always clean up global event listeners
  Ti.App.iOS.removeEventListener('shortcutitemclick', onShortcutitemclick);
}

// Fired when the shortcut is used
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

    // Called when the user has selected a contact person
    selectedPerson: function(e) {
      var appShortcuts = Ti.UI.iOS.createApplicationShortcuts();

      // remove previous shortcut of this type, if any
      appShortcuts.removeDynamicShortcut('contact');

      // add the new shortcut
      appShortcuts.addDynamicShortcut({
        itemtype: 'contact',
        title: e.person.fullName,
        userInfo: {
          person: {
            fullName: e.person.fullName
          }
        },

        // use the contact person as the icon
        icon: e.person
      });

      alert('Now move your app to the background and force touch the app icon to see the contact icon');
    }
  });
}
