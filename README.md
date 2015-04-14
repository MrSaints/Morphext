Morphext
========

[![Dev Dependency Status](https://david-dm.org/MrSaints/Morphext/dev-status.svg?style=flat)](https://david-dm.org/MrSaints/Morphext#info=devDependencies)

A simple, high-performance and cross-browser [jQuery][jquery] rotating / carousel plugin for text phrases powered by [Animate.css][animatecss]. It is more succinctly described by [Softpedia](http://webscripts.softpedia.com/script/Text-Management/Text-Tools/Morphext-82875.html) as:

> A [jQuery][jquery] plugin for creating text-based carousels, rotating small or large pieces of text one after the other, just like a slider does with images... This can be a great tool for displaying catch phrases, mission statements, tag lines, and so on.

If you would like to achieve a similar effect with more flexibility (e.g. out animation) and with HTML objects rather than text phrases (e.g. unordered list items), please check out [Morphist][morphist].

[Website][website] / [Demo][demo]


Install
-------

Download from the [project page][downloads].

Install with [Bower][bower]: `bower install --save Morphext`


Usage
-----

1. Import the latest [Animate.css][animatecss] and [jQuery][jquery] library into your HTML.

2. Import `morphext.css` and include `morphext.min.js` in your HTML document.

3. Encapsulate your rotating phrases in an element and separate each phrase with a comma or a separator of your choice:

    ```html
    I am a <span id="js-rotating">So Simple, Very Doge, Much Wow, Such Cool</span> Text Rotator
    ```

4. Trigger the plugin by calling Morphext() on the element containing the rotating phrases:

    ```js
    $("#js-rotating").Morphext();
    ```

A demo titled `index.html` is included in this repository. Open it to see the end-result.


Options
-------

Morphext exposes the following options to alter the behaviour of the plugin:

Option | Type | Default | Description
--- | --- | --- | ---
animation | `string` | `bounceIn` | The [in] animation type. Refer to [Animate.css][animatecss] for a list of available animations.
separator | `string` | `,` | An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple / Very Doge / Much Wow / Such Cool).
speed | `int` | `2000` | The delay between the changing of each phrase in milliseconds.
complete | `object Function` | `null` | A callback that is executed after an item is animated in.

They may be used like so:

```js
$("#js-rotating").Morphext({
    animation: "fadeIn", // Overrides default "bounceIn"
    separator: "|", // Overrides default ","
    speed: 3000, // Overrides default 2000
    complete: function () {
        // Overrides default empty function
    }
});
```

The plugin relies heavily on [Animate.css][animatecss] for its [smooth, high performance animations](http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/) to transition between each phrase. Thus, the default animation speed (different from the interval between each phrase as described above) may be altered via CSS:

```css
#yourElement, .yourClass {
    /* Overrides Animate.css 1s duration */
    -vendor-animation-duration: 3s;
}
```


"Issues"
----------

Issue | Description | Solution
--- | --- | ---
Viewport | Certain animations (e.g. "up" and "down") by [Animate.css][animatecss] involves translating the element beyond the viewport thereby leading to unintended vertical and/or horizontal whitespace (further evident by the scrollbar "following" the animation effect. This is not a bug. | It may be eradicated by applying `overflow: hidden;` (CSS) to the parent of the element being animated.
JavaScript | JavaScript is required for the addition / removal of elements with [Animate.css][animatecss] [CSS animation] classes thereby creating the "transitioning effect". If JavaScript is disabled or unavailable, nothing will happen. All the phrases and its separator will be shown as it is (graceful degradation). | N/A
CSS3 | [Animate.css][animatecss] relies on CSS3 animations and transformations (available in most modern browsers). If CSS3 is disabled or unavailable, the phrases will continue to transition from one to another (assuming JavaScript is enabled), but there will be no animation effect. | No fallback is provided by this plugin. You may however, handle the fallback through the use of [Modernizr](http://modernizr.com/) (for feature detection) and [polyfills](http://html5polyfill.com/).

Should you encounter any problems or require assistance with this plugin, simply open a GitHub issue in this repository or you may contact [me via Twitter][twitter].


Prerequisites
-------------

- [jQuery][jquery]
- [Animate.css][animatecss]


Others
------

Native ports of Morphext have been developed in other JavaScript frameworks (e.g. [React](http://facebook.github.io/react/) and [Polymer](http://www.polymer-project.org/)):

- [Morphext React][morphext-react]
- [Morphext Polymer][morphext-polymer]

They are not part of the official plugin development and the approach used in developing these ports may not be idiomatic. Please use them at your own risk.

Issues and pull requests are welcomed.


License
-------

Morphext is licensed under the MIT license [(http://ian.mit-license.org/)](http://ian.mit-license.org/).

  [website]: http://morphext.fyianlai.com/
  [twitter]: https://www.twitter.com/MrSaints
  [demo]: http://www.enactuslse.co.uk/
  [downloads]: https://github.com/MrSaints/Morphext/releases

  [bower]: http://bower.io/
  [jquery]: https://www.jquery.com/
  [animatecss]: //daneden.github.io/animate.css/

  [morphist]: https://github.com/MrSaints/Morphist
  [morphext-react]: https://gist.github.com/MrSaints/7e84c68c086d5a6a3ee2#file-morphext-react-jsx
  [morphext-polymer]: https://gist.github.com/MrSaints/7e84c68c086d5a6a3ee2#file-morphext-polymer-html
