"use strict";(()=>{var e={};e.id=476,e.ids=[476],e.modules={11185:e=>{e.exports=require("mongoose")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},63477:e=>{e.exports=require("querystring")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},77714:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>g,originalPathname:()=>q,requestAsyncStorage:()=>l,routeModule:()=>p,serverHooks:()=>m,staticGenerationAsyncStorage:()=>x,staticGenerationBailout:()=>f});var o={};r.r(o),r.d(o,{POST:()=>POST,dynamic:()=>d});var a=r(10884),n=r(16132),s=r(60357),i=r(62294),c=r(94020),u=r(95798);let d="force-dynamic";async function POST(e){let{user:t}=await (0,c.getServerSession)();try{let{currUser:r,personToAdd:o}=await e.json();if(await (0,i.P)(),String(o)===String(t.email))return u.Z.json({error:"You cant add yourself"},{status:400});let a=await s.Z.findOne({email:o}).select(" _id email name avatar");if(!a)return u.Z.json({error:"The user doesnt exists"},{status:500});return await addToContactList(r,a),u.Z.json({data:a},{status:200})}catch(e){return console.log("[ADD_CONTACT]",e),u.Z.json({error:"An error occurred."},{status:500})}}async function addToContactList(e,t){try{let r=await s.Z.findOne({email:e}),o=r.contacts.some(e=>e.email===t.email);if(o)throw Error("contact already exists");await s.Z.findOneAndUpdate({email:e},{$push:{contacts:t}})}catch(e){throw console.log("Error while updating contact list ",e.message),Error(e)}}let p=new a.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/addContact/route",pathname:"/api/addContact",filename:"route",bundlePath:"app/api/addContact/route"},resolvedPagePath:"/Users/quangnhat/Documents/Chatapp-Kathie/app/api/addContact/route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:l,staticGenerationAsyncStorage:x,serverHooks:m,headerHooks:g,staticGenerationBailout:f}=p,q="/api/addContact/route"},62294:(e,t,r)=>{r.d(t,{P:()=>connectToDB});var o=r(11185),a=r.n(o);let n=!1;async function connectToDB(){if(n){console.log("db connected from database config");return}try{await a().connect(process.env.MONGODB_URI),n=!0,console.log("db connected from database config")}catch(e){console.log("error occured "+e)}}}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[657,449,11,674,107,20,357],()=>__webpack_exec__(77714));module.exports=r})();