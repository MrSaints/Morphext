Morphext
========

A simple jQuery rotating / carousel plugin for text phrases powered by Animate.css and inspired by a Dota 2 hero, Morphling.

[Demo](http://www.enactuslse.co.uk/)


Install
-------

Download from the [project page](https://github.com/MrSaints/Morphext).

Install with [Bower](http://bower.io/): `bower install --save Morphext`


Usage
-----

1. Include the latest jQuery library together with `morphext.min.js` and `morphext.css` into your HTML document.

2. Encapsulate your rotating words in an element and separate each word with a comma or a separator of your choice:

        I am a <span id="js-rotating">So Simple, Very Doge, Much Wow, Such Cool</span> Text Rotator

3. Trigger the plugin by calling Morphext() on the element containing the rotating words:

        $("#js-rotating").Morphext({
            animation: "bounceIn", // Animation type (refer to Animate.css for a list of available animations)
            separator: ",", // An array of words to rotate are created based on this separator. Change it if you wish to separate the words differently (e.g. So Simple | Very Doge | Much Wow | Such Cool)
            speed: 2000 // The delay between each word in milliseconds
        });


Prerequisites
-------------
- [jQuery](http://www.jquery.com/)
- [Animate.css](http://daneden.github.io/animate.css/)


License
-------
Morphext is licensed under the MIT license [(http://ian.mit-license.org/)](http://ian.mit-license.org/).
