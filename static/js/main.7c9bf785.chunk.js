(this.webpackJsonpauctioneer=this.webpackJsonpauctioneer||[]).push([[0],{139:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(20),r=c(44),s=c(13),i=c(72),o=(c(86),c(143),c(144),i.a.initializeApp({apiKey:"AIzaSyB2F4R4KkxUwb4GFKs7twRhiHS5i-i51D4",authDomain:"scopic-73416.firebaseapp.com",projectId:"scopic-73416",storageBucket:"scopic-73416.appspot.com",messagingSenderId:"475263107333",appId:"1:475263107333:web:27180a036864e16618376c"})),l=(i.a.firestore.FieldValue.serverTimestamp,o.firestore()),d=(o.storage(),o.auth()),u=c(3),j=Object(n.createContext)(),b=function(e){var t=e.children,c=Object(n.useState)(null),a=Object(s.a)(c,2),r=a[0],i=a[1],o=Object(n.useState)(!0),b=Object(s.a)(o,2),O=b[0],x=b[1],h=Object(n.useState)(""),m=Object(s.a)(h,2),f=m[0],v=m[1];return Object(n.useEffect)((function(){return d.onAuthStateChanged((function(e){i(e),x(!1)}))}),[]),Object(n.useEffect)((function(){var e=setTimeout((function(){return v("")}),5e3);return function(){return clearTimeout(e)}}),[f]),Object(u.jsx)(j.Provider,{value:{currentUser:r,register:function(e,t){return d.createUserWithEmailAndPassword(e,t)},login:function(e,t){return d.signInWithEmailAndPassword(e,t)},logout:function(){return d.signOut()},bidAuction:function(e){return l.collection("auctions").doc(e).update({acuerdo:!0})},noteContext:function(e,t){return l.collection("auctions").doc(e).update({note:t})},endAuction:function(e){return l.collection("auctions").doc(e).delete()},globalMsg:f},children:!O&&t})},O=function(e){var t=e.item,c=Object(n.useContext)(j).currentUser,a=new Date(t.duration).toLocaleTimeString("es-CL"),r=new Date(t.duration).toLocaleDateString("es-CL",{weekday:"short",year:"numeric",month:"short",day:"numeric"});return Object(u.jsx)("div",{className:"col",children:c&&Object(u.jsx)("div",{className:"card shadow-sm",children:Object(u.jsxs)("div",{className:"card-body p-4 py-2",children:[Object(u.jsxs)("div",{className:"border border-success row",children:[Object(u.jsx)("span",{className:"bg-success p-1 col-md-3",children:Object(u.jsxs)("span",{className:"text-white px-2",children:[" ",t.categorie," "]})}),Object(u.jsxs)("span",{className:"p-1 col-md-2",children:[Object(u.jsx)("span",{className:"text-secondary ",children:"KL "})," ",t.taxista]}),Object(u.jsxs)("span",{className:" p-1 col-md-2",children:[Object(u.jsx)("span",{className:"text-secondary ",children:"Unidad "})," ",t.unidad]}),Object(u.jsx)("span",{className:"col-md-3 p-1",children:Object(u.jsxs)("span",{children:[r,", ",a.slice(0,-3)]})}),Object(u.jsxs)("span",{className:" col-md-2 p-1",children:[Object(u.jsx)("span",{className:"text-secondary ",children:"Costo"})," ",t.costo]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"text-secondary",children:"Encargado"})," ",t.email.slice(0,-10)]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"text-secondary",children:"Descripci\xf3n"})," ",t.desc]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"text-secondary",children:"Comentarios"})," ",null===t||void 0===t?void 0:t.coments]})]})})})},x=c(73),h=c.n(x),m=(c(90),c(74)),f=(c(91),c(78));Object(x.registerLocale)("es",f.a);var v=function(){var e=Object(n.useContext)(j),t=e.currentUser,c=e.globalMsg,a=function(e){var t=Object(n.useState)([]),c=Object(s.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){var t=l.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(m.a)(Object(m.a)({},e.data()),{},{id:e.id}))})),r(t)}));return function(){return t()}}),[e]),{docs:a}}("auctions").docs,i=!!t&&t.email;var o=Object(n.useState)(),d=Object(s.a)(o,2),b=d[0],x=d[1],f=Object(n.useState)(),v=Object(s.a)(f,2),p=v[0],g=v[1],N=Object(n.useState)([]),y=Object(s.a)(N,2),w=y[0],C=y[1],S=w.filter((function(e){return e})).length,k=Object(n.useState)(),L=Object(s.a)(k,2),E=L[0],R=L[1],D=Object(n.useState)([]),F=Object(s.a)(D,2),A=(F[0],F[1]),I=Object(n.useState)(),M=Object(s.a)(I,2),T=M[0],U=M[1],q=Object(n.useState)([]),P=Object(s.a)(q,2),B=P[0],G=P[1],H=null===T||void 0===T?void 0:T.sort((function(e,t){return t.duration-e.duration})),K=Object(n.useState)(!0),z=Object(s.a)(K,2),J=z[0],W=z[1],$=Object(n.useState)(!0),V=Object(s.a)($,2),Q=V[0],X=V[1],Y=Object(n.useState)(!0),Z=Object(s.a)(Y,2),_=Z[0],ee=Z[1],te=Object(n.useState)(!0),ce=Object(s.a)(te,2),ne=ce[0],ae=ce[1],re=Object(n.useState)([]),se=Object(s.a)(re,2),ie=se[0],oe=se[1];function le(e,t){var c=e.indexOf(t);c>-1&&e.splice(c,1)}Object(n.useEffect)((function(){for(var e=function(e){var t=H.filter((function(t){return t.categorie!==ie[e]}));H=t},t=0;t<ie.length;t++)e(t);G(H)}),[ie,J,Q,_,ne]);var de=w;T?(de=T.filter((function(e){return!1!==e})),B.length>0&&(de=B.filter((function(e){return!1!==e})))):w&&(de=w.sort((function(e,t){return t.duration-e.duration})));var ue=[];return w.length>0&&(ue=de),console.log(T),Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)("div",{style:{zIndex:"9999999"},className:"text-center w-50 position-fixed top-10 start-50 translate-middle",children:c&&Object(u.jsx)(Alert,{variant:"danger",children:c})}),i&&Object(u.jsxs)("div",{className:"row bg-secondary pt-4 ",children:[Object(u.jsxs)("div",{className:w.length>0?"text-white bg-primary mb-3 p-1 row":"d-none",children:[Object(u.jsxs)("span",{style:{marginLeft:"20px"},className:"col-md-4",children:[Object(u.jsx)("span",{className:"p-1",children:S})," Trabajos el Dia : ",b]}),Object(u.jsxs)("span",{style:{marginLeft:"50px"},className:(null===T||void 0===T?void 0:T.length)>0?"col-md-3":"d-none",children:[Object(u.jsxs)("span",{className:"bg-dark p-1",children:["$ ",null===T||void 0===T?void 0:T.filter((function(e){return!1!==e})).reduce((function(e,t){return e+(null===t||void 0===t?void 0:t.costo)}),0).toFixed(2)]})," ","En taller para la unidad ",E]}),Object(u.jsxs)("span",{style:{marginLeft:"50px"},className:(null===B||void 0===B?void 0:B.length)>0?"col-md-3":"d-none",children:[Object(u.jsxs)("span",{className:"bg-dark p-1",children:["$ ",null===B||void 0===B?void 0:B.filter((function(e){return!1!==e})).reduce((function(e,t){return e+(null===t||void 0===t?void 0:t.costo)}),0).toFixed(2)]})," ","En servicios Mostrados"]})]}),Object(u.jsx)("div",{className:"col-1"}),Object(u.jsx)("div",{className:(null===T||void 0===T?void 0:T.length)>0?"d-none":"col-md-3 text-center mb-4 me-5",children:Object(u.jsx)(h.a,{selected:p,onChange:function(e){g(e);var t=null===e||void 0===e?void 0:e.getTime(),c=t+864e5,n=new Date(t).toLocaleDateString("es-CL",{weekday:"short",year:"numeric",month:"short",day:"numeric"});x(n);var r=a.map((function(e,n){if(e.duration>t&&e.duration<c)return e}));C(r)},onFocus:function(){C([])},locale:"es",className:"pickers mb-3 form-control mt-2 w-100 bg-secondary",dateFormat:"dd 'de' MMMM 'de' yyyy"})}),Object(u.jsx)("div",{className:(null===w||void 0===w?void 0:w.length)>0?"col-md-1 fs-2 row-back":"d-none",onClick:function(){return location.reload()},children:"\ud83d\udd19"}),Object(u.jsx)("div",{className:"col-md-3 mb-4 text-center",children:Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),A(E);var t=w.filter((function(e){return void 0!==e})).map((function(e){return e.unidad===E&&e}));U(t)},children:Object(u.jsx)("input",{type:"text",onChange:function(e){R(e.target.value),G([])},value:E,className:w.length>0?"w-100 form-control mt-2":"d-none",style:{width:"0"},placeholder:"Buscar por Unidad"})})}),Object(u.jsx)("div",{className:"col-1"}),Object(u.jsx)("div",{className:(null===T||void 0===T?void 0:T.length)>0?"col-md-3 mb-3 ":"d-none",children:Object(u.jsxs)("div",{className:"w-100 mt-0",children:[Object(u.jsxs)("label",{className:"text-white mb-3 mx-4",children:[Object(u.jsx)("input",{type:"checkbox",className:"m-1",value:"Mantenimiento",onChange:function(e){return function(e){W(!J),J?oe([].concat(Object(r.a)(ie),[e.target.value])):le(ie,e.target.value)}(e)},checked:J}),"Mantenimiento"]}),Object(u.jsxs)("label",{className:"text-white mb-3",children:[Object(u.jsx)("input",{type:"checkbox",className:"m-1",value:"Reparacion",onChange:function(e){return function(e){X(!Q),Q?oe([].concat(Object(r.a)(ie),[e.target.value])):le(ie,e.target.value)}(e)},checked:Q}),"Reparacion"]}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{className:"text-white mx-4",children:[Object(u.jsx)("input",{type:"checkbox",className:"m-1",value:"Choque",onChange:function(e){return function(e){ee(!_),_?oe([].concat(Object(r.a)(ie),[e.target.value])):le(ie,e.target.value)}(e)},checked:_}),"Choque"]}),Object(u.jsxs)("label",{className:"text-white mx-4",children:[Object(u.jsx)("input",{type:"checkbox",className:"m-1",value:"Llantas",onChange:function(e){return function(e){ae(!ne),ne?oe([].concat(Object(r.a)(ie),[e.target.value])):le(ie,e.target.value)}(e)},checked:ne}),"LLantas"]})]})})]}),a&&Object(u.jsx)("div",{className:"row row-cols-1 p-5 g-3 border mt-1 ",children:ue.filter((function(e){return void 0!==e})).map((function(e){return Object(u.jsx)(O,{item:e},e.id)}))})]})},p=(c.p,c(36)),g=c.n(p),N=c(52),y=c(150),w=c(152),C=c(151),S=c(149),k=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),i=Object(s.a)(r,2),o=i[0],l=i[1],d=Object(n.useRef)(),b=Object(n.useRef)(),O=Object(n.useContext)(j).login,x=function(){return a(!1)},h=function(){var e=Object(N.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),l(""),e.prev=2,e.next=5,O(d.current.value,b.current.value);case 5:x(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),l("Invalid login");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{onClick:function(){return a(!0)},className:"btn mx-2",children:"Entrar"}),Object(u.jsx)(y.a,{centered:!0,show:c,onHide:x,children:Object(u.jsxs)("form",{onSubmit:h,children:[Object(u.jsx)(y.a.Header,{children:Object(u.jsx)(y.a.Title,{children:"Entrar"})}),Object(u.jsxs)(y.a.Body,{children:[o&&Object(u.jsx)(w.a,{variant:"danger",children:o}),Object(u.jsxs)(C.a.Group,{children:[Object(u.jsx)(C.a.Label,{children:"Email "}),Object(u.jsx)(C.a.Control,{type:"email",required:!0,ref:d})]}),Object(u.jsxs)(C.a.Group,{children:[Object(u.jsx)(C.a.Label,{children:"Password"}),Object(u.jsx)(C.a.Control,{type:"password",required:!0,ref:b})]})]}),Object(u.jsxs)(y.a.Footer,{children:[Object(u.jsx)(S.a,{variant:"secondary",onClick:x,children:"Cancelar"}),Object(u.jsx)(S.a,{variant:"primary",type:"submit",children:"Entrar"})]})]})})]})},L=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),i=Object(s.a)(r,2),o=i[0],l=i[1],d=Object(n.useRef)(),b=Object(n.useRef)(),O=Object(n.useRef)(),x=Object(n.useContext)(j).register,h=function(){return a(!1)},m=function(){var e=Object(N.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),l(""),b.current.value===O.current.value){e.next=4;break}return e.abrupt("return",l("Passwords does not match"));case 4:return e.prev=4,e.next=7,x(d.current.value,b.current.value);case 7:h(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),l(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{onClick:function(){return a(!0)},className:"btn btn-outline-secondary mx-2 d-none",children:"Registro"}),Object(u.jsx)(y.a,{centered:!0,show:c,onHide:h,children:Object(u.jsxs)("form",{onSubmit:m,children:[Object(u.jsx)(y.a.Header,{children:Object(u.jsx)(y.a.Title,{children:"Registro"})}),Object(u.jsxs)(y.a.Body,{children:[o&&Object(u.jsx)(w.a,{variant:"danger",children:o}),Object(u.jsxs)(C.a.Group,{children:[Object(u.jsx)(C.a.Label,{children:"Email"}),Object(u.jsx)(C.a.Control,{type:"email",required:!0,ref:d})]}),Object(u.jsxs)(C.a.Group,{children:[Object(u.jsx)(C.a.Label,{children:"Password"}),Object(u.jsx)(C.a.Control,{type:"password",required:!0,ref:b})]}),Object(u.jsxs)(C.a.Group,{children:[Object(u.jsx)(C.a.Label,{children:"Confirmar Password"}),Object(u.jsx)(C.a.Control,{type:"password",required:!0,ref:O})]})]}),Object(u.jsxs)(y.a.Footer,{children:[Object(u.jsx)(S.a,{variant:"secondary",onClick:h,children:"Cancelar"}),Object(u.jsx)(S.a,{variant:"primary",type:"submit",children:"Registrar"})]})]})})]})},E=function(){var e=Object(n.useContext)(j),t=e.currentUser,c=e.logout;return Object(u.jsx)("nav",{className:"container-fluid navbar bg-danger navbar-light",children:Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)("div",{className:"navbar-brand text-white",children:" TALLER ADMIN"}),Object(u.jsx)("div",{className:"d-flex",children:Object(u.jsx)("div",{className:"col",children:t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"btn mx-2 disabled",children:t.email}),Object(u.jsx)("div",{onClick:function(){return c()},className:"btn  mx-2",children:"SALIR"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(k,{}),Object(u.jsx)(L,{})]})})})]})})},R=function(){return Object(u.jsxs)(b,{children:[Object(u.jsx)(E,{}),Object(u.jsx)(v,{})]})};c(137);Object(a.render)(Object(u.jsx)(R,{}),document.getElementById("root"))},91:function(e,t,c){}},[[139,1,2]]]);
//# sourceMappingURL=main.7c9bf785.chunk.js.map