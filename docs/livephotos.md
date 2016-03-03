### Titanium 5.2.0: iOS Live Photos

[Titanium 5.2.0](http://www.appcelerator.com/blog/2016/02/ga-release-of-cli-5-2-titanium-5-2-and-studio-4-5/) has added support for [Live Photos](http://www.apple.com/iphone-6s/films/index.html#film-live-photos) that Apple [introduced with iOS 9.1](https://developer.apple.com/library/prerelease/ios/releasenotes/General/WhatsNewIniOS/Articles/iOS9_1.html) for the [iPhone 6s](http://www.apple.com/iphone-6s/cameras/). It allows you to select existing Live Photos and display them.

In this blog post I'll walk you through all of this using the new [Titanium 5.2.0 Sample App](http://github.com/appcelerator-developer-relations/appc-sample-ti520):

[![video](http://img.youtube.com/vi/XAxrq1hq7JA/0.jpg)](https://www.youtube.com/watch?v=XAxrq1hq7JA)

#### Capturing a Live Photo
Although Apple's [Reference](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UIImagePickerController_Class/index.html#//apple_ref/doc/uid/TP40007070-CH3-DontLinkElementID_2) isn't really clear about it does say:

> Live Photos is a Camera app feature on supported devices ...

And that has indeed been our experience and that of app developers that work directly in Objective-C or Swift. Even when we do include the Live Photo media type, the UI for taking a new photo within another app will not include the *Live* icon and does not return a Live Photo. We will provide support soon after Apple does.

#### Selecting a Live Photo
To select a Live Photo from your device you use [Ti.Media.openPhotoGallery()](http://docs.appcelerator.com/platform/latest/#!/api/Titanium.Media-method-openPhotoGallery) as always. Live Photos will always be selectable, but only if you include `Ti.Media.MEDIA_TYPE_LIVEPHOTO` in the [mediaTypes](http://docs.appcelerator.com/platform/latest/#!/api/PhotoGalleryOptionsType-property-mediaTypes) will you get an actual [livePhoto](http://docs.appcelerator.com/platform/latest/#!/api/CameraMediaItemType-property-livePhoto) in the success response. Both ways, the existing [media](http://docs.appcelerator.com/platform/latest/#!/api/CameraMediaItemType-property-media) property will always get you the plain photo.

> **NOTE:** You cannot use `Ti.Media.MEDIA_TYPE_LIVEPHOTO` without also including `Ti.Media.MEDIA_TYPE_PHOTO` in `mediaTypes`.

See the the Sample App's [livephoto.js](app/controllers/ios/livephoto.js) controller for the implementation.

#### Displaying a Live Photo
Live Photos cannot be displayed in a `Ti.UI.ImageView`, but only the new [Ti.UI.iOS.LivePhotoView](http://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.iOS.LivePhotoView).

Alloy [does not yet support LivePhotoView](https://jira.appcelerator.org/browse/ALOY-1356) which means we have to tell Alloy to use the `Ti.UI.iOS` namespace [ourselves](app/views/ios/livephoto.xml#L10-L11):

	<LivePhotoView ns="Ti.UI.iOS" .. />
	
Set the view's [livePhoto](http://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.iOS.LivePhotoView-property-livePhoto) property to the [Ti.UI.iOS.LivePhoto](http://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.iOS.LivePhoto) proxy that you received from `Ti.Media.openPhotoGallery()`.

The view supports force touch interaction with the Live Photo out of the box. Just force touch the view to play the Live Photo.

#### Programmatic Playback
You can also programmatically start and stop the playback. Use [Ti.UI.iOS.LivePhotoView.startPlaybackWithStyle()](http://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.iOS.LivePhotoView-method-startPlaybackWithStyle) to start and [stopPlayback()](http://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.iOS.LivePhotoView-method-stopPlayback) to cancel. The first method accepts a [parameter](http://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.iOS.LivePhotoView-method-stopPlayback) to select full playback or the hint style that you also see as a LivePhoto scrolls into view in the Photos app. This is also the only use case that Apple suggests you should use this method for.

In the [livephoto.js](app/controllers/ios/livephoto.js#L34) controller we playback with hint style after we've initialised the LivePhotoView with the Live Photo you selected:

	$.livePhotoView.startPlaybackWithStyle(Ti.UI.iOS.LIVEPHOTO_PLAYBACK_STYLE_HINT);

### Events
In addition to regular events, the view also features a [start](http://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.iOS.LivePhotoView-event-start) and [stop](http://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.iOS.LivePhotoView-event-stop) event to inform you when the Live Photo has plays.
