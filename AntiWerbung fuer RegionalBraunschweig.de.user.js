// ==UserScript==
// @name         AntiWerbung fuer RegionalBraunschweig.de
// @namespace    RegionalBraunschweig
// @version      1.0
// @require      http://code.jquery.com/jquery-1.11.2.min.js
// @description  Entfernt die Anzeigen von RegionalBraunschweig.de
// @author       You
// @match        http://regionalbraunschweig.de/*
// @grant        none
// ==/UserScript==
console.log('AntiWerbung fuer RegionalBraunschweig.de startet');
$('#anzeigebox').parent().hide();
$('.anzeige').parent().parent().parent().remove();
