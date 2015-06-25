// ==UserScript==
// @name        AntiWerbung fuer T-Online.TV
// @namespace   TOTV
// @description Entfernt die Videowerbung, die vor jedem Video abgespielt wird.
// @include     http://www.t-online.de/tv/*
// @downloadURL https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_T-Online.TV.user.js
// @updateURL   https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_T-Online.TV.user.js
// @icon        https://raw.githubusercontent.com/dieterds/AntiWerbung/master/antiicon-48.png
// @version     1.5
// @grant       none
// ==/UserScript==
console.log('AntiWerbung fuer T-OnlineTV startet');
var config = video.config;
config.adData = null;
config.homad = 0;
video.parseConfig(config);
