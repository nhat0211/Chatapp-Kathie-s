"use strict";exports.id=357,exports.ids=[357],exports.modules={60357:(e,t,r)=>{r.d(t,{Z:()=>d});var i=r(11185);let s=new i.Schema({email:{type:String,unique:[!0,"Email already exists!"],required:[!0,"Email is required!"]},name:{type:String},avatar:{type:String,default:"https://th.bing.com/th/id/OIP.n1C1oxOvYLLyDIavrBFoNQAAAA?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},password:{type:String},contacts:{type:Array}},{timestamps:!0}),a=i.models.User||(0,i.model)("User",s),d=a}};