// ==UserScript==
// @name        AntiAntiAdblock fuer Golem.de
// @namespace   GM
// @description Entfernt die Anti-Adblock-Meldung
// @noframes
// @include     http://*.golem.de/*
// @downloadURL https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiAntiAdblock_fuer_Golem.de.user.js
// @updateURL   https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiAntiAdblock_fuer_Golem.de.user.js
// @icon        https://raw.githubusercontent.com/dieterds/AntiWerbung/master/antiicon-48.png
// @version     1.0
// @grant       none
// ==/UserScript==
console.log('AntiAntiAdblock fuer Golem.de startet');
// var str26 = '<qvi pynff="qu1 urnq5">NQOYBPXRE REXNAAG</qvi> <c>Fvr irejraqra rvara Nqoybpxre, qnure xnaa qvr Frvgr avpug evpugvt qnetrfgryyg jreqra. Ovggr <n uers="uggc://jjj.tbyrz.qr/fbafgvtrf/nqoybpxre.ugzy" gnetrg="_oynax">qrnxgvivrera Fvr qra NqOybpxre s&hhzy;e qvrfr Frvgr</n>. Bqre ahgmra Fvr <n uers="uggcf://nppbhag.tbyrz.qr/ertvfgre?1337" gnetrg="_oynax">Tbyrz.qr nyf Nobaarag</n>. No 2,50 &rheb; ceb Zbang reunygra Fvr hafrer Vaunygr zvg &dhbg;Tbyrz che&dhbg; jreor- haq genpxvatserv haq zvg ivryra Mhfngmshaxgvbara jvr Ibyygrkg-EFF-Srrq bqre ShyyUQ-Ivqrbf.</c> <c>Qvr Erqnxgvba iba Tbyrz.qr fntg qnaxr!</c> </qvi>',
//     red26 = function (s) {
//         return s.replace(/[a-z]/gi, function (c) {
//             return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
//         });
//     },
//     elem,
//     div;
$(document).ready(function(){
    var elem = document.getElementsByTagName('article') [0];
    if (typeof elem !== 'undefined') {
        //elem.style.filter = '';
        //elem.style.webkitFilter = '';
        //elem.style.pointerEvents = 'none';
        //elem.style.position = 'absolute';
        //elem.style.top = '0px';
        //elem.style.visibility = hidden;
        elem.style = '';
    }
    //elem.parentNode.insertBefore(div, elem.nextSibling);
    //div.className = 'formatted';
    window._sp_.config.content_control_callback = function () {
    };
    if (document.getElementsByClassName('formatted').length == 2)
    {
        //document.getElementsByClassName('formatted') [1].style.visibility = "hidden";
        document.getElementsByClassName('formatted') [1].remove();
    }
});