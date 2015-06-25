// ==UserScript==
// @name        AntiWerbung fuer Golem.de
// @namespace   GM
// @description Entfernt die Videowerbung, die vor jedem Video abgespielt wird.
// @noframes
// @include     http://*.golem.de/*
// @downloadURL https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_Golem.de.user.js
// @updateURL   https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_Golem.de.user.js
// @icon        https://raw.githubusercontent.com/dieterds/AntiWerbung/master/antiicon-48.png
// @version     1.4
// @grant       none
// ==/UserScript==
console.log('AntiWerbung fuer Golem.de startet');
//var NewPlayer = injectClone(NVBPlayer13719video);
//NewPlayer
//<embed id="NVBPlayer13719video" width="620" height="349" flashvars="id=13719&qual=medium&autoPl=false&buffer=3&image_src=http://video.golem.de/teaser/1/1/13719/medium-480-03_ingressundgoogleglass-snap.jpg&homadglobal=http://homad-global-configs.schneevonmorgen.com/global_config.json&homadclient=http://video.golem.de/nvplayer/homadclient.json&onstart=onVidEvt,13719,vplay&oncomplete=onVidEvt,13719,vcomplete" allowscriptaccess="always" scale="noScale" allowfullscreen="true" quality="high" bgcolor="#000000" name="NVBPlayer13719video" src="http://video.golem.de/nvplayer/NonverBlaster_04-art.swf" type="application/x-shockwave-flash">
//var asel = document.getElementById('NVBPlayer13719video');
//console.log(asel);
//gvp13719.variables.homadclient = 'http://www..de/b/homadclient.json';
//gvp13719.variables.homadglobal = 'http://www..de/b/global_config.json';
//var ArticleID = Golem.CurrentArticle.GetID
window.setTimeout(function () {
  $('[id^=gvideo_]').each(function (i, v) {
    var ele = $(v);
    var figgu = ele.html();
    figgu = figgu.replace('abo=0', 'abo=1');
    figgu = figgu.replace('homadglobal=http://homad-global-configs.schneevonmorgen.com/global_config.json&', '');
    figgu = figgu.replace('homadclient=http://video.golem.de/nvplayer/homadclient.json&', '');
    ele.html(figgu);
  });
  /*var ele = $('#gvideo_14939');
  var figgu = ele.html();
  figgu = figgu.replace('abo=0', 'abo=1');
  figgu = figgu.replace('homadglobal=http://homad-global-configs.schneevonmorgen.com/global_config.json&', '');
  figgu = figgu.replace('homadclient=http://video.golem.de/nvplayer/homadclient.json&', '');
  ele.html(figgu);*/
}, 300);
//var geeeki = document.getElementById('gvideo_14939');
//var texi = geeeki.innerHTML;
//texi = texi.replace('abo=0','abo=113');
//geeeki.innerHTML = texi;
var allElements,
  thisElement;
var videoIDArray = [
];
var videoID;
window.setTimeout(function () {
  allElements = document.getElementsByTagName('*');
  for (var i = 0; i < allElements.length; i++) {
    thisElement = allElements[i];
    //if (thisElement.id.match(/NVBPlayer(\d+)video/))
    if (thisElement.id.match(/NVBPlayer(\d+)/))
    //if (thisElement.id.match(/gvideo_(\d+)/))
    {
      videoID = RegExp.$1;
      if (videoIDArray.indexOf(videoID) == - 1) {
        console.log('Video id is: ' + videoID);
        videoIDArray[videoIDArray.length] = videoID;
        //break;
      }
    }
    // irgendetwas mit diesem Element tun
  }

  if (videoIDArray.length == 0) {
    console.log('No Elements found!');
  }
  for (var index = 0; index < videoIDArray.length; index++) {
    videoID = videoIDArray[index];
    if (videoID) {
      console.log('Bearbeite ' + videoID);
      console.log('Video wurde ersetzt mit NVBPlayer' + videoID);
      //var viddi = document.getElementById('NVBPlayer' + videoID);
      var viddi = swfobject.getObjectById('NVBPlayer' + videoID);
      if (viddi != null)
        viddi.data = 'http://video.golem.de/nvplayer/NonverBlaster-lgc.swf';
    }
  }
},
  600);
