(this.webpackJsonpweek6_hotel=this.webpackJsonpweek6_hotel||[]).push([[0],{147:function(e,t,a){},150:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(16),c=a.n(i),r=a(25),l=a(24),m=a(29),s=a(30),d=a(35),u=a(31),h=a(34),v=a(69),g=a.n(v),p=a(70),E=a.n(p),f=a(71),_=a.n(f),k=a(72),y=a.n(k),b=a(73),N=a.n(b),x=a(74),D=a.n(x),w=a(75),C=a.n(w),S=a(76),I=a.n(S),M=a(77),B=a.n(M),O=a(78),T=a.n(O),j=a(79),z=a.n(j),F=a(80),U=a.n(F),R=a(81),H=a.n(R),A=a(82),P=a.n(A),W=a(83),G=a.n(W),V=a(84),K=a.n(V),L=a(85),X=a.n(L),Z=a(86),Y=a.n(Z),q={envelopeSolid:g.a,facebookSquareBrands:E.a,homeSolid:_.a,info_iconBar:y.a,info_iconBreakfast:N.a,info_iconBreeze:D.a,info_iconCrawlingBabySilhouette:C.a,info_iconDog:I.a,info_iconMountainRange:B.a,info_iconNoSmokeSymbol:T.a,info_iconPhone:z.a,info_iconRoom_service:U.a,info_iconTickInsideCircle:H.a,info_iconWifi:P.a,instagramBrands:G.a,logo_block:K.a,logo_white:X.a,phoneAltSolid:Y.a},J=a(154),$=a(155),Q=a(156),ee=function(e){var t=e.icon,a=e.type,n=e.text;return o.a.createElement("div",{className:"contact_info"},o.a.createElement("div",{className:"contact_icon"},o.a.createElement("img",{src:t,className:"",alt:a})),o.a.createElement("div",{className:"contact_text"},n))},te=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).coverBg=function(){var e=a.state,t=e.roomInfo,n=e.backgroundImageIndex;n<t.length-1?n++:n=0,a.setState({backgroundImageIndex:n,backgroundImage:"'".concat(t[n].imageUrl,"'")})},a.state={windowHeight:window.innerHeight,windowWidth:window.innerWidth,roomInfo:[],roomImg:["height_auto","width_auto","height_auto","height_auto","width_auto","height_auto"],backgroundImageIndex:0,backgroundImage:"",intervalId:""},window.onresize=function(){a.setState({windowHeight:window.innerHeight,windowWidth:window.innerWidth})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",{method:"GET",headers:{Authorization:"Bearer 2DFIVAEETX2rZO2kZlmRvKDbnxX91xRpzzGzIoxkT0T2FjTEUYBzynvVKSAP"}}).then((function(e){return e.json()})).then((function(t){e.setState({roomInfo:t.items});var a=setInterval(e.coverBg.bind(e),5e3);e.setState({intervalId:a})}))}},{key:"componentWillUnmount",value:function(){var e=this.state.intervalId;clearInterval(e)}},{key:"render",value:function(){var e=this.state,t=e.windowHeight,a=e.windowWidth,n=e.roomInfo,i=e.roomImg,c=e.backgroundImage,l=["\u55ae\u4eba\u623f","\u8c6a\u83ef\u55ae\u4eba\u623f","\u96d9\u4eba\u623f","\u8c6a\u83ef\u96d9\u4eba\u623f","\u56db\u4eba\u623f","\u8c6a\u83ef\u56db\u4eba\u623f"];return o.a.createElement("div",{id:"content"},o.a.createElement("div",{className:"cover",style:{height:a<768||t<650?"650px":"".concat(t,"px"),backgroundImage:"url(".concat(c,")")}}),o.a.createElement("div",{className:"main",style:{height:a<768||t<650?"650px":"".concat(t,"px")}},o.a.createElement(J.a,{style:{height:"100%"}},o.a.createElement($.a,{style:{height:"100%"}},o.a.createElement(Q.a,{style:{height:"100%"}},o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:q.logo_white,alt:"logo"})),o.a.createElement("div",{className:"hotel_info"},o.a.createElement("div",{className:"social_icon"},o.a.createElement("img",{src:q.instagramBrands,className:"",alt:"instagram"}),o.a.createElement("img",{src:q.facebookSquareBrands,className:"",alt:"facebook"})),o.a.createElement("div",{className:"contact"},o.a.createElement(ee,{icon:q.phoneAltSolid,type:"phone",text:"02-17264937"}),o.a.createElement(ee,{icon:q.envelopeSolid,type:"mail",text:"whitespace@whitespace.com.tw"}),o.a.createElement(ee,{icon:q.homeSolid,type:"address",text:"\u53f0\u5317\u5e02\u7f85\u65af\u798f\u8def\u5341\u6bb530\u865f"}))))))),o.a.createElement("div",{className:"items"},o.a.createElement(J.a,null,o.a.createElement($.a,null,n.map((function(e,t){return o.a.createElement(Q.a,{lg:4,sm:6,xs:12,key:e.id},o.a.createElement(r.b,{className:"room_block",to:"/room/".concat(e.id)},o.a.createElement("img",{className:"room_img ".concat(i[t]),src:e.imageUrl,alt:e.name}),o.a.createElement("div",{className:"room_info"},o.a.createElement("div",{className:"room_name"},e.name),o.a.createElement("div",{className:"room_name sub_text detail"},l[t]),o.a.createElement("div",{className:"normal_day_price detail"},o.a.createElement("span",{className:"price"},"NT.",e.normalDayPrice),o.a.createElement("span",{className:"weekday sub_text"},"\u5e73\u65e5")),o.a.createElement("div",{className:"holiday_price sub_text detail"},"NT.",e.holidayPrice," \u5047\u65e5"))))}))))))}}]),t}(n.Component),ae=a(62),ne=a(20),oe=a(158),ie=a(157),ce=a(50),re=a.n(ce),le=(a(103),function(e){var t=e.icon,a=e.text,n=e.type,i=e.roomDetail;return o.a.createElement("div",{className:"amenity_item ".concat(i.amenities[n]?"true":"false"),id:n},o.a.createElement("div",{className:"amenity_icon"},o.a.createElement("img",{src:t,alt:a})),o.a.createElement("div",{className:"amenity_text"},a))}),me=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={roomDetail:[],booking:[],imgModalUrl:"",roomImgModal:!1,reserveModal:!1,checkModal:!1,reserveName:"",reserveTel:"",startDate:new Date((new Date).setHours(0,0,0,0)),endDate:"",reserveLoad:!1,reserveSuccess:"",errorMsg:""},a.modalClick=a.modalClick.bind(Object(ne.a)(a)),a.imgModalUrlSet=a.imgModalUrlSet.bind(Object(ne.a)(a)),a.reserveHandleChange=a.reserveHandleChange.bind(Object(ne.a)(a)),a.startDateChange=a.startDateChange.bind(Object(ne.a)(a)),a.endDateChange=a.endDateChange.bind(Object(ne.a)(a)),a.roomReserve=a.roomReserve.bind(Object(ne.a)(a)),a.reserveReload=a.reserveReload.bind(Object(ne.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://challenge.thef2e.com/api/thef2e2019/stage6/room/".concat(this.props.match.params.roomId),{method:"GET",headers:{Authorization:"Bearer 2DFIVAEETX2rZO2kZlmRvKDbnxX91xRpzzGzIoxkT0T2FjTEUYBzynvVKSAP"}}).then((function(e){return e.json()})).then((function(t){e.setState({roomDetail:t.room[0],booking:t.booking})}))}},{key:"modalClick",value:function(e,t){this.setState(Object(ae.a)({},e,t))}},{key:"roomReserve",value:function(){var e=this,t=this.state,a=t.reserveName,n=t.reserveTel,o=t.startDate,i=t.endDate;this.setState({reserveName:"",reserveTel:"",startDate:new Date((new Date).setHours(0,0,0,0)),endDate:""});for(var c,r,l,m=[],s=new FormData,d=new Date(o.getTime());d<=i;d.setDate(d.getDate()+1))l=new Date(d).getFullYear()+"-"+((c=new Date(d).getMonth()+1)<10?"0":"")+c+"-"+((r=new Date(d).getDate())<10?"0":"")+r,m.push(l);s.append("name",a),s.append("tel",n);for(var u=0;u<=m.length-1;u++)s.append("date[".concat(u,"]"),m[u]);fetch("https://challenge.thef2e.com/api/thef2e2019/stage6/room/".concat(this.props.match.params.roomId),{method:"POST",body:s,headers:{Authorization:"Bearer 2DFIVAEETX2rZO2kZlmRvKDbnxX91xRpzzGzIoxkT0T2FjTEUYBzynvVKSAP",Accept:"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.log("Error:",e)})).then((function(t){t.success?e.setState({reserveLoad:!0,reserveSuccess:!0}):e.setState({reserveLoad:!0,reserveSuccess:!1,errorMsg:t.message}),console.log("Success:",t)}))}},{key:"imgModalUrlSet",value:function(e){this.setState({imgModalUrl:e})}},{key:"reserveHandleChange",value:function(e){this.setState(Object(ae.a)({},e.target.id,e.target.value))}},{key:"reserveReload",value:function(e){this.setState({reserveLoad:!1})}},{key:"startDateChange",value:function(e){this.setState({startDate:e})}},{key:"endDateChange",value:function(e){this.setState({endDate:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.roomDetail,n=t.imgModalUrl,i=t.roomImgModal,c=t.reserveModal,l=t.checkModal,m=t.reserveName,s=t.reserveTel,d=t.startDate,u=t.endDate,h=t.reserveLoad,v=t.reserveSuccess,g=t.errorMsg;return o.a.createElement("div",{id:"content"},a.imageUrl&&o.a.createElement("div",{className:"room_detail_img"},o.a.createElement(r.b,{className:"sub_logo",to:"/"},o.a.createElement("img",{src:q.logo_block,alt:"logo"})),o.a.createElement("div",{className:"img_bg"},o.a.createElement("div",{className:"img_item"},o.a.createElement("img",{onClick:function(){e.modalClick("roomImgModal",!0),e.imgModalUrlSet(a.imageUrl[0])},src:a.imageUrl[0],alt:""}))),o.a.createElement("div",{className:"img_sm"},o.a.createElement("div",{className:"img_item"},o.a.createElement("img",{onClick:function(){e.modalClick("roomImgModal",!0),e.imgModalUrlSet(a.imageUrl[1])},src:a.imageUrl[1],alt:""})),o.a.createElement("div",{className:"img_item"},o.a.createElement("img",{onClick:function(){e.modalClick("roomImgModal",!0),e.imgModalUrlSet(a.imageUrl[2])},src:a.imageUrl[2],alt:""})))),o.a.createElement("div",{className:"room_detail_info"},o.a.createElement(J.a,null,o.a.createElement($.a,null,o.a.createElement(Q.a,{lg:6,md:4,xs:10},a.descriptionShort&&a.checkInAndOut&&o.a.createElement("div",{className:"room_detail"},o.a.createElement("div",{className:"room_name",id:"room_name"},a.name),o.a.createElement("div",{className:"room_spec"},o.a.createElement("div",{className:"text",id:"guest_num"},"\u623f\u5ba2\u4eba\u6578\u9650\u5236\uff1a ",a.descriptionShort.GuestMin," ~ ",a.descriptionShort.GuestMax," \u4eba"),o.a.createElement("div",{className:"text",id:"bed_type"},"\u5e8a\u578b\uff1a",a.descriptionShort.Bed[0]),o.a.createElement("div",{className:"text",id:"bath_num"},"\u885b\u6d74\u6578\u91cf\uff1a ",a.descriptionShort["Private-Bath"]," \u9593"),o.a.createElement("div",{className:"text",id:"room_size"},"\u623f\u9593\u5927\u5c0f\uff1a ",a.descriptionShort.Footage," \u5e73\u65b9\u516c\u5c3a"),o.a.createElement("div",{className:"text",id:"description"},a.description),o.a.createElement("div",{className:"separation"},"\uff3c\uff3c\uff3c"),o.a.createElement("div",{className:"checkin check_time"},o.a.createElement("div",{className:"text"},"Check In"),o.a.createElement("div",{className:"time",id:"checkin_time"},a.checkInAndOut.checkInEarly,"\uff0d",a.checkInAndOut.checkInLate)),o.a.createElement("div",{className:"checkout check_time"},o.a.createElement("div",{className:"text"},"Check Out"),o.a.createElement("div",{className:"time",id:"checkout_time"},a.checkInAndOut.checkOut))),a.amenities&&o.a.createElement("div",{className:"room_amenities"},o.a.createElement(le,{icon:q.info_iconWifi,text:"Wi-Fi",type:"Wi-Fi",roomDetail:a}),o.a.createElement(le,{icon:q.info_iconBreakfast,text:"\u65e9\u9910",type:"Breakfast",roomDetail:a}),o.a.createElement(le,{icon:q.info_iconBar,text:"Mini-Bar",type:"Mini-Bar",roomDetail:a}),o.a.createElement(le,{icon:q.info_iconRoom_service,text:"Room-Service",type:"Room-Service",roomDetail:a}),o.a.createElement(le,{icon:q.info_iconPhone,text:"\u96fb\u8996",type:"Television",roomDetail:a}),o.a.createElement(le,{icon:q.info_iconBreeze,text:"\u7a7a\u8abf",type:"Air-Conditioner",roomDetail:a}),o.a.createElement(le,{icon:q.info_iconBreakfast,text:"\u51b0\u7bb1",type:"Refrigerator",roomDetail:a}),o.a.createElement(le,{icon:q.info_iconBreeze,text:"\u6c99\u767c",type:"Sofa",roomDetail:a}),o.a.createElement(le,{icon:q.info_iconMountainRange,text:"\u6f02\u4eae\u7684\u8996\u91ce",type:"Great-View",roomDetail:a}),o.a.createElement(le,{icon:q.info_iconNoSmokeSymbol,text:"\u7981\u6b62\u5438\u83f8",type:"Smoke-Free",roomDetail:a}),o.a.createElement(le,{icon:q.info_iconCrawlingBabySilhouette,text:"\u9069\u5408\u5152\u7ae5",type:"Child-Friendly",roomDetail:a}),o.a.createElement(le,{icon:q.info_iconDog,text:"\u5bf5\u7269\u651c\u5e36",type:"Pet-Friendly",roomDetail:a})))),o.a.createElement(Q.a,{lg:2,md:3,xs:2},o.a.createElement("div",{className:"room_price"},o.a.createElement("div",{className:"weekday date_price"},o.a.createElement("div",{className:"price",id:"weekday_price"},"NT.",a.normalDayPrice),o.a.createElement("div",{className:"date_type"},"\u5e73\u65e5(\u4e00~\u56db)")),o.a.createElement("div",{className:"holiday date_price"},o.a.createElement("div",{className:"price",id:"holiday_price"},"NT.",a.holidayPrice),o.a.createElement("div",{className:"date_type"},"\u5047\u65e5(\u4e94~\u65e5)")))),o.a.createElement(Q.a,{lg:4,md:5,xs:12},o.a.createElement("div",{className:"reserve_date"},o.a.createElement(re.a,{selected:this.state.startDate,inline:!0}),o.a.createElement("div",{className:"datepicker",id:"datepicker"}),o.a.createElement(oe.a,{className:"reserve",onClick:function(){return e.modalClick("reserveModal",!0)}},"\u9810\u7d04\u6642\u6bb5")))))),o.a.createElement(ie.a,{show:i,onHide:function(){return e.modalClick("roomImgModal",!1)},size:"lg",id:"roomImgModal"},o.a.createElement(ie.a.Header,{closeButton:!0},o.a.createElement(ie.a.Title,null)),o.a.createElement(ie.a.Body,null,o.a.createElement("div",{className:"img_modal",id:"img_modal"},o.a.createElement("img",{src:n,alt:"",style:{maxHeight:.8*window.innerHeight}}))),o.a.createElement(ie.a.Footer,null,o.a.createElement(oe.a,{variant:"secondary",onClick:function(){return e.modalClick("roomImgModal",!1)}},"Close"))),o.a.createElement(ie.a,{show:c,onHide:function(){return e.modalClick("reserveModal",!1)},size:"lg",id:"reserveModal"},o.a.createElement(ie.a.Header,{closeButton:!0},o.a.createElement(ie.a.Title,null,"\u9810\u7d04\u6642\u6bb5")),o.a.createElement(ie.a.Body,null,o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"name"},"\u59d3\u540d"),o.a.createElement("input",{type:"text",className:"form-control",id:"reserveName",value:m,onChange:this.reserveHandleChange})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"tel"},"\u96fb\u8a71"),o.a.createElement("input",{type:"text",className:"form-control",id:"reserveTel",value:s,onChange:this.reserveHandleChange})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"time_start"},"\u9810\u7d04\u8d77\u8a16"),o.a.createElement("div",{className:"inline"},o.a.createElement(re.a,{selected:d,id:"startDate",onChange:this.startDateChange,dateFormat:"yyyy-MM-dd",minDate:new Date,maxDate:u,customInput:o.a.createElement("input",{type:"text",className:"form-control"})}),o.a.createElement("label",{htmlFor:"time_end"},"~"),o.a.createElement(re.a,{selected:new Date(d.getTime()).setDate(new Date(d.getTime()).getDate()+1),id:"endDate",onChange:this.endDateChange,dateFormat:"yyyy-MM-dd",minDate:d,customInput:o.a.createElement("input",{type:"text",className:"form-control"})}))))),o.a.createElement(ie.a.Footer,null,o.a.createElement(oe.a,{variant:"secondary",onClick:function(){return e.modalClick("reserveModal",!1)}},"\u53d6\u6d88"),o.a.createElement(oe.a,{variant:"primary",onClick:function(){e.modalClick("reserveModal",!1),e.roomReserve(),e.modalClick("checkModal",!0)},id:"reserve_check"},"\u78ba\u5b9a\u9810\u7d04"))),o.a.createElement(ie.a,{show:l,onHide:function(){return e.modalClick("checkModal",!1)},size:"lg",id:"reserveCheckModal"},o.a.createElement(ie.a.Header,{closeButton:!0},o.a.createElement(ie.a.Title,null,h?v?"\u9810\u7d04\u6210\u529f":"\u9810\u7d04\u5931\u6557":"")),o.a.createElement(ie.a.Body,null,o.a.createElement("form",{style:{display:h?"block":"none"}},o.a.createElement("div",{id:"reserve_success",style:{display:v?"block":"none"}},o.a.createElement("img",{src:q.info_iconTickInsideCircle,alt:"\u9810\u7d04\u6210\u529f"})),o.a.createElement("div",{id:"reserve_error",style:{display:v?"none":"block"}},o.a.createElement("p",null,g)))),o.a.createElement(ie.a.Footer,null,o.a.createElement(oe.a,{variant:"primary",onClick:function(){e.modalClick("checkModal",!1),e.reserveReload()}},"\u56de\u9801\u9762"))))}}]),t}(n.Component),se=(a(147),a(148),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"main_container"},o.a.createElement(l.a,{path:"/",exact:!0,component:te}),o.a.createElement(l.a,{path:"/room/:roomId",component:me}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(r.a,null,o.a.createElement(l.c,null,o.a.createElement(se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},69:function(e,t,a){e.exports=a.p+"static/media/envelope-solid.475ad199.svg"},70:function(e,t,a){e.exports=a.p+"static/media/facebook-square-brands.7df7570f.svg"},71:function(e,t,a){e.exports=a.p+"static/media/home-solid.1600889c.svg"},72:function(e,t,a){e.exports=a.p+"static/media/info_icon-bar.92950803.svg"},73:function(e,t,a){e.exports=a.p+"static/media/info_icon-breakfast.c4c2c972.svg"},74:function(e,t,a){e.exports=a.p+"static/media/info_icon-breeze.410d1c42.svg"},75:function(e,t,a){e.exports=a.p+"static/media/info_icon-crawling-baby-silhouette.c76c9ad5.svg"},76:function(e,t,a){e.exports=a.p+"static/media/info_icon-dog.6a06afa1.svg"},77:function(e,t,a){e.exports=a.p+"static/media/info_icon-mountain-range.ad2b689a.svg"},78:function(e,t,a){e.exports=a.p+"static/media/info_icon-no-smoke-symbol.74436c49.svg"},79:function(e,t,a){e.exports=a.p+"static/media/info_icon-phone.16543ec9.svg"},80:function(e,t,a){e.exports=a.p+"static/media/info_icon-room_service.ef31df00.svg"},81:function(e,t,a){e.exports=a.p+"static/media/info_icon-tick-inside-circle.1874126e.svg"},82:function(e,t,a){e.exports=a.p+"static/media/info_icon-wifi.7e9c444b.svg"},83:function(e,t,a){e.exports=a.p+"static/media/instagram-brands.cc5e92b0.svg"},84:function(e,t,a){e.exports=a.p+"static/media/logo_block.d4ac2160.svg"},85:function(e,t,a){e.exports=a.p+"static/media/logo_white.2540fc08.svg"},86:function(e,t,a){e.exports=a.p+"static/media/phone-alt-solid.6dbf65e5.svg"},94:function(e,t,a){e.exports=a(150)}},[[94,1,2]]]);
//# sourceMappingURL=main.6e0851a9.chunk.js.map