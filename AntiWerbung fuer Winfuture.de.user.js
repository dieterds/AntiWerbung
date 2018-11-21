// ==UserScript==
// @name        AntiWerbung fuer Winfuture.de
// @namespace   WF
// @description Entfernt die Videowerbung, die vor jedem Video abgespielt wird.
// @include     http://winfuture.de/*
// @include     https://winfuture.de/*
/// @include     http://winfuture.de/news/ticker/
/// @include     http://winfuture.de/news,*.html
/// @include     http://winfuture.de/videos/*
// @downloadURL https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_Winfuture.de.user.js
// @updateURL   https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_Winfuture.de.user.js
// @icon        https://raw.githubusercontent.com/dieterds/AntiWerbung/master/antiicon-48.png
// @version     1.1
// @grant       unsafeWindow
// ==/UserScript==
console.log('AntiWerbung fuer Winfuture.de startet');
//$("div.gcap-shown").hide();

//$('script:contains("wfv4_flowplayer_init")').ready(function(){
// $(document).ready(function(){
//     //wfv4_flowplayer_init( 19290, 'http%3A%2F%2Fvideos.winfuture.de%2F19290.mp4', true, false, 'http://winfuture.de/videos/Spiele/Overcooked-2-Das-Kuechen-Chaos-geht-in-die-naechste-Runde-19290.html', 372, 660, 660, false, false, '', false, '<a style="font-family:Verdana;font-size:14px;color:#666;display:inline-block;margin-bottom:4px;font-weight:bold;text-decoration:none;" href="http://winfuture.de/videos/Spiele/Overcooked-2-Das-Kuechen-Chaos-geht-in-die-naechste-Runde-19290.html">Overcooked 2 - Das K&uuml;chen-Chaos geht in die n&auml;chste Runde</a><br/><sc'+'ript type="text/javasc'+'ript" id="video_embed_19290" src="https://j.wfcdn.de/j/video_embed.js.php?id=19290&width=auto&autostart=false"></sc'+'ript><br/>', false, 'http://videos.winfuture.de/19290.jpg', false, false, false, '', false );
//     unsafeWindow.wfv4_flowplayer_init( 19290, 'http%3A%2F%2Fvideos.winfuture.de%2F19290.mp4', false, false, 'http://winfuture.de/videos/Spiele/Overcooked-2-Das-Kuechen-Chaos-geht-in-die-naechste-Runde-19290.html', 546, 970, 970, false, false, null, false, '<a style="font-family:Verdana;font-size:14px;color:#666;display:inline-block;margin-bottom:4px;font-weight:bold;text-decoration:none;" href="http://winfuture.de/videos/Spiele/Overcooked-2-Das-Kuechen-Chaos-geht-in-die-naechste-Runde-19290.html">Overcooked 2 - Das K&uuml;chen-Chaos geht in die n&auml;chste Runde</a><br/><sc'+'ript type="text/javasc'+'ript" id="video_embed_19290" src="https://j.wfcdn.de/j/video_embed.js.php?id=19290&width=auto&autostart=false"></sc'+'ript><br/>', false, 'http://videos.winfuture.de/19290.jpg', false, false, false, null, false );
//     console.log('hguppi');
// });

unsafeWindow.wfv4_disable_cookie_notice = 1;

// Easy Way
unsafeWindow.wfv4_token_cookie_name = function(){console.log('wfv4_token_cookie_name');};
// return;

// Hacker Way
$(document).ready(function(){
    var scripti = $('script:contains("wfv4_flowplayer_init")').html();
    console.log(scripti);
    if (scripti)
    {
        //         scripti = scripti.replace(/'https:\/\/rdir\.winfuture\.de\/video\/.+?vast\/.+?'/ig, null);
        scripti = scripti.replace(/'https:\/\/rdir\.winfuture\.de\/video\/.+?vast\/.+?'/ig, 0);
        console.log(scripti);
        //$('script:contains("wfv4_flowplayer_init")').html(scripti);
        eval(scripti);
    }
});

// var allElements,
//     thisElement;
// var videoIDArray = [
// ];
// var videoID;
// allElements = document.getElementsByTagName('*');
// for (var i = 0; i < allElements.length; i++) {
//     thisElement = allElements[i];
//     if (thisElement.id.match(/player(\d+)/)) {
//         videoID = RegExp.$1;
//         if (videoIDArray.indexOf(videoID) == - 1) {
//             console.log('Video id is: ' + videoID);
//             videoIDArray[videoIDArray.length] = videoID;
//         }
//     }

// }
// if (allElements.length === 0) {
//     console.log('No Elements found!');
// }
// for (var index = 0; index < videoIDArray.length; index++) {
//     videoID = videoIDArray[index];
//     if (videoID) {
//         console.log('Bearbeite ' + videoID);
//         if ($('player' + videoID))
//         {
//             var tester = $('player' + videoID).getConfig();
//             if (tester)
//             {
//                 console.log(tester);
//                 console.log(tester.plugins.uif);
//                 delete tester.plugins.uif;
//                 console.log(tester.plugins.uif);
//                 /*tester.plugins.uif.url = '';
// tester.plugins.uif.homadclient = '';
// tester.plugins.uif.homadglobal = '';
// tester.plugins.uif.preroll = '';
// tester.plugins.uif = null;*/
//             }
//         }
//     }
// }