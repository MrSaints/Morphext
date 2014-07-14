/*!
 * Morphext v2.1.0 - Text Rotating Plugin for jQuery
 * https://github.com/MrSaints/Morphext
 *
 * Built on jQuery Boilerplate
 * http://jqueryboilerplate.com/
 *
 * Copyright 2014 Ian Lai and other contributors
 * Released under the MIT license
 * http://ian.mit-license.org/
 */!function(a,b,c,d){function g(b,c){this.element=a(b),this.settings=a.extend({},f,c),this._defaults=f,this._name=e,this.init()}var e="Morphext",f={animation:"bounceIn",separator:",",speed:2e3};g.prototype={init:function(){var b=this;this.phrases=[],this.element.addClass("morphext"),a.each(this.element.text().split(this.settings.separator),function(a,c){b.phrases.push(c)}),this.element.html("<span>"+this.phrases.join("</span><span>")+"</span>"),this.index=-1,this._animate(),setInterval(function(){b._animate()},this.settings.speed)},_animate:function(){this.index+1===this.phrases.length&&(this.index=-1),++this.index,this.element.find("span").removeClass().eq(this.index).addClass("animated "+this.settings.animation)},setAnimation:function(a){this.settings.animation=a}},a.fn[e]=function(b){var c=arguments;if(b===d||"object"==typeof b)return this.each(function(){a.data(this,"plugin_"+e)||a.data(this,"plugin_"+e,new g(this,b))});if("string"==typeof b&&"_"!==b[0]&&"init"!==b){var f;return this.each(function(){var d=a.data(this,"plugin_"+e);d instanceof g&&"function"==typeof d[b]&&(f=d[b].apply(d,Array.prototype.slice.call(c,1))),"destroy"===b&&a.data(this,"plugin_"+e,null)}),f!==d?f:this}}}(jQuery,window,document);