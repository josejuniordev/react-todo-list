(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{341:function(e,a,t){"use strict";t.r(a);var r=t(102),n=t(1),i=t.n(n),l=t(257),m=t(342),o=t(225),s=t(348),c=t(249),u=t(251),d=t(343),f=t(350),E=t(107),b=t(336),p=t.n(b),g=t(44),h=t.n(g),T=l.a.Option;a.default=m.a.create()(function(e){var a=e.form,t=e.setTaskFormRef,b=e.resetTaskFormState,g=e.setResetTaskFormState,v=e.editableTask,j=e.tags,w=Object(n.useState)(!1),O=Object(r.a)(w,2),k=O[0],F=O[1],P=m.a.Item,q=a.getFieldDecorator;return Object(n.useEffect)(function(){t(a),g(!0)},[]),Object(n.useEffect)(function(){b&&(a.resetFields(),g(!1))},[b]),Object(n.useEffect)(function(){v&&Object(E.a)(500).then(function(){var e;e=v,F(!0),a.setFieldsValue({description:e.description,id:e.id,time:h()(e.time),durationTime:e.durationTime,rememberTime:e.rememberTime,tags:e.tags}),Object(E.a)(500).then(function(){F(!1)})})},[v]),i.a.createElement(o.a,{spinning:k},i.a.createElement(m.a,null,q("id")(i.a.createElement(s.a,{type:"hidden"})),i.a.createElement(c.a,{gutter:15},i.a.createElement(u.a,{sm:12},i.a.createElement(P,{label:"Descri\xe7\xe3o"},q("description",{initialValue:"",rules:[{required:!0,message:"Por favor informe uma descri\xe7\xe3o."}]})(i.a.createElement(s.a,null)))),i.a.createElement(u.a,{sm:12},i.a.createElement(P,{label:"Data"},q("time",{rules:[{required:!0,message:"Por favor informe a data e hora da tarefa"}]})(i.a.createElement(d.a,{locale:p.a,showTime:!0,placeholder:"Selecione..."}))))),i.a.createElement(c.a,{gutter:15},i.a.createElement(u.a,{sm:12},i.a.createElement(P,{label:"Dura\xe7\xe3o da tarefa (em horas)"},q("durationTime",{initialValue:1,rules:[{required:!0,message:"Por favor informe uma dura\xe7\xe3o"}]})(i.a.createElement(f.a,{min:1})))),i.a.createElement(u.a,{sm:12},i.a.createElement(P,{label:"Tempo para lembrete (em horas)"},q("rememberTime",{initialValue:0,rules:[{required:!0,message:"Por favor informe quantas horas antes voc\xea deseja ser lembrado"}]})(i.a.createElement(f.a,{min:0}))))),j&&j.length&&i.a.createElement(c.a,{gutter:15},i.a.createElement(u.a,{sm:24},i.a.createElement(P,{label:"Tags"},q("tags")(i.a.createElement(l.a,{mode:"multiple",style:{width:"100%"},placeholder:"Por favor selecione",optionFilterProp:"children"},j.map(function(e){return i.a.createElement(T,{key:e.id,value:e.id},e.name)}))))))))})}}]);
//# sourceMappingURL=9.23756336.chunk.js.map