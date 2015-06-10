// ==UserScript==
// @name        TucanHelper
// @namespace   io.weller.greasemonkey.tucanhelper
// @include     https://www.tucan.tu-darmstadt.de/scripts/mgrqcgi*
// @version     1
// @grant       none
// ==/UserScript==

var css='\
#pageTopNavi ul.nav li.tree ul.nav {left:inherit!important}\
#pageTopNavi ul.nav li li ul {height:auto!important;display:block!important;} \
#pageTopNavi ul.nav li.depth_1 {display:inline-block!important} \
#pageTopNavi ul.nav li.depth_1 a.depth_1 {padding-bottom:3px} \
#pageTopNavi ul.nav li.depth_1:hover ul.nav.depth_2 {display:block!important} \
#pageTopNavi ul.nav li.depth_1 ul.nav.depth_2 {display:none!important;top:inherit;left:inherit!important;margin-top:15px;} \
';

var style=document.createElement("style");
style.textContent=css;
document.body.appendChild(style);

$(function() {
  $(".tb tr.tbdata").each(function() {
    var $link = $(this).find("a[name=roomAppointmentsLink]");
    var roomNr = $link.attr("href").match(/\d+$/);
    var $nextrow = $(this).next().find("td");
    $nextrow.append(" RaumNr: "+roomNr);
    $nextrow.append(" <a href='/scripts/mgrqcgi?APPNAME=CampusNet&PRGNAME=SCHEDULER&ARGUMENTS=-N000000000000001,-N000385,-A05.10.2015,-A,-N1,-N"+roomNr+"'>Termine Ophase</a>");
    $nextrow.find("a").click(function() {
      open(this.href, "termine","width=800,height=600,scrollbars=yes");
      return false;
    });
  })
  
})

