# Titanium 5.2.0 Sample App

> **NOTE:** This Sample App requires Titanium 5.2.0

The [Titanium 5.2.0 Sample App](https://github.com/appcelerator-developer-relations/appc-sample-ti520) demonstrates most of the new features in Titanium 5.2.0, including..

For a full list of changes see the [Release Notes](http://docs.appcelerator.com/platform/latest/#!/guide/Titanium_SDK_5.2.0_Release_Note).

- ADD CONSOLE

## Live Photo (issues outstanding)

* 👍 `Titanium.Media.MEDIA_TYPE_LIVEPHOTO`
* 👍 `Titanium.UI.iOS.LIVEPHOTO_PLAYBACK_STYLE_FULL|HINT`
* 👍 `Titanium.UI.iOS.LivePhotoView`

## iOS: Keyboard (coded)

* 👍 `Ti.UI.(TextArea|Field).appearance` > `Ti.UI.(TextArea|Field).keyboardAppearance`
* 👍 `Titanium.UI.KEYBOARD_TYPE_TWITTER`
* 👍 `Titanium.UI.KEYBOARD_TYPE_WEBSEARCH`
* 👍 `Titanium.UI.KEYBOARD_APPEARANCE_DARK` (use instead of soon to be deprecated alert)
* 👍 `Titanium.UI.KEYBOARD_APPEARANCE_LIGHT` (same as default and `_DEFAULT`)
* 👍 `Titanium.UI.RETURNKEY_CONTINUE`

## iOS: ProgressBar

* 👍 `Titanium.UI.ProgressBar.trackTintColor`

## iOS: TabGroup

* 👍 `Titanium.UI.Tab.iconInsets`
* 👍 `Ti.UI.Tab.(blur|focus)` > `Ti.UI.Tab.(un)?selected`
* 👍 `Ti.UI.TabGroup.(un)?selected` > `Ti.UI.TabGroup.(blur|focus)`

## iOS: Popover

* Titanium.UI.iPad.Popover.backgroundColor

## iOS: ListView

* Titanium.UI.ListItem.canInsert
* Titanium.UI.ListItem.dragend
* Titanium.UI.ListItem.dragstart

## iOS: Window

* Titanium.UI.Window.swipeToClose

## iOS: Story Board, Split View, iPad Pro etc

## iOS 9 3D touch

* force, maximumPossibleForce (properties on touch events)
* Apple pencil APIs (properties on touch events)

## iOS

* Scroll event for  Titanium.UI.ScrollView now sends the contentSize property to scroll event.
* Added support for UIMenuController. A menu popup provides the ability to create custom tooltip options using the items property covering the native UIMenuController class. (https://jira.appcelerator.org/browse/TIMOB-5812)
* Contact icons for Quick Actions (https://jira.appcelerator.org/browse/TIMOB-19716)

## Swift watchOS 2 templates

* Default or not?

----------------------

## Android: View Transitions

* Titanium.UI.Android.TRANSITION_*

## Android: TableView

* Titanium.UI.TABLE_VIEW_SEPARATOR_STYLE_NONE
* Titanium.UI.TABLE_VIEW_SEPARATOR_STYLE_SINGLE_LINE
* Titanium.UI.TableView.maxClassname

## Android: TextField

* Titanium.UI.TextField.inputType

## Android: Window

* Titanium.UI.Window.addSharedElement
* Titanium.UI.Window.removeAllSharedElements

## Ti.Map StreetView

* createStreetViewPanorama
* https://jira.appcelerator.org/browse/TIMOB-19751
* ti.map 2.3.6 (Android only)

## Android: Soft Navigation Bar

* `<fullscreen>true</fullscreen>`

## Android launcher shortcut

* https://jira.appcelerator.org/browse/TIMOB-19679

-------------------

## Renamed APIs

Titanium 5.2 deprecates some APIs that we've renamed to make them more descriptive and aligned with similar APIs:

* `Ti.Calendar.STATUS_CANCELLED` > `Ti.Calendar.STATUS_CANCELED`
* `Ti.Calendar.eventsAuthorization` > `Ti.Calendar.calendarAuthorization`
* `Ti.Calendar.CAMERA_AUTHORIZATION_NOT_DETERMINED` > `Ti.Calendar.CAMERA_AUTHORIZATION_UNKNOWN`
* `Ti.Media.cameraAuthorizationStatus` > `Ti.Media.cameraAuthorization`
* `Ti.UI.KEYBOARD_*` > `Ti.UI.KEYBOARD_TYPE_*`
* `Ti.UI.(TextArea|TextField|SearchBar).appearance` > `Ti.UI.($1).keyboardAppearance`
* `Ti.UI.Tab.(blur|focus)` > `Ti.UI.Tab.(un)?selected`
* `Ti.UI.TabGroup.(un)?selected` > `Ti.UI.TabGroup.(blur|focus)`
