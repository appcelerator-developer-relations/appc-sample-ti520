function openPopover(e) {

  $.popover.backgroundColor = (e.index === 1) ? Alloy.CFG.brandPrimary : '';

  $.popover.show({
    view: e.source,
    rect: {

      // This will position the arrow on 1/4th or 3/4th of the ButtonBar width
      x: e.source.size.width * ((e.index === 1) ? 0.75 : 0.25),

      // This will position the arrow at the bottom of the ButtonBar
      y: e.source.size.height
    }
  });
}