/*allElements = document.getElementsByTagName('*');
for (var i = 0; i < allElements.length; i++) {
  thisElement = allElements[i];
  //if (thisElement.id.match(/NVBPlayer(\d+)video/))
  if (thisElement.id.match(/NVBPlayer(\d+)/))
  //if (thisElement.id.match(/gvideo_(\d+)/))
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
if (videoIDArray.length == 0)
{
  console.log('No Elements found!');
}
for (index = 0; index < videoIDArray.length; index++)
{
  videoID = videoIDArray[index];
  if (videoID)
  {
    console.log('Bearbeite ' + videoID);
    //var asel = document.getElementById('NVBPlayer13719video');
    //var asel = document.getElementById('NVBPlayer' + videoID + 'video');
    //var asel = document.getElementById('NVBPlayer' + videoID);
    // Flashvars ist null, wenn z.B. auf video.golem.de nen video aufgerufen wurde
    //if (asel == null)
    //{
    //console.log('flashvars ist null, sind also auf video.golem.de');
    //window.setTimeout(function ()
    //{
      console.log('Video wurde ersetzt mit NVBPlayer' + videoID);
      //var viddi = document.getElementById('NVBPlayer' + videoID);
      var viddi = swfobject.getObjectById('NVBPlayer' + videoID);
      viddi.data = 'http://video.golem.de/nvplayer/NonverBlaster-lgc.swf';
    //}, 100);
    //} */
/*else
    {
      var asel2 = asel.cloneNode(true);
      //asel.parentNode.removeChild(asel);
      //console.log(asel.getAttribute('flashvars'));
      //assel.data = "/nvplayer/NonverBlaster-lgc.swf";
      var flashvars = asel2.getAttribute('flashvars');
      //console.log(flashvars);
      flashvars = flashvars.replace('homadglobal=http://homad-global-configs.schneevonmorgen.com/global_config.json&homadclient=http://video.golem.de/nvplayer/homadclient.json&', '');
      //flashvars = flashvars.replace('autoPl=false&','autoPl=true&');
      //flashvars = flashvars.replace('&onstart=onVidEvt,13719,vplay&oncomplete=onVidEvt,13719,vcomplete','');
      //console.log(flashvars);
      asel2.setAttribute('flashvars', flashvars);
      asel.parentNode.replaceChild(asel2, asel);
      console.log('Flashvars replaced in ' + 'NVBPlayer' + videoID + 'video');
      //theImage.parentNode.replaceChild(altText, theImage);
      //gvp13719
      //console.log(asel);
      //var gvp = gvp13719.cloneNode(true);
      //window['gvp' + videoID].variables.homadclient = 'http://www..de/b/homadclient.json';
      //window['gvp' + videoID].variables.homadglobal = 'http://www..de/b/global_config.json';
      //console.log('homad vars replaced in gvp' + videoID);
      //gvp13719.variables.homadclient = 'http://www..de/b/homadclient.json';
      //gvp13719.variables.homadglobal = 'http://www..de/b/global_config.json';
    }*/
//}
//}
// var gvp14939 = new SwfVideo("http://video.golem.de/nvplayer/NonverBlaster_06-art.swf","NVBPlayer14939video","620","349","9","#000000");
// gvp14939.addVariables({
//  id: "14939", image_src: "http://video.golem.de/teaser/1/1/14939/medium-480-robotis.jpg", title: "Johnny 05 von Robotis tanzt Gangnam-Style (Cebit 2015)", playtime: "85.193", autoPl: "false"        });
//      gvp14939.write("NVBPlayer14939");
