// ==UserScript==
// @name        AntiWerbung fuer Soovi.net
// @namespace   sv
// @description Beschreibungngege
// @include     http://soovi.net/*
// @include     http://gillout.com/*
// @downloadURL https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_Soovi.net.user.js
// @updateURL   https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_Soovi.net.user.js
// @version     1.0
// @grant       none
// ==/UserScript==
$('.top1v2_desktop, .top2v2_desktop, .sky_r').remove();
var runJWPlayerWithPreroll = function (file, container, width, height) {
  playFile(file, container, width, height);
}
