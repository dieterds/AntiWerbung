// ==UserScript==
// @name        AntiSponsoredLinks fuer Amazon.de
// @namespace   amazon.de
// @description Entfernt die Sponsored-Links aus den Suchergebnissen von Amazon.de.
// @include     http://www.amazon.de/s/*
// @include     https://www.amazon.de/s/*
// @include     https://www.amazon.de/gp/search*
// @require     http://code.jquery.com/jquery-1.11.2.min.js
// @downloadURL https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiSponsoredLinks_fuer_Amazon.de.user.js
// @updateURL   https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiSponsoredLinks_fuer_Amazon.de.user.js
// @icon        https://raw.githubusercontent.com/dieterds/AntiWerbung/master/antiicon-48.png
// @version     1.0
// @grant       none
// ==/UserScript==
console.log('AntiSponsoredLinks fuer Amazon.de startet');

$("h5:contains('Gesponsert')").parentsUntil("li").hide();

window.setInterval(function () {


    if ($("h5:contains('Gesponsert')").parentsUntil("li").length)
    {
        //console.log('Removed!');
        $("h5:contains('Gesponsert')").parentsUntil("li").remove();
    }
    else
    {
        //console.log('Timer disabled!');
        clearInterval(this);
    }

    //   if ($('li.s-result-item div div div div h5.s-sponsored-list-header').parentsUntil('#s-results-list-atf').length)
    // {
    //   //console.log('Removed!');
    //   $('li.s-result-item div div div div h5.s-sponsored-list-header').parentsUntil('#s-results-list-atf').remove();
    // }
    // else
    // {
    //   //console.log('Timer disabled!');
    //   clearInterval(this);
    // }
}, 500);
