(this["webpackJsonprecruitment-portal"]=this["webpackJsonprecruitment-portal"]||[]).push([[0],{163:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},252:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n(0),c=n.n(a),i=n(28),s=n.n(i),o=n(82),u=(n(163),n(54)),d=n.n(u),j=n(72),l=n(154),b=n(88),h=n(257),p=n(263),O=(n(164),n(113)),x=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Got error for URL: ",t,e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),f="shortlisted",m="rejected",g="inProgress",v=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("http://localhost:3000/he-public-data/users49b8675.json");case 3:return t=e.sent,e.abrupt("return",t.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{state:g})})));case 7:e.prev=7,e.t0=e.catch(0),console.log("Error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),S=n(27),C={HOME_URL:"/",CANDIDATES_DETAILS:"/:id",SHORTLISTED:"/shortlisted",REJECTED:"/rejected"},E=n(264),y=n(258),I=n(153),T=n(259),w=n(262),L=(n(165),E.a.Search),R=y.a.Meta,D=Object(S.g)((function(e){var t=e.candidates,n=e.history,c=Object(a.useState)(""),i=Object(b.a)(c,2),s=i[0],o=i[1],u=Object(a.useState)([]),d=Object(b.a)(u,2),j=d[0],l=d[1];return Object(a.useEffect)((function(){var e=t.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}));l(e)}),[t,s]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(L,{placeholder:"Enter Candidate Name",allowClear:!0,enterButton:"Search",size:"large",style:{width:320,margin:"10px 10px"},onSearch:function(e){return o(e)}}),Object(r.jsx)(I.a,{type:"primary",style:{height:40,margin:"10px 10px"},onClick:function(){return n.push(C.SHORTLISTED)},children:"Shortlisted Candidates"}),Object(r.jsx)(I.a,{type:"primary",style:{height:40,margin:"10px 10px"},onClick:function(){return n.push(C.REJECTED)},children:"Rejected Candidates"}),Object(r.jsx)(T.b,{grid:{gutter:16,xs:1,sm:2,md:3,lg:4,xl:4},dataSource:j,renderItem:function(e){return Object(r.jsx)(T.b.Item,{children:Object(r.jsx)(y.a,{onClick:function(){return n.push("/".concat(e.id))},style:{width:230,marginTop:16},hoverable:!0,children:Object(r.jsx)(R,{avatar:Object(r.jsx)(w.a,{src:e.Image}),title:e.name})})})}})]})})),k=n(261),A=n(265),F=n(260),H=k.a.Text,M=Object(S.g)((function(e){var t=e.candidates,n=e.updateCandidateApplicationState,c=e.match,i=e.history,s=c.params.id,o=Object(a.useMemo)((function(){return t.find((function(e){return e.id===s}))}),[t,s]),u=function(){i.push("/")},d=o&&o.state!==f,j=o&&o.state!==m;return Object(r.jsx)("div",{children:o?Object(r.jsxs)(A.b,{style:{margin:10},children:[Object(r.jsx)(F.a,{width:200,src:o.Image}),Object(r.jsxs)(A.b,{size:"large",children:[Object(r.jsx)(H,{strong:!0,children:o.name}),d&&Object(r.jsx)(I.a,{type:"primary",onClick:function(){n(o.id,f),u()},children:"Shortlist"}),j&&Object(r.jsx)(I.a,{danger:!0,type:"primary",onClick:function(){n(o.id,m),u()},children:"Reject"})]})]}):Object(r.jsx)(H,{strong:!0,children:"No User Found!"})})})),J=k.a.Title,N=Object(S.g)((function(e){var t=e.candidates,n=e.location.pathname.replace("/",""),a=n===f?"Shortlisted Candidates":"Rejected Candidates",c=t.filter((function(e){return e.state===n}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(J,{level:2,children:a}),Object(r.jsx)(T.b,{itemLayout:"horizontal",dataSource:c,renderItem:function(e){return Object(r.jsx)(T.b.Item,{children:Object(r.jsx)(T.b.Item.Meta,{avatar:Object(r.jsx)(w.a,{src:e.Image}),title:e.name})})}})]})})),U=function(e){var t=e.candidates,n=e.updateCandidateApplicationState;return Object(r.jsxs)(S.d,{children:[Object(r.jsx)(S.b,{exact:!0,path:C.HOME_URL,children:Object(r.jsx)(D,{candidates:t})}),Object(r.jsx)(S.b,{exact:!0,path:C.SHORTLISTED,children:Object(r.jsx)(N,{candidates:t})}),Object(r.jsx)(S.b,{exact:!0,path:C.REJECTED,children:Object(r.jsx)(N,{candidates:t})}),Object(r.jsx)(S.b,{exact:!0,path:C.CANDIDATES_DETAILS,children:Object(r.jsx)(M,{candidates:t,updateCandidateApplicationState:n})}),Object(r.jsx)(S.a,{from:"/*",to:C.HOME_URL})]})},_=h.a.Header,z=h.a.Content,B=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.jsxs)(h.a,{className:"layout",children:[Object(r.jsx)(_,{children:Object(r.jsx)(p.a,{theme:"dark",mode:"horizontal",children:Object(r.jsx)(p.a.Item,{children:Object(r.jsx)(o.b,{to:"/",children:"Recruitment"})})})}),Object(r.jsx)(z,{style:{padding:"0 50px",height:"calc(100vh - 60px)"},children:Object(r.jsx)(U,{candidates:n,updateCandidateApplicationState:function(e,t){var r=Object(l.a)(n);r.find((function(t){return t.id===e})).state=t,c(r)}})})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,266)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(o.a,{basename:"/recruitment-portal",children:Object(r.jsx)(B,{})})}),document.getElementById("root")),P()}},[[252,1,2]]]);
//# sourceMappingURL=main.439d8148.chunk.js.map