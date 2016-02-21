var log = require('log');

function onTabSelection(e) {
  log.args('Ti.UI.Tab:' + e.type, e);
}
