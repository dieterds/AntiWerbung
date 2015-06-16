// ==UserScript==
// @name        AntiRedirector
// @namespace   MA
// @description Entfernt Redirector bei shortnews.de
// @include     http://www.shortnews.de/id/*
// @downloadURL http://pastebin.com/raw.php?i=3rha4Byq
// @updateURL   http://pastebin.com/raw.php?i=3rha4Byq
// @version     1.1
// @grant       none
// ==/UserScript==#
console.log('AntiRedirector startet');
var strLocation = window.location.href;
//shortnews();
// mit Timeout, da das SN Script bei manchen links erst im Nachhinein den Redir einbaut.
window.setTimeout(shortnews, 500);
function shortnews()
{
  if (strLocation.match(/www.shortnews.de\/id\//))
  {
    each(document.getElementsByTagName('a'), function (a)
    {
      //console.log('linqq gefunden: ' + a.href);
      if (a.href.match(/.+?link=(.+)/))
      {
        var newlink = unescape(RegExp.$1);
        console.log(newlink);
        a.href = newlink;
      }
    });
  }
}
function each(ar, cb)
{
  for (var i = 0; i < ar.length; i++)
  {
    cb(ar[i]);
  }
}