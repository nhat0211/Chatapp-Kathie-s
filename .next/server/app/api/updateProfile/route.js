"use strict";(()=>{var e={};e.id=783,e.ids=[783],e.modules={11185:e=>{e.exports=require("mongoose")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},63477:e=>{e.exports=require("querystring")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},4262:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>m,originalPathname:()=>g,requestAsyncStorage:()=>c,routeModule:()=>l,serverHooks:()=>x,staticGenerationAsyncStorage:()=>d,staticGenerationBailout:()=>q});var s={};r.r(s),r.d(s,{POST:()=>POST,dynamic:()=>p});var a=r(10884),o=r(16132),i=r(94020),n=r(60357),u=r(95798);let p="force-dynamic";async function POST(e){try{let{user:t}=await (0,i.getServerSession)(),{imageUrl:r}=await e.json(),s=await n.Z.findOne({email:t?.email});if(!s)return new u.Z.json({message:"User does not exists"},{status:403});return await n.Z.updateOne({email:t?.email},{avatar:r}),u.Z.json({success:"true"},{status:200})}catch(e){return console.log("[UPDATE_USER]",e),new u.Z(e)}}let l=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/updateProfile/route",pathname:"/api/updateProfile",filename:"route",bundlePath:"app/api/updateProfile/route"},resolvedPagePath:"/Users/quangnhat/Documents/GitHub/Chatapp-Kathie-s/app/api/updateProfile/route.js",nextConfigOutput:"standalone",userland:s}),{requestAsyncStorage:c,staticGenerationAsyncStorage:d,serverHooks:x,headerHooks:m,staticGenerationBailout:q}=l,g="/api/updateProfile/route"}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[657,449,11,674,107,20,357],()=>__webpack_exec__(4262));module.exports=r})();