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
#pageTopNavi ul.nav li.depth_1:hover ul.nav.depth_2 {display:block!important} \
#pageTopNavi ul.nav li.depth_1 ul.nav.depth_2 {display:none!important;top:inherit;left:inherit!important;margin-top:15px;} \
';

var style=document.createElement("style");
style.textContent=css;
document.body.appendChild(style);


