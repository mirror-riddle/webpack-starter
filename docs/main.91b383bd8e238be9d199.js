(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"15pl":function(e,n,a){var t=a("7E9t");"string"==typeof t&&(t=[[e.i,t,""]]);var l={insert:"head",singleton:!1};a("LboF")(t,l);t.locals&&(e.exports=t.locals)},"7E9t":function(e,n,a){(n=e.exports=a("JPst")(!1)).push([e.i,".index_content_5b62E {\n  /* height: 100%; */\n  padding: 16px;\n}\n\n.index_gridContainer_23znC {\n  display: grid;\n  height: 400px;\n  width: calc(100vw - 32px);\n  border-bottom: solid 1px rgba(0, 0, 0, 0.1);\n  /* gap: 16px; */\n  /* grid-template-columns: repeat(12, 1fr); */\n  /* grid-template-rows: repeat(4, 1fr); */\n  grid-auto-rows: 1fr;\n  grid-auto-columns: 1fr;\n  transition: gap 0.15s ease-in;\n  overflow-y: auto;\n}\n\n.index_sliderContainer_1Mg1f {\n  padding-top: 16px;\n  padding-right: 16px;\n}\n",""]),n.locals={content:"index_content_5b62E",gridContainer:"index_gridContainer_23znC",sliderContainer:"index_sliderContainer_1Mg1f"}},"7RL8":function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),r=a("i8i4"),i=a.n(r),o=(a("p2bk"),a("55Ip")),s=a("Ty5D"),c=a("6Obz"),d=a("ofer"),p=a("oSia"),m=a("lxyc"),u=a("yR+C"),g=a("15pl"),x=a.n(g),b=a("17x9"),f=a.n(b),h=a("jdRz"),v=a.n(h);const y=e=>{const{className:n,children:a}=e;return l.a.createElement("div",{className:`${n} ${v.a.item}`},l.a.createElement("div",{className:v.a.content},a))};y.propTypes={children:f.a.node,className:f.a.string},y.defaultProps={className:"",children:"item"},p.a.registerLanguage("css",m.a);const E=()=>{const[e,n]=Object(t.useState)(16),[a,r]=Object(t.useState)(4),[i,o]=Object(t.useState)(8),s=Array.from(Array(20).keys()),m={gap:`${e}px`,gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${a}, 1fr)`};return l.a.createElement("div",{className:x.a.content},l.a.createElement("div",{className:x.a.gridContainer,style:m},s.map(e=>l.a.createElement(y,{key:e},e))),l.a.createElement(p.a,{language:"css",showLineNumbers:!0,style:u.a},`{\n  gap: ${e}px;\n  grid-template-columns: repeat(${i}, 1fr);\n  grid-template-rows: repeat(${a}, 1fr);\n}`),l.a.createElement("div",{className:x.a.sliderContainer},l.a.createElement(d.a,{id:"grid-gap-slider",gutterBottom:!0},"gap"),l.a.createElement(c.a,{getAriaValueText:e=>`${e}px`,"aria-labelledby":"grid-gap-slider",defaultValue:e,valueLabelDisplay:"off",step:4,min:0,max:24,marks:[{value:0,label:"0"},{value:4,label:"4"},{value:8,label:"8"},{value:12,label:"12"},{value:16,label:"16"},{value:20,label:"20"},{value:24,label:"24"}],onChange:(e,a)=>{n(a)}}),l.a.createElement(d.a,{id:"template-column-slider",gutterBottom:!0},"grid-template-columns"),l.a.createElement(c.a,{getAriaValueText:e=>`${e}`,"aria-labelledby":"template-column-slider",defaultValue:i,valueLabelDisplay:"off",step:1,min:4,max:12,marks:[{value:4,label:"4"},{value:6,label:"6"},{value:8,label:"8"},{value:10,label:"10"},{value:12,label:"12"}],onChange:(e,n)=>{o(n)}}),l.a.createElement(d.a,{id:"template-row-slider",gutterBottom:!0},"grid-template-rows"),l.a.createElement(c.a,{getAriaValueText:e=>`${e}`,"aria-labelledby":"template-row-slider",defaultValue:a,valueLabelDisplay:"off",step:1,min:4,max:12,marks:[{value:4,label:"4"},{value:6,label:"6"},{value:8,label:"8"},{value:10,label:"10"},{value:12,label:"12"}],onChange:(e,n)=>{r(n)}})))};var _=a("Z3vd"),w=a("vDqi"),k=a.n(w),C=a("7UAd"),N=a.n(C);function z(e,n,a,t,l,r,i){try{var o=e[r](i),s=o.value}catch(e){return void a(e)}o.done?n(s):Promise.resolve(s).then(t,l)}const L=()=>{const[e,n]=Object(t.useState)(""),a=function(){var e,a=(e=function*(){try{const e=yield k.a.get("http://localhost:8000/random-key");n(e.data)}catch(e){n(e.message)}},function(){var n=this,a=arguments;return new Promise((function(t,l){var r=e.apply(n,a);function i(e){z(r,t,l,i,o,"next",e)}function o(e){z(r,t,l,i,o,"throw",e)}i(void 0)}))});return function(){return a.apply(this,arguments)}}();return Object(t.useEffect)(()=>{a()},[]),l.a.createElement("div",{className:N.a.content},l.a.createElement("code",{className:N.a.code},e),l.a.createElement(_.a,{variant:"contained",color:"primary",onClick:a},"change key"))};var j=a("SZxr"),A=a.n(j);const F="/random-key",$="/interactive-grid",P=()=>l.a.createElement("div",{className:A.a.container},l.a.createElement("div",{className:A.a.header},l.a.createElement(o.b,{to:"/"},"home"),l.a.createElement(o.b,{to:F},"random key"),l.a.createElement(o.b,{to:$},"interactive grid")),l.a.createElement("div",{className:A.a.content},l.a.createElement(s.c,null,l.a.createElement(s.a,{path:F},l.a.createElement(L,null)),l.a.createElement(s.a,{path:$},l.a.createElement(E,null)))));i.a.render(l.a.createElement(()=>l.a.createElement(o.a,{basename:"/webpack-starter"},l.a.createElement(P,null)),null),document.getElementById("root"))},"7UAd":function(e,n,a){var t=a("FYPc");"string"==typeof t&&(t=[[e.i,t,""]]);var l={insert:"head",singleton:!1};a("LboF")(t,l);t.locals&&(e.exports=t.locals)},FYPc:function(e,n,a){(n=e.exports=a("JPst")(!1)).push([e.i,".index_content_3pnWa {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.index_code_3QNhI {\n  padding: 16px;\n  font-size: 16px;\n  line-height: 16px;\n  font-family: Monaco;\n  margin-right: 16px;\n  height: 48px;\n  width: 180px;\n  color: white;\n  text-align: center;\n  background-color: black;\n}\n",""]),n.locals={content:"index_content_3pnWa",code:"index_code_3QNhI"}},SZxr:function(e,n,a){var t=a("dEsz");"string"==typeof t&&(t=[[e.i,t,""]]);var l={insert:"head",singleton:!1};a("LboF")(t,l);t.locals&&(e.exports=t.locals)},dEsz:function(e,n,a){(n=e.exports=a("JPst")(!1)).push([e.i,".index_container_1Rz0A {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.index_header_1-IXy {\n  flex-shrink: 0;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  border-bottom: solid rgba(0, 0, 0, 0.1) 1px;\n}\n\n.index_header_1-IXy a {\n  margin-left: 16px;\n  text-decoration: none;\n  text-transform: capitalize;\n  color: #000;\n}\n\n.index_header_1-IXy a:hover {\n  opacity: 0.5;\n  transition: opacity 0.15s ease-in;\n}\n\n.index_content_1mGjE {\n  flex-grow: 1;\n}\n",""]),n.locals={container:"index_container_1Rz0A",header:"index_header_1-IXy",content:"index_content_1mGjE"}},jdRz:function(e,n,a){var t=a("p8Fe");"string"==typeof t&&(t=[[e.i,t,""]]);var l={insert:"head",singleton:!1};a("LboF")(t,l);t.locals&&(e.exports=t.locals)},p2bk:function(e,n,a){var t=a("zacj");"string"==typeof t&&(t=[[e.i,t,""]]);var l={insert:"head",singleton:!1};a("LboF")(t,l);t.locals&&(e.exports=t.locals)},p8Fe:function(e,n,a){(n=e.exports=a("JPst")(!1)).push([e.i,".index_item_lFALc {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* border: solid 1px rgba(0, 0, 0, 0.1); */\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n",""]),n.locals={item:"index_item_lFALc"}},zacj:function(e,n,a){(e.exports=a("JPst")(!1)).push([e.i,"html {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  background-color: #fff;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n}\n",""])}},[["7RL8",1,2]]]);