(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7RL8":function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),o=t.n(a),c=t("i8i4"),r=t.n(c),i=(t("p2bk"),t("55Ip")),l=t("Ty5D"),s=t("Z3vd"),d=t("vDqi"),m=t.n(d),p=t("7UAd"),h=t.n(p);const x=()=>{const[e,n]=Object(a.useState)(""),t=()=>{m.a.get("http://localhost:8000/random-key").then(e=>{n(e.data)},e=>{n(e.message)})};return Object(a.useEffect)(()=>{t()},[]),o.a.createElement("div",{className:h.a.content},o.a.createElement("code",{className:h.a.code},e),o.a.createElement(s.a,{variant:"contained",color:"primary",onClick:t},"change key"))};var u=t("SZxr"),g=t.n(u);const E="/random-key",b=()=>o.a.createElement("div",{className:g.a.container},o.a.createElement("div",{className:g.a.header},o.a.createElement("ul",null,o.a.createElement(i.b,{to:"/"},o.a.createElement("li",null,"Home")),o.a.createElement(i.b,{to:E},o.a.createElement("li",null,"Random Key")))),o.a.createElement("div",{className:g.a.content},o.a.createElement(l.c,null,o.a.createElement(l.a,{path:E},o.a.createElement(x,null)))));r.a.render(o.a.createElement(()=>o.a.createElement(i.a,{basename:"https://mirror-riddle.github.io/webpack-starter/website"},o.a.createElement(l.a,{path:"/"},o.a.createElement(b,null))),null),document.getElementById("root"))},"7UAd":function(e,n,t){var a=t("FYPc");"string"==typeof a&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};t("LboF")(a,o);a.locals&&(e.exports=a.locals)},FYPc:function(e,n,t){(n=e.exports=t("JPst")(!1)).push([e.i,".index_content_3pnWa {\n  display: flex;\n  justify-content: center;\n}\n\n.index_code_3QNhI {\n  padding: 16px;\n  font-size: 16px;\n  line-height: 16px;\n  font-family: Monaco;\n  margin-right: 16px;\n  height: 48px;\n  width: 180px;\n  color: white;\n  text-align: center;\n  background-color: black;\n}\n",""]),n.locals={content:"index_content_3pnWa",code:"index_code_3QNhI"}},SZxr:function(e,n,t){var a=t("dEsz");"string"==typeof a&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};t("LboF")(a,o);a.locals&&(e.exports=a.locals)},dEsz:function(e,n,t){(n=e.exports=t("JPst")(!1)).push([e.i,".index_container_1Rz0A {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n}\n\n/*\n.header {\n\n}\n*/\n\n.index_content_1mGjE {\n  padding: 8px;\n}\n",""]),n.locals={container:"index_container_1Rz0A",content:"index_content_1mGjE"}},p2bk:function(e,n,t){var a=t("zacj");"string"==typeof a&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};t("LboF")(a,o);a.locals&&(e.exports=a.locals)},zacj:function(e,n,t){(e.exports=t("JPst")(!1)).push([e.i,"html {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n}\n",""])}},[["7RL8",1,2]]]);