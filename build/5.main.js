webpackJsonp([5],{220:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=e(0),t=e(306),i=e(11),o=e(21),c=e(102),r=e(151),d=e(152),a=e(307),s=e(242),_=e(44);e.d(n,"WebRtcModuleNgFactory",function(){return m});var f=this&&this.__extends||function(){var l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var e in n)n.hasOwnProperty(e)&&(l[e]=n[e])};return function(n,e){function u(){this.constructor=n}l(n,e),n.prototype=null===e?Object.create(e):(u.prototype=e.prototype,new u)}}(),h=function(l){function n(n){return l.call(this,n,[r.a,d.a,a.a],[])||this}return f(n,l),Object.defineProperty(n.prototype,"_NgLocalization_7",{get:function(){return null==this.__NgLocalization_7&&(this.__NgLocalization_7=new i.NgLocaleLocalization(this.parent.get(u.LOCALE_ID))),this.__NgLocalization_7},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵi_8",{get:function(){return null==this.__ɵi_8&&(this.__ɵi_8=new o.a),this.__ɵi_8},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_FormBuilder_9",{get:function(){return null==this.__FormBuilder_9&&(this.__FormBuilder_9=new o.b),this.__FormBuilder_9},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new i.CommonModule,this._ɵba_1=new o.c,this._FormsModule_2=new o.d,this._ReactiveFormsModule_3=new o.e,this._IonicModule_4=new c.b,this._IonicPageModule_5=new c.c,this._WebRtcModule_6=new t.a,this._LAZY_LOADED_TOKEN_10=s.a,this._WebRtcModule_6},n.prototype.getInternal=function(l,n){return l===i.CommonModule?this._CommonModule_0:l===o.c?this._ɵba_1:l===o.d?this._FormsModule_2:l===o.e?this._ReactiveFormsModule_3:l===c.b?this._IonicModule_4:l===c.c?this._IonicPageModule_5:l===t.a?this._WebRtcModule_6:l===i.NgLocalization?this._NgLocalization_7:l===o.a?this._ɵi_8:l===o.b?this._FormBuilder_9:l===_.d?this._LAZY_LOADED_TOKEN_10:n},n.prototype.destroyInternal=function(){},n}(u["ɵNgModuleInjector"]),m=new u.NgModuleFactory(h,t.a)},242:function(l,n,e){"use strict";e(0),e(34),e(106);e.d(n,"a",function(){return u});var u=(this&&this.__decorate,this&&this.__metadata,function(){function l(l,n,e,u,t){var i=this;this.viewCtrl=l,this.navParams=n,this.wv=e,this.events=u,this.chRef=t,u.subscribe("incomingInvite",function(){return i.videoStatus="incomingInvite"}),u.subscribe("sendingInvite",function(){return i.videoStatus="sendingInvite"}),u.subscribe("connecting",function(){return i.videoStatus="connecting"}),u.subscribe("rejected",function(){return i.viewCtrl.dismiss()}),u.subscribe("failed",function(){return i.viewCtrl.dismiss()}),u.subscribe("incomingInvite-canceled",function(){return i.viewCtrl.dismiss()}),u.subscribe("participant_disconnected",function(){return i.viewCtrl.dismiss()})}return l.prototype.ionViewDidLoad=function(){this.videoStatus=this.navParams.get("type")},l.prototype.accept=function(){this.wv.accept()},l.prototype.reject=function(){this.wv.reject(),this.viewCtrl.dismiss()},l.prototype.cancelInvite=function(){this.wv.cancelInvite(),this.viewCtrl.dismiss()},l.prototype.disconnect=function(){this.wv.disconnect()},l}())},306:function(l,n,e){"use strict";e(0),e(34),e(242);e.d(n,"a",function(){return u});var u=(this&&this.__decorate,function(){function l(){}return l}())},307:function(l,n,e){"use strict";function u(l){return c["ɵvid"](0,[(l()(),c["ɵeld"](0,null,null,34,"div",[],null,null,null,null,null)),(l()(),c["ɵted"](null,["\n        "])),(l()(),c["ɵeld"](0,null,null,6,"div",[["class","user-info"]],null,null,null,null,null)),(l()(),c["ɵted"](null,["\n            "])),(l()(),c["ɵeld"](0,null,null,0,"img",[["src","assets/img/nih.png"]],null,null,null,null,null)),(l()(),c["ɵted"](null,["\n            "])),(l()(),c["ɵeld"](0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),c["ɵted"](null,["Hi~"])),(l()(),c["ɵted"](null,["\n        "])),(l()(),c["ɵted"](null,["\n\n        "])),(l()(),c["ɵeld"](0,null,null,23,"div",[["class","btn-holder"]],null,null,null,null,null)),(l()(),c["ɵted"](null,["\n            "])),(l()(),c["ɵeld"](0,null,null,9,"div",[["class","btn-place"],["margin-right",""]],null,null,null,null,null)),(l()(),c["ɵted"](null,["\n                "])),(l()(),c["ɵeld"](0,null,null,3,"button",[["color","danger"],["ion-button",""]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;if("click"===n){u=!1!==t.reject()&&u}return u},r.a,r.b)),c["ɵdid"](548864,null,0,d.a,[[8,""],a.c,c.ElementRef,c.Renderer],{color:[0,"color"]},null),(l()(),c["ɵeld"](0,null,0,1,"ion-icon",[["class","btn-close"],["color","light"],["name","md-call"],["role","img"]],[[2,"hide",null]],null,null,null,null)),c["ɵdid"](73728,null,0,s.a,[a.c,c.ElementRef,c.Renderer],{color:[0,"color"],name:[1,"name"]},null),(l()(),c["ɵted"](null,["\n                "])),(l()(),c["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),c["ɵted"](null,["拒绝"])),(l()(),c["ɵted"](null,["\n            "])),(l()(),c["ɵted"](null,["\n            "])),(l()(),c["ɵeld"](0,null,null,9,"div",[["class","btn-place"],["margin-left",""]],null,null,null,null,null)),(l()(),c["ɵted"](null,["\n                "])),(l()(),c["ɵeld"](0,null,null,3,"button",[["color","secondary"],["ion-button",""]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;if("click"===n){u=!1!==t.accept()&&u}return u},r.a,r.b)),c["ɵdid"](548864,null,0,d.a,[[8,""],a.c,c.ElementRef,c.Renderer],{color:[0,"color"]},null),(l()(),c["ɵeld"](0,null,0,1,"ion-icon",[["color","light"],["name","md-call"],["role","img"]],[[2,"hide",null]],null,null,null,null)),c["ɵdid"](73728,null,0,s.a,[a.c,c.ElementRef,c.Renderer],{color:[0,"color"],name:[1,"name"]},null),(l()(),c["ɵted"](null,["\n                "])),(l()(),c["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),c["ɵted"](null,["接听"])),(l()(),c["ɵted"](null,["\n            "])),(l()(),c["ɵted"](null,["\n        "])),(l()(),c["ɵted"](null,["\n    "]))],function(l,n){l(n,15,0,"danger");l(n,17,0,"light","md-call");l(n,26,0,"secondary");l(n,28,0,"light","md-call")},function(l,n){l(n,16,0,c["ɵnov"](n,17)._hidden),l(n,27,0,c["ɵnov"](n,28)._hidden)})}function t(l){return c["ɵvid"](0,[(l()(),c["ɵeld"](0,null,null,20,"div",[],null,null,null,null,null)),(l()(),c["ɵted"](null,["\n        "])),(l()(),c["ɵeld"](0,null,null,6,"div",[["class","user-info"]],null,null,null,null,null)),(l()(),c["ɵted"](null,["\n            "])),(l()(),c["ɵeld"](0,null,null,0,"img",[["src","assets/img/nih.png"]],null,null,null,null,null)),(l()(),c["ɵted"](null,["\n            "])),(l()(),c["ɵeld"](0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),c["ɵted"](null,["Hello~"])),(l()(),c["ɵted"](null,["\n        "])),(l()(),c["ɵted"](null,["\n        "])),(l()(),c["ɵeld"](0,null,null,9,"div",[["class","btn-holder"]],null,null,null,null,null)),(l()(),c["ɵted"](null,["\n            "])),(l()(),c["ɵeld"](0,null,null,6,"div",[["class","btn-place"],["margin-right",""]],null,null,null,null,null)),(l()(),c["ɵted"](null,["\n                "])),(l()(),c["ɵeld"](0,null,null,3,"button",[["color","danger"],["ion-button",""]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;if("click"===n){u=!1!==t.cancelInvite()&&u}return u},r.a,r.b)),c["ɵdid"](548864,null,0,d.a,[[8,""],a.c,c.ElementRef,c.Renderer],{color:[0,"color"]},null),(l()(),c["ɵeld"](0,null,0,1,"ion-icon",[["class","btn-close"],["color","light"],["name","md-call"],["role","img"]],[[2,"hide",null]],null,null,null,null)),c["ɵdid"](73728,null,0,s.a,[a.c,c.ElementRef,c.Renderer],{color:[0,"color"],name:[1,"name"]},null),(l()(),c["ɵted"](null,["\n            "])),(l()(),c["ɵted"](null,["\n        "])),(l()(),c["ɵted"](null,["\n    "]))],function(l,n){l(n,15,0,"danger");l(n,17,0,"light","md-call")},function(l,n){l(n,16,0,c["ɵnov"](n,17)._hidden)})}function i(l){return c["ɵvid"](0,[c["ɵqud"](201326592,1,{videoHolder:0}),(l()(),c["ɵeld"](0,null,null,29,"ion-content",[],[[2,"statusbar-padding",null]],null,null,_.a,_.b)),c["ɵdid"](2187264,null,0,f.a,[a.c,h.b,m.a,c.ElementRef,c.Renderer,g.a,v.a,c.NgZone,[2,p.a],[2,b.a]],null,null),(l()(),c["ɵted"](1,["\n\n    "])),(l()(),c["ɵted"](1,["\n    "])),(l()(),c["ɵand"](8388608,null,1,1,null,u)),c["ɵdid"](8192,null,0,y.NgIf,[c.ViewContainerRef,c.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),c["ɵted"](1,["\n\n    "])),(l()(),c["ɵted"](1,["\n    "])),(l()(),c["ɵand"](8388608,null,1,1,null,t)),c["ɵdid"](8192,null,0,y.NgIf,[c.ViewContainerRef,c.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),c["ɵted"](1,["\n\n    "])),(l()(),c["ɵted"](1,["\n    "])),(l()(),c["ɵeld"](0,null,1,16,"div",[["id","video-holder"],["style","display:none"]],null,null,null,null,null)),(l()(),c["ɵted"](null,["\n        "])),(l()(),c["ɵeld"](0,null,null,0,"video",[["autoplay",""],["id","remote"],["muted",""],["style","width:100%;height:100%;object-fit: cover"]],null,null,null,null,null)),(l()(),c["ɵted"](null,["\n        "])),(l()(),c["ɵeld"](0,null,null,0,"video",[["autoplay",""],["id","local"],["muted",""],["style","width:30%;height:30%;position:absolute;top:10px;right:10px;object-fit: cover"]],null,null,null,null,null)),(l()(),c["ɵted"](null,["\n\n        "])),(l()(),c["ɵeld"](0,null,null,9,"div",[["class","btn-holder"]],null,null,null,null,null)),(l()(),c["ɵted"](null,["\n            "])),(l()(),c["ɵeld"](0,null,null,6,"div",[["class","btn-place"],["margin-right",""]],null,null,null,null,null)),(l()(),c["ɵted"](null,["\n                "])),(l()(),c["ɵeld"](0,null,null,3,"button",[["color","danger"],["ion-button",""]],null,[[null,"click"]],function(l,n,e){var u=!0,t=l.component;if("click"===n){u=!1!==t.disconnect()&&u}return u},r.a,r.b)),c["ɵdid"](548864,null,0,d.a,[[8,""],a.c,c.ElementRef,c.Renderer],{color:[0,"color"]},null),(l()(),c["ɵeld"](0,null,0,1,"ion-icon",[["class","btn-close"],["color","light"],["name","md-call"],["role","img"]],[[2,"hide",null]],null,null,null,null)),c["ɵdid"](73728,null,0,s.a,[a.c,c.ElementRef,c.Renderer],{color:[0,"color"],name:[1,"name"]},null),(l()(),c["ɵted"](null,["\n            "])),(l()(),c["ɵted"](null,["\n        "])),(l()(),c["ɵted"](null,["\n    "])),(l()(),c["ɵted"](1,["\n\n"]))],function(l,n){var e=n.component;l(n,6,0,"incomingInvite"==e.videoStatus),l(n,10,0,"sendingInvite"==e.videoStatus);l(n,24,0,"danger");l(n,26,0,"light","md-call")},function(l,n){l(n,1,0,c["ɵnov"](n,2).statusbarPadding),l(n,25,0,c["ɵnov"](n,26)._hidden)})}function o(l){return c["ɵvid"](0,[(l()(),c["ɵeld"](0,null,null,1,"page-web-rtc",[],null,null,null,i,L)),c["ɵdid"](24576,null,0,w.a,[p.a,R.a,I.a,M.a,c.ChangeDetectorRef],null,null)],null,null)}var c=e(0),r=e(62),d=e(18),a=e(1),s=e(24),_=e(101),f=e(17),h=e(3),m=e(6),g=e(5),v=e(10),p=e(8),b=e(12),y=e(11),w=e(242),R=e(36),I=e(106),M=e(69);e.d(n,"a",function(){return N});var C=[],L=c["ɵcrt"]({encapsulation:2,styles:C,data:{}}),N=c["ɵccf"]("page-web-rtc",w.a,o,{},{},[])}});
//# sourceMappingURL=E:\ionic2\UIDemo\www\build\5.main.js.map