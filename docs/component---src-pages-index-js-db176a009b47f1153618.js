(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),o=a(0),r=a.n(o),l=a(145),d=a(146),s=a(150),c=a(148),m=(a(74),a(55),a(36),a(169),a(156)),p=a(171),h=a.n(p),u=a(172),g=a.n(u),f=l.a.div.withConfig({displayName:"logo__Container",componentId:"meozua-0"})(["width:100%;height:100%;overflow:hidden;"]),w=function(e){function t(t){var a;return(a=e.call(this,t)||this).container=r.a.createRef(),a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.setupScene(this.container.current),this.updateSceneSize(),this.sceneFramePassed(),Object.keys(this.cubes).forEach(function(t){Object.keys(e.cubes[t]).forEach(function(a){e.scaleCube(e.cubes[t][a].el,2e3+1e3*Math.random())})}),window.addEventListener("resize",this.updateSceneSize.bind(this))},a.componentWillUnmount=function(){window.removeEventListener("resize",this.updateSceneSize.bind(this))},a.setupScene=function(e){var t=e.offsetWidth,a=e.offsetHeight,n=new m.Scene;n.background=new m.Color(16776960);var i=new m.PerspectiveCamera(50,t/a,.1,1e3);i.position.x=7,i.position.y=13,i.position.z=14,i.lookAt(n.position);var o=new m.DirectionalLight(16777215,1);o.position.set(100,350,250),o.castShadow=!0,n.add(o);var r=new m.WebGLRenderer;r.setSize(t,a),r.setPixelRatio(window.devicePixelRatio),e.appendChild(r.domElement);var l=new h.a(i,r.domElement);l.enableZoom=!1;for(var d={},s=-4;s<=4;s++){d[s]={};for(var c=-4;c<=4;c++){var p=3.8*Math.random()+.2,u=new m.BoxGeometry(1,p,1);u.translate(0,p/2,0);var g=new m.MeshLambertMaterial({color:16716947,opacity:.9,transparent:!0}),f=new m.Mesh(u,g);n.add(f),f.position.x=s,f.position.z=c,f.scale.y=.01,d[s][c]={el:f}}}this.cubes=d,this.scene=n,this.camera=i,this.renderer=r,this.controls=l,this.initialWidth=t,this.renderScene()},a.scaleCube=function(e,t){new g.a.Tween(e.scale).to({y:1},t).easing(g.a.Easing.Elastic.Out).start()},a.updateSceneSize=function(){var e=this.container.current.offsetWidth,t=this.container.current.offsetHeight;this.camera.aspect=e/t,this.camera.zoom=this.camera.aspect+.1,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.renderer.render(this.scene,this.camera),this.renderer.setPixelRatio(window.devicePixelRatio)},a.sceneFramePassed=function(){requestAnimationFrame(this.sceneFramePassed.bind(this)),this.controls.update(),g.a.update(),this.renderScene()},a.renderScene=function(){this.renderer.render(this.scene,this.camera)},a.render=function(){return r.a.createElement(f,{ref:this.container})},t}(o.Component),y=(a(34),a(37)),x=a.n(y),b=a(4),v=a.n(b),E=l.a.div.withConfig({displayName:"player__Container",componentId:"byldtm-0"})(["width:100%;display:flex;flex-direction:column;align-items:center;color:white;"]),_=l.a.div.withConfig({displayName:"player__Display",componentId:"byldtm-1"})(["width:100%;background-color:black;color:",";padding:12px 20px;border-radius:6px;display:grid;grid-template-columns:1fr auto;grid-row-gap:5px;"],d.d),C=l.a.h2.withConfig({displayName:"player__SongTitle",componentId:"byldtm-2"})(["font-weight:normal;"]),N=l.a.svg.withConfig({displayName:"player__PlayPauseIcon",componentId:"byldtm-3"})(["margin-left:20px;width:25px;grid-column-start:2;grid-row-start:1;grid-row-end:3;justify-self:center;align-self:center;"]),I=l.a.div.withConfig({displayName:"player__SeekBar",componentId:"byldtm-4"})(["width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center;"]),P=l.a.div.withConfig({displayName:"player__ProgressBar",componentId:"byldtm-5"})(["background-color:",";flex-grow:1;height:8px;"],d.d),z=l.a.div.withConfig({displayName:"player__ProgressTime",componentId:"byldtm-6"})(["padding-left:10px;font-size:70%;"]),k=l.a.div.withConfig({displayName:"player__Queue",componentId:"byldtm-7"})(["width:95%;background-color:",";border-bottom-right-radius:6px;border-bottom-left-radius:6px;list-style:none;padding:10px;color:white;"],d.a),S=l.a.div.withConfig({displayName:"player__Song",componentId:"byldtm-8"})(["position:relative;padding:8px 8px;cursor:pointer;background-color:",";border-radius:",";"],function(e){return e.active?"rgba(60, 60, 60, 0.61)":"inherit"},function(e){return e.active?"10px":"0"}),L=function(e){function t(t){var a,n=(a=e.call(this,t)||this).props.songs,i=Object.assign({},n[0],{duration:"00:00",timestamp:"00:00"});return a.state={isPlaying:!1,activeSong:i},a.togglePlayPause=a.togglePlayPause.bind(x()(a)),a.audio=void 0,a}i()(t,e);var a=t.prototype;return a.togglePlayPause=function(){var e=this,t=this.state.isPlaying;t?this.audio.pause():(this.audio=new Audio("https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"),this.audio.play(),this.audio.addEventListener("loadeddata",function(){var t=e.audio.duration;console.log(t)})),this.setState({isPlaying:!t})},a.render=function(){var e=this.state,t=e.isPlaying,a=e.activeSong,n=this.props.songs;return r.a.createElement(E,null,r.a.createElement(_,null,r.a.createElement(C,null,a.title),r.a.createElement(N,{viewBox:"0 0 448 512",onClick:this.togglePlayPause},t?r.a.createElement("path",{fill:d.d,d:"M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"}):r.a.createElement("path",{fill:d.d,d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"})),r.a.createElement(I,null,r.a.createElement(P,null),r.a.createElement(z,null,a.timestamp," / ",a.duration))),r.a.createElement(k,null,n.map(function(e){return r.a.createElement(S,{key:e.title,active:e.title===a.title},e.title)})))},t}(o.Component);L.defaultProps={songs:[{title:"Come on"},{title:"It's personal"},{title:"I do"}]},L.propTypes={songs:v.a.arrayOf(v.a.shape({title:v.a.string}))};var M=l.a.h2.withConfig({displayName:"promo-video__Title",componentId:"sc-1g42jhq-0"})(["margin-bottom:10px;color:",";"],d.d),F=l.a.div.withConfig({displayName:"promo-video__AspectRatio",componentId:"sc-1g42jhq-1"})(["width:100%;padding-top:56.25%;position:relative;margin-bottom:",";"],function(e){return e.hasTitle?"20px":"0"}),H=l.a.iframe.withConfig({displayName:"promo-video__YoutubeFrame",componentId:"sc-1g42jhq-2"})(["position:absolute;top:0;left:0;width:100%;height:100%;"]),j=function(e){var t=e.title,a=e.embedCode;return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(M,null,"Come on"),r.a.createElement(F,{hasTitle:!!t},r.a.createElement(H,{title:"Promo Video",type:"text/html",src:"http://www.youtube.com/embed/"+a+"?modestbranding=1",frameBorder:"0",allowFullScreen:!0})))},q=Object(l.a)(s.a).withConfig({displayName:"pages__StyledLayout",componentId:"lddblq-0"})(["background-color:",";"],d.e),W=l.a.div.withConfig({displayName:"pages__Container",componentId:"lddblq-1"})(["width:100%;height:100%;position:relative;display:grid;grid-template-columns:100%;grid-template-rows:40% auto 1fr;justify-items:center;align-items:center;opacity:0;max-width:520px;max-height:800px;margin:auto;@media (max-width:","px) and (orientation:landscape){grid-template-columns:50% 50%;grid-template-rows:auto 1fr;max-width:inherit;}@media (min-width:","px){grid-template-columns:50% 50%;grid-template-rows:0.3fr auto 1fr 0.3fr;max-width:inherit;}"],d.c,d.b),T=(l.a.div.withConfig({displayName:"pages__Hamburger",componentId:"lddblq-2"})(["position:absolute;top:0;right:0;height:40px;cursor:pointer;padding:inherit;z-index:2;@media (max-width:","px) and (orientation:landscape){left:0;right:auto;}"],d.c),l.a.div.withConfig({displayName:"pages__LogoContainer",componentId:"lddblq-3"})(["width:100%;height:100%;@media (max-width:","px) and (orientation:landscape){grid-row:1 / span 2;}@media (min-width:","px){grid-row:1 / span 4;}"],d.c,d.b)),O=l.a.div.withConfig({displayName:"pages__TextContainer",componentId:"lddblq-4"})(["width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;@media (max-width:","px) and (orientation:landscape){grid-row-start:1;}@media (min-width:","px){grid-row-start:2;align-items:flex-start;}"],d.c,d.b),B=l.a.h1.withConfig({displayName:"pages__Title",componentId:"lddblq-5"})(["text-align:center;"]),V=l.a.h3.withConfig({displayName:"pages__SubTitle",componentId:"lddblq-6"})(["text-align:center;"]),R=l.a.a.withConfig({displayName:"pages__AlbumLink",componentId:"lddblq-7"})(["color:",";text-decoration:underline;"],d.d),A=l.a.div.withConfig({displayName:"pages__PlayerContainer",componentId:"lddblq-8"})(["width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;@media (max-width:","px) and (orientation:landscape){grid-row-start:2;}@media (min-width:","px){grid-row-start:3;}"],d.c,d.b),D=function(e){function t(t){var a;return(a=e.call(this,t)||this).container=r.a.createRef(),a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.container.current.style.opacity=1},a.render=function(){return r.a.createElement(q,{showFooter:!0},r.a.createElement(c.a,{title:"Home"}),r.a.createElement(W,{ref:this.container},r.a.createElement(T,null,r.a.createElement(w,null)),r.a.createElement(O,null,r.a.createElement(B,{className:"title"},"Leslie Left"),r.a.createElement(V,null,"Yellow yellow, pink pink - ",r.a.createElement(R,{href:"https://open.spotify.com/artist",target:"_blank",rel:"noopener noreferrer"},"OUT NOW!"))),r.a.createElement(A,null,r.a.createElement(j,{embedCode:"NpEaa2P7qZI"}))))},t}(o.Component);t.default=D},146:function(e,t,a){"use strict";a.d(t,"e",function(){return n}),a.d(t,"d",function(){return i}),a.d(t,"a",function(){return o}),a.d(t,"c",function(){return r}),a.d(t,"b",function(){return l});var n="#FFFF00",i="#FF69B4",o="#6f6f6f",r=760,l=960},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Leslie Left"}}}}},148:function(e,t,a){"use strict";var n=a(149),i=a(0),o=a.n(i),r=a(4),l=a.n(r),d=a(154),s=a.n(d),c=function(e){var t=e.description,a=e.lang,i=e.meta,r=e.title,l=n.data.site.siteMetadata,d=t||l.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+l.title,meta:[{name:"description",content:d},{property:"og:title",content:r},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.author},{name:"twitter:title",content:r},{name:"twitter:description",content:d}].concat(i)})};c.defaultProps={lang:"en",meta:[],description:""},c.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),title:l.a.string.isRequired},t.a=c},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Leslie Left",description:"EP YELLOW YELLOW, PINK PINK - Out now!",author:"Leslie Left"}}}}},150:function(e,t,a){"use strict";var n=a(147),i=a(0),o=a.n(i),r=a(4),l=a.n(r),d=a(145),s=(a(152),d.a.footer.withConfig({displayName:"footer__Footer",componentId:"sc-1kmiko4-0"})(["display:flex;flex-direction:row;justify-content:center;align-items:center;padding-bottom:10px;height:35px;width:100%;a{height:100%;}"])),c=d.a.svg.withConfig({displayName:"footer__FooterItem",componentId:"sc-1kmiko4-1"})(["height:100%;margin:0 10px;"]),m=function(){return o.a.createElement(s,null,o.a.createElement("a",{href:"https://www.instagram.com/leslieleft/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(c,{viewBox:"0 0 448 512"},o.a.createElement("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}))),o.a.createElement("a",{href:"https://open.spotify.com/artist",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(c,{viewBox:"0 0 496 512"},o.a.createElement("path",{d:"M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"}))),o.a.createElement("a",{href:"https://www.youtube.com/channel",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(c,{viewBox:"0 0 576 512"},o.a.createElement("path",{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"}))),o.a.createElement("a",{href:"https://facebook.com/leslieleft",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(c,{viewBox:"0 0 512 512"},o.a.createElement("path",{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}))),o.a.createElement("a",{href:"mailto:martvandemoosdijk@gmail.com",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(c,{viewBox:"0 0 512 512"},o.a.createElement("path",{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}))))},p=a(146),h=d.a.div.withConfig({displayName:"layout__Container",componentId:"sc-9y21tl-0"})(["display:flex;flex-direction:column;height:",";"],function(e){return e.fullHeight?"100%":"auto"}),u=d.a.div.withConfig({displayName:"layout__MaxWidthWrapper",componentId:"sc-9y21tl-1"})(["max-width:",";height:100%;width:100%;margin:0 auto;display:flex;flex-direction:column;"],function(e){return e.maxWidth?"1600px;":"auto"}),g=d.a.div.withConfig({displayName:"layout__Content",componentId:"sc-9y21tl-2"})(["display:flex;flex-direction:column;height:",";padding:20px;@media (min-width:","px){padding:40px;}"],function(e){return e.fullHeight?"100%":"auto"},p.b),f=d.a.header.withConfig({displayName:"layout__Header",componentId:"sc-9y21tl-3"})([""]),w=function(e){var t=e.className,a=e.children,i=e.fullHeight,r=e.maxWidth,l=e.showHeader,d=e.showFooter,s=n.data.site.siteMetadata;return o.a.createElement(h,{className:t,fullHeight:i},o.a.createElement(u,{maxWidth:r},l?o.a.createElement(f,null,"Header | ",s.title):o.a.createElement("div",null),o.a.createElement(g,{fullHeight:i},a),d?o.a.createElement(m,null):o.a.createElement("div",null)))};w.defaultProps={className:"",fullHeight:!0,maxWidth:!0,showHeader:!1,showFooter:!1},w.propTypes={className:l.a.string,children:l.a.node.isRequired,fullHeight:l.a.bool,maxWidth:l.a.bool,showHeader:l.a.bool,showFooter:l.a.bool};t.a=w}}]);
//# sourceMappingURL=component---src-pages-index-js-db176a009b47f1153618.js.map