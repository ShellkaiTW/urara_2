import{s as W,b as X,f as de,u as Y,g as x,d as ee,C as Ae,D as fe,E as Ve,F as se,n as N,a as re,e as ge}from"../chunks/scheduler.BWDpjmD3.js";import{S as G,i as Z,e as d,t as K,s as y,c as g,a as A,b as Q,d as a,f as w,u as _,g as m,h as H,j as ae,n as $,o as h,H as je,r as qe,B as ce,y as me,k as B,l as P,m as L,p as M,q as U,v as ue,w as He}from"../chunks/index.Cp4SeObe.js";import{s as q,e as oe}from"../chunks/icon.Dh892flD.js";import{P as Ne,g as ze,a as ve}from"../chunks/post_layout.BJmWFwiQ.js";import"../chunks/posts.BrsPxbte.js";function Ce(u){let e,i;return{c(){e=d("div"),i=K(u[2]),this.h()},l(n){e=g(n,"DIV",{class:!0});var t=A(e);i=Q(t,u[2]),t.forEach(a),this.h()},h(){_(e,"class","opacity-50")},m(n,t){m(n,e,t),H(e,i)},p(n,t){t&4&&ae(i,n[2])},d(n){n&&a(e)}}}function be(u){let e,i,n=(u[3]??q.author.bio)+"";return{c(){e=d("div"),i=new je(!1),this.h()},l(t){e=g(t,"DIV",{});var l=A(e);i=qe(l,!1),l.forEach(a),this.h()},h(){i.a=null},m(t,l){m(t,e,l),i.m(n,e)},p(t,l){l&8&&n!==(n=(t[3]??q.author.bio)+"")&&i.p(n)},d(t){t&&a(e)}}}function Re(u){let e,i,n=(u[1]??q.author.name)+"",t,l,s,o,r,c,v,p,k,I,V=(u[1]??q.author.name)+"",te,O,j,S,E=u[2]&&Ce(u),F=(u[3]||q.author.bio)&&be(u);const J=u[5].default,T=X(J,u,u[4],null);return{c(){e=d("div"),i=d("div"),t=K(n),l=y(),s=d("div"),o=d("div"),r=d("img"),p=y(),E&&E.c(),k=y(),I=d("div"),te=K(V),O=y(),F&&F.c(),j=y(),T&&T.c(),this.h()},l(C){e=g(C,"DIV",{class:!0});var b=A(e);i=g(b,"DIV",{class:!0});var z=A(i);t=Q(z,n),z.forEach(a),l=w(b),s=g(b,"DIV",{class:!0});var ne=A(s);o=g(ne,"DIV",{class:!0});var le=A(o);r=g(le,"IMG",{class:!0,src:!0,alt:!0,loading:!0,decoding:!0}),le.forEach(a),ne.forEach(a),p=w(b),E&&E.l(b),k=w(b),I=g(b,"DIV",{class:!0});var R=A(I);te=Q(R,V),R.forEach(a),O=w(b),F&&F.l(b),j=w(b),T&&T.l(b),b.forEach(a),this.h()},h(){_(i,"class","absolute -top-4 opacity-10 text-[12rem] text-neutral leading-tight rotate-[30deg]"),_(r,"class","hover:rotate-[360deg] transition-transform duration-1000 ease-in-out m-0"),de(r.src,c=u[0]??q.author.avatar)||_(r,"src",c),_(r,"alt",v=u[1]??q.author.name),_(r,"loading","lazy"),_(r,"decoding","async"),_(o,"class","rounded-full border-2 border-white shadow-xl w-16 h-16"),_(s,"class","avatar mb-4"),_(I,"class","text-2xl mb-2"),_(e,"class","relative w-auto min-h-48 rounded-box overflow-hidden bg-gradient-to-b from-primary to-secondary text-primary-content transition-shadow duration-200 shadow-xl hover:shadow-2xl p-4 md:p-8 my-4")},m(C,b){m(C,e,b),H(e,i),H(i,t),H(e,l),H(e,s),H(s,o),H(o,r),H(e,p),E&&E.m(e,null),H(e,k),H(e,I),H(I,te),H(e,O),F&&F.m(e,null),H(e,j),T&&T.m(e,null),S=!0},p(C,[b]){(!S||b&2)&&n!==(n=(C[1]??q.author.name)+"")&&ae(t,n),(!S||b&1&&!de(r.src,c=C[0]??q.author.avatar))&&_(r,"src",c),(!S||b&2&&v!==(v=C[1]??q.author.name))&&_(r,"alt",v),C[2]?E?E.p(C,b):(E=Ce(C),E.c(),E.m(e,k)):E&&(E.d(1),E=null),(!S||b&2)&&V!==(V=(C[1]??q.author.name)+"")&&ae(te,V),C[3]||q.author.bio?F?F.p(C,b):(F=be(C),F.c(),F.m(e,j)):F&&(F.d(1),F=null),T&&T.p&&(!S||b&16)&&Y(T,J,C,C[4],S?ee(J,C[4],b,null):x(C[4]),null)},i(C){S||($(T,C),S=!0)},o(C){h(T,C),S=!1},d(C){C&&a(e),E&&E.d(),F&&F.d(),T&&T.d(C)}}}function Ue(u,e,i){let{$$slots:n={},$$scope:t}=e,{avatar:l}=e,{name:s}=e,{subname:o}=e,{bio:r}=e;return u.$$set=c=>{"avatar"in c&&i(0,l=c.avatar),"name"in c&&i(1,s=c.name),"subname"in c&&i(2,o=c.subname),"bio"in c&&i(3,r=c.bio),"$$scope"in c&&i(4,t=c.$$scope)},[l,s,o,r,t,n]}class We extends G{constructor(e){super(),Z(this,e,Ue,Re,W,{avatar:0,name:1,subname:2,bio:3})}}function Ge(u){let e,i;const n=u[3].default,t=X(n,u,u[2],null);return{c(){e=d("ul"),t&&t.c(),this.h()},l(l){e=g(l,"UL",{class:!0,style:!0});var s=A(e);t&&t.l(s),s.forEach(a),this.h()},h(){_(e,"class","timeline svelte-3j1e6h"),_(e,"style",u[0])},m(l,s){m(l,e,s),t&&t.m(e,null),i=!0},p(l,[s]){t&&t.p&&(!i||s&4)&&Y(t,n,l,l[2],i?ee(n,l[2],s,null):x(l[2]),null),(!i||s&1)&&_(e,"style",l[0])},i(l){i||($(t,l),i=!0)},o(l){h(t,l),i=!1},d(l){l&&a(e),t&&t.d(l)}}}function Ze(u,e,i){let{$$slots:n={},$$scope:t}=e,{position:l="right"}=e,{style:s=null}=e;return Ae("TimelineConfig",{rootPosition:l}),u.$$set=o=>{"position"in o&&i(1,l=o.position),"style"in o&&i(0,s=o.style),"$$scope"in o&&i(2,t=o.$$scope)},[s,l,t,n]}class De extends G{constructor(e){super(),Z(this,e,Ze,Ge,W,{position:1,style:0})}}const Oe=u=>({}),ke=u=>({});function Je(u){let e;const i=u[5]["opposite-content"],n=X(i,u,u[4],ke);return{c(){n&&n.c()},l(t){n&&n.l(t)},m(t,l){n&&n.m(t,l),e=!0},p(t,l){n&&n.p&&(!e||l&16)&&Y(n,i,t,t[4],e?ee(i,t[4],l,Oe):x(t[4]),ke)},i(t){e||($(n,t),e=!0)},o(t){h(n,t),e=!1},d(t){n&&n.d(t)}}}function Ke(u){let e;return{c(){e=d("div"),this.h()},l(i){e=g(i,"DIV",{class:!0}),A(e).forEach(a),this.h()},h(){_(e,"class","opposite-block svelte-1eitw8k")},m(i,n){m(i,e,n)},p:N,i:N,o:N,d(i){i&&a(e)}}}function Qe(u){let e,i,n,t,l;const s=[Ke,Je],o=[];function r(p,k){return p[2]["opposite-content"]?1:0}i=r(u),n=o[i]=s[i](u);const c=u[5].default,v=X(c,u,u[4],null);return{c(){e=d("li"),n.c(),t=y(),v&&v.c(),this.h()},l(p){e=g(p,"LI",{class:!0,style:!0});var k=A(e);n.l(k),t=w(k),v&&v.l(k),k.forEach(a),this.h()},h(){_(e,"class",fe(`timeline-item ${u[1]}`)+" svelte-1eitw8k"),_(e,"style",u[0])},m(p,k){m(p,e,k),o[i].m(e,null),H(e,t),v&&v.m(e,null),l=!0},p(p,[k]){let I=i;i=r(p),i===I?o[i].p(p,k):(ce(),h(o[I],1,1,()=>{o[I]=null}),me(),n=o[i],n?n.p(p,k):(n=o[i]=s[i](p),n.c()),$(n,1),n.m(e,t)),v&&v.p&&(!l||k&16)&&Y(v,c,p,p[4],l?ee(c,p[4],k,null):x(p[4]),null),(!l||k&1)&&_(e,"style",p[0])},i(p){l||($(n),$(v,p),l=!0)},o(p){h(n),h(v,p),l=!1},d(p){p&&a(e),o[i].d(),v&&v.d(p)}}}function Xe(u,e,i){let{$$slots:n={},$$scope:t}=e;const l=Ve(n);let{position:s=null}=e,{style:o=null}=e;const r=se("TimelineConfig"),c=s||r.rootPosition;return Ae("ParentPosition",c),u.$$set=v=>{"position"in v&&i(3,s=v.position),"style"in v&&i(0,o=v.style),"$$scope"in v&&i(4,t=v.$$scope)},[o,c,l,s,t,n]}class Be extends G{constructor(e){super(),Z(this,e,Xe,Qe,W,{position:3,style:0})}}function Ye(u){let e,i;const n=u[2].default,t=X(n,u,u[1],null);return{c(){e=d("div"),t&&t.c(),this.h()},l(l){e=g(l,"DIV",{class:!0,style:!0});var s=A(e);t&&t.l(s),s.forEach(a),this.h()},h(){_(e,"class","timeline-separator svelte-1lqxdk9"),_(e,"style",u[0])},m(l,s){m(l,e,s),t&&t.m(e,null),i=!0},p(l,[s]){t&&t.p&&(!i||s&2)&&Y(t,n,l,l[1],i?ee(n,l[1],s,null):x(l[1]),null),(!i||s&1)&&_(e,"style",l[0])},i(l){i||($(t,l),i=!0)},o(l){h(t,l),i=!1},d(l){l&&a(e),t&&t.d(l)}}}function xe(u,e,i){let{$$slots:n={},$$scope:t}=e,{style:l=null}=e;return u.$$set=s=>{"style"in s&&i(0,l=s.style),"$$scope"in s&&i(1,t=s.$$scope)},[l,t,n]}class Pe extends G{constructor(e){super(),Z(this,e,xe,Ye,W,{style:0})}}function et(u){let e,i;const n=u[2].default,t=X(n,u,u[1],null);return{c(){e=d("span"),t&&t.c(),this.h()},l(l){e=g(l,"SPAN",{class:!0,style:!0});var s=A(e);t&&t.l(s),s.forEach(a),this.h()},h(){_(e,"class","timeline-dot svelte-226qa6"),_(e,"style",u[0])},m(l,s){m(l,e,s),t&&t.m(e,null),i=!0},p(l,[s]){t&&t.p&&(!i||s&2)&&Y(t,n,l,l[1],i?ee(n,l[1],s,null):x(l[1]),null),(!i||s&1)&&_(e,"style",l[0])},i(l){i||($(t,l),i=!0)},o(l){h(t,l),i=!1},d(l){l&&a(e),t&&t.d(l)}}}function tt(u,e,i){let{$$slots:n={},$$scope:t}=e,{style:l=null}=e;return u.$$set=s=>{"style"in s&&i(0,l=s.style),"$$scope"in s&&i(1,t=s.$$scope)},[l,t,n]}class Le extends G{constructor(e){super(),Z(this,e,tt,et,W,{style:0})}}function lt(u){let e;return{c(){e=d("span"),this.h()},l(i){e=g(i,"SPAN",{class:!0,style:!0}),A(e).forEach(a),this.h()},h(){_(e,"class","timeline-connector svelte-jbpjct"),_(e,"style",u[0])},m(i,n){m(i,e,n)},p(i,[n]){n&1&&_(e,"style",i[0])},i:N,o:N,d(i){i&&a(e)}}}function nt(u,e,i){let{style:n=null}=e;return u.$$set=t=>{"style"in t&&i(0,n=t.style)},[n]}class Me extends G{constructor(e){super(),Z(this,e,nt,lt,W,{style:0})}}function st(u){let e,i;const n=u[3].default,t=X(n,u,u[2],null);return{c(){e=d("div"),t&&t.c(),this.h()},l(l){e=g(l,"DIV",{class:!0,style:!0});var s=A(e);t&&t.l(s),s.forEach(a),this.h()},h(){_(e,"class",fe(`timeline-content ${u[1]}`)+" svelte-1mnas8e"),_(e,"style",u[0])},m(l,s){m(l,e,s),t&&t.m(e,null),i=!0},p(l,[s]){t&&t.p&&(!i||s&4)&&Y(t,n,l,l[2],i?ee(n,l[2],s,null):x(l[2]),null),(!i||s&1)&&_(e,"style",l[0])},i(l){i||($(t,l),i=!0)},o(l){h(t,l),i=!1},d(l){l&&a(e),t&&t.d(l)}}}function it(u,e,i){let{$$slots:n={},$$scope:t}=e,{style:l=null}=e;const s=se("TimelineConfig"),o=se("ParentPosition"),r=o||s.rootPosition;return u.$$set=c=>{"style"in c&&i(0,l=c.style),"$$scope"in c&&i(2,t=c.$$scope)},[l,r,t,n]}class Ie extends G{constructor(e){super(),Z(this,e,it,st,W,{style:0})}}function ut(u){let e,i;const n=u[3].default,t=X(n,u,u[2],null);return{c(){e=d("div"),t&&t.c(),this.h()},l(l){e=g(l,"DIV",{class:!0,style:!0});var s=A(e);t&&t.l(s),s.forEach(a),this.h()},h(){_(e,"class",fe(`timeline-opposite-content ${u[1]}`)+" svelte-1c9jp58"),_(e,"style",u[0])},m(l,s){m(l,e,s),t&&t.m(e,null),i=!0},p(l,[s]){t&&t.p&&(!i||s&4)&&Y(t,n,l,l[2],i?ee(n,l[2],s,null):x(l[2]),null),(!i||s&1)&&_(e,"style",l[0])},i(l){i||($(t,l),i=!0)},o(l){h(t,l),i=!1},d(l){l&&a(e),t&&t.d(l)}}}function ot(u,e,i){let{$$slots:n={},$$scope:t}=e,{style:l=null}=e;const s=se("TimelineConfig"),o=se("ParentPosition"),r=o||s.rootPosition;return u.$$set=c=>{"style"in c&&i(0,l=c.style),"$$scope"in c&&i(2,t=c.$$scope)},[l,r,t,n]}class Se extends G{constructor(e){super(),Z(this,e,ot,ut,W,{style:0})}}function Ee(u,e,i){const n=u.slice();return n[3]=e[i],n}function ye(u,e,i){const n=u.slice();return n[3]=e[i],n}function rt(u){let e,i='<a href="https://bit.ly/shellkai" rel="noopener external" target="_blank" class="group flex-1 relative overflow-hidden btn btn-block normal-case border-none no-underline bg-[#5865f2] hover:bg-[#7983f5]"><span class="i-simple-icons-discord absolute w-16 h-16 right-10 opacity-20 fill-white transform-gpu transition-transform ease-in-out duration-500 group-hover:scale-125"></span> <span class="z-10 !text-white">My own server: i realized here&#39;s mod is shellkai</span></a>';return{c(){e=d("div"),e.innerHTML=i,this.h()},l(n){e=g(n,"DIV",{class:!0,"data-svelte-h":!0}),U(e)!=="svelte-17hinao"&&(e.innerHTML=i),this.h()},h(){_(e,"class","flex flex-col md:flex-row gap-4 mt-4")},m(n,t){m(n,e,t)},p:N,d(n){n&&a(e)}}}function at(u){let e,i,n,t;return e=new Le({props:{style:"background-color: #7CD5E2;"}}),n=new Me({}),{c(){B(e.$$.fragment),i=y(),B(n.$$.fragment)},l(l){P(e.$$.fragment,l),i=w(l),P(n.$$.fragment,l)},m(l,s){L(e,l,s),m(l,i,s),L(n,l,s),t=!0},p:N,i(l){t||($(e.$$.fragment,l),$(n.$$.fragment,l),t=!0)},o(l){h(e.$$.fragment,l),h(n.$$.fragment,l),t=!1},d(l){l&&a(i),M(e,l),M(n,l)}}}function ft(u){let e,i=u[3].title+"",n;return{c(){e=d("h3"),n=K(i)},l(t){e=g(t,"H3",{});var l=A(e);n=Q(l,i),l.forEach(a)},m(t,l){m(t,e,l),H(e,n)},p:N,d(t){t&&a(e)}}}function ct(u){let e,i,n,t,l;return e=new Pe({props:{$$slots:{default:[at]},$$scope:{ctx:u}}}),n=new Ie({props:{$$slots:{default:[ft]},$$scope:{ctx:u}}}),{c(){B(e.$$.fragment),i=y(),B(n.$$.fragment),t=y()},l(s){P(e.$$.fragment,s),i=w(s),P(n.$$.fragment,s),t=w(s)},m(s,o){L(e,s,o),m(s,i,o),L(n,s,o),m(s,t,o),l=!0},p(s,o){const r={};o&256&&(r.$$scope={dirty:o,ctx:s}),e.$set(r);const c={};o&256&&(c.$$scope={dirty:o,ctx:s}),n.$set(c)},i(s){l||($(e.$$.fragment,s),$(n.$$.fragment,s),l=!0)},o(s){h(e.$$.fragment,s),h(n.$$.fragment,s),l=!1},d(s){s&&(a(i),a(t)),M(e,s),M(n,s)}}}function mt(u){let e,i=u[3].time+"",n,t;return{c(){e=d("p"),n=K(i),t=y()},l(l){e=g(l,"P",{});var s=A(e);n=Q(s,i),s.forEach(a),t=w(l)},m(l,s){m(l,e,s),H(e,n),m(l,t,s)},p:N,d(l){l&&(a(e),a(t))}}}function _t(u){let e,i;return e=new Se({props:{slot:"opposite-content",$$slots:{default:[mt]},$$scope:{ctx:u}}}),{c(){B(e.$$.fragment)},l(n){P(e.$$.fragment,n)},m(n,t){L(e,n,t),i=!0},p(n,t){const l={};t&256&&(l.$$scope={dirty:t,ctx:n}),e.$set(l)},i(n){i||($(e.$$.fragment,n),i=!0)},o(n){h(e.$$.fragment,n),i=!1},d(n){M(e,n)}}}function we(u){let e,i;return e=new Be({props:{$$slots:{"opposite-content":[_t],default:[ct]},$$scope:{ctx:u}}}),{c(){B(e.$$.fragment)},l(n){P(e.$$.fragment,n)},m(n,t){L(e,n,t),i=!0},p(n,t){const l={};t&256&&(l.$$scope={dirty:t,ctx:n}),e.$set(l)},i(n){i||($(e.$$.fragment,n),i=!0)},o(n){h(e.$$.fragment,n),i=!1},d(n){M(e,n)}}}function $t(u){let e,i,n=oe(u[0]),t=[];for(let s=0;s<n.length;s+=1)t[s]=we(ye(u,n,s));const l=s=>h(t[s],1,1,()=>{t[s]=null});return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=ue()},l(s){for(let o=0;o<t.length;o+=1)t[o].l(s);e=ue()},m(s,o){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(s,o);m(s,e,o),i=!0},p(s,o){if(o&1){n=oe(s[0]);let r;for(r=0;r<n.length;r+=1){const c=ye(s,n,r);t[r]?(t[r].p(c,o),$(t[r],1)):(t[r]=we(c),t[r].c(),$(t[r],1),t[r].m(e.parentNode,e))}for(ce(),r=n.length;r<t.length;r+=1)l(r);me()}},i(s){if(!i){for(let o=0;o<n.length;o+=1)$(t[o]);i=!0}},o(s){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)h(t[o]);i=!1},d(s){s&&a(e),He(t,s)}}}function pt(u){let e,i,n,t;return e=new Le({props:{style:"background-color: #7CD5E2;"}}),n=new Me({}),{c(){B(e.$$.fragment),i=y(),B(n.$$.fragment)},l(l){P(e.$$.fragment,l),i=w(l),P(n.$$.fragment,l)},m(l,s){L(e,l,s),m(l,i,s),L(n,l,s),t=!0},p:N,i(l){t||($(e.$$.fragment,l),$(n.$$.fragment,l),t=!0)},o(l){h(e.$$.fragment,l),h(n.$$.fragment,l),t=!1},d(l){l&&a(i),M(e,l),M(n,l)}}}function ht(u){let e,i=u[3].title+"",n;return{c(){e=d("h3"),n=K(i)},l(t){e=g(t,"H3",{});var l=A(e);n=Q(l,i),l.forEach(a)},m(t,l){m(t,e,l),H(e,n)},p:N,d(t){t&&a(e)}}}function dt(u){let e,i,n,t,l;return e=new Pe({props:{$$slots:{default:[pt]},$$scope:{ctx:u}}}),n=new Ie({props:{$$slots:{default:[ht]},$$scope:{ctx:u}}}),{c(){B(e.$$.fragment),i=y(),B(n.$$.fragment),t=y()},l(s){P(e.$$.fragment,s),i=w(s),P(n.$$.fragment,s),t=w(s)},m(s,o){L(e,s,o),m(s,i,o),L(n,s,o),m(s,t,o),l=!0},p(s,o){const r={};o&256&&(r.$$scope={dirty:o,ctx:s}),e.$set(r);const c={};o&256&&(c.$$scope={dirty:o,ctx:s}),n.$set(c)},i(s){l||($(e.$$.fragment,s),$(n.$$.fragment,s),l=!0)},o(s){h(e.$$.fragment,s),h(n.$$.fragment,s),l=!1},d(s){s&&(a(i),a(t)),M(e,s),M(n,s)}}}function gt(u){let e,i=u[3].time+"",n,t;return{c(){e=d("p"),n=K(i),t=y()},l(l){e=g(l,"P",{});var s=A(e);n=Q(s,i),s.forEach(a),t=w(l)},m(l,s){m(l,e,s),H(e,n),m(l,t,s)},p:N,d(l){l&&(a(e),a(t))}}}function vt(u){let e,i;return e=new Se({props:{slot:"opposite-content",$$slots:{default:[gt]},$$scope:{ctx:u}}}),{c(){B(e.$$.fragment)},l(n){P(e.$$.fragment,n)},m(n,t){L(e,n,t),i=!0},p(n,t){const l={};t&256&&(l.$$scope={dirty:t,ctx:n}),e.$set(l)},i(n){i||($(e.$$.fragment,n),i=!0)},o(n){h(e.$$.fragment,n),i=!1},d(n){M(e,n)}}}function Te(u){let e,i;return e=new Be({props:{$$slots:{"opposite-content":[vt],default:[dt]},$$scope:{ctx:u}}}),{c(){B(e.$$.fragment)},l(n){P(e.$$.fragment,n)},m(n,t){L(e,n,t),i=!0},p(n,t){const l={};t&256&&(l.$$scope={dirty:t,ctx:n}),e.$set(l)},i(n){i||($(e.$$.fragment,n),i=!0)},o(n){h(e.$$.fragment,n),i=!1},d(n){M(e,n)}}}function Ct(u){let e,i,n=oe(u[1]),t=[];for(let s=0;s<n.length;s+=1)t[s]=Te(Ee(u,n,s));const l=s=>h(t[s],1,1,()=>{t[s]=null});return{c(){for(let s=0;s<t.length;s+=1)t[s].c();e=ue()},l(s){for(let o=0;o<t.length;o+=1)t[o].l(s);e=ue()},m(s,o){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(s,o);m(s,e,o),i=!0},p(s,o){if(o&2){n=oe(s[1]);let r;for(r=0;r<n.length;r+=1){const c=Ee(s,n,r);t[r]?(t[r].p(c,o),$(t[r],1)):(t[r]=Te(c),t[r].c(),$(t[r],1),t[r].m(e.parentNode,e))}for(ce(),r=n.length;r<t.length;r+=1)l(r);me()}},i(s){if(!i){for(let o=0;o<n.length;o+=1)$(t[o]);i=!0}},o(s){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)h(t[o]);i=!1},d(s){s&&a(e),He(t,s)}}}function bt(u){let e,i='<a href="#關於我">關於我</a>',n,t,l,s,o="安安，我是 Shellkai，目前就讀高職資訊科三年級，從一台 Android 手機開啟了我的資訊之旅，目前專攻於伺服器架設（Windows Server、Linux、Cisco Devices）、網路規劃及簡易的 Windows Server 及 Linux 的系統安全強化，希望未來能朝著資安的方向前進！",r,c,v='<a href="#競賽">競賽</a>',p,k,I,V,te='<a href="#證照">證照</a>',O,j,S,E,F='<a href="#待考取--希望考取證照">待考取 &amp; 希望考取證照</a>',J,T,C="<li>中華民國技術士證 電腦硬體裝修 乙級 (預計 2024-11 考取即測即評)</li> <li>iPAS 資訊安全工程師 初級</li> <li>CCNA 思科認證網路工程師</li> <li>RHCE (Red Hat Certified Engineer)</li>",b,z,ne='<a href="#授課--其他經驗">授課 / 其他經驗</a>',le,R,_e="<li>2023 松山工農黑客 IT 社 工作室網路架設課程講師 &amp; 活動</li> <li>2024 松山工農資訊技術中心@選手室 設備管理員</li>",ie;return t=new We({props:{subname:"ShellkaiTW",bio:"「每一次的嘗試，皆是在未知中探索著，且學習著。」",$$slots:{default:[rt]},$$scope:{ctx:u}}}),k=new De({props:{position:"alternate",$$slots:{default:[$t]},$$scope:{ctx:u}}}),j=new De({props:{position:"alternate",$$slots:{default:[Ct]},$$scope:{ctx:u}}}),{c(){e=d("h2"),e.innerHTML=i,n=y(),B(t.$$.fragment),l=y(),s=d("p"),s.textContent=o,r=y(),c=d("h2"),c.innerHTML=v,p=y(),B(k.$$.fragment),I=K(`
Coming Soon...
`),V=d("h2"),V.innerHTML=te,O=y(),B(j.$$.fragment),S=y(),E=d("h3"),E.innerHTML=F,J=y(),T=d("ul"),T.innerHTML=C,b=y(),z=d("h2"),z.innerHTML=ne,le=y(),R=d("ul"),R.innerHTML=_e,this.h()},l(f){e=g(f,"H2",{id:!0,"data-svelte-h":!0}),U(e)!=="svelte-14p3kr3"&&(e.innerHTML=i),n=w(f),P(t.$$.fragment,f),l=w(f),s=g(f,"P",{"data-svelte-h":!0}),U(s)!=="svelte-1xpao5b"&&(s.textContent=o),r=w(f),c=g(f,"H2",{id:!0,"data-svelte-h":!0}),U(c)!=="svelte-16obul"&&(c.innerHTML=v),p=w(f),P(k.$$.fragment,f),I=Q(f,`
Coming Soon...
`),V=g(f,"H2",{id:!0,"data-svelte-h":!0}),U(V)!=="svelte-kdx2j0"&&(V.innerHTML=te),O=w(f),P(j.$$.fragment,f),S=w(f),E=g(f,"H3",{id:!0,"data-svelte-h":!0}),U(E)!=="svelte-3pqexi"&&(E.innerHTML=F),J=w(f),T=g(f,"UL",{"data-svelte-h":!0}),U(T)!=="svelte-159ixzf"&&(T.innerHTML=C),b=w(f),z=g(f,"H2",{id:!0,"data-svelte-h":!0}),U(z)!=="svelte-1hnmgg1"&&(z.innerHTML=ne),le=w(f),R=g(f,"UL",{"data-svelte-h":!0}),U(R)!=="svelte-1klkckg"&&(R.innerHTML=_e),this.h()},h(){_(e,"id","關於我"),_(c,"id","競賽"),_(V,"id","證照"),_(E,"id","待考取--希望考取證照"),_(z,"id","授課--其他經驗")},m(f,D){m(f,e,D),m(f,n,D),L(t,f,D),m(f,l,D),m(f,s,D),m(f,r,D),m(f,c,D),m(f,p,D),L(k,f,D),m(f,I,D),m(f,V,D),m(f,O,D),L(j,f,D),m(f,S,D),m(f,E,D),m(f,J,D),m(f,T,D),m(f,b,D),m(f,z,D),m(f,le,D),m(f,R,D),ie=!0},p(f,D){const $e={};D&256&&($e.$$scope={dirty:D,ctx:f}),t.$set($e);const pe={};D&256&&(pe.$$scope={dirty:D,ctx:f}),k.$set(pe);const he={};D&256&&(he.$$scope={dirty:D,ctx:f}),j.$set(he)},i(f){ie||($(t.$$.fragment,f),$(k.$$.fragment,f),$(j.$$.fragment,f),ie=!0)},o(f){h(t.$$.fragment,f),h(k.$$.fragment,f),h(j.$$.fragment,f),ie=!1},d(f){f&&(a(e),a(n),a(l),a(s),a(r),a(c),a(p),a(I),a(V),a(O),a(S),a(E),a(J),a(T),a(b),a(z),a(le),a(R)),M(t,f),M(k,f),M(j,f)}}}function Dt(u){let e,i;const n=[u[2],Fe];let t={$$slots:{default:[bt]},$$scope:{ctx:u}};for(let l=0;l<n.length;l+=1)t=re(t,n[l]);return e=new Ne({props:t}),{c(){B(e.$$.fragment)},l(l){P(e.$$.fragment,l)},m(l,s){L(e,l,s),i=!0},p(l,[s]){const o=s&4?ze(n,[s&4&&ve(l[2]),s&0&&ve(Fe)]):{};s&256&&(o.$$scope={dirty:s,ctx:l}),e.$set(o)},i(l){i||($(e.$$.fragment,l),i=!0)},o(l){h(e.$$.fragment,l),i=!1},d(l){M(e,l)}}}const Fe={title:"About Me!",image:"/hello-world/kita-ikuyo.jpg",alt:"Shellkai Huang",created:"2022-11-25T00:00:00.000Z",updated:"2024-09-22T00:00:00.000Z",images:[],tags:[],slug:"/about_me/+page.svelte.md",path:"/about_me",toc:[{depth:2,slug:"關於我",title:"關於我"},{depth:2,slug:"競賽",title:"競賽"},{depth:2,slug:"證照",title:"證照"},{depth:3,slug:"待考取--希望考取證照",title:"待考取 & 希望考取證照"},{depth:2,slug:"授課--其他經驗",title:"授課 / 其他經驗"}]};function kt(u,e,i){const n=[{title:"臺北市國中小學生 Scratch 貓咪盃「創意遊戲」國中組 入選",time:"2020"},{title:"第 53 屆全國技能競賽分區北區賽 39 資訊與網路技術 佳作",time:"2023"},{title:"桃園國際新創機器人節 (TIRT) T1 智能賽車組 & 機器人划龍舟組",time:"2023"},{title:"第 54 屆全國技能競賽分區北區賽 39 資訊與網路技術 金牌 (rk.1)",time:"2024"},{title:"第 54 屆全國技能競賽全國賽 39 資訊與網路技術 銅牌 (rk.3)",time:"2024"}],t=[{title:"GEPT 全民英檢 初級",time:"2020"},{title:"中華民國技術士證 電腦硬體裝修 丙級",time:"2023"}];return u.$$set=l=>{i(2,e=re(re({},e),ge(l)))},e=ge(e),[n,t,e]}class At extends G{constructor(e){super(),Z(this,e,kt,Dt,W,{})}}export{At as component};
