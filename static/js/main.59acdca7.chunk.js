(this.webpackJsonpdiplom=this.webpackJsonpdiplom||[]).push([[0],{30:function(e,t,a){e.exports=a(41)},35:function(e,t,a){},36:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(10),c=a.n(l),r=(a(35),a(14)),o=a(7),s=a(15),u=a(16),h=a(6),p=a(19),d=(a(36),a(70));var m=function(e){return i.a.createElement("rect",{style:{stroke:"#000000",strokeWidth:"1"},x:e.x,y:e.y,width:e.w,height:e.h,fill:(t=e.index,"#"+Math.floor(Math.abs(16777215*Math.sin(t+777))%16777215).toString(16))});var t},f=a(75),g=10;var E=function(e){console.log("re-render");var t=e.data.rects.map((function(e){return{index:e.index,rotated:e.rotated,x:e.x*g,y:e.y*g,px:e.px*g,py:e.py*g,width:e.width*g,height:e.height*g}})),a=Math.min.apply(Math,t.map((function(e){return e.x}))),n=Math.min.apply(Math,t.map((function(e){return e.y}))),l=Math.max.apply(Math,t.map((function(e){return e.x+e.width+1}))),c=Math.max.apply(Math,t.map((function(e){return e.y+e.height+1})));return i.a.createElement(f.a,{style:{padding:"17px"}},i.a.createElement("div",null,i.a.createElement("h2",{style:{paddingLeft:"17px"}},"Input Split"),i.a.createElement("div",{style:{width:"".concat(l-a+4,"px"),height:"".concat(c-n+3,"px"),backgroundColor:"#AAAAAA",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 20 20'%3E%3Cg %3E%3Cpolygon fill='%23777777' points='20 10 10 0 0 0 20 20'/%3E%3Cpolygon fill='%23777777' points='0 10 0 20 10 20'/%3E%3C/g%3E%3C/svg%3E\")"}},i.a.createElement("svg",{width:l-a,height:c-n,style:{border:"2px solid black"}},t.map((function(e){return i.a.createElement(m,{index:e.index,key:e.index,x:e.x-a,y:e.y-n,w:e.rotated?e.height:e.width,h:e.rotated?e.width:e.height})}))))),i.a.createElement("div",null,i.a.createElement("h2",{style:{paddingLeft:"17px"}},"Pack"),i.a.createElement("div",{style:{width:"".concat(e.stripWidth*g,"px"),height:"".concat(e.data.packHeight*g,"px"),backgroundColor:"#AAAAAA",backgroundImage:"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 20 20'%3E%3Cg %3E%3Cpolygon fill='%23777777' points='20 10 10 0 0 0 20 20'/%3E%3Cpolygon fill='%23777777' points='0 10 0 20 10 20'/%3E%3C/g%3E%3C/svg%3E\")"}},i.a.createElement("svg",{transform:"rotate(180)",width:e.stripWidth*g,height:e.data.packHeight*g,style:{border:"2px solid black"}},t.map((function(e){return i.a.createElement(m,{index:e.index,key:e.index,x:e.px,y:e.py,w:e.width,h:e.height})}))))))},x=a(65),y=a(69),v=a(68),b=a(66),k=a(67);function w(e){var t=Object.assign({},this.state),a=Object.assign(t,e);this.setState(a)}var C=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={solutions:e.solutions,selected:e.solutions[0]},a.onSelectedPackerChange=a.onSelectedPackerChange.bind(Object(h.a)(a)),a.updateState=w.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"onSelectedPackerChange",value:function(e){this.updateState({selected:e}),this.props.callback(e)}},{key:"componentDidUpdate",value:function(e){this.props.solutions!==e.solutions&&this.updateState({solutions:this.props.solutions,selected:this.props.solutions[0],efficency:0})}},{key:"render",value:function(){var e=this;return i.a.createElement(f.a,{style:{padding:"20px"}},i.a.createElement("h2",{style:{paddingLeft:"17px"}},"Packer"),i.a.createElement(x.a,{"aria-label":"simple table"},i.a.createElement(b.a,null,i.a.createElement(k.a,null,i.a.createElement(v.a,{size:"small"},"Packer Name"),i.a.createElement(v.a,{align:"right",size:"small"},"Price"),i.a.createElement(v.a,{align:"right",size:"small"},"Efficency"))),i.a.createElement(y.a,null,this.state.solutions.map((function(t){return i.a.createElement(k.a,{key:t.packerName,selected:e.state.selected.packerName===t.packerName,onClick:function(a){return e.onSelectedPackerChange(t)}},i.a.createElement(v.a,{component:"th",scope:"row"},t.packerName),i.a.createElement(v.a,{align:"right"},t.price),i.a.createElement(v.a,{align:"right"},t.efficency.toFixed(3)))})))))}}]),t}(i.a.Component);var S=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={file:"",content:"",elements:null,solutions:[],activeSolution:null},a.updateState=w.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){var n,i;null!==e.file&&this.props.file===e.file||(this.updateState({file:this.props.file}),n=this,i=this.props.file,fetch("http://localhost:4567/".concat(i)).then((function(e){return e.json().then((function(e){e.solutions=e.solutions.sort((function(e,t){return 10*e.efficency-10*t.efficency})),n.updateState({elements:e,solutions:e.solutions,activeSolution:e.solutions[0]})})).catch((function(e){return console.log(e)}))})))}},{key:"selectedPackerChanged",value:function(e){this.updateState({activeSolution:e})}},{key:"render",value:function(){var e=this;return null==this.state.elements?i.a.createElement("div",null,"No data"):i.a.createElement(d.a,{container:!0,direction:"row",spacing:1},i.a.createElement(d.a,{item:!0,xs:6},i.a.createElement(C,{solutions:this.state.elements.solutions,callback:function(t){return e.selectedPackerChanged(t)}})),i.a.createElement(d.a,{item:!0,xs:6},i.a.createElement(E,{stripWidth:this.state.elements.ctInput.stripWidth,data:this.state.activeSolution})))}}]),t}(i.a.Component),j=a(72),O=a(73),A=a(74),M=a(71),P=(Object(M.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={file:"",files:[]},a.componentDidUpdate(),a.onSelectedFileChange=a.onSelectedFileChange.bind(Object(h.a)(a)),a.updateState=w.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;0===this.state.files.length&&fetch("http://localhost:4567/").then((function(t){return t.json().then((function(t){return e.updateState({file:t[0],files:t})}))}))}},{key:"onSelectedFileChange",value:function(e){this.updateState({file:e})}},{key:"render",value:function(){var e=this;return i.a.createElement(d.a,{container:!0,direction:"row",style:{flexGrow:1},spacing:1},i.a.createElement(d.a,{item:!0,xs:2},i.a.createElement(f.a,{style:{padding:"20px"}},i.a.createElement("h2",{style:{paddingLeft:"17px"}},"Solutions"),i.a.createElement("h5",{style:{paddingTop:"17px",paddingLeft:"17px"}},"File Name"),i.a.createElement(j.a,null,this.state.files.map((function(t){return i.a.createElement(O.a,{button:!0,selected:e.state.file===t,onClick:function(a){return e.onSelectedFileChange(t)}},i.a.createElement(A.a,{primary:t}))}))))),i.a.createElement(d.a,{item:!0,xs:10},i.a.createElement(S,{file:this.state.file})))}}]),t}(i.a.Component));c.a.render(i.a.createElement(P,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.59acdca7.chunk.js.map