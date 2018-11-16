// ==UserScript==
// @name        UAB Werbe Block
// @name        AntiWerbung fuer Braunschweiger-Zeitung
// @namespace   UAB
// @description Entfernt die Werbung, jedes mal dynamisch neu erzeugt wird.
// @include     https://www.braunschweiger-zeitung.de/*
// @include     https://www.news38.de/*
// @include     https://www.wolfsburger-nachrichten.de/*
// @include     http://de.webfail.*/*
// @include     https://*.golem.de/*
// @version     1.0
// @grant       none
// ==/UserScript==
console.log('AntiWerbung fuer UAB startet');
// window.uabBody = 1;
// window.FuckAdBlock = function(){console.log('fuckad');};

Object.getOwnPropertyNames(window).forEach(function(UnwantedVar, idx, array) {
        if (UnwantedVar.startsWith('uab')) {
            console.log(UnwantedVar + ' deleted');
            window[UnwantedVar] = null;
            delete window[UnwantedVar];
        }
    });

// window.setTimeout(function ()
//                   {


//     for(var UnwantedVar in 'uabInject uabBody uabDetect uabTrack uabpRnd uabPc uabpd1 uabpd2 uabpd3 uabpdl UABPdd'.split(' '))
//     {
//         window[UnwantedVar] = null;
//         delete window[UnwantedVar];
//         //console.log(UnwantedVar);
//     }

//     //     for(var UnwantedVar in 'uabInject uabBody uabDetect uabTrack uabpRnd uabPc uabpd1 uabpd2 uabpd3 uabpdl UABPdd'.split(' '))
//     //     {
//     //         window.
//     //         window[UnwantedVar] = null;
//     //         delete window[UnwantedVar];
//     //         //console.log(UnwantedVar);
//     //     }

// }, 100);

