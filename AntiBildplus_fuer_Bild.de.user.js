// ==UserScript==
// @name        AntiBildplus fuer Bild.de
// @namespace   bild.de
// @description Entfernt alle BildPlus-Artikel von den Seiten.
// @include     http://www.bild.de/*
// @require     http://code.jquery.com/jquery-1.11.2.min.js
// run-at document-start
// @icon        https://raw.githubusercontent.com/dieterds/AntiWerbung/master/antiicon-48.png
// @version     1.0
// @grant       none
// ==/UserScript==
/*window.setInterval(function () {
  window.UABPMsg = function () {
    console.log('haha');
  }
}, 500);*/
$('.bplus, .variant').remove();
$('#logo').remove();
