(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{71:function(e,t,a){e.exports=a(83)},83:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(12),l=a.n(r),s=a(116),i=a(115),c=a(7),m=a(113),d=a(110),f=a(117),u=a(104),h=a(106),g=a(107),p=a(120),y=a(111),k=a(112),O=a(27),b=a(59),E=a.n(b),N=a(57),x=a.n(N),v=a(58),C=a.n(v),w=a(108),j=a(119),S=a(118),P=a(109),A=Object(u.a)((function(e){return{tile:{display:"block",cursor:"pointer"},modalImageContainer:{display:"flex",flexDirection:"column",width:"fit-content",margin:"0 auto",outline:"0"},modalImage:{display:"flex",maxHeight:"80vh",maxWidth:"95vw",boxShadow:"0 0 25px rgba(0, 0, 0, .8)"},imageNav:{marginTop:e.spacing(3),display:"flex",justifyContent:"center",color:"white !important",fontSize:"16"}}})),D=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","8.jpg","9.jpg","10.jpg"];function I(){var e=A(),t=Object(h.a)(),a=Object(g.a)(t.breakpoints.down("sm")),r=Object(n.useState)(null),l=Object(O.a)(r,2),s=l[0],i=l[1],c=Object(n.useCallback)((function(e){return function(){i(e)}}),[i]),m=Object(n.useCallback)((function(){return i(null)}),[i]),d=Object(n.useCallback)((function(){var e=s-1;e<0&&(e=D.length-1),console.log(e),i(e)}),[i,s]),u=Object(n.useCallback)((function(){var e=s+1;e===D.length&&(e=0),console.log(e),i(e)}),[i,s]),p=Object(n.useCallback)((function(e){37===e.keyCode?d():39===e.keyCode&&u()}),[d,u]);return o.a.createElement(f.a,{my:4},o.a.createElement(w.a,{cellHeight:240,cols:a?2:3},D.map((function(t,a){return o.a.createElement(j.a,{key:t,onKeyDown:p},o.a.createElement("img",{src:"/images/".concat(t),onClick:c(a),className:e.tile}),o.a.createElement(S.a,{open:s===a,onClose:m,BackdropProps:{style:{backgroundColor:"rgba(0,0,0,.7)"}},style:{display:"flex",justifyContent:"center",alignItems:"center"}},o.a.createElement(f.a,{className:e.modalImageContainer},o.a.createElement("img",{src:"/images/".concat(t),className:e.modalImage}),o.a.createElement(f.a,{className:e.imageNav},o.a.createElement(P.a,{color:"inherit",onClick:d},o.a.createElement(x.a,{style:{fontSize:40}})),o.a.createElement(P.a,{color:"inherit",onClick:m},o.a.createElement(C.a,{style:{fontSize:40}})),o.a.createElement(P.a,{color:"inherit",onClick:u},o.a.createElement(E.a,{style:{fontSize:40}})," ")))))}))))}var F=a(21),M=a(61),z=[{xOffset:0,yOffset:-30,name:"Columbus",coordinates:[-83.1309115,39.9828671]},{stateName:"South Dakota",markerOffset:-45,name:"Rapid City, SD",date:"July 19th",coordinates:[-103.3226626,44.0696281]},{stateName:"South Dakota",xOffset:0,yOffset:20,name:"Badlands Natl. Park",date:"July 19th",coordinates:[-102.332787,43.90781]},{stateName:"South Dakota",xOffset:0,yOffset:-30,name:"Wind Cave Natl. Park",date:"July 20th",coordinates:[-103.441269,43.586269]},{stateName:"Montana",xOffset:0,yOffset:-30,name:"Glacier Natl. Park",date:"July 21st - 23rd",coordinates:[-113.787025,48.759613]},{stateName:"Washington",xOffset:40,yOffset:-40,name:"North Cascades Natl. Park",date:"July 24th - 26th",coordinates:[-121.7061146,48.7168353]},{stateName:"Washington",xOffset:47,yOffset:-8,name:"Seattle, WA",date:"July 27th- 28th",coordinates:[-122.3492774,47.4205063]},{stateName:"Washington",xOffset:10,yOffset:-34,name:"Oympic Natl. Park",date:"July 29th",coordinates:[-124.2005992,47.785354]},{stateName:"Washington",xOffset:10,yOffset:10,name:"Mt. Rainier Natl Park",date:"July 30th",coordinates:[-120.8951016,46.6602347]},{stateName:"Oregon",xOffset:20,yOffset:-30,name:"Crater Lake Natl. Park",date:"July 31st",coordinates:[-122.4157377,42.936009]},{stateName:"California",xOffset:80,yOffset:-8,name:"Redwoods Natl. Park",date:"August 1st",coordinates:[-124.003075,41.4358682]},{stateName:"California",xOffset:98,yOffset:-8,name:"Lassen Volcanic Natl. Park",date:"August 2nd",coordinates:[-121.5502994,40.497139]},{stateName:"Nevada",xOffset:0,yOffset:10,name:"Reno, NV",date:"August 2nd - 3rd",coordinates:[-119.9609246,39.5439891]},{stateName:"Nevada",xOffset:0,yOffset:12,name:"Great Basin Natl. Park",date:"August 3rd",coordinates:[-114.389047,38.9388506]},{stateName:"Utah",xOffset:0,yOffset:10,name:"Capitol Reef Natl. Park",date:"August 4th",coordinates:[-111.8290461,38.2634343]},{stateName:"Utah",xOffset:0,yOffset:10,name:"Moab, UT",date:"August 5th - 6th",coordinates:[-109.5843564,38.5744598]},{stateName:"Utah",xOffset:0,yOffset:10,name:"Arches Natl. Park",date:"August 5th",coordinates:[-109.5732878,38.715403]},{xOffset:0,yOffset:10,name:"Canyonlands Natl. Park",date:"August 6th",coordinates:[-110.4253091,38.2267]},{stateName:"Colorado",xOffset:0,yOffset:10,name:"Mesa Verde Natl. Park",date:"August 7th",coordinates:[-108.5898716,37.2381218]},{stateName:"Colorado",xOffset:0,yOffset:10,name:"Great Sand Dunes Natl. Park",date:"August 8th",coordinates:[-105.7317561,37.7537895]},{stateName:"Colorado",xOffset:0,yOffset:10,name:"Boulder, CO",date:"August 9th - 10th",coordinates:[-105.3100172,40.0294203]},{stateName:"Colorado",xOffset:0,yOffset:10,name:"Rocky Mountain Natl. Park",date:"August 10th",coordinates:[-105.9510673,40.3414785]},{stateName:"Missouri",xOffset:0,yOffset:10,name:"St. Louis, MO",date:"August 11th",coordinates:[-90.3760667,38.6442947]},{hideMarker:!0,xOffset:0,yOffset:-30,name:"Columbus",coordinates:[-83.1309115,39.9828671]}];function H(){var e,t=Object(n.useState)(null),a=Object(O.a)(t,2),r=a[0],l=a[1],s=Object(n.useCallback)((function(e){return function(t){l(e)}}),[l]);return o.a.createElement(f.a,{mt:8},o.a.createElement(d.a,{variant:"h4",style:{textAlign:"center"}},"Honeymoon Route"),o.a.createElement(f.a,{mt:4},o.a.createElement(d.a,null,o.a.createElement("em",null,"Hover or click on a state to see the stops in the state."))),o.a.createElement(f.a,{style:{cursor:"move"}},o.a.createElement(F.ComposableMap,{projection:"geoAlbers","data-tip":""},o.a.createElement(F.ZoomableGroup,null,o.a.createElement(F.Geographies,{geography:"https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json"},(function(e){return e.geographies.map((function(e){return o.a.createElement(F.Geography,{key:e.rsmKey,geography:e,fill:"#DDD",stroke:"#FFF",onMouseOver:s(e.properties.name),onClick:s(e.properties.name),style:{default:{fill:"#D6D6DA",outline:"none"},hover:{fill:"#F53",outline:"none"},pressed:{fill:"#E42",outline:"none"}}})}))})),z.map((function(t,a){var r=t.name,l=t.coordinates,s=(t.xOffset,t.yOffset,t.hideMarker),i=o.a.createElement(n.Fragment,{key:"".concat(r,"-").concat(a)},!s&&o.a.createElement(F.Marker,{coordinates:l},o.a.createElement("g",{fill:"none",stroke:"#FF8866",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.a.createElement("circle",{r:4,fill:"#FF8866"}))),e&&o.a.createElement(F.Line,{from:e,to:l,stroke:"#FF886666",strokeWidth:2,strokeDasharray:"5 10",strokeLinecap:"round"}));return e=l,i}))))),z.find((function(e){return e.stateName===r}))&&o.a.createElement(M.a,null,o.a.createElement(f.a,{style:{fontSize:18}},r,z.filter((function(e){return e.stateName===r})).map((function(e){return o.a.createElement("p",null,e.name," - ",e.date)})))))}var W=Object(u.a)((function(e){var t;return{header:(t={position:"relative",backgroundImage:"url('/images/header.jpg')",backgroundSize:"cover",backgroundPositionY:"bottom",width:"100vw",height:"40vw",minHeight:300,marginTop:40,display:"flex",alignItems:"center",flexDirection:"column",zIndex:1,color:e.palette.background.default,backgroundColor:e.palette.background.default,textShadow:"0 0 10px rgba(0,0,0,.8)"},Object(c.a)(t,e.breakpoints.down("sm"),{minHeight:"40vh",height:"auto"}),Object(c.a)(t,"&:before",{content:"''",position:"absolute",display:"block",height:"100%",width:"100%",zIndex:1,background:"#6D313630"}),t),appbar:{zIndex:5,backgroundColor:e.palette.background.default,color:"black"},title:{textShadow:"none",fontSize:"26px",fontWeight:400},toolbar:{letterSpacing:1.5,display:"flex",justifyContent:"space-between"},headerButton:{fontWeight:"bold",letterSpacing:2.25,textShadow:"none"},heading:{textAlign:"center",margin:e.spacing(12,8),zIndex:2,fontSize:48},story:{borderTop:"1px solid",borderBottom:"1px solid",borderColor:e.palette.text.primary,padding:e.spacing(5,0),"& h5":{textIndent:e.spacing(4)}}}}));var B=a(60),J=a(114),R=Object(B.a)({palette:{primary:{main:"#44874B"},secondary:{main:"#6C91C2"},error:{main:"#93323A"},background:{default:J.a[50]}},typography:{fontSize:14,fontFamily:["Raleway","sans-serif"]}});l.a.render(o.a.createElement(i.a,{theme:R},o.a.createElement(s.a,null),o.a.createElement((function(){var e=W(),t=Object(h.a)(),a=Object(g.a)(t.breakpoints.down("sm"));return o.a.createElement(f.a,{mb:20},o.a.createElement("header",{className:e.header},o.a.createElement(p.a,{className:e.appbar},o.a.createElement(y.a,{className:e.toolbar},o.a.createElement(d.a,{className:e.title},a?"E&K":"EMILY & KEVIN"),o.a.createElement(f.a,null,o.a.createElement(k.a,{className:e.headerButton,href:"https://www.myregistry.com/wedding-registry/Emily-Yocum-and-Kevin-Holland-Hilliard-OH/2210195",target:"_blank"},"REGISTRY"),o.a.createElement(k.a,{className:e.headerButton,href:"#honeymoon"},"HONEYMOON")))),o.a.createElement(d.a,{className:e.heading},"Emily & Kevin are getting married!")),o.a.createElement(m.a,{maxWidth:"md"},o.a.createElement(f.a,{my:10,className:e.story},o.a.createElement(d.a,{variant:"h5",style:{lineHeight:1.5}},"In the Fall of 2014, ",o.a.createElement("strong",null,"Kevin")," was in search of soccer players for his indoor team while he was in college at ",o.a.createElement("em",null,"Capital University")," - where he met ",o.a.createElement("strong",null,"Emily")," and asked her to join. Since playing on the same co-ed soccer team, they have become cat and dog parents, purchased their first home, and traveled the country together. They instantly connected over a shared appreciation for nature and outdoor activities and so, Kevin ",o.a.createElement("strong",null,"proposed")," on a trip to the Southwest in ",o.a.createElement("em",null,"Zion National Park")," as they hiked ",o.a.createElement("em",null,"The Narrows"),"."),o.a.createElement(d.a,{variant:"h5",style:{lineHeight:1.5,marginTop:"1em"}},"The state of ",o.a.createElement("em",null,"Montana")," has been a long-time favorite place of Emily\u2019s. She took Kevin a year after they started dating and he quickly fell in love with the Big Sky Country on a backpacking trip in ",o.a.createElement("em",null,"Glacier National Park"),". Both knew they wanted a small intimate wedding, and a small resort just outside the park offered them that. Their ceremony will be held outside, with the tall peaks of ",o.a.createElement("em",null,"Glacier National Park")," rising in the background. For their honeymoon, they plan to drive across the country and visit 16 national parks and 9 states, in a trip over 7,000 miles long. You can follow their travels below!")),o.a.createElement(I,null),o.a.createElement(d.a,null,"Pictures by ",o.a.createElement("a",{href:"https://www.erikaflugge.com/",target:"_blank"},"Erika Flugge Photography.")),o.a.createElement("div",{id:"honeymoon"}),o.a.createElement(H,null)))}),null)),document.querySelector("#root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.2f5abda4.chunk.js.map