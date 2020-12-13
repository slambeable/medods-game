(function(e){function t(t){for(var r,o,u=t[0],s=t[1],c=t[2],d=0,f=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/medods-game/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1618:function(e,t,n){},"163f":function(e,t,n){},"196f":function(e,t,n){e.exports=n.p+"media/3.c1c96b44.mp3"},2285:function(e,t,n){},"3c6d":function(e,t,n){e.exports=n.p+"media/1.99e50f7d.mp3"},"3cf8":function(e,t,n){e.exports=n.p+"media/2.d2c4a2c4.mp3"},"3d20":function(e,t,n){"use strict";n("2285")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",{staticClass:"game-title"},[e._v("Simon Says")]),n("game-location",{attrs:{isActive:e.isActive,squaredColors:e.squaredColors,isDisabled:e.isDisabled.gameLocation},on:{clickSquaredHandler:e.gameStep}}),n("game-option",{attrs:{roundsCount:e.roundsCount,looseGameDisplay:e.looseGameDisplay,isDisabled:e.isDisabled.startButton,gameLogic:e.gameLogic},on:{clickButtonHandler:e.dischargeGame}}),n("game-difficulty",{attrs:{isDisabled:e.isDisabled.gameDifficult,delay:e.delay},on:{checkDifficult:e.dischargeGame}})],1)},i=[],o=(n("96cf"),n("1da1")),u=n("3c6d"),s=n.n(u),c=n("3cf8"),l=n.n(c),d=n("196f"),f=n.n(d),m=n("78fc"),p=n.n(m),g=(n("fb6a"),n("d3b7"),{methods:{capitalizeWord:function(e){return e[0].toUpperCase()+e.slice(1)},timeout:function(e){return new Promise((function(t){return setTimeout(t,e)}))}}}),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["game-location",e.isDisabled?"disabled":""]},e._l(e.squaredColors,(function(t,r){return n("div",{key:r,class:["game-location__"+t,e.isActive[t]||e.touched[t]?"active":""],attrs:{value:t},on:{click:e.clickSquaredHandler,touchstart:function(n){e.touched[t]=!0},touchend:function(n){e.touched[t]=!1}}})})),0)},b=[],v=(n("c975"),{name:"gameLocation",data:function(){return{touched:{blue:!1,red:!1,yellow:!1,green:!1}}},props:{squaredColors:Array,isDisabled:Boolean,isActive:Object},methods:{clickSquaredHandler:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.target,a=r.attributes.value.value,i=t.squaredColors.indexOf(a),t.$emit("clickSquaredHandler",i);case 4:case"end":return n.stop()}}),n)})))()}}}),y=v,_=(n("c335"),n("2877")),w=Object(_["a"])(y,h,b,!1,null,"2121b0dc",null),D=w.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["game-option",e.isDisabled?"disabled":""]},[n("h2",{staticClass:"game-option__title"},[e._v("Round: "+e._s(e.roundsCount))]),e.looseGameDisplay?n("p",{staticClass:"game-option__loose"},[e._v("You lose after: "+e._s(e.roundsCount)+" rounds!")]):e._e(),n("button",{staticClass:"game-option__start_button",on:{click:e.clickButtonHandler}},[e._v(" Start ")])])},x=[],q=(n("a9e3"),{name:"gameOption",props:{roundsCount:Number,gameLogic:Function,looseGameDisplay:Boolean,isDisabled:Boolean},methods:{clickButtonHandler:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$emit("clickButtonHandler"),t.next=3,e.gameLogic();case 3:case"end":return t.stop()}}),t)})))()}}}),k=q,O=(n("3d20"),Object(_["a"])(k,S,x,!1,null,"7b7c3d1b",null)),C=O.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["game-difficulty",e.isDisabled?"disabled":""]},[n("h2",{staticClass:"game-difficulty__title"},[e._v("Game Difficulty:")]),n("div",{staticClass:"game-difficulty__wrapper"},e._l(e.delay,(function(t,r){return n("label",{key:r},[n("input",{class:"game-difficulty__"+r,attrs:{name:"difficult",type:"radio"},domProps:{value:r,checked:"easy"===r},on:{change:e.checkDifficult}}),e._v(" "+e._s(e.capitalizeWord(r))+" ")])})),0)])},A=[],R={name:"gameDifficulty",mixins:[g],props:{delay:Object,isDisabled:Boolean},methods:{checkDifficult:function(e){var t=e.target,n=t.attributes.value.value;this.$emit("checkDifficult",n)}}},B=R,L=(n("9133"),Object(_["a"])(B,j,A,!1,null,"929495f8",null)),G=L.exports,P={name:"App",components:{gameDifficulty:G,gameOption:C,gameLocation:D},mixins:[g],data:function(){return{roundsCount:0,numberOfSquares:4,looseGameDisplay:!1,predeterminedSequence:[],userSequence:[],difficult:"easy",squaredColors:["blue","red","yellow","green"],delay:{easy:1500,normal:1e3,hard:400},timeBetweenRounds:700,timeOfActiveSquared:200,sounds:[new Audio(s.a),new Audio(l.a),new Audio(f.a),new Audio(p.a)],isActive:{blue:!1,red:!1,yellow:!1,green:!1},isDisabled:{gameLocation:!0,startButton:!1,gameDifficult:!1}}},methods:{dischargeGame:function(){var e=arguments,t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.length>0&&void 0!==e[0]?e[0]:"",t.predeterminedSequence=[],t.userSequence=[],t.roundsCount=1,t.looseGameDisplay=!1,0!==r.length&&(t.isDisabled.gameLocation=!0,t.difficult=r);case 6:case"end":return n.stop()}}),n)})))()},gameStep:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.userSequence.push(e),r=t.userSequence.length-1,t.sounds[e].load(),t.sounds[e].play(),t.userSequence[r]===t.predeterminedSequence[r]){n.next=8;break}t.looseGame(),n.next=12;break;case 8:if(t.userSequence.length!==t.predeterminedSequence.length){n.next=12;break}return t.roundsCount+=1,n.next=12,t.gameLogic();case 12:case"end":return n.stop()}}),n)})))()},randomSquare:function(){return Math.floor(Math.random()*this.numberOfSquares)},looseGame:function(){this.looseGameDisplay=!0,this.predeterminedSequence=[],this.userSequence=[],this.isDisabled.gameLocation=!0},gameLogic:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.userSequence=[],e.isDisabled.gameLocation=!0,e.isDisabled.startButton=!0,e.isDisabled.gameDifficult=!0,e.predeterminedSequence.push(e.randomSquare()),n=function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var r,a,i,o=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=o.length>0&&void 0!==o[0]?o[0]:0,a=e.predeterminedSequence[r],i=e.squaredColors[a],t.next=5,e.timeout(e.timeBetweenRounds);case 5:return e.isActive[i]=!0,t.next=8,e.timeout(e.timeOfActiveSquared);case 8:return e.sounds[a].load(),e.sounds[a].play(),e.isActive[i]=!1,t.next=13,e.timeout(e.delay[e.difficult]);case 13:if(e.predeterminedSequence.length-1===r){t.next=18;break}return t.next=16,n(r+1);case 16:t.next=21;break;case 18:e.isDisabled.gameLocation=!1,e.isDisabled.startButton=!1,e.isDisabled.gameDifficult=!1;case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.next=8,n();case 8:case"end":return t.stop()}}),t)})))()}}},H=P,$=(n("cf25"),Object(_["a"])(H,a,i,!1,null,null,null)),M=$.exports;r["a"].config.productionTip=!1,r["a"].config.devtools=!0,new r["a"]({render:function(e){return e(M)}}).$mount("#app")},"78fc":function(e,t,n){e.exports=n.p+"media/4.36d5a722.mp3"},9133:function(e,t,n){"use strict";n("163f")},c335:function(e,t,n){"use strict";n("1618")},cf25:function(e,t,n){"use strict";n("fea6")},fea6:function(e,t,n){}});
//# sourceMappingURL=app.82fcb03d.js.map