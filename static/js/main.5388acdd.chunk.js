(this["webpackJsonpreact-portofolio"]=this["webpackJsonpreact-portofolio"]||[]).push([[0],{15:function(e,t,s){},16:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var i=s(0),n=s(1),c=s.n(n),a=s(9),r=s.n(a),l=(s(15),s(16),s(6)),o=s(2),j=s(3),h=s(7),u=s(5),b=s(4),d=(s(17),function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={showMenu:"menu",navColored:null},e.showMenu=e.showMenu.bind(Object(h.a)(e)),e.handleScroll=e.handleScroll.bind(Object(h.a)(e)),e.closeMenu=e.closeMenu.bind(Object(h.a)(e)),e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var e;e=window.scrollY>250?"navColored":null,this.setState({navColored:e})}},{key:"showMenu",value:function(){"menu"===this.state.showMenu?this.setState({showMenu:"menu showMenu"}):this.setState({showMenu:"menu"})}},{key:"closeMenu",value:function(){this.setState({showMenu:"menu"})}},{key:"render",value:function(){var e=this;return Object(i.jsxs)("nav",{className:this.state.navColored?"navColored":void 0,children:[Object(i.jsx)("h1",{className:"title",children:this.props.title}),Object(i.jsxs)("ul",{className:this.state.showMenu,children:[Object.entries(this.props.data).map((function(t){var s=Object(l.a)(t,2),n=s[0],c=s[1];return Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#"+n,onClick:e.closeMenu,children:c})},n)})),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://fauzanashariblog.blogspot.com",target:"_blank",onClick:this.closeMenu,children:"Blog"})})]}),Object(i.jsxs)("div",{id:"hamburger",onClick:this.showMenu,children:[Object(i.jsx)("span",{}),Object(i.jsx)("span",{}),Object(i.jsx)("span",{})]})]})}}]),s}(c.a.Component)),p=(s(18),function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(i.jsxs)("section",{id:this.props.title.toLowerCase(),children:[Object(i.jsxs)("h1",{className:"name",children:["Fauzan Hibatullah ",Object(i.jsx)("span",{className:"different",children:"Ashari"})]}),Object(i.jsxs)("ul",{className:"contact",children:[Object(i.jsx)("li",{className:"address",children:"Depok, Indonesia"}),Object(i.jsx)("li",{className:"phone",children:"+62 822 9820 4493"}),Object(i.jsx)("li",{className:"email",children:Object(i.jsx)("a",{href:"mailto:asharifauzan.h@gmail.com",children:"asharifauzan.h@gmail.com"})})]})]})}}]),s}(c.a.Component)),O={1:["Internship IT Support","PT Airindo Sakti","July - October 2018"],2:["Internship IT Support","Fasilkom Universitas Indonesia","September - December 2015"]},m=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(i.jsxs)("section",{id:this.props.title.toLowerCase(),children:[Object(i.jsx)("h1",{className:"section-title",children:this.props.title}),Object.entries(O).map((function(e){var t=Object(l.a)(e,2),s=t[0],n=t[1];return Object(i.jsxs)("article",{className:"card",children:[Object(i.jsx)("h1",{children:n[0]}),Object(i.jsx)("h3",{children:n[1]}),Object(i.jsx)("span",{children:n[2]})]},s)}))]})}}]),s}(c.a.Component),g={sma:["SMKN 3 Depok","Computer Network and Networking","2014 - 2017"],kuliah:["National Science and Technology Institute","Informatic Engineering","2018 - 2022"]},x=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(i.jsxs)("section",{id:this.props.title.toLowerCase(),children:[Object(i.jsx)("h1",{className:"section-title",children:this.props.title}),Object.entries(g).map((function(e){var t=Object(l.a)(e,2),s=t[0],n=t[1];return Object(i.jsxs)("article",{className:"card",children:[Object(i.jsx)("h1",{children:n[0]}),Object(i.jsx)("h3",{children:n[1]}),Object(i.jsx)("span",{children:n[2]})]},s)}))]})}}]),s}(c.a.Component),f=s.p+"static/media/codeigniter.87709a22.svg",v=s.p+"static/media/cplusplus.ce6a0ba6.svg",k=s.p+"static/media/css3.ece33209.svg",w=s.p+"static/media/git.a8a49cef.svg",C=s.p+"static/media/github.8f697053.svg",S=s.p+"static/media/gnubash.71495a33.svg",N=s.p+"static/media/html5.0d652bbd.svg",y=s.p+"static/media/javascript.c56fcc9e.svg",M=s.p+"static/media/json.16fbe52e.svg",I=s.p+"static/media/linux.5d8606b8.svg",L=s.p+"static/media/mysql.941218ce.svg",F=s.p+"static/media/python.c431aa5b.svg",E=s.p+"static/media/react.dedf0046.svg",z=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(i.jsxs)("section",{id:this.props.title.toLowerCase(),children:[Object(i.jsx)("h1",{className:"section-title",children:this.props.title}),Object(i.jsxs)("article",{className:"card skill-list",children:[Object(i.jsx)("img",{src:f,alt:"codeigniter"}),Object(i.jsx)("img",{src:v,alt:"cplusplus"}),Object(i.jsx)("img",{src:k,alt:"css3"}),Object(i.jsx)("img",{src:w,alt:"git"}),Object(i.jsx)("img",{src:C,alt:"github"}),Object(i.jsx)("img",{src:S,alt:"gnubash"}),Object(i.jsx)("img",{src:N,alt:"html5"}),Object(i.jsx)("img",{src:y,alt:"javascript"}),Object(i.jsx)("img",{src:M,alt:"json"}),Object(i.jsx)("img",{src:I,alt:"linux"}),Object(i.jsx)("img",{src:L,alt:"mysql"}),Object(i.jsx)("img",{src:F,alt:"python"}),Object(i.jsx)("img",{src:E,alt:"react"})]})]})}}]),s}(c.a.Component),T=[{title:"Backend Elearning REST server API",desc:"REST Server API elearning using Codeigniter, CI Rest Server and JWT.",img:null,repo:"https://github.com/asharifauzan/elearning",url:"https://asharifauzan.rf.gd"},{title:"LINE LIFF Cafetaria",desc:"Cafetaria app to order foods & beverages integrated with LINE account & messages API\nusing HTML, CSS/SASS, Javascript and LINE Front-End Framework (LIFF).",img:s.p+"static/media/asharifauzan-cafetaria.d58b907b.png",repo:"https://github.com/asharifauzan/asharifauzan-cafetaria",url:"https://liff.line.me/1655319676-3O2PgWmq"}],A=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(i.jsxs)("section",{id:this.props.title.toLowerCase(),children:[Object(i.jsx)("h1",{className:"section-title",children:this.props.title}),Object(i.jsx)("div",{className:"wrapper",children:T.map((function(e,t){return Object(i.jsxs)("article",{className:"card projects",children:[Object(i.jsx)("h1",{children:e.title}),Object(i.jsxs)("figure",{children:[Object(i.jsx)("img",{src:e.img?e.img:"https://bitsofco.de/content/images/2018/12/broken-1.png",alt:e.title}),Object(i.jsx)("figcaption",{children:e.desc})]}),Object(i.jsxs)("div",{className:"link",children:[Object(i.jsx)("a",{href:e.repo,children:"Link Github"}),Object(i.jsx)("a",{href:e.url,children:"Website"})]})]},t)}))})]})}}]),s}(c.a.Component),P=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsx)(p,{title:this.props.title.about}),Object(i.jsx)(m,{title:this.props.title.experience}),Object(i.jsx)(x,{title:this.props.title.education}),Object(i.jsx)(z,{title:this.props.title.skills}),Object(i.jsx)(A,{title:this.props.title.projects})]})}}]),s}(c.a.Component);var D=function(){var e={about:"About",experience:"Experience",education:"Education",skills:"Skills",projects:"Projects"};return Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsx)("header",{children:Object(i.jsx)(d,{data:e,title:"AshariFauzan"})}),Object(i.jsx)("main",{children:Object(i.jsx)(P,{title:e})})]})},J=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(t){var s=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),i(e),n(e),c(e),a(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(D,{})}),document.getElementById("root")),J()}},[[19,1,2]]]);
//# sourceMappingURL=main.5388acdd.chunk.js.map