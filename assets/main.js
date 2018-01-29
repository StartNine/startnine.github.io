function openNewTab(n){var o=window.open(n,"_blank");o.focus()}
function openNewLink(n){var o=window.open(n,"_self");o.focus()}

window.onload = function() {document.getElementById("defaultTab").click()};
// w3 Taberino
/*function openTab(evt, tabName) {
	var i;
	var x = document.getElementsByClassName("tabContent");
	for (i = 0; i < x.length; i++) {
	    x[i].style.display = "none"; 
	}
	document.getElementById(tabName).style.display = "block"; 3
	evt.currentTarget.className += " active";
}*/

/* W3 implmentation of repsonsive navbar */
function menuBarNav() {
    var x = document.getElementById("menuBar");
    if (x.className === "menuBar") {
        x.className += " responsive";
    } else {
        x.className = "menuBar";
    }
}

function burgerButton(x) {
    x.classList.toggle("change");
}

/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssgrid_cssgridlegacy-setclasses !*/
!function(e,n,t){function r(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?_.className.baseVal=n:_.className=n)}function o(e,n){return typeof e===n}function s(){var e,n,t,r,s,i,l;for(var a in w)if(w.hasOwnProperty(a)){if(e=[],n=w[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],l=i.split("."),1===l.length?Modernizr[l[0]]=r:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=r),C.push((r?"":"no-")+l.join("-"))}}function i(e,n){return!!~(""+e).indexOf(n)}function l(e,n){return function(){return e.apply(n,arguments)}}function a(e,n,t){var r;for(var s in e)if(e[s]in n)return t===!1?e[s]:(r=n[e[s]],o(r,"function")?l(r,t||n):r);return!1}function u(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function p(){var e=n.body;return e||(e=u(x?"svg":"body"),e.fake=!0),e}function m(e,t,r,o){var s,i,l,a,f="modernizr",c=u("div"),d=p();if(parseInt(r,10))for(;r--;)l=u("div"),l.id=o?o[r]:f+(r+1),c.appendChild(l);return s=u("style"),s.type="text/css",s.id="s"+f,(d.fake?d:c).appendChild(s),d.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),c.id=f,d.fake&&(d.style.background="",d.style.overflow="hidden",a=_.style.overflow,_.style.overflow="hidden",_.appendChild(d)),i=t(c,e),d.fake?(d.parentNode.removeChild(d),_.style.overflow=a,_.offsetHeight):c.parentNode.removeChild(c),!!i}function g(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(c(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+c(n[o])+":"+r+")");return s=s.join(" or "),m("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return t}function y(e,n,r,s){function l(){c&&(delete N.style,delete N.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var a=g(e,r);if(!o(a,"undefined"))return a}for(var c,d,p,m,y,v=["modernizr","tspan","samp"];!N.style&&v.length;)c=!0,N.modElem=u(v.shift()),N.style=N.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],y=N.style[m],i(m,"-")&&(m=f(m)),N.style[m]!==t){if(s||o(r,"undefined"))return l(),"pfx"==n?m:!0;try{N.style[m]=r}catch(h){}if(N.style[m]!=y)return l(),"pfx"==n?m:!0}return l(),!1}function v(e,n,t,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+P.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?y(l,n,r,s):(l=(e+" "+z.join(i+" ")+i).split(" "),a(l,n,t))}function h(e,n,r){return v(e,t,t,n,r)}var C=[],w=[],S={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var _=n.documentElement,x="svg"===_.nodeName.toLowerCase(),b="Moz O ms Webkit",P=S._config.usePrefixes?b.split(" "):[];S._cssomPrefixes=P;var z=S._config.usePrefixes?b.toLowerCase().split(" "):[];S._domPrefixes=z;var E={elem:u("modernizr")};Modernizr._q.push(function(){delete E.elem});var N={style:E.elem.style};Modernizr._q.unshift(function(){delete N.style}),S.testAllProps=v,S.testAllProps=h,Modernizr.addTest("cssgridlegacy",h("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",h("grid-template-rows","none",!0)),s(),r(C),delete S.addTest,delete S.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);
