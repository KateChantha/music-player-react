(this["webpackJsonpmusic-palyer-react"]=this["webpackJsonpmusic-palyer-react"]||[]).push([[0],{19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),r=n.n(a),i=n(12),s=n.n(i),o=n(4),l=n.n(o),u=n(6),d=n(3),p=n(8),b=(n(19),n(27));var j=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(b.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(b.a)(),active:!1},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(b.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(b.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(b.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(b.a)(),active:!1}]},h=n(7),f=n(5),g=function(e){var t=e.audioRef,n=e.currentSong,r=e.setCurrentSong,i=e.isPlaying,s=e.setIsPlaying,o=e.songInfo,p=e.setSongInfo,b=e.songs,j=e.setSongs;Object(a.useEffect)((function(){var e=b.map((function(e){return e.id===n.id?Object(d.a)(Object(d.a)({},e),{},{active:!0}):Object(d.a)(Object(d.a)({},e),{},{active:!1})}));j(e)}),[n]);var g=function(){var e=Object(u.a)(l.a.mark((function e(c){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=b.findIndex((function(e){return e.id===n.id}))||0,"skip-forward"!==c){e.next=4;break}return e.next=4,r(b[(a+1)%b.length]);case 4:if("skip-back"!==c){e.next=12;break}if(!((a-1)%b.length<0)){e.next=10;break}return e.next=8,r(b[b.length-1]);case 8:return i&&t.current.play(),e.abrupt("return");case 10:return e.next=12,r(b[(a-1)%b.length]);case 12:i&&t.current.play();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},v={transform:"translateX(".concat(o.animationPercentage,"%)")},O={background:"linear-gradient(to right, ".concat(n.color[0],",").concat(n.color[1],")")};return Object(c.jsxs)("div",{className:"player",children:[Object(c.jsxs)("div",{className:"time-control",children:[Object(c.jsx)("p",{children:m(o.currentTime)}),Object(c.jsxs)("div",{style:O,className:"track",children:[Object(c.jsx)("input",{type:"range",min:0,max:o.duration||0,value:o.currentTime,onChange:function(e){t.current.currentTime=e.target.value,p(Object(d.a)(Object(d.a)({},o),{},{currentTime:e.target.value}))}}),Object(c.jsx)("div",{style:v,className:"animate-track"})]}),Object(c.jsx)("p",{children:o.duration?m(o.duration):"0:00"})]}),Object(c.jsxs)("div",{className:"play-control",children:[Object(c.jsx)(h.a,{onClick:function(){return g("skip-back")},className:"skip-back",size:"2x",icon:f.a}),Object(c.jsx)(h.a,{onClick:function(){i?(t.current.pause(),s(!i)):(t.current.play(),s(!i))},className:"play",size:"2x",icon:i?f.d:f.e}),Object(c.jsx)(h.a,{onClick:function(){return g("skip-forward")},className:"skip-forward",size:"2x",icon:f.b})]})]})},m=function(e){var t=e.currentSong,n=e.isPlaying,a=t.cover,r=t.name,i=t.artist;return Object(c.jsxs)("div",{className:"song-container",children:[Object(c.jsx)("img",{className:n?"song-playing":"",src:a,alt:r}),Object(c.jsx)("h2",{children:r}),Object(c.jsx)("h3",{children:i})]})},v=function(e){var t=e.audioRef,n=e.isPlaying,a=(e.songs,e.setSongs,e.song),r=e.setCurrentSong,i=a.cover,s=a.name,o=a.artist,d=(a.id,a.active),p=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(a);case 2:n&&t.current.play();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{onClick:p,className:"library-song ".concat(d?"selected":""),children:[Object(c.jsx)("img",{src:i,alt:s}),Object(c.jsxs)("div",{className:"song-description",children:[Object(c.jsx)("h3",{children:s}),Object(c.jsx)("h4",{children:o})]})]})},O=function(e){var t=e.audioRef,n=e.isPlaying,a=e.songs,r=e.setSongs,i=e.setCurrentSong,s=e.libraryStatus;return Object(c.jsxs)("div",{className:"library ".concat(s?"active-library":""),children:[Object(c.jsx)("h2",{children:"Song Library"}),Object(c.jsx)("div",{className:"library-songs",children:a.map((function(e){return Object(c.jsx)(v,{audioRef:t,isPlaying:n,songs:a,setSongs:r,song:e,setCurrentSong:i},e.id)}))})]})},x=function(e){var t=e.libraryStatus,n=e.setLibraryStatus;return Object(c.jsx)("nav",{children:Object(c.jsxs)("button",{onClick:function(){return n(!t)},children:[Object(c.jsx)(h.a,{icon:f.c}),"Library"]})})};var y=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(j()),n=Object(p.a)(t,2),r=n[0],i=n[1],s=Object(a.useState)(r[0]),o=Object(p.a)(s,2),b=o[0],h=o[1],f=Object(a.useState)(!1),v=Object(p.a)(f,2),y=v[0],S=v[1],k=Object(a.useState)({currentTime:0,duration:0,animationPercentage:0}),w=Object(p.a)(k,2),C=w[0],N=w[1],P=Object(a.useState)(!1),I=Object(p.a)(P,2),T=I[0],A=I[1],R=function(e){var t=e.target.currentTime,n=e.target.duration,c=Math.round(t/n*100);N(Object(d.a)(Object(d.a)({},C),{},{currentTime:t,duration:n,animationPercentage:c}))},E=function(){var t=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.findIndex((function(e){return e.id===b.id}))||0,t.next=3,h(r[(n+1)%r.length]);case 3:y&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),L=b.cover,M={width:"100%",backgroundImage:"url(".concat(L,")"),backgroundSize:"cover",position:"center"};return Object(c.jsxs)("div",{className:"App ".concat(T?"library-active":""),children:[Object(c.jsxs)("section",{className:"outer-display",style:M,children:[Object(c.jsx)(x,{libraryStatus:T,setLibraryStatus:A}),Object(c.jsxs)("section",{className:"inner-display",children:[Object(c.jsx)(m,{currentSong:b,isPlaying:y}),Object(c.jsx)(g,{audioRef:e,currentSong:b,setCurrentSong:h,isPlaying:y,setIsPlaying:S,songInfo:C,setSongInfo:N,songs:r,setSongs:i})]})]}),Object(c.jsx)(O,{audioRef:e,isPlaying:y,songs:r,setSongs:i,setCurrentSong:h,libraryStatus:T}),Object(c.jsx)("audio",{onTimeUpdate:R,onLoadedMetadata:R,onEnded:E,ref:e,src:b.audio})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.5fd1ecec.chunk.js.map