(this.webpackJsonpnerator=this.webpackJsonpnerator||[]).push([[0],{22:function(e,n){},42:function(e,n){},43:function(e,n){},44:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var r,i,c,a,o=t(1),d=t.n(o),l=t(11),s=t.n(l),b=t(2),u=t(3),j=t(0),f=u.b.div(r||(r=Object(b.a)(["\n  flex-shrink: 0;\n  width: 100%;\n  height: 56px;\n  background-color: #ffee53;\n  align-items: center;\n  display: flex;\n  position: sticky;\n  top: 0px;\n  z-index: 1;\n"]))),x=u.b.span(i||(i=Object(b.a)(["\n  padding: 1rem;\n  font-size: 1.4rem;\n  text-transform: capitalize;\n  color: #288ec8;\n  font-weight: bolder;\n  -webkit-text-stroke: 1px black;\n  user-select: none;\n"]))),g=function(e){return Object(j.jsx)(f,{children:Object(j.jsx)(x,{children:"Nerator"})})},p=t(7),O=t(5),h=function(e){return Object(j.jsx)(R,{backgroundColor:e.backgroundColor,outlined:e.outlined,borderColor:e.borderColor,fontColor:e.fontColor,width:e.width,onClick:e.onClick,id:e.id,align:e.align,children:Object(j.jsx)(z,{children:e.text})})};h.defaultProps={text:"default ",borderColor:"",outlined:!1,backgroundColor:"rgba(52,168,234,1)",fontColor:"white",width:"8rem",align:"right"};var k,m,y,v,w,D,C,I,A,T,S,N,R=u.b.div(c||(c=Object(b.a)(["\n  height: 50px;\n  width: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: ",";\n  outline: ",";\n  background: ",";\n  border: ",";\n  word-break: break-all;\n  box-shadow: 2px 2px 2px #c3c3c366;\n  user-select: none;\n  border-radius: 75px 75px 75px 75px / 67px 67px 67px 67px;\n  cursor: pointer;\n  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);\n\n  &:hover {\n    filter: brightness(90%);\n  }\n\n  &:active {\n    background-color: #ffee53;\n    filter: brightness(100%);\n  }\n"])),(function(e){return e.width}),(function(e){return e.fontColor}),(function(e){return!!e&&"white 1px solid"}),(function(e){return e.backgroundColor}),(function(e){return e.borderColor.length>0?"1px solid ".concat(e.borderColor):"none"})),z=u.b.span(a||(a=Object(b.a)([""]))),F=h,L=t(6),E=u.b.div(k||(k=Object(b.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: pink;\n  z-index: 3;\n  top: 0;\n  position: fixed;\n  bottom: 0;\n  display: ",";\n"])),(function(e){return e.open?" block":" none"})),P=u.b.div(m||(m=Object(b.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n"]))),U=u.b.img(y||(y=Object(b.a)(["\n  width: 30%;\n  height: 30%;\n  margin: 10px;\n"]))),_=(u.b.div(v||(v=Object(b.a)(["\n  position: absolute;\n  z-index: 3;\n  font-size: 30pt;\n"]))),function(e){var n=Object(L.c)((function(e){return{locData:e.location.locData,excelData:e.excel,filesInfo:e.nameTag}})),t=n.filesInfo,r=void 0===t?[]:t,i=n.excelData,c=void 0===i?[]:i,a=r.findIndex((function(e){return"list"===e.id})),o=r.findIndex((function(e){return"front"===e.id})),d=r.findIndex((function(e){return"back"===e.id}));return-1===o.length||-1===d.length||a.length,Object(j.jsxs)(E,{id:e.id,open:e.open,children:[e.open,c.hasOwnProperty("result")&&c.result.map((function(e,n){return Object(j.jsx)(j.Fragment,{children:e.map((function(e,n){var t,i;return Object(j.jsxs)(P,{children:[r.findIndex((function(e){return"front"===e.id}))>=0?Object(j.jsx)(U,{src:URL.createObjectURL(null===(t=r[r.findIndex((function(e){return"front"===e.id}))])||void 0===t?void 0:t.data)}):Object(j.jsx)("div",{children:"\uc55e\uba74\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. "}),r.findIndex((function(e){return"back"===e.id}))>=0?Object(j.jsx)(U,{src:URL.createObjectURL(null===(i=r[r.findIndex((function(e){return"back"===e.id}))])||void 0===i?void 0:i.data)}):Object(j.jsx)("div",{children:"\ub4b7\uba74\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."})]})}))})}))]})}),B=u.b.div(w||(w=Object(b.a)(["\n  width: 100%;\n  background-color: #ffee53;\n  flex-shrink: 0;\n  height: 95px;\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  align-content: center;\n  position: fixed;\n  bottom: 0px;\n"]))),X=u.b.span(D||(D=Object(b.a)(["\n  display: flex;\n  padding: 1.5rem;\n"]))),J=function(e){var n=Object(o.useState)(!1),t=Object(O.a)(n,2),r=t[0],i=t[1],c=function(){i(!0)};return Object(j.jsxs)(B,{children:[Object(j.jsx)(_,{open:r,id:"printArea",children:"test"}),Object(j.jsx)(_,{id:"printArea",children:"test ok "}),Object(j.jsx)("iframe",{id:"ifm",style:{height:"0px",width:"0px"}}),Object(j.jsxs)(X,{children:[Object(j.jsx)(F,Object(p.a)({text:"TEST PRINT",onClick:function(e){return c()},background:"#32BA3F",fontColor:"black"},"onClick",c)),Object(j.jsx)(F,{text:"PRINT",onClick:function(){return window.print()},backgroundColor:"#32BA3F",fontColor:"black"})]})]})},M=t(18),G=t(4),H=function(e){var n=Object(o.useState)(!1),t=Object(O.a)(n,2),r=t[0],i=t[1];return Object(o.useEffect)((function(){i(e.open)}),[e.open]),Object(j.jsx)(K,{open:r,children:Object(j.jsxs)(W,{width:e.width,height:e.height,children:[Object(j.jsxs)(Q,{display:e.title,children:[e.title," ",Object(j.jsx)(q,{})]}),Object(j.jsx)(Y,{children:e.contents}),Object(j.jsxs)(V,{children:[Object(j.jsx)(F,{width:"5rem",text:"OK",onClick:function(n){e.ok()}}),Object(j.jsx)(F,{width:"5rem",text:"\ub2eb\uae30",backgroundColor:"rgba(215,39,100,1)",onClick:function(n){return i(!1),void e.close(!1)}})]})]})})};H.defaultProps={open:!1,width:"80%",height:"18rem",contents:"test",title:""};var K=u.b.div(C||(C=Object(b.a)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background-color: rgba(21, 20, 20, 0.38);\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  display: ",";\n  transition: 3s all;\n"])),(function(e){return e.open?"inherit":"none"})),W=u.b.div(I||(I=Object(b.a)(["\n  padding: 18px;\n  width: ",";\n  height: ",";\n  z-index: 1;\n  background-color: white;\n  margin: auto;\n  box-shadow: 6px 0px 9px 3px rgb(173 169 169 / 38%);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n"])),(function(e){return e.width}),(function(e){return e.height})),Y=u.b.div(A||(A=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"]))),q=u.b.hr(T||(T=Object(b.a)(["\n  width: 60%;\n  border: 1px solid #f4f4f4;\n"]))),Q=u.b.div(S||(S=Object(b.a)(["\n  text-align: center;\n  width: 100%;\n  font-weight: bolder;\n  font-size: 1.2em;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  display: ",";\n"])),(function(e){return e.display.length>0?"block":"none"})),V=u.b.div(N||(N=Object(b.a)(["\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 8px;\n  padding-bottom: 8px;\n"]))),Z=H,$=function(e){var n,t=Object(o.useRef)(null);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(F,{text:e.text,onClick:function(e){t.current.click()}}),Object(j.jsx)("input",(n={type:"file",id:e.id,accept:e.extension,ref:t,style:{width:"300px"}},Object(p.a)(n,"style",{display:"none"}),Object(p.a)(n,"onChange",(function(n){return function(n){e.handleFile(n)}(n)})),n))]})};$.defaultProps={extension:".xls,.xlsx",text:"\ud30c\uc77c \uc5c5\ub85c\ub4dc",id:""};var ee,ne,te,re,ie,ce,ae,oe,de,le,se,be,ue,je,fe,xe,ge,pe,Oe=$,he=t(14),ke=u.b.div(ee||(ee=Object(b.a)(["\n  flex-shrink: 1;\n  overflow: auto;\n  padding-bottom: 95px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n"]))),me=u.b.div(ne||(ne=Object(b.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 1.1rem;\n"]))),ye=u.b.div(te||(te=Object(b.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-wrap: wrap;\n"]))),ve=u.b.div(re||(re=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),we=u.b.div(ie||(ie=Object(b.a)(["\n  width: 41.23rem;\n  position: relative;\n  margin-top: 4rem;\n  margin-bottom: 1.5rem;\n  height: 17rem;\n  border: 1px solid black;\n  background-color: ",";\n  border: ",";\n  overflow: hidden;\n\n  &:-moz-drag-over {\n    background-color: pink;\n  }\n"])),(function(e){return e.isDragOver?" #d6d4d4":" #e8e8e8"}),(function(e){return e.isDragOver?" 4px dashed black":" none"})),De=u.b.img(ce||(ce=Object(b.a)(["\n  width: 100%;\n  height: 100%;\n"]))),Ce=u.b.div(ae||(ae=Object(b.a)(["\n  width: 41.23rem;\n  height: 13rem;\n  background: #e8e8e8;\n  overflow: hidden;\n  margin-top: 76px;\n"]))),Ie=u.b.div(oe||(oe=Object(b.a)(["\n  //height: 29px;\n  //position: relative;\n  //height: 100%;\n  width: 100%;\n  margin: auto;\n  text-align: center;\n  color: #288ec8;\n  border-radius: 11px 11px 0px 0px;\n  user-select: none;\n  font-weight: 900;\n  font-size: large;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Ae=u.b.div(de||(de=Object(b.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Te=u.b.table(le||(le=Object(b.a)(["\n  width: 100%;\n  border-spacing: 0;\n"]))),Se=u.b.tr(se||(se=Object(b.a)(["\n  &:first-child {\n    background-color: aliceblue;\n  }\n"]))),Ne=u.b.td(be||(be=Object(b.a)(["\n  text-align: center;\n\n  width: 30px;\n"]))),Re=u.b.div(ue||(ue=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]))),ze=u.b.div(je||(je=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-top: 10px;\n"]))),Fe=u.b.div(fe||(fe=Object(b.a)(["\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.3);\n  width: 16px;\n  color: rgba(225, 0, 0, 1);\n  font-size: small;\n  text-align: center;\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  user-select: none;\n  font-weight: 500;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n\n  margin-left: 3em;\n  &:active {\n    background-color: black;\n    color: red;\n  }\n"]))),Le=u.b.select(xe||(xe=Object(b.a)(["\n  background-color: white;\n  outline: 1px solid gray;\n  padding: 5px;\n  border: none;\n\n  &,\n  option {\n    background-color: #ffee53;\n    color: black;\n  }\n"]))),Ee=u.b.option(ge||(ge=Object(b.a)([""]))),Pe=u.b.div(pe||(pe=Object(b.a)(["\n  position: ",";\n  left: ","px;\n  top: ","px;\n\n  width: 6rem;\n  height: 30px;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n  border: ",";\n\n  margin-left: 10px;\n  border-radius: 3px;\n  user-select: none;\n  cursor: ",";\n\n  &:hover {\n    background-color: #0074e8;\n    color: white;\n  }\n  &:active {\n    background-color: #0683ff;\n    cursor: grabbing;\n    cursor: --moz-grabbing;\n    cursor: -webkit-grabbing;\n  }\n"])),(function(e){return e.drop?"absolute":"relative"}),(function(e){return e.x>0?e.x:0}),(function(e){return e.y>0?e.y:0}),(function(e){return e.drop?"none":" #1a8cff"}),(function(e){return e.drop?"1px dashed black":"none"}),(function(e){return e.isDragging?"grabbing":"cursor"})),Ue=function(e){var n=e.excelData,t=void 0===n?[]:n,r=e.filesInfo,i=void 0===r?[]:r,c=e.addNameTag,a=e.setLocation,l=e.setExcelData,s=Object(o.useState)(!1),b=Object(O.a)(s,2),u=b[0],f=b[1],x=Object(o.useState)(""),g=Object(O.a)(x,2),h=g[0],k=g[1],m=Object(o.useState)(""),y=Object(O.a)(m,2),v=y[0],w=y[1],D=Object(o.useState)([]),C=Object(O.a)(D,2),I=C[0],A=C[1],T=Object(o.useRef)(null),S=Object(o.useRef)(""),N=Object(o.useState)(""),R=Object(O.a)(N,2),z=(R[0],R[1],Object(o.useRef)(0));Object(o.useEffect)((function(){console.log(t.result)}),[t]);var L=function(e){if(Object.keys(t).length>0&&!window.confirm("\uc774\ubbf8 \ubd88\ub7ec\uc628 \ud30c\uc77c\uc774 \uc788\uc2b5\ub2c8\ub2e4. \n \uc9c0\uc6b0\uace0 \ud604\uc7ac \ud30c\uc77c\uc744 \ubd88\ub7ec\uc624\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"))return l([]),!1;c(Object(G.a)(Object(G.a)({},i),{},Object(p.a)({},e.target.id,e.target.files[0])),e.target.id)},E=function(e){c(Object(G.a)(Object(G.a)({},i),{},Object(p.a)({},e.target.id,e.target.files[0])),e.target.id)},P=function(){window.confirm("\ub370\uc774\ud130\ub97c \ube44\uc6b0\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&l([])},U=Object(o.useCallback)((function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(Te,{children:t.hasOwnProperty("result")?Object(j.jsxs)(j.Fragment,{children:[Object.keys(t).length>0&&t.result.map((function(e,n){return Object(j.jsx)(Se,{children:e.map((function(e,n){return Object(j.jsx)(Ne,{children:e})}))})})),Object(j.jsx)(F,{text:"\ube44\uc6b0\uae30",onClick:P})]}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(Ie,{children:"\ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})})})})}),[t]),_=Object(o.useCallback)((function(){return Object(j.jsxs)(Re,{children:[Object(j.jsx)(Te,{children:Object.keys(t).length>0&&t.result.map((function(e,n){return Object(j.jsx)(Se,{children:e.map((function(e,n){return Object(j.jsx)(Ne,{children:e})}))})}))}),Object(j.jsxs)(ze,{children:[Object(j.jsx)(Oe,{id:"list",text:"\ud30c\uc77c \uc5c5\ub85c\ub4dc",extension:".xls,.xlsx",handleFile:L}),i&&i.findIndex((function(e){return"list"===e.id}))>=0?Object(j.jsx)(F,{onClick:function(e){return function(e){var n=i.findIndex((function(e){return"list"===e.id})),r=[];if(n>=0){var c=new FileReader,a=i[n].data;c.onload=function(e){var n,i,c,a=e.target.result,o=he.read(a,{type:"binary"}),d=o.SheetNames[0],s=o.Sheets[d],b=he.utils.decode_range(s["!ref"]);if(0!==b.s.r)return alert("\uc62c\ubc14\ub978 \ud615\ud0dc\uac00 \uc544\ub2d9\ub2c8\ub2e4."),!1;for(i=b.s.r;i<=b.e.r;i++){for(n=[],c=b.s.c;c<=b.e.c;c++){var u=s[he.utils.encode_cell({r:i,c:c})];"undefined"===typeof u?n.push(void 0):n.push(u.w)}r.push(n)}var j=r[0].filter((function(e){return void 0===e}));if(j.length>0)return alert("header\uc640 \ub370\uc774\ud130\uac00 \uc62c\ubc14\ub978 \ud615\ud0dc\uac00 \uc544\ub2d9\ub2c8\ub2e4."),l([]),!1;l(Object(G.a)(Object(G.a)({},t),{},{result:r}))},c.readAsBinaryString(a)}}()},backgroundColor:"green",text:"\uc5c5\ub85c\ub4dc"}):""]})]})}),[t,i]),B=Object(o.useCallback)((function(e){f(e)}),[u]),X=Object(o.useCallback)((function(){f(!1)}),[u]),J=Object(o.useCallback)((function(e){w(e.currentTarget.id),f(!0)}),[u,v]),H=function(e){e.dataTransfer.effectAllowed="move",e.dataTransfer.dropEffect="move",e.dataTransfer.setData("id",e.target.getAttribute("data-item")),e.dataTransfer.setData("text/html",e.target),e.dataTransfer.setDragImage(e.target,20,20),e.target.classList.add("drag"),S.current=e.target.getAttribute("data-item"),k(e.target)},K=function(e){var n=e.target.getAttribute("data-key");"1"===e.currentTarget.parentNode.getAttribute("data-position")?ce(ie.filter((function(e){return e.key!==Number(n)}))):le(de.filter((function(e){return e.key!==Number(n)})))},W=Object(o.useState)(!1),Y=Object(O.a)(W,2),q=Y[0],Q=Y[1],V=Object(o.useState)(!1),$=Object(O.a)(V,2),ee=$[0],ne=$[1],te=Object(o.useState)([]),re=Object(O.a)(te,2),ie=re[0],ce=re[1],ae=Object(o.useState)([]),oe=Object(O.a)(ae,2),de=oe[0],le=oe[1],se=function(e){e.preventDefault(),"1"===e.target.getAttribute("data-key")?Q(!0):ne(!0)};Object(o.useEffect)((function(){console.log(I)}),[I]);var be=function(e){var n=e.target.getBoundingClientRect(),t=e.clientX-n.left,r=e.clientY-n.top;console.log("key update"),console.log(h.getAttribute("data-key")),console.log("===================");var c=[];if(h){a({id:h,x:t,y:r});var o=Object.assign({},h),d=o[Object.keys(o).filter((function(e){return e.indexOf("__reactProps")>=0}))[0]];c={type:e.target.getAttribute("data-key"),itm:S.current,key:z.current++,id:T.current,props:d,x:t,y:r}}e.target.getAttribute("data-key");if(null!=h.getAttribute("data-key")){console.log("===================================="),console.log("key\uac00 \uc788\uc2b5\ub2c8\ub2e4. : "+h.getAttribute("data-key"));var l=[{key:1},{key:3}].map((function(e){return Object(G.a)({},e)})).find((function(e){return e.key===h.getAttribute("data-key")}));console.log(l),A(Object(G.a)(Object(G.a)({},I),{},{type:Object(G.a)(Object(G.a)({},I.type),{},{obj:c})})),console.log("====================================")}if("1"===e.target.getAttribute("data-key")){if(!i.findIndex((function(e){return"front"===e.id}))<0)return alert("\uc774\ubbf8\uc9c0\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),!1;Q(!1),ce(ie.concat(c));var s=ie.findIndex((function(e,n){return e.key===Number(null===h.getAttribute("data-key")?-1:h.getAttribute("data-key"))}));if(s>=0){var b=Object(M.a)(ie);b[s]=Object(G.a)(Object(G.a)({},b[s]),{},{x:t,y:r}),ce(b)}else ce(ie.concat(c))}else{if(!i.findIndex((function(e){return"back"===e.id}))<0)return alert("\uc774\ubbf8\uc9c0\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),!1;ne(!1);var u=de.findIndex((function(e,n){return e.key===Number(null===h.getAttribute("data-key")?-1:h.getAttribute("data-key"))}));if(u>=0){var j=Object(M.a)(de);j[u]=Object(G.a)(Object(G.a)({},j[u]),{},{x:t,y:r}),le(j)}else le(de.concat(c))}};return Object(j.jsxs)(ke,{children:[[],Object(j.jsxs)(me,{children:[Object(j.jsx)(F,{id:"upload",text:"\uba85\ub2e8 \uc5c5\ub85c\ub4dc",onClick:function(e){return J(e)}}),Object(j.jsx)(F,{id:"view",text:"\uba85\ub2e8 \uc870\ud68c",onClick:function(e){return J(e)}})]}),"\uba85\ud568 \uc0ac\uc774\uc988 \uc870\uc815",Object(j.jsx)(Le,{children:[{name:"\ubbf8\uad6d \ud45c\uc900 \uba85\ud568",subText:"1050*600"},{name:"\uc720\ub7fd \uba85\ud568",subText:"1003*649"},{name:"\ubbf8\ub2c8/\uc2a4\ud0a4\ub2c8/\uc2ac\ub9bc \uba85\ud568",subText:"300*900"},{name:"\uc0ac\uac01\ud615 \uba85\ud568",subText:"750*750"}].map((function(e,n){return Object(j.jsxs)(Ee,{children:[" ",e.name]})}))}),Object(j.jsxs)(ye,{children:[Object(j.jsxs)(ve,{children:[Object(j.jsxs)(we,{isDragOver:q,onDrop:be,"data-key":"1",onDragOver:se,children:[ie&&ie.map((function(e,n){var t=e.props;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(Pe,Object(G.a)(Object(G.a)({},t),{},{className:"drop",drop:!0,x:e.x,y:e.y,"data-position":"1","data-key":e.key,children:[t.children,Object(j.jsx)(Fe,{"data-key":e.key,onClick:K,children:"X"})]}))})})),i.findIndex((function(e){return"front"===e.id}))>=0?Object(j.jsx)(De,{"data-key":"1",src:URL.createObjectURL(i[i.findIndex((function(e){return"front"===e.id}))].data)}):Object(j.jsx)(d.a.Fragment,{children:Object(j.jsx)(Ie,{children:"\uc0ac\uc9c4\uc774 \uc5c6\uc2b5\ub2c8\ub2e4"})})]}),Object(j.jsx)(Oe,{text:"\uc55e\uba74 \uc5c5\ub85c\ub4dc",extension:".png,.jpeg,.jpg",id:"front",handleFile:function(e){return E(e)}})]}),Object(j.jsxs)(ve,{children:[Object(j.jsxs)(we,{onDrop:be,"data-key":"2",onDragOver:se,className:"droppable",isDragOver:ee,children:[de&&de.map((function(e,n){var t=e.props;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(Pe,Object(G.a)(Object(G.a)({},t),{},{className:"drop",drop:!0,x:e.x,y:e.y,"data-position":"2","data-key":e.key,children:[t.children,Object(j.jsx)(Fe,{"data-key":e.key,onClick:K,children:"X"})]}))})})),i.findIndex((function(e){return"back"===e.id}))>=0?Object(j.jsx)(De,{"data-key":"2",src:URL.createObjectURL(i[i.findIndex((function(e){return"back"===e.id}))].data)}):Object(j.jsx)(d.a.Fragment,{children:Object(j.jsx)(Ie,{children:"\uc0ac\uc9c4\uc774 \uc5c6\uc2b5\ub2c8\ub2e4"})})]}),Object(j.jsx)(Oe,{text:"\ub4b7\uba74 \uc5c5\ub85c\ub4dc",extension:".png,.jpeg,.jpg",id:"back",handleFile:function(e){return E(e)}})]})]}),Object(j.jsxs)(Ce,{children:[Object(j.jsx)(Ie,{children:"\ubcc0\uc218 \uc9c0\uc815"}),Object(j.jsx)(Ae,{children:Object.keys(t).length>0&&t.result[0].map((function(e,n){return Object(j.jsx)(Pe,{ref:T,"data-item":n,className:"droppable",draggable:!0,isDragging:!0,onDragStart:H,onDragEnd:function(e){return console.log("handleItemDragEnd"),Q(!1),void ne(!1)},drop:!1,children:e},e+"-"+n)}))})]}),Object(j.jsx)(Z,{open:u,title:"view"===v?"\uc9c1\uc6d0 \uba85\ub2e8 \uc870\ud68c":"\uc9c1\uc6d0 \uba85\ub2e8 \uc5c5\ub85c\ub4dc",close:function(e){return B(e)},ok:function(e){return X(e)},contents:"view"===v?U():_()})]})},_e="contents/ADD_LIST",Be="contents/ADD_NAMETAG",Xe=[];var Je="location/UPDATE_LOCATION",Me={locData:[]};var Ge="excel/upload",He=[];var Ke,We,Ye=function(){var e=Object(L.c)((function(e){return{excelData:e.excel,filesInfo:e.nameTag}})),n=e.filesInfo,t=e.excelData,r=Object(L.c)((function(e){return{locData:e.location.locData}})).locData,i=Object(L.b)();return Object(j.jsx)(Ue,{excelData:t,filesInfo:n,addNameTag:function(e,n){return i(function(e,n){return{type:Be,data:e,id:n}}(e,n))},addList:function(e){return i((n=e.result,{type:_e,data:n}));var n},setLocation:function(e){return i({type:Je,data:e})},setExcelData:function(e){return i(function(e){return{type:Ge,data:e.result}}(e))},locList:r})},qe=u.b.div(Ke||(Ke=Object(b.a)(["\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  flex-wrap: nowrap;\n"]))),Qe=function(e){return Object(j.jsxs)(qe,{children:[Object(j.jsx)(g,{}),Object(j.jsx)(Ye,{}),Object(j.jsx)(J,{})]})},Ve=t(9),Ze=Object(Ve.combineReducers)({nameTag:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case _e:return{excelData:n.data};case Be:return e.findIndex((function(e){return e.id===n.id}))>=0?e.map((function(e){return e.id===n.id?Object(G.a)(Object(G.a)({},e),{},{data:n.data[n.id]}):e})):e.concat({data:n.data[n.id],id:n.id});default:return e}},location:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,n=arguments.length>1?arguments[1]:void 0;return n.type===Je?Object(G.a)(Object(G.a)({},e.locData),{},{locData:e.locData.concat(n.data)}):e},excel:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,n=arguments.length>1?arguments[1]:void 0;return console.log("excelData"),console.log(n),n.type===Ge?{result:n.data}:e}}),$e=Ze,en=t(27),nn=Object(u.a)(We||(We=Object(b.a)(['\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: "Helvetica", "Arial", sans-serif;\n    line-height: 1.5;\n  }\n']))),tn=Object(Ve.createStore)($e,Object(en.composeWithDevTools)());console.log(tn.getState());var rn=function(){return Object(j.jsxs)(L.a,{store:tn,children:[Object(j.jsx)(nn,{}),Object(j.jsx)(Qe,{})]})};t(44);s.a.render(Object(j.jsx)(d.a.StrictMode,{children:Object(j.jsx)(rn,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.1a444fb0.chunk.js.map