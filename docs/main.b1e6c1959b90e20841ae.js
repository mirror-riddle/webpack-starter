(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7RL8":function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),o=t.n(a),c=t("i8i4"),r=t.n(c),i=(t("p2bk"),t("55Ip")),l=t("Ty5D"),s=t("Z3vd"),d=t("vDqi"),p=t.n(d),m=t("7UAd"),u=t.n(m);function h(n,e,t,a,o,c,r){try{var i=n[c](r),l=i.value}catch(n){return void t(n)}i.done?e(l):Promise.resolve(l).then(a,o)}const f=()=>{const[n,e]=Object(a.useState)(""),t=function(){var n,t=(n=function*(){try{const n=yield p.a.get("http://localhost:8000/random-key");e(n.data)}catch(n){e(n.message)}},function(){var e=this,t=arguments;return new Promise((function(a,o){var c=n.apply(e,t);function r(n){h(c,a,o,r,i,"next",n)}function i(n){h(c,a,o,r,i,"throw",n)}r(void 0)}))});return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)(()=>{t()},[]),o.a.createElement("div",{className:u.a.content},o.a.createElement("code",{className:u.a.code},n),o.a.createElement(s.a,{variant:"contained",color:"primary",onClick:t},"change key"))};var x=t("SZxr"),g=t.n(x);const v="/random-key",E=()=>o.a.createElement("div",{className:g.a.container},o.a.createElement("div",{className:g.a.header},o.a.createElement("ul",null,o.a.createElement(i.b,{to:"/"},o.a.createElement("li",null,"Home")),o.a.createElement(i.b,{to:v},o.a.createElement("li",null,"Random Key")))),o.a.createElement("div",{className:g.a.content},o.a.createElement(l.c,null,o.a.createElement(l.a,{path:v},o.a.createElement(f,null)))));r.a.render(o.a.createElement(()=>o.a.createElement(i.a,{basename:"/webpack-starter"},o.a.createElement(E,null)),null),document.getElementById("root"))},"7UAd":function(n,e,t){var a=t("FYPc");"string"==typeof a&&(a=[[n.i,a,""]]);var o={insert:"head",singleton:!1};t("LboF")(a,o);a.locals&&(n.exports=a.locals)},FYPc:function(n,e,t){(e=n.exports=t("JPst")(!1)).push([n.i,".index_content_3pnWa {\n  display: flex;\n  justify-content: center;\n}\n\n.index_code_3QNhI {\n  padding: 16px;\n  font-size: 16px;\n  line-height: 16px;\n  font-family: Monaco;\n  margin-right: 16px;\n  height: 48px;\n  width: 180px;\n  color: white;\n  text-align: center;\n  background-color: black;\n}\n",""]),e.locals={content:"index_content_3pnWa",code:"index_code_3QNhI"}},SZxr:function(n,e,t){var a=t("dEsz");"string"==typeof a&&(a=[[n.i,a,""]]);var o={insert:"head",singleton:!1};t("LboF")(a,o);a.locals&&(n.exports=a.locals)},dEsz:function(n,e,t){(e=n.exports=t("JPst")(!1)).push([n.i,".index_container_1Rz0A {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n}\n\n/*\n.header {\n\n}\n*/\n\n.index_content_1mGjE {\n  padding: 8px;\n}\n",""]),e.locals={container:"index_container_1Rz0A",content:"index_content_1mGjE"}},p2bk:function(n,e,t){var a=t("zacj");"string"==typeof a&&(a=[[n.i,a,""]]);var o={insert:"head",singleton:!1};t("LboF")(a,o);a.locals&&(n.exports=a.locals)},zacj:function(n,e,t){(n.exports=t("JPst")(!1)).push([n.i,"html {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n}\n",""])}},[["7RL8",1,2]]]);