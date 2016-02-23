function closeWindow() {
  $.win.close();
}

function toggle(e) {
  var property = e.source.title;
  var value = !(e.source.backgroundColor === Alloy.CFG.brandSuccess);

  $.streetView[property] = value;
  e.source.backgroundColor = value ? Alloy.CFG.brandSuccess : Alloy.CFG.brandSecondary;
}
