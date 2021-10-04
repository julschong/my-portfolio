(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{102:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},223:function(e,t,n){},224:function(e,t,n){},225:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),i=n(43),s=n.n(i),r=(n(88),n(4)),o=(n(89),n(1)),l=Object(a.forwardRef)((function(e,t){var n=e.heroRef,c=e.aboutRef,i=e.projectRef,s=e.contactRef,l=Object(a.useRef)(),d=Object(a.useState)(0),b=Object(r.a)(d,2),u=b[0],m=b[1];return Object(a.useEffect)((function(){window.addEventListener("scroll",(function(){m(window.pageYOffset)}))}),[]),Object(o.jsx)("nav",{className:"nav",ref:l,children:Object(o.jsx)(j,{heroRef:n,aboutRef:c,projectRef:i,contactRef:s,scrollY:u})})})),j=function(e){var t=e.heroRef,n=e.aboutRef,c=e.projectRef,i=e.contactRef,s=e.scrollY,l=Object(a.useState)([]),j=Object(r.a)(l,2),d=j[0],b=j[1];return Object(a.useEffect)((function(){b([t.current.offsetTop-5,n.current.offsetTop-5,c.current.offsetTop-5,i.current.offsetTop-5])}),[n,i,c,t]),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:function(){t.current.scrollIntoView()},style:{textDecoration:s>=d[0]&&s<d[1]?"underline":"none"},children:"HOME"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:function(){n.current.scrollIntoView()},style:{textDecoration:s>=d[1]&&s<d[2]?"underline":"none"},children:"ABOUT"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:function(){c.current.scrollIntoView()},style:{textDecoration:s>=d[2]&&s<d[3]?"underline":"none"},children:"PROJECT"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:function(){i.current.scrollIntoView()},style:{textDecoration:s>=d[3]?"underline":"none"},children:"CONTACT"})})]})},d=l,b=(n(91),n(77)),u=n(78),m=Object(a.forwardRef)((function(e,t){var n=e.aboutRef,c=Object(a.useState)(),i=Object(r.a)(c,2),s=i[0],l=i[1];return Object(o.jsxs)("main",{ref:t,id:"hero",children:[Object(o.jsxs)("div",{className:"hero-text animate__animated animate__fadeIn",children:["Hello there,",Object(o.jsx)("br",{}),"I'm ",Object(o.jsx)("span",{className:"hero-text-name",children:"Julius Lee"}),".",Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:"I'm a passionate, self taught fullstack developer!"}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"hero-subtext animate__animated animate__fadeIn animate__delay-3s",children:["I also love to",Object(o.jsxs)("ul",{className:"hero-hobby-container",children:[Object(o.jsx)("li",{className:"hero-hobby",children:"3D Print"}),Object(o.jsx)("li",{className:"hero-hobby",children:"Play Basketball"}),Object(o.jsx)("li",{className:"hero-hobby",children:"Play with My Cats"})]})]}),Object(o.jsxs)("button",{className:"hero-button animate__animated animate__fadeIn animate__delay-5s",onClick:function(){n.current.scrollIntoView()},onMouseEnter:function(e){return l(!0)},onMouseLeave:function(e){return l(!1)},children:["View My Work",Object(o.jsx)(b.a,{size:24,style:{transform:s?"rotate(90deg)":""}})]})]}),Object(o.jsx)(u.a,{id:"hero-more-icon",className:"animate__animated animate__heartBeat animate__infinite",size:60})]})})),f=(n(92),n(6)),h=n.p+"static/media/profile.07babaa1.jpg";function O(e,t,n,a){return(e||n>0)&&!a?"animate__animated ".concat(t):"animate__animated"}n(102);var p=["java","javascript","typescript","html5","css3","react","nodejs","redux","graphql","docker","linux","postgresql","aws","google_cloud","mongodb","postman"],x=function(e){var t=e.isMobile,n=Object(a.useRef)(),c=Object(f.useInViewport)(n,{},{disconnectOnLeave:!1},e),i=c.inViewport,s=c.enterCount;return Object(o.jsxs)("div",{className:"skill",ref:n,children:[Object(o.jsx)("h2",{className:"".concat(O(i,"animate__fadeInDown",s,t)," animate__delay-1s"),children:"Language and Tools I have worked with"}),Object(o.jsx)("div",{className:"skill-list",children:p.map((function(e,n){return Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"".concat(O(i,"animate__fadeInUp",s,t)," animate__delay-").concat(n%3+1,"s"),src:"".concat("https://julschong.github.io/my-portfolio/","asset/").concat(e,".svg"),alt:e,width:60})},e+n)}))})]})},g=Object(a.forwardRef)((function(e,t){var n=e.isMobile,a=Object(f.useInViewport)(t,null,{disconnectOnLeave:!1},e),c=a.inViewport,i=a.enterCount;return Object(o.jsxs)("section",{id:"about",className:"section-container",ref:t,children:[Object(o.jsx)("h2",{className:"about-title title ".concat(O(c,"animate__fadeInLeft",i,n)," animate__delay-1s"),children:"About Me"}),Object(o.jsxs)("div",{className:"about-container",children:[Object(o.jsxs)("div",{className:"profile-container ".concat(O(c,"animate__fadeInLeft",i,n)," animate__delay-2s"),children:[Object(o.jsx)("img",{className:"profile-pic",src:h,alt:"my-profile"}),Object(o.jsxs)("p",{className:"profile-caption",children:["My name is Julius Lee.",Object(o.jsx)("br",{}),"I'm an aspiring self movtivated Fullstack Developer."]})]}),Object(o.jsxs)("p",{className:"my-story ".concat(O(c,"animate__fadeInRight",i,n)," animate__delay-2s"),children:["Hi there!",Object(o.jsx)("br",{}),"Just a little bit of my background,",Object(o.jsx)("br",{}),"I graduated from University of California, Riverside with Electrical Engineering in 2015 where I first learned programming with C++ and C and did quite a lot of Microcontroller Programming. After I graduated, I started working as a Procurement Engineer ever since. Then fast forward to two years ago after I had a chance to use SQL at work, I fell in love with solving complex problem with code, so I decided to start learning programming on my own! I set a goal for myself to work towards becoming a fullstack developer and have been coding and learning everyday ever since!"]})]}),Object(o.jsx)(x,{isMobile:n})]})})),v=(n(103),n(104),function(e){var t=e.screenshot,n=e.year,c=e.name,i=e.desc,s=e.isMobile,l=e.demoLink,j=e.gitHubLink,d=Object(a.useState)(!1),b=Object(r.a)(d,2),u=b[0],m=b[1],h=Object(a.useRef)(),p=Object(a.useRef)(),x=Object(f.useInViewport)(p,{},{disconnectOnLeave:!1},e),g=x.inViewport,v=x.enterCount,w=function(e){h.current.contains(e.target)||m(!1)};return Object(a.useEffect)((function(){return window.addEventListener("click",w),function(){window.removeEventListener("click",w)}}),[]),Object(o.jsxs)("article",{ref:p,className:"project-card animated__animated ".concat(O(g,"animate__fadeInRight",v,s)," animate__delay-2s"),children:[Object(o.jsx)("h3",{children:n}),Object(o.jsx)("hr",{}),Object(o.jsx)("p",{className:"project-name",children:c}),Object(o.jsx)("p",{className:"project-desc",children:i}),Object(o.jsxs)("div",{className:"image-container",ref:h,onClick:function(){return m(!u)},children:[Object(o.jsx)("img",{className:"project-picture",src:t,alt:"".concat(c," screenshot")}),Object(o.jsx)("div",{className:"project-modal",style:u?{opcaity:1}:{opacity:0},children:Object(o.jsxs)("div",{className:"project-modal-link-group",children:[Object(o.jsx)("a",{href:j,target:"_blank",rel:"noreferrer",children:"GitHub"}),Object(o.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",children:"Demo"})]})})]})]})}),w=n.p+"static/media/snakey.bbe038ec.png",y=n.p+"static/media/jcellio.71214ec2.jpg",_=n.p+"static/media/jchat.232d3ffc.jpg",k=n.p+"static/media/hangman.c9b40e7d.jpg",N=Object(a.forwardRef)((function(e,t){var n=e.isMobile,c=Object(a.useRef)(),i=Object(f.useInViewport)(c,{},{disconnectOnLeave:!1},e),s=i.inViewport,r=i.enterCount;return Object(o.jsx)("section",{id:"project",ref:t,children:Object(o.jsxs)("div",{className:"project-inner-container section-container",ref:c,children:[Object(o.jsx)("h2",{className:"project-title title ".concat(O(s,"animate__fadeInLeft",r,n)," animate__delay-1s"),children:"Projects"}),Object(o.jsxs)("div",{className:"project-group-container",children:[Object(o.jsx)(v,{screenshot:w,year:"2021",name:"Snakey",desc:"Classic Snake Game Built with React / TypeScript / Express",demoLink:"http://snakey-s3.s3-website-us-west-1.amazonaws.com/",gitHubLink:"https://github.com/julschong/Snakey",isMobile:n}),Object(o.jsx)(v,{screenshot:y,year:"2021",name:"JCellio",desc:"Drag and Drop Todo App Build with React / Node / PostgreSQL",isMobile:n,demoLink:"https://jcellio.netlify.app/dashboard",gitHubLink:"https://github.com/julschong/JCellio"}),Object(o.jsx)(v,{screenshot:_,year:"2021",name:"JC Chat",desc:"Retro Chat Room built with React / Typescript / Node / Socket.io",isMobile:n,demoLink:"http://jc-chat-app.s3-website-us-west-1.amazonaws.com/",gitHubLink:"https://github.com/julschong/chat-app"}),Object(o.jsx)(v,{screenshot:k,year:"2021",name:"Hangman",desc:"Hangman mini-game built with React",isMobile:n,demoLink:"https://hangman-julschong.netlify.app/",gitHubLink:"https://github.com/julschong/hangman-game"})]})]})})})),R=(n(105),n(15)),L=(n(106),n(21)),I=L.a().shape({name:L.b().min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:L.b().email("Invalid email").required("Required"),message:L.b().min(2,"Too Short!").max(250,"Too Long!").required("Required")}),C=Object(a.forwardRef)((function(e,t){var n=e.isMobile,c=Object(a.useRef)(),i=Object(a.useRef)(),s=Object(f.useInViewport)(c,{},{disconnectOnLeave:!1},e),l=s.inViewport,j=s.enterCount,d=Object(a.useState)(!1),b=Object(r.a)(d,2),u=b[0],m=b[1],h=Object(a.useState)(!1),p=Object(r.a)(h,2),x=p[0];p[1];return Object(o.jsx)("section",{id:"contact",ref:t,children:Object(o.jsxs)("div",{className:"section-container",ref:c,children:[Object(o.jsx)("h2",{className:"contact-title title ".concat(O(l,"animate__fadeInLeft",j,n)," animate__delay-1s"),children:"CONTACT"}),Object(o.jsx)(R.c,{initialValues:{name:"",email:"",message:""},validationSchema:I,onSubmit:function(e){setTimeout((function(){return m(!0)}),1e3),i.current.submit()},children:function(e){var t=e.errors,a=e.touched,c=e.isSubmitting;return Object(o.jsxs)(R.b,{className:"contact-form ".concat(O(l,"animate__fadeInLeft",j,n)," animate__delay-2s"),autoComplete:"off",autoCorrect:"off",target:"_blank",action:"https://formsubmit.co/5c8387a86984fb2a85bad5475adbbeb5",method:"POST",ref:i,children:[Object(o.jsx)("p",{className:"title-caption",children:"Have a question or want to work together?"}),Object(o.jsx)(R.a,{name:"name",placeholder:"Name...",spellCheck:"false"}),t.name&&a.name?Object(o.jsx)("div",{className:"field-error",children:t.name}):null,Object(o.jsx)(R.a,{name:"email",placeholder:"Email...",spellCheck:"false"}),t.email&&a.email?Object(o.jsx)("div",{className:"field-error",children:t.email}):null,Object(o.jsx)(R.a,{name:"message",type:"message",placeholder:"You message...",as:"textarea",rows:"10",maxLength:255,spellCheck:!1}),t.message&&a.message?Object(o.jsx)("div",{className:"field-error",children:t.message}):null,Object(o.jsx)("input",{type:"hidden",name:"_subject",value:"New submission!"}),Object(o.jsx)("input",{type:"hidden",name:"_captcha",value:"false"}),Object(o.jsx)("input",{type:"hidden",name:"_template",value:"table"}),Object(o.jsx)("button",{className:"submit-button",type:"submit",disabled:c||x,style:c?{backgroundColor:"gray",pointerEvents:"none"}:void 0,children:"Submit"}),Object(o.jsxs)("p",{className:"thank-you-message",style:u?{display:"inline",opacity:1}:void 0,children:["Thank you for contacting me!",Object(o.jsx)("br",{}),"I will follow up with you shortly!"]}),Object(o.jsx)("p",{className:"thank-you-message",style:x?{display:"inline",opacity:1}:void 0,children:"Something happened, please try again!"})]})}})]})})})),T=(n(223),n(20)),S=function(){return Object(o.jsxs)("footer",{id:"footer",children:[Object(o.jsxs)("div",{className:"find-me-on-group",children:[Object(o.jsx)("a",{href:"https://github.com/julschong",target:"_blank",rel:"noreferrer",children:Object(o.jsx)(T.a,{size:40})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/julschong7",target:"_blank",rel:"noreferrer",children:Object(o.jsx)(T.b,{size:40})}),Object(o.jsx)("a",{href:"https://formsubmit.co/el/cenake",target:"_blank",rel:"noreferrer",children:Object(o.jsx)(T.d,{size:40})}),Object(o.jsx)("a",{href:"tel:5626069973",children:Object(o.jsx)(T.c,{size:40})})]}),Object(o.jsx)("p",{children:"Julius Lee \xa92021"})]})};n(224);var M=function(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),c=Object(a.useRef)(),i=Object(a.useRef)(null),s=Object(a.useState)(window.innerWidth),l=Object(r.a)(s,2),j=l[0],b=l[1];function u(){b(window.innerWidth)}function f(){document.body.classList.add("disable-hover"),null!==i.current&&clearTimeout(i.current),i.current=setTimeout((function(){document.body.classList.remove("disable-hover")}),250)}Object(a.useEffect)((function(){return window.addEventListener("resize",u),window.addEventListener("scroll",f),function(){window.removeEventListener("resize",u),window.removeEventListener("scroll",u)}}),[]);var h=j<=768;return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(m,{ref:e,aboutRef:n}),Object(o.jsx)(d,{heroRef:e,aboutRef:n,contactRef:c,projectRef:t}),Object(o.jsx)(g,{ref:n,isMobile:h}),Object(o.jsx)(N,{ref:t,isMobile:h}),Object(o.jsx)(C,{ref:c,isMobile:h}),Object(o.jsx)(S,{})]})};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(M,{})}),document.getElementById("root"))},88:function(e,t,n){},89:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){}},[[225,1,2]]]);
//# sourceMappingURL=main.9811aacb.chunk.js.map