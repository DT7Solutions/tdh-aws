(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{428:function(e,a,t){"use strict";t.r(a);var n=t(53),r=t(54),l=t(3),c=t(55),s=t(56),o=t(0),i=t.n(o),m=t(66),u=t.n(m),d=t(73),p=t(64),b=t(62),E=t(59),h=t(383),f=t(9),g=t(60),v=[{markerOffset:-30,name:"India",coordinates:[78.9629,20.5937]},{markerOffset:15,name:"Australia",coordinates:[133.7751,-25.2744]},{markerOffset:15,name:"USA",coordinates:[-95.7129,37.0902]},{markerOffset:-30,name:"UK",coordinates:[-3.4359,55.3781]},{markerOffset:-30,name:"UAE",coordinates:[54.366669,24.466667]},{markerOffset:15,name:"SINGAPORE",coordinates:[103.8198,1.3521]},{markerOffset:15,name:"QATAR",coordinates:[53.595284,16.564328]},{markerOffset:15,name:"PARIS",coordinates:[2.3522,48.8566]},{markerOffset:15,name:"CANADA",coordinates:[-106.3468,56.1304]},{markerOffset:15,name:"GHANA-WEST AFRICA",coordinates:[-1.0232,7.9465]},{markerOffset:15,name:"SEYCHELLES",coordinates:[55.4919,-4.6796]}],y=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(o.Fragment,null,i.a.createElement("div",{className:"container mb-5 pt-5 pb-3"},i.a.createElement("div",{className:"section-title-wrap section-header text-center"},i.a.createElement("h5",{className:"custom-primary text-center"},"Global Presence"),i.a.createElement("h2",{className:"title text-center"},"Discover Where We Deliver"),i.a.createElement("p",null,"Explore our product availability across the globe. Use the interactive world map to select countries and regions, and find out where you can enjoy the taste of Tenali Double Horse.")),i.a.createElement(h.ComposableMap,null,i.a.createElement(h.Geographies,{geography:"https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json"},function(e){return e.geographies.map(function(e){return i.a.createElement(h.Geography,{key:e.rsmKey,geography:e,fill:"#EAEAEC",stroke:"#D6D6DA"})})}),v.map(function(e){var a=e.name,t=e.coordinates,n=e.markerOffset;return i.a.createElement(h.Marker,{key:a,coordinates:t},i.a.createElement("g",null,"USA"===a?i.a.createElement(f.c,{to:"/usa-shops"},i.a.createElement("g",{fill:"none",stroke:"#FF5533",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(-12, -24)"},i.a.createElement("circle",{cx:"12",cy:"10",r:"3"}),i.a.createElement("path",{d:"M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"})),i.a.createElement("text",{textAnchor:"middle",y:n,style:{fontFamily:"system-ui",fill:"#5D5A6D"}},a)):i.a.createElement(i.a.Fragment,null,i.a.createElement("g",{fill:"none",stroke:"#FF5533",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",transform:"translate(-12, -24)"},i.a.createElement("circle",{cx:"12",cy:"10",r:"3"}),i.a.createElement("path",{d:"M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"})),i.a.createElement("text",{textAnchor:"middle",y:n,style:{fontFamily:"system-ui",fill:"#5D5A6D"}},a))))})),i.a.createElement(E.a,null),i.a.createElement(g.a,null)))}}]),a}(o.Component),k=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(o.Fragment,null,i.a.createElement(u.a,null,i.a.createElement("title",null,"Authentic Indian Groceries | Tenali Double Horse USA |Tenali Double Horse UAE| ","Where we are"),i.a.createElement("meta",{name:"We are the premium quality supplier of Urad dal and pulses in Andhra Pradesh & Telangana",content:"#"})),i.a.createElement(d.a,null),i.a.createElement(p.a,{breadcrumb:{pagename:"Where we are",bannerimg:"/assets/img/banner/contact-header-banner.jpeg"}}),i.a.createElement(y,{tagId:this.props.match.params.tagId}),i.a.createElement(b.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/transparent-logo.png"}}))}}]),a}(o.Component);a.default=k},59:function(e,a,t){"use strict";var n=t(4),r=t(0),l=t.n(r),c=t(78),s=t(81),o=t(373),i=t(403);a.a=function(){var e=Object(r.useState)(!1),a=Object(n.a)(e,2),t=a[0],m=a[1],u=Object(r.useState)(""),d=Object(n.a)(u,2),p=d[0],b=d[1],E=Object(r.useState)(""),h=Object(n.a)(E,2),f=h[0],g=h[1],v=Object(r.useState)(""),y=Object(n.a)(v,2),k=y[0],O=y[1],j=Object(r.useState)(""),A=Object(n.a)(j,2),N=A[0],x=A[1],C=function(){m(!t)};return l.a.createElement("div",null,l.a.createElement("style",null,"\n          /* Your CSS styles go here */\n        "),l.a.createElement("div",{id:"feedbackDrawer",className:t?"showDrawer":""},l.a.createElement("div",{id:"feedbackForm"},l.a.createElement(c.a,{onSubmit:function(e){e.preventDefault();var a={fullName:p,email:f,phoneNumber:k,message:N};s.a.send("service_u0jehlt","template_aamrei5",a,"cjCRUWDX0cKAQSKL6").then(function(e){console.log("Email sent successfully:",e),alert("Message successfully sent!")}).catch(function(e){console.error("Email sending error:",e)}),b(""),g(""),O(""),x(""),m(!1)}},l.a.createElement("h2",null,"Submit Feedback"),l.a.createElement(c.a.Group,{controlId:"fullName",style:{marginBottom:"15px"}},l.a.createElement(c.a.Control,{type:"text",value:p,onChange:function(e){return b(e.target.value)},placeholder:"Full Name",isInvalid:!/^[A-Za-z ]+$/.test(p)&&p.length>0,required:!0}),l.a.createElement(o.a.Feedback,{type:"invalid"},"Please enter a valid full name.")),l.a.createElement(c.a.Group,{controlId:"email",style:{marginBottom:"15px"}},l.a.createElement(c.a.Control,{type:"email",value:f,onChange:function(e){return g(e.target.value)},placeholder:"Email",isInvalid:!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(f)&&f.length>0,required:!0}),l.a.createElement(o.a.Feedback,{type:"invalid"},"Please enter a valid email address.")),l.a.createElement(c.a.Group,{controlId:"phoneNumber",style:{marginBottom:"15px"}},l.a.createElement(c.a.Control,{type:"tel",value:k,onChange:function(e){return O(e.target.value)},placeholder:"Phone Number",isInvalid:!/^[0-9()+\-\s]*$/.test(k)&&k.length>0,maxLength:"14",required:!0}),l.a.createElement(o.a.Feedback,{type:"invalid"},"Please enter a valid phone number.")),l.a.createElement(c.a.Group,{controlId:"message",style:{marginBottom:"15px"}},l.a.createElement(c.a.Control,{as:"textarea",value:N,onChange:function(e){return x(e.target.value)},placeholder:"Message",rows:"5",isInvalid:!/^[A-Za-z ]+$/.test(N)&&N.length>0,required:!0}),l.a.createElement(o.a.Feedback,{type:"invalid"},"Please enter a valid message (only letters, commas, and periods are allowed).")),l.a.createElement(i.a,{type:"submit",className:"btn-custom btn-sm primary"},"Send Message"))),l.a.createElement("div",{id:"feedbackSuccess"},l.a.createElement("h2",null,"Thank You"),l.a.createElement("p",null,"Your feedback was successfully submitted"),l.a.createElement("button",{onClick:C},"Submit More Feedback")),l.a.createElement("div",{id:"feedbackError"},l.a.createElement("h2",null,"Aw, Snap!"),l.a.createElement("p",null,"There was an error submitting your feedback"),l.a.createElement("button",{onClick:C},"Try Again")),l.a.createElement("div",{id:"feedbackTrigger",onClick:C},"Feedback",l.a.createElement("span",{id:"close"},"\xbb"))))}},60:function(e,a,t){"use strict";var n=t(53),r=t(54),l=t(3),c=t(55),s=t(56),o=t(0),i=t.n(o),m=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(l.a)(this,Object(c.a)(a).call(this,e))).handleAccordionClick=function(e){t.setState(function(a){return{openIndex:a.openIndex===e?-1:e}})},t.state={openIndex:-1},t}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"womensdayawrap "},i.a.createElement("div",{className:"accordion"},[{heading:"Exports Enquiries ?"}].map(function(a,t){return i.a.createElement("div",{key:t,className:"accordion-item ".concat(t===e.state.openIndex?"open":"")},i.a.createElement("div",{className:"womensdayawrapsec",onClick:function(){return e.handleAccordionClick(t)}},i.a.createElement("span",null,i.a.createElement("img",{src:"./assets/img/bg/horses-icon2.png",className:"img-responsive",alt:""})),i.a.createElement("span",null,i.a.createElement("h5",{className:"text-white mb-0",style:{fontWeight:"700"}},a.heading)),i.a.createElement("div",{className:"plusicon ".concat(t===e.state.openIndex?"minusicon":"plusicon")})),t===e.state.openIndex&&i.a.createElement("div",{className:"accordion-content bg-white"},i.a.createElement("p",{className:"p-1 mb-1 text-center"}," Call us on ",i.a.createElement("a",{href:"tel:1800270567567"},"1800 270 567567")),i.a.createElement("p",{className:"p-1 text-center"},"mail us ",i.a.createElement("a",{href:"mailto:exports@tenalidoublehorse.com"},"exports@tenalidoublehorse.com"))))})))}}]),a}(o.Component);a.a=m},64:function(e,a,t){"use strict";var n=t(53),r=t(54),l=t(3),c=t(55),s=t(56),o=t(0),i=t.n(o),m=t(9),u=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"sub-header-breadcrumbs ",style:{backgroundImage:"url(".concat(".").concat(this.props.breadcrumb.bannerimg,")")}},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"subheader-inner"},i.a.createElement("h1",{className:"text-light breadcrumb-mobile"},this.props.breadcrumb.pagename),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item "},i.a.createElement(m.c,{to:"/"},"Home")),i.a.createElement("li",{className:"breadcrumb-item active ","aria-current":"page"},this.props.breadcrumb.pagename))))))}}]),a}(o.Component);a.a=u}}]);
//# sourceMappingURL=9.0f158b98.chunk.js.map