"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43054],{43054:function(t,e,a){a.r(e),a.d(e,{resolveImplementation:function(){return f}});var s=a(44702);async function d(t,e){return await t({method:"eth_getStorageAt",params:[e.address,e.position,e.blockTag??"latest"]})}var r=a(98511),i=a(26182),n=a(4159);let c="0x0000000000000000000000000000000000000000";async function f(t){let e;let[a,d]=await Promise.all([(0,s.c)(t),l(t)]),r=function(t){if(t.startsWith("0x")||(t=`0x${t}`),t.startsWith("0x363d3d373d3d3d363d73")){let e=t.slice(22,62);return`0x${e}`}if(t.startsWith("0x36603057343d5230")){let e=t.slice(122,162);return`0x${e}`}if(t.startsWith("0x3d3d3d3d363d3d37363d73")){let e=t.slice(24,64);return`0x${e}`}if(t.startsWith("0x366000600037611000600036600073")){let e=t.slice(32,72);return`0x${e}`}if(t.startsWith("0x36600080376020600036600073")){let e=t.slice(28,68);return`0x${e}`}if(t.startsWith("0x365f5f375f5f365f73")){let e=t.slice(20,60);return`0x${e}`}}(a);if(r)return{address:r,bytecode:await (0,s.c)({...t,address:r})};if(d&&d!==c?(t={...t,address:d},e=await b(t)):e=await o(t),e&&(0,n.UJ)(e)&&e!==c){let d=await (0,s.c)({...t,address:e});return"0x"===d?{address:t.address,bytecode:a}:{address:e,bytecode:d}}return{address:t.address,bytecode:a}}async function l(t){let e=(0,r.getRpcClient)({client:t.client,chain:t.chain});try{let a=await d(e,{address:t.address,position:"0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50"});return`0x${a.slice(-40)}`}catch{return}}async function o(t){let e=(0,r.getRpcClient)({client:t.client,chain:t.chain});try{let a=[d(e,{address:t.address,position:"0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc"}),d(e,{address:t.address,position:"0xbaab7dbf64751104133af04abc7d9979f0fda3b059a322a8333f533d3f32bf7f"}),d(e,{address:t.address,position:"0x7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c3"})],s=(await Promise.all(a)).find(t=>"0x0000000000000000000000000000000000000000000000000000000000000000"!==t);return s?`0x${s.slice(-40)}`:c}catch{return}}let u={type:"function",name:"implementation",inputs:[],outputs:[{type:"address",name:"",internalType:"address"}],stateMutability:"view"};async function b(t){try{return await (0,i.readContract)({contract:t,method:u})}catch{return}}}}]);