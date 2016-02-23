var log = require('log');

function enableEdit(e) {
  $.win.rightNavButton = $.doneBtn;

  $.listView.editing = true;
}

function disableEdit(e) {
  $.win.rightNavButton = $.editBtn;

  $.listView.editing = false;
}

function onDrag(e) {
  log.args('Ti.UI.ListView:' + e.type, e);
}

function onInsert(e) {
  log.args('Ti.UI.ListView:insert', e);

  var item = e.section.getItemAt(e.itemIndex);

  // We insert a new item AFTER (+1) the selected item
  e.section.insertItemsAt(e.itemIndex + 1, [{
    properties: {
      canInsert: true,
      title: 'Inserted after ' + item.properties.title
    }
  }]);
}
