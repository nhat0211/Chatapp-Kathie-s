"use strict";(()=>{var e={};e.id=428,e.ids=[428],e.modules={11185:e=>{e.exports=require("mongoose")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},63477:e=>{e.exports=require("querystring")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},4624:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>m,originalPathname:()=>f,requestAsyncStorage:()=>d,routeModule:()=>l,serverHooks:()=>g,staticGenerationAsyncStorage:()=>x,staticGenerationBailout:()=>q});var o={};r.r(o),r.d(o,{GET:()=>GET,dynamic:()=>p});var n=r(10884),s=r(16132),a=r(60357),c=r(62294),i=r(94020),u=r(95798);let p="force-dynamic";async function GET(e){try{let{user:e}=await (0,i.getServerSession)();await (0,c.P)();let t=await a.Z.findOne({email:e.email}).select("contacts");if(!t)return new u.Z("contacts doesnot exists");return u.Z.json({contacts:t?.contacts},{status:200})}catch(e){return console.log("[FETCH_CONTACTS]",e),new u.Z(e)}}let l=new n.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/contacts/route",pathname:"/api/contacts",filename:"route",bundlePath:"app/api/contacts/route"},resolvedPagePath:"/Users/quangnhat/Documents/chatapp-kathie/app/api/contacts/route.js",nextConfigOutput:"standalone",userland:o}),{requestAsyncStorage:d,staticGenerationAsyncStorage:x,serverHooks:g,headerHooks:m,staticGenerationBailout:q}=l,f="/api/contacts/route"},62294:(e,t,r)=>{r.d(t,{P:()=>connectToDB});var o=r(11185),n=r.n(o);let s=!1;async function connectToDB(){if(s){console.log("db connected from database config");return}try{await n().connect(process.env.MONGODB_URI),s=!0,console.log("db connected from database config")}catch(e){console.log("error occured "+e)}}}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[657,449,11,674,107,20,357],()=>__webpack_exec__(4624));module.exports=r})();