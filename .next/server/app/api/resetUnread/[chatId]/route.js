"use strict";(()=>{var e={};e.id=183,e.ids=[183],e.modules={11185:e=>{e.exports=require("mongoose")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},12228:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>P,originalPathname:()=>h,requestAsyncStorage:()=>u,routeModule:()=>p,serverHooks:()=>l,staticGenerationAsyncStorage:()=>c,staticGenerationBailout:()=>m});var r={};a.r(r),a.d(r,{POST:()=>POST,dynamic:()=>d});var n=a(10884),s=a(16132),o=a(46031),i=a(95798);let d="force-dynamic";async function POST(e,{params:t}){try{let{chatId:e}=t;if(!e)return new i.Z("Invalid");let a=await o.Z.findByIdAndUpdate(e,{$set:{unread:0}},{new:!0});if(!a)return new i.Z("Not Found");let r=await o.Z.findById(a._id).populate({path:"participants",select:"name avatar email _id"}).populate({path:"lastMessage",populate:{path:"sender",select:"name avatar email _id"}});return i.Z.json({chat:r},{status:200})}catch(e){return console.log("[RESET_UNREAD]",e),i.Z.json({error:"Internal server error"},{status:500})}}let p=new n.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/resetUnread/[chatId]/route",pathname:"/api/resetUnread/[chatId]",filename:"route",bundlePath:"app/api/resetUnread/[chatId]/route"},resolvedPagePath:"/Users/quangnhat/Documents/GitHub/Chatapp-Kathie-s/app/api/resetUnread/[chatId]/route.js",nextConfigOutput:"standalone",userland:r}),{requestAsyncStorage:u,staticGenerationAsyncStorage:c,serverHooks:l,headerHooks:P,staticGenerationBailout:m}=p,h="/api/resetUnread/[chatId]/route"},46031:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(11185);let n=new r.Schema({lastMessage:{type:r.Schema.Types.ObjectId,ref:"ChatMessage"},participants:[{type:r.Schema.Types.ObjectId,ref:"User"}],unread:{type:Number,default:0}},{timestamps:!0}),s=r.models.Chat||(0,r.model)("Chat",n),o=s},16132:(e,t)=>{var a;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return a}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(a||(a={}))}};var t=require("../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[449,107],()=>__webpack_exec__(12228));module.exports=a})();