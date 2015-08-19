// ==UserScript==
// @name        AntiWerbung fuer N24 Mediathek
// @namespace   N24
// @description Entfernt die Videowerbung, die vor jedem Video abgespielt wird.
// @include     http://www.n24.de/n24/Mediathek/videos/*
// @downloadURL https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_N24_Mediathek.user.js
// @updateURL   https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_N24_Mediathek.user.js
// @icon        https://raw.githubusercontent.com/dieterds/AntiWerbung/master/antiicon-48.png
// @version     1.0
// @grant       none
// ==/UserScript==
console.log('AntiWerbung fuer N24 Mediathek startet');
_n24VideoCfg.adEnabled = false;
//_n24VideoCfg.flash.autoPlay = false;
//n24VideoAutoStart = false;
//delete myAd;
