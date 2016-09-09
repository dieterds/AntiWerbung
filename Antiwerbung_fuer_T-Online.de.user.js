// ==UserScript==
// @name         Antiwerbung fuer T-Online.de
// @namespace    TODE
// @version      1.0
// @description  Entfernt die Werbung auf T-Online.de
// @require     http://code.jquery.com/jquery-1.11.2.min.js
// @author       dieterds
// @exclude      http://www.t-online.de/tv
// @include      http://www.t-online.de/*
// @icon        https://raw.githubusercontent.com/dieterds/AntiWerbung/master/antiicon-48.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('.Tadblock').remove();
    // Your code here...
})();