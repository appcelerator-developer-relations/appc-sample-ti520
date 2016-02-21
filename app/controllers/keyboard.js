var log = require('log');

function changeKeyboardType(e) {
  var keyboardType = 'KEYBOARD_TYPE_' + e.source.labels[e.index].title;
  log.args('keyboardType', 'Ti.UI.' + keyboardType);

  $.textField.keyboardType = Ti.UI[keyboardType];
  $.textField.blur();
}

function changeKeyboardAppearance(e) {
  var keyboardAppearance = 'KEYBOARD_APPEARANCE_' + e.source.labels[e.index].title;
  log.args('keyboardAppearance', 'Ti.UI.' + keyboardAppearance);

  // Notice that since 5.2 you should use keyboardAppearance instead of appearance
  $.textField.keyboardAppearance = Ti.UI[keyboardAppearance];
  $.textField.blur();
}

function changeReturnKeyType(e) {
  var returnKeyType = 'RETURNKEY_' + e.source.labels[e.index].title;
  log.args('returnKeyType', 'Ti.UI.' + returnKeyType);

  $.textField.returnKeyType = Ti.UI[returnKeyType];
  $.textField.blur();
}
