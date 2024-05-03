"use strict";(()=>{var e={};e.id=912,e.ids=[912],e.modules={58802:e=>{e.exports=require("bcrypt")},11185:e=>{e.exports=require("mongoose")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},63477:e=>{e.exports=require("querystring")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},11068:(e,r,t)=>{t.r(r),t.d(r,{headerHooks:()=>T,originalPathname:()=>b,requestAsyncStorage:()=>_,routeModule:()=>f,serverHooks:()=>E,staticGenerationAsyncStorage:()=>q,staticGenerationBailout:()=>y});var n={};t.r(n),t.d(n,{GET:()=>v,POST:()=>v,dynamic:()=>h});var o=t(10884),s=t(16132),a=t(40674),i=t(49375),c=t(90596),u=t(2783),p=t(73066),l=t(39448),d=t(62294),x=t(60357);t(77906);var m=t(58802),g=t.n(m);let h="force-dynamic",v=(0,a.default)({providers:[(0,l.Z)({name:"credentials",credentials:{},async authorize(e){let{email:r,password:t}=e;try{await (0,d.P)();let e=await x.Z.findOne({email:r});if(!e)return null;let n=await g().compare(t,e.password);if(!n)return null;return e}catch(e){console.log("error from authorize",e)}}}),(0,i.Z)({clientId:process.env.GOOGLE_ID,clientSecret:process.env.GOOGLE_CLIENT_SECRET}),(0,c.Z)({clientId:process.env.GITHUB_ID,clientSecret:process.env.GITHUB_SECRET}),(0,u.Z)({clientId:process.env.FACEBOOK_ID,clientSecret:process.env.FACEBOOK_SECRET}),(0,p.ZP)({clientId:process.env.TWITTER_ID,clientSecret:process.env.TWITTER_SECRET})],pages:{signIn:"/"},callbacks:{async session({session:e}){try{if(e.user){let r=await x.Z.findOne({email:e.user.email});r&&(e.user.sub=r._id.toString())}return e}catch(e){throw console.log("an errro occrued in session ",e),Error(e.message)}},async signIn({profile:e,user:r,account:t}){if("github"===t.provider||"google"===t.provider||"facebook"===t.provider||"twitter"===t.provider)try{await (0,d.P)();let r=e.email,t=await x.Z.findOne({email:r});if(!t){let r=g().hash(e.email.split("@")[0],10);await x.Z.create({email:e.email,name:e.name,image:e.image,password:r})}return t._id}catch(e){console.error("Error checking if user exists: ",e.message)}return!0}},secret:process.env.NEXTAUTH_SECRET}),f=new o.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/auth/[...nextauth]/route",pathname:"/api/auth/[...nextauth]",filename:"route",bundlePath:"app/api/auth/[...nextauth]/route"},resolvedPagePath:"/Users/quangnhat/Documents/GitHub/Chatapp-Kathie-s/app/api/auth/[...nextauth]/route.js",nextConfigOutput:"standalone",userland:n}),{requestAsyncStorage:_,staticGenerationAsyncStorage:q,serverHooks:E,headerHooks:T,staticGenerationBailout:y}=f,b="/api/auth/[...nextauth]/route"},62294:(e,r,t)=>{t.d(r,{P:()=>connectToDB});var n=t(11185),o=t.n(n);let s=!1;async function connectToDB(){if(s){console.log("db connected from database config");return}try{await o().connect(process.env.MONGODB_URI),s=!0,console.log("db connected from database config")}catch(e){console.log("error occured "+e)}}}};var r=require("../../../../webpack-runtime.js");r.C(e);var __webpack_exec__=e=>r(r.s=e),t=r.X(0,[657,449,11,674,242,357],()=>__webpack_exec__(11068));module.exports=t})();