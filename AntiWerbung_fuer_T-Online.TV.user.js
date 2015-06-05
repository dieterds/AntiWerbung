// ==UserScript==
// @name        AntiWerbung fuer T-Online.TV
// @namespace   TOTV
// @description Entfernt die Videowerbung, die vor jedem Video abgespielt wird.
// @include     http://www.t-online.de/tv/*
// @downloadURL https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_T-Online.TV.user.js
// @updateURL   https://raw.githubusercontent.com/dieterds/AntiWerbung/master/AntiWerbung_fuer_T-Online.TV.user.js
// @version     1.5
// @grant       none
// ==/UserScript==
console.log('AntiWerbung fuer T-OnlineTV startet');
/*function injectClone(vaccine) {
  var injected;
  if (typeof cloneInto !== 'function') {
    injected = vaccine;
  } else {
    injected = cloneInto(vaccine, unsafeWindow);
  }
  return injected;
}*/
//video.T$video_wrapper.removeClass('vast') .addClass('ready') .removeClass('loading');
//this.plugins.vast.all_ads_completed
//var headedit_backup = window.document.head.contentEditable;
//var bodyedit_backup = window.document.body.contentEditable;
//var designmode_backup = window.document.designMode;
//window.document.head.contentEditable = 'true';
//window.document.body.contentEditable = 'true';
//window.document.designMode='on';
//window.im_VideoAd = null;
//window.isAdblocked = 0;
//window.isVidAdblocked = 0;
//video.ad_enabled = false;
//video.tracking_enabled = false;
//video.flash_params.homadEnabled = 0;
//video.plugins_count = 0;
//video.plugins = null;
//video.plugins_count = 0;
//video.seeking = true;
// ---> config_path überporüfen
//video.debug = true;
var config = video.config;
//video.config = null;
//config.adEnabled = false;
config.adData = null;
config.homad = 0;
//config.homadClientConfig = '';http://www..de/b/to_userconfig.json';
//config.homadGlobalConfig = '';//http://www..de/b/to_globa.json';
//config.deactivate_countdown = true;
//config.autoStart = false;
//config.adData = '';  
//video.first_start = false;
video.parseConfig(config);
/*var kopie = player.cloneNode(true); 
player.parentNode.insertBefore(kopie, player);
player.parentNode.removeChild(player);*/
console.log('replaced!');
//player.parentNode.replaceChild(kopie, player);
//delete VideoVast;
//window.VideoVast = null;
//im_companionad_call = function () {};
/*if (window.video)
{
  var kopie = player.cloneNode(true); 
player.parentNode.insertBefore(kopie, player);
//player.parentNode.removeChild(player);
//player.parentNode.replaceChild(kopie, player);
console.log('player ersetzt mit neuem videoobjekt');

  var config = video.config;
  config.adEnabled = false;
  //config.homadClientConfig = '';//'http://www..de/b/homadclient.json';
  //config.homadGlobalConfig = '';//http://www..de/b/global_config.json';
  config.deactivate_countdown = true;
  //config.autoStart = false;
  //config.adData = '';  
video.first_start = false;
  video.parseConfig(config);
  console.log('Werbung auf T-Online Video deaktiviert!');
}*/
//console.log('Werbung ausgeschaltet bei Tonline Video');
//console.log('im_companionad_call = ' + im_companionad_call);
/*delete video;
video = new VideoProxy(
  {
     player_id: 'player',
     //config_path: '', 
    config_path: 'http://www.t-online.de/tv/sport/fussball/id_70601216/tid_totv_json_video/vid_70601210/fans-nach-diesem-abschlag-voellig-aus-dem-haeuschen.html',
     player_swf_path: 'http://www.t-online.de/tv/player/player.swf',
     player_height: 375,
     player_width: 610,
     debug:true     
   });
*/
//var config = '{"cat":"standard","playlistData":[{"title":"Related Videos","url":"http://www.t-online.de/tv/sport/fussball/id_70601216/tid_json_playlist/vid_70601210/sp_rel/fans-nach-diesem-abschlag-voellig-aus-dem-haeuschen.html"}],"autoStart":true,"haaaaomadClientConfig":"http://www.t-online.de/tv/sport/fussball/id_70601216/tid_totv_json_homad-client/fans-nach-diesem-abschlag-voellig-aus-dem-haeuschen.html","geoblockEnabled":false,"adEnabled":false,"id":4401327,"assets":[{"source":null,"source2":"http://dlc2.t-online.de/s/2014/08/12/s20140812_4401278.mp4","type":"progressive","profile":"standard"}],"title":"Unglaublich!","adData":{"vastOver":"http://im.banner.t-online.de/?advideo/3.0/784.1/5062372/0//cc=2;key=standard+fussball;vidAS=overlay;vidRT=VAST;vidRTV=2.0.1;vidREG=companion_bottom:728x90:adiframe,companion_top:468x60:adiframe","html5vastPost":"http://im.banner.t-online.de/?advideo/3.0/784.1/5158702/0//cc=2;key=standard+fussball+html5;vidAS=post_roll;vidVT=video-mp4;vidRT=VAST;vidRTV=2.0.1;vidREG=companion_bottom:728x90:adiframe,companion_top:468x60:adiframe;cors=yes","vastPre":"http://im.banner.t-online.de/?advideo/3.0/784.1/5062373/0//cc=2;key=standard+fussball;vidAS=pre_roll;vidRT=VAST;vidRTV=2.0.1;vidREG=companion_bottom:728x90:adiframe,companion_top:468x60:adiframe","ewPre":"","vastPostPresenter":"http://im.banner.t-online.de/?advideo/3.0/784.1/5062371/0//cc=2;vidAS=post_roll;vidRT=VAST;vidRTV=2.0.1;key=standard+fussball;vidREG=companion_bottom:728x90:adiframe,companion_top:468x60:adiframe","ewPost":"","html5vastPre":"http://im.banner.t-online.de/?advideo/3.0/784.1/5158706/0//cc=2;key=standard+fussball+html5;vidAS=pre_roll;vidVT=video-mp4;vidRT=VAST;vidRTV=2.0.1;vidREG=companion_bottom:728x90:adiframe,companion_top:468x60:adiframe;cors=yes","vastPrePresenter":"http://im.banner.t-online.de/?advideo/3.0/784.1/5062370/0//cc=2;vidAS=pre_roll;vidRT=VAST;vidRTV=2.0.1;key=standard+fussball;vidREG=companion_bottom:728x90:adiframe,companion_top:468x60:adiframe","ewOver":"","vastPost":"http://im.banner.t-online.de/?advideo/3.0/784.1/5062374/0//cc=2;key=standard+fussball;vidAS=post_roll;vidRT=VAST;vidRTV=2.0.1;vidREG=companion_bottom:728x90:adiframe,companion_top:468x60:adiframe"},"trackingData":{"topic":"Fussball","ivwUrl":"","levelOne":463005,"scoresUrl":"","levelTwo":95,"partner":"bitprojects"},"description":"Der Keeper drischt den Ball �as ganze Spielfeld direkt ins gegnerische Tor. ","homadGlobalConfig":"http://homad-global-configs.schneevonmorgen.com/global_config.json","subtitle":"Fans nach diesem Abschlag v�g aus dem H㴳chen","images":[{"source":"http://www.t-online.de/b/70/60/12/26/id_70601226/tid_da/diesem-keeper-gelingt-ein-unglaubliches-tor-screenhot-bit-projects-.jpg","profile":"preview"}],"skinData":{"time_text":{"alpha":"1","normal":"#FFFFFF"},"player_background":{"alpha":"1","normal":"#000000"},"fullscreen":{"hover_background":"#252525","alpha":"1","normal":"#FFFFFF","hover":"#095EB3","normal_background":"#252525"},"info_overlay_title":{"normal":"#7B7B7B"},"info_overlay_background":{"alpha":"1","normal_background":"#F6F6F6"},"stop_button":{"hover_background":"#252525","alpha":"1","normal":"#FFFFFF","hover":"#095EB3","normal_background":"#252525"},"timeline":{"timeline_dragger":"#095EB3","timeline_loaded":"#FFFFFF","alpha":"1","timeline_passed":"#095EB3","timeline_background":"#095EB3"},"play_button":{"hover_background":"#252525","alpha":"1","normal":"#FFFFFF","hover":"#095EB3","normal_background":"#252525"},"info_overlay_subtitle":{"normal":"#7B7B7B"},"volume_button":{"hover_background":"#252525","alpha":"1","normal":"#095EB3","hover":"#095EB3","volume_background":"#FFFFFF","normal_background":"#252525"},"controls_background":{"alpha":"1","normal":"#252525"},"separator":{"alpha":"1","normal":"#7B7B7B"},"info_overlay_description":{"normal":"#7B7B7B"}},"geoblockService":"http://wiga.t-online.de/videoplayer/GEOIP.php"}';
//video.parseConfig(config);
//var kopie = player.cloneNode(true); 
//player.parentNode.insertBefore(kopie, player);
//player.parentNode.removeChild(player);
//player.parentNode.replaceChild(kopie, player);
//console.log('player ersetzt mit neuem videoobjekt');
//var timer = setTimer(100);
//var ele = null;
//while (ele == null)
//{
//sleep(100);
// hier wurde zum test aufkommentiert
/*ele = document.getElementById('player_flash');    
//}
//console.log(unescape(ele.innerHTML));
var html = ele.innerHTML;
html = html.replace('param value="1" name="homadEnabled"','param value="0" name="homadEnabled"');
html = html.replace('homadClientConfig', 'moddahClientConfig');
html = html.replace('homadGlobalConfig', 'moddahGlobalConfig');
ele.innerHTML = html;
console.log('html replaced');*/
// hier wurde zum test aufkommentiert
//console.log(html);
//video.flash_params.homadEnabled = 0;
//console.log('homad entfernt!');
//var kopie = player.cloneNode(true);
//console.log(kopie.attributes);
//var blayer = document.getElementById('player_flash');
//var video = injectClone(video);
//console.log(video);
//delete video;
/*if (kopie33)
{
  kopie.ad_enabled = false;
  kopie.geoblock_enabled = false;
  kopie.tracking_enabled = false;
  kopie.autoplay = false;
  kopie.flash_params.homadEnabled = false;
  kopie.config.adEnabled = false;
  kopie.config.autoStart = false;
  kopie.config.geoblockEnabled = false;
  kopie.config.homadClientConfig = 'http://www..de/b/homadclient.json';
  kopie.config.homadGlobalConfig = 'http://www..de/b/global_config.json';
  //kopie.config.homadClientConfig = '';
  //kopie.config.homadGlobalConfig = '';
  kopie.plugins.tracker = null;
  //video.plugins.endscreen = null;
  kopie.plugins.errorscreen = null;
  //video = null;
  //video = video2;
  //homadClientConfig = "http://www.t-online.de/tv/stars/vip-spotlight/id_70529212/tid_totv_json_homad-client/striptease-tallulah-willis-entblaettert-sich-waehrend-interview.html"
  //homadGlobalConfig = "http://homad-global-configs.schneevonmorgen.com/global_config.json"    
  console.log('homad disabled');
  //window['video'].variables.homadclient = 'http://www..de/b/homadclient.json';
  //window['gvp' + videoID].variables.homadglobal = 'http://www..de/b/global_config.json';
  //console.log('homad vars replaced in gvp' + videoID);            
  player.parentNode.replaceChild(kopie, player);
}*/
//var asel = document.getElementById('NVBPlayer13719video');
/*var asel = document.getElementById('player_flash');
var asel2 = asel.cloneNode(true);
//asel.parentNode.removeChild(asel);
//console.log(asel.getAttribute('flashvars'));
var flashvars = asel2.getAttribute('flashvars');
console.log(flashvars);
flashvars = flashvars.replace(/"homadClientConfig":.+?,/, '');
//"homadClientConfig":"http://www.t-online.de/tv/stars/vip-spotlight/id_70529212/tid_totv_json_homad-client/striptease-tallulah-willis-entblaetter...2,
//flashvars = flashvars.replace('autoPl=false&','autoPl=true&');
//flashvars = flashvars.replace('&onstart=onVidEvt,13719,vplay&oncomplete=onVidEvt,13719,vcomplete','');
console.log(flashvars);
asel2.setAttribute('flashvars', flashvars);
asel.parentNode.replaceChild(asel2, asel);
console.log('Flashvars replaced in player_flash');
*/
//window.document.head.contentEditable = headedit_backup;
//window.document.body.contentEditable = bodyedit_backup;
//window.document.designMode= designmode_backup;