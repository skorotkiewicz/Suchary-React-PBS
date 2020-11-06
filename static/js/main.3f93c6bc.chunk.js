(this["webpackJsonpsuchary-react"]=this["webpackJsonpsuchary-react"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),l=(a(65),a(15)),s=a(3),i=a(8),u=a(55),m=a.n(u),d=(a(94),a(31)),p=a(2),E=a(7),f=a.n(E),g=a(10),b=function(e){return{type:"setFavorites",payload:e}},j=function(e){return{type:"setLikes",payload:e}},h=function(e){return{type:"setAuth",payload:e}},y=function(e){return{type:"setPage",payload:e}},v=function(e){return{type:"setQuery",payload:e}},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(){var a=Object(g.a)(f.a.mark((function a(n,r){var c,o,l,s,i;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t){a.next=2;break}return a.abrupt("return",n({type:"UPDATE_JOKES_STATE",payload:t}));case 2:return n({type:"FETCH_JOKES_REQUEST"}),a.prev=3,a.next=6,fetch("https://pbsapi.skorotkiewicz.vercel.app/api/jokes/".concat(e));case 6:return c=a.sent,a.next=9,c.json();case 9:return o=a.sent,a.next=12,o.data.data;case 12:if(a.t0=a.sent,a.t0){a.next=17;break}return a.next=16,o.data.jokes;case 16:a.t0=a.sent;case 17:return l=a.t0,a.next=20,o.data.nextPage;case 20:if(a.t1=a.sent,a.t1){a.next=23;break}a.t1=null;case 23:return s=a.t1,a.next=26,o.data.prevPage;case 26:if(a.t2=a.sent,a.t2){a.next=29;break}a.t2=null;case 29:i=a.t2,n({type:"FETCH_JOKES_SUCCESS",payload:l,next:s,prev:i}),a.next=36;break;case 33:a.prev=33,a.t3=a.catch(3),n({type:"FETCH_JOKES_FAILURE",error:a.t3});case 36:case"end":return a.stop()}}),a,null,[[3,33]])})));return function(e,t){return a.apply(this,arguments)}}()},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){var a=Object(g.a)(f.a.mark((function a(n,r){var c,o,l,s;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n({type:"FETCH_USER_REQUEST"}),a.prev=1,t?(c="the/users/top15",o="USERS"):(o="USER",c="users/".concat(e)),a.next=5,fetch("https://pbsapi.skorotkiewicz.vercel.app/api/".concat(c));case 5:return l=a.sent,a.next=8,l.json();case 8:s=a.sent,n({type:"FETCH_".concat(o,"_SUCCESS"),payload:s.data}),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(1),n({type:"FETCH_USER_FAILURE",error:a.t0});case 15:case"end":return a.stop()}}),a,null,[[1,12]])})));return function(e,t){return a.apply(this,arguments)}}()},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return function(){var r=Object(g.a)(f.a.mark((function r(c,o){var l,s;return f.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c({type:"FETCH_ACTION_REQUEST"}),r.prev=1,r.next=4,fetch("https://pbsapi.skorotkiewicz.vercel.app/api/".concat(t),{method:n,headers:{"Content-Type":"application/json","x-access-token":e.auth},body:JSON.stringify(a)});case 4:return l=r.sent,r.next=7,l.json();case 7:s=r.sent,c({type:"FETCH_ACTION_SUCCESS",payload:s}),c({type:"FETCH_ACTION_CLEAN"}),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(1),c({type:"FETCH_ACTION_FAILURE",error:r.t0});case 15:case"end":return r.stop()}}),r,null,[[1,12]])})));return function(e,t){return r.apply(this,arguments)}}()},S=function(){var e=Object(p.c)((function(e){return e.auth})),t=Object(p.b)();return r.a.createElement("nav",null,r.a.createElement(d.a,{effect:"solid",type:"info"}),r.a.createElement(s.b,{onClick:function(){t(k("page/1/cat/0")),t(y(1))},"data-tip":"Jeszcze jeden suchar i b\u0119d\u0119 <strong><em>najedzony!</em></strong>","data-html":!0,className:"brand",to:"/"}),r.a.createElement("ul",{className:"nav-links"},r.a.createElement("li",null,r.a.createElement(s.b,{onClick:function(){t(k("page/1/cat/0")),t(y(1))},to:"/strona/1"},"najnowsze")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/losowe"},"losowe")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/mojeulubione"},"moje ulubione")),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(s.b,{style:{fontWeight:"bold"},to:"/dodaj"},"dodaj suchara")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/smieszek/".concat(e.login)},e.login)," ",r.a.createElement("span",{style:{color:"#eee"}}," | "),r.a.createElement(s.b,{to:"/wyloguj"},"wyloguj"))):r.a.createElement("li",null,r.a.createElement(s.b,{style:{fontWeight:"bold"},to:"/auth"},"dodaj suchara"))))},z=a(6),N=a(9),x=a.n(N),C=a(5),T=a(17),_=function(e){var t=e.joke,a=e.noLikes,c=e.rm,o=e.jokes,i=e.setJokes,u=Object(p.c)((function(e){return e.favorites})),m=Object(p.c)((function(e){return e.likes})),E=Object(p.c)((function(e){return e.auth})),h=Object(p.c)((function(e){return e.actions})),y=Object(n.useState)({}),v=Object(z.a)(y,2),k=v[0],O=v[1],S=Object(p.b)();Object(n.useEffect)((function(){if("success"===h.data.status){if("del"===k.a){var e=o.filter((function(e){return e._id!==k.id}));i(Object(l.a)(e))}if("like"===k.a){var t=o.map((function(e){return e._id===k.id?Object(C.a)(Object(C.a)({},e),{},{likes:h.data.data.likes}):e}));i(t)}}}),[h]);var N=function(e){if(u.includes(e._id)){var t=u.filter((function(t){return t!==e._id}));localStorage.setItem("favorites",JSON.stringify(t)),S(b(Object(l.a)(t)))}else u.push(e._id),S(b(Object(l.a)(u))),localStorage.setItem("favorites",JSON.stringify(u));null===localStorage.getItem(e._id||0)?localStorage.setItem(e._id,JSON.stringify(e.joke)):localStorage.removeItem(e._id)},x=function(){var e=Object(g.a)(f.a.mark((function e(t,a){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"del"===a&&(n="jokes/".concat(t),r="DELETE"),"admin"===a&&(n="jokes/".concat(t,"/category/1"),r="PATCH"),window.confirm("Czy napewno usun\u0105\u0107 tego suchara?")&&(O({id:t,a:"del"}),S(w(E,n,{},r)));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),_=function(){var e=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.includes(t)||(m.push(t),S(j(Object(l.a)(m))),localStorage.setItem("likes",JSON.stringify(m)),O({id:t,a:"like"}),S(w({},"joke/vote/like/".concat(t),{},"POST")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){return r.a.createElement("button",{disabled:!!m.includes(t._id),className:"likeBtn",onClick:function(){return _(t._id)}},r.a.createElement("span",{className:"likeBtnContent"},m.includes(t._id)?r.a.createElement(T.a,{style:{color:"red"}}):r.a.createElement(T.b,{style:{color:"red"}}),r.a.createElement("span",{style:{paddingLeft:10}},t.likes)))};return t&&void 0===t.joke&&i(t[0]),r.a.createElement("div",null,r.a.createElement("div",{className:1===t.category?"trash suchar":"suchar"},r.a.createElement("div",null,r.a.createElement("div",{className:"trashInfo"},1===t.category&&"Suchar znajduje si\u0119 w \u015bmietniku"),t&&void 0===t.joke?t[0].joke.replace(/&quot;/g,'"'):t.joke.replace(/&quot;/g,'"'),r.a.createElement(s.b,{"data-tip":"Link do sucharka",className:"sucharLink",to:"/suchar/".concat(t._id)},r.a.createElement(T.c,null))),r.a.createElement("div",{className:"likeBox"},!a&&r.a.createElement(F,null),r.a.createElement("div",{className:"bookmarkBtn"},u.includes(t._id)?r.a.createElement(T.e,{"data-tip":"Usu\u0144 z ulubionych",onClick:function(){return N(t)},style:{color:"rgb(65,145,245)"}}):r.a.createElement(T.d,{"data-tip":"Dodaj do ulubionych",onClick:function(){return N(t)},style:{color:"rgb(65,145,245)"}}),E&&E.login===t.login&&!c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(T.f,{onClick:function(){x(t._id,"del")},"data-tip":"Usu\u0144 sw\xf3j suchar",style:{marginLeft:20,fontSize:16,color:"orange"}})),E&&3===E.role&&!c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(T.f,{onClick:function(){x(t._id,"admin")},"data-tip":"Do \u015bmietika",style:{marginLeft:20,fontSize:16,color:"red"}})),r.a.createElement(d.a,{effect:"solid",type:"info"})))))},F=a(42),L=function(e){var t=e.title,a=e.desc;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(F.a,null,r.a.createElement("title",null,"".concat(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return e.length<=t?e:e.substr(0,e.lastIndexOf(" ",t))}(t)," - Suchary.js.org")),r.a.createElement("meta",{property:"og:title",content:"".concat(t," - Suchary.js.org")})),a&&r.a.createElement(F.a,null,r.a.createElement("meta",{name:"description",content:a}),r.a.createElement("meta",{property:"og:description",content:a})))},I=function(e){var t=e.page,a=e.next,n=e.prev,c=Object(p.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"paginator"},r.a.createElement("button",{className:"pageBtn",onClick:function(){c(y(n))},disabled:null===n&&!0},"Poprzednia strona"),r.a.createElement("h4",{style:{color:"#eee"}},"Strona: ",t),r.a.createElement("button",{className:"pageBtn",onClick:function(){c(y(a))},disabled:null===a&&!0},"Nast\u0119pna strona")))},U=function(){var e=Object(n.useState)(!0),t=Object(z.a)(e,2),a=t[0],c=t[1],o=Object(i.g)().pageId,l=Object(i.h)(),s=Object(p.c)((function(e){return e.page})),u=Object(p.c)((function(e){return e.jokes})),m=Object(p.c)((function(e){return e.query})),d=Object(p.b)(),E="/smietnik"===l.url?"/cat/1":"",f="/smietnik"===l.url?"/smietnik":"";Object(n.useEffect)((function(){u.isLoading||m||(a&&o>1?(d(k("page/".concat(o)+E)),d(y(o)),c(!1),g(o,f)):(d(k("page/".concat(s)+E)),g(s,f)))}),[s,l.url]);var g=function(e,t){window.history.replaceState(null,"Strona: ".concat(e),"".concat(t,"/strona/").concat(e))},b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"suchary"},u.jokes.map((function(e,t){return r.a.createElement(_,{joke:e,id:t,key:t,jokes:u.jokes,setJokes:function(e){d(k("page/".concat(s)+E,e))}})}))),r.a.createElement(I,{page:s,next:u.next,prev:u.prev}))};return r.a.createElement(r.a.Fragment,null,u.isLoading?r.a.createElement("div",{className:"loader"},r.a.createElement(x.a,{type:"bars",color:"grey"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{title:"Najnowsze suchary - Strona ".concat(s)}),r.a.createElement(b,null)))},P=function(){for(var e=Object(p.c)((function(e){return e.favorites})),t=[{}],a=0;a<e.length;a++){var n=e[a],c=JSON.parse(localStorage.getItem([n]||!1));t[a]={joke:c,_id:n}}return r.a.createElement("div",{className:"suchary"},r.a.createElement(L,{title:"Moje ulubione Suchary <3"}),t.map((function(t,a){return e.length>=1?r.a.createElement(_,{joke:t,id:a,key:a,noLikes:!0}):r.a.createElement("p",{style:{color:"#eee"}},"Nie doda\u0142e\u015b jeszcze \u017cadnego suchara do swojej listy (\u256f\ufe35\u2570,)")})))},A=function(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.jokes}));Object(n.useEffect)((function(){e(k("random"))}),[]);var a=function(){return r.a.createElement("div",{className:"randBtn"},r.a.createElement("button",{className:"pagerBtn",onClick:function(){e(k("random"))}},"Wylosuj ponownie"))},c=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(a,null),r.a.createElement("div",{className:"suchary"},t.jokes.map((function(a,n){return r.a.createElement(_,{joke:a,id:n,key:n,jokes:t.jokes,setJokes:function(t){e(k("random",t))}})}))),r.a.createElement(a,null))};return r.a.createElement(r.a.Fragment,null,t.isLoading?r.a.createElement("div",{className:"loader"},r.a.createElement(x.a,{type:"bars",color:"grey"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{title:"Losowe suchary"}),r.a.createElement(c,null)))},J=function(){var e=Object(i.g)().id,t=Object(p.c)((function(e){return e.jokes})),a=Object(p.b)();Object(n.useEffect)((function(){a(k(e))}),[]);var c=function(e){return r.a.createElement("div",{className:"sucharInfo"},"Dodany przez"," ",r.a.createElement(s.b,{to:"/smieszek/".concat(e.joke.login)},e.joke.login)," w dniu ",String(e.joke.createdOn).replace(/T(.*)/g,""))},o=function(){return r.a.createElement(r.a.Fragment,null,t.jokes.map((function(n,o){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c,{key:10,joke:n}),r.a.createElement(_,{joke:n,id:o,key:o,jokes:t.jokes,rm:!0,setJokes:function(t){a(k(e,t))}}))})))};return r.a.createElement(r.a.Fragment,null,t.isLoading?r.a.createElement("div",{className:"loader"},r.a.createElement(x.a,{type:"bars",color:"grey"})):t.jokes[0]?r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{title:t.jokes[0].joke,desc:t.jokes[0].joke}),r.a.createElement(o,null)):r.a.createElement("h4",{style:{color:"#eee"}},"Brak podanego suchara"))},H=function(){var e=Object(p.b)(),t=Object(n.useState)(""),a=Object(z.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(!1),s=Object(z.a)(l,2),i=s[0],u=s[1],m=Object(n.useState)(!1),d=Object(z.a)(m,2),E=d[0],b=d[1],j=Object(p.c)((function(e){return e.actions}));Object(n.useEffect)((function(){if(j.data.status&&(u(!1),b(!1)),"success"===j.data.status){var t=j.data,a={auth:t.data["User-Token"],login:t.data.Login,role:t.data.Role};localStorage.setItem("auth",JSON.stringify(a)),e(h(a))}"error"===j.data.status&&o(j.data.message)}),[j]);var y=function(){var t=Object(g.a)(f.a.mark((function t(a,n){var r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),"register"!==n){t.next=8;break}if(a.target.password.value===a.target.password2.value){t.next=4;break}return t.abrupt("return",o("Poadane has\u0142a nie zgadzaj\u0105 si\u0119"));case 4:r="users",u(!0),t.next=10;break;case 8:b(!0),r="session";case 10:c={user:{login:a.target.login.value,password:a.target.password.value}},e(w({},r,c,"POST"));case 12:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),v=function(){return r.a.createElement("div",{className:"auth"},r.a.createElement("h1",{style:{color:"#fff",marginBottom:20}},"Zarejestruj si\u0119"),r.a.createElement("form",{onSubmit:function(e){return y(e,"register")}},r.a.createElement("input",{type:"text",name:"login",placeholder:"Login"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",placeholder:"Has\u0142o",name:"password"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",placeholder:"Wpisz ponownie has\u0142o",name:"password2"}),r.a.createElement("br",null),i?r.a.createElement(x.a,{type:"cylon",color:"grey"}):r.a.createElement("input",{style:{borderRadius:10},type:"submit",value:"Zarejestruj"})))},k=function(){return r.a.createElement("div",{className:"auth"},r.a.createElement("h1",{style:{color:"#fff",marginBottom:20}},"Zaloguj si\u0119"),r.a.createElement("form",{onSubmit:function(e){return y(e,"login")}},r.a.createElement("input",{type:"text",name:"login",placeholder:"Login"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",placeholder:"Twoje has\u0142o",name:"password"}),r.a.createElement("br",null),E?r.a.createElement(x.a,{type:"cylon",color:"grey"}):r.a.createElement("input",{style:{borderRadius:10},type:"submit",value:"Zaloguj"})))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{title:"Za\u0142\xf3\u017c konto lub zaloguj si\u0119"}),r.a.createElement("div",{className:"authContent"},r.a.createElement(v,null),r.a.createElement("hr",{style:{marginTop:20,marginBottom:20}}),r.a.createElement(k,null)),r.a.createElement("div",{className:c?"authContent2":"authContent"},c?r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,c)):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,r.a.createElement("em",null,"Witaj! "),"Je\u017celi nie masz jeszcze konta to mo\u017cesz sie zarejestrowac w mniej ni\u017c 15 sekund, lub zaloguj si\u0119. :)"))))},R=function(){return Object(p.b)()(h(!1)),localStorage.removeItem("auth"),r.a.createElement("div",null,r.a.createElement(i.a,{to:"/"}))},B=function(e){var t=e.auth,a=Object(n.useState)(""),c=Object(z.a)(a,2),o=c[0],l=c[1],s=Object(n.useState)(""),u=Object(z.a)(s,2),m=u[0],d=u[1],E=Object(p.c)((function(e){return e.actions})),b=Object(p.b)(),j=function(){var e=Object(g.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!(o.length>5e3||o.length<20)){e.next=3;break}return e.abrupt("return",d("Suchar powinnien mie\u0107 przynajmniej 20 znak\xf3w i maksymalnie 5000 znak\xf3w."));case 3:b(w(t,"jokes",{joke:o,author:t.login},"POST"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(L,{title:"Dodaj nowy Suchar"}),r.a.createElement("form",{onSubmit:j},r.a.createElement("textarea",{className:"suchar",style:{width:"100%",height:"60vh"},onChange:function(e){return l(e.target.value)},name:"suchar",value:o,placeholder:"Tutaj wpisz swojego suchara..."}),E.isLoading?r.a.createElement(x.a,{type:"cylon",color:"grey"}):r.a.createElement("button",{disabled:!(o.length>=20),className:"addBtn"},"Dodaj"),o.length>0&&o.length<20&&r.a.createElement("small",{style:{color:"#aaa"}},"Aby doda\u0107 suchara napisz wi\u0119cej")),r.a.createElement("h4",{style:{color:"#eee"}},E.data.message||m),"success"===E.data.status&&r.a.createElement(i.a,{to:"/suchar/".concat(E.data.data._id)}))},D=function(e){var t=e.auth,a=Object(n.useState)(""),c=Object(z.a)(a,2),o=c[0],l=c[1],s=Object(p.c)((function(e){return e.actions})),i=Object(p.b)(),u=function(){var e=Object(g.a)(f.a.mark((function e(a){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),a.target.newPassword.value===a.target.newPassword2.value){e.next=3;break}return e.abrupt("return",l("Podane has\u0142a nie zgadzaj\u0105 si\u0119"));case 3:n={user:{yourPassword:a.target.currentPassword.value,newPassword:a.target.newPassword.value}},i(w(t,"users",n,"PATCH"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{title:"Ustawienia"}),r.a.createElement("div",{className:"authContent"},r.a.createElement("div",{className:"auth"},r.a.createElement("h1",{style:{color:"#fff",marginBottom:20}},"Zmie\u0144 has\u0142o"),r.a.createElement("form",{onSubmit:u},r.a.createElement("input",{type:"password",name:"currentPassword",placeholder:"Twoje aktualne has\u0142o"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"newPassword",placeholder:"Nowe has\u0142o"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"newPassword2",placeholder:"Podaj ponownie nowe has\u0142o"}),r.a.createElement("br",null),s.isLoading?r.a.createElement(x.a,{type:"cylon",color:"grey"}):r.a.createElement("input",{style:{borderRadius:10},type:"submit",value:"Zmie\u0144 has\u0142o"})))),s.data.message||o?r.a.createElement("div",{className:"authContent"},s.data.message||o):r.a.createElement("div",{className:"authContent"},r.a.createElement("p",null,"Tutaj mo\u017cesz zmieni\u0107 swoje stare has\u0142o na nowe. Pami\u0119taj aby twoje nowe has\u0142o by\u0142o silne i unikatowe!")))},W=function(){var e=Object(i.g)(),t=e.login,a=e.pageId,c=Object(p.c)((function(e){return e.page})),o=Object(n.useState)(!0),l=Object(z.a)(o,2),u=l[0],m=l[1],d=Object(p.b)(),E=Object(p.c)((function(e){return e.auth})),f=Object(p.c)((function(e){return e.jokes})),g=Object(p.c)((function(e){return e.user})),b="user/".concat(t,"/").concat(c);Object(n.useEffect)((function(){d(y(1)),d(O(t))}),[t]),Object(n.useEffect)((function(){u&&a>1?(d(k("user/".concat(t,"/").concat(a))),d(y(a)),m(!1),j(a)):(d(k(b)),j(c))}),[c]);var j=function(e){window.history.replaceState(null,"\u015amieszek: ".concat(t," - Strona: ").concat(e),"/smieszek/".concat(t,"/strona/").concat(e))},h=function(){var e=String(g.user.joined).replace(/T(.*)/g,"");return r.a.createElement("div",{style:{color:"#adadad"}},r.a.createElement("h1",{style:{color:"#eee"}},g.user.login," ",3===g.user.role&&r.a.createElement("span",{style:{color:"red",fontSize:16}},"Administrator"),2===g.user.role&&r.a.createElement("span",{style:{color:"green",fontSize:16}},"Moderator")),r.a.createElement("h4",null,"Punkty: ",r.a.createElement("em",null,g.user.points)),r.a.createElement("h4",null,"Do\u0142\u0105czy\u0142: ",r.a.createElement("em",null,e)),r.a.createElement("h4",null,r.a.createElement(v,{points:g.user.points})),E.login===g.user.login&&r.a.createElement("div",{className:"settingsBox"},"ustawienia:"," ",r.a.createElement(s.b,{style:{color:"#ededed"},to:"/ustawienia/zmianahasla"},"zmie\u0144 has\u0142o")),r.a.createElement("hr",{style:{marginTop:20,marginBottom:20}}))},v=function(e){for(var t=e.points,a=0,n=50,c=100;a<10;){if(a++,c+=50,t>=(n+=50)&&t<=c){var o=a,l=(t-100)/(c-100)*100;break}o=t>550?10:0}return r.a.createElement(r.a.Fragment,null,"Poziom: ",o,l<=550&&w(300,l))},w=function(e,t){var a=e*(t/100);return r.a.createElement(r.a.Fragment,null," ","- ",t,"%",r.a.createElement("div",{style:{position:"relative",lineHeight:"1em",width:e,border:"1px solid #393e46",marginTop:10}},r.a.createElement("div",{style:{height:"1.5em",width:a,backgroundColor:"#393e46"}},r.a.createElement("div",{style:{position:"absolute",textAlign:"center",paddingTop:".25em",width:e,top:0,left:0}},r.a.createElement("small",{style:{color:"white"}},100-t,"% do kolejnego poziomu!")))))},S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{style:{color:"#eee",marginBottom:20}},"Suchary dodane przez ",t),r.a.createElement("div",{className:"suchary"},f.jokes.map((function(e,t){return r.a.createElement(_,{joke:e,id:t,key:t,noLikes:!1,jokes:f.jokes,setJokes:function(e){d(k(b,e))}})}))))};return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,g.isLoading?r.a.createElement("div",{className:"loader"},r.a.createElement(x.a,{type:"bars",color:"grey"})):g.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{title:"Profil ".concat(g.user.login)}),r.a.createElement(h,null),f.isLoading?r.a.createElement(x.a,{type:"cylon",color:"grey"}):r.a.createElement(r.a.Fragment,null,0!==f.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(I,{page:c,next:f.next,prev:f.prev})):r.a.createElement("p",{style:{color:"#eee"}},"Na tym profilu nie ma jeszcze, \u017cadnego suchara (\u256f\ufe35\u2570,)"))):r.a.createElement("p",{style:{color:"#eee"}},"Nie znaleziono \u015bmieszka")))},q=function(){return r.a.createElement("div",{className:"suchar",style:{padding:30}},r.a.createElement(L,{title:"Pomoc"}),r.a.createElement("h1",null,"Punkty"),r.a.createElement("p",null,r.a.createElement("strong",null,"Punkty zdobywa si\u0119 przez aktywno\u015b\u0107 na portalu.")),r.a.createElement("ol",null,r.a.createElement("li",null,"Twoje pierwsze punkty zdobywasz ju\u017c przy rejestracji konta, po rejestracji otrzymujesz 100 punkt\xf3w."),r.a.createElement("li",null,"Za ka\u017cdy dodany nowy suchar otrzymujesz +5 punkt\xf3w, gdy usuniesz sw\xf3j suchar tracisz -5 punkt\xf3w, ale je\u017celi tw\xf3j suchar oka\u017ce si\u0119 spamem, zostanie on przeniesiony do \u015bmietnika, co sprawi, \u017ce z twojego konta znikn\u0105 -10 punkt\xf3w..."),r.a.createElement("li",null,'Osoby kt\xf3rzy maj\u0105 wysok\u0105 ilo\u015b\u0107 punkt\xf3w s\u0105 w gronie "',r.a.createElement(s.b,{style:{color:"#eee"},to:"/top15"},"Top 15"),'" najlepszych pisarzy suchar\xf3w!')),r.a.createElement("h1",{style:{marginTop:30}},"Suchary"),r.a.createElement("p",null,"Wszelkie tre\u015bci generowane s\u0105 przez U\u017cytkownik\xf3w, Administracja nie bierze za nie odpowiedzialno\u015bci. Je\u015bli jaki\u015b Suchar narusza Twoje prawa (w tym autorskie i osobiste) skontaktuj si\u0119 z nami."))},K=function(){var e=Object(p.c)((function(e){return e.user})),t=Object(p.b)();Object(n.useEffect)((function(){t(O({},!0))}),[]);var a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"top15"},r.a.createElement("h2",null,"Top15 pisarzy Suchar\xf3w!"),r.a.createElement("ol",null,e.users.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"topUser"},r.a.createElement(s.b,{className:"topUserA",to:"/smieszek/".concat(e.login)},r.a.createElement("strong",null,e.login)),r.a.createElement("strong",{className:"userPoints"},e.points)))})))))};return r.a.createElement("div",null,e.isLoading?r.a.createElement("div",{className:"loader"},r.a.createElement(x.a,{type:"bars",color:"grey"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{title:"Top15 pisarzy suchar\xf3w"}),r.a.createElement(a,null)))},Q=function(){var e=Object(n.useState)(!0),t=Object(z.a)(e,2),a=t[0],c=t[1],o=Object(i.g)(),l=o.query,s=o.pageId,u=Object(p.b)(),m=Object(p.c)((function(e){return e.page})),d=Object(p.c)((function(e){return e.jokes})),E="search/".concat(l,"/page/");Object(n.useEffect)((function(){d.isLoading||(a&&s>1?(u(k("".concat(E).concat(s))),u(y(s)),c(!1),f(s,l)):(u(k("".concat(E).concat(m))),f(m,l)),u(v(!1)))}),[m,l]);var f=function(e,t){window.history.replaceState(null,"Strona: ".concat(e),"/szukaj/".concat(t,"/strona/").concat(e))},g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"suchary"},d.jokes.map((function(e,t){return r.a.createElement(_,{joke:e,id:t,key:t,jokes:d.jokes,setJokes:function(e){u(k("".concat(E).concat(m),e))}})})),d.jokes.length<1&&r.a.createElement("div",{style:{color:"#eee"}},"Nie znaleziona suchara o szukanej frazie")),r.a.createElement(I,{page:m,next:d.next,prev:d.prev}))};return r.a.createElement(r.a.Fragment,null,d.isLoading?r.a.createElement("div",{className:"loader"},r.a.createElement(x.a,{type:"bars",color:"grey"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{title:"Wyszukiwanie suchara - fraza: '".concat(l,"'")}),r.a.createElement("h3",{style:{color:"#eee",marginBottom:20}},"Wyszukiwanie dla frazy: '",l,"'"),r.a.createElement(g,null)))},Z=function(e){var t=e.auth,a=e.socket,c=Object(n.useState)(""),o=Object(z.a)(c,2),i=o[0],u=o[1],m=Object(n.useState)([]),d=Object(z.a)(m,2),p=d[0],E=d[1],b=Object(n.useState)({message:"\u0142aduje..."}),j=Object(z.a)(b,2),h=j[0],y=j[1],v=Object(n.useState)(""),k=Object(z.a)(v,2),O=k[0],w=k[1],S=Object(n.useRef)(null);Object(n.useEffect)((function(){S.current.scrollIntoView({behavior:"smooth"})})),Object(n.useEffect)((function(){N()}),[]);var N=function(){var e=Object(g.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pbsapi.skorotkiewicz.vercel.app/api/chat/log/messages");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,E(a.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){E([].concat(Object(l.a)(p),[h]))}),[h]),Object(n.useEffect)((function(){a.on("msg",(function(e){y(e)})),a.on("feedback",(function(e){w(e)})),a.on("disconnect",(function(){}))}),[]);var x=function(){var e=new Date;return e.getHours()+":"+((e.getMinutes()<10?"0":"")+e.getMinutes())+" | "};return r.a.createElement("div",null,r.a.createElement("div",{className:"chat-container"},r.a.createElement("div",{className:"chatlog"},p.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("span",{className:"chatinfo"},x()),r.a.createElement("span",null,r.a.createElement(s.b,{className:"chatinfo",to:"/smieszek/".concat(e.username)},e.username,":"))," ",r.a.createElement("span",null,e.message))})),r.a.createElement("div",{ref:S})),r.a.createElement("div",{className:"chatinput"},r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),i.length<2||i.length>256)return w("Wiadomo\u015b\u0107 musi miec przynajmniej 2 znaki i nie moze by\u0107 d\u0142uzsza od 255 znak\xf3w.");a.emit("msg",{message:i}),E([].concat(Object(l.a)(p),[{message:i,username:t.login,time:x()}])),u(""),w("")}},r.a.createElement("input",{type:"text",name:"msg",onChange:function(e){return u(e.target.value)},value:i,placeholder:"Twoja wiadomo\u015b\u0107"}))),O&&r.a.createElement("div",{className:"feedback"},O)))},M=function(){var e=Object(n.useState)(""),t=Object(z.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(z.a)(o,2),s=l[0],u=l[1],m=Object(p.c)((function(e){return e.query})),d=Object(p.b)();return r.a.createElement("div",{className:"searchForm"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),e.target.search.value.length>=3?(d(y(1)),d(v(e.target.search.value)),c(""),u("")):c("Wpisz minimum 3 znaki aby wyszuka\u0107")}},r.a.createElement("input",{onChange:function(e){return u(e.target.value)},type:"text",placeholder:"Wyszukaj suchara...",name:"search",value:s}),r.a.createElement("span",null,a)),m&&r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{to:"/szukaj/".concat(m,"/strona/1")})))};var V=function(){var e=JSON.parse(localStorage.getItem("favorites")||0),t=JSON.parse(localStorage.getItem("likes")||0),a=JSON.parse(localStorage.getItem("auth")||0),c=Object(p.c)((function(e){return e.auth})),o=Object(p.b)();if(c){var u=m()("ws://51.116.191.49/",{query:"token=".concat(c.auth),path:"/socket.io",transports:["websocket"],secure:!1});u.on("connect",(function(){}))}return Object(n.useEffect)((function(){0!==e&&o(b(Object(l.a)(e))),0!==t&&o(j(Object(l.a)(t))),0!==a&&o(h(a))}),[]),r.a.createElement(s.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(S,null),r.a.createElement("div",{className:"content"},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0,component:U}),r.a.createElement(i.b,{path:"/strona/:pageId",exact:!0,component:U}),r.a.createElement(i.b,{path:"/smietnik",exact:!0,component:U}),r.a.createElement(i.b,{path:"/smietnik/strona/:pageId",exact:!0,component:U}),r.a.createElement(i.b,{path:"/losowe",exact:!0,component:A}),r.a.createElement(i.b,{path:"/pomoc",exact:!0,component:q}),r.a.createElement(i.b,{path:"/mojeulubione",exact:!0,component:P}),r.a.createElement(i.b,{path:"/suchar/:id",exact:!0,component:J}),r.a.createElement(i.b,{path:"/smieszek/:login",exact:!0,component:W}),r.a.createElement(i.b,{path:"/top15",exact:!0,component:K}),r.a.createElement(i.b,{path:"/czat",exact:!0},c?r.a.createElement(Z,{auth:c,socket:u}):r.a.createElement(i.a,{to:"/auth"})),r.a.createElement(i.b,{path:"/szukaj/:query/strona/:pageId",exact:!0,component:Q}),r.a.createElement(i.b,{path:"/smieszek/:login/strona/:pageId",exact:!0,component:W}),r.a.createElement(i.b,{path:"/auth",exact:!0},c?r.a.createElement(i.a,{to:"/dodaj"}):r.a.createElement(H,null)),r.a.createElement(i.b,{path:"/wyloguj",exact:!0},c&&r.a.createElement(R,null)),r.a.createElement(i.b,{path:"/dodaj",exact:!0},c?r.a.createElement(B,{auth:c}):r.a.createElement(i.a,{to:"/auth"})),r.a.createElement(i.b,{path:"/ustawienia/zmianahasla",exact:!0},c?r.a.createElement(D,{auth:c}):r.a.createElement(i.a,{to:"/auth"})),r.a.createElement(i.b,{path:"*",exact:!0,component:function(){return r.a.createElement("h3",{style:{color:"#eee"}},"Nie znaleziono strony (\u256f\ufe35\u2570,)")}}))),r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"a"},r.a.createElement(s.b,{className:"footerLink",to:"/pomoc"},"pomoc")," ","|",r.a.createElement(s.b,{className:"footerLink",to:"/top15"},"top15")," ","|",r.a.createElement(s.b,{className:"footerLink",to:"/smietnik",onClick:function(){o(y(1)),o(k("page/1/cat/1"))}},"\u015bmietnik")," ","|",r.a.createElement("a",{className:"footerLink",href:"https://github.com/skorotkiewicz/suchary"},"opensource")),r.a.createElement("div",{className:"b ctr"},r.a.createElement(M,null)),r.a.createElement("div",{className:"c ctr"},"\xa9 Suchary 2020")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $,G=a(16),X=Object(G.combineReducers)({favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setFavorites":return t.payload;default:return e}},likes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setLikes":return t.payload;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setAuth":return t.payload;default:return e}},page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setPage":return t.payload;default:return e}},jokes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{jokes:[],isLoading:!1,error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_JOKES_REQUEST":return Object(C.a)(Object(C.a)({},e),{},{isLoading:!0,error:null});case"FETCH_JOKES_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{isLoading:!1,jokes:t.payload,next:t.next,prev:t.prev});case"FETCH_JOKES_FAILURE":return Object(C.a)(Object(C.a)({},e),{},{isLoading:!1,error:t.error});case"UPDATE_JOKES_STATE":return Object(C.a)(Object(C.a)({},e),{},{isLoading:!1,jokes:t.payload});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:[],users:[],isLoading:!1,error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER_REQUEST":return Object(C.a)(Object(C.a)({},e),{},{isLoading:!0,error:null});case"FETCH_USER_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{isLoading:!1,user:t.payload});case"FETCH_USERS_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{isLoading:!1,users:t.payload});case"FETCH_USER_FAILURE":return Object(C.a)(Object(C.a)({},e),{},{isLoading:!1,error:t.error});default:return e}},actions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:[],isLoading:!1,error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ACTION_REQUEST":return Object(C.a)(Object(C.a)({},e),{},{isLoading:!0,error:null});case"FETCH_ACTION_SUCCESS":return Object(C.a)(Object(C.a)({},e),{},{isLoading:!1,data:t.payload});case"FETCH_ACTION_FAILURE":return Object(C.a)(Object(C.a)({},e),{},{isLoading:!1,error:t.error});case"FETCH_ACTION_CLEAN":return Object(C.a)(Object(C.a)({},e),{},{data:{}});default:return e}},query:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setQuery":return t.payload;default:return e}}}),Y=a(59);a(101);$=Object(G.createStore)(X,Object(G.applyMiddleware)(Y.a)),o.a.render(r.a.createElement(p.a,{store:$},r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t,a){e.exports=a(102)},65:function(e,t,a){},91:function(e,t){},94:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.3f93c6bc.chunk.js.map