(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{231:function(e,t,a){"use strict";var n=a(1),c=a.n(n);t.a=Object(n.memo)(function(e){var t=e.title;return c.a.createElement("header",null,c.a.createElement("h1",null,t))})},351:function(e,t,a){"use strict";a.r(t);var n=a(16),c=a(102),l=a(1),o=a.n(l),r=a(231),i=a(66),s=a(18),u=a(345),m=a(344),d=a(31),E=(a(106),a(14)),f=a(261),b=a.n(f),k=a(44),O=a.n(k);var v=Object(l.memo)(function(e){var t=e.task,a=e.onToggleCheckItem,n=void 0===a?function(){}:a,c=e.onDeleteItem,l=void 0===c?function(){}:c,r=e.onEditItem,i=void 0===r?function(){}:r,s=O()(t.time),u=t.status===E.c.PENDING?"check":"stop",f=t.status===E.c.PENDING?"marcar como Feito!":"marcar como Pendente!";return o.a.createElement(m.a,{className:["task-card",t.status===E.c.DONE&&"--is-done",t.isLate()&&t.status!==E.c.DONE&&"--is-late"],key:t.id,title:s.format("DD/MM/YYYY"),actions:[o.a.createElement("span",{title:f},o.a.createElement(d.a,{className:"icon-state",type:u,onClick:function(){return n(t.id)}})),o.a.createElement("span",{title:"editar"},o.a.createElement(d.a,{className:"icon-edit",type:"edit",onClick:function(){return i(t.id)}})),o.a.createElement("span",{title:"excluir"},o.a.createElement(d.a,{className:"icon-delete",type:"delete",onClick:function(){return l(t.id)}}))],style:{width:"100%",marginBottom:15}},o.a.createElement(b.a,{style:{minHeight:"70px"},text:t.description,maxLine:3}))});var g=Object(l.memo)(function(e){var t=e.tasks,a=e.loading,n=e.onToggleCheckItemHandler,c=e.onDeleteItemHandler,r=e.onEditItemHandler;return o.a.createElement(l.Fragment,null,o.a.createElement(u.a,{grid:{gutter:16,sm:1,md:2,lg:3,xl:4},dataSource:t,loading:a,locale:{emptyText:"Nenhuma task foi encontrada"},renderItem:function(e){return o.a.createElement(u.a.Item,null,o.a.createElement(v,{task:e,onToggleCheckItem:n,onDeleteItem:c,onEditItem:r}))}}))}),j=a(238),p=a(347),T=a(225),N=a(52),I=a(349),h=a(107);var S=Object(l.memo)(function(e){var t=e.tasks,a=void 0===t?[]:t,n=e.onFilter,r=void 0===n?function(){}:n,i=Object(l.useState)(E.a.ALL),s=Object(c.a)(i,2),u=s[0],m=s[1],d=Object(l.useState)(E.a.ALL),f=Object(c.a)(d,2),b=f[0],k=f[1],O=Object(l.useState)(a),v=Object(c.a)(O,2),g=v[0],j=v[1];return Object(l.useEffect)(function(){N.a.filterBy(a,u).then(function(e){r(e),j(e)})},[u]),Object(l.useEffect)(function(){N.a.filterBy(g,b).then(function(e){r(e)})},[b]),o.a.createElement(l.Fragment,null,o.a.createElement("div",{className:"toolbar-area"},o.a.createElement(I.a.Group,{value:u,onChange:function(e){m(e.target.value),Object(h.a)(300).then(function(){k(E.a.ALL)})}},o.a.createElement(I.a.Button,{value:E.a.ALL},"Todos"),o.a.createElement(I.a.Button,{value:E.a.DONE},"Realizadas"),o.a.createElement(I.a.Button,{value:E.a.PENDING},"N\xe3o realizadas"))),o.a.createElement("div",null,o.a.createElement(I.a.Group,{value:b,onChange:function(e){k(e.target.value)}},o.a.createElement(I.a.Button,{value:E.a.ALL},"Todo o per\xedodo"),o.a.createElement(I.a.Button,{value:E.a.TODAY},"Hoje"),o.a.createElement(I.a.Button,{value:E.a.THIS_WEEK},"Essa semana"),o.a.createElement(I.a.Button,{value:E.a.THIS_MONTH},"Esse m\xeas"))))}),y=Object(l.lazy)(function(){return Promise.all([a.e(0),a.e(4),a.e(9)]).then(a.bind(null,341))});var D=Object(i.b)(function(e){return{tasks:e.tasks,tags:e.tags}},function(e){return{callInsertNewTask:function(t){e(Object(s.k)(t))},callUpdateTask:function(t){e(Object(s.m)(t))},callToggleTaskStatus:function(t){e(Object(s.l)(t))},callDeleteTask:function(t){e(Object(s.g)(t))}}})(function(e){var t=e.tasks,i=e.tags,s=e.callToggleTaskStatus,u=e.callDeleteTask,m=e.callInsertNewTask,d=e.callUpdateTask,E=a(273),f=t.data.sort(E("time")),b=Object(l.useState)(!1),k=Object(c.a)(b,2),O=k[0],v=k[1],N=Object(l.useState)(!1),I=Object(c.a)(N,2),h=I[0],D=I[1],C=Object(l.useState)(!1),H=Object(c.a)(C,2),L=H[0],w=H[1],B=Object(l.useState)(!1),F=Object(c.a)(B,2),x=F[0],A=F[1],G=Object(l.useState)(!1),P=Object(c.a)(G,2),Y=P[0],z=P[1],M=Object(l.useState)(f),R=Object(c.a)(M,2),J=R[0],U=R[1];function _(){D(!0),K(),w(!1)}function K(){A(!1),z(!1)}return o.a.createElement(l.Fragment,null,o.a.createElement(r.a,{title:"Todo list"}),o.a.createElement("div",{className:"toolbar-area text-align-right"},o.a.createElement(j.a,{onClick:function(){K(),w(!0)},type:"primary",icon:"plus"},"Nova task")),o.a.createElement(p.a,{visible:L,onCancel:_,title:"Novo item",style:{top:30},bodyStyle:{maxHeight:"65vh",overflow:"auto"},footer:[o.a.createElement(j.a,{key:"back",onClick:_},"Cancelar"),o.a.createElement(j.a,{key:"submit",type:"primary",onClick:function(){O&&O.validateFields(function(e,t){e||(t.time=t.time.toISOString(),x?d(t):m(t),_())})}},"Salvar")]},o.a.createElement(l.Suspense,{fallback:o.a.createElement(T.a,null)},o.a.createElement(y,{tags:i.data,editableTask:Y&&Object(n.a)({},Y),setTaskFormRef:v,resetTaskFormState:h,setResetTaskFormState:D}))),o.a.createElement("div",{className:"toolbar-area"},o.a.createElement(S,{tasks:f,onFilter:U})),o.a.createElement(g,{tasks:J,loading:t.loading.fetch,onToggleCheckItemHandler:function(e){s(e)},onDeleteItemHandler:function(e){u(e)},onEditItemHandler:function(e){A(e),z(t.data.find(function(t){return t.id===e})),w(!0)}}))});t.default=Object(l.memo)(D)}}]);
//# sourceMappingURL=8.bfb57915.chunk.js.map