(this.webpackJsonpauctioneer=this.webpackJsonpauctioneer||[]).push([[0],{141:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(22),r=n(30),s=n(12),i=n(75),o=(n(88),n(145),n(146),i.a.initializeApp({apiKey:"AIzaSyB2F4R4KkxUwb4GFKs7twRhiHS5i-i51D4",authDomain:"scopic-73416.firebaseapp.com",projectId:"scopic-73416",storageBucket:"scopic-73416.appspot.com",messagingSenderId:"475263107333",appId:"1:475263107333:web:27180a036864e16618376c"})),l=i.a.firestore.FieldValue.serverTimestamp,u=o.firestore(),d=o.storage(),j=o.auth(),b=n(3),O=Object(c.createContext)(),m=function(e){var t=e.children,n=Object(c.useState)(null),a=Object(s.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(!0),l=Object(s.a)(o,2),d=l[0],m=l[1],x=Object(c.useState)(""),f=Object(s.a)(x,2),h=f[0],p=f[1];return Object(c.useEffect)((function(){return j.onAuthStateChanged((function(e){i(e),m(!1)}))}),[]),Object(c.useEffect)((function(){var e=setTimeout((function(){return p("")}),5e3);return function(){return clearTimeout(e)}}),[h]),Object(b.jsx)(O.Provider,{value:{currentUser:r,register:function(e,t){return j.createUserWithEmailAndPassword(e,t)},login:function(e,t){return j.signInWithEmailAndPassword(e,t)},logout:function(){return j.signOut()},bidAuction:function(e){return u.collection("auctions").doc(e).update({acuerdo:!0})},noteContext:function(e,t){return u.collection("auctions").doc(e).update({note:t})},endAuction:function(e){return u.collection("auctions").doc(e).delete()},globalMsg:h},children:!d&&t})},x=n(43),f=function(e){var t=Object(c.useState)([]),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){var t=u.collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(x.a)(Object(x.a)({},e.data()),{},{id:e.id}))})),r(t)}));return function(){return t()}}),[e]),{docs:a}},h=function(e){var t,n=e.item,a=(e.handleState,Object(c.useContext)(O)),r=a.currentUser;a.bidAuction;f("auctions").docs.map((function(e){e.id===n.id&&(t=e.duration),e.id===n.id&&e.completed,e.id===n.id&&e.acuerdo}));var s=new Date(t).toLocaleTimeString("es-CL"),i=new Date(t).toLocaleDateString("es-CL",{weekday:"short",year:"numeric",month:"short",day:"numeric"});return Object(b.jsx)("div",{className:"col",children:r&&Object(b.jsx)("div",{className:"card shadow-sm",children:Object(b.jsxs)("div",{className:"card-body p-4 py-2",children:[Object(b.jsxs)("div",{className:"border border-success row",children:[Object(b.jsx)("span",{className:"bg-success p-1 col-md-3",children:Object(b.jsx)("span",{className:"text-white px-2",children:n.categorie.charAt(0).toUpperCase()+n.categorie.slice(1)})}),Object(b.jsxs)("span",{className:"p-1 col-md-2",children:[Object(b.jsx)("span",{className:"text-secondary ",children:"KL "})," ",n.title3]}),Object(b.jsxs)("span",{className:" p-1 col-md-2",children:[Object(b.jsx)("span",{className:"text-secondary ",children:"Unidad "})," ",n.title]}),Object(b.jsx)("span",{className:"col-md-3 p-1",children:Object(b.jsxs)("span",{children:[i,", ",s.slice(0,-3)]})}),Object(b.jsxs)("span",{className:" col-md-2 p-1",children:[Object(b.jsx)("span",{className:"text-secondary ",children:"Costo"})," ",n.costo]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"text-secondary ",children:"Descripcion: "})," ",n.title1]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"text-secondary ",children:"Comentarios: "})," ",null===n||void 0===n?void 0:n.description]})]})})})},p=n(154),v=n(31),g=n.n(v),w=n(36),y=function(e){var t=Object(c.useState)(0),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(null),o=Object(s.a)(i,2),j=o[0],b=o[1];return Object(c.useState)((function(){var t=d.ref(e.itemImage.name),n=u.collection("auctions");t.put(e.itemImage).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;r(t)}),(function(e){console.log(e)}),Object(w.a)(g.a.mark((function c(){var a,r;return g.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,t.getDownloadURL();case 2:return a=c.sent,r=l(),delete e.itemImage,c.next=7,n.add(Object(x.a)(Object(x.a)({},e),{},{createdAt:r,imgUrl:a}));case 7:b(!0);case 8:case"end":return c.stop()}}),c)}))))}),[e]),{progress:a,isCompleted:j}},N=function(e){var t=e.auction,n=e.setAuction,a=y(t),r=a.progress,s=a.isCompleted;return Object(c.useEffect)((function(){s&&n(null)}),[s,n]),Object(b.jsx)(p.a.div,{style:{height:"5px",background:"black"},initial:{width:0},animate:{width:"".concat(r,"%")}})},S=n(76),C=n.n(S),k=(n(93),n(94),n(81));Object(S.registerLocale)("es",k.a);var L=function(){var e,t=Object(c.useState)(null),n=Object(s.a)(t,2),a=n[0],i=n[1],o=Object(c.useContext)(O),l=o.currentUser,u=o.globalMsg,d=f("auctions").docs,j=Object(c.useState)(),m=Object(s.a)(j,2),x=(m[0],m[1]),p=function(e){x(e)},v=!!l&&l.email;e=d.sort((function(e,t){return e.completed===t.completed?0:t.completed?-1:1}));var g=Object(c.useState)(),w=Object(s.a)(g,2),y=(w[0],w[1]),S=Object(c.useState)(),k=Object(s.a)(S,2),L=k[0],E=k[1],A=Object(c.useState)([]),D=Object(s.a)(A,2),R=D[0],I=D[1],F=(R.filter((function(e){return e})).length,Object(c.useState)()),U=Object(s.a)(F,2),M=U[0],T=U[1],q=Object(c.useState)([]),B=Object(s.a)(q,2),P=(B[0],B[1]),G=Object(c.useState)(),H=Object(s.a)(G,2),K=H[0],z=H[1],J=Object(c.useState)(),W=Object(s.a)(J,2),V=W[0],_=W[1],Q=Object(c.useState)([]),X=Object(s.a)(Q,2),Y=X[0],Z=X[1],$=null===K||void 0===K?void 0:K.sort((function(e,t){return e.duration-t.duration})).sort((function(e,t){return e.completed===t.completed?0:t.completed?-1:1})),ee=Object(c.useState)(!0),te=Object(s.a)(ee,2),ne=te[0],ce=te[1],ae=Object(c.useState)(!0),re=Object(s.a)(ae,2),se=re[0],ie=re[1],oe=Object(c.useState)(!0),le=Object(s.a)(oe,2),ue=le[0],de=le[1],je=Object(c.useState)(!0),be=Object(s.a)(je,2),Oe=be[0],me=be[1],xe=Object(c.useState)([]),fe=Object(s.a)(xe,2),he=fe[0],pe=fe[1];function ve(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)}Object(c.useEffect)((function(){for(var e=function(e){var t=$.filter((function(t){return t.categorie!==he[e]}));$=t},t=0;t<he.length;t++)e(t);Z($)}),[he,ne,se,ue,Oe]);Date.now();var ge=Date.now()-36e5,we=Date.now()-6e4,ye=Object(c.useState)(),Ne=Object(s.a)(ye,2),Se=(Ne[0],Ne[1]),Ce=Object(c.useState)(1),ke=Object(s.a)(Ce,2),Le=ke[0],Ee=(ke[1],6e4*Le),Ae=e.filter((function(e){return void 0!==e})).filter((function(e){return!1===e.completed}));Object(c.useEffect)((function(){var e=Ae.filter((function(e){return e.duration>we-Ee})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());Se(n)}),[Le]);var De=Object(c.useState)(),Re=Object(s.a)(De,2),Ie=(Re[0],Re[1],Object(c.useState)()),Fe=Object(s.a)(Ie,2),Ue=(Fe[0],Fe[1]),Me=Object(c.useState)(1),Te=Object(s.a)(Me,2),qe=Te[0],Be=(Te[1],36e5*qe);Object(c.useEffect)((function(){var e=Ae.filter((function(e){return e.duration>ge-Be})).map((function(e){return[e.email,e]})),t=new Map(e),n=Object(r.a)(t.values());Ue(n)}),[qe]);var Pe=R;K?(Pe=K.filter((function(e){return!1!==e})),Y.length>0&&(Pe=Y.filter((function(e){return!1!==e})))):R&&(Pe=R.sort((function(e,t){return e.duration-t.duration})).sort((function(e,t){return e.completed===t.completed?0:t.completed?-1:1})));var Ge=[];return R.length>0&&(Ge=Pe),console.log(K),Object(b.jsxs)("div",{className:"container-fluid",children:[a&&Object(b.jsx)(N,{auction:a,setAuction:i}),Object(b.jsx)("div",{style:{zIndex:"9999999"},className:"text-center w-50 position-fixed top-10 start-50 translate-middle",children:u&&Object(b.jsx)(Alert,{variant:"danger",children:u})}),v&&Object(b.jsxs)("div",{className:"row bg-secondary pt-4 ",children:[Object(b.jsx)("div",{className:"col-1"}),Object(b.jsx)("div",{className:(null===K||void 0===K?void 0:K.length)>0?"d-none":"col-md-3 text-center mb-4 me-5",children:Object(b.jsx)(C.a,{selected:L,onChange:function(e){E(e);var t=null===e||void 0===e?void 0:e.getTime(),n=t+864e5,c=new Date(t).toLocaleDateString("es-CL",{weekday:"long",year:"numeric",month:"short",day:"numeric"});y(c);var a=d.map((function(e,c){if(e.duration>t&&e.duration<n)return e}));I(a)},onFocus:function(){I([])},locale:"es",className:"pickers mb-3 form-control mt-2 w-100 bg-secondary",dateFormat:"dd 'de' MMMM 'de' yyyy"})}),Object(b.jsx)("div",{className:(null===R||void 0===R?void 0:R.length)>0?"col-md-1 fs-2 row-back":"d-none",onClick:function(){return location.reload()},children:"\ud83d\udd19"}),Object(b.jsx)("div",{className:"col-md-3 mb-4 text-center",children:Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault(),P(M);var t=R.filter((function(e){return void 0!==e})).map((function(e){return e.title===M&&e}));z(t)},children:Object(b.jsx)("input",{type:"text",onChange:function(e){T(e.target.value),Z([])},value:M,className:R.length>0?"w-100 form-control mt-2":"d-none",style:{width:"0"},placeholder:"Buscar por Unidad"})})}),Object(b.jsx)("div",{className:"col-1"}),Object(b.jsx)("div",{className:(null===R||void 0===R?void 0:R.length)>0?"col-3 mt-0 d-none":"d-none",children:Object(b.jsxs)("div",{className:(null===K||void 0===K?void 0:K.length)>0?"w-50":"d-none",onChange:function(e){return function(e){_(e),Z([]);var t=null===K||void 0===K?void 0:K.filter((function(e){return!1!==e})),n=t;"completados"===V?(n=t.filter((function(e){return!0!==e.completed})),Z(n)):(n=t.filter((function(e){return!1!==e.completed})),Z(n))}(e.target.value)},children:[Object(b.jsx)("input",{type:"button",className:"text-white btn btn-secondary",name:"drone",value:"Todos",onClick:function(){return Z([])}}),Object(b.jsxs)("label",{className:"btn text-white btn-secondary",children:[Object(b.jsx)("input",{type:"radio",value:"completados",name:"drone",className:"d-none"}),"Completados"]}),Object(b.jsxs)("label",{className:"btn text-white btn-secondary",children:[Object(b.jsx)("input",{type:"radio",value:"nocompletados",name:"drone",className:"d-none"}),"No Completados"]})]})}),Object(b.jsx)("div",{className:(null===K||void 0===K?void 0:K.length)>0?"col-md-3 mb-3 ":"d-none",children:Object(b.jsxs)("div",{className:"w-100 mt-0",children:[Object(b.jsxs)("label",{className:"text-white mb-3 mx-4",children:[Object(b.jsx)("input",{type:"checkbox",className:"m-1",value:"mantenimiento",onChange:function(e){return function(e){ce(!ne),ne?pe([].concat(Object(r.a)(he),[e.target.value])):ve(he,e.target.value)}(e)},checked:ne}),"Mantenimiento"]}),Object(b.jsxs)("label",{className:"text-white mb-3",children:[Object(b.jsx)("input",{type:"checkbox",className:"m-1",value:"reparacion",onChange:function(e){return function(e){ie(!se),se?pe([].concat(Object(r.a)(he),[e.target.value])):ve(he,e.target.value)}(e)},checked:se}),"Reparacion"]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{className:"text-white mx-4",children:[Object(b.jsx)("input",{type:"checkbox",className:"m-1",value:"choque",onChange:function(e){return function(e){de(!ue),ue?pe([].concat(Object(r.a)(he),[e.target.value])):ve(he,e.target.value)}(e)},checked:ue}),"Choque"]}),Object(b.jsxs)("label",{className:"text-white mx-4",children:[Object(b.jsx)("input",{type:"checkbox",className:"m-1",value:"llantas",onChange:function(e){return function(e){me(!Oe),Oe?pe([].concat(Object(r.a)(he),[e.target.value])):ve(he,e.target.value)}(e)},checked:Oe}),"LLantas"]})]})})]}),d&&Object(b.jsx)("div",{className:"row row-cols-1 p-5 g-3 border mt-1 ",children:Ge.filter((function(e){return void 0!==e})).map((function(e){return Object(b.jsx)(h,{item:e,handleState:p},e.id)}))})]})},E=(n.p,n(155)),A=n(157),D=n(156),R=n(153),I=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(s.a)(r,2),o=i[0],l=i[1],u=Object(c.useRef)(),d=Object(c.useRef)(),j=Object(c.useContext)(O).login,m=function(){return a(!1)},x=function(){var e=Object(w.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),l(""),e.prev=2,e.next=5,j(u.current.value,d.current.value);case 5:m(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),l("Invalid login");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{onClick:function(){return a(!0)},className:"btn mx-2",children:"Entrar"}),Object(b.jsx)(E.a,{centered:!0,show:n,onHide:m,children:Object(b.jsxs)("form",{onSubmit:x,children:[Object(b.jsx)(E.a.Header,{children:Object(b.jsx)(E.a.Title,{children:"Entrar"})}),Object(b.jsxs)(E.a.Body,{children:[o&&Object(b.jsx)(A.a,{variant:"danger",children:o}),Object(b.jsxs)(D.a.Group,{children:[Object(b.jsx)(D.a.Label,{children:"Email "}),Object(b.jsx)(D.a.Control,{type:"email",required:!0,ref:u})]}),Object(b.jsxs)(D.a.Group,{children:[Object(b.jsx)(D.a.Label,{children:"Password"}),Object(b.jsx)(D.a.Control,{type:"password",required:!0,ref:d})]})]}),Object(b.jsxs)(E.a.Footer,{children:[Object(b.jsx)(R.a,{variant:"secondary",onClick:m,children:"Cancelar"}),Object(b.jsx)(R.a,{variant:"primary",type:"submit",children:"Entrar"})]})]})})]})},F=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(s.a)(r,2),o=i[0],l=i[1],u=Object(c.useRef)(),d=Object(c.useRef)(),j=Object(c.useRef)(),m=Object(c.useContext)(O).register,x=function(){return a(!1)},f=function(){var e=Object(w.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),l(""),d.current.value===j.current.value){e.next=4;break}return e.abrupt("return",l("Passwords does not match"));case 4:return e.prev=4,e.next=7,m(u.current.value,d.current.value);case 7:x(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),l(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{onClick:function(){return a(!0)},className:"btn btn-outline-secondary mx-2 d-none",children:"Registro"}),Object(b.jsx)(E.a,{centered:!0,show:n,onHide:x,children:Object(b.jsxs)("form",{onSubmit:f,children:[Object(b.jsx)(E.a.Header,{children:Object(b.jsx)(E.a.Title,{children:"Registro"})}),Object(b.jsxs)(E.a.Body,{children:[o&&Object(b.jsx)(A.a,{variant:"danger",children:o}),Object(b.jsxs)(D.a.Group,{children:[Object(b.jsx)(D.a.Label,{children:"Email"}),Object(b.jsx)(D.a.Control,{type:"email",required:!0,ref:u})]}),Object(b.jsxs)(D.a.Group,{children:[Object(b.jsx)(D.a.Label,{children:"Password"}),Object(b.jsx)(D.a.Control,{type:"password",required:!0,ref:d})]}),Object(b.jsxs)(D.a.Group,{children:[Object(b.jsx)(D.a.Label,{children:"Confirmar Password"}),Object(b.jsx)(D.a.Control,{type:"password",required:!0,ref:j})]})]}),Object(b.jsxs)(E.a.Footer,{children:[Object(b.jsx)(R.a,{variant:"secondary",onClick:x,children:"Cancelar"}),Object(b.jsx)(R.a,{variant:"primary",type:"submit",children:"Registrar"})]})]})})]})},U=function(){var e=Object(c.useContext)(O),t=e.currentUser,n=e.logout;return Object(b.jsx)("nav",{className:"container-fluid navbar bg-danger navbar-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("div",{className:"navbar-brand text-white",children:" TALLER ADMIN"}),Object(b.jsx)("div",{className:"d-flex",children:Object(b.jsx)("div",{className:"col",children:t?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"btn mx-2 disabled",children:t.email}),Object(b.jsx)("div",{onClick:function(){return n()},className:"btn  mx-2",children:"SALIR"})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(I,{}),Object(b.jsx)(F,{})]})})})]})})},M=function(){return Object(b.jsxs)(m,{children:[Object(b.jsx)(U,{}),Object(b.jsx)(L,{})]})};n(139);Object(a.render)(Object(b.jsx)(M,{}),document.getElementById("root"))},94:function(e,t,n){}},[[141,1,2]]]);
//# sourceMappingURL=main.d780425a.chunk.js.map