(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),u=t.n(c),o=t(2),l=function(e){var n=e.getFilteredPersons,t=e.removePerson;return r.a.createElement(r.a.Fragment,null,n().map((function(e){return r.a.createElement("div",{key:e.name},e.name," ",e.number," ",r.a.createElement("button",{onClick:function(){return t(e)}},"delete"))})))},i=function(e){var n=e.newName,t=e.newNumber,a=e.handlePersonForm,c=e.handleNameChange,u=e.handleNumberChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"add a new"),r.a.createElement("form",{onSubmit:a},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:c})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:t,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},m=function(e){var n=e.filter,t=e.handleFilter;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},d=t(3),f=t.n(d),s="/api/persons",h=function(){return f.a.get(s).then((function(e){return e.data}))},b=function(e){return f.a.post(s,e).then((function(e){return e.data}))},v=function(e,n){return f.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},E=function(e){return f.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},p=function(e){var n=e.message,t=e.type;return null===n||null===t?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",{className:t},n)},g=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),d=Object(o.a)(u,2),f=d[0],s=d[1],g=Object(a.useState)(""),w=Object(o.a)(g,2),j=w[0],O=w[1],C=Object(a.useState)(""),N=Object(o.a)(C,2),F=N[0],k=N[1],y=Object(a.useState)(null),P=Object(o.a)(y,2),S=P[0],L=P[1],I=Object(a.useState)(null),D=Object(o.a)(I,2),J=D[0],x=D[1];Object(a.useEffect)((function(){h().then((function(e){c(e)}))}),[]);var A=function(){b({name:f,number:j}).then((function(e){c(t.concat(e)),T("Added ".concat(f),"success")}))},B=function(e){var n={name:f,number:j};window.confirm("".concat(f," is already added to phonebook, replace the old number with a new one?"))&&v(e.id,n).then((function(n){c(t.map((function(t){return t.id===e.id?n:t}))),T("".concat(e.name," updated"),"success")})).catch((function(n){T("Information of ".concat(e.name," has already been removed from the server"),"error"),c(t.filter((function(n){return n.id!==e.id})))}))},T=function(e,n){L(e),x(n),setTimeout((function(){L(null),x(null)}),5e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(p,{message:S,type:J}),r.a.createElement(m,{filter:F,handleFilter:function(e){k(e.target.value)}}),r.a.createElement(i,{newName:f,newNumber:j,handlePersonForm:function(e){e.preventDefault();var n=t.find((function(e){return e.name===f}));n?B(n):A(),s(""),O("")},handleNameChange:function(e){s(e.target.value)},handleNumberChange:function(e){O(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(l,{getFilteredPersons:function(){return console.log(t),t.filter((function(e){return e.name.toLowerCase().includes(F.toLowerCase())||e.number.toLowerCase().includes(F.toLowerCase())}))},removePerson:function(e){window.confirm("Delete ".concat(e.name," ?"))&&E(e.id).then((function(){c(t.filter((function(n){return n.id!==e.id}))),T("".concat(e.name," deleted"),"success")})).catch((function(n){T("Information of ".concat(e.name," has already been removed from the server"),"error"),c(t.filter((function(n){return n.id!==e.id})))}))}}))};t(36);u.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.33b2e5d3.chunk.js.map