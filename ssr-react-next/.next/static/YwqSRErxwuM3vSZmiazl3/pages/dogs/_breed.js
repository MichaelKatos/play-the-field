(window.webpackJsonp=window.webpackJsonp||[]).push([["33ed"],{mAMF:function(e,t,n){"use strict";n.r(t);var a=n("ln6h"),r=n.n(a),i=n("O40h"),u=n("0iUn"),s=n("MI3g"),c=n("a7VT"),o=n("AT/M"),d=n("sLSF"),l=n("Tit0"),f=n("q1tI"),h=n.n(f),p=n("vDqi"),b=n.n(p),m=n("X+Rt"),g=function(e){function t(e){var n;return Object(u.default)(this,t),(n=Object(s.default)(this,Object(c.default)(t).call(this,e))).state={loading:!0,meta:{},dogs:[]},n.fetchData=n.fetchData.bind(Object(o.default)(n)),n}return Object(l.default)(t,e),Object(d.default)(t,null,[{key:"getInitialProps",value:function(e){return{breed:e.query.breed}}}]),Object(d.default)(t,[{key:"componentDidMount",value:function(){var e=Object(i.default)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchData();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchData",value:function(){var e=Object(i.default)(r.a.mark(function e(){var t,n,a,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),t=new RegExp(this.props.breed,"g"),e.next=4,b.a.get("https://api.thedogapi.com/v1/images/search?size=thumb&has_breeds=true&limit=50");case 4:n=e.sent,a=n.data,i=a.filter(function(e){return e.breeds[0].name.toLowerCase().match(t)}),this.setState({dogs:i,breed:this.props.breed,meta:{title:"Only ".concat(this.props.breed," here!"),description:"Cute doggies. :D"},loading:!1});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderDogList",value:function(){return h.a.createElement("ul",null,this.state.dogs.map(function(e,t){return h.a.createElement("li",{key:t},h.a.createElement("img",{src:e.url,alt:""}))}))}},{key:"render",value:function(){return h.a.createElement(m.a,{meta:this.state.meta},h.a.createElement("div",null,h.a.createElement("h1",null,"Dog breed: ",this.props.breed),this.renderDogList()))}}]),t}(h.a.Component);t.default=g},zPCs:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dogs/_breed",function(){var e=n("mAMF");return{page:e.default||e}}])}},[["zPCs","5d41","9da1"]]]);