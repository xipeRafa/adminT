(this.webpackJsonpauctioneer=this.webpackJsonpauctioneer||[]).push([[0],{141:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(23),r=c(14),s=c(10),i=c(157),o=c(76),l=(c(88),c(145),c(146),o.a.initializeApp({apiKey:"AIzaSyB2F4R4KkxUwb4GFKs7twRhiHS5i-i51D4",authDomain:"scopic-73416.firebaseapp.com",projectId:"scopic-73416",storageBucket:"scopic-73416.appspot.com",messagingSenderId:"475263107333",appId:"1:475263107333:web:27180a036864e16618376c"})),u=o.a.firestore.FieldValue.serverTimestamp,j=l.firestore(),d=l.storage(),b=l.auth(),O=c(2),f=Object(n.createContext)(),x=function(e){var t=e.children,c=Object(n.useState)(null),a=Object(s.a)(c,2),r=a[0],i=a[1],o=Object(n.useState)(!0),l=Object(s.a)(o,2),u=l[0],d=l[1],x=Object(n.useState)(""),m=Object(s.a)(x,2),h=m[0],v=m[1];return Object(n.useEffect)((function(){return b.onAuthStateChanged((function(e){i(e),d(!1)}))}),[]),Object(n.useEffect)((function(){var e=setTimeout((function(){return v("")}),5e3);return function(){return clearTimeout(e)}}),[h]),Object(O.jsx)(f.Provider,{value:{currentUser:r,register:function(e,t){return b.createUserWithEmailAndPassword(e,t)},login:function(e,t){return b.signInWithEmailAndPassword(e,t)},logout:function(){return b.signOut()},bidAuction:function(e){return j.collection("auctions").doc(e).update({acuerdo:!0})},noteContext:function(e,t){return j.collection("auctions").doc(e).update({note:t})},endAuction:function(e){return j.collection("auctions").doc(e).delete()},globalMsg:h},children:!u&&t})},m=c(43),h=function(e){var t=Object(n.useState)([]),c=Object(s.a)(t,2),a=c[0],r=c[1];return Object(n.useEffect)((function(){var t=j.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(m.a)(Object(m.a)({},e.data()),{},{id:e.id}))})),r(t)}));return function(){return t()}}),[e]),{docs:a}},v=function(e){var t,c=e.item,a=(e.handleState,Object(n.useContext)(f)),r=a.currentUser;a.bidAuction;h("auctions").docs.map((function(e){e.id===c.id&&(t=e.duration),e.id===c.id&&e.completed,e.id===c.id&&e.acuerdo}));var s=new Date(t).toLocaleTimeString("es-CL"),i=new Date(t).toLocaleDateString("es-CL",{weekday:"short",year:"numeric",month:"short",day:"numeric"});return Object(O.jsx)("div",{className:"col",children:r&&Object(O.jsx)("div",{className:"card shadow-sm",children:Object(O.jsxs)("div",{className:"card-body p-4 py-2",children:[Object(O.jsxs)("div",{className:"border border-success row",children:[Object(O.jsx)("span",{className:"bg-success p-1 col-md-3",children:Object(O.jsx)("span",{className:"text-white px-2",children:c.categorie.charAt(0).toUpperCase()+c.categorie.slice(1)})}),Object(O.jsxs)("span",{className:"p-1 col-md-2",children:[Object(O.jsx)("span",{className:"text-secondary ",children:"KL "})," ",c.title3]}),Object(O.jsxs)("span",{className:" p-1 col-md-2",children:[Object(O.jsx)("span",{className:"text-secondary ",children:"Unidad "})," ",c.title]}),Object(O.jsx)("span",{className:"col-md-3 p-1",children:Object(O.jsxs)("span",{children:[i,", ",s.slice(0,-3)]})}),Object(O.jsxs)("span",{className:" col-md-2 p-1",children:[Object(O.jsx)("span",{className:"text-secondary ",children:"Costo"})," ",c.title2]})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{className:"text-secondary ",children:"Descripcion: "})," ",c.title1]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{className:"text-secondary ",children:"Comentarios: "})," ",null===c||void 0===c?void 0:c.description]})]})})})},p=c(154),g=c(31),N=c.n(g),w=c(36),y=function(e){var t=Object(n.useState)(0),c=Object(s.a)(t,2),a=c[0],r=c[1],i=Object(n.useState)(null),o=Object(s.a)(i,2),l=o[0],b=o[1];return Object(n.useState)((function(){var t=d.ref(e.itemImage.name),c=j.collection("auctions");t.put(e.itemImage).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;r(t)}),(function(e){console.log(e)}),Object(w.a)(N.a.mark((function n(){var a,r;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.getDownloadURL();case 2:return a=n.sent,r=u(),delete e.itemImage,n.next=7,c.add(Object(m.a)(Object(m.a)({},e),{},{createdAt:r,imgUrl:a}));case 7:b(!0);case 8:case"end":return n.stop()}}),n)}))))}),[e]),{progress:a,isCompleted:l}},C=function(e){var t=e.auction,c=e.setAuction,a=y(t),r=a.progress,s=a.isCompleted;return Object(n.useEffect)((function(){s&&c(null)}),[s,c]),Object(O.jsx)(p.a.div,{style:{height:"5px",background:"black"},initial:{width:0},animate:{width:"".concat(r,"%")}})},S=Object(n.createContext)(),k=function(e){var t=e.children,c=h("auctions").docs,a=Object(r.a)(c),i=Object(n.useState)(a),o=Object(s.a)(i,2),l=o[0],u=o[1];return Object(O.jsx)(S.Provider,{value:{handleDB:function(e){u(e)},DB:l},children:t})},D=c(77),A=c.n(D),E=(c(93),function(){var e=h("auctions").docs,t=Object(r.a)(e),c=Object(n.useContext)(S).handleDB,a=Object(n.useState)([]),i=Object(s.a)(a,2),o=i[0],l=i[1];return Object(n.useEffect)((function(){if("DateMaxToMin"!==o[0])if("Date"!==o[0]);else{var e=t.sort((function(e,t){return e.createdAt-t.createdAt}));c(e)}else{var n=t.sort((function(e,t){return t.createdAt-e.createdAt}));c(n)}}),[o]),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"w-75",children:[Object(O.jsx)("h2",{children:"Filtros"}),Object(O.jsxs)("select",{className:"form-select w-100 ",onChange:function(e){var t=Array.from(e.target.selectedOptions,(function(e){return e.value}));l(t)},value:o,children:[Object(O.jsx)("option",{children:"Filtrar por"}),Object(O.jsx)("option",{value:"Date",children:"Fecha MIN to MAX"}),Object(O.jsx)("option",{value:"DateMaxToMin",children:"Fecha Max to Min"})]})]})})}),L=function(){var e=h("auctions").docs,t=Object(r.a)(e),c=Object(n.useContext)(S).handleDB,a=Object(n.useState)([]),i=Object(s.a)(a,2),o=i[0],l=i[1];return Object(n.useEffect)((function(){if("all"!==o[0])if("done"!==o[0])if("fallen"!==o[0]);else{var e=t.filter((function(e){return!1===e.completed}));c(e)}else{var n=t.filter((function(e){return!0===e.completed}));c(n)}else{var a=t.filter((function(e){return e}));c(a)}}),[o]),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"w-75 mt-5",children:[Object(O.jsx)("h2",{children:"Resultados"}),Object(O.jsxs)("select",{className:"form-select w-100 ",onChange:function(e){var t=Array.from(e.target.selectedOptions,(function(e){return e.value}));l(t)},value:o,children:[Object(O.jsx)("option",{value:"all",children:"Todos"}),Object(O.jsx)("option",{value:"done",children:"Completados"}),Object(O.jsx)("option",{value:"fallen",children:"Sin Completar"})]})]})})},M=function(){var e=Object(n.useContext)(S).handleDB,t=h("auctions").docs,c=Object(r.a)(t),a=Object(n.useState)(!0),i=Object(s.a)(a,2),o=i[0],l=i[1],u=Object(n.useState)(!0),j=Object(s.a)(u,2),d=j[0],b=j[1],f=Object(n.useState)(!0),x=Object(s.a)(f,2),m=x[0],v=x[1],p=Object(n.useState)([]),g=Object(s.a)(p,2),N=g[0],w=g[1];function y(e,t){var c=e.indexOf(t);c>-1&&e.splice(c,1)}return Object(n.useEffect)((function(){for(var t=function(e){var t=c.filter((function(t){return t.categorie!==N[e]}));c=t},n=0;n<N.length;n++)t(n);e(c)}),[N,o,d,m]),Object(n.useEffect)((function(){setTimeout((function(){l(!o),l(!0)}),200)}),[t]),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"w-75 mt-5",children:[Object(O.jsx)("h2",{children:"Clientes"}),Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"checkbox",className:"m-1",value:"oxxo",onChange:function(e){return function(e){l(!o),o?w([].concat(Object(r.a)(N),[e.target.value])):y(N,e.target.value)}(e)},checked:o}),"oxxo"]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"checkbox",className:"m-1",value:"otro",onChange:function(e){return function(e){b(!d),d?w([].concat(Object(r.a)(N),[e.target.value])):y(N,e.target.value)}(e)},checked:d}),"otro"]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"checkbox",className:"m-1",value:"pago en efectivo",onChange:function(e){return function(e){v(!m),m?w([].concat(Object(r.a)(N),[e.target.value])):y(N,e.target.value)}(e)},checked:m}),"Pago en Efectivo"]})]})})},F=function(){return Object(O.jsxs)("div",{style:{paddingLeft:"16px"},className:"d-flex justify-content-between flex-column pb-5  ",children:[Object(O.jsx)(E,{}),Object(O.jsx)(L,{}),Object(O.jsx)(M,{})]})},R=(c(94),c(81));Object(D.registerLocale)("es",R.a);var I=function(){var e,t=Object(n.useState)(null),c=Object(s.a)(t,2),a=c[0],o=c[1],l=Object(n.useContext)(f),u=l.currentUser,j=l.globalMsg,d=Object(n.useContext)(S).DB,b=Object(n.useState)(),x=Object(s.a)(b,2),m=(x[0],x[1]),h=function(e){m(e)},p=!!u&&u.email;e=d.sort((function(e,t){return e.completed===t.completed?0:t.completed?-1:1}));var g=Object(n.useState)(),N=Object(s.a)(g,2),w=(N[0],N[1]),y=Object(n.useState)(),k=Object(s.a)(y,2),D=k[0],E=k[1],L=Object(n.useState)([]),M=Object(s.a)(L,2),R=M[0],I=M[1],T=(R.filter((function(e){return e})).length,Object(n.useState)()),B=Object(s.a)(T,2),U=B[0],P=B[1],q=Object(n.useState)([]),G=Object(s.a)(q,2),H=(G[0],G[1]),K=Object(n.useState)(),z=Object(s.a)(K,2),J=z[0],W=z[1],V=Object(n.useState)(),X=Object(s.a)(V,2),_=X[0],Q=X[1],Y=Object(n.useState)([]),Z=Object(s.a)(Y,2),$=Z[0],ee=Z[1],te=null===J||void 0===J?void 0:J.sort((function(e,t){return e.duration-t.duration})).sort((function(e,t){return e.completed===t.completed?0:t.completed?-1:1})),ce=Object(n.useState)(!0),ne=Object(s.a)(ce,2),ae=ne[0],re=ne[1],se=Object(n.useState)(!0),ie=Object(s.a)(se,2),oe=ie[0],le=ie[1],ue=Object(n.useState)(!0),je=Object(s.a)(ue,2),de=je[0],be=je[1],Oe=Object(n.useState)(!0),fe=Object(s.a)(Oe,2),xe=fe[0],me=fe[1],he=Object(n.useState)([]),ve=Object(s.a)(he,2),pe=ve[0],ge=ve[1];function Ne(e,t){var c=e.indexOf(t);c>-1&&e.splice(c,1)}Object(n.useEffect)((function(){for(var e=function(e){var t=te.filter((function(t){return t.categorie!==pe[e]}));te=t},t=0;t<pe.length;t++)e(t);ee(te)}),[pe,ae,oe,de,xe]);Date.now();var we=Date.now()-36e5,ye=Date.now()-6e4,Ce=Object(n.useState)(),Se=Object(s.a)(Ce,2),ke=(Se[0],Se[1]),De=Object(n.useState)(1),Ae=Object(s.a)(De,2),Ee=Ae[0],Le=(Ae[1],6e4*Ee),Me=e.filter((function(e){return void 0!==e})).filter((function(e){return!1===e.completed}));Object(n.useEffect)((function(){var e=Me.filter((function(e){return e.duration>ye-Le})).map((function(e){return[e.email,e]})),t=new Map(e),c=Object(r.a)(t.values());ke(c)}),[Ee]);var Fe=Object(n.useState)(),Re=Object(s.a)(Fe,2),Ie=(Re[0],Re[1],Object(n.useState)()),Te=Object(s.a)(Ie,2),Be=(Te[0],Te[1]),Ue=Object(n.useState)(1),Pe=Object(s.a)(Ue,2),qe=Pe[0],Ge=(Pe[1],36e5*qe);Object(n.useEffect)((function(){var e=Me.filter((function(e){return e.duration>we-Ge})).map((function(e){return[e.email,e]})),t=new Map(e),c=Object(r.a)(t.values());Be(c)}),[qe]);var He=R;J?(He=J.filter((function(e){return!1!==e})),$.length>0&&(He=$.filter((function(e){return!1!==e})))):R&&(He=R.sort((function(e,t){return e.duration-t.duration})).sort((function(e,t){return e.completed===t.completed?0:t.completed?-1:1})));var Ke=e;return R.length>0&&(Ke=He),console.log(J),Object(O.jsxs)("div",{className:"container-fluid",children:[a&&Object(O.jsx)(C,{auction:a,setAuction:o}),Object(O.jsx)("div",{style:{zIndex:"9999999"},className:"text-center w-50 position-fixed top-10 start-50 translate-middle",children:j&&Object(O.jsx)(i.a,{variant:"danger",children:j})}),p&&Object(O.jsxs)("div",{className:"row bg-secondary pt-4 ",children:[Object(O.jsx)("div",{className:"col-1"}),Object(O.jsx)("div",{className:(null===J||void 0===J?void 0:J.length)>0?"d-none":"col-md-3 text-center mb-4 me-5",children:Object(O.jsx)(A.a,{selected:D,onChange:function(e){E(e);var t=null===e||void 0===e?void 0:e.getTime(),c=t+864e5,n=new Date(t).toLocaleDateString("es-CL",{weekday:"long",year:"numeric",month:"short",day:"numeric"});w(n);var a=d.map((function(e,n){if(e.duration>t&&e.duration<c)return e}));I(a)},onFocus:function(){I([])},locale:"es",className:"pickers mb-3 form-control mt-2 w-100 bg-secondary",dateFormat:"dd 'de' MMMM 'de' yyyy"})}),Object(O.jsx)("div",{className:(null===R||void 0===R?void 0:R.length)>0?"col-md-1 fs-2 row-back":"d-none",onClick:function(){return location.reload()},children:"\ud83d\udd19"}),Object(O.jsx)("div",{className:"col-md-3 mb-4 text-center",children:Object(O.jsx)("form",{onSubmit:function(e){e.preventDefault(),H(U);var t=R.filter((function(e){return void 0!==e})).map((function(e){return e.title===U&&e}));W(t)},children:Object(O.jsx)("input",{type:"text",onChange:function(e){P(e.target.value),ee([])},value:U,className:R.length>0?"w-100 form-control mt-2":"d-none",style:{width:"0"},placeholder:"Buscar por Unidad"})})}),Object(O.jsx)("div",{className:"col-1"}),Object(O.jsx)("div",{className:(null===R||void 0===R?void 0:R.length)>0?"col-3 mt-0 d-none":"d-none",children:Object(O.jsxs)("div",{className:(null===J||void 0===J?void 0:J.length)>0?"w-50":"d-none",onChange:function(e){return function(e){Q(e),ee([]);var t=null===J||void 0===J?void 0:J.filter((function(e){return!1!==e})),c=t;"completados"===_?(c=t.filter((function(e){return!0!==e.completed})),ee(c)):(c=t.filter((function(e){return!1!==e.completed})),ee(c))}(e.target.value)},children:[Object(O.jsx)("input",{type:"button",className:"text-white btn btn-secondary",name:"drone",value:"Todos",onClick:function(){return ee([])}}),Object(O.jsxs)("label",{className:"btn text-white btn-secondary",children:[Object(O.jsx)("input",{type:"radio",value:"completados",name:"drone",className:"d-none"}),"Completados"]}),Object(O.jsxs)("label",{className:"btn text-white btn-secondary",children:[Object(O.jsx)("input",{type:"radio",value:"nocompletados",name:"drone",className:"d-none"}),"No Completados"]})]})}),Object(O.jsx)("div",{className:(null===J||void 0===J?void 0:J.length)>0?"col-md-3 mb-3 ":"d-none",children:Object(O.jsxs)("div",{className:"w-100 mt-0",children:[Object(O.jsxs)("label",{className:"text-white mb-3 mx-4",children:[Object(O.jsx)("input",{type:"checkbox",className:"m-1",value:"mantenimiento",onChange:function(e){return function(e){re(!ae),ae?ge([].concat(Object(r.a)(pe),[e.target.value])):Ne(pe,e.target.value)}(e)},checked:ae}),"Mantenimiento"]}),Object(O.jsxs)("label",{className:"text-white mb-3",children:[Object(O.jsx)("input",{type:"checkbox",className:"m-1",value:"reparacion",onChange:function(e){return function(e){le(!oe),oe?ge([].concat(Object(r.a)(pe),[e.target.value])):Ne(pe,e.target.value)}(e)},checked:oe}),"Reparacion"]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{className:"text-white mx-4",children:[Object(O.jsx)("input",{type:"checkbox",className:"m-1",value:"choque",onChange:function(e){return function(e){be(!de),de?ge([].concat(Object(r.a)(pe),[e.target.value])):Ne(pe,e.target.value)}(e)},checked:de}),"Choque"]}),Object(O.jsxs)("label",{className:"text-white mx-4",children:[Object(O.jsx)("input",{type:"checkbox",className:"m-1",value:"llantas",onChange:function(e){return function(e){me(!xe),xe?ge([].concat(Object(r.a)(pe),[e.target.value])):Ne(pe,e.target.value)}(e)},checked:xe}),"LLantas"]})]})})]}),d&&Object(O.jsxs)("div",{className:"row row-cols-1 p-5 g-3 border mt-1 ",children:[u&&Object(O.jsx)("div",{className:(R.length,"d-none"),children:Object(O.jsx)(F,{})}),Ke.filter((function(e){return void 0!==e})).map((function(e){return Object(O.jsx)(v,{item:e,handleState:h},e.id)}))]})]})},T=(c.p,c(155)),B=c(156),U=c(153),P=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),o=Object(s.a)(r,2),l=o[0],u=o[1],j=Object(n.useRef)(),d=Object(n.useRef)(),b=Object(n.useContext)(f).login,x=function(){return a(!1)},m=function(){var e=Object(w.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),u(""),e.prev=2,e.next=5,b(j.current.value,d.current.value);case 5:x(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),u("Invalid login");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{onClick:function(){return a(!0)},className:"btn mx-2",children:"Entrar"}),Object(O.jsx)(T.a,{centered:!0,show:c,onHide:x,children:Object(O.jsxs)("form",{onSubmit:m,children:[Object(O.jsx)(T.a.Header,{children:Object(O.jsx)(T.a.Title,{children:"Entrar"})}),Object(O.jsxs)(T.a.Body,{children:[l&&Object(O.jsx)(i.a,{variant:"danger",children:l}),Object(O.jsxs)(B.a.Group,{children:[Object(O.jsx)(B.a.Label,{children:"Email "}),Object(O.jsx)(B.a.Control,{type:"email",required:!0,ref:j})]}),Object(O.jsxs)(B.a.Group,{children:[Object(O.jsx)(B.a.Label,{children:"Password"}),Object(O.jsx)(B.a.Control,{type:"password",required:!0,ref:d})]})]}),Object(O.jsxs)(T.a.Footer,{children:[Object(O.jsx)(U.a,{variant:"secondary",onClick:x,children:"Cancelar"}),Object(O.jsx)(U.a,{variant:"primary",type:"submit",children:"Entrar"})]})]})})]})},q=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),o=Object(s.a)(r,2),l=o[0],u=o[1],j=Object(n.useRef)(),d=Object(n.useRef)(),b=Object(n.useRef)(),x=Object(n.useContext)(f).register,m=function(){return a(!1)},h=function(){var e=Object(w.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),u(""),d.current.value===b.current.value){e.next=4;break}return e.abrupt("return",u("Passwords does not match"));case 4:return e.prev=4,e.next=7,x(j.current.value,d.current.value);case 7:m(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),u(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{onClick:function(){return a(!0)},className:"btn btn-outline-secondary mx-2 d-none",children:"Registro"}),Object(O.jsx)(T.a,{centered:!0,show:c,onHide:m,children:Object(O.jsxs)("form",{onSubmit:h,children:[Object(O.jsx)(T.a.Header,{children:Object(O.jsx)(T.a.Title,{children:"Registro"})}),Object(O.jsxs)(T.a.Body,{children:[l&&Object(O.jsx)(i.a,{variant:"danger",children:l}),Object(O.jsxs)(B.a.Group,{children:[Object(O.jsx)(B.a.Label,{children:"Email"}),Object(O.jsx)(B.a.Control,{type:"email",required:!0,ref:j})]}),Object(O.jsxs)(B.a.Group,{children:[Object(O.jsx)(B.a.Label,{children:"Password"}),Object(O.jsx)(B.a.Control,{type:"password",required:!0,ref:d})]}),Object(O.jsxs)(B.a.Group,{children:[Object(O.jsx)(B.a.Label,{children:"Confirmar Password"}),Object(O.jsx)(B.a.Control,{type:"password",required:!0,ref:b})]})]}),Object(O.jsxs)(T.a.Footer,{children:[Object(O.jsx)(U.a,{variant:"secondary",onClick:m,children:"Cancelar"}),Object(O.jsx)(U.a,{variant:"primary",type:"submit",children:"Registrar"})]})]})})]})},G=function(){var e=Object(n.useContext)(f),t=e.currentUser,c=e.logout;return Object(O.jsx)("nav",{className:"container-fluid navbar bg-danger navbar-light",children:Object(O.jsxs)("div",{className:"container-fluid",children:[Object(O.jsx)("div",{className:"navbar-brand text-white",children:" TALLER ADMIN"}),Object(O.jsx)("div",{className:"d-flex",children:Object(O.jsx)("div",{className:"col",children:t?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"btn mx-2 disabled",children:t.email}),Object(O.jsx)("div",{onClick:function(){return c()},className:"btn  mx-2",children:"SALIR"})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(P,{}),Object(O.jsx)(q,{})]})})})]})})},H=function(){return Object(O.jsx)(x,{children:Object(O.jsxs)(k,{children:[Object(O.jsx)(G,{}),Object(O.jsx)(I,{})]})})};c(139);Object(a.render)(Object(O.jsx)(H,{}),document.getElementById("root"))},94:function(e,t,c){}},[[141,1,2]]]);
//# sourceMappingURL=main.fd45694d.chunk.js.map