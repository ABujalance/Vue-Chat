(function(t){function e(e){for(var n,s,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==o[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},o={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/Vue-Chat/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var m=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"039a":function(t,e,a){"use strict";var n=a("7174"),o=a.n(n);o.a},"1e3e":function(t,e,a){},"1f73":function(t,e,a){"use strict";var n=a("dd48"),o=a.n(n);o.a},2625:function(t,e,a){"use strict";var n=a("b58e"),o=a.n(n);o.a},3666:function(t,e,a){"use strict";var n=a("8aa5"),o={apiKey:"AIzaSyC_jLcuRBFFCOjQ2vlmzApyjOXURXORjAo",authDomain:"abujalance-chat-ba7c3.firebaseapp.com",databaseURL:"https://abujalance-chat-ba7c3.firebaseio.com",projectId:"abujalance-chat-ba7c3",storageBucket:"abujalance-chat-ba7c3.appspot.com",messagingSenderId:"84867754979",appId:"1:84867754979:web:e21af78f78c111c82e0ed6"};n["initializeApp"](o),e["a"]=n},"41cb":function(t,e,a){"use strict";(function(t){var n=a("2b0e"),o=a("8c4f"),r=a("e6b0"),s=a("d403"),i=a("f5ed"),c=a("578a");n["default"].use(o["a"]);var u=[{path:"/chat/:nickname/:roomid/:roomname",name:"Chat",component:r["a"]},{path:"/room/:nickname",name:"RoomList",component:s["a"]},{path:"/add-room",name:"AddRoom",component:i["a"]},{path:"/",name:"Login",component:c["a"]}],m=new o["a"]({mode:"history",base:t,routes:u});e["a"]=m}).call(this,"/")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var n=a("2b0e"),o=a("5f5b");a("ab8b"),a("2dd8");n["default"].use(o["a"]);var r=a("123d"),s=a.n(r),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},c=[],u=a("2877"),m={},l=Object(u["a"])(m,i,c,!1,null,null,null),d=l.exports,f=a("41cb");a("4989");n["default"].config.productionTip=!1,n["default"].use(s.a),new n["default"]({router:f["a"],render:function(t){return t(d)}}).$mount("#app")},"578a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("h2",[t._v(" Login ")]),a("b-jumbotron",[a("b-form",{on:{submit:t.onSubmit}},[a("b-form-group",[a("b-form-input",{attrs:{id:"nickname",placeholder:"Enter your nickname"},model:{value:t.login.nickname,callback:function(e){t.$set(t.login,"nickname","string"===typeof e?e.trim():e)},expression:"login.nickname"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary",disabled:!t.login.nickname}},[t._v("Login")])],1)],1)],1)],1)},o=[],r=a("41cb"),s={name:"AddBoard",data:function(){return{login:{nickname:""}}},methods:{onSubmit:function(t){t.preventDefault(),r["a"].push({name:"RoomList",params:{nickname:this.login.nickname}})}}},i=s,c=(a("039a"),a("2877")),u=Object(c["a"])(i,n,o,!1,null,null,null);e["a"]=u.exports},7174:function(t,e,a){},b58e:function(t,e,a){},d403:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("h2",[t._v(" Room List "),a("b-link",{attrs:{href:"/add-room"}},[t._v("(Add Room)")])],1),a("b-list-group",t._l(t.rooms,(function(e){return a("b-list-group-item",{key:e.key,attrs:{to:{name:"Chat",params:{nickname:t.nickname,roomid:e.key,roomname:e.roomName}},action:""}},[t._v(" "+t._s(e.roomName)+" ")])})),1)],1)],1)},o=[],r=(a("4160"),a("159b"),a("3666")),s={name:"BoardList",data:function(){return{nickname:this.$route.params.nickname,rooms:[],errors:[],ref:r["a"].database().ref("chatrooms/")}},created:function(){var t=this;this.ref.on("value",(function(e){t.rooms=[],e.forEach((function(e){var a=e.val();a.key=e.key,t.rooms.push(a)}))}))}},i=s,c=(a("2625"),a("2877")),u=Object(c["a"])(i,n,o,!1,null,null,null);e["a"]=u.exports},dd48:function(t,e,a){},e6b0:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("h2",[t._v(" "+t._s(t.roomname)+" "),a("b-link",{on:{click:function(e){return t.exitChat()}}},[t._v("(Exit Chat)")])],1),a("div",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll"}],staticClass:"chat-box"},[a("b-list-group",t._l(t.chats,(function(e){return a("b-list-group-item",{key:e.key,staticClass:"chat-item"},["join"===e.type||"exit"===e.type?a("div",{staticClass:"chat-status text-center"},[a("span",{staticClass:"chat-date"},[t._v(t._s(e.sendDate))]),a("span",{staticClass:"chat-content-center"},[t._v(t._s(e.message))])]):a("div",[e.user===t.nickname?a("div",{staticClass:"chat-message text-right"},[a("div",{staticClass:"right-bubble"},[a("span",{staticClass:"msg-name"},[t._v("Me")]),a("span",{staticClass:"msg-date"},[t._v(t._s(e.sendDate))]),a("p",{attrs:{"text-wrap":""}},[t._v(t._s(e.message))])])]):t._e(),e.user!==t.nickname?a("div",{staticClass:"chat-message text-left",attrs:{"text-left":""}},[a("div",{staticClass:"left-bubble"},[a("span",{staticClass:"msg-name"},[t._v(t._s(e.user))]),a("span",{staticClass:"msg-date"},[t._v(t._s(e.sendDate))]),a("p",{attrs:{"text-wrap":""}},[t._v(t._s(e.message))])])]):t._e()])])})),1)],1),a("footer",{staticClass:"sticky-footer"},[a("b-form",{on:{submit:t.onSubmit}},[a("b-input-group",[a("b-form-input",{attrs:{id:"message",placeholder:"Enter your message"},model:{value:t.data.message,callback:function(e){t.$set(t.data,"message","string"===typeof e?e.trim():e)},expression:"data.message"}}),a("b-button",{attrs:{type:"submit",variant:"primary",disabled:!t.data.message}},[t._v("Send")])],1)],1)],1)])],1)},o=[],r=(a("4160"),a("159b"),a("3666")),s=a("41cb"),i={name:"Chat",data:function(){return{roomid:this.$route.params.roomid,roomname:this.$route.params.roomname,nickname:this.$route.params.nickname,data:{type:"",nickname:"",message:""},chats:[],errors:[],offStatus:!1}},created:function(){var t=this,e=r["a"].database().ref("chatrooms/"+this.roomid+"/chats").push();e.set({type:"join",user:this.nickname,message:this.nickname+" has joined this room.",sendDate:Date()}),this.data.message="",r["a"].database().ref("chatrooms/"+this.roomid+"/chats").on("value",(function(e){t.chats=[],e.forEach((function(e){var a=e.val();a.key=e.key,t.chats.push(a)}))}))},methods:{onSubmit:function(t){t.preventDefault();var e=r["a"].database().ref("chatrooms/"+this.roomid+"/chats").push();e.set({type:"newmsg",user:this.nickname,message:this.data.message,sendDate:Date()}),this.data.message=""},exitChat:function(){var t=r["a"].database().ref("chatrooms/"+this.roomid+"/chats").push();t.set({type:"exit",user:this.nickname,message:this.nickname+" has exited this room.",sendDate:Date()}),this.offStatus=!0,s["a"].go(-1)}}},c=i,u=(a("f196"),a("2877")),m=Object(u["a"])(c,n,o,!1,null,null,null);e["a"]=m.exports},f196:function(t,e,a){"use strict";var n=a("1e3e"),o=a.n(n);o.a},f5ed:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("h2",[t._v(" Add Room "),a("b-link",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("(Room List)")])],1),a("b-jumbotron",[a("b-form",{on:{submit:t.onSubmit}},[a("b-form-group",[a("b-form-input",{attrs:{id:"roomname",placeholder:"Enter Room Name"},model:{value:t.room.roomName,callback:function(e){t.$set(t.room,"roomName","string"===typeof e?e.trim():e)},expression:"room.roomName"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary",disabled:!t.room.roomName}},[t._v("Save")])],1)],1)],1)],1)},o=[],r=a("3666"),s=a("41cb"),i={name:"AddBoard",data:function(){return{ref:r["a"].database().ref("chatrooms/"),room:{roomName:""}}},methods:{onSubmit:function(t){t.preventDefault();var e=this.ref.push();e.set({roomName:this.room.roomName}),s["a"].go(-1).catch((function(t){alert("Error adding document: ",t)}))}}},c=i,u=(a("1f73"),a("2877")),m=Object(u["a"])(c,n,o,!1,null,null,null);e["a"]=m.exports}});
//# sourceMappingURL=app.9d846d78.js.map