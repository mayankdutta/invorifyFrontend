(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(24),r=a.n(n),i=(a(60),a(22)),o=a(9),l=a(5),d=a.p+"static/media/logo.ddd5592b.png",u=a(1),b=function(){var e=s.useState(!1),t=Object(l.a)(e,2),a=t[0],c=t[1];return s.useEffect((function(){var e=setTimeout((function(){c(!0)}),2e3);return function(){return clearTimeout(e)}}),[]),a?localStorage.getItem("jwt")?"companies"===JSON.parse(localStorage.getItem("user")).type?Object(u.jsx)(o.a,{to:"/Companies"}):Object(u.jsx)(o.a,{to:"/FinancialInstitution"}):Object(u.jsx)(o.a,{to:"/credentials"}):Object(u.jsx)("div",{className:"h-full w-full bg-white flex justify-center items-center",children:Object(u.jsx)("img",{className:"object-contain h-screen w-auto",src:d,alt:"Invo"})})},m=a(7),j=a(14),x=a.n(j),h=a(3),p=function(e){var t=e.bgc,a=void 0===t?"white":t,s=e.bgch,c=void 0===s?"gray-800":s,n=e.color,r=void 0===n?"gray-700":n,i=e.colorh,o=void 0===i?"white":i,l=e.outline,d=void 0===l||l,b=e.disabled,m=void 0!==b&&b,j=e.loading,x=void 0!==j&&j,h=e.rounded,p=void 0===h?"none":h,g=e.children,f=void 0===g?"Save":g,O=e.type,v=void 0===O?"button":O,y=e.onClick,w=e.classes,N=void 0===w?"":w;return Object(u.jsxs)("button",{type:v,className:"".concat(d&&"border border-".concat(c)," bg-").concat(m||x?"gray-200":a," text-").concat(r," ").concat(p&&"rounded-".concat(p)," transition duration-200 ease select-none ").concat(!m&&!x&&"hover:text-".concat(o," hover:bg-").concat(m||x?"gray-200":c)," focus:outline-none focus:shadow-outline ").concat((m||x)&&"cursor-auto text-opacity-75"," ").concat(N),disabled:x||m,onClick:y,children:[x&&Object(u.jsx)("i",{className:"bx bx-loader-alt bx-spin mr-2"}),f]})},g=function(e){var t=e.color,a=void 0===t?"black":t,s=e.height,c=void 0===s?"2xl":s,n=e.className,r=void 0===n?"":n;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"flex justify-center items-center z-50",children:Object(u.jsx)("i",{className:"bx bx-loader-alt bx-spin text-".concat(c," text-").concat(a," ").concat(r)})})})},f=function(){return Object(u.jsx)("footer",{className:"w-full flex items-center justify-center bg-black",children:Object(u.jsxs)("div",{className:"md:w-2/3 w-full px-4 sm:px-12 pb-10 text-white flex flex-col",children:[Object(u.jsx)("div",{className:"w-full text-7xl font-bold pt-8 ",children:Object(u.jsx)("h1",{className:"w-full md:w-2/3",children:"How can we help you. get in touch"})}),Object(u.jsxs)("div",{className:"flex mt-8 flex-col md:flex-row md:justify-between",children:[Object(u.jsx)("p",{className:"w-full md:w-2/3 text-gray-400",children:"Feel free to give feedback"}),Object(u.jsx)("div",{className:"w-44 pt-3 md:pt-0",children:Object(u.jsx)("a",{className:"bg-red-500 justify-center text-center rounded-lg shadow\r px-10 py-3 flex items-center cursor-pointer",children:"Contact"})})]}),Object(u.jsxs)("div",{className:"flex flex-col justify-center",children:[Object(u.jsxs)("div",{className:"flex mt-16 mb-12 sm:px-10 md:px-24 lg:px-44 flex-row items-center justify-around",children:[Object(u.jsx)("a",{href:"https://github.com/",target:"_blank",children:Object(u.jsx)("i",{className:"bx bxl-github text-5xl cursor-pointer"})}),Object(u.jsx)("a",{href:"https://www.linkedin.com/in/",target:"_blank",children:Object(u.jsx)("i",{className:"bx bxl-linkedin text-5xl cursor-pointer"})}),Object(u.jsx)("a",{href:"https://twitter.com/",target:"_blank",children:Object(u.jsx)("i",{className:"bx bxl-twitter text-5xl cursor-pointer"})}),Object(u.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",children:Object(u.jsx)("i",{className:"bx bxl-instagram text-5xl cursor-pointer"})})]}),Object(u.jsx)("hr",{className:"border-gray-600"}),Object(u.jsx)("p",{className:"w-full text-center mt-4 text-gray-600",children:"Created by HolyUranus"})]})]})})},O=function(){return Object(u.jsx)(h.b,{position:"bottom-left",reverseOrder:!1,gutter:8,toastOptions:{duration:5e3,style:{background:"rgba(20, 20, 20, 0.85)",color:"rgba(255, 255, 255, 1)",cursor:"pointer",marginBottom:"10px",padding:"0px"},success:{duration:4e3}},children:function(e){return Object(u.jsx)(h.a,{toast:e,position:"bottom-left",children:function(t){var a=t.icon,s=void 0===a?"":a,c=t.message,n=void 0===c?"":c;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"bg-".concat("success"===e.type?"green-500":"error"===e.type?"red-500":"gray-500"," h-full w-2 rounded-l-lg")}),Object(u.jsxs)("div",{className:"flex items-center justify-between py-2 px-3",children:[s,n,"loading"!==e.type&&Object(u.jsx)("i",{onClick:function(){return h.d.dismiss(e.id)},className:"bx bx-x ml-2 text-2xl text-gray-500 hover:text-white"})]})]})}})}})},v=a(27),y=" text-lg tracking-wider font-bold font-sans",w="focus:outline-none focus:ring-4 focus:ring-green-600",N=function(e){var t=e.setPageToShow,a=s.useState(""),c=Object(l.a)(a,2),n=c[0],r=c[1],i=s.useState(""),b=Object(l.a)(i,2),j=b[0],f=b[1],O=s.useState("companies"),N=Object(l.a)(O,2),S=N[0],I=N[1],k=s.useState(!1),A=Object(l.a)(k,2),C=A[0],F=A[1],D=Object(o.g)();if(localStorage.getItem("jwt"))return Object(u.jsx)(o.a,{to:"/"});var E=[];return Object(u.jsxs)("form",{className:"z-50 absolute bg-black shadow-2xl rounded rounded-lg p-8 py-12\r flex flex-col justify-center items-center ",onSubmit:function(e){e.preventDefault(),F(!0),h.c.loading("Logging In",{id:"login"}),x.a.post("".concat("https://invorify-backend.herokuapp.com","/login/"),{userName:n,password:j,type:S}).then((function(e){h.c.success("Welcome ".concat(e.data.user.name),{duration:4e3}),h.c.dismiss("login"),F(!1),localStorage.setItem("jwt",JSON.stringify(e.data.data.token)),localStorage.setItem("user",JSON.stringify(e.data.user)),D.push("/")})).catch((function(e){h.c.error(e&&e.response&&e.response.data?e.response.data:"An error occurred"),h.c.dismiss("login"),F(!1)}))},children:[Object(u.jsx)("img",{className:"h-32 w-auto mb-6 rounded-full",src:d,alt:"Crypto Wiz"}),Object(u.jsx)("div",{className:"mb-6",children:Object(u.jsx)(v.a,{onChange:function(e){I(null===e||void 0===e?void 0:e.value)},options:function(e){return e.map((function(e){E.push({value:e,label:e})})),E}(["financial institution","companies"]),defaultValue:{label:"companies",value:"companies"},className:"text-white w-64",theme:function(e){return Object(m.a)(Object(m.a)({},e),{},{borderRadius:2,colors:Object(m.a)(Object(m.a)({},e.colors),{},{primary25:"rgba(255,255,255,0.25)",primary50:"rgba(255,255,255,0.50)",primary75:"rgba(255,255,255,0.75)",primary:"rgba(255,255,255,1)",neutral0:"rgba(25,25,25,1)",neutral5:"rgba(255,255,255,0.05)",neutral10:"rgba(255,255,255,0.1)",neutral20:"rgba(255,255,255,0.2)",neutral30:"rgba(255,255,255,0.3)",neutral40:"rgba(255,255,255,0.4)",neutral50:"rgba(255,255,255,0.5)",neutral60:"rgba(255,255,255,0.6)",neutral70:"rgba(255,255,255,0.7)",neutral80:"rgba(255,255,255,0.8)",neutral90:"rgba(255,255,255,0.9)"})})}})}),Object(u.jsxs)("div",{className:"mb-6",children:[Object(u.jsx)("label",{className:"block text-gray-200 text-sm font-bold mb-2"+y,children:"Username"}),Object(u.jsx)("input",{className:"w-64 shadow appearance-none border rounded py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"+w,id:"username",placeholder:"Enter Username",onChange:function(e){return r(e.target.value)},required:!0})]}),Object(u.jsxs)("div",{className:"mb-6",children:[Object(u.jsx)("label",{className:"block text-gray-200 text-sm font-bold mb-2"+y,children:"Password"}),Object(u.jsx)("input",{className:"w-64 shadow appearance-none border rounded py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"+w,id:"password",type:"password",placeholder:"Enter Password",onChange:function(e){return f(e.target.value)},required:!0})]}),Object(u.jsx)("div",{className:"flex items-center justify-between mb-4",children:C?Object(u.jsx)(g,{color:"gray-200"}):Object(u.jsx)(p,{type:"submit",rounded:"md",bgch:"gray-600",bgc:"white",color:"white",colorh:"white",classes:"w-64 h-8 bg-gray-800"+y,children:"Sign In"})}),Object(u.jsx)("div",{className:"w-full flex justify-center items-center",children:Object(u.jsx)("p",{children:Object(u.jsx)("p",{className:"font-light antialiased text-md cursor-pointer\r text-gray-400 hover:text-gray-200",onClick:function(){t("register")},children:"New user? Register"})})})]})},S=function(e){var t=e.setPageToShow,a=s.useState(""),c=Object(l.a)(a,2),n=c[0],r=c[1],i=s.useState(""),b=Object(l.a)(i,2),j=b[0],f=b[1],O=s.useState(""),y=Object(l.a)(O,2),w=y[0],N=y[1],S=s.useState("companies"),I=Object(l.a)(S,2),k=I[0],A=I[1],C=s.useState(!1),F=Object(l.a)(C,2),D=F[0],E=F[1],_=Object(o.g)(),J=[];return Object(u.jsxs)("form",{className:"z-50 absolute bg-black shadow-2xl rounded rounded-lg p-12 px-8 flex flex-col justify-center items-center ",onSubmit:function(e){e.preventDefault(),E(!0),h.c.loading("Logging In",{id:"login"}),x.a.post("".concat("https://invorify-backend.herokuapp.com","/register/"),{name:n,userName:j,password:w,type:k}).then((function(e){h.c.success("Registered as ".concat(e.data.name||""),{duration:4e3}),h.c.dismiss("login"),E(!1),_.push("/login")})).catch((function(e){h.c.error(e&&e.response&&e.response.data?e.response.data:"An error occurred"),h.c.dismiss("login"),E(!1)})),e.target.reset()},children:[Object(u.jsx)("img",{className:"h-12 w-auto mb-6",src:d,alt:"Crypto Wiz"}),Object(u.jsx)("div",{className:"mb-6",children:Object(u.jsx)(v.a,{onChange:function(e){A(null===e||void 0===e?void 0:e.value)},options:function(e){return e.map((function(e){J.push({value:e,label:e})})),J}(["financial institution","companies"]),defaultValue:{label:"companies",value:"companies"},className:"text-white w-64",theme:function(e){return Object(m.a)(Object(m.a)({},e),{},{borderRadius:2,colors:Object(m.a)(Object(m.a)({},e.colors),{},{primary25:"rgba(255,255,255,0.25)",primary50:"rgba(255,255,255,0.50)",primary75:"rgba(255,255,255,0.75)",primary:"rgba(255,255,255,1)",neutral0:"rgba(25,25,25,1)",neutral5:"rgba(255,255,255,0.05)",neutral10:"rgba(255,255,255,0.1)",neutral20:"rgba(255,255,255,0.2)",neutral30:"rgba(255,255,255,0.3)",neutral40:"rgba(255,255,255,0.4)",neutral50:"rgba(255,255,255,0.5)",neutral60:"rgba(255,255,255,0.6)",neutral70:"rgba(255,255,255,0.7)",neutral80:"rgba(255,255,255,0.8)",neutral90:"rgba(255,255,255,0.9)"})})}})}),Object(u.jsxs)("div",{className:"mb-6",children:[Object(u.jsx)("label",{className:"block text-gray-200 text-sm font-bold mb-2",children:"Name"}),Object(u.jsx)("input",{className:"w-64 shadow appearance-none border rounded py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline",id:"username",placeholder:"Enter Name",value:n,onChange:function(e){return r(e.target.value)},required:!0})]}),Object(u.jsxs)("div",{className:"mb-6",children:[Object(u.jsx)("label",{className:"block text-gray-200 text-sm font-bold mb-2",children:"Username"}),Object(u.jsx)("input",{className:"w-64 shadow appearance-none border rounded py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline",id:"username",placeholder:"Enter Username",value:j,onChange:function(e){return f(e.target.value)},required:!0})]}),Object(u.jsxs)("div",{className:"mb-6",children:[Object(u.jsx)("label",{className:"block text-gray-200 text-sm font-bold mb-2",children:"Password"}),Object(u.jsx)("input",{className:"w-64 shadow appearance-none border rounded py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline",id:"password",placeholder:"Enter Password",value:w,onChange:function(e){return N(e.target.value)},required:!0})]}),Object(u.jsx)("div",{className:"flex items-center justify-between mb-4",children:D?Object(u.jsx)(g,{color:"gray-200"}):Object(u.jsx)(p,{type:"submit",rounded:"md",bgch:"gray-600",bgc:"white",color:"white",colorh:"white",classes:"w-64 h-8 bg-gray-800",children:"Register"})}),Object(u.jsx)("p",{className:"font-light antialiased text-md cursor-pointer\r text-gray-400 hover:text-gray-200",onClick:function(){t("login")},children:"Already a user? Login"})]})},I=function(){var e=s.useState("login"),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(u.jsxs)("div",{className:"h-screen w-full flex justify-center items-center bg-gray-900 ",children:["login"===a?Object(u.jsx)(N,{setPageToShow:c}):Object(u.jsx)(S,{setPageToShow:c}),Object(u.jsx)("div",{className:"absolute",children:Object(u.jsx)("div",{className:"h-screen w-screen bg-gray-500"})})]})},k=a(106),A=a(107),C=a(108),F=a(41),D=a.p+"static/media/user.06c2296f.png";function E(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}var _=function(){var e=Object(o.h)(),t=Object(o.g)(),a=JSON.parse(localStorage.getItem("user")).type,c=[{name:"companies"===a?"Companies":"Financial Institution",href:"companies"===a?"/Companies":"/FinancialInstitution",current:"/Companies"===e.pathname||"/FinancialInstitution"===e.pathname}];"companies"===a&&c.push({name:"Invoices",href:"/Invoices",current:"/Invoices"===e.pathname});var n=localStorage.getItem("jwt")?"Log Out":"Log In",r=function(){t.push("/"),h.c.success("Logged Out"),localStorage.setItem("jwt",""),localStorage.setItem("user","")};return Object(u.jsx)("div",{className:"w-full my-4 bg-black ",children:Object(u.jsx)(k.a,{as:"nav",className:"",children:function(e){var t=e.open;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:Object(u.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[Object(u.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:Object(u.jsxs)(k.a.Button,{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[Object(u.jsx)("span",{className:"sr-only",children:"Open main menu"}),t?Object(u.jsx)(F.b,{className:"block h-6 w-6","aria-hidden":"true"}):Object(u.jsx)(F.a,{className:"block h-6 w-6","aria-hidden":"true"})]})}),Object(u.jsxs)("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:[Object(u.jsxs)("div",{className:"flex-shrink-0 flex items-center",children:[Object(u.jsx)("img",{className:"block lg:hidden h-16 w-auto rounded-full",src:d,alt:"Invorify"}),Object(u.jsx)("img",{className:"hidden lg:block h-16 w-auto mb-1 rounded-full",src:d,alt:"Invorify"})]}),Object(u.jsx)("div",{className:"hidden sm:flex flex-row justify-center items-center ml-4",children:Object(u.jsx)("div",{children:c.map((function(e){return Object(u.jsx)(i.b,{to:e.href,className:E(e.current?"bg-gray-800 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","px-3 py-2 rounded-md text-2xl font-sans ml-2 font-bold"),"aria-current":e.current?"page":void 0,children:e.name},e.name)}))})})]}),Object(u.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:Object(u.jsx)(A.a,{as:"div",className:"ml-3 relative",children:function(e){var t=e.open;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{children:Object(u.jsxs)(A.a.Button,{className:"bg-gray-800 flex text-sm rounded-full \r outline-none ring-2 ring-gray-500",children:[Object(u.jsx)("span",{className:"sr-only",children:"Open user menu"}),Object(u.jsx)("img",{className:"h-12 w-auto rounded-full ",src:D,alt:""})]})}),Object(u.jsx)(C.a,{show:t,as:s.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:Object(u.jsxs)(A.a.Items,{static:!0,className:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",children:[Object(u.jsx)(A.a.Item,{children:function(e){var t=e.active;return Object(u.jsx)("a",{href:"#",className:E(t?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700 font-sans text-xl font-medium "),children:"Your Profile"})}}),Object(u.jsx)(A.a.Item,{children:function(e){var t=e.active;return Object(u.jsx)("a",{href:"#",className:E(t?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700 font-sans text-xl font-medium "),children:"Settings"})}}),Object(u.jsx)(A.a.Item,{onClick:r,children:function(e){var t=e.active;return Object(u.jsx)("a",{className:E(t?"bg-red-500 text-white":"","block px-4 py-2 text-sm text-gray-700 cursor-pointer font-sans text-xl font-medium "),children:n})}})]})})]})}})})]})}),Object(u.jsx)(k.a.Panel,{className:"sm:hidden",children:Object(u.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:c.map((function(e){return Object(u.jsx)("a",{href:e.href,className:E(e.current?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block px-3 py-2 rounded-md text-base font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name)}))})})]})}})})},J=a(26),P=" text-lg tracking-wider font-bold font-sans",z=function(e){Object(J.a)(e);var t=s.useState(""),a=Object(l.a)(t,2),c=a[0],n=a[1],r=s.useState(null),i=Object(l.a)(r,2),o=i[0],b=i[1],j=s.useState(null),f=Object(l.a)(j,2),O=f[0],y=f[1],w=s.useState(!1),N=Object(l.a)(w,2),S=N[0],I=N[1],k=s.useState(!1),A=Object(l.a)(k,2),C=A[0],F=A[1],D=s.useState([]),E=Object(l.a)(D,2),_=E[0],z=E[1],T=[];s.useEffect((function(){F(!0),h.c.loading("Fetching Financial Institutions",{id:"finst"}),x.a.get("".concat("https://invorify-backend.herokuapp.com","/profile/financialInst"),{headers:{Authorization:JSON.parse(localStorage.getItem("jwt"))}}).then((function(e){console.log(e.data),h.c.success("Financial Institutions Fetched"),h.c.dismiss("finst"),z(e.data),F(!1)})).catch((function(e){h.c.error(e&&e.response&&e.response.data?e.response.data:"An error occurred"),h.c.dismiss("finst"),F(!1)}))}),[]);var U=JSON.parse(localStorage.getItem("user"))._id;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{className:"bg-black shadow-2xl rounded rounded-lg p-12 px-8 \r flex flex-col justify-center items-center mb-14",onSubmit:null!==O?function(e){e.preventDefault(),I(!0),h.c.loading("Uploading file",{id:"file"}),x.a.post("".concat("https://invorify-backend.herokuapp.com","/file/"),{userId:U,invoice:c,userPdf:o,financial:O,status:"pending"},{headers:{Authorization:JSON.parse(localStorage.getItem("jwt"))}}).then((function(e){console.log(e.data),I(!1),h.c.success("File saved successfully"),h.c.dismiss("file")})).catch((function(e){I(!1),h.c.error(e&&e.response&&e.response.data?e.response.data:"An error occurred"),h.c.dismiss("file")}))}:function(e){e.preventDefault(),h.c.error("Please select Financial Institution")},children:[Object(u.jsx)("img",{className:"h-32 w-auto mb-6 rounded-full",src:d,alt:"invorify"}),Object(u.jsxs)("div",{className:"mb-6",children:[Object(u.jsx)("label",{className:"block text-gray-200 mb-2"+P,children:"Invoice"}),Object(u.jsx)("input",{className:"w-64 shadow appearance-none border rounded py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-4 focus:ring-green-600",id:"invoice",placeholder:"Enter Invoice",value:c,onChange:function(e){return n(e.target.value)},required:!0})]}),Object(u.jsxs)("div",{className:"mb-6",children:[Object(u.jsx)("label",{className:"block text-gray-200 text-sm font-bold mb-2"+P,children:"Financial Institution"}),Object(u.jsx)(v.a,{onChange:function(e){y(null===e||void 0===e?void 0:e.value)},isLoading:C,options:function(e){return e.map((function(e){T.push({value:e._id,label:e.name})})),T}(_),defaultValue:{label:"Select Financial Institution",value:null},className:"text-white w-64",theme:function(e){return Object(m.a)(Object(m.a)({},e),{},{borderRadius:2,colors:Object(m.a)(Object(m.a)({},e.colors),{},{primary25:"rgba(255,255,255,0.25)",primary50:"rgba(255,255,255,0.50)",primary75:"rgba(255,255,255,0.75)",primary:"rgba(255,255,255,1)",neutral0:"rgba(25,25,25,1)",neutral5:"rgba(255,255,255,0.05)",neutral10:"rgba(255,255,255,0.1)",neutral20:"rgba(255,255,255,0.2)",neutral30:"rgba(255,255,255,0.3)",neutral40:"rgba(255,255,255,0.4)",neutral50:"rgba(255,255,255,0.5)",neutral60:"rgba(255,255,255,0.6)",neutral70:"rgba(255,255,255,0.7)",neutral80:"rgba(255,255,255,0.8)",neutral90:"rgba(255,255,255,0.9)"})})}})]}),Object(u.jsxs)("div",{className:"mb-6",children:[Object(u.jsx)("label",{className:"block text-gray-200 text-sm font-bold mb-2"+P,children:"File to upload"}),Object(u.jsx)("input",{className:"w-64 shadow appearance-none border rounded py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline",id:"file",placeholder:"Select Upload",type:"file",accept:".pdf",value:o,onChange:function(e){return b(e.target.value)},required:!0})]}),Object(u.jsx)("div",{className:"flex items-center justify-between ",children:S?Object(u.jsx)(g,{color:"gray-200"}):Object(u.jsx)(p,{type:"submit",rounded:"md",bgch:"gray-600",bgc:"white",color:"white",colorh:"white",classes:"w-64 h-8 bg-gray-800 "+P,children:"Upload"})})]})})},T=function(){return Object(u.jsx)("div",{className:"flex flex-wrap items-center justify-center w-full pt-20 pb-5",children:Object(u.jsx)(z,{})})},U=a(29),R=a.n(U),Y=" text-base tracking-wider font-bold font-sans px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider",L=function(e){Object(J.a)(e);var t=s.useState([]),a=Object(l.a)(t,2),c=a[0],n=a[1],r=s.useState(!1),i=Object(l.a)(r,2),o=i[0],d=i[1];s.useEffect((function(){h.c.loading("Fetching Invoices",{id:"Inv"});var e=JSON.parse(localStorage.getItem("user"))._id;x.a.post("".concat("https://invorify-backend.herokuapp.com","/file/fetchInvCompany"),{userId:e},{headers:{Authorization:JSON.parse(localStorage.getItem("jwt"))}}).then((function(e){console.log(e.data),h.c.success("Invoices Fetched"),h.c.dismiss("Inv"),n(e.data)})).catch((function(e){h.c.error(e&&e.response&&e.response.data?e.response.data:"An error occurred"),h.c.dismiss("Inv")}))}),[o]);return Object(u.jsx)("div",{className:"flex flex-col sm:w-4/5 lg:w-1/2 w-full my-12 \r min-h-1/2 border shadow-lg ",children:Object(u.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:Object(u.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:Object(u.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:Object(u.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[Object(u.jsx)("thead",{className:"bg-gray-50",children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",className:Y,children:"Sr. No."}),Object(u.jsx)("th",{scope:"col",className:Y,children:"Date"}),Object(u.jsx)("th",{scope:"col",className:Y,children:"Financial Institute"}),Object(u.jsx)("th",{scope:"col",className:Y,children:"Invoice No."}),Object(u.jsx)("th",{scope:"col",className:Y,children:"Status"}),Object(u.jsx)("th",{scope:"col"}),Object(u.jsx)("th",{scope:"col"})]})}),Object(u.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:c.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t+1}),Object(u.jsxs)("td",{className:"px-6 py-4 whitespace-nowrap",children:[Object(u.jsx)("div",{className:"text-sm text-gray-900",children:R()(e.createdAt).format("DD/MM/YYYY")||"N/A"}),Object(u.jsx)("div",{className:"text-sm text-gray-500",children:R()(e.createdAt).format("hh:mm a")||"N/A"})]}),Object(u.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:Object(u.jsx)("div",{className:"flex items-center",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text-sm font-medium text-gray-900",children:e.financial.name||"N/A"}),Object(u.jsx)("div",{className:"text-sm text-gray-500",children:e.financial.userName||"N/A"})]})})}),Object(u.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900",children:e.invoice||"N/A"}),Object(u.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:Object(u.jsx)("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full ".concat("pending"===e.status?"bg-red-100 text-red-800":"bg-green-100 text-green-800"),children:e.status||"N/A"})}),Object(u.jsx)("td",{className:"pr-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:Object(u.jsx)("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",children:"Show PDF"})}),Object(u.jsx)("td",{className:"pr-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:Object(u.jsx)("a",{onClick:function(){var t;t=e._id,h.c.loading("Deleting",{id:"delete"}),x.a.post("".concat("https://invorify-backend.herokuapp.com","/file/DeleteInvoice"),{id:t},{headers:{Authorization:JSON.parse(localStorage.getItem("jwt"))}}).then((function(e){h.c.success("Deleted"),h.c.dismiss("delete"),d(!o)})).catch((function(e){h.c.error(e&&e.response&&e.response.data?e.response.data:"An error occurred"),h.c.dismiss("delete"),d(!o)}))},className:"text-indigo-600 hover:text-indigo-900 cursor-pointer",children:"Delete"})})]})}))})]})})})})})},q=function(){return Object(u.jsx)("div",{className:"flex flex-wrap items-center justify-center w-full pt-20 pb-5",children:Object(u.jsx)(L,{})})},M=" text-base tracking-wider font-bold font-sans px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider",B=function(e){Object(J.a)(e);var t=s.useState([]),a=Object(l.a)(t,2),c=a[0],n=a[1],r=s.useState(!1),i=Object(l.a)(r,2),o=i[0],d=i[1];s.useEffect((function(){h.c.loading("Fetching Invoices",{id:"Inv"});var e=JSON.parse(localStorage.getItem("user"))._id;x.a.post("".concat("https://invorify-backend.herokuapp.com","/file/fetchInvFinancial"),{finId:e},{headers:{Authorization:JSON.parse(localStorage.getItem("jwt"))}}).then((function(e){h.c.success("Invoices Fetched"),h.c.dismiss("Inv"),n(e.data)})).catch((function(e){h.c.error(e&&e.response&&e.response.data?e.response.data:"An error occurred"),h.c.dismiss("Inv")}))}),[o]);return Object(u.jsx)("div",{className:"flex flex-col sm:w-4/5 lg:w-1/2 w-full my-12 \r min-h-1/2 border shadow-lg ",children:Object(u.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:Object(u.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:Object(u.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:Object(u.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[Object(u.jsx)("thead",{className:"bg-gray-50",children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",className:M,children:"Sr. No"}),Object(u.jsx)("th",{scope:"col",className:M,children:"Date"}),Object(u.jsx)("th",{scope:"col",className:M,children:"Company Name"}),Object(u.jsx)("th",{scope:"col",className:M,children:"Invoice No."}),Object(u.jsx)("th",{scope:"col",className:M,children:"Status"}),Object(u.jsx)("th",{scope:"col"}),Object(u.jsx)("th",{scope:"col"}),Object(u.jsx)("th",{scope:"col"})]})}),Object(u.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:c.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t+1||"N/A"}),Object(u.jsxs)("td",{className:"px-6 py-4 whitespace-nowrap",children:[Object(u.jsx)("div",{className:"text-sm text-gray-900",children:R()(e.createdAt).format("DD/MM/YYYY")||"N/A"}),Object(u.jsx)("div",{className:"text-sm text-gray-500",children:R()(e.createdAt).format("hh:mm a")||"N/A"})]}),Object(u.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:Object(u.jsx)("div",{className:"flex items-center",children:Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"text-sm font-medium text-gray-900",children:e.userId.name||"N/A"}),Object(u.jsx)("div",{className:"text-sm text-gray-500",children:e.userId.userName||"N/A"})]})})}),Object(u.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900",children:e.invoice||"N/A"}),Object(u.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:Object(u.jsx)("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full ".concat("pending"===e.status?"bg-red-100 text-red-800":"bg-green-100 text-green-800"),children:e.status||"N/A"})}),Object(u.jsx)("td",{className:"pr-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:Object(u.jsx)("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",children:"Show PDF"})}),Object(u.jsxs)("td",{className:"pr-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:[console.log(e.userPdf.data),"pending"===e.status?Object(u.jsx)("a",{onClick:function(){var t;t=e._id,h.c.loading("Approving",{id:"approve"}),x.a.post("".concat("https://invorify-backend.herokuapp.com","/file/ApproveInvoice"),{id:t},{headers:{Authorization:JSON.parse(localStorage.getItem("jwt"))}}).then((function(e){h.c.success("Approved"),h.c.dismiss("approve"),d(!o)})).catch((function(e){h.c.error(e&&e.response&&e.response.data?e.response.data:"An error occurred"),h.c.dismiss("approve"),d(!o)}))},className:"text-indigo-600 hover:text-indigo-900 cursor-pointer",children:"Approve"}):Object(u.jsx)("a",{className:"text-gray-400",children:"Approved"})]}),Object(u.jsx)("td",{className:"pr-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:"pending"===e.status?Object(u.jsx)("a",{onClick:function(){var t;t=e._id,h.c.loading("Deleting",{id:"delete"}),x.a.post("".concat("https://invorify-backend.herokuapp.com","/file/DeleteInvoice"),{id:t},{headers:{Authorization:JSON.parse(localStorage.getItem("jwt"))}}).then((function(e){h.c.success("Deleted"),h.c.dismiss("delete"),d(!o)})).catch((function(e){h.c.error(e&&e.response&&e.response.data?e.response.data:"An error occurred"),h.c.dismiss("delete"),console.error(e),d(!o)}))},className:"text-indigo-600 hover:text-indigo-900 cursor-pointer",children:"Delete"}):Object(u.jsx)("a",{className:"text-gray-400",children:"Delete"})})]})}))})]})})})})})},V=function(){return Object(u.jsx)("div",{className:"flex flex-wrap items-center justify-center w-full pt-20 pb-5 ",children:Object(u.jsx)(B,{})})},W=function(){return Object(u.jsxs)(i.a,{children:[Object(u.jsx)(o.b,{path:["/FinancialInstitution","/Companies","/Invoices"],component:_}),Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{path:"/Companies",exact:!0,component:T}),Object(u.jsx)(o.b,{path:"/Invoices",exact:!0,component:q}),Object(u.jsx)(o.b,{path:"/FinancialInstitution",exact:!0,component:V}),Object(u.jsx)(o.b,{path:"/credentials",exact:!0,component:I}),Object(u.jsx)(o.b,{path:"/",component:b})]}),Object(u.jsx)(O,{}),Object(u.jsx)(o.b,{path:["/Companies","/FinancialInstitution","/Invoices"],component:f})]})},H=a(55),X=a(30),G=a(54),K={currency:"inr"},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;return"SET_CURRENCY"===t.type?Object(m.a)(Object(m.a)({},e),{},{currency:t.payload}):e},Z={user:{}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;return"SET_USER"===t.type?Object(m.a)(Object(m.a)({},e),{},{user:t.payload}):e},ee=Object(X.b)({currency:Q,user:$}),te=[G.a],ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.c,se=Object(X.d)(ee,{},ae(X.a.apply(void 0,te)));var ce=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(H.a,{store:se,children:Object(u.jsx)(W,{})})})};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(ce,{})}),document.getElementById("root"))},60:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.5e142064.chunk.js.map