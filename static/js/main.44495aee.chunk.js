(this.webpackJsonptravelguide=this.webpackJsonptravelguide||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(6),s=t.n(r),l=(t(12),t(1)),o=t(2),c=t(4),h=t(3),d=[{id:1,name:"Dhaka",src:"Dhaka.jfif",details:"Dhaka, also spelled Dacca, city and capital of Bangladesh. It is located just north of the Buriganga River, a channel of the Dhaleswari River, in the south-central part of the country. Dhaka is Bangladesh\u2019s most populous city and is one of the largest metropolises in South Asia."},{id:2,name:"Chittagong",src:"chittagong.jfif",details:"Chittagong, officially called Chattogram, city that is the chief Indian Ocean port of Bangladesh. It lies about 12 miles (19 km) north of the mouth of the Karnaphuli River, in the southeastern arm of the country. Chittagong is the second largest city in Bangladesh, after Dhaka."},{id:3,name:"Sylhet",src:"sylhet.jfif",details:"Sylhet, originally Srihatta, city, northeastern Bangladesh. It lies along the right bank of the Surma River.The most important town in the Surma River valley, it is connected by road and rail with Comilla, Chhatak, and Habiganj, by road with the states of Assam and Meghalaya (both in India)."},{id:4,name:"Khulna",src:"khulna.jfif",details:"Khulna, city, southwestern Bangladesh. It lies along the Bhairab River in the south-central Padma (Ganges [Ganga])\u2013Jamuna (Brahmaputra) delta.An important river port and produce-collection and trade centre, it is connected by riverboat, road, and rail to the major cities of the region."},{id:5,name:"Rajshahi",src:"rajshahi.jpg",details:"Rajshahi, formerly Rampur Boalia, city, west-central Bangladesh. It lies just north of the upper Padma River (Ganges [Ganga] River) and of the border with West Bengal state in India.Rajshahi was selected by the Dutch in the early 18th century as the site of a factory (trading post) and was constituted a municipali."},{id:6,name:"Barisal",src:"barisal.jpg",details:"Barisal, officially called Barishal, city, south-central Bangladesh. It lies in the delta of the Padma (Ganges [Ganga]) and Jamuna (Brahmaputra) rivers on the Kirtonkhola, an offshoot of the Arial Khan River.Incorporated as a municipality in 1876, it is a trade centre, most notably for rice, jute, and fish."},{id:7,name:"Rangpur",src:"rangpur.jpg",details:"Rangpur District (rangpur division) area 2370.45 sq km, located in between 25\xb018' and 25\xb057' north latitudes and in between 88\xb056' and 89\xb032' east longitudes. It is bounded by nilphamari and lalmonirhat districts on the north, gaibandha district on the south, kurigram district on the east and dinajpur district on the west."},{id:8,name:"Mymensingh",src:"mymensingh.jpg",details:"Mymensingh, formerly Nasirabad, city, north-central Bangladesh. It lies on the north bank of the Old Brahmaputra River.Once known for its glass-bangle manufacture, it now has textile and steel mills. It was incorporated as a municipality in 1869."}],m=(t(13),function(e){Object(c.a)(t,e);var a=Object(h.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return this.props.show?i.a.createElement("div",{className:"backdropstyle"},i.a.createElement("div",{className:"modalstyle"},i.a.createElement("div",null,this.props.children),i.a.createElement("div",null,i.a.createElement("h1",null,this.props.name)),i.a.createElement("div",null,i.a.createElement("img",{src:this.props.src,alt:"division"})),i.a.createElement("div",{className:"tl"},i.a.createElement("p",null,this.props.details)),i.a.createElement("div",{className:"footer"},i.a.createElement("button",{className:"button",onClick:this.props.onClose},"Close")))):null}}]),t}(i.a.Component)),u=function(e){Object(c.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).toggleModal=function(){n.setState({isOpen:!n.state.isOpen})},n.state={isOpen:!1},n}return Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Button"},i.a.createElement("button",{onClick:this.toggleModal,className:" tc grow bg-red br3 white"},"Explore"),i.a.createElement(m,{show:this.state.isOpen,onClose:this.toggleModal,name:this.props.name,src:this.props.src,details:this.props.details}))}}]),t}(i.a.Component),p=function(e){e.id;var a=e.name,t=e.src,n=e.details;return i.a.createElement("div",{className:"tc w-30 bg-white dib br3 pa3 ma2 bw2 shadow-5"},i.a.createElement("img",{src:t,alt:"place"}),i.a.createElement("div",null,i.a.createElement("h2",null,a),i.a.createElement(u,{name:a,src:t,details:n})))},g=function(e){var a=e.place;return i.a.createElement("div",null,a.map((function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,{key:t,id:a[t].id,name:a[t].name,src:a[t].src,details:a[t].details}))})))},f=(t(14),function(e){Object(c.a)(t,e);var a=Object(h.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).toggleModal=function(){e.setState({isOpen:!e.state.isOpen})},e.state={place:d,isOpen:!1},e}return Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"pa1"},i.a.createElement("h1",{className:"f1 tc"}," Travel guide "),i.a.createElement("div",{className:"container"},i.a.createElement("img",{src:"bangladesh.jpg",alt:"bangladesh"})),i.a.createElement("div",{className:"centered"},"Bangladesh"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("h1",{className:"f2 tc"}," Tourist Places "),i.a.createElement(g,{place:this.state.place}))}}]),t}(n.Component));t(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.44495aee.chunk.js.map