var log = require('log');

/**
 * I wrap code that executes on creation in a self-executing function just to
 * keep it organised, not to protect global scope like it would in alloy.js
 */
(function constructor(args) {

})(arguments[0] || {});

function openPhotoGallery() {

  Ti.Media.openPhotoGallery({

    // You can not use LIVEPHOTO without also allowing PHOTO
    mediaTypes: [Ti.Media.MEDIA_TYPE_LIVEPHOTO, Ti.Media.MEDIA_TYPE_PHOTO],
    cancel: handleResponse,
    error: handleResponse,
    success: handleResponse
  });
}

function showCamera(requested) {

  if (Ti.Media.hasCameraPermissions()) {

    Ti.Media.showCamera({

      // You can not use LIVEPHOTO without also allowing PHOTO
      mediaTypes: [Ti.Media.MEDIA_TYPE_LIVEPHOTO, Ti.Media.MEDIA_TYPE_PHOTO],
      cancel: handleResponse,
      error: handleResponse,
      success: handleResponse
    });

  } else if (requested !== true) {
    Ti.Media.requestCameraPermissions(function(e) {

      if (!e.success) {
        return alert(e.error || 'Error #' + e.code);
      }

      showCamera(true);
    });

  } else {
    return alert('This should never happen. You succesfully request camera permission but we still haven\'t.');
  }
}

function handleResponse(e) {

  log.args(e, e.livePhoto);

  if (!e.success) {
    return alert(e.error || 'Error #' + e.code);
  }

  if (e.mediaType !== Ti.Media.MEDIA_TYPE_LIVEPHOTO) {
    return alert('This should never happen. We required a Live Photo but somehow you selected something else.');
  }

  console.log('livePhoto', e.livePhoto, typeof e.livePhoto);

  if (!e.livePhoto) {
    return alert('This should never happen. If mediaType says you selected a Live Photo it should be there.');
  }

  // $.livePhoto.image = e.livePhoto;
}
