<<<<<<< HEAD
 !function(e,t,s){"use strict";function a(t,s){this.element=t,this.settings=e.extend({},o,s),this._defaults=o,this._name=l,this.mouseTimeoutID=null,this.focusTimeoutID=null,this.mouseFocused=!1,this.justFocused=!1,this.init()}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}function n(t,s){var a,n,l,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,!(!t.href||!n||"map"!==a.nodeName.toLowerCase())&&(l=e("img[usemap=#"+n+"]")[0],!!l&&i(l))):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||s:s)&&i(t)}var l="accessibleMegaMenu",o={uuidPrefix:"accessible-megamenu",menuClass:"accessible-megamenu",topNavItemClass:"accessible-megamenu-top-nav-item",panelClass:"accessible-megamenu-panel",panelGroupClass:"accessible-megamenu-panel-group",hoverClass:"hover",focusClass:"focused",openClass:"is-open",openDelay:0},r={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38,keyMap:{48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",190:"."}};a.prototype=function(){var i,n,o,c,u,f,d,h,p,g,m,b,v,C=0,y=1e3,x="",T="function"==typeof t.hasOwnProperty&&!!t.hasOwnProperty("ontouchstart");return i=function(t){return e(t).closest(":data(plugin_"+l+")").data("plugin_"+l)},n=function(t){t=e(t);var s=this.settings;t.attr("id")||t.attr("id",s.uuidPrefix+"-"+(new Date).getTime()+"-"+ ++C)},o=function(t,a){var i,n=e(t.target),l=this,o=this.settings,c=this.menu,u=n.closest("."+o.topNavItemClass),f=n.hasClass(o.panelClass)?n:n.closest("."+o.panelClass);if(v.call(this,!0),a)if(u=c.find("."+o.topNavItemClass+" ."+o.openClass+":first").closest("."+o.topNavItemClass),u.is(t.relatedTarget)||u.has(t.relatedTarget).length>0)0===u.length&&c.find("[aria-expanded=true]").attr("aria-expanded","false").removeClass(o.openClass).filter("."+o.panelClass).attr("aria-hidden","true");else{if(("mouseout"===t.type||"focusout"===t.type)&&u.has(s.activeElement).length>0)return;u.find("[aria-expanded]").attr("aria-expanded","false").removeClass(o.openClass).filter("."+o.panelClass).attr("aria-hidden","true"),("keydown"===t.type&&t.keyCode===r.ESCAPE||"DOMAttrModified"===t.type)&&(i=u.find(":tabbable:first"),setTimeout(function(){c.find("[aria-expanded]."+l.settings.panelClass).off("DOMAttrModified.accessible-megamenu"),i.focus(),l.justFocused=!1},99))}else clearTimeout(l.focusTimeoutID),u.siblings().find("[aria-expanded]").attr("aria-expanded","false").removeClass(o.openClass).filter("."+o.panelClass).attr("aria-hidden","true"),u.find("[aria-expanded]").attr("aria-expanded","true").addClass(o.openClass).filter("."+o.panelClass).attr("aria-hidden","false"),"mouseover"===t.type&&n.is(":tabbable")&&1===u.length&&0===f.length&&c.has(s.activeElement).length>0&&(n.focus(),l.justFocused=!1),v.call(l)},c=function(t){var s=e(t.target).closest(":tabbable"),a=s.closest("."+this.settings.topNavItemClass),i=s.closest("."+this.settings.panelClass);1===a.length&&0===i.length&&1===a.find("."+this.settings.panelClass).length&&(s.hasClass(this.settings.openClass)?this.justFocused?(t.preventDefault(),t.stopPropagation(),this.justFocused=!1):T&&(t.preventDefault(),t.stopPropagation(),o.call(this,t,s.hasClass(this.settings.openClass))):(t.preventDefault(),t.stopPropagation(),o.call(this,t),this.justFocused=!1))},u=function(t){0===e(t.target).closest(this.menu).length&&(t.preventDefault(),t.stopPropagation(),o.call(this,t,!0))},f=function(t){"aria-expanded"===t.originalEvent.attrName&&"false"===t.originalEvent.newValue&&e(t.target).hasClass(this.settings.openClass)&&(t.preventDefault(),t.stopPropagation(),o.call(this,t,!0))},d=function(t){clearTimeout(this.focusTimeoutID);var s=e(t.target),a=s.closest("."+this.settings.panelClass);s.addClass(this.settings.focusClass).on("click.accessible-megamenu",e.proxy(c,this)),this.justFocused=!this.mouseFocused,this.mouseFocused=!1,this.panels.not(a).filter("."+this.settings.openClass).length&&o.call(this,t)},h=function(s){this.justFocused=!1;var a=this,i=e(s.target),n=i.closest("."+this.settings.topNavItemClass);i.removeClass(this.settings.focusClass).off("click.accessible-megamenu"),t.cvox?a.focusTimeoutID=setTimeout(function(){t.cvox.Api.getCurrentNode(function(e){n.has(e).length?clearTimeout(a.focusTimeoutID):a.focusTimeoutID=setTimeout(function(e,t,s){o.call(e,t,s)},275,a,s,!0)})},25):a.focusTimeoutID=setTimeout(function(){o.call(a,s,!0)},300)},p=function(s){var n,l,u,f,d,h,p=this.constructor===a?this:i(this),g=p.settings,m=e(e(this).is("."+g.hoverClass+":tabbable")?this:s.target),b=p.menu,v=p.topnavitems,C=m.closest("."+g.topNavItemClass),T=b.find(":tabbable"),D=m.hasClass(g.panelClass)?m:m.closest("."+g.panelClass),S=D.find("."+g.panelGroupClass),w=m.closest("."+g.panelGroupClass),k=s.keyCode||s.which,E=!1,P=r.keyMap[s.keyCode]||"",I=1===C.length&&0===D.length;if(!m.is("input:focus, select:focus, textarea:focus, button:focus")){switch(m.is("."+g.hoverClass+":tabbable")&&e("html").off("keydown.accessible-megamenu"),k){case r.ESCAPE:o.call(p,s,!0);break;case r.DOWN:s.preventDefault(),I?(o.call(p,s),E=1===C.find("."+g.panelClass+" :tabbable:first").focus().length):E=1===T.filter(":gt("+T.index(m)+"):first").focus().length,!E&&t.opera&&"[object Opera]"===opera.toString()&&(s.ctrlKey||s.metaKey)&&(T=e(":tabbable"),u=T.index(m),E=1===e(":tabbable:gt("+e(":tabbable").index(m)+"):first").focus().length);break;case r.UP:s.preventDefault(),I&&m.hasClass(g.openClass)?(o.call(p,s,!0),n=v.filter(":lt("+v.index(C)+"):last"),n.children("."+g.panelClass).length&&(E=1===n.children().attr("aria-expanded","true").addClass(g.openClass).filter("."+g.panelClass).attr("aria-hidden","false").find(":tabbable:last").focus())):I||(E=1===T.filter(":lt("+T.index(m)+"):last").focus().length),!E&&t.opera&&"[object Opera]"===opera.toString()&&(s.ctrlKey||s.metaKey)&&(T=e(":tabbable"),u=T.index(m),E=1===e(":tabbable:lt("+e(":tabbable").index(m)+"):first").focus().length);break;case r.RIGHT:s.preventDefault(),I?E=1===v.filter(":gt("+v.index(C)+"):first").find(":tabbable:first").focus().length:(S.length&&w.length&&(E=1===S.filter(":gt("+S.index(w)+"):first").find(":tabbable:first").focus().length),E||(E=1===C.find(":tabbable:first").focus().length));break;case r.LEFT:s.preventDefault(),I?E=1===v.filter(":lt("+v.index(C)+"):last").find(":tabbable:first").focus().length:(S.length&&w.length&&(E=1===S.filter(":lt("+S.index(w)+"):last").find(":tabbable:first").focus().length),E||(E=1===C.find(":tabbable:first").focus().length));break;case r.TAB:u=T.index(m),s.shiftKey&&I&&m.hasClass(g.openClass)?(o.call(p,s,!0),n=v.filter(":lt("+v.index(C)+"):last"),n.children("."+g.panelClass).length&&(E=n.children().attr("aria-expanded","true").addClass(g.openClass).filter("."+g.panelClass).attr("aria-hidden","false").find(":tabbable:last").focus())):s.shiftKey&&u>0?E=1===T.filter(":lt("+u+"):last").focus().length:!s.shiftKey&&u<T.length-1?E=1===T.filter(":gt("+u+"):first").focus().length:t.opera&&"[object Opera]"===opera.toString()&&(T=e(":tabbable"),u=T.index(m),E=s.shiftKey?1===e(":tabbable:lt("+e(":tabbable").index(m)+"):last").focus().length:1===e(":tabbable:gt("+e(":tabbable").index(m)+"):first").focus().length),E&&s.preventDefault();break;case r.SPACE:if(!I)return!0;s.preventDefault(),c.call(p,s);break;case r.ENTER:return!0;default:if(clearTimeout(this.keydownTimeoutID),x+=P!==x?P:"",0===x.length)return;for(this.keydownTimeoutID=setTimeout(function(){x=""},y),T=I&&!m.hasClass(g.openClass)?T.filter(":not(."+g.panelClass+" :tabbable)"):C.find(":tabbable"),s.shiftKey&&(T=e(T.get().reverse())),u=0;u<T.length;u++)if(f=T.eq(u),f.is(m)){l=1===x.length?u+1:u;break}for(h=new RegExp("^"+x.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),"i"),u=l;u<T.length;u++)if(f=T.eq(u),d=e.trim(f.text()),h.test(d)){E=!0,f.focus();break}if(!E)for(u=0;u<l;u++)if(f=T.eq(u),d=e.trim(f.text()),h.test(d)){f.focus();break}}p.justFocused=!1}},g=function(t){(e(t.target).is(this.settings.panelClass)||e(t.target).closest(":focusable").length)&&(this.mouseFocused=!0),clearTimeout(this.mouseTimeoutID),this.mouseTimeoutID=setTimeout(function(){clearTimeout(this.focusTimeoutID)},1)},m=function(t){clearTimeout(this.mouseTimeoutID);var s=this;this.mouseTimeoutID=setTimeout(function(){e(t.target).addClass(s.settings.hoverClass),o.call(s,t),e(t.target).is(":tabbable")&&e("html").on("keydown.accessible-megamenu",e.proxy(p,t.target))},this.settings.openDelay)},b=function(t){clearTimeout(this.mouseTimeoutID);var s=this;e(t.target).removeClass(s.settings.hoverClass),s.mouseTimeoutID=setTimeout(function(){o.call(s,t,!0)},250),e(t.target).is(":tabbable")&&e("html").off("keydown.accessible-megamenu")},v=function(t){var s=this.menu;t?(e("html").off("mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu"),s.find("[aria-expanded]."+this.settings.panelClass).off("DOMAttrModified.accessible-megamenu")):(e("html").on("mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu",e.proxy(u,this)),s.find("[aria-expanded=true]."+this.settings.panelClass).on("DOMAttrModified.accessible-megamenu",e.proxy(f,this)))},{constructor:a,init:function(){var t=this.settings,s=e(this.element),a=s.children().first(),i=a.children();this.start(t,s,a,i)},start:function(t,a,i,l){var o=this;this.settings=t,this.menu=i,this.topnavitems=l,a.attr("role","navigation"),i.addClass(t.menuClass),l.each(function(s,a){var i,l;a=e(a),a.addClass(t.topNavItemClass),i=a.find(":tabbable:first"),l=a.children(":not(:tabbable):last"),n.call(o,i),l.length&&(n.call(o,l),i.attr({"aria-controls":l.attr("id"),"aria-expanded":!1}),l.attr({role:"region","aria-expanded":!1,"aria-hidden":!0}).addClass(t.panelClass).not("[aria-labelledby]").attr("aria-labelledby",i.attr("id")))}),this.panels=i.find("."+t.panelClass),i.on("focusin.accessible-megamenu",":focusable, ."+t.panelClass,e.proxy(d,this)).on("focusout.accessible-megamenu",":focusable, ."+t.panelClass,e.proxy(h,this)).on("keydown.accessible-megamenu",e.proxy(p,this)).on("mouseover.accessible-megamenu",e.proxy(m,this)).on("mouseout.accessible-megamenu",e.proxy(b,this)).on("mousedown.accessible-megamenu",e.proxy(g,this)),T&&i.on("touchstart.accessible-megamenu",e.proxy(c,this)),i.find("hr").attr("role","separator"),e(s.activeElement).closest(i).length&&e(s.activeElement).trigger("focusin.accessible-megamenu")},getDefaults:function(){return this._defaults},getOption:function(e){return this.settings[e]},getAllOptions:function(){return this.settings},setOption:function(e,t,s){this.settings[e]=t,s&&this.init()}}}(),e.fn[l]=function(t){return this.each(function(){e.data(this,"plugin_"+l)||e.data(this,"plugin_"+l,new e.fn[l].AccessibleMegaMenu(this,t))})},e.fn[l].AccessibleMegaMenu=a,e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(s){return!!e.data(s,t)}}):function(t,s,a){return!!e.data(t,a[3])},focusable:function(t){return n(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&n(t,!a)}})}(jQuery,window,document),function(e,t){"undefined"!=typeof exports?module.exports=t(require("jquery"),e):"function"==typeof define&&define.amd?define(["jquery"],function(){t($,e)}):t($,e)}("undefined"!=typeof window?window:this,function(e,t){!function(){var s,a={};a=function(t){function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,s,a){return s&&e(t.prototype,s),a&&e(t,a),t}}(),i=e("html,body"),n=t.scrollStop=function(){return i.queue([]).stop()};t.Scroll=function(){function t(e){var a=e.easing,i=void 0===a?"easeOutQuart":a,n=e.speed,l=void 0===n?1e3:n,o=e.delay,r=void 0===o?0:o,c=e.isAddHash,u=void 0===c||c,f=e.isTopScroll,d=void 0===f||f,h=e.isLeftScroll,p=void 0===h||h;s(this,t),this.easing=i,this.speed=l,this.delay=r,this.isAddHash=u,this.isTopScroll=d,this.isLeftScroll=p}return a(t,[{key:"getScrollPosition",value:function(t){var s="string"==typeof t&&isFinite(parseInt(t.slice(1,2))),a=s?t.slice(1).split(","):e(t).offset();return{scrollTop:t?s?parseInt(a[1]):a.top:0,scrollLeft:t?s?parseInt(a[0]):a.left:0}}},{key:"getWindowSize",value:function(){var t=document.createElement("p"),s=e("body")[0];t.style.backgroundColor="fixed",t.style.width=t.style.height="100%",s.appendChild(t);var a=t.clientWidth,i=t.clientHeight;return s.removeChild(t),{width:a,height:i}}},{key:"getScrollFixPosition",value:function(t,s){var a=this.getWindowSize(),i=e(document).height()-a.height;t>i&&(t=Math.max(i,0));var n=e(document).width()-a.width;return s>n&&(s=Math.max(n,0)),this.isTopScroll&&this.isLeftScroll?{scrollTop:t,scrollLeft:s}:this.isTopScroll?{scrollTop:t}:this.isLeftScroll?{scrollLeft:s}:void 0}},{key:"scrollStart",value:function(e,t){var s=this;n();var a=this.getScrollPosition(e),l=a.scrollTop,o=a.scrollLeft,r=!1;i.delay(this.delay).animate(this.getScrollFixPosition(l,o),this.speed,this.easing,function(){r||(r=!0,s.isAddHash&&"string"==typeof e&&(location.hash=e),t&&t({target:e,scrollTop:l,scrollLeft:o}))})}}]),t}();return t}(a),s=function(s){e.smoothPageScrollByLoaded=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=new s.Scroll({speed:0});t.scrollStart();var a=new s.Scroll(e);a.scrollStart(location.hash,e.complate);var i=navigator.userAgent.indexOf("WebKit")!==-1;i&&(location.hash="")},e.smoothPageScrollStart=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=new s.Scroll(e);t.scrollStart(e.target,e.complate)},e.fn.smoothPageScroll=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],a=new s.Scroll(t);e(document).on("click",e(this).selector,function(e){var s=e.currentTarget.hash||t.target;return a.scrollStart(s,t.complate),!1})},t.addEventListener("DOMMouseScroll",s.scrollStop,!1),t.onmousewheel=document.onmousewheel=s.scrollStop,e(document).on("click",function(){return(0,s.scrollStop)()})}(a)}()}),$(function(){$("#nav-toggler").on("click",function(){$("#nav-toggler, #site-nav").toggleClass("is-active")}),$("#site-nav").accessibleMegaMenu({openDelay:400}),$('a[href^="#"]').smoothPageScroll({isAddHash:!1})});
=======
!function(e,t,s){"use strict";function a(t,s){this.element=t,this.settings=e.extend({},o,s),this._defaults=o,this._name=l,this.mouseTimeoutID=null,this.focusTimeoutID=null,this.mouseFocused=!1,this.justFocused=!1,this.init()}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}function n(t,s){var a,n,l,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,!(!t.href||!n||"map"!==a.nodeName.toLowerCase())&&(l=e("img[usemap=#"+n+"]")[0],!!l&&i(l))):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||s:s)&&i(t)}var l="accessibleMegaMenu",o={uuidPrefix:"accessible-megamenu",menuClass:"accessible-megamenu",topNavItemClass:"accessible-megamenu-top-nav-item",panelClass:"accessible-megamenu-panel",panelGroupClass:"accessible-megamenu-panel-group",hoverClass:"hover",focusClass:"focused",openClass:"is-open",openDelay:0},r={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38,keyMap:{48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",190:"."}};a.prototype=function(){var i,n,o,c,u,f,d,h,p,g,m,b,v,C=0,y=1e3,x="",T="function"==typeof t.hasOwnProperty&&!!t.hasOwnProperty("ontouchstart");return i=function(t){return e(t).closest(":data(plugin_"+l+")").data("plugin_"+l)},n=function(t){t=e(t);var s=this.settings;t.attr("id")||t.attr("id",s.uuidPrefix+"-"+(new Date).getTime()+"-"+ ++C)},o=function(t,a){var i,n=e(t.target),l=this,o=this.settings,c=this.menu,u=n.closest("."+o.topNavItemClass),f=n.hasClass(o.panelClass)?n:n.closest("."+o.panelClass);if(v.call(this,!0),a)if(u=c.find("."+o.topNavItemClass+" ."+o.openClass+":first").closest("."+o.topNavItemClass),u.is(t.relatedTarget)||u.has(t.relatedTarget).length>0)0===u.length&&c.find("[aria-expanded=true]").attr("aria-expanded","false").removeClass(o.openClass).filter("."+o.panelClass).attr("aria-hidden","true");else{if(("mouseout"===t.type||"focusout"===t.type)&&u.has(s.activeElement).length>0)return;u.find("[aria-expanded]").attr("aria-expanded","false").removeClass(o.openClass).filter("."+o.panelClass).attr("aria-hidden","true"),("keydown"===t.type&&t.keyCode===r.ESCAPE||"DOMAttrModified"===t.type)&&(i=u.find(":tabbable:first"),setTimeout(function(){c.find("[aria-expanded]."+l.settings.panelClass).off("DOMAttrModified.accessible-megamenu"),i.focus(),l.justFocused=!1},99))}else clearTimeout(l.focusTimeoutID),u.siblings().find("[aria-expanded]").attr("aria-expanded","false").removeClass(o.openClass).filter("."+o.panelClass).attr("aria-hidden","true"),u.find("[aria-expanded]").attr("aria-expanded","true").addClass(o.openClass).filter("."+o.panelClass).attr("aria-hidden","false"),"mouseover"===t.type&&n.is(":tabbable")&&1===u.length&&0===f.length&&c.has(s.activeElement).length>0&&(n.focus(),l.justFocused=!1),v.call(l)},c=function(t){var s=e(t.target).closest(":tabbable"),a=s.closest("."+this.settings.topNavItemClass),i=s.closest("."+this.settings.panelClass);1===a.length&&0===i.length&&1===a.find("."+this.settings.panelClass).length&&(s.hasClass(this.settings.openClass)?this.justFocused?(t.preventDefault(),t.stopPropagation(),this.justFocused=!1):T&&(t.preventDefault(),t.stopPropagation(),o.call(this,t,s.hasClass(this.settings.openClass))):(t.preventDefault(),t.stopPropagation(),o.call(this,t),this.justFocused=!1))},u=function(t){0===e(t.target).closest(this.menu).length&&(t.preventDefault(),t.stopPropagation(),o.call(this,t,!0))},f=function(t){"aria-expanded"===t.originalEvent.attrName&&"false"===t.originalEvent.newValue&&e(t.target).hasClass(this.settings.openClass)&&(t.preventDefault(),t.stopPropagation(),o.call(this,t,!0))},d=function(t){clearTimeout(this.focusTimeoutID);var s=e(t.target),a=s.closest("."+this.settings.panelClass);s.addClass(this.settings.focusClass).on("click.accessible-megamenu",e.proxy(c,this)),this.justFocused=!this.mouseFocused,this.mouseFocused=!1,this.panels.not(a).filter("."+this.settings.openClass).length&&o.call(this,t)},h=function(s){this.justFocused=!1;var a=this,i=e(s.target),n=i.closest("."+this.settings.topNavItemClass);i.removeClass(this.settings.focusClass).off("click.accessible-megamenu"),t.cvox?a.focusTimeoutID=setTimeout(function(){t.cvox.Api.getCurrentNode(function(e){n.has(e).length?clearTimeout(a.focusTimeoutID):a.focusTimeoutID=setTimeout(function(e,t,s){o.call(e,t,s)},275,a,s,!0)})},25):a.focusTimeoutID=setTimeout(function(){o.call(a,s,!0)},300)},p=function(s){var n,l,u,f,d,h,p=this.constructor===a?this:i(this),g=p.settings,m=e(e(this).is("."+g.hoverClass+":tabbable")?this:s.target),b=p.menu,v=p.topnavitems,C=m.closest("."+g.topNavItemClass),T=b.find(":tabbable"),D=m.hasClass(g.panelClass)?m:m.closest("."+g.panelClass),S=D.find("."+g.panelGroupClass),w=m.closest("."+g.panelGroupClass),k=s.keyCode||s.which,E=!1,P=r.keyMap[s.keyCode]||"",I=1===C.length&&0===D.length;if(!m.is("input:focus, select:focus, textarea:focus, button:focus")){switch(m.is("."+g.hoverClass+":tabbable")&&e("html").off("keydown.accessible-megamenu"),k){case r.ESCAPE:o.call(p,s,!0);break;case r.DOWN:s.preventDefault(),I?(o.call(p,s),E=1===C.find("."+g.panelClass+" :tabbable:first").focus().length):E=1===T.filter(":gt("+T.index(m)+"):first").focus().length,!E&&t.opera&&"[object Opera]"===opera.toString()&&(s.ctrlKey||s.metaKey)&&(T=e(":tabbable"),u=T.index(m),E=1===e(":tabbable:gt("+e(":tabbable").index(m)+"):first").focus().length);break;case r.UP:s.preventDefault(),I&&m.hasClass(g.openClass)?(o.call(p,s,!0),n=v.filter(":lt("+v.index(C)+"):last"),n.children("."+g.panelClass).length&&(E=1===n.children().attr("aria-expanded","true").addClass(g.openClass).filter("."+g.panelClass).attr("aria-hidden","false").find(":tabbable:last").focus())):I||(E=1===T.filter(":lt("+T.index(m)+"):last").focus().length),!E&&t.opera&&"[object Opera]"===opera.toString()&&(s.ctrlKey||s.metaKey)&&(T=e(":tabbable"),u=T.index(m),E=1===e(":tabbable:lt("+e(":tabbable").index(m)+"):first").focus().length);break;case r.RIGHT:s.preventDefault(),I?E=1===v.filter(":gt("+v.index(C)+"):first").find(":tabbable:first").focus().length:(S.length&&w.length&&(E=1===S.filter(":gt("+S.index(w)+"):first").find(":tabbable:first").focus().length),E||(E=1===C.find(":tabbable:first").focus().length));break;case r.LEFT:s.preventDefault(),I?E=1===v.filter(":lt("+v.index(C)+"):last").find(":tabbable:first").focus().length:(S.length&&w.length&&(E=1===S.filter(":lt("+S.index(w)+"):last").find(":tabbable:first").focus().length),E||(E=1===C.find(":tabbable:first").focus().length));break;case r.TAB:u=T.index(m),s.shiftKey&&I&&m.hasClass(g.openClass)?(o.call(p,s,!0),n=v.filter(":lt("+v.index(C)+"):last"),n.children("."+g.panelClass).length&&(E=n.children().attr("aria-expanded","true").addClass(g.openClass).filter("."+g.panelClass).attr("aria-hidden","false").find(":tabbable:last").focus())):s.shiftKey&&u>0?E=1===T.filter(":lt("+u+"):last").focus().length:!s.shiftKey&&u<T.length-1?E=1===T.filter(":gt("+u+"):first").focus().length:t.opera&&"[object Opera]"===opera.toString()&&(T=e(":tabbable"),u=T.index(m),E=s.shiftKey?1===e(":tabbable:lt("+e(":tabbable").index(m)+"):last").focus().length:1===e(":tabbable:gt("+e(":tabbable").index(m)+"):first").focus().length),E&&s.preventDefault();break;case r.SPACE:if(!I)return!0;s.preventDefault(),c.call(p,s);break;case r.ENTER:return!0;default:if(clearTimeout(this.keydownTimeoutID),x+=P!==x?P:"",0===x.length)return;for(this.keydownTimeoutID=setTimeout(function(){x=""},y),T=I&&!m.hasClass(g.openClass)?T.filter(":not(."+g.panelClass+" :tabbable)"):C.find(":tabbable"),s.shiftKey&&(T=e(T.get().reverse())),u=0;u<T.length;u++)if(f=T.eq(u),f.is(m)){l=1===x.length?u+1:u;break}for(h=new RegExp("^"+x.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),"i"),u=l;u<T.length;u++)if(f=T.eq(u),d=e.trim(f.text()),h.test(d)){E=!0,f.focus();break}if(!E)for(u=0;u<l;u++)if(f=T.eq(u),d=e.trim(f.text()),h.test(d)){f.focus();break}}p.justFocused=!1}},g=function(t){(e(t.target).is(this.settings.panelClass)||e(t.target).closest(":focusable").length)&&(this.mouseFocused=!0),clearTimeout(this.mouseTimeoutID),this.mouseTimeoutID=setTimeout(function(){clearTimeout(this.focusTimeoutID)},1)},m=function(t){clearTimeout(this.mouseTimeoutID);var s=this;this.mouseTimeoutID=setTimeout(function(){e(t.target).addClass(s.settings.hoverClass),o.call(s,t),e(t.target).is(":tabbable")&&e("html").on("keydown.accessible-megamenu",e.proxy(p,t.target))},this.settings.openDelay)},b=function(t){clearTimeout(this.mouseTimeoutID);var s=this;e(t.target).removeClass(s.settings.hoverClass),s.mouseTimeoutID=setTimeout(function(){o.call(s,t,!0)},250),e(t.target).is(":tabbable")&&e("html").off("keydown.accessible-megamenu")},v=function(t){var s=this.menu;t?(e("html").off("mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu"),s.find("[aria-expanded]."+this.settings.panelClass).off("DOMAttrModified.accessible-megamenu")):(e("html").on("mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu",e.proxy(u,this)),s.find("[aria-expanded=true]."+this.settings.panelClass).on("DOMAttrModified.accessible-megamenu",e.proxy(f,this)))},{constructor:a,init:function(){var t=this.settings,s=e(this.element),a=s.children().first(),i=a.children();this.start(t,s,a,i)},start:function(t,a,i,l){var o=this;this.settings=t,this.menu=i,this.topnavitems=l,a.attr("role","navigation"),i.addClass(t.menuClass),l.each(function(s,a){var i,l;a=e(a),a.addClass(t.topNavItemClass),i=a.find(":tabbable:first"),l=a.children(":not(:tabbable):last"),n.call(o,i),l.length&&(n.call(o,l),i.attr({"aria-controls":l.attr("id"),"aria-expanded":!1}),l.attr({role:"region","aria-expanded":!1,"aria-hidden":!0}).addClass(t.panelClass).not("[aria-labelledby]").attr("aria-labelledby",i.attr("id")))}),this.panels=i.find("."+t.panelClass),i.on("focusin.accessible-megamenu",":focusable, ."+t.panelClass,e.proxy(d,this)).on("focusout.accessible-megamenu",":focusable, ."+t.panelClass,e.proxy(h,this)).on("keydown.accessible-megamenu",e.proxy(p,this)).on("mouseover.accessible-megamenu",e.proxy(m,this)).on("mouseout.accessible-megamenu",e.proxy(b,this)).on("mousedown.accessible-megamenu",e.proxy(g,this)),T&&i.on("touchstart.accessible-megamenu",e.proxy(c,this)),i.find("hr").attr("role","separator"),e(s.activeElement).closest(i).length&&e(s.activeElement).trigger("focusin.accessible-megamenu")},getDefaults:function(){return this._defaults},getOption:function(e){return this.settings[e]},getAllOptions:function(){return this.settings},setOption:function(e,t,s){this.settings[e]=t,s&&this.init()}}}(),e.fn[l]=function(t){return this.each(function(){e.data(this,"plugin_"+l)||e.data(this,"plugin_"+l,new e.fn[l].AccessibleMegaMenu(this,t))})},e.fn[l].AccessibleMegaMenu=a,e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(s){return!!e.data(s,t)}}):function(t,s,a){return!!e.data(t,a[3])},focusable:function(t){return n(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&n(t,!a)}})}(jQuery,window,document),function(e,t){"undefined"!=typeof exports?module.exports=t(require("jquery"),e):"function"==typeof define&&define.amd?define(["jquery"],function(){t($,e)}):t($,e)}("undefined"!=typeof window?window:this,function(e,t){!function(){var s,a={};a=function(t){function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,s,a){return s&&e(t.prototype,s),a&&e(t,a),t}}(),i=e("html,body"),n=t.scrollStop=function(){return i.queue([]).stop()};t.Scroll=function(){function t(e){var a=e.easing,i=void 0===a?"easeOutQuart":a,n=e.speed,l=void 0===n?1e3:n,o=e.delay,r=void 0===o?0:o,c=e.isAddHash,u=void 0===c||c,f=e.isTopScroll,d=void 0===f||f,h=e.isLeftScroll,p=void 0===h||h;s(this,t),this.easing=i,this.speed=l,this.delay=r,this.isAddHash=u,this.isTopScroll=d,this.isLeftScroll=p}return a(t,[{key:"getScrollPosition",value:function(t){var s="string"==typeof t&&isFinite(parseInt(t.slice(1,2))),a=s?t.slice(1).split(","):e(t).offset();return{scrollTop:t?s?parseInt(a[1]):a.top:0,scrollLeft:t?s?parseInt(a[0]):a.left:0}}},{key:"getWindowSize",value:function(){var t=document.createElement("p"),s=e("body")[0];t.style.backgroundColor="fixed",t.style.width=t.style.height="100%",s.appendChild(t);var a=t.clientWidth,i=t.clientHeight;return s.removeChild(t),{width:a,height:i}}},{key:"getScrollFixPosition",value:function(t,s){var a=this.getWindowSize(),i=e(document).height()-a.height;t>i&&(t=Math.max(i,0));var n=e(document).width()-a.width;return s>n&&(s=Math.max(n,0)),this.isTopScroll&&this.isLeftScroll?{scrollTop:t,scrollLeft:s}:this.isTopScroll?{scrollTop:t}:this.isLeftScroll?{scrollLeft:s}:void 0}},{key:"scrollStart",value:function(e,t){var s=this;n();var a=this.getScrollPosition(e),l=a.scrollTop,o=a.scrollLeft,r=!1;i.delay(this.delay).animate(this.getScrollFixPosition(l,o),this.speed,this.easing,function(){r||(r=!0,s.isAddHash&&"string"==typeof e&&(location.hash=e),t&&t({target:e,scrollTop:l,scrollLeft:o}))})}}]),t}();return t}(a),s=function(s){e.smoothPageScrollByLoaded=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=new s.Scroll({speed:0});t.scrollStart();var a=new s.Scroll(e);a.scrollStart(location.hash,e.complate);var i=navigator.userAgent.indexOf("WebKit")!==-1;i&&(location.hash="")},e.smoothPageScrollStart=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=new s.Scroll(e);t.scrollStart(e.target,e.complate)},e.fn.smoothPageScroll=function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],a=new s.Scroll(t);e(document).on("click",e(this).selector,function(e){var s=e.currentTarget.hash||t.target;return a.scrollStart(s,t.complate),!1})},t.addEventListener("DOMMouseScroll",s.scrollStop,!1),t.onmousewheel=document.onmousewheel=s.scrollStop,e(document).on("click",function(){return(0,s.scrollStop)()})}(a)}()}),$(function(){$("#nav-toggler").on("click",function(){$("#nav-toggler, #site-nav").toggleClass("is-active")}),$("#site-nav").accessibleMegaMenu({openDelay:400}),$('a[href^="#"]').smoothPageScroll()});
>>>>>>> master
