# LCARS Guide

**Designed and developed by Jay Robinson**

LCARS Guide is a Star Trek episode guide viewer styled as an [LCARS](http://en.wikipedia.org/wiki/LCARS "Library Computer Access/Retrieval System") display, built using web standards HTML5, CSS3, and JavaScript.

LCARS stands for Library Computer Access/Retrieval System, a fictional computer operating system created by Michael Okuda.

## Requirements

* local web server to host the PHP/HTML files
* Ruby for Sass/SCSS and Compass if you'd like to modify the styling



## Changelog

*Jan 28, 2012*

* Added Start view for iPhone and iPad.
* Activate/Deactivate individual series in Start view.
* Added jQuery.
* Better iOS 5 scrolling and layout for Start, Episode views via jQuery and ScrollFix.js. However, these are not completely compatible cross-device. Need to find a way to better target devices.
* Switch to PHP for continued HTML development. Final file format will be HTML templates, not PHP.

*Jan 27, 2012*

* Added CSS for Episode view on iPhone, portrait and landscape.

*Jan 20, 2012*

* Initial commit of raw HTML and CSS files for iPad view.



## To Do

* Search view
* Sort Character/Tag view
* Top Episodes/Favorites view
* Focus Mode (switch stylesheet to print version)
* "Skip To..." sections for mobile version
* User generated content
  * Add quotes/optional timestamp
  * Add photos/optional timestamp
  * Add notes
* HTML5 Audio on button tap
* Offline capable with HTML5 Cache Manifest
* General browser compatibility