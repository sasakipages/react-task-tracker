(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),o=n(8),s=n.n(o),i=(n(16),n(10)),d=n(6),l=n(2),u=n(5),j=n.n(u),b=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(c.jsx)("button",{style:{backgroundColor:t},className:"btn",onClick:r,children:n})};b.defaltProps={color:"steelblue"},b.protoType={text:j.a.string,color:j.a.string,onCLick:j.a.func.isRequired};var O=b,h=function(e){var t=e.title,n=e.onAdd,r=e.showAddTask;return Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("h1",{children:t}),Object(c.jsx)(O,{color:r?"red":"green",text:r?"Close":"Add",onClick:n})]})};h.defaultProps={title:"Task Tracker"};var x=h,f=n(9),m=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(c.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(c.jsxs)("h3",{children:[t.text,"",Object(c.jsx)(f.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(c.jsx)("p",{children:t.day})]})},k=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(c.jsx)(c.Fragment,{children:t.map((function(e){return Object(c.jsx)(m,{task:e,onDelete:n,onToggle:r},e.id)}))})},g=function(e){var t=e.onAdd,n=Object(r.useState)(""),a=Object(l.a)(n,2),o=a[0],s=a[1],i=Object(r.useState)(""),d=Object(l.a)(i,2),u=d[0],j=d[1],b=Object(r.useState)(!1),O=Object(l.a)(b,2),h=O[0],x=O[1];return Object(c.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),o?(t({text:o,day:u,reminder:h}),s(""),j(""),x(!1)):alert("please add task")},children:[Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{children:"Task"}),Object(c.jsx)("input",{type:"text",value:o,placeholder:"Add Task",onChange:function(e){return s(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{children:"Day & Time"}),Object(c.jsx)("input",{type:"text",value:u,placeholder:"Add Day & Time",onChange:function(e){return j(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-control form-control-check",children:[Object(c.jsx)("label",{children:"Set Reminder"}),Object(c.jsx)("input",{type:"checkbox",checked:h,value:h,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(c.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},p=function(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)([{id:1,text:"aaa",day:"123",reminder:!0},{id:2,text:"bbb",day:"234",reminder:!0},{id:3,text:"ccc",day:"1567",reminder:!1}]),s=Object(l.a)(o,2),u=s[0],j=s[1];return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(x,{onAdd:function(){return a(!n)},showAddTask:n}),n&&Object(c.jsx)(g,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(d.a)({id:t},e);j([].concat(Object(i.a)(u),[n]))}}),u.length>0?Object(c.jsx)(k,{tasks:u,onDelete:function(e){j(u.filter((function(t){return t.id!==e})))},onToggle:function(e){j(u.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{reminder:!t.reminder}):t})))}}):"No Tasks To Show"]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),v()}},[[19,1,2]]]);
//# sourceMappingURL=main.5c41b6a8.chunk.js.map