(()=>{var e={};e.id=931,e.ids=[931],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},32081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},70612:e=>{"use strict";e.exports=require("node:os")},97742:e=>{"use strict";e.exports=require("node:process")},25997:e=>{"use strict";e.exports=require("node:tty")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},98070:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>d,routeModule:()=>p,tree:()=>c});var r=s(67096),a=s(16132),i=s(37284),o=s.n(i),n=s(32564),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(t,l);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,14859)),"/Users/quangnhat/Documents/Chatapp-Kathie/app/page.jsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,49813)),"/Users/quangnhat/Documents/Chatapp-Kathie/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/quangnhat/Documents/Chatapp-Kathie/app/page.jsx"],m="/page",u={require:s,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},37571:(e,t,s)=>{Promise.resolve().then(s.bind(s,73291))},73291:(e,t,s)=>{"use strict";s.r(t),s.d(t,{AuthForm:()=>AuthForm});var r=s(30784),a=s(74284),i=s(9885),o=s(43618),n=s(97389),l=s(1268);let c=(0,n.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=i.forwardRef(({className:e,...t},s)=>r.jsx(o.f,{ref:s,className:(0,l.cn)(c(),e),...t}));d.displayName=o.f.displayName;var m=s(56456),u=s(1488),p=s(10345);let components_Register=()=>{let[e,t]=(0,i.useState)({email:"",password:""}),[s,a]=(0,i.useState)(!1),handleSubmit=async s=>{if(s.preventDefault(),e.email&&e.password){a(!0);try{let s=await fetch("/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r=await s.json();if(r.success){p.toast.success("Registered successfully."),a(!1),t(e=>({...e,email:"",password:""})),setIsLoginPage(!0);return}throw Error(r.message)}catch(e){console.log("[REGISTERING_USER_CLIENT]:",e),p.toast.error(e.message)}finally{a(!1)}}};return r.jsx(r.Fragment,{children:(0,r.jsxs)("section",{className:" mt-[10vh] bg-primary md:max-w-login mx-auto md:h-auto md:max-h-login px-5 md:side-p rounded-3xl border border-solid border-gray pt-[3.15rem] pb-[2.69rem]",children:[r.jsx("h1",{className:"font-bold w-4/5 md:w-auto text-lg  leading-normal mb-7",children:"Register"}),r.jsx("form",{onSubmit:handleSubmit,className:"self-stretch flex flex-col items-start mb-8",children:(0,r.jsxs)("div",{className:"grid gap-2 self-stretch",children:[(0,r.jsxs)("div",{className:"grid gap-1 ",children:[r.jsx(d,{className:"sr-only",htmlFor:"email",children:"Email"}),r.jsx(m.I,{id:"email",placeholder:"name@example.com",type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",disabled:s,name:"email",onChange:e=>t(t=>({...t,[e.target.name]:e.target.value}))})]}),(0,r.jsxs)("div",{className:"grid gap-1",children:[r.jsx(d,{className:"sr-only",htmlFor:"password",children:"Password"}),r.jsx(m.I,{id:"password",placeholder:"password",type:"password",name:"password",disabled:s,onChange:e=>t(t=>({...t,[e.target.name]:e.target.value}))})]}),r.jsx(u.z,{disabled:s,variant:"outline",className:"text-accent_1",children:s?"Please Wait...":"Register "})]})})]})})};var x=s(57114),g=s(4345);let components_Login=()=>{let[e,t]=(0,i.useState)(!1),{socket:s}=(0,g.useSocket)(),[o,n]=(0,i.useState)({email:"",password:""}),l=(0,x.useRouter)(),handleSubmit=async e=>{if(e.preventDefault(),o.email&&o.password){t(!0);try{let e=await (0,a.signIn)("credentials",{email:o.email,password:o.password,redirect:!1});if(e.error){t(!1),p.toast.error("Invalid credentials");return}s?.emit("REGISTER",{email:o.email}),localStorage.setItem("UserEmail",JSON.stringify(o.email)),p.toast.success("Login successfully"),l.replace("/chat")}catch(e){console.log("an error occured while logging ",e),p.toast.error(e.message||"Something went wrong")}finally{t(!1)}}};return(0,r.jsxs)("section",{className:"max-w-md mx-auto bg-primary mt-[10vh] side-p rounded-3xl border border-solid border-gray px-4 pt-10 pb-[2.69rem] ",children:[r.jsx("h1",{className:"text-text font-bold text-lg leading-normal mb-7",children:"Login"}),r.jsx("form",{onSubmit:handleSubmit,children:(0,r.jsxs)("div",{className:"grid gap-2",children:[(0,r.jsxs)("div",{className:"grid gap-1",children:[r.jsx(d,{className:"sr-only",htmlFor:"email",children:"Email"}),r.jsx(m.I,{id:"email",placeholder:"name@example.com",type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",disabled:e,name:"email",onChange:e=>n(t=>({...t,[e.target.name]:e.target.value}))})]}),(0,r.jsxs)("div",{className:"grid gap-1",children:[r.jsx(d,{className:"sr-only",htmlFor:"password",children:"Password"}),r.jsx(m.I,{id:"password",placeholder:"password",type:"password",name:"password",disabled:e,onChange:e=>n(t=>({...t,[e.target.name]:e.target.value}))})]}),r.jsx(u.z,{disabled:e,variant:"outline",className:"text-accent_1",children:e?"Please Wait...":"Login "})]})})]})},AuthForm=()=>{let[e,t]=(0,i.useState)("LOGIN"),s=(0,a.useSession)(),o=(0,x.useRouter)(),n=(0,i.useCallback)(()=>{"LOGIN"===e?t("REGISTER"):t("LOGIN")},[e]);return(0,i.useEffect)(()=>{"authenticated"===s.status&&o.push("/chat")},[s.status,o]),(0,r.jsxs)(r.Fragment,{children:["LOGIN"===e?r.jsx(components_Login,{}):r.jsx(components_Register,{}),(0,r.jsxs)("p",{className:"text-sm text-center leading-normal text-l-gray mt-8",children:["LOGIN"===e?"Don`t have an account yet?":"Already a member?",r.jsx("button",{onClick:n,className:"text-orange ml-2",children:"LOGIN"===e?"register":"login"})]})]})}},14859:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>page});var r=s(4656),a=s(95153);let i=(0,a.createProxy)(String.raw`/Users/quangnhat/Documents/Chatapp-Kathie/app/_components/auth-form.jsx`),{__esModule:o,$$typeof:n}=i;i.default;let l=(0,a.createProxy)(String.raw`/Users/quangnhat/Documents/Chatapp-Kathie/app/_components/auth-form.jsx#AuthForm`),page=()=>r.jsx("div",{className:"relative overflow-hidden rounded-3xl",children:r.jsx(l,{})})}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[657,762,778,618,315,488,456],()=>__webpack_exec__(98070));module.exports=s})();