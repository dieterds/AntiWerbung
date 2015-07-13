// ==UserScript==
// @name        AntiWerbung fuer Webfail
// @namespace   WEBFAIL
// @description Entfernt die Videowerbung, die vor jedem Video abgespielt wird.
// @include     http://de.webfail.*/*
// @downloadURL https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_Webfail.user.js
// @updateURL   https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_Webfail.user.js
// @icon        https://raw.githubusercontent.com/dieterds/AntiWerbung/master/antiicon-48.png
// @version     1.0
// @grant       none
// ==/UserScript==
  console.log('AntiWerbung fuer Webfail startet');
  var timer = window.setInterval(function () {
    $('#subheader').next().hide();
    console.log('hidehidehide');
  }, 200)
  window.setTimeout(function () {
    clearInterval(timer);
  }, 1000);
