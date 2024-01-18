(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4771:function(e,r,n){Promise.resolve().then(n.bind(n,8063))},8063:function(e,r,n){"use strict";n.r(r),n.d(r,{AuthForm:function(){return AuthForm}});var l=n(7437),d=n(2749),c=n(2265),f=n(3428),g=n(9790);let h=(0,c.forwardRef)((e,r)=>(0,c.createElement)(g.WV.label,(0,f.Z)({},e,{ref:r,onMouseDown:r=>{var n;null===(n=e.onMouseDown)||void 0===n||n.call(e,r),!r.defaultPrevented&&r.detail>1&&r.preventDefault()}})));var b=n(9213),y=n(3889);let x=(0,b.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),w=c.forwardRef((e,r)=>{let{className:n,...d}=e;return(0,l.jsx)(h,{ref:r,className:(0,y.cn)(x(),n),...d})});w.displayName=h.displayName;var E=n(6130),N=n(7684),_=n(5925),components_Register=()=>{let[e,r]=(0,c.useState)({email:"",password:""}),[n,d]=(0,c.useState)(!1),handleSubmit=async n=>{if(n.preventDefault(),e.email&&e.password){d(!0);try{let n=await fetch("/api/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),l=await n.json();if(l.success){_.toast.success("Registered successfully."),d(!1),r(e=>({...e,email:"",password:""})),setIsLoginPage(!0);return}throw Error(l.message)}catch(e){console.log("[REGISTERING_USER_CLIENT]:",e),_.toast.error(e.message)}finally{d(!1)}}};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("section",{className:" mt-[10vh] bg-primary md:max-w-login mx-auto md:h-auto md:max-h-login px-5 md:side-p rounded-3xl border border-solid border-gray pt-[3.15rem] pb-[2.69rem]",children:[(0,l.jsx)("h1",{className:"font-bold w-4/5 md:w-auto text-lg  leading-normal mb-7",children:"Register"}),(0,l.jsx)("form",{onSubmit:handleSubmit,className:"self-stretch flex flex-col items-start mb-8",children:(0,l.jsxs)("div",{className:"grid gap-2 self-stretch",children:[(0,l.jsxs)("div",{className:"grid gap-1 ",children:[(0,l.jsx)(w,{className:"sr-only",htmlFor:"email",children:"Email"}),(0,l.jsx)(E.I,{id:"email",placeholder:"name@example.com",type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",disabled:n,name:"email",onChange:e=>r(r=>({...r,[e.target.name]:e.target.value}))})]}),(0,l.jsxs)("div",{className:"grid gap-1",children:[(0,l.jsx)(w,{className:"sr-only",htmlFor:"password",children:"Password"}),(0,l.jsx)(E.I,{id:"password",placeholder:"password",type:"password",name:"password",disabled:n,onChange:e=>r(r=>({...r,[e.target.name]:e.target.value}))})]}),(0,l.jsx)(N.z,{disabled:n,variant:"outline",className:"text-accent_1",children:n?"Please Wait...":"Register "})]})})]})})},S=n(4033),k=n(8666),components_Login=()=>{let[e,r]=(0,c.useState)(!1),{socket:n}=(0,k.useSocket)(),[f,g]=(0,c.useState)({email:"",password:""}),h=(0,S.useRouter)(),handleSubmit=async e=>{if(e.preventDefault(),f.email&&f.password){r(!0);try{let e=await (0,d.signIn)("credentials",{email:f.email,password:f.password,redirect:!1});if(e.error){r(!1),_.toast.error("Invalid credentials");return}null==n||n.emit("REGISTER",{email:f.email}),localStorage.setItem("UserEmail",JSON.stringify(f.email)),_.toast.success("Login successfully"),h.replace("/chat")}catch(e){console.log("an error occured while logging ",e),_.toast.error(e.message||"Something went wrong")}finally{r(!1)}}};return(0,l.jsxs)("section",{className:"max-w-md mx-auto bg-primary mt-[10vh] side-p rounded-3xl border border-solid border-gray px-4 pt-10 pb-[2.69rem] ",children:[(0,l.jsx)("h1",{className:"text-text font-bold text-lg leading-normal mb-7",children:"Login"}),(0,l.jsx)("form",{onSubmit:handleSubmit,children:(0,l.jsxs)("div",{className:"grid gap-2",children:[(0,l.jsxs)("div",{className:"grid gap-1",children:[(0,l.jsx)(w,{className:"sr-only",htmlFor:"email",children:"Email"}),(0,l.jsx)(E.I,{id:"email",placeholder:"name@example.com",type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",disabled:e,name:"email",onChange:e=>g(r=>({...r,[e.target.name]:e.target.value}))})]}),(0,l.jsxs)("div",{className:"grid gap-1",children:[(0,l.jsx)(w,{className:"sr-only",htmlFor:"password",children:"Password"}),(0,l.jsx)(E.I,{id:"password",placeholder:"password",type:"password",name:"password",disabled:e,onChange:e=>g(r=>({...r,[e.target.name]:e.target.value}))})]}),(0,l.jsx)(N.z,{disabled:e,variant:"outline",className:"text-accent_1",children:e?"Please Wait...":"Login "})]})})]})};let AuthForm=()=>{let[e,r]=(0,c.useState)("LOGIN"),n=(0,d.useSession)(),f=(0,S.useRouter)(),g=(0,c.useCallback)(()=>{"LOGIN"===e?r("REGISTER"):r("LOGIN")},[e]);return(0,c.useEffect)(()=>{"authenticated"===n.status&&f.push("/chat")},[n.status,f]),(0,l.jsxs)(l.Fragment,{children:["LOGIN"===e?(0,l.jsx)(components_Login,{}):(0,l.jsx)(components_Register,{}),(0,l.jsxs)("p",{className:"text-sm text-center leading-normal text-l-gray mt-8",children:["LOGIN"===e?"Don`t have an account yet?":"Already a member?",(0,l.jsx)("button",{onClick:g,className:"text-orange ml-2",children:"LOGIN"===e?"register":"login"})]})]})}},7684:function(e,r,n){"use strict";n.d(r,{z:function(){return b}});var l=n(7437),d=n(2265),c=n(7256),f=n(9213),g=n(3889);let h=(0,f.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),b=d.forwardRef((e,r)=>{let{className:n,variant:d,size:f,asChild:b=!1,...y}=e,x=b?c.g7:"button";return(0,l.jsx)(x,{className:(0,g.cn)(h({variant:d,size:f,className:n})),ref:r,...y})});b.displayName="Button"},6130:function(e,r,n){"use strict";n.d(r,{I:function(){return f}});var l=n(7437),d=n(2265),c=n(3889);let f=d.forwardRef((e,r)=>{let{className:n,type:d,...f}=e;return(0,l.jsx)("input",{type:d,className:(0,c.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:r,...f})});f.displayName="Input"},8666:function(e,r,n){"use strict";n.r(r),n.d(r,{SocketProvider:function(){return SocketProvider},useSocket:function(){return useSocket}});var l=n(7437),d=n(7430),c=n(2749),f=n(2265),g=n(3388);let h=(0,f.createContext)({socket:null,isConnected:!1}),useSocket=()=>(0,f.useContext)(h),SocketProvider=e=>{let{children:r}=e,[n,b]=(0,f.useState)(null),[y,x]=(0,f.useState)(!1),{data:w}=(0,c.useSession)(),{remove:E,set:N}=(0,d.Z)();return(0,f.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("UserEmail")),r=new g.io({path:"/api/socket/io"});return r.on("connect",()=>{e&&(console.log("socket is registered with ",e),r.emit("REGISTER",{email:e})),x(!0)}),r.on("disconnect",()=>{console.log("client socket disconnected."),x(!1)}),r.on("ACTIVE_USERS",e=>{N(e)}),r.on("ACTIVE_USERS:REMOVE",e=>{console.log("remove a active user ",e),E(e)}),b(r),()=>{r.disconnect()}},[]),(0,l.jsx)(h.Provider,{value:{socket:n,isConnected:y},children:r})}},7430:function(e,r,n){"use strict";var l=n(4660);let d=(0,l.Ue)(e=>({members:[],add:r=>e(e=>({members:[...e.members,r]})),remove:r=>e(e=>({members:e.members.filter(e=>e!==r)})),set:r=>e({members:r})}));r.Z=d},3889:function(e,r,n){"use strict";n.d(r,{cn:function(){return cn}});var l=n(7042),d=n(4769);function cn(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return(0,d.m6)((0,l.W)(r))}},4033:function(e,r,n){e.exports=n(94)},9790:function(e,r,n){"use strict";n.d(r,{WV:function(){return g},jH:function(){return $8927f6f2acc4f386$export$6d1a0317bde7de7f}});var l=n(3428),d=n(2265),c=n(4887),f=n(7256);let g=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let n=(0,d.forwardRef)((e,n)=>{let{asChild:c,...g}=e,h=c?f.g7:r;return(0,d.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,d.createElement)(h,(0,l.Z)({},g,{ref:n}))});return n.displayName=`Primitive.${r}`,{...e,[r]:n}},{});function $8927f6f2acc4f386$export$6d1a0317bde7de7f(e,r){e&&(0,c.flushSync)(()=>e.dispatchEvent(r))}},5925:function(e,r,n){"use strict";let l,d;n.r(r),n.d(r,{CheckmarkIcon:function(){return H},ErrorIcon:function(){return L},LoaderIcon:function(){return F},ToastBar:function(){return et},ToastIcon:function(){return M},Toaster:function(){return Ie},default:function(){return ea},resolveValue:function(){return T},toast:function(){return dist_n},useToaster:function(){return D},useToasterStore:function(){return I}});var c=n(2265);let f={data:""},t=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||f,g=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,b=/\n+/g,o=(e,r)=>{let n="",l="",d="";for(let c in e){let f=e[c];"@"==c[0]?"i"==c[1]?n=c+" "+f+";":l+="f"==c[1]?o(f,c):c+"{"+o(f,"k"==c[1]?"":r)+"}":"object"==typeof f?l+=o(f,r?r.replace(/([^,])+/g,e=>c.replace(/(^:.*)|([^,])+/g,r=>/&/.test(r)?r.replace(/&/g,e):e?e+" "+r:r)):c):null!=f&&(c=/^--/.test(c)?c:c.replace(/[A-Z]/g,"-$&").toLowerCase(),d+=o.p?o.p(c,f):c+":"+f+";")}return n+(r&&d?r+"{"+d+"}":d)+l},y={},s=e=>{if("object"==typeof e){let r="";for(let n in e)r+=n+s(e[n]);return r}return e},i=(e,r,n,l,d)=>{var c;let f=s(e),x=y[f]||(y[f]=(e=>{let r=0,n=11;for(;r<e.length;)n=101*n+e.charCodeAt(r++)>>>0;return"go"+n})(f));if(!y[x]){let r=f!==e?e:(e=>{let r,n,l=[{}];for(;r=g.exec(e.replace(h,""));)r[4]?l.shift():r[3]?(n=r[3].replace(b," ").trim(),l.unshift(l[0][n]=l[0][n]||{})):l[0][r[1]]=r[2].replace(b," ").trim();return l[0]})(e);y[x]=o(d?{["@keyframes "+x]:r}:r,n?"":"."+x)}let w=n&&y.g?y.g:null;return n&&(y.g=y[x]),c=y[x],w?r.data=r.data.replace(w,c):-1===r.data.indexOf(c)&&(r.data=l?c+r.data:r.data+c),x},p=(e,r,n)=>e.reduce((e,l,d)=>{let c=r[d];if(c&&c.call){let e=c(n),r=e&&e.props&&e.props.className||/^go/.test(e)&&e;c=r?"."+r:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==c?"":c)},"");function u(e){let r=this||{},n=e.call?e(r.p):e;return i(n.unshift?n.raw?p(n,[].slice.call(arguments,1),r.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(r.p):n),{}):n,t(r.target),r.g,r.o,r.k)}u.bind({g:1});let x,w,E,N=u.bind({k:1});function m(e,r,n,l){o.p=r,x=e,w=n,E=l}function j(e,r){let n=this||{};return function(){let l=arguments;function a(d,c){let f=Object.assign({},d),g=f.className||a.className;n.p=Object.assign({theme:w&&w()},f),n.o=/ *go\d+/.test(g),f.className=u.apply(n,l)+(g?" "+g:""),r&&(f.ref=c);let h=e;return e[0]&&(h=f.as||e,delete f.as),E&&h[0]&&E(f),x(h,f)}return r?r(a):a}}var W=e=>"function"==typeof e,T=(e,r)=>W(e)?e(r):e,_=(l=0,()=>(++l).toString()),dist_b=()=>{if(void 0===d&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");d=!e||e.matches}return d},S=new Map,$=e=>{if(S.has(e))return;let r=setTimeout(()=>{S.delete(e),dist_u({type:4,toastId:e})},1e3);S.set(e,r)},J=e=>{let r=S.get(e);r&&clearTimeout(r)},v=(e,r)=>{switch(r.type){case 0:return{...e,toasts:[r.toast,...e.toasts].slice(0,20)};case 1:return r.toast.id&&J(r.toast.id),{...e,toasts:e.toasts.map(e=>e.id===r.toast.id?{...e,...r.toast}:e)};case 2:let{toast:n}=r;return e.toasts.find(e=>e.id===n.id)?v(e,{type:1,toast:n}):v(e,{type:0,toast:n});case 3:let{toastId:l}=r;return l?$(l):e.toasts.forEach(e=>{$(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===l||void 0===l?{...e,visible:!1}:e)};case 4:return void 0===r.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==r.toastId)};case 5:return{...e,pausedAt:r.time};case 6:let d=r.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+d}))}}},k=[],C={toasts:[],pausedAt:void 0},dist_u=e=>{C=v(C,e),k.forEach(e=>{e(C)})},R={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[r,n]=(0,c.useState)(C);(0,c.useEffect)(()=>(k.push(n),()=>{let e=k.indexOf(n);e>-1&&k.splice(e,1)}),[r]);let l=r.toasts.map(r=>{var n,l;return{...e,...e[r.type],...r,duration:r.duration||(null==(n=e[r.type])?void 0:n.duration)||(null==e?void 0:e.duration)||R[r.type],style:{...e.style,...null==(l=e[r.type])?void 0:l.style,...r.style}}});return{...r,toasts:l}},G=(e,r="blank",n)=>({createdAt:Date.now(),visible:!0,type:r,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||_()}),dist_h=e=>(r,n)=>{let l=G(r,e,n);return dist_u({type:2,toast:l}),l.id},dist_n=(e,r)=>dist_h("blank")(e,r);dist_n.error=dist_h("error"),dist_n.success=dist_h("success"),dist_n.loading=dist_h("loading"),dist_n.custom=dist_h("custom"),dist_n.dismiss=e=>{dist_u({type:3,toastId:e})},dist_n.remove=e=>dist_u({type:4,toastId:e}),dist_n.promise=(e,r,n)=>{let l=dist_n.loading(r.loading,{...n,...null==n?void 0:n.loading});return e.then(e=>(dist_n.success(T(r.success,e),{id:l,...n,...null==n?void 0:n.success}),e)).catch(e=>{dist_n.error(T(r.error,e),{id:l,...n,...null==n?void 0:n.error})}),e};var Z=(e,r)=>{dist_u({type:1,toast:{id:e,height:r}})},ee=()=>{dist_u({type:5,time:Date.now()})},D=e=>{let{toasts:r,pausedAt:n}=I(e);(0,c.useEffect)(()=>{if(n)return;let e=Date.now(),l=r.map(r=>{if(r.duration===1/0)return;let n=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(n<0){r.visible&&dist_n.dismiss(r.id);return}return setTimeout(()=>dist_n.dismiss(r.id),n)});return()=>{l.forEach(e=>e&&clearTimeout(e))}},[r,n]);let l=(0,c.useCallback)(()=>{n&&dist_u({type:6,time:Date.now()})},[n]),d=(0,c.useCallback)((e,n)=>{let{reverseOrder:l=!1,gutter:d=8,defaultPosition:c}=n||{},f=r.filter(r=>(r.position||c)===(e.position||c)&&r.height),g=f.findIndex(r=>r.id===e.id),h=f.filter((e,r)=>r<g&&e.visible).length;return f.filter(e=>e.visible).slice(...l?[h+1]:[0,h]).reduce((e,r)=>e+(r.height||0)+d,0)},[r]);return{toasts:r,handlers:{updateHeight:Z,startPause:ee,endPause:l,calculateOffset:d}}},O=N`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,P=N`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,A=N`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,L=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${O} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${P} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${A} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,z=N`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,F=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${z} 1s linear infinite;
`,U=N`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,V=N`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,H=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${U} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${V} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=j("div")`
  position: absolute;
`,q=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Y=N`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,K=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Y} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:r,type:n,iconTheme:l}=e;return void 0!==r?"string"==typeof r?c.createElement(K,null,r):r:"blank"===n?null:c.createElement(q,null,c.createElement(F,{...l}),"loading"!==n&&c.createElement(B,null,"error"===n?c.createElement(L,{...l}):c.createElement(H,{...l})))},ye=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,Q=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,X=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,r)=>{let n=e.includes("top")?1:-1,[l,d]=dist_b()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ye(n),ge(n)];return{animation:r?`${N(l)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${N(d)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},et=c.memo(({toast:e,position:r,style:n,children:l})=>{let d=e.height?Ae(e.position||r||"top-center",e.visible):{opacity:0},f=c.createElement(M,{toast:e}),g=c.createElement(X,{...e.ariaProps},T(e.message,e));return c.createElement(Q,{className:e.className,style:{...d,...n,...e.style}},"function"==typeof l?l({icon:f,message:g}):c.createElement(c.Fragment,null,f,g))});m(c.createElement);var Ee=({id:e,className:r,style:n,onHeightUpdate:l,children:d})=>{let f=c.useCallback(r=>{if(r){let i=()=>{l(e,r.getBoundingClientRect().height)};i(),new MutationObserver(i).observe(r,{subtree:!0,childList:!0,characterData:!0})}},[e,l]);return c.createElement("div",{ref:f,className:r,style:n},d)},Re=(e,r)=>{let n=e.includes("top"),l=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:dist_b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${r*(n?1:-1)}px)`,...n?{top:0}:{bottom:0},...l}},er=u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ie=({reverseOrder:e,position:r="top-center",toastOptions:n,gutter:l,children:d,containerStyle:f,containerClassName:g})=>{let{toasts:h,handlers:b}=D(n);return c.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...f},className:g,onMouseEnter:b.startPause,onMouseLeave:b.endPause},h.map(n=>{let f=n.position||r,g=Re(f,b.calculateOffset(n,{reverseOrder:e,gutter:l,defaultPosition:r}));return c.createElement(Ee,{id:n.id,key:n.id,onHeightUpdate:b.updateHeight,className:n.visible?er:"",style:g},"custom"===n.type?T(n.message,n):d?d(n):c.createElement(et,{toast:n,position:f}))}))},ea=dist_n}},function(e){e.O(0,[294,894,7,971,472,744],function(){return e(e.s=4771)}),_N_E=e.O()}]);