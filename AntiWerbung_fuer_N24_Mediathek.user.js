// ==UserScript==
// @name        Antiwerbung fuer N24 Mediathek
// @namespace   N24
// @description Entfernt die Videowerbung, die vor jedem Video abgespielt wird.
// @include     http://www.n24.de/n24/Mediathek/videos/*
// @downloadURL https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_N24_Mediathek.user.js
// @updateURL   https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_N24_Mediathek.user.js
// @version     1.0
// @grant       none
// ==/UserScript==
console.log('AntiWerbung fuer N24 Mediathek startet');
_n24VideoCfg.adEnabled = false;
