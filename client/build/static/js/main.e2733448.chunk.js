(this["webpackJsonpreact-library"]=this["webpackJsonpreact-library"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n.n(c),o=(n(15),function(){return r.a.createElement("h2",null,"Expense Tracker")}),u=n(2),s=n.n(u),i=n(6),m=n(4),E=n(9),p=n(1),d=function(e,t){switch(t.type){case"GET":return Object(p.a)(Object(p.a)({},e),{},{loading:!1,transactions:t.payload});case"DELETE":return Object(p.a)(Object(p.a)({},e),{},{transactions:e.transactions.filter((function(e){return e._id!==t.payload}))});case"ADD":return Object(p.a)(Object(p.a)({},e),{},{transactions:[].concat(Object(E.a)(e.transactions),[t.payload])});case"GET_ERROR":return Object(p.a)(Object(p.a)({},e),{},{loading:!0,error:t.payload});default:return e}},f={transactions:[],error:null,loading:!0},b=Object(a.createContext)(f),v=function(e){var t=e.children,n=Object(a.useReducer)(d,f),c=Object(m.a)(n,2),l=c[0],o=c[1],u=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{fetch("/transaction/".concat(t),{method:"DELETE"}),o({type:"DELETE",payload:t})}catch(n){o({type:"GET_ERROR",payload:n})}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/transaction",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:n=e.sent,o({type:"ADD",payload:n.json()}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o({type:"GET_ERROR",payload:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/transaction");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,o({type:"GET",payload:n.data}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),o({type:"GET_ERROR",payload:e.t0});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(b.Provider,{value:{transactions:l.transactions,error:l.error,loading:l.loading,getTransactions:p,deleteTransaction:u,addTransaction:E}},t)},h=function(){var e=Object(a.useContext)(b).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",null,"$",e))},y=function(){var e=Object(a.useContext)(b).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},"+$",t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},"-$",n)))},O=function(e){var t=e.transaction,n=Object(a.useContext)(b).deleteTransaction,c=t.amount,l=c<0?"-":"+";return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"-"===l?"minus":"plus"},t.text," ",r.a.createElement("span",null,l,"$",Math.abs(c)),r.a.createElement("button",{onClick:function(){return n(t._id)},className:"delete-btn"},"x")))},x=function(){var e=Object(a.useContext)(b),t=e.transactions,n=e.getTransactions;return Object(a.useEffect)((function(){n()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{className:"list"},t.map((function(e){return r.a.createElement(O,{key:e._id,transaction:e})}))))},j=function(){var e=Object(a.useContext)(b).addTransaction,t=Object(a.useState)(""),n=Object(m.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(0),u=Object(m.a)(o,2),s=u[0],i=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e({text:c,amount:Number(s)})}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",value:c,onChange:function(e){l(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",value:s,onChange:function(e){i(e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn"},"Add transaction")))};var T=function(){return r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement("div",{className:"container"},r.a.createElement(v,null,r.a.createElement(h,null),r.a.createElement(y,null),r.a.createElement(x,null),r.a.createElement(j,null))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.e2733448.chunk.js.map