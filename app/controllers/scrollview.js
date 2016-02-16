var log = require('log');

$.isSupported = function() {

  if (OS_IOS) {
    return true;
  }

  alert('This example requires iOS');
};

function onScroll(e) {
  log.args('Ti.UI.ScrollView:scroll', e);
}
