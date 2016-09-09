// ==UserScript==
// @name        AntiAntiAdblock fuer Iphone-Tricks.de
// @namespace   IT
// @description Entfernt die AntiAdblock Meldung und macht den Artikel wieder sichtbar bei Iphone-Tricks.de
// @include     http://iphone-tricks.de/*
// @downloadURL http://pastebin.com/raw.php?i=X1UrvKcv
// @updateURL   http://pastebin.com/raw.php?i=X1UrvKcv
// @version     1.0
// @icon        https://raw.githubusercontent.com/dieterds/AntiWerbung/master/antiicon-48.png
// @grant       none
// ==/UserScript==
console.log('AntiAntiAdblock fuer Iphone-Tricks.de startet');
window.setTimeout(function ()
{
  if (window.jQuery)
  {
    console.log('AntiAdblock deaktiviert');
    jQuery('#adblock-info').remove();
    jQuery('#left-area .post_content p').css('opacity', '100');
  }
}, 10);