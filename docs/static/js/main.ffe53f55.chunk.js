(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{106:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(21),r=n(24),c=n(14),s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.c.PENDING,n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],o=arguments.length>6&&void 0!==arguments[6]&&arguments[6],f=arguments.length>7&&void 0!==arguments[7]&&arguments[7];Object(a.a)(this,e);var l=o?new Date(o):new Date,d=l.toISOString();this.status=t,this.description=n,this.time=r,this.durationTime=s,this.rememberTime=i,this.tags=u,this.createdAt=d,this.id=f?+f:l.getTime()}return Object(r.a)(e,[{key:"isLate",value:function(){return+new Date(this.time)-+new Date<0}}]),e}()},107:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e){return new Promise(function(t){setTimeout(t,e)})}},137:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(21),r=function e(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(a.a)(this,e);var c=n?new Date(n):new Date,s=c.toISOString();this.name=t,this.createdAt=s,this.id=r?+r:c.getTime()}},14:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"b",function(){return r}),n.d(t,"a",function(){return c});var a={PENDING:"pending",DONE:"done"},r={LOAD_TASK_ERROR:"N\xe3o foi poss\xedvel carregar as tasks",ERROR_ON_TOGGLE_STATUS:"N\xe3o foi poss\xedvel atualizar o status deste item",ERROR_ON_DELETE_TASK:"N\xe3o foi poss\xedvel remover este item da lista",UPDATE_TASK_SUCCESSFULLY:"Item atualizado com sucesso",DELETE_TASK_SUCCESSFULLY:"Item removido com sucesso",INSERT_NEW_TASK_SUCCESSFULLY:"Item inserido com sucesso",INSERT_NEW_TASK_ERROR:"O item n\xe3o pode ser inserido.",UPDATE_TASK_ERROR:"O item n\xe3o pode ser atualizado.",FETCH_TASKS_FAILED:"N\xe3o foi poss\xedvel obter a lista de items"},c={ALL:"all",DONE:"done",PENDING:"pending",TODAY:"today",THIS_WEEK:"thisweek",THIS_MONTH:"thismonth"}},152:function(e,t,n){e.exports=n(224)},157:function(e,t,n){},158:function(e,t,n){},18:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"d",function(){return u}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return f}),n.d(t,"e",function(){return l}),n.d(t,"h",function(){return E}),n.d(t,"j",function(){return m}),n.d(t,"i",function(){return p}),n.d(t,"n",function(){return O}),n.d(t,"l",function(){return b}),n.d(t,"g",function(){return h}),n.d(t,"m",function(){return v}),n.d(t,"k",function(){return T});var a=n(16),r="FETCH_TASKS",c="FETCH_TASKS_SUCCESS",s="FETCH_TASKS_FAILED",i="UPDATE_TASKS_ON_LIST",u="TOGGLE_TASK_STATUS",o="DELETE_TASK",f="INSERT_NEW_TASK",l="UPDATE_TASK",d={data:[],errors:{fetch:[]},loading:{fetch:!1}};function E(){return{type:r}}function m(e){return{type:c,tasks:e}}function p(e){return{type:s,errors:e}}function O(e){return{type:i,tasks:e}}function b(e){return{type:u,taskId:e}}function h(e){return{type:o,taskId:e}}function v(e){return{type:l,values:e}}function T(e){return{type:f,values:e}}t.f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,n=t.type,u=t.tasks,o=t.errors;switch(n){case r:return Object(a.a)({},e,{loading:Object(a.a)({},e.loading,{fetch:!0})});case c:return Object(a.a)({},e,{data:u,loading:Object(a.a)({},e.loading,{fetch:!1})});case s:return Object(a.a)({},e,{loading:Object(a.a)({},e.loading,{fetch:!1}),errors:Object(a.a)({},e.errors,{fetch:o})});case i:return Object(a.a)({},e,{data:u});default:return e}}},224:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(12),s=n.n(c),i=(n(157),n(102)),u=(n(158),n(60)),o=n(43),f=n(226),l=n(227),d=n(31),E=n(225),m=n(66),p=n(18),O=n(25),b=Object(a.lazy)(function(){return n.e(6).then(n.bind(null,346))}),h=Object(a.lazy)(function(){return Promise.all([n.e(5),n.e(8)]).then(n.bind(null,351))}),v=Object(a.lazy)(function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,352))}),T=f.a.Sider,g=f.a.Content;var S=Object(m.b)(function(e){return{tasks:e.tasks}},function(e){return{callFetchTasks:function(){e(Object(p.h)())},callFetchTags:function(){e(Object(O.f)())}}})(function(e){var t=e.callFetchTasks,n=e.callFetchTags,c=window.location.pathname.replace("/","")||"home",s=Object(a.useState)(!1),m=Object(i.a)(s,2),p=m[0],O=m[1];return Object(a.useEffect)(function(){p||(t(),n(),O(!0))},[p]),r.a.createElement(u.a,null,r.a.createElement(f.a,null,r.a.createElement(T,null,r.a.createElement("div",{className:"logo"}),r.a.createElement(l.a,{theme:"dark",defaultSelectedKeys:[c],mode:"inline"},r.a.createElement(l.a.Item,{key:"home"},r.a.createElement(d.a,{type:"pie-chart"}),r.a.createElement(u.b,{to:"/"},r.a.createElement("span",null,"Dashboard"))),r.a.createElement(l.a.Item,{key:"todo-list"},r.a.createElement(d.a,{type:"desktop"}),r.a.createElement(u.b,{to:"/todo-list"},r.a.createElement("span",null,"Todo list"))),r.a.createElement(l.a.Item,{key:"tags"},r.a.createElement(d.a,{type:"tags"}),r.a.createElement(u.b,{to:"/tags"},r.a.createElement("span",null,"Tags"))))),r.a.createElement(f.a,null,r.a.createElement(g,{className:"content"},r.a.createElement("article",{className:"content-body"},r.a.createElement(a.Suspense,{fallback:r.a.createElement(E.a,null)},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:function(){return r.a.createElement(b,{appInitialized:p})}}),r.a.createElement(o.a,{path:"/todo-list",component:function(){return r.a.createElement(h,{appInitialized:p})}}),r.a.createElement(o.a,{path:"/tags",component:function(){return r.a.createElement(v,{appInitialized:p})}}))))))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=n(79);n(78).a.initialize(),s.a.render(r.a.createElement(m.a,{store:_.a},r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},25:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return u}),n.d(t,"c",function(){return o}),n.d(t,"f",function(){return l}),n.d(t,"h",function(){return d}),n.d(t,"g",function(){return E}),n.d(t,"j",function(){return m}),n.d(t,"e",function(){return p}),n.d(t,"i",function(){return O});var a=n(16),r="FETCH_TAGS",c="FETCH_TAGS_SUCCESS",s="FETCH_TAGS_FAILED",i="UPDATE_TAGS_ON_LIST",u="DELETE_TAG",o="INSERT_NEW_TAG",f={data:[],errors:{fetch:[]},loading:{fetch:!1}};function l(){return{type:r}}function d(e){return{type:c,tags:e}}function E(e){return{type:s,errors:e}}function m(e){return{type:i,tags:e}}function p(e){return{type:u,tagId:e}}function O(e){return{type:o,values:e}}t.d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,n=t.type,u=t.tags,o=t.errors;switch(n){case r:return Object(a.a)({},e,{loading:Object(a.a)({},e.loading,{fetch:!0})});case c:return Object(a.a)({},e,{data:u,loading:Object(a.a)({},e.loading,{fetch:!1})});case s:return Object(a.a)({},e,{loading:Object(a.a)({},e.loading,{fetch:!1}),errors:Object(a.a)({},e.errors,{fetch:o})});case i:return Object(a.a)({},e,{data:u});default:return e}}},52:function(e,t,n){"use strict";var a=n(21),r=n(24),c=n(14),s=n(106),i=n(93),u=n(79),o=n(77),f=n(44),l=n.n(f),d=n(78),E=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"toggleStatus",value:function(e){return e===c.c.DONE?c.c.PENDING:c.c.DONE}},{key:"taskFactory",value:function(e){return new s.a(e.status||c.c.PENDING,e.description,e.time,e.durationTime,e.rememberTime,e.tags,e.createdAt,e.id)}},{key:"filterBy",value:function(e,t){var n=i.a[t]?i.a[t](e):e;return new Promise(function(e){e(n)})}},{key:"initializeNotifier",value:function(){window.setInterval(function(){var e=u.a.getState().tasks,t=+new Date;e.data.forEach(function(e){var n=l()(e.time),a=l()(e.time).subtract(e.rememberTime,"hours").valueOf();t-a>=0&&d.a.notify("Lembrete de tarefa","A sua tarefa em ".concat(n.format("DD/MM/YYYY [\xe0s] hh:mm")," se aproxima"))})},o.a)}}]),e}();t.a=E},77:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a=1e3,r=60*a},78:function(e,t,n){"use strict";var a=n(21),r=n(24),c=n(107),s=n(77),i=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"initialize",value:function(){"granted"!==this.Notification.permission&&this.requestPermission()}},{key:"requestPermission",value:function(){this.Notification.requestPermission()}},{key:"notify",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4,a=new this.Notification(e,{body:t});Object(c.a)(s.b*n).then(a.close.bind(a))}}]),e}();i.Notification=window.Notification,t.a=i},79:function(e,t,n){"use strict";var a=n(30),r=n(143),c=n(18),s=n(25),i=Object(a.c)({tasks:c.f,tags:s.d}),u=n(8),o=n.n(u),f=n(10),l=n(59),d=n(228),E=n(21),m=n(24),p="https://5c9122c7c6354a0014037723.mockapi.io",O="".concat(p,"/tasks"),b="".concat(p,"/tags"),h=function(){function e(){Object(E.a)(this,e)}return Object(m.a)(e,null,[{key:"fetchTasks",value:function(){return new Promise(function(e,t){fetch(O).then(function(e){return e.json()}).then(e).catch(t)})}}]),e}(),v=n(14),T=n(52),g=o.a.mark(L),S=o.a.mark(x),_=o.a.mark(I),j=o.a.mark(F),w=o.a.mark(U),A=o.a.mark(C),k=o.a.mark(G),N=o.a.mark(P),D=o.a.mark(K),R=o.a.mark(Y),y=o.a.mark(z);function L(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(f.b)(h.fetchTasks);case 3:return e=t.sent,t.next=6,e.map(function(e){return T.a.taskFactory(e)});case 6:return e=t.sent,t.next=9,Object(f.d)(Object(c.j)(e));case 9:T.a.initializeNotifier(),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),Object(f.d)(Object(c.i)(t.t0)),d.a.error({message:v.b.FETCH_TASKS_FAILED});case 16:case"end":return t.stop()}},g,null,[[0,12]])}function x(e){var t,n,a;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.taskId,r.prev=1,n=de.getState(),a=n.tasks.data.map(function(e){return e.id===t&&(e.status=T.a.toggleStatus(e.status)),e}),r.next=6,Object(f.d)(Object(c.n)(a));case 6:d.a.success({message:v.b.UPDATE_TASK_SUCCESSFULLY}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),d.a.warning({message:v.b.ERROR_ON_TOGGLE_STATUS});case 12:case"end":return r.stop()}},S,null,[[1,9]])}function I(e){var t,n,a;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.taskId,r.prev=1,n=de.getState(),a=n.tasks.data.filter(function(e){return e.id!==t}),r.next=6,Object(f.d)(Object(c.n)(a));case 6:d.a.success({message:v.b.UPDATE_TASK_SUCCESSFULLY}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),d.a.warning({message:v.b.ERROR_ON_DELETE_TASK});case 12:case"end":return r.stop()}},_,null,[[1,9]])}function F(e){var t,n,a,r;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.values,s.prev=1,n=de.getState(),a=T.a.taskFactory(t),(r=Object(l.a)(n.tasks.data)).push(a),s.next=8,Object(f.d)(Object(c.n)(r));case 8:d.a.success({message:v.b.INSERT_NEW_TASK_SUCCESSFULLY}),s.next=14;break;case 11:s.prev=11,s.t0=s.catch(1),d.a.warning({message:v.b.INSERT_NEW_TASK_ERROR});case 14:case"end":return s.stop()}},j,null,[[1,11]])}function U(e){var t,n,a,r;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.values,s.prev=1,n=de.getState(),a=T.a.taskFactory(t),r=(r=Object(l.a)(n.tasks.data)).map(function(e){return e.id===t.id?a:e}),s.next=8,Object(f.d)(Object(c.n)(r));case 8:d.a.success({message:v.b.UPDATE_TASK_SUCCESSFULLY}),s.next=14;break;case 11:s.prev=11,s.t0=s.catch(1),d.a.warning({message:v.b.UPDATE_TASK_ERROR});case 14:case"end":return s.stop()}},w,null,[[1,11]])}function C(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.e)(c.b,L);case 2:case"end":return e.stop()}},A)}function G(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.e)(c.d,x);case 2:case"end":return e.stop()}},k)}function P(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.e)(c.a,I);case 2:case"end":return e.stop()}},N)}function K(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.e)(c.c,F);case 2:case"end":return e.stop()}},D)}function Y(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.e)(c.e,U);case 2:case"end":return e.stop()}},R)}function z(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)([Object(f.c)(C),Object(f.c)(G),Object(f.c)(P),Object(f.c)(K),Object(f.c)(Y)]);case 2:case"end":return e.stop()}},y)}var H=function(){function e(){Object(E.a)(this,e)}return Object(m.a)(e,null,[{key:"fetchTags",value:function(){return new Promise(function(e,t){fetch(b).then(function(e){return e.json()}).then(e).catch(t)})}}]),e}(),W={LOAD_TAG_ERROR:"N\xe3o foi poss\xedvel carregar as tags",ERROR_ON_TOGGLE_STATUS:"N\xe3o foi poss\xedvel atualizar o status desta tag",ERROR_ON_DELETE_TAG:"N\xe3o foi poss\xedvel remover esta tag da lista",UPDATE_TAG_SUCCESSFULLY:"Tag atualizada com sucesso",DELETE_TAG_SUCCESSFULLY:"Tag removida com sucesso",INSERT_NEW_TAG_SUCCESSFULLY:"Tag inserida com sucesso",INSERT_NEW_TAG_ERROR:"A tag n\xe3o pode ser inserida.",UPDATE_TAG_ERROR:"A tag n\xe3o pode ser atualizada.",FETCH_TAGS_FAILED:"N\xe3o foi poss\xedvel obter a lista de tags"},M=n(137),q=function(){function e(){Object(E.a)(this,e)}return Object(m.a)(e,null,[{key:"tagFactory",value:function(e){return new M.a(e.name,e.createdAt,e.id)}}]),e}(),B=o.a.mark(ee),J=o.a.mark(te),X=o.a.mark(ne),V=o.a.mark(ae),$=o.a.mark(re),Q=o.a.mark(ce),Z=o.a.mark(se);function ee(){var e;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(f.b)(H.fetchTags);case 3:return e=t.sent,t.next=6,e.map(function(e){return q.tagFactory(e)});case 6:return e=t.sent,t.next=9,Object(f.d)(Object(s.h)(e));case 9:t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),Object(f.d)(Object(s.g)(t.t0)),d.a.error({message:W.FETCH_TAGS_FAILED});case 15:case"end":return t.stop()}},B,null,[[0,11]])}function te(e){var t,n,a;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.tagId,r.prev=1,n=de.getState(),a=n.tags.data.filter(function(e){return e.id!==t}),r.next=6,Object(f.d)(Object(s.j)(a));case 6:d.a.success({message:W.DELETE_TAG_SUCCESSFULLY}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),d.a.warning({message:W.ERROR_ON_DELETE_TAG});case 12:case"end":return r.stop()}},J,null,[[1,9]])}function ne(e){var t,n,a,r;return o.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.values,c.prev=1,n=de.getState(),a=q.tagFactory(t),(r=Object(l.a)(n.tags.data)).push(a),c.next=8,Object(f.d)(Object(s.j)(r));case 8:d.a.success({message:W.INSERT_NEW_TAG_SUCCESSFULLY}),c.next=15;break;case 11:c.prev=11,c.t0=c.catch(1),d.a.warning({message:W.INSERT_NEW_TAG_ERROR}),console.log(c.t0);case 15:case"end":return c.stop()}},X,null,[[1,11]])}function ae(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.e)(s.b,ee);case 2:case"end":return e.stop()}},V)}function re(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.e)(s.a,te);case 2:case"end":return e.stop()}},$)}function ce(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.e)(s.c,ne);case 2:case"end":return e.stop()}},Q)}function se(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)([Object(f.c)(ae),Object(f.c)(re),Object(f.c)(ce)]);case 2:case"end":return e.stop()}},Z)}var ie=o.a.mark(ue);function ue(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)([Object(f.c)(z),Object(f.c)(se)]);case 2:case"end":return e.stop()}},ie)}var oe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,fe=Object(r.a)(),le=Object(a.e)(i,oe(Object(a.a)(fe)));fe.run(ue);var de=t.a=le},93:function(e,t,n){"use strict";var a=n(14),r=n(44),c=n.n(r),s={};s[a.a.ALL]=function(e){return e},s[a.a.DONE]=function(e){return e.filter(function(e){return e.status===a.c.DONE})},s[a.a.PENDING]=function(e){return e.filter(function(e){return e.status===a.c.PENDING})},s[a.a.TODAY]=function(e){var t=new Date;return e.filter(function(e){var n=new Date(e.time);return t.getDate()===n.getDate()&&t.getMonth()===n.getMonth()&&t.getFullYear()===n.getFullYear()})},s[a.a.THIS_WEEK]=function(e){var t=(new Date).getDay(),n=t,a=7-t,r=c()().subtract(n,"days").valueOf(),s=c()().add(a,"days").valueOf();return e.filter(function(e){var t=+new Date(e.time);return t>=r&&t<=s})},s[a.a.THIS_MONTH]=function(e){var t=new Date,n=t.getMonth(),a=t.getFullYear();return e.filter(function(e){var t=new Date(e.time);return t.getFullYear()===a&&t.getMonth()===n})},t.a=s}},[[152,2,3]]]);
//# sourceMappingURL=main.ffe53f55.chunk.js.map