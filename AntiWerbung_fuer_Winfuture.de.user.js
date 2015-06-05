﻿// ==UserScript==
// @name        AntiWerbung fuer Winfuture.de
// @namespace   WF
// @description Entfernt die Videowerbung, die vor jedem Video abgespielt wird.
// @include     http://winfuture.de/news,*.html
// @include     http://winfuture.de/videos/*
// @downloadURL https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_Winfuture.de.user.js
// @updateURL   https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_Winfuture.de.user.js
// @version     1.1
// @grant       none
// ==/UserScript==
console.log('AntiWerbung fuer Winfuture.de startet');
/*function injectClone(vaccine) {
  var injected;
  if (typeof cloneInto !== 'function') {
    injected = vaccine;
  } else {
    injected = cloneInto(vaccine, unsafeWindow);
  }
  return injected;
}*/
var allElements,
thisElement;
var videoIDArray = [
];
var videoID;
allElements = document.getElementsByTagName('*');
for (var i = 0; i < allElements.length; i++) {
  thisElement = allElements[i];
  if (thisElement.id.match(/player(\d+)/))
  {
    asel = thisElement;
    videoID = RegExp.$1;
    if (videoIDArray.indexOf(videoID) == - 1)
    {
      console.log('Video id is: ' + videoID);
      videoIDArray[videoIDArray.length] = videoID;
      //break;
    }
  }
  // irgendetwas mit diesem Element tun

}
if (allElements.length == 0)
{
  console.log('No Elements found!');
}
for (index = 0; index < videoIDArray.length; index++)
{
  videoID = videoIDArray[index];
  if (videoID)
  {
    console.log('Bearbeite ' + videoID);
    var tester = $f('player' + videoID).getConfig();
    console.log(tester);
    console.log(tester.plugins.uif);
    delete tester.plugins.uif;
    console.log(tester.plugins.uif);
    /*tester.plugins.uif.url = '';
tester.plugins.uif.homadclient = '';
tester.plugins.uif.homadglobal = '';
tester.plugins.uif.preroll = '';
tester.plugins.uif = null;*/
  }
}