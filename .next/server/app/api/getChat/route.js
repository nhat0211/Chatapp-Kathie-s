"use strict";(()=>{var e={};e.id=736,e.ids=[736],e.modules={11185:e=>{e.exports=require("mongoose")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},63477:e=>{e.exports=require("querystring")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},88247:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>x,originalPathname:()=>f,requestAsyncStorage:()=>c,routeModule:()=>d,serverHooks:()=>m,staticGenerationAsyncStorage:()=>g,staticGenerationBailout:()=>h});var r={};a.r(r),a.d(r,{POST:()=>POST,dynamic:()=>u});var s=a(10884),i=a(16132),n=a(46031),o=a(60357),p=a(94020),l=a(95798);let u="force-dynamic";async function POST(e){let{user:t}=await (0,p.getServerSession)();try{if(!t)return new l.Z("Unauthenticated");let{receiverId:a}=await e.json(),r=await o.Z.findOne({email:t.email}).select("_id"),s=await n.Z.findOne({participants:{$all:[r,a]}});if(s){let e=await getChatDetails(s);return l.Z.json({data:e},{status:200})}let i=await n.Z.create({participants:[r,a]}),p=await getChatDetails(i);return l.Z.json({data:p},{status:200})}catch(e){return console.log("[GET_CHAT]",e),new l.Z(e)}}async function getChatDetails(e){return await n.Z.aggregate([{$match:{_id:e._id}},{$sort:{updatedAt:-1}},{$lookup:{from:"users",foreignField:"_id",localField:"participants",as:"participants",pipeline:[{$project:{password:0,contacts:0,updatedAt:0,createdAt:0}}]}},{$lookup:{from:"chatmessages",foreignField:"_id",localField:"lastMessage",as:"lastMessage",pipeline:[{$lookup:{from:"users",foreignField:"_id",localField:"sender",as:"sender",pipeline:[{$project:{name:1,avatar:1,email:1}}]}},{$addFields:{sender:{$first:"$sender"}}}]}},{$addFields:{lastMessage:{$first:"$lastMessage"}}}])}let d=new s.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/getChat/route",pathname:"/api/getChat",filename:"route",bundlePath:"app/api/getChat/route"},resolvedPagePath:"/Users/quangnhat/Documents/GitHub/Chatapp-Kathie-s/app/api/getChat/route.js",nextConfigOutput:"standalone",userland:r}),{requestAsyncStorage:c,staticGenerationAsyncStorage:g,serverHooks:m,headerHooks:x,staticGenerationBailout:h}=d,f="/api/getChat/route"},46031:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(11185);let s=new r.Schema({lastMessage:{type:r.Schema.Types.ObjectId,ref:"ChatMessage"},participants:[{type:r.Schema.Types.ObjectId,ref:"User"}],unread:{type:Number,default:0}},{timestamps:!0}),i=r.models.Chat||(0,r.model)("Chat",s),n=i}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[657,449,11,674,107,20,357],()=>__webpack_exec__(88247));module.exports=a})();