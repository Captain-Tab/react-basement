(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(t,e,n){t.exports=n(41)},39:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),c=n(17),i=n.n(c),o=n(9),u=n(13),l=n(28),s=n(19);function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}var p={data:[]},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_AZURE_LIST":return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(n,!0).forEach(function(e){Object(s.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},t,{data:e.data});default:return t}};function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}var v={data:[]},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_DATADOG_LIST":return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(n,!0).forEach(function(e){Object(s.a)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},t,{data:e.data});default:return t}},b=Object(o.c)({azureList:f,datadogList:h}),O=n(10),g=n(11),j=n(14),y=n(12),E=n(15),L=(n(39),n(20)),w=n(8),D=function(t){function e(){var t,n;Object(O.a)(this,e);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(j.a)(this,(t=Object(y.a)(e)).call.apply(t,[this].concat(a)))).fetchListData=function(){n.props.getAzureList()},n}return Object(E.a)(e,t),Object(g.a)(e,[{key:"componentDidMount",value:function(){this.props.getAzureList(),this.timerId=setInterval(this.fetchListData,6e5)}},{key:"componentWillMount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.props.azureList;return console.log(t),a.a.createElement("div",null,a.a.createElement("h2",null,"Services list and their statuses"),t.length&&t.map(function(t,e){return a.a.createElement("div",{key:e,style:{border:"1px solid #ccc",padding:"20px"}},a.a.createElement("div",null,"name: ",t.name),a.a.createElement("div",null,"status: ",t.status?"\u2714\ufe0f":"X"),a.a.createElement("div",null,"description: ",t.description))}))}}]),e}(r.Component),k=Object(u.b)(function(t){return{azureList:t.azureList.data}},function(t){return{getAzureList:function(){return t(function(t){return fetch("/mock/azure-list.json").then(function(t){return t.json()}).then(function(e){e&&t({type:"GET_AZURE_LIST",data:e})})})}}})(D),A=function(t){function e(){var t,n;Object(O.a)(this,e);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(j.a)(this,(t=Object(y.a)(e)).call.apply(t,[this].concat(a)))).fetchListData=function(){n.props.getDatadogList()},n}return Object(E.a)(e,t),Object(g.a)(e,[{key:"componentDidMount",value:function(){this.props.getDatadogList(),this.timerId=setInterval(this.fetchListData,6e5)}},{key:"componentWillMount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.props.datadogList;return console.log(t),a.a.createElement("div",null,a.a.createElement("h2",null,"List the five most recent service incidents"),t.length&&t.map(function(t,e){return a.a.createElement("div",{key:e,style:{border:"1px solid #ccc",padding:"20px"}},a.a.createElement("div",null,"name: ",t.name),a.a.createElement("div",null,"time: ",t.time),a.a.createElement("div",null,"description: ",t.description))}))}}]),e}(r.Component),P=Object(u.b)(function(t){return{datadogList:t.datadogList.data}},function(t){return{getDatadogList:function(){return t(function(t){return fetch("/mock/data-dog.json").then(function(t){return t.json()}).then(function(e){e&&t({type:"GET_DATADOG_LIST",data:e})})})}}})(A),I=function(t){function e(t){var n;return Object(O.a)(this,e),(n=Object(j.a)(this,Object(y.a)(e).call(this,t))).state={isActive:!0},n}return Object(E.a)(e,t),Object(g.a)(e,[{key:"render",value:function(){var t=this,e=this.state.isActive;return a.a.createElement(L.a,null,a.a.createElement("div",{className:"layout"},a.a.createElement("div",{className:"silder"},a.a.createElement("ul",null,a.a.createElement("li",{className:e?"active":"no-active",onClick:function(){return t.setState({isActive:!e})}},a.a.createElement(L.b,{to:"/azure"},"Azure")),a.a.createElement("li",{className:e?"no-active":"active",onClick:function(){return t.setState({isActive:!e})}},a.a.createElement(L.b,{to:"/datadog"},"Datadog")))),a.a.createElement("div",{className:"content"},a.a.createElement(w.c,null,a.a.createElement(w.a,{exact:!0,path:"/azure",component:k}),a.a.createElement(w.a,{exact:!0,path:"/datadog",component:P})))))}}]),e}(a.a.Component),z=Object(o.d)(b,Object(o.a)(l.a));i.a.render(a.a.createElement(u.a,{store:z},a.a.createElement(I,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.3b3e2044.chunk.js.map