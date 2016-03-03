# Titanium 5.2.0 Sample App

> **NOTE:** This Sample App requires Titanium 5.2.0 and Alloy 1.7.33. It supports Android 4.x and iOS 9.x. Some examples might be restricted to specific platforms or devices.

![screenshots](docs/assets/screenshots.png)

For more information on Titanium 5.2.0 see the [official announcement](http://www.appcelerator.com/blog/2016/02/ga-release-of-cli-5-2-titanium-5-2-and-studio-4-5/), which also links the release notes and full list of closed tickets.

## Walkthroughs

The examples and code itself should be fairly self explanatory, but we will publish detailed walkthroughs on some of the main features. Published so far:

* [Launch Files, iPad Pro, Slide Over and Split View](docs/launchfiles.md)
* [Live Photos](docs/livephotos.md)
* [Google Street View Panorama](docs/streetview.md)
* [Android Activity & Shared Element Transitions](docs/transitions.md)

## Running the Sample

### Via Appcelerator Studio

* Import it via *Dashboard* if available.
* Or import it via *File > Import... > Git > Git Repository as New Project* with *URI*:

		https://github.com/appcelerator-developer-relations/appc-sample-ti520

* Select a Simulator or Device to build to via *Run > Run As*.

### Via CLI

1. Clone the repository:

		git clone https://github.com/appcelerator-developer-relations/appc-sample-ti500

2. To run it with `appc run` first import it to the platform:

		appc new --import --no-services

3. Build to Simulator or Device:

		[appc run | ti build] -p ios [-T device]
