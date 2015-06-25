// ==UserScript==
// @name        AntiSponsoredLinks fuer Amazon.de
// @description Entfernt die Sponsored-Links aus den Suchergebnissen von Amazon.de.
// @namespace   amazon.de
// @include     http://www.amazon.de/s/*
// @require     http://code.jquery.com/jquery-1.11.2.min.js
// @version     1.0
// @grant       none
// ==/UserScript==

$('li.s-result-item div div div div h5.s-sponsored-list-header').parentsUntil('#s-results-list-atf').remove();