// ==UserScript==
// @name         AntiWerbung fuer RegionalBraunschweig.de
// @namespace    RegionalBraunschweig
// @version      1.0
// @require      https://code.jquery.com/jquery-3.3.1.js
// @description  Entfernt die Anzeigen von RegionalBraunschweig.de
// @author       You
// @match        http://regionalbraunschweig.de/*
// @icon        https://raw.githubusercontent.com/dieterds/AntiWerbung/master/antiicon-48.png
// @grant        none
// ==/UserScript==
console.log('AntiWerbung fuer RegionalBraunschweig.de startet');
$('#anzeigebox').parent().hide();
$('.anzeige').parent().parent().parent().remove();

$('.anzeige-title').parent().parent().parent().parent().remove();
