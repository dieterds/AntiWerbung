// ==UserScript==
// @name        AntiWerbung fuer Focus.de
// @namespace   FDE
// @description Entfernt die Videowerbung, die vor jedem Video abgespielt wird.
// @include     http://www.focus.de/*/videos/*
// @downloadURL https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_FocusTV.user.js
// @updateURL   https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_FocusTV.user.js
// @version     1.0
// @grant       none
// ==/UserScript==
console.log('AntiWerbung fuer Focus.de startet');

//oHomad.uif = null;
//delete oHomad.uif;



//$('#playerswffwid1_api').children("param[name='flashvars']").attr('value');

oHomad.url = "";
delete oHomad.adframework;
//oHomad.uif.preroll = "";
//oHomad.uif.url = "";
oHomad.enabled = false;

oHomad.homadclient.enabled = false;
oHomad.homadclient.config = "";
oHomad.homadclient.server = "";
oHomad.homadglobal = "";

delete oHomad.homadclient;
delete oHomad.homadglobal;
//delete oHomad;

//var wert = $('#playerswffwid1_api').children("param[name='flashvars']").attr('value').replace(/"plugins.+\}\},/i,'');
//$('#playerswffwid1_api').children("param[name='flashvars']").attr('value',wert);