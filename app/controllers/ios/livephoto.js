var log = require('log');

function openPhotoGallery() {

  Ti.Media.openPhotoGallery({

    // You can not use LIVEPHOTO without also allowing PHOTO
    mediaTypes: [Ti.Media.MEDIA_TYPE_LIVEPHOTO, Ti.Media.MEDIA_TYPE_PHOTO],
    cancel: handleResponse,
    error: handleResponse,
    success: handleResponse
  });
}

function handleResponse(e) {
  log.args('Ti.Media.openPhotoGallery', e);

  if (!e.success) {
    return alert(e.error || 'Error #' + e.code);
  }

  if (e.mediaType !== Ti.Media.MEDIA_TYPE_LIVEPHOTO) {
    return alert('This should never happen. We required a Live Photo but somehow you selected something else.');
  }

  if (!e.livePhoto) {
    return alert('This should never happen. If mediaType says you selected a Live Photo it should be there.');
  }

  $.livePhotoView.livePhoto = e.livePhoto;

  // Programmatically triggering playback isn't recommended in any other use case
  // then when the photo is loaded or slides in to the viewport.
  $.livePhotoView.startPlaybackWithStyle(Ti.UI.iOS.LIVEPHOTO_PLAYBACK_STYLE_HINT);
}

function onLivePhotoViewStartStop(e) {
  log.args('Ti.UI.iOS.LivePhotoView:' + e.type, e);
}

function startPlaybackWithStyle(e) {
  var playbackStyle = 'LIVEPHOTO_PLAYBACK_STYLE_' + e.source.labels[e.index].title;
  log.args('playbackStyle', 'Ti.UI.iOS.' + playbackStyle);

  $.livePhotoView.startPlaybackWithStyle(Ti.UI.iOS[playbackStyle]);
}

function stopPlayback() {
  $.livePhotoView.stopPlayback();
}
