var log = require('log');

function closeWindow() {
  $.win.close();
}

function toggleSeparatorStyle(e) {

  if ($.tableView.separatorStyle === Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE) {
    log.args('Ti.UI.TableView.separatorStyle', 'Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_SINGLE_LINE');
    $.tableView.separatorStyle = Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_SINGLE_LINE;
  } else {
    log.args('Ti.UI.TableView.separatorStyle', 'Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE');
    $.tableView.separatorStyle = Ti.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE;
  }
  
}
