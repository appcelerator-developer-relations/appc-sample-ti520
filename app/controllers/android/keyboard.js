var log = require('log');

function closeWindow() {
  $.win.close();
}

function setInputType() {
  var names = [];
  var inputType = [];

  if ($.number.value) {
    names.push('Ti.UI.INPUT_TYPE_CLASS_NUMBER');
    inputType.push(Ti.UI.INPUT_TYPE_CLASS_NUMBER);
  }

  if ($.text.value) {
    names.push('Ti.UI.INPUT_TYPE_CLASS_TEXT');
    inputType.push(Ti.UI.INPUT_TYPE_CLASS_TEXT);
  }

  log.args('Ti.UI.TextField.inputType', names);

  $.textField.inputType = inputType;
  $.textField.blur();
}
