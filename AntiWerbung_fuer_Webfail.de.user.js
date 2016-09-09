// ==UserScript==
// @name        AntiWerbung fuer Webfail
// @namespace   WEBFAIL
// @description Entfernt die Werbung, jedes mal dynamisch neu erzeugt wird.
// @include     http://de.webfail.*/*
// @downloadURL https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_Webfail.user.js
// @updateURL   https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_Webfail.user.js
// @icon        https://raw.githubusercontent.com/dieterds/AntiWerbung/master/antiicon-48.png
// @version     1.0
// @grant       none
// ==/UserScript==
console.log('AntiWerbung fuer Webfail startet');
window.uabBody = 1;
window.setTimeout(function ()
                  {
    for each(var UnwantedVar in 'uabInject uabBody uabDetect uabTrack uabpRnd uabPc uabpd1 uabpd2 uabpd3 uabpdl UABPdd'.split(' '))
    {
        window[UnwantedVar] = null;
        delete window[UnwantedVar];
        //console.log(UnwantedVar);
    }
}, 100);
/*$(document).ready(function ()
{
  console.log('AntiWerbung fuer Webfail startet');
  var timer = window.setInterval(function () {
    $('#subheader').next().hide();
    $('#aside').children()[3].remove()
    console.log('hidehidehide');
  }, 200)
  window.setTimeout(function () {
    clearInterval(timer);
  }, 1000);
});
*/
