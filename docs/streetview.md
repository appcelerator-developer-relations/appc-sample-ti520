### Titanium 5.2.0: Google Street View Panorama

The [ti.map 2.3.6](https://github.com/appcelerator-modules/ti.map) module that comes with [Titanium 5.2.0](http://www.appcelerator.com/blog/2016/02/ga-release-of-cli-5-2-titanium-5-2-and-studio-4-5/) adds support for [Google StreetViewPanorama](https://developers.google.com/maps/documentation/android-api/streetview). This allows you to integrate Street View in your Titanium Android apps.

In this blog post I'll walk you through all of this using the new [Titanium 5.2.0 Sample App](http://github.com/appcelerator-developer-relations/appc-sample-ti520):

![Sample App](assets/streetview.png)

*Yes, that's our [San Jose HQ](https://goo.gl/maps/1bAiuvwBoQ42) you're looking at!*

#### Add the Maps Module

Since the module is bundled with the Titanium SDK you don't need to download it. You do need to add it to your [tiapp.xml](tiapp.xml#L112-L113):

	<modules>
		<module platform="android">ti.map</module>
	</modules>
	
In Studio you can use the TiApp Editor:

![Installing a module](assets/module.png)

#### Initialize the Maps Module

Google requires you to [request an API key](http://docs.appcelerator.com/platform/latest/#!/guide/Google_Maps_v2_for_Android-section-36739898_GoogleMapsv2forAndroid-ObtainandAddaGoogleAPIKey) that is linked to your App ID and the keystore you use when you build the app. You need to then add this API key to your `tiapp.xml` as well:

	<android xmlns:android="http://schemas.android.com/apk/res/android">
		<manifest>
			<application>
				<meta-data android:name="com.google.android.maps.v2.API_KEY" android:value="AIzaSyB1ATGRrby9stkKxvdl3SBYxSVB5Kkm7yM"/>
			</application>
		</manifest>
	</android>

The Sample App has an [API key configured](tiapp.xml#L101) that is valid for its App ID and our [builtin development keystore](https://github.com/appcelerator/titanium_mobile/blob/master/support/android/dev_keystore).

#### Add the StreetViewPanorama

To add the new StreetViewPanorama we have used Alloy's `module` attribute in the [streetview.xml](app/views/android/streetview.xml#L6) view:

	<StreetViewPanorama module="ti.map" id="streetView" />

You should know that Alloy normally transpiles `<Foo>` elements to `Ti.UI.createFoo()`. You can use the `ns` attribute to let Alloy using something else then `Ti.UI`, which is what we needed for [Live Photos](livephotos.md). The `module` attribute is very similar but its value will be wrapped in `require(..)`. This means we can load any native or CommonJS module to deliver us the view factory method(s) we need.

#### Configure the StreetViewPanorama

The [API reference](http://docs.appcelerator.com/platform/latest/#!/api/Modules.Map) for the StreetViewPanorama is currently [missing](https://jira.appcelerator.org/browse/TIDOC-2450). Luckily there's just a few properties and the samples shows you all of them.

##### Set the location
First of all we need to set the position. We use the ID we've assigned the tag in the above XML view to set the position in [streetview.tss](app/styles/android/streetview.tss#L1-L8):

	'#streetView': {
		position: {
			latitude: 37.3676332,
			longitude: -121.9139205
		}
	}

> **NOTE:** Strange enough the [Android API](https://developers.google.com/maps/documentation/android-api/streetview#set_the_location_of_the_panorama) does not allow you set the heading. It seems always start headed North.

##### Customize the user-controlled functionality
There are a few features you can disable. All of them are on by default. In the Sample App I have [overlaid some buttons](app/views/android/streetview.xml#L8-L13) so you can easily [toggle](app/controllers/android/streetview.js#L5-L13) these boolean properties.

* `panning`: Determines whether the user will be able to re-orient the camera by dragging.
* `userNavigation`: Determines whether the user will be able to move to a different panorama. Users can use a single tap on navigation links, or double tap the view, to move to a new panorama.
* `zoom`: Determines whether the user will be able to pinch to zoom.
* `streetNames`: Determines whether the user is able to see street names displayed on the ground.

#### Run on Android Device or Emulator

To use Google Maps the device or emulator needs to have [Google Play Services](https://developers.google.com/android/guides/overview) installed. This comes - and is silently updated - with the Google Play app that you will find on pretty much any Android device.

Unfortunately, the popular [Genymotion](https://www.genymotion.com/) emulator [comes without Google Apps](https://www.genymotion.com/faq/#google-apps-missing) because of a legal dispute with Google. You can find instructions on how to add Google Apps to Genymotion emulators on [Google](https://www.google.com/search?q=genymotion%20google%20apps).

However, you might also consider giving the stock AVDs (Android Virtual Device) another try. Most of them include Google APIs, the performance has improved a lot recently and [Android Studio](http://developer.android.com/sdk/index.html) makes it very easy to [manage AVDs](http://developer.android.com/tools/devices/managing-avds.html) for tons of common devices:</p>

![AVD](https://raw.githubusercontent.com/appcelerator-developer-relations/appc-sample-ti520/master/docs/assets/avd.png)

And yes, these AVDs work fine with Titanium!

Code Strong! 🚀
