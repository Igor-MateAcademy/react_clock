(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),s=n(5),l=n(4),r=n(1),h=n.n(r),u=(n(12),n(0)),b=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={date:new Date},t.timerId=setInterval((function(){}),1e3),t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.setState({date:new Date}),console.log(t.state.date.toLocaleTimeString())}),1e3)}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.log("The Clock was renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){return Object(u.jsx)("span",{children:this.state.date.toLocaleTimeString()})}}]),n}(h.a.Component),d=(n(14),function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={isClockVisible:!0,clockName:0},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t.changeName=function(){t.setState({clockName:Math.floor(100*Math.random())})},t}return Object(i.a)(n,[{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)("h1",{children:"React clock"}),Object(u.jsx)("p",{children:this.state.isClockVisible?Object(u.jsx)(b,{name:this.state.clockName}):"Clock is hidden"}),Object(u.jsx)("button",{type:"button",className:"app__button",onClick:this.showClock,disabled:this.state.isClockVisible,children:"Show clock"}),Object(u.jsx)("button",{type:"button",className:"app__button",onClick:this.hideClock,disabled:!this.state.isClockVisible,children:"Hide clock"}),Object(u.jsx)("button",{type:"button",className:"app__button",onClick:this.changeName,children:"Set random name"})]})})}}]),n}(h.a.Component)),m=d;a.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5a2a5448.chunk.js.map