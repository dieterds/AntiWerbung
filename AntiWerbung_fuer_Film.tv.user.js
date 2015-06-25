// ==UserScript==
// @name        AntiWerbung fuer Film.tv
// @namespace   ftv
// @description Entfernt die Videowerbung, die vor jedem Video abgespielt wird.
// @include     https://www.film.tv/film/*/trailer/*.html
// @downloadURL https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_Film.tv.user.js
// @updateURL   https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_Film.tv.user.js
// @icon        https://raw.githubusercontent.com/dieterds/AntiWerbung/master/antiicon-48.png
// @version     1.0
// @grant       none
// ==/UserScript==
console.log('AntiWerbung fuer Film.tv startet');

if (jwp.config.playlist[1] != null)
{
  jwp.config.playlist[0] = jwp.config.playlist[1];
  delete jwp.config.playlist[1];
}
