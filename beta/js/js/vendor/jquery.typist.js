'use strict';(function(a){'function'==typeof define&&define.amd?define(['jquery'],a):a(jQuery)})(function(a){'use strict';function b(b,c){a.extend(this,{speed:10,text:'',cursor:!0,blinkSpeed:2,typeFrom:'end',cursorStyles:{display:'inline-block',fontStyle:'normal',margin:'-2px 2px 0 2px'}},c||{}),this._element=a(b),this._element.data('typist',this),this.queue=[],this.timer=null,this.delay=1e3/this.speed,this.blinkTimer=null,this.blinkDelay=1e3/this.blinkSpeed,this.text&&(this.queue.push({text:this.text}),this.type())}a.fn.typist=function(a){return this.each(function(){new b(this,a)})},a.fn.typistAdd=function(b,c){return this.each(function(){var d=a(this).data('typist');d.queue.push({text:b,callback:c}),d.type()})},a.fn.typistRemove=function(b,c){return b=parseInt(b)||0,this.each(function(){var d=a(this).data('typist');d.queue.push({remove:b,callback:c}),d.type()})},a.fn.typistPause=function(b,c){return b=parseInt(b)||0,this.each(function(){var d=a(this).data('typist');d.queue.push({delay:b,callback:c}),d.type()})},a.fn.typistStop=function(){return this.each(function(){var b=a(this).data('typist');b.queue.push({stop:!0}),b.type()})},b.prototype={addCursor:function(){this._cursor&&(clearInterval(this.blinkTimer),this._cursor.stop().remove()),this._cursor=a('<span>|</span>').css(this.cursorStyles).insertAfter(this._container),this.cursorVisible=!0,this.blinkTimer=setInterval(a.proxy(function(){this.cursorVisible=!this.cursorVisible,this._cursor.animate({opacity:this.cursorVisible?1:0},100)},this),this.blinkDelay)},fire:function(a){return this._element.trigger(a,this),this},nl2br:function(a){return a.replace('\n','<br/>')},remove:function(b,c){if(0>=b)return c(),this.timer=null,this.fire('end_remove.typist').type();b--;var d=this._container.text();d=d.substr(0,d.length-1),d=this.nl2br(d),this.timer=setTimeout(a.proxy(function(){this._container.html(d),this.remove(b,c)},this),this.delay)},step:function(b,c){if('string'==typeof b&&(b=b.split('')),!b.length)return c(),this.timer=null,this.fire('end_type.typist').type();var d=b.shift();d=a('<div>').text(d).html(),d=this.nl2br(d),this.timer=setTimeout(a.proxy(function(){this._container.html(this._container.html()+d),this.step(b,c)},this),this.delay)},stop:function(){clearInterval(this.blinkTimer),this.blinkTimer=null,this._cursor&&(this._cursor.remove(),this._cursor=null),clearTimeout(this.timer),this.timer=null},type:function(){if(!this.timer){this._container||(this._container=a('<span>'),'start'===this.typeFrom?this._element.prepend(this._container):this._element.append(this._container)),this.cursor&&this.addCursor();var b=this.queue.shift()||{},c=a.proxy(b.callback||a.noop,this);return b.delay?void(this.fire('start_pause.typist').timer=setTimeout(a.proxy(function(){c(),this.timer=null,this.fire('end_pause.typist').type()},this),b.delay)):b.remove?void this.fire('start_remove.typist').remove(b.remove,c):b.stop?void this.stop():void(!b.text||this.fire('start_type.typist').step(b.text,c))}}}});