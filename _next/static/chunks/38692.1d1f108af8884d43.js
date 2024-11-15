"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38692],{4646:function(e,t,i){i.d(t,{n:function(){return n}});function n(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}},38692:function(e,t,i){i.d(t,{PaperWalletConnector:function(){return h}});var n=i(16074),r=i(42009),o=i(67885),s=i(19485),a=i(79311),l=i(27021),d=i(4646);i(54146);var c=new WeakMap;class h extends l.C{constructor(e){super(),(0,r._)(this,"id",a.w.paper),(0,r._)(this,"name","Paper Wallet"),(0,r._)(this,"ready",!0),(0,r._)(this,"user",null),(0,n._)(this,c,{writable:!0,value:void 0}),(0,r._)(this,"onAccountsChanged",async e=>{0===e.length?await this.onDisconnect():this.emit("change",{account:s.getAddress(e[0])})}),(0,r._)(this,"onChainChanged",e=>{let t=(0,d.n)(e),i=-1===this.options.chains.findIndex(e=>e.chainId===t);this.emit("change",{chain:{id:t,unsupported:i}})}),(0,r._)(this,"onDisconnect",async()=>{this.emit("disconnect")}),this.options=e}getPaperSDK(){return this.paper||(this.paper=new Promise(async(e,t)=>{let n=this.options.advancedOptions?.recoveryShareManagement;try{let{PaperEmbeddedWalletSdk:t}=await Promise.resolve().then(i.bind(i,67885)),r={AWS_MANAGED:o.pw.AWS_MANAGED,USER_MANAGED:o.pw.USER_MANAGED},s=n?r[n]:void 0;e(new t({advancedOptions:{recoveryShareManagement:s},clientId:this.options.clientId,chain:"Ethereum",styles:this.options.styles}))}catch(e){t(e)}})),this.paper}async connect(e){let t=await this.getPaperSDK();if(!t)throw Error("Paper SDK not initialized");let i=await t.getUser();switch(i.status){case o.J0.LOGGED_OUT:{let i;if(e?.googleLogin){let n=e.googleLogin;i=await t.auth.loginWithGoogle("object"==typeof n?n:void 0)}else i=e?.email&&e?.otp?await t.auth.verifyPaperEmailLoginOtp({email:e.email,otp:e.otp,recoveryCode:e.recoveryCode}):e?.email?await t.auth.loginWithPaperEmailOtp({email:e.email}):await t.auth.loginWithPaperModal();this.user=i.user;break}case o.J0.LOGGED_IN_WALLET_INITIALIZED:"object"==typeof e?.googleLogin&&e.googleLogin.closeOpenedWindow&&e.googleLogin.openedWindow&&e.googleLogin.closeOpenedWindow(e.googleLogin.openedWindow),this.user=i}if(!this.user)throw Error("Error connecting User");return e?.chainId&&this.switchChain(e.chainId),this.setupListeners(),this.getAddress()}async disconnect(){let e=await this.paper;await e?.auth.logout(),(0,n.a)(this,c,void 0),this.user=null}async getAddress(){return(await this.getSigner()).getAddress()}async isConnected(){try{return!!await this.getAddress()}catch(e){return!1}}async getProvider(){let e=await this.getSigner();if(!e.provider)throw Error("Provider not found");return e.provider}async getSigner(){if((0,n.b)(this,c))return(0,n.b)(this,c);if(!this.user){let e=await this.getPaperSDK(),t=await e.getUser();t.status===o.J0.LOGGED_IN_WALLET_INITIALIZED&&(this.user=t)}let e=await this.user?.wallet.getEthersJsSigner({rpcEndpoint:this.options.chain.rpc[0]||""});if(!e)throw Error("Signer not found");return(0,n.a)(this,c,e),e}async isAuthorized(){return!1}async switchChain(e){let t=this.options.chains.find(t=>t.chainId===e);if(!t)throw Error("Chain not configured");await this.user?.wallet.setChain({chain:"Ethereum"}),(0,n.a)(this,c,await this.user?.wallet.getEthersJsSigner({rpcEndpoint:t.rpc[0]||""})),this.emit("change",{chain:{id:e,unsupported:!1}})}async setupListeners(){let e=await this.getProvider();e.on&&(e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect))}updateChains(e){this.options.chains=e}async getEmail(){if(await this.getProvider(),!this.user)throw Error("No user found, Paper Wallet is not connected");return this.user.authDetails.email}}},67885:function(e,t,i){let n,r,o,s;i.d(t,{PaperEmbeddedWalletSdk:function(){return B},pw:function(){return M},J0:function(){return N}});var a={Ethereum:"https://ethereum.rpc.thirdweb.com",Goerli:"https://goerli.rpc.thirdweb.com",Mumbai:"https://mumbai.rpc.thirdweb.com",Polygon:"https://polygon.rpc.thirdweb.com",Avalanche:"https://avalanche.rpc.thirdweb.com",Optimism:"https://optimism.rpc.thirdweb.com",OptimismGoerli:"https://optimism-goerli.rpc.thirdweb.com",BSC:"https://binance.rpc.thirdweb.com",BSCTestnet:"https://binance-testnet.rpc.thirdweb.com",ArbitrumOne:"https://arbitrum.rpc.thirdweb.com",ArbitrumGoerli:"https://arbitrum-goerli.rpc.thirdweb.com",Fantom:"https://fantom.rpc.thirdweb.com",FantomTestnet:"https://fantom-testnet.rpc.thirdweb.com",Sepolia:"https://sepolia.rpc.thirdweb.com",AvalancheFuji:"https://avalanche-fuji.rpc.thirdweb.com"},l=()=>"undefined"!=typeof window&&"true"===window.localStorage.getItem("IS_PAPER_DEV"),d=()=>"undefined"!=typeof window&&window.location.origin.includes("paper.xyz"),c=()=>"undefined"!=typeof window&&window.location.origin.includes("thirdweb.com"),h=()=>{var e;return l()?null!=(e=window.localStorage.getItem("PAPER_DEV_URL"))?e:"http://localhost:3000":d()||c()?window.location.origin:"https://withpaper.com"},u=i(27349),g=i(48088),p=i(6881),m=Object.defineProperty,w=Object.defineProperties,I=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,L=(e,t,i)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,E=(e,t)=>{for(var i in t||(t={}))y.call(t,i)&&L(e,i,t[i]);if(v)for(var i of v(t))f.call(t,i)&&L(e,i,t[i]);return e},A=(e,t)=>w(e,I(t)),S=(e,t,i)=>new Promise((n,r)=>{var o=e=>{try{a(i.next(e))}catch(e){r(e)}},s=e=>{try{a(i.throw(e))}catch(e){r(e)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,s);a((i=i.apply(e,t)).next())}),W="/sdk/2022-08-12/embedded-wallet",O=e=>`paperEwsWalletUserId-${e}`,_=e=>`walletToken-${e}`,D=(e,t)=>`a-${e}-${t}`,M=((n=M||{}).USER_MANAGED="USER_MANAGED",n.AWS_MANAGED="AWS_MANAGED",n),C=((r=C||{}).PAPER_EMAIL_OTP="PaperEmailOTP",r.GOOGLE="Google",r.TWITTER="Twitter",r.COGNITO="Cognito",r.AUTH0="Auth0",r.CUSTOM_JWT="CustomJWT",r),N=((o=N||{}).LOGGED_OUT="Logged Out",o.LOGGED_IN_WALLET_INITIALIZED="Logged In, Wallet Initialized",o),P=((s=P||{}).LOGGED_OUT="Logged Out",s.LOGGED_IN_WALLET_UNINITIALIZED="Logged In, Wallet Uninitialized",s.LOGGED_IN_NEW_DEVICE="Logged In, New Device",s.LOGGED_IN_WALLET_INITIALIZED="Logged In, Wallet Initialized",s),b=new Map,T=class{constructor({clientId:e}){this.isSupported="undefined"!=typeof window&&!!window.localStorage,this.clientId=e}getItem(e){return S(this,null,function*(){var t;return this.isSupported?window.localStorage.getItem(e):null!=(t=b.get(e))?t:null})}setItem(e,t){return S(this,null,function*(){if(this.isSupported)return window.localStorage.setItem(e,t);b.set(e,t)})}removeItem(e){return S(this,null,function*(){let t=yield this.getItem(e);return!!this.isSupported&&!!t&&(window.localStorage.removeItem(e),!0)})}saveAuthCookie(e){return S(this,null,function*(){yield this.setItem(_(this.clientId),e)})}getAuthCookie(){return S(this,null,function*(){return this.getItem(_(this.clientId))})}removeAuthCookie(){return S(this,null,function*(){return this.removeItem(_(this.clientId))})}saveDeviceShare(e,t){return S(this,null,function*(){yield this.saveWalletUserId(t),yield this.setItem(D(this.clientId,t),e)})}getDeviceShare(){return S(this,null,function*(){let e=yield this.getWalletUserId();return e?this.getItem(D(this.clientId,e)):null})}removeDeviceShare(){return S(this,null,function*(){let e=yield this.getWalletUserId();return!!e&&this.removeItem(D(this.clientId,e))})}getWalletUserId(){return S(this,null,function*(){return this.getItem(O(this.clientId))})}saveWalletUserId(e){return S(this,null,function*(){yield this.setItem(O(this.clientId),e)})}removeWalletUserId(){return S(this,null,function*(){return this.removeItem(O(this.clientId))})}};function G(e){return new Promise(t=>{setTimeout(t,1e3*e)})}var U={height:"100%",width:"100%",border:"none",backgroundColor:"transparent",colorScheme:"light",position:"fixed",top:"0px",right:"0px",zIndex:"2147483646",display:"none"},R=new Map,k=class{constructor({link:e,iframeId:t,container:i=document.body,iframeStyles:n,onIframeInitialize:r}){this.POLLING_INTERVAL_SECONDS=1.4,this.POST_LOAD_BUFFER_SECONDS=1;let o=document.getElementById(t),s=new URL(e),a="1.2.5";if(!a)throw Error("Missing SDK_VERSION env var");if(s.searchParams.set("sdkVersion",a),!o||o.src!=s.href){if(!o){o=document.createElement("iframe");let e=E(E({},U),n);Object.assign(o.style,e),o.setAttribute("id",t),o.setAttribute("fetchpriority","high"),i.appendChild(o)}o.src=s.href,o.setAttribute("data-version",a),o.onload=this.onIframeLoadHandler(o,this.POST_LOAD_BUFFER_SECONDS,r)}this.iframe=o}onIframeLoadedInitVariables(){return S(this,null,function*(){return{}})}onIframeLoadHandler(e,t,i){return()=>S(this,null,function*(){yield new Promise((n,r)=>S(this,null,function*(){var o;let s=new MessageChannel;s.port1.onmessage=t=>{let{data:o}=t;return s.port1.close(),o.success?(R.set(e.src,!0),i&&i(),n(!0)):r(Error(o.error))},yield G(t),null==(o=null==e?void 0:e.contentWindow)||o.postMessage({eventType:"initIframe",data:yield this.onIframeLoadedInitVariables()},`${h()}${W}`,[s.port2])}))})}call(e){return S(this,arguments,function*({procedureName:e,params:t,showIframe:i=!1,injectRecoveryCode:n={isInjectRecoveryCode:!1}}){for(;!R.get(this.iframe.src);)yield G(this.POLLING_INTERVAL_SECONDS);return i&&(this.iframe.style.display="block",yield G(.005)),new Promise((r,o)=>{var s;if(n.isInjectRecoveryCode){let e=t=>S(this,null,function*(){var i,r;if(t.origin!==h()||"paper_getRecoveryCode"!==t.data.type||"string"!=typeof t.data.userWalletId)return;let o=yield null==(i=n.getRecoveryCode)?void 0:i.call(n,t.data.userWalletId);null==(r=this.iframe.contentWindow)||r.postMessage({type:"paper_getRecoveryCode_response",recoveryCode:o},h()),window.removeEventListener("message",e)});window.addEventListener("message",e)}let a=new MessageChannel;a.port1.onmessage=e=>S(this,null,function*(){let{data:t}=e;a.port1.close(),i&&(yield G(.1),this.iframe.style.display="none"),t.success?r(t.data):o(Error(t.error))}),null==(s=this.iframe.contentWindow)||s.postMessage({eventType:e,data:t},`${h()}${W}`,[a.port2])})})}destroy(){R.delete(this.iframe.src)}},j=class extends k{constructor({clientId:e,customizationOptions:t}){super({iframeId:q,link:function({clientId:e,path:t,queryParams:i}){var n;let r=new URL(t,h());if(i)for(let e of Object.keys(i))r.searchParams.set(e,(null==(n=i[e])?void 0:n.toString())||"");return r.searchParams.set("clientId",e),r}({clientId:e,path:W,queryParams:t}).href,container:document.body}),this.clientId=e}onIframeLoadedInitVariables(){return S(this,null,function*(){let e=new T({clientId:this.clientId});return{authCookie:yield e.getAuthCookie(),deviceShareStored:yield e.getDeviceShare(),walletUserId:yield e.getWalletUserId(),clientId:this.clientId}})}},q="paper-embedded-wallet-iframe",Q=class{constructor({querier:e,preLogin:t,postLogin:i,clientId:n}){this.LoginQuerier=e,this.preLogin=t,this.postLogin=i,this.clientId=n}sendPaperEmailLoginOtp(e){return S(this,arguments,function*({email:e,recoveryShareManagement:t}){yield this.preLogin();let{isNewUser:i,isNewDevice:n,recoveryShareManagement:r}=yield this.LoginQuerier.call({procedureName:"sendPaperEmailLoginOtp",params:{email:e,recoveryShareManagement:t}});return{isNewUser:i,isNewDevice:n,recoveryShareManagement:r}})}},z=class extends Q{constructor(){super(...arguments),this.closeWindow=({isWindowOpenedByFn:e,win:t,closeOpenedWindow:i})=>{e?null==t||t.close():t&&i?i(t):t&&t.close()}}loginWithPaperModal(){return S(this,null,function*(){yield this.preLogin();let e=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{recoveryShareManagement:"AWS_MANAGED"},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(e)})}getGoogleLoginUrl(){return S(this,null,function*(){return yield this.LoginQuerier.call({procedureName:"getHeadlessGoogleLoginLink",params:void 0})})}loginWithGoogle(e){return S(this,null,function*(){yield this.preLogin();let t=null==e?void 0:e.openedWindow,i=!1;if(t||(t=window.open("","Login","width=350, height=500"),i=!0),!t)throw Error("Something went wrong opening pop-up");yield this.preLogin();let{loginLink:n}=yield this.getGoogleLoginUrl();t.location.href=n;let r=yield new Promise((n,r)=>{let o=window.setInterval(()=>S(this,null,function*(){t&&t.closed&&(clearInterval(o),window.removeEventListener("message",s),r(Error("User closed login window")))}),1e3),s=a=>S(this,null,function*(){if(a.origin===h()){if("object"!=typeof a.data){r(Error("Invalid event data"));return}switch(a.data.eventType){case"userLoginSuccess":window.removeEventListener("message",s),clearInterval(o),this.closeWindow({isWindowOpenedByFn:i,win:t,closeOpenedWindow:null==e?void 0:e.closeOpenedWindow}),a.data.authResult&&n(a.data.authResult);break;case"userLoginFailed":window.removeEventListener("message",s),clearInterval(o),this.closeWindow({isWindowOpenedByFn:i,win:t,closeOpenedWindow:null==e?void 0:e.closeOpenedWindow}),r(Error(a.data.error));break;case"injectDeveloperClientId":null==t||t.postMessage({eventType:"injectDeveloperClientIdResult",developerClientId:this.clientId},h())}}});window.addEventListener("message",s)});return this.postLogin({storedToken:A(E({},r.storedToken),{shouldStoreCookieString:!0}),walletDetails:A(E({},r.walletDetails),{isIframeStorageEnabled:!1})})})}loginWithPaperEmailOtp(e){return S(this,arguments,function*({email:e}){yield this.preLogin();let t=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{email:e,recoveryShareManagement:"AWS_MANAGED"},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(t)})}verifyPaperEmailLoginOtp(e){return S(this,arguments,function*({email:e,otp:t}){let i=yield this.LoginQuerier.call({procedureName:"verifyPaperEmailLoginOtp",params:{email:e,otp:t,recoveryShareManagement:"AWS_MANAGED"},injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(i)})}},F=class extends Q{loginWithPaperModal(e){return S(this,null,function*(){yield this.preLogin();let t=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:void 0,showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0,getRecoveryCode:null==e?void 0:e.getRecoveryCode}});return this.postLogin(t)})}loginWithGoogle(e){return S(this,null,function*(){throw Error("loginWithGoogle is not yet supported in the RecoveryShareManagement.USER_MANAGED flow. Please use RecoveryShareManagement.AWS_MANAGED instead.")})}loginWithPaperEmailOtp(e){return S(this,arguments,function*({email:e,recoveryCode:t}){yield this.preLogin();let i=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{email:e,recoveryCode:t},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(i)})}verifyPaperEmailLoginOtp(e){return S(this,arguments,function*({email:e,otp:t,recoveryCode:i}){let n=yield this.LoginQuerier.call({procedureName:"verifyPaperEmailLoginOtp",params:{email:e,otp:t,recoveryCode:i},injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(n)})}},x=class{constructor({clientId:e,advancedOptions:t,querier:i,onAuthSuccess:n}){var r;this.clientId=e,this.advancedOptions={recoveryShareManagement:null!=(r=null==t?void 0:t.recoveryShareManagement)?r:"AWS_MANAGED"},this.AuthQuerier=i,this.localStorage=new T({clientId:e}),this.onAuthSuccess=n,this.userManagedLogin=new F({postLogin:e=>S(this,null,function*(){return this.postLogin(e)}),preLogin:()=>S(this,null,function*(){yield this.preLogin()}),querier:i,clientId:e}),this.awsManagedLogin=new z({postLogin:e=>S(this,null,function*(){return this.postLogin(e)}),preLogin:()=>S(this,null,function*(){yield this.preLogin()}),querier:i,clientId:e})}preLogin(){return S(this,null,function*(){yield this.logout()})}postLogin(e){return S(this,arguments,function*({storedToken:e,walletDetails:t}){return e.shouldStoreCookieString&&(yield this.localStorage.saveAuthCookie(e.cookieString)),yield this.onAuthSuccess({storedToken:e,walletDetails:t})})}loginWithJwtAuth(e){return S(this,arguments,function*({token:e,authProvider:t,recoveryCode:i}){yield this.preLogin();let n=yield this.AuthQuerier.call({procedureName:"loginWithJwtAuthCallback",params:{token:e,authProvider:t,recoveryCode:i}});return this.postLogin(n)})}loginWithPaperModal(e){return S(this,null,function*(){return yield this.preLogin(),"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.loginWithPaperModal():this.userManagedLogin.loginWithPaperModal(e)})}loginWithPaperEmailOtp(e){return S(this,null,function*(){return"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.loginWithPaperEmailOtp({email:e.email}):this.userManagedLogin.loginWithPaperEmailOtp(e)})}loginWithGoogle(e){return S(this,null,function*(){return"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.loginWithGoogle(e):this.userManagedLogin.loginWithGoogle()})}sendPaperEmailLoginOtp(e){return S(this,arguments,function*({email:e}){return"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.sendPaperEmailLoginOtp({email:e,recoveryShareManagement:"AWS_MANAGED"}):this.userManagedLogin.sendPaperEmailLoginOtp({email:e})})}verifyPaperEmailLoginOtp(e){return S(this,null,function*(){return"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.verifyPaperEmailLoginOtp(e):this.userManagedLogin.verifyPaperEmailLoginOtp(e)})}logout(){return S(this,null,function*(){let{success:e}=yield this.AuthQuerier.call({procedureName:"logout",params:void 0}),t=yield this.localStorage.removeAuthCookie(),i=yield this.localStorage.removeWalletUserId();return{success:e||t||i}})}},H=class{constructor({chain:e,clientId:t,querier:i}){this.chain=e,this.clientId=t,this.gaslessTransactionQuerier=i}callContract(e){return S(this,arguments,function*({contractAddress:e,methodArgs:t,methodInterface:i}){return yield this.gaslessTransactionQuerier.call({procedureName:"callContract",params:{chain:this.chain,contractAddress:e,method:{args:t,stub:i}}})})}},J=class extends g.Signer{constructor({provider:e,clientId:t,querier:i}){var n;super(),this.DEFAULT_ETHEREUM_CHAIN_ID=5,this.clientId=t,this.querier=i,this.endpoint=null==(n=e.connection)?void 0:n.url,(0,p.defineReadOnly)(this,"provider",e)}getAddress(){return S(this,null,function*(){let{address:e}=yield this.querier.call({procedureName:"getAddress",params:void 0});return e})}signMessage(e){return S(this,null,function*(){var t,i,n,r;let o=yield null==(t=this.provider)?void 0:t.getNetwork();o&&o._defaultProvider;let{signedMessage:s}=yield this.querier.call({procedureName:"signMessage",params:{message:e,chainId:null!=(r=null==(n=yield null==(i=this.provider)?void 0:i.getNetwork())?void 0:n.chainId)?r:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return s})}signTransaction(e){return S(this,null,function*(){var t,i,n;let{signedTransaction:r}=yield this.querier.call({procedureName:"signTransaction",params:{transaction:e,chainId:null!=(n=null==(i=yield null==(t=this.provider)?void 0:t.getNetwork())?void 0:i.chainId)?n:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return r})}_signTypedData(e,t,i){return S(this,null,function*(){var n,r,o;let{signedTypedData:s}=yield this.querier.call({procedureName:"signTypedDataV4",params:{domain:e,types:t,message:i,chainId:null!=(o=null==(r=yield null==(n=this.provider)?void 0:n.getNetwork())?void 0:r.chainId)?o:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return s})}connect(e){return new J({clientId:this.clientId,provider:e,querier:this.querier})}},V=class{constructor({clientId:e,chain:t,querier:i}){this.clientId=e,this.chain=t,this.walletManagerQuerier=i,this.gasless=new H({chain:t,clientId:e,querier:i}),this.localStorage=new T({clientId:e})}postWalletSetUp(e){return S(this,arguments,function*({deviceShareStored:e,walletAddress:t,isIframeStorageEnabled:i,walletUserId:n}){return i||(yield this.localStorage.saveDeviceShare(e,n)),{walletAddress:t}})}getUserWalletStatus(){return S(this,null,function*(){let e=yield this.walletManagerQuerier.call({procedureName:"getUserStatus",params:void 0});return"Logged In, Wallet Initialized"===e.status?{status:"Logged In, Wallet Initialized",user:A(E({},e.user),{wallet:this})}:e})}setChain(e){return S(this,arguments,function*({chain:e}){this.chain=e,this.gasless=new H({chain:e,clientId:this.clientId,querier:this.walletManagerQuerier})})}getEthersJsSigner(e){return S(this,null,function*(){var t;return new J({clientId:this.clientId,provider:(0,u.getDefaultProvider)(null!=(t=null==e?void 0:e.rpcEndpoint)?t:a[this.chain]),querier:this.walletManagerQuerier})})}},B=class{constructor({clientId:e,chain:t,styles:i,advancedOptions:n,onAuthSuccess:r}){this.clientId=e,this.querier=new j({clientId:e,customizationOptions:i}),this.wallet=new V({clientId:e,chain:t,querier:this.querier}),this.auth=new x({clientId:e,advancedOptions:E({recoveryShareManagement:"USER_MANAGED"},null!=n?n:{}),querier:this.querier,onAuthSuccess:e=>S(this,null,function*(){return yield this.wallet.postWalletSetUp(A(E({},e.walletDetails),{walletUserId:e.storedToken.authDetails.userWalletId})),yield this.querier.call({procedureName:"initIframe",params:{deviceShareStored:e.walletDetails.deviceShareStored,clientId:this.clientId,walletUserId:e.storedToken.authDetails.userWalletId,authCookie:e.storedToken.cookieString}}),null==r||r(e),{user:{status:"Logged In, Wallet Initialized",authDetails:e.storedToken.authDetails,wallet:this.wallet,walletAddress:e.walletDetails.walletAddress}}})})}getUser(){return S(this,null,function*(){let e=yield this.wallet.getUserWalletStatus();switch(e.status){case"Logged In, New Device":case"Logged In, Wallet Uninitialized":return yield this.auth.logout(),this.getUser();case"Logged Out":return{status:"Logged Out"};case"Logged In, Wallet Initialized":return E({status:"Logged In, Wallet Initialized"},e.user)}})}}}}]);