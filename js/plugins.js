// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.

/*!
 * jQuery CooQuery Plugin v2
 * http://cooquery.lenonmarcel.com.br/
 *
 * Copyright 2009, 2010 Lenon Marcel
 * Dual licensed under the MIT and GPL licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Date: 2010-01-24 (Sun, 24 January 2010)
 */
(function($){
  $.setCookie = function( name, value, options ){
    if( typeof name === 'undefined' || typeof value === 'undefined' )
      return false;

    var str = name + '=' + encodeURIComponent(value);

    if( options.domain ) str += '; domain=' + options.domain;
    if( options.path ) str += '; path=' + options.path;
    if( options.duration ){
      var date = new Date();
      date.setTime( date.getTime() + options.duration * 24 * 60 * 60 * 1000 );
      str += '; expires=' + date.toGMTString();
    }
    if( options.secure ) str += '; secure';

    return document.cookie = str;
  };

  $.delCookie = function( name ){
    return $.setCookie( name, '', { duration: -1 } );
  };

  // Based on Mootools Cookie.read function (http://mootools.net/docs/core/Utilities/Cookie#Cookie:read)
  $.readCookie = function( name ){
    var value = document.cookie.match('(?:^|;)\\s*' + name.replace(/([-.*+?^${}()|[\]\/\\])/g, '\\$1') + '=([^;]*)');
    return (value) ? decodeURIComponent(value[1]) : null;
  };

  $.CooQueryVersion = 'v 2.0';
})(jQuery);




