(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{106:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return l}),a.d(t,"c",function(){return o});var n=a(0),r=1,c=Object(n.createContext)(null),l=c.Provider;function o(){var e=Object(n.useContext)(c);if(null==e)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}},178:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var n=a(197);function r(e,t){var a,r=null!=(a=e.pane)?a:t.pane;return r?Object(n.a)({},e,{pane:r}):e}},180:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,"a",function(){return n})},381:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(180),r=a(4),c=a(106),l=a(101),o=a(0),i=a.n(o);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u(e){var t=e.children,a=e.className,u=e.id,m=e.placeholder,d=e.style,f=e.whenCreated,p=Object(n.a)(e,["children","className","id","placeholder","style","whenCreated"]),b=Object(o.useRef)(null),E=function(e,t){var a=Object(o.useState)(null),n=Object(r.a)(a,2),c=n[0],i=n[1];return Object(o.useEffect)(function(){if(null!==e.current&&null===c){var a=new l.Map(e.current,t);null!=t.center&&null!=t.zoom?a.setView(t.center,t.zoom):null!=t.bounds&&a.fitBounds(t.bounds,t.boundsOptions),null!=t.whenReady&&a.whenReady(t.whenReady),i(a)}},[e,c,t]),c}(b,p),v=Object(o.useRef)(!1);Object(o.useEffect)(function(){null!=E&&!1===v.current&&null!=f&&(v.current=!0,f(E))},[E,f]);var g=Object(o.useState)({className:a,id:u,style:d}),y=Object(r.a)(g,1)[0],h=Object(o.useMemo)(function(){return E?{__version:c.a,map:E}:null},[E]),N=h?i.a.createElement(c.b,{value:h},t):null!=m?m:null;return i.a.createElement("div",s({},y,{ref:b}),N)}},382:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(197),r=a(180),c=a(397),l=a(101),o=Object(c.a)(function(e,t){var a=e.position,c=Object(r.a)(e,["position"]),o=new l.Marker(a,c);return{instance:o,context:Object(n.a)({},t,{overlayContainer:o})}},function(e,t,a){t.position!==a.position&&e.setLatLng(t.position),null!=t.icon&&t.icon!==a.icon&&e.setIcon(t.icon),null!=t.zIndexOffset&&t.zIndexOffset!==a.zIndexOffset&&e.setZIndexOffset(t.zIndexOffset),null!=t.opacity&&t.opacity!==a.opacity&&e.setOpacity(t.opacity),null!=e.dragging&&t.draggable!==a.draggable&&(!0===t.draggable?e.dragging.enable():e.dragging.disable())})},390:function(e){e.exports={}},397:function(e,t,a){"use strict";var n=a(4),r=a(0),c=a.n(r),l=a(16),o=a(106);function i(e){function t(t,a){var n=e(t).current,l=n.instance,i=n.context;return Object(r.useImperativeHandle)(a,function(){return l}),null==t.children?null:c.a.createElement(o.b,{value:i},t.children)}return Object(r.forwardRef)(t)}function s(e){function t(t,a){var n=e(t).current.instance;return Object(r.useImperativeHandle)(a,function(){return n}),null}return Object(r.forwardRef)(t)}function u(e,t){return null==t?function(t,a){return Object(r.useRef)(e(t,a))}:function(a,n){var c=Object(r.useRef)(e(a,n)),l=Object(r.useRef)(a),o=c.current.instance;return Object(r.useEffect)(function(){l.current!==a&&(t(o,a,l.current),l.current=a)},[o,a,n]),c}}function m(e,t){var a=Object(r.useRef)(t);Object(r.useEffect)(function(){t!==a.current&&null!=e.attributionControl&&(null!=a.current&&e.attributionControl.removeAttribution(a.current),null!=t&&e.attributionControl.addAttribution(t)),a.current=t},[e,t])}function d(e,t){var a=Object(r.useRef)();Object(r.useEffect)(function(){return null!=t&&e.instance.on(t),a.current=t,function(){null!=a.current&&e.instance.off(a.current),a.current=null}},[e,t])}var f=a(178);function p(e,t){Object(r.useEffect)(function(){var a,n=null!=(a=t.layerContainer)?a:t.map;return n.addLayer(e.instance),function(){n.removeLayer(e.instance)}},[t,e])}function b(e){return function(t){var a=Object(o.c)(),n=e(Object(f.a)(t,a),a);return m(a.map,t.attribution),d(n.current,t.eventHandlers),p(n.current,a),n}}function E(e,t){return i(b(u(e,t)))}function v(e,t){return function(e){return Object(r.forwardRef)(function(t,a){var c=Object(r.useState)(!1),o=Object(n.a)(c,2),i=o[0],s=o[1],u=e(t,s).current.instance;Object(r.useImperativeHandle)(a,function(){return u}),Object(r.useEffect)(function(){i&&u.update()},[u,i,t.children]);var m=u._contentNode;return m?Object(l.createPortal)(t.children,m):null})}(function(e,t){return function(a,n){var r=Object(o.c)(),c=e(Object(f.a)(a,r),r);return m(r.map,a.attribution),d(c.current,a.eventHandlers),t(c.current,r,a,n),c}}(u(e),t))}function g(e,t){return s(b(u(e,t)))}a.d(t,"a",function(){return E}),a.d(t,"b",function(){return v}),a.d(t,"c",function(){return g})},398:function(e,t,a){"use strict";var n=a(180),r=a(397),c=a(178);var l=a(101);a.d(t,"a",function(){return o});var o=Object(r.c)(function(e,t){var a=e.url,r=Object(n.a)(e,["url"]);return{instance:new l.TileLayer(a,Object(c.a)(r,t)),context:t}},function(e,t,a){var n=t.opacity,r=t.zIndex;null!=n&&n!==a.opacity&&e.setOpacity(n),null!=r&&r!==a.zIndex&&e.setZIndex(r)})},417:function(e,t,a){"use strict";a.r(t);var n=a(53),r=a(54),c=a(3),l=a(55),o=a(56),i=a(0),s=a.n(i),u=a(66),m=a.n(u),d=a(73),f=a(64),p=a(62),b=(a(390),a(101)),E=a.n(b),v=a(4),g=a(9),y=a(381),h=a(398),N=a(397),O=Object(N.b)(function(e,t){return{instance:new b.Popup(e,t.overlayContainer),context:t}},function(e,t,a,n){var r=a.onClose,c=a.onOpen,l=a.position;Object(i.useEffect)(function(){var a=e.instance;function o(e){e.popup===a&&(a.update(),n(!0),null==c||c())}function i(e){e.popup===a&&(n(!1),null==r||r())}return t.map.on({popupopen:o,popupclose:i}),null==t.overlayContainer?(null!=l&&a.setLatLng(l),a.openOn(t.map)):t.overlayContainer.bindPopup(a),function(){t.map.off({popupopen:o,popupclose:i}),null==t.overlayContainer?t.map.removeLayer(a):t.overlayContainer.unbindPopup()}},[e,t,n,r,c,l])}),j=a(382),x=Object(N.b)(function(e,t){return{instance:new b.Tooltip(e,t.overlayContainer),context:t}},function(e,t,a,n){var r=a.onClose,c=a.onOpen;Object(i.useEffect)(function(){var a=t.overlayContainer;if(null!=a){var l=e.instance,o=function(e){e.tooltip===l&&(l.update(),n(!0),null==c||c())},i=function(e){e.tooltip===l&&(n(!1),null==r||r())};return a.on({tooltipopen:o,tooltipclose:i}),a.bindTooltip(l),function(){a.off({tooltipopen:o,tooltipclose:i}),a.unbindTooltip()}}},[e,t,n,r,c])}),w=(a(21),{guntur:{position:[16.268,80.639],name:"Tenali",description:"Description for Guntur",url:"https://www.google.com/maps/place/Tenali+Double+Horse/@16.268832,80.639928,8z/data=!4m6!3m5!1s0x3a4a062f6663586f:0x47ee4650ea8b815d!8m2!3d16.2688321!4d80.6399277!16s%2Fg%2F11dz0y28f_?hl=en&entry=ttu"},hyderabad:{position:[17.437,78.414],name:"HYDERABAD",description:"Description for Hyderabad",url:"https://www.google.com/maps?ll=17.437395,78.414571&z=8&t=m&hl=en&gl=IN&mapclient=embed&cid=15603634934683396795"}}),k=E.a.icon({iconUrl:"./assets/img/misc/marker.png",iconSize:[32,32]}),C=function(e){var t=e.position,a=e.name,n=e.url;return s.a.createElement(j.a,{position:t,icon:k,eventHandlers:{click:function(){window.open(n,"_blank")}}},s.a.createElement(x,null,a))},S=function(){var e=Object(i.useState)("guntur"),t=Object(v.a)(e,2),a=t[0],n=t[1],r=Object(i.useState)(null),c=Object(v.a)(r,2),l=c[0],o=c[1];Object(i.useEffect)(function(){l&&l.setView(w[a].position,12)},[l,a]);var u=function(e){n(e)};return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row "},s.a.createElement("div",{className:"col-lg-12"},s.a.createElement("div",{style:{backgroundColor:"#ED4E53"}},s.a.createElement("ul",{className:"ullist controls",style:{display:"flex",margin:"0",padding:"0",listStyleType:"none"}},s.a.createElement("li",{key:"guntur",style:{margin:"0"},className:"guntur"===a?"active":""},s.a.createElement(g.c,{to:"#guntur",className:"location-link",onClick:function(){return u("guntur")},style:{color:"#ffffff",display:"block",padding:"15px",fontSize:"18px",fontWeight:"600",borderRight:"2px solid #ffffff",textDecoration:"none"}},"  TENALI ")),s.a.createElement("li",{key:"hyderabad",style:{margin:"0"},className:"hyderabad"===a?"active":""},s.a.createElement(g.c,{to:"#hyderabad",className:"location-link",onClick:function(){return u("hyderabad")},style:{color:"#ffffff",display:"block",padding:"15px",fontSize:"18px",fontWeight:"600",borderRight:"2px solid #ffffff",textDecoration:"none"}}," HYDERABAD ")))),s.a.createElement(y.a,{whenCreated:o,center:w[a].position,zoom:8,style:{height:"400px"}},s.a.createElement(h.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"\xa9 Tiles \xa9 Esri \u2014 Esri, DeLorme, NAVTEQ",maxZoom:16}),Object.keys(w).map(function(e){return s.a.createElement(C,{key:e,position:w[e].position,name:w[e].name,url:w[e].url},e===a&&s.a.createElement(O,null,w[e].description))})))))},A=a(59),I=a(60),D=(E.a.icon({iconUrl:"./assets/img/misc/marker.png",iconSize:[32,32]}),function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"section"},s.a.createElement("div",{className:"container locations-wrapper"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"section-title-wrap text-center mb-5"},s.a.createElement("h5",{className:"custom-primary"},"Connect with Us"),s.a.createElement("h2",{className:"title"},"Reach Out to Tenali Double Horse"),s.a.createElement("p",{className:"subtitle"},"Find our corporate and factory addresses along with contact information. We're here to assist you. Feel free to get in touch for inquiries, feedback, or any assistance you need.")),s.a.createElement("div",{className:"row  p-2"},s.a.createElement("div",{className:"col-lg-7 mb-lg-30 "},s.a.createElement("div",{className:"row row-cols-1 row-cols-md-2"},s.a.createElement("div",{className:"col-lg-12 col-md-7 col-sm-12  mb-lg-30  "},s.a.createElement("div",{className:"row  top-row"},s.a.createElement("div",{className:"col-lg-6 col-sm-12 mb-3 d-flex email-toll-card1"},s.a.createElement("div",null,s.a.createElement("i",{className:"fas fa-envelope mt-3 phone-email",style:{fontSize:"30px",color:"white"}}))," \xa0",s.a.createElement("div",{className:"mt-1"},"email",s.a.createElement("h5",{className:"card-title"}," ",s.a.createElement("a",{href:"mailto: info@tenalidoublehorse.com"},"info@tenalidoublehorse.com")))),s.a.createElement("div",{className:"col-lg-6 col-sm-12   mb-3 d-flex email-toll-card2"},s.a.createElement("div",null,s.a.createElement("i",{className:"fas fa-phone-volume mt-3 phone-icon",style:{fontSize:"33px",color:" #ED4E53"}}))," \xa0",s.a.createElement("div",{className:"mt-1"},"Toll Free Number",s.a.createElement("h5",{className:"card-title"}," ",s.a.createElement("a",{href:"tel: 1800 270 567567"},"1800 270 567567")))))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"card-locations mb-4"},s.a.createElement("div",{className:"card-body"},s.a.createElement("i",{className:"fas fa-industry",style:{fontSize:"40px",color:" #ED4E53"}}),s.a.createElement("h5",{className:"card-title"},"MAHENDRA DALL MILL"),s.a.createElement("p",{className:"card-text content-justify"},"P.No.37,47,48,49 & 49A, AutoNagar, Somasundarapalem, Kattevaram (Post) \u2013 522 295, TENALI, Guntur Dist, A.P")))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"card-locations mb-4"},s.a.createElement("div",{className:"card-body"},s.a.createElement("i",{className:"fas fa-industry",style:{fontSize:"40px",color:" #ED4E53"}}),s.a.createElement("h5",{className:"card-title"},"MAHARANI DALL MILL"),s.a.createElement("p",{className:"card-text content-justify"},"Plot.No. 38, 39, 40, AutoNagar, Somasundarapalem, Kattevaram (Post) \u2013 522 295, TENALI, Guntur Dist, A.P")))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"card-locations mb-4"},s.a.createElement("div",{className:"card-body"},s.a.createElement("i",{className:"fas fa-industry",style:{fontSize:"40px",color:" #ED4E53"}}),s.a.createElement("h5",{className:"card-title"},"MAHADEVA DALL INDUSTRIES PVT LTD"),s.a.createElement("p",{className:"card-text content-justify"},"Nandivelugu, Nandivelugu (Post) \u2013 522 306 TENALI, Guntur Dist, A.P")))),s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"card-locations mb-4"},s.a.createElement("div",{className:"card-body"},s.a.createElement("i",{className:"fas fa-building",style:{fontSize:"35px",color:" #ED4E53"}}),s.a.createElement("h5",{className:"card-title"}," CORPORATE ADDRESS"),s.a.createElement("p",{className:"card-text content-justify"},"JK TOWERS, 8-2-293/82/B/S-7, 2nd Floor, Road Number 10C, Gayatri Hills, Jubilee Hills, Hyderabad, Telangana 500033 ")))))),s.a.createElement("div",{className:"col-lg-5  p-2"},s.a.createElement("form",{className:"mb-5 location-contact"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"form-group col-lg-6"},s.a.createElement("input",{type:"text",placeholder:"First Name",required:!0,className:"form-control",name:"fname"})),s.a.createElement("div",{className:"form-group col-lg-6"},s.a.createElement("input",{type:"text",placeholder:"Last Name",required:!0,className:"form-control",name:"lname"})),s.a.createElement("div",{className:"form-group col-lg-12"},s.a.createElement("input",{type:"email",placeholder:"Email Address",required:!0,className:"form-control",name:"email"})),s.a.createElement("div",{className:"form-group col-lg-6"},s.a.createElement("input",{type:"text",placeholder:"Phone no",required:!0,className:"form-control",name:"Phonenumber"})),s.a.createElement("div",{className:"form-group col-lg-6"},s.a.createElement("select",{className:"form-control",name:"purpose",required:!0},s.a.createElement("option",{value:"",disabled:!0,selected:!0},"Purpose of Contact"),s.a.createElement("option",{value:"export"},"Export"),s.a.createElement("option",{value:"distribution"},"Distribution Enquiry "),s.a.createElement("option",{value:"Feedback"},"Feedback"),s.a.createElement("option",{value:"Suggestions"},"Suggestions"),s.a.createElement("option",{value:"Other"},"Job Enquiry"))),s.a.createElement("div",{className:"form-group col-lg-12"},s.a.createElement("input",{type:"text",placeholder:"Subject",required:!0,className:"form-control",name:"subject"})),s.a.createElement("div",{className:"form-group col-lg-12"},s.a.createElement("textarea",{name:"message",className:"form-control",required:!0,placeholder:"Type your message",rows:9}))),s.a.createElement("button",{type:"submit",className:"btn-custom primary location-contact",name:"button"},"Send Message"))))),s.a.createElement(S,null),s.a.createElement(A.a,null),s.a.createElement(I.a,null)))}}]),t}(i.Component)),L=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(i.Fragment,null,s.a.createElement(m.a,null,s.a.createElement("title",null,"Tenali  doublehorse | ","Locations"),s.a.createElement("meta",{name:"description",content:"#"})),s.a.createElement(d.a,null),s.a.createElement(f.a,{breadcrumb:{pagename:"Locations",bannerimg:"/assets/img/banner/contact-header-banner.jpeg"}}),s.a.createElement(D,null),s.a.createElement(p.a,{footer:{style:"ct-footer footer-dark",logo:"assets/img/tenali-double-horse-logo-135x73.png"}}))}}]),t}(i.Component);t.default=L},59:function(e,t,a){"use strict";var n=a(4),r=a(0),c=a.n(r),l=a(78),o=a(81),i=a(373),s=a(403);t.a=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],u=t[1],m=Object(r.useState)(""),d=Object(n.a)(m,2),f=d[0],p=d[1],b=Object(r.useState)(""),E=Object(n.a)(b,2),v=E[0],g=E[1],y=Object(r.useState)(""),h=Object(n.a)(y,2),N=h[0],O=h[1],j=Object(r.useState)(""),x=Object(n.a)(j,2),w=x[0],k=x[1],C=function(){u(!a)};return c.a.createElement("div",null,c.a.createElement("style",null,"\n          /* Your CSS styles go here */\n        "),c.a.createElement("div",{id:"feedbackDrawer",className:a?"showDrawer":""},c.a.createElement("div",{id:"feedbackForm"},c.a.createElement(l.a,{onSubmit:function(e){e.preventDefault();var t={fullName:f,email:v,phoneNumber:N,message:w};o.a.send("service_u0jehlt","template_aamrei5",t,"cjCRUWDX0cKAQSKL6").then(function(e){console.log("Email sent successfully:",e),alert("Message successfully sent!")}).catch(function(e){console.error("Email sending error:",e)}),p(""),g(""),O(""),k(""),u(!1)}},c.a.createElement("h2",null,"Submit Feedback"),c.a.createElement(l.a.Group,{controlId:"fullName",style:{marginBottom:"15px"}},c.a.createElement(l.a.Control,{type:"text",value:f,onChange:function(e){return p(e.target.value)},placeholder:"Full Name",isInvalid:!/^[A-Za-z ]+$/.test(f)&&f.length>0,required:!0}),c.a.createElement(i.a.Feedback,{type:"invalid"},"Please enter a valid full name.")),c.a.createElement(l.a.Group,{controlId:"email",style:{marginBottom:"15px"}},c.a.createElement(l.a.Control,{type:"email",value:v,onChange:function(e){return g(e.target.value)},placeholder:"Email",isInvalid:!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)&&v.length>0,required:!0}),c.a.createElement(i.a.Feedback,{type:"invalid"},"Please enter a valid email address.")),c.a.createElement(l.a.Group,{controlId:"phoneNumber",style:{marginBottom:"15px"}},c.a.createElement(l.a.Control,{type:"tel",value:N,onChange:function(e){return O(e.target.value)},placeholder:"Phone Number",isInvalid:!/^[0-9()+\-\s]*$/.test(N)&&N.length>0,maxLength:"14",required:!0}),c.a.createElement(i.a.Feedback,{type:"invalid"},"Please enter a valid phone number.")),c.a.createElement(l.a.Group,{controlId:"message",style:{marginBottom:"15px"}},c.a.createElement(l.a.Control,{as:"textarea",value:w,onChange:function(e){return k(e.target.value)},placeholder:"Message",rows:"5",isInvalid:!/^[A-Za-z ]+$/.test(w)&&w.length>0,required:!0}),c.a.createElement(i.a.Feedback,{type:"invalid"},"Please enter a valid message (only letters, commas, and periods are allowed).")),c.a.createElement(s.a,{type:"submit",className:"btn-custom btn-sm primary"},"Send Message"))),c.a.createElement("div",{id:"feedbackSuccess"},c.a.createElement("h2",null,"Thank You"),c.a.createElement("p",null,"Your feedback was successfully submitted"),c.a.createElement("button",{onClick:C},"Submit More Feedback")),c.a.createElement("div",{id:"feedbackError"},c.a.createElement("h2",null,"Aw, Snap!"),c.a.createElement("p",null,"There was an error submitting your feedback"),c.a.createElement("button",{onClick:C},"Try Again")),c.a.createElement("div",{id:"feedbackTrigger",onClick:C},"Feedback",c.a.createElement("span",{id:"close"},"\xbb"))))}},60:function(e,t,a){"use strict";var n=a(53),r=a(54),c=a(3),l=a(55),o=a(56),i=a(0),s=a.n(i),u=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).handleAccordionClick=function(e){a.setState(function(t){return{openIndex:t.openIndex===e?-1:e}})},a.state={openIndex:-1},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"womensdayawrap "},s.a.createElement("div",{className:"accordion"},[{heading:"Exports Enquiries ?"}].map(function(t,a){return s.a.createElement("div",{key:a,className:"accordion-item ".concat(a===e.state.openIndex?"open":"")},s.a.createElement("div",{className:"womensdayawrapsec",onClick:function(){return e.handleAccordionClick(a)}},s.a.createElement("span",null,s.a.createElement("img",{src:"./assets/img/bg/horses-icon2.png",className:"img-responsive",alt:""})),s.a.createElement("span",null,s.a.createElement("h5",{className:"text-white mb-0",style:{fontWeight:"700"}},t.heading)),s.a.createElement("div",{className:"plusicon ".concat(a===e.state.openIndex?"minusicon":"plusicon")})),a===e.state.openIndex&&s.a.createElement("div",{className:"accordion-content bg-white"},s.a.createElement("p",{className:"p-1 mb-1 text-center"}," Call us on ",s.a.createElement("a",{href:"tel:1800270567567"},"1800 270 567567")),s.a.createElement("p",{className:"p-1 text-center"},"mail us ",s.a.createElement("a",{href:"mailto:exports@tenalidoublehorse.com"},"exports@tenalidoublehorse.com"))))})))}}]),t}(i.Component);t.a=u},64:function(e,t,a){"use strict";var n=a(53),r=a(54),c=a(3),l=a(55),o=a(56),i=a(0),s=a.n(i),u=a(9),m=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"sub-header-breadcrumbs ",style:{backgroundImage:"url(".concat(".").concat(this.props.breadcrumb.bannerimg,")")}},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"subheader-inner"},s.a.createElement("h1",{className:"text-light breadcrumb-mobile"},this.props.breadcrumb.pagename),s.a.createElement("nav",{"aria-label":"breadcrumb"},s.a.createElement("ol",{className:"breadcrumb"},s.a.createElement("li",{className:"breadcrumb-item "},s.a.createElement(u.c,{to:"/"},"Home")),s.a.createElement("li",{className:"breadcrumb-item active ","aria-current":"page"},this.props.breadcrumb.pagename))))))}}]),t}(i.Component);t.a=m}}]);
//# sourceMappingURL=30.909c9261.chunk.js.map