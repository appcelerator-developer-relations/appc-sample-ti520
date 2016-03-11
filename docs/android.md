# Titanium 5.2.0: Wrap-up for Android

This is our final walkthrough on the [Sample App](http://github.com/appcelerator-developer-relations/appc-sample-ti520) for [Titanium 5.2.0](http://www.appcelerator.com/blog/2016/02/ga-release-of-cli-5-2-titanium-5-2-and-studio-4-5/) as we wrap up with the remaining new features and changes for Android:

[![video](http://img.youtube.com/vi/6UG8VwgoFOk/0.jpg)](https://www.youtube.com/watch?v=6UG8VwgoFOk)

* [TextField inputType](#textfield-inputtype)
* [Launcher Shortcuts](#launcher-shortcuts)
* [TableView separatorStyle](#tableview-separatorstyle)
* [Fullscreen Splash Image](#fullscreen-splash-image)
* [Renamed APIs](#renamed-apis)

## Textfield inputType

You could already set the [keyboardType](http://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.TextField-property-inputType) for a TextField, but even the [KEYBOARD\_TYPE\_NUMBER_PAD](http://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI-property-KEYBOARD_TYPE_NUMBER_PAD) still included other characters than just numbers and does not impose any limit on hardware keyboards.

The new [inputType](http://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.TextField-property-inputType) allows you to the specifically allow only numbers or numbers and text. It will automatically override the right keyboardType for you.

The sample [allows](../app/views/android/keyboard.xml) you to enable either or both input types to see the effect.

## Launcher Shortcuts

[Ti.Android.Intent.putExra()](http://docs.appcelerator.com/platform/latest/#!/api/Titanium.Android.Intent-method-putExtra) now accepts an [intent](http://docs.appcelerator.com/platform/latest/#!/api/Titanium.Android-property-EXTRA_SHORTCUT_INTENT) or [icon](http://docs.appcelerator.com/platform/latest/#!/api/Titanium.Android-property-EXTRA_SHORTCUT_ICON). Among other possible use cases, this allows you to create an intent to install additional launch shortcuts for specific activities within your app, each with a unique icon, title and extras to identify the desired action.

The sample demonstrates how to create this intent in the [launcher.js](../app/controllers/android/launcher.js) controller, while the [index.js](../app/controllers/index.js#L170) shows how to retrieve extras from the launch intent to take appropriate action.

> **NOTE:** It's a [known issue](https://jira.appcelerator.org/browse/TIMOB-20459) that if the app is running in the background, there is no way to know which intent (e.g. a launch shortcut) caused it to resume.

## TableView separatorStyle

[Ti.UI.TableView.separatorStyle](http://docs.appcelerator.com/platform/latest/#!/api/Titanium.UI.TableView-property-separatorStyle) was already supported for iOS and MobileWeb, but now you can hide the separator line on Android as well.

Tap anywhere in the Sample's TableView to [toggle the style](../app/controllers/android/tableview.js).

> **NOTE:** Support for ListView is [yet to be added](https://jira.appcelerator.org/browse/TIMOB-19141).

## Fullscreen Splash Image

If you set the `<fullscreen>` option in [tiapp.xml](../tiapp.xml#L14) to `true` this will now show the splash image fullscreen. The Android top status bar and bottom soft navigation bar will be hidden:

[![video](http://img.youtube.com/vi/tF042Nl99UA/0.jpg)](https://www.youtube.com/watch?v=tF042Nl99UA)

Be aware that this will also default your app to use the `Theme.AppCompat.NoTitleBar.Fullscreen` theme [introduced in 5.0](http://docs.appcelerator.com/platform/latest/#!/guide/Titanium_SDK_5.0.0_Release_Note-section-46239777_TitaniumSDK5.0.0ReleaseNote-TitaniumThemes). If you want a fullscreen splash image but still show the status bar and Action Bar in the app itself, you will have to manually set the theme. The sample app [uses a custom theme](../tiapp.xml#L98), but you can also use the default like this:

	<android xmlns:android="http://schemas.android.com/apk/res/android">
	  <manifest>
	    <application android:theme="@style/Theme.AppCompat" />
	  </manifest>
	</android>

## Renamed APIs

Finally, I'd like to remind you again of some properties and methods that we have deprecated and renamed to improve the consistency of our API. The old ones will be removed in Titanium 6.0.

| Old | New |
| --- | --- |
| `Ti.UI.Tab.(blur/focus)` | `Ti.UI.Tab.(un)?selected`
| `Ti.UI.TabGroup.(un)?selected` | `Ti.UI.TabGroup.(blur/focus)`
| `Ti.UI.(TextArea/Field).appearance` | `Ti.UI.(TextArea/Field).keyboardAppearance`
| `Ti.UI.KEYBOARD_*` | `Ti.UI.KEYBOARD_TYPE_*` and `Ti.UI.KEYBOARD_APPEARANCE_*`
| `Ti.UI.KEYBOARD_APPEARANCE_ALERT` | `Ti.UI.KEYBOARD_APPEARANCE_DARK`
| `Ti.Calendar.STATUS_CANCELLED` | `Ti.Calendar.STATUS_CANCELED`
| `Ti.Calendar.eventsAuthorization` | `Ti.Calendar.calendarAuthorization`
| `Ti.Calendar.CAMERA_AUTHORIZATION_NOT_DETERMINED` | `Ti.Calendar.CAMERA_AUTHORIZATION_UNKNOWN`
| `Ti.Media.cameraAuthorizationStatus` | `Ti.Media.cameraAuthorization`

Code Strong 🚀
