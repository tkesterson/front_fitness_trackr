(this.webpackJsonpfront_fitness_trackr=this.webpackJsonpfront_fitness_trackr||[]).push([[0],{13:function(e,t,n){"use strict";function r(e,t){return fetch("https://fitnesstrac-kr.herokuapp.com/api/users/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.error(e.response.data)}))}function c(e,t){return fetch("https://fitnesstrac-kr.herokuapp.com/api/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.error(e.response.data)}))}function a(){localStorage.removeItem("token")}n.r(t),n.d(t,"register",(function(){return r})),n.d(t,"signIn",(function(){return c})),n.d(t,"clearCurrentUser",(function(){return a}))},33:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(3),s=n(4),i=n(1),u=n(20),o=n.n(u),j=n(7),b=n(13),p=n(0),l=function(e){var t=e.setCurrentUser,n=e.currentUser;return Object(p.jsxs)("header",{children:[Object(p.jsx)("h1",{children:"Welcome to Fitness Trackr"}),Object(p.jsx)(j.b,{to:"/Home",children:"Home"}),Object(p.jsx)("br",{}),n?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(j.b,{to:"/MyRoutines",children:"My Routines"}),Object(p.jsx)("br",{})]}):null,Object(p.jsx)(j.b,{to:"/Routines",children:"Routines"}),Object(p.jsx)("br",{}),Object(p.jsx)(j.b,{to:"/Activities",children:"Activities"}),Object(p.jsx)("br",{}),n?Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(j.b,{to:"/Home",onClick:function(){Object(b.clearCurrentUser)(),t(null)},children:["Log Out, ",n]})}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(j.b,{to:"/SignIn",children:"Login/Register"}),Object(p.jsx)("br",{})]})]})},h="https://fitnesstrac-kr.herokuapp.com/api/";function O(e){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(h).concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function f(e,t){return x.apply(this,arguments)}function x(){return(x=Object(a.a)(c.a.mark((function e(t,n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(h).concat(t),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:return r=e.sent,e.prev=4,e.next=7,r.json();case 7:a=e.sent,e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(4),e.abrupt("return",[]);case 13:return e.abrupt("return",a);case 16:return e.prev=16,e.t1=e.catch(0),console.error(e.t1),e.abrupt("return",[]);case 20:case"end":return e.stop()}}),e,null,[[0,16],[4,10]])})))).apply(this,arguments)}var v=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(i.useEffect)(Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("Routines");case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)}))),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:"All Public Routines."}),n.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("h3",{children:["Name: ",e.name," | Goal: ",e.goal," | Creator: ",e.creatorName]}),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h4",{style:{textIndent:20},children:"Included Activities:"}),e.activities.map((function(e){return Object(p.jsxs)(i.Fragment,{children:[Object(p.jsxs)("h5",{style:{textIndent:40},children:["Name: ",e.name," | Duration: ",e.duration," | Count:"," ",e.count]}),e.description?Object(p.jsxs)("h6",{style:{textIndent:60},children:["\u2af7",e.description,"\u2af8"]},e.name):null]},e.id)}))]})]},e.id)}))]})},m=function(e){var t=e.activities,n=e.currentUser;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{children:n?Object(p.jsx)(j.b,{to:"NewActivity",children:Object(p.jsx)("button",{children:"Add New Activity"})}):null}),Object(p.jsx)("h4",{children:"Id - Name - Description"}),t.map((function(e){return Object(p.jsx)("div",{children:Object(p.jsxs)("h5",{children:[e.id," - ",e.name," - ",e.description]})},e.id)}))]})},y=n(18),g=n(5);function k(e,t,n,r){return w.apply(this,arguments)}function w(){return(w=Object(a.a)(c.a.mark((function e(t,n,r,a){var s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://fitnesstrac-kr.herokuapp.com/api/routines/".concat(t,"/activities"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({activityId:n,count:r,duration:a})});case 3:return s=e.sent,e.next=6,s.json();case 6:return i=e.sent,e.abrupt("return",i);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function S(e,t){return C.apply(this,arguments)}function C(){return(C=Object(a.a)(c.a.mark((function e(t,n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://fitnesstrac-kr.herokuapp.com/api/routine_activities/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function A(e,t,n){return I.apply(this,arguments)}function I(){return(I=Object(a.a)(c.a.mark((function e(t,n,r){var a,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://fitnesstrac-kr.herokuapp.com/api/activities",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},body:JSON.stringify({name:t,description:n})});case 3:return a=e.sent,e.next=6,a.json();case 6:return s=e.sent,e.abrupt("return",s);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function D(e,t,n,r){return U.apply(this,arguments)}function U(){return(U=Object(a.a)(c.a.mark((function e(t,n,r,a){var s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n,r),e.prev=1,e.next=4,fetch("https://fitnesstrac-kr.herokuapp.com/api/routine_activities/".concat(t),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify({count:n,duration:r})});case 4:return s=e.sent,e.next=7,s.json();case 7:return i=e.sent,e.abrupt("return",i);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",console.error(e.t0));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function T(e,t,n,r){return R.apply(this,arguments)}function R(){return(R=Object(a.a)(c.a.mark((function e(t,n,r,a){var s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://fitnesstrac-kr.herokuapp.com/api/routines",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify({name:t,goal:n,isPublic:r})});case 3:return s=e.sent,e.next=6,s.json();case 6:return i=e.sent,e.abrupt("return",i);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function N(){return(N=Object(a.a)(c.a.mark((function e(t,n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://fitnesstrac-kr.herokuapp.com/api/routines/".concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function P(e,t,n,r,c){return F.apply(this,arguments)}function F(){return(F=Object(a.a)(c.a.mark((function e(t,n,r,a,s){var i,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t,n,r,a,s),e.next=5,fetch("https://fitnesstrac-kr.herokuapp.com/api/routines/".concat(t),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)},body:JSON.stringify({name:n,goal:r,isPublic:a})});case 5:return i=e.sent,e.next=8,i.json();case 8:return u=e.sent,e.abrupt("return",u);case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}var E=function(e){var t=e.setActivityToUpdate,n=e.setRoutine,r=e.currentUser,u=e.token,o=e.activities,b=Object(i.useState)([]),l=Object(s.a)(b,2),h=l[0],O=l[1],d=Object(i.useState)(""),x=Object(s.a)(d,2),v=x[0],m=x[1],w=Object(i.useState)(""),C=Object(s.a)(w,2),A=C[0],I=C[1],D=Object(i.useState)(""),U=Object(s.a)(D,2),T=U[0],R=U[1],P=Object(g.f)();function F(e){m(e.target.value)}function E(e){I(e.target.value)}function M(e){R(e.target.value)}function B(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r,a,s,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,k(e,T,v,A);case 3:r=t.sent,a=o.find((function(e){return e.id===r.activityId})),(s=Object(y.a)({},a)).duration=r.duration,s.count=r.count,s.routineId=r.routineId,s.routineActivityId=r.id,i=h.map((function(e){return e.id===s.routineId&&e.activities.push(s),e})),O(i);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function J(){return(J=Object(a.a)(c.a.mark((function e(t,n,r){var a,s,i,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!confirm("Delete ".concat(n,"?"))){e.next=13;break}return e.next=4,S(t,r);case 4:a=e.sent,s=o.find((function(e){return e.id===a.activityId})),(i=Object(y.a)({},s)).duration=a.duration,i.count=a.count,i.routineId=a.routineId,i.routineActivityId=a.id,u=h.map((function(e){return e.id===i.routineId&&(e.activities=e.activities.filter((function(e){return e.id!==i.id}))),e})),O(u);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e,t,n){confirm("Delete ".concat(t,"?"))&&(!function(e,t){N.apply(this,arguments)}(e,n),P.push("/Deleted"))}function H(e){return function(n){n.preventDefault(),t(e),P.push("/UpdateActivity")}}return Object(i.useEffect)(Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("users/".concat(r,"/routines"),u);case 2:(t=e.sent)&&O(t);case 4:case"end":return e.stop()}}),e)}))),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:"My Routines"}),Object(p.jsx)(j.b,{to:"NewRoutine",children:Object(p.jsx)("button",{children:"Add New Routine"})}),h.map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("h3",{children:["Name: ",e.name," | Goal: ",e.goal," | Creator: ",e.creatorName,Object(p.jsxs)("button",{type:"button",onClick:(t=e,function(e){e.preventDefault(),n(t),P.push("/UpdateRoutine")}),children:["Update ",e.name]})]}),Object(p.jsx)("h4",{style:{textIndent:20},children:"Included Activities:"}),e.activities.map((function(e){return Object(p.jsxs)(i.Fragment,{children:[Object(p.jsxs)("h4",{style:{textIndent:40},children:["Name: ",e.name," | Duration: ",e.duration," | Count: ",e.count,Object(p.jsx)("button",{onClick:H(e),children:"Update"}),Object(p.jsx)("button",{onClick:function(){return function(e,t,n){return J.apply(this,arguments)}(e.routineActivityId,e.name,u)},children:"Delete"})]}),Object(p.jsxs)("h5",{style:{textIndent:60},children:["\u2af7",e.description,"\u2af8"]},e.name)]},e.id)})),Object(p.jsxs)("form",{onSubmit:B(e.id),children:[Object(p.jsxs)("label",{children:["Activity to Add:",Object(p.jsxs)("select",{style:{width:"130px"},onChange:M,defaultValue:"none",children:[Object(p.jsx)("option",{value:"none",disabled:!0,hidden:!0,children:"Select an Option"}),o.map((function(e){return Object(p.jsxs)("option",{value:e.id,children:[e.name," - ",e.description]},e.id)}))]})]}),Object(p.jsxs)("label",{children:["Duration:",Object(p.jsx)("input",{type:"number",style:{width:"50px"},onChange:F})]}),Object(p.jsxs)("label",{children:["Count:",Object(p.jsx)("input",{type:"number",style:{width:"50px"},onChange:E})]}),Object(p.jsxs)("button",{children:["Add Activity to ",e.name]})]}),Object(p.jsx)("button",{type:"button",onClick:function(){return z(e.id,e.name,u)},children:"Delete Routine"})]},e.id);var t}))]})},M=n(13).signIn,B=function(e){var t=e.setToken,n=e.setCurrentUser,r=Object(i.useState)(""),u=Object(s.a)(r,2),o=u[0],b=u[1],l=Object(i.useState)(""),h=Object(s.a)(l,2),O=h[0],d=h[1],f=Object(g.f)();function x(){d(""),b("")}var v=function(){var e=Object(a.a)(c.a.mark((function e(r){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,M(o,O);case 3:(a=e.sent).token?(localStorage.setItem("token",a.token),t(a.token),n(a.user.username),x(),f.push("/MyRoutines")):(alert(a.message),x());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Sign In"}),Object(p.jsxs)("form",{onSubmit:v,children:[Object(p.jsxs)("label",{children:["Username: ",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",value:o,onChange:function(e){e.preventDefault(),b(e.target.value)}}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("label",{children:["Password: ",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"password",value:O,onChange:function(e){e.preventDefault(),d(e.target.value)}})]}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"submit",children:"Sign In"})]}),Object(p.jsx)("br",{}),Object(p.jsx)(j.b,{to:"/SignUp",children:"Need an Account? Sign Up!"})]})},J=n(13).register,z=function(e){var t=e.setToken,n=e.setCurrentUser,r=Object(i.useState)(""),u=Object(s.a)(r,2),o=u[0],b=u[1],l=Object(i.useState)(""),h=Object(s.a)(l,2),O=h[0],d=h[1],f=Object(g.f)();var x=function(){var e=Object(a.a)(c.a.mark((function e(r){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,J(o,O);case 3:(a=e.sent).token?(localStorage.setItem("token",a.token),t(a.token),n(a.user.username),d(""),b(""),f.push("/MyRoutines")):alert(a.message);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Sign Up"}),Object(p.jsxs)("form",{onSubmit:x,children:[Object(p.jsxs)("label",{children:["Username: ",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",value:o,onChange:function(e){e.preventDefault(),b(e.target.value)}}),Object(p.jsx)("br",{})]}),Object(p.jsxs)("label",{children:["Password: ",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",value:O,onChange:function(e){e.preventDefault(),d(e.target.value)}})]}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"submit",children:"Sign Up"})]}),Object(p.jsx)("br",{}),Object(p.jsx)(j.b,{to:"/SignIn",children:"Already Have An Account? Sign In."})]})},H=function(e){var t=e.currentUser;return Object(p.jsx)("div",{children:Object(p.jsxs)("h1",{children:["Welcome Home",t?", ".concat(t,"."):"."]})})},_=function(e){var t=e.token,n=Object(i.useState)(""),r=Object(s.a)(n,2),u=r[0],o=r[1],j=Object(i.useState)(""),b=Object(s.a)(j,2),l=b[0],h=b[1],O=Object(i.useState)(!1),d=Object(s.a)(O,2),f=d[0],x=d[1],v=Object(g.f)();var m=function(){var e=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,T(u,l,f,t);case 3:(r=e.sent).error?alert(r.message):(o(""),h(""),x(!1),v.push("/MyRoutines"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Create a New Routine."}),Object(p.jsxs)("form",{onSubmit:m,children:[Object(p.jsxs)("label",{children:["Name: ",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",value:u,onChange:function(e){e.preventDefault(),o(e.target.value)}}),Object(p.jsx)("br",{})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{children:["Goal: ",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",value:l,onChange:function(e){e.preventDefault(),h(e.target.value)}}),Object(p.jsx)("br",{})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{children:["Public Routine?",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{children:["Public",Object(p.jsx)("input",{type:"checkbox",value:f,onChange:function(e){console.log(e.target.checked),x(e.target.checked)}})]}),Object(p.jsx)("br",{})]}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"submit",children:"Create!"})]})]})},G=function(){var e=Object(g.f)();return Object(i.useEffect)((function(){var t=setTimeout((function(){return e.push("/MyRoutines")}),1500);return function(){return clearTimeout(t)}}),[]),Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"The Item Was Deleted."})})},L=function(){var e=Object(g.f)();return Object(i.useEffect)((function(){var t=setTimeout((function(){return e.push("/MyRoutines")}),1500);return function(){return clearTimeout(t)}}),[]),Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"The Activity Was Added."})})},W=function(e){var t=e.routine,n=e.token,r=Object(i.useState)(""),u=Object(s.a)(r,2),o=u[0],j=u[1],b=Object(i.useState)(""),l=Object(s.a)(b,2),h=l[0],O=l[1],d=Object(i.useState)(""),f=Object(s.a)(d,2),x=f[0],v=f[1],m=Object(i.useState)(!1),y=Object(s.a)(m,2),k=y[0],w=y[1],S=Object(g.f)();Object(i.useEffect)((function(){j(t.id),O(t.name),v(t.goal),w(t.isPublic)}),[]);var C=function(){var e=Object(a.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,P(o,h,x,k,n);case 3:(r=e.sent).error?alert(r.message):(O(""),v(""),w(!1),S.push("/MyRoutines"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Update a Routine."}),Object(p.jsxs)("form",{onSubmit:C,children:[Object(p.jsxs)("label",{children:["Name: ",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",placeholder:t.name,value:h,onChange:function(e){e.preventDefault(),O(e.target.value)}}),Object(p.jsx)("br",{})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{children:["Goal: ",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",placeholder:t.goal,value:x,onChange:function(e){e.preventDefault(),v(e.target.value)}}),Object(p.jsx)("br",{})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{children:["Public Routine?",Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{children:["Public",Object(p.jsx)("input",{type:"checkbox",value:k,onChange:function(e){w(e.target.checked)}})]}),Object(p.jsx)("br",{})]}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"submit",children:"Update!"})]})]})},V=function(e){var t=e.token,n=Object(i.useState)(""),r=Object(s.a)(n,2),u=r[0],o=r[1],j=Object(i.useState)(""),b=Object(s.a)(j,2),l=b[0],h=b[1],O=Object(g.f)();var d=function(){var e=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,A(u,l,t);case 3:(r=e.sent).error?alert(r.message):(o(""),h(""),O.push("/Activities"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{children:"Create a New Activity"}),Object(p.jsxs)("form",{onSubmit:d,children:[Object(p.jsxs)("label",{children:["Name: ",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",value:u,onChange:function(e){e.preventDefault(),o(e.target.value)}})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{children:["Description: ",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",value:l,onChange:function(e){e.preventDefault(),h(e.target.value)}})]}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"submit",children:"Create!"})]})]})},q=function(e){var t=e.activityToUpdate,n=e.token,r=Object(i.useState)(""),u=Object(s.a)(r,2),o=u[0],j=u[1],b=Object(i.useState)(""),l=Object(s.a)(b,2),h=l[0],O=l[1],d=Object(i.useState)(""),f=Object(s.a)(d,2),x=f[0],v=f[1],m=Object(g.f)();Object(i.useEffect)((function(){j(t.routineActivityId),O(t.count),v(t.duration)}),[]);var y=function(){var e=Object(a.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,D(o,h,x,n);case 3:(r=e.sent).error?alert(r.message):(O(""),v(""),m.push("/MyRoutines"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("h1",{children:[t.name," \u21b4"]}),Object(p.jsxs)("h3",{style:{textIndent:40},children:["\u2af7",t.description,"\u2af8"]}),Object(p.jsxs)("form",{onSubmit:y,children:[Object(p.jsxs)("label",{children:["Count: ",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",value:h,onChange:function(e){e.preventDefault(),O(e.target.value)}}),Object(p.jsx)("br",{})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{children:["Duration: ",Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"text",value:x,onChange:function(e){e.preventDefault(),v(e.target.value)}}),Object(p.jsx)("br",{})]}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{type:"submit",children:"Update!"})]})]})};function K(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://fitnesstrac-kr.herokuapp.com/api/users/me",{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(e){return e})).catch(console.error));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var X=function(){var e=Object(i.useState)(localStorage.getItem("token")||""),t=Object(s.a)(e,2),n=t[0],r=t[1],u=Object(i.useState)(null),o=Object(s.a)(u,2),b=o[0],h=o[1],d=Object(i.useState)([]),f=Object(s.a)(d,2),x=f[0],y=f[1],k=Object(i.useState)({}),w=Object(s.a)(k,2),S=w[0],C=w[1],A=Object(i.useState)({}),I=Object(s.a)(A,2),D=I[0],U=I[1];return Object(i.useEffect)(Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=3;break}return e.next=3,K(n).then((function(e){h(e.username)}));case 3:case"end":return e.stop()}}),e)}))),[]),Object(i.useEffect)(Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("Activities");case 2:t=e.sent,y(t);case 4:case"end":return e.stop()}}),e)}))),[]),Object(p.jsx)(j.a,{children:Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(l,{setCurrentUser:h,currentUser:b}),Object(p.jsxs)(g.c,{children:[Object(p.jsx)(g.a,{path:"/Home",children:Object(p.jsx)(H,{currentUser:b})}),Object(p.jsx)(g.a,{path:"/Routines",children:Object(p.jsx)(v,{})}),Object(p.jsx)(g.a,{path:"/Activities",children:Object(p.jsx)(m,{currentUser:b,activities:x})}),Object(p.jsx)(g.a,{path:"/MyRoutines",children:b?Object(p.jsx)(E,{setActivityToUpdate:U,setRoutine:C,currentUser:b,token:n,activities:x}):null}),Object(p.jsx)(g.a,{path:"/SignIn",children:Object(p.jsx)(B,{setToken:r,setCurrentUser:h})}),Object(p.jsx)(g.a,{path:"/SignUp",children:Object(p.jsx)(z,{setToken:r,setCurrentUser:h})}),Object(p.jsx)(g.a,{path:"/NewRoutine",children:Object(p.jsx)(_,{token:n})}),Object(p.jsx)(g.a,{path:"/NewActivity",children:Object(p.jsx)(V,{token:n})}),Object(p.jsx)(g.a,{path:"/Deleted",children:Object(p.jsx)(G,{})}),Object(p.jsx)(g.a,{path:"/Added",children:Object(p.jsx)(L,{})}),Object(p.jsx)(g.a,{path:"/UpdateRoutine",children:Object(p.jsx)(W,{routine:S,token:n})}),Object(p.jsx)(g.a,{path:"/UpdateActivity",children:Object(p.jsx)(q,{activityToUpdate:D,token:n})})]})]})})};o.a.render(Object(p.jsx)(X,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.30f98fda.chunk.js.map