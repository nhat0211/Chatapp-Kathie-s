(()=>{var e={};e.id=513,e.ids=[513],e.modules={11185:e=>{"use strict";e.exports=require("mongoose")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},32081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},41808:e=>{"use strict";e.exports=require("net")},70612:e=>{"use strict";e.exports=require("node:os")},97742:e=>{"use strict";e.exports=require("node:process")},25997:e=>{"use strict";e.exports=require("node:tty")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},63477:e=>{"use strict";e.exports=require("querystring")},12781:e=>{"use strict";e.exports=require("stream")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},38920:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>d,originalPathname:()=>p,pages:()=>u,routeModule:()=>x,tree:()=>l});var s=r(67096),a=r(16132),o=r(37284),i=r.n(o),n=r(32564),c={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>n[e]);r.d(t,c);let l=["",{children:["(home)",{children:["chat",{children:["profile",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,28999)),"/Users/quangnhat/Documents/GitHub/Chatapp-Kathie-s/app/(home)/chat/profile/page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,56887)),"/Users/quangnhat/Documents/GitHub/Chatapp-Kathie-s/app/(home)/layout.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,49813)),"/Users/quangnhat/Documents/GitHub/Chatapp-Kathie-s/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"]}],u=["/Users/quangnhat/Documents/GitHub/Chatapp-Kathie-s/app/(home)/chat/profile/page.jsx"],p="/(home)/chat/profile/page",d={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/(home)/chat/profile/page",pathname:"/chat/profile",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},79483:(e,t,r)=>{Promise.resolve().then(r.bind(r,45369))},45369:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var s=r(30784),a=r(9885),o=r.n(a),i=r(74284),n=r(1488),c=r(52451),l=r.n(c),u=r(46386),p=r(7805);let image_upload=({onUpload:e})=>{let[t,r]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{r(!0)},[]),t)?s.jsx("div",{children:s.jsx(u.ZF,{onUpload:e,uploadPreset:"cusxdbl6 ",children:({open:e})=>(0,s.jsxs)(n.z,{type:"button",variant:"secondary",onClick:()=>{e()},children:[s.jsx(p.Z,{className:"w-4 h-4 mr-2"}),"Upload an Image"]})})}):null};var d=r(10345);let x=o().memo(({data:e})=>{let[t,r]=(0,a.useState)(e?.avatar),upload=async t=>{try{r(t?.info.secure_url),await fetch("/api/updateProfile",{method:"POST",body:JSON.stringify({imageUrl:t?.info?.secure_url})}),d.toast.success("Image uploaded successfully.")}catch(t){console.log(t),d.toast.error("Somthing went wrong."),r(e?.avatar)}};return(0,s.jsxs)("div",{className:"flex flex-col items-center space-y-2 ",children:[s.jsx("div",{className:"relative w-[150px] h-[150px] bg-pink-200 rounded-full overflow-hidden",children:s.jsx(l(),{className:"object-cover object-center aspect-square bg-orange",width:150,height:150,alt:"user-profile",src:t})}),s.jsx(image_upload,{onUpload:upload}),s.jsx("p",{className:"text-black_accent_2 font-semibold text-lg",children:e?.name}),s.jsx("p",{className:"text-neutral-500",children:e?.email}),s.jsx(n.z,{className:"font-semibold mt-4 text-accent_1 hover:bg-zinc-300 ring ring-orange",onClick:()=>{localStorage.clear(),(0,i.signOut)({callbackUrl:"/"})},children:"Logout"})]})})},28999:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var s=r(4656),a=r(95153);let o=(0,a.createProxy)(String.raw`/Users/quangnhat/Documents/GitHub/Chatapp-Kathie-s/components/profile-page.jsx`),{__esModule:i,$$typeof:n}=o,c=o.default;var l=r(62294),u=r(60357),p=r(85171),d=r(94020),x=r(3542);let Page=async()=>{await (0,l.P)();let e=await (0,d.getServerSession)();if(!e?.user)return null;let t=await u.Z.findOne({email:e.user.email}).select("_id name email avatar");if(!t)return null;let r={...t.toObject(),_id:t._id.toString()};return s.jsx("div",{className:"w-full h-full self-stretch flex flex-col items-center justify-center",children:s.jsx(x.Suspense,{fallback:s.jsx(p.Z,{className:"w-5 h-5 animate-spin"}),children:s.jsx(c,{data:r})})})},h=Page},62294:(e,t,r)=>{"use strict";r.d(t,{P:()=>connectToDB});var s=r(11185),a=r.n(s);let o=!1;async function connectToDB(){if(o){console.log("db connected from database config");return}try{await a().connect(process.env.MONGODB_URI),o=!0,console.log("db connected from database config")}catch(e){console.log("error occured "+e)}}}};var t=require("../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[657,449,11,674,20,762,778,245,212,357,169,488,246],()=>__webpack_exec__(38920));module.exports=r})();