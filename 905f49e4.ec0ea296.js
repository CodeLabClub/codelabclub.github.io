(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{253:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return n})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var b=a(2),c=a(9),r=(a(0),a(335)),l={date:new Date("2019-12-04T00:00:00.000Z"),title:"CodeLab Adapter \u63a5\u5165 Teachable Machine",slug:"adapter-Teachable-Machine",tags:["\u6280\u672f\u6587\u6863","\u7f16\u7a0b\u5b66\u4e60","CodeLab\u2764\u9009","Adapter"],categories:["CodeLab"],author:"\u79cd\u74dc"},n={permalink:"/blog/2019/12/04/adapter_tm",editUrl:"https://github.com/CodeLabClub/NewCodeLabWeb/tree/master/blog/adapter_tm.md",source:"@site/blog/adapter_tm.md",description:"\u901a\u8fc7\u6559\u8ba1\u7b97\u673a\u600e\u6837\u601d\u8003\uff0c\u5b69\u5b50\u4eec\u5f00\u59cb\u63a2\u7d22\u81ea\u5df1\u7684\u601d\u8003\u65b9\u5f0f\u3002\u8fd9\u79cd\u4f53\u9a8c\u9887\u4e0d\u5bfb\u5e38\uff0c\u751a\u81f3\u5f88\u591a\u6210\u5e74\u4eba\u4e5f\u5f88\u96be\u62e5\u6709--\u601d\u8003\u5173\u4e8e\u601d\u8003\u7684\u95ee\u9898\u3002 -- Seymour Papert \u300aMindstorms\u300b",date:"2019-12-04T00:00:00.000Z",tags:[{label:"\u6280\u672f\u6587\u6863",permalink:"/blog/tags/\u6280\u672f\u6587\u6863"},{label:"\u7f16\u7a0b\u5b66\u4e60",permalink:"/blog/tags/\u7f16\u7a0b\u5b66\u4e60"},{label:"CodeLab\u2764\u9009",permalink:"/blog/tags/code-lab-\u2764-\u9009"},{label:"Adapter",permalink:"/blog/tags/adapter"}],title:"CodeLab Adapter \u63a5\u5165 Teachable Machine",readingTime:1.085,truncated:!0,prevItem:{title:"Dan Ingalls \u4e0e Lively",permalink:"/blog/2020/01/19/dan-lively"},nextItem:{title:"\u52a0\u5165\u6211\u4eec",permalink:"/blog/2019/12/04/join-us"}},o=[{value:"\u5c55\u793a\u4e00\u4e0b",id:"\u5c55\u793a\u4e00\u4e0b",children:[]},{value:"\u5982\u4f55\u4f7f\u7528\uff1f",id:"\u5982\u4f55\u4f7f\u7528\uff1f",children:[{value:"\u7b2c\u4e00\u6b65: \u91c7\u96c6\u6570\u636e",id:"\u7b2c\u4e00\u6b65-\u91c7\u96c6\u6570\u636e",children:[]},{value:"\u7b2c\u4e8c\u6b65: \u8bad\u7ec3",id:"\u7b2c\u4e8c\u6b65-\u8bad\u7ec3",children:[]},{value:"\u7b2c\u4e09\u6b65: \u5bfc\u51fa\u6a21\u578b",id:"\u7b2c\u4e09\u6b65-\u5bfc\u51fa\u6a21\u578b",children:[]}]},{value:"\u7528\u4ec0\u4e48\u6765\u6559\u5b83\uff1f",id:"\u7528\u4ec0\u4e48\u6765\u6559\u5b83\uff1f",children:[]},{value:"\u793a\u4f8b\u8bb2\u89e3",id:"\u793a\u4f8b\u8bb2\u89e3",children:[]},{value:"\u793e\u533a\u521b\u610f",id:"\u793e\u533a\u521b\u610f",children:[]}],i={rightToc:o};function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(b.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u901a\u8fc7\u6559\u8ba1\u7b97\u673a\u600e\u6837\u601d\u8003\uff0c\u5b69\u5b50\u4eec\u5f00\u59cb\u63a2\u7d22\u81ea\u5df1\u7684\u601d\u8003\u65b9\u5f0f\u3002\u8fd9\u79cd\u4f53\u9a8c\u9887\u4e0d\u5bfb\u5e38\uff0c\u751a\u81f3\u5f88\u591a\u6210\u5e74\u4eba\u4e5f\u5f88\u96be\u62e5\u6709--\u601d\u8003\u5173\u4e8e\u601d\u8003\u7684\u95ee\u9898\u3002 -- Seymour Papert \u300aMindstorms\u300b")),Object(r.b)("p",null,"CodeLab Adapter \u7684\u76ee\u6807\u4e4b\u4e00\u662f:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u8fde\u63a5\u4e00\u5207\uff0c\u964d\u4f4e\u5efa\u6784\u548c\u521b\u9020\u7684\u95e8\u69db\u3002")),Object(r.b)("p",null,Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://teachablemachine.withgoogle.com/"}),"Teachable Machine"),"\u662f\u5168\u7403\u6700\u9177\u7684 AI \u9879\u76ee\u4e4b\u4e00\uff0c\u6240\u4ee5\u6211\u4eec\u51c6\u5b9a\u63a5\u5165\u5b83\u3002"),Object(r.b)("h1",{id:"teachable-machine"},"Teachable Machine"),Object(r.b)("p",null,"Teachable Machine \u662f\u4ec0\u4e48? \u6211\u4eec\u5f15\u7528\u5176\u4e3b\u9875\u7684\u4ecb\u7ecd:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u8bad\u7ec3\u8ba1\u7b97\u673a\u4ee5\u8bc6\u522b\u81ea\u5df1\u7684\u56fe\u50cf\u3001\u58f0\u97f3\u548c\u8eab\u4f53\u59ff\u52bf\u3002")),Object(r.b)("p",null,"\u8fd9\u662f\u4e00\u79cd\u5feb\u901f\u4e3a\u7f51\u7ad9\u3001APP \u7b49\u5e94\u7528\u521b\u5efa\u673a\u5668\u5b66\u4e60\u6a21\u578b\u7684\u65b9\u6cd5, \u65e0\u9700\u4e13\u4e1a\u77e5\u8bc6\u6216\u7f16\u7a0b\uff01"),Object(r.b)("p",null,"\u5b83\u57fa\u4e8e Web\uff0c\u4efb\u4f55\u4eba\u53ef\u4ee5\u8f7b\u677e\u4f7f\u7528\u5b83\u3002"),Object(r.b)("h2",{id:"\u5c55\u793a\u4e00\u4e0b"},"\u5c55\u793a\u4e00\u4e0b"),Object(r.b)("video",{width:"40%",src:"https://www-old.codelab.club/video/google_tf_prediction.mp4",controls:"controls"}),Object(r.b)("p",null,"\u66f4\u5b8c\u6574\u7684\u4ecb\u7ecd\uff1a"),Object(r.b)("video",{width:"80%",src:"https://www-old.codelab.club/video/google_tm_demo.mp4",controls:"controls"}),Object(r.b)("h2",{id:"\u5982\u4f55\u4f7f\u7528\uff1f"},"\u5982\u4f55\u4f7f\u7528\uff1f"),Object(r.b)("p",null,"Teachable Machine \u7b80\u5355\u6613\u7528\uff0c\u53ea\u9700 3 \u6b65\uff0c\u4f60\u5c31\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e0a\u8bad\u7ec3\u81ea\u5df1\u7684\u673a\u5668\u5b66\u4e60\u6a21\u578b"),Object(r.b)("h3",{id:"\u7b2c\u4e00\u6b65-\u91c7\u96c6\u6570\u636e"},"\u7b2c\u4e00\u6b65: \u91c7\u96c6\u6570\u636e"),Object(r.b)("p",null,"\u6536\u96c6\u793a\u4f8b\u6570\u636e(\u58f0\u97f3\u3001\u56fe\u50cf)\u5e76\u5c06\u5176\u5206\u95e8\u522b\u7c7b\uff0c\u8ba1\u7b97\u673a\u5c06\u5b66\u4e60\u4f60\u7684\u5206\u7c7b\u65b9\u5f0f\u3002"),Object(r.b)("h3",{id:"\u7b2c\u4e8c\u6b65-\u8bad\u7ec3"},"\u7b2c\u4e8c\u6b65: \u8bad\u7ec3"),Object(r.b)("p",null,"\u8bad\u7ec3\u6a21\u578b\uff0c\u7136\u540e\u5bf9\u5176\u8fdb\u884c\u6d4b\u8bd5\uff0c\u770b\u770b\u662f\u5426\u80fd\u6b63\u5e38\u5730\u5728\u65b0\u7684\u4f8b\u5b50\u4e0a\u5de5\u4f5c\u3002"),Object(r.b)("h3",{id:"\u7b2c\u4e09\u6b65-\u5bfc\u51fa\u6a21\u578b"},"\u7b2c\u4e09\u6b65: \u5bfc\u51fa\u6a21\u578b"),Object(r.b)("p",null,"\u5bfc\u51fa\u8bad\u7ec3\u6a21\u578b\uff1a\u5c06\u5176\u7528\u4e8e\u7f51\u7ad9\u4e2d\u3002"),Object(r.b)("h2",{id:"\u7528\u4ec0\u4e48\u6765\u6559\u5b83\uff1f"},"\u7528\u4ec0\u4e48\u6765\u6559\u5b83\uff1f"),Object(r.b)("p",null,"Teachable Machine \u975e\u5e38\u7075\u6d3b\uff0c\u5373\u53ef\u4ee5\u4f7f\u7528\u5df2\u7ecf\u51c6\u5907\u597d\u7684\u6587\u4ef6\uff0c\u4e5f\u53ef\u5b9e\u65f6\u91c7\u96c6\u6570\u636e(\u6444\u50cf\u5934\u3001\u9ea6\u514b\u98ce...), \u91c7\u96c6\u548c\u8ba1\u7b97\u5de5\u4f5c\u90fd\u5728\u672c\u5730\u5b8c\u6210\uff0c\u6ca1\u6709\u6570\u636e\u79bb\u5f00\u4f60\u7684\u8ba1\u7b97\u673a\uff0c\u4e0d\u5fc5\u62c5\u5fc3\u9690\u79c1\u95ee\u9898\uff0c\u6ca1\u6709\u4e91\uff0c\u6ca1\u6709\u522b\u4eba\u7684\u7535\u8111\u3002"),Object(r.b)("p",null,Object(r.b)("img",Object(b.a)({parentName:"p"},{src:"/img/google_tm_data.png",alt:null}))),Object(r.b)("h2",{id:"\u793a\u4f8b\u8bb2\u89e3"},"\u793a\u4f8b\u8bb2\u89e3"),Object(r.b)("p",null,"Teachable Machine \u9879\u76ee\u7ed9\u51fa\u4e86 3 \u4e2a\u793a\u4f8b\uff08\u56fe\u7247\u3001\u58f0\u97f3\u3001\u8eab\u4f53\u59ff\u6001\uff09\uff0c\u4e3a\u6211\u4eec\u8bb2\u89e3\u5982\u4f55\u4f7f\u7528\u5b83:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"https://medium.com/@warronbebster/4bfffa765866"}),"\u300a\u56fe\u7247\uff1a\u9999\u8549\u8ba1\u300b"),": \u4e86\u89e3\u5982\u4f55\u521b\u5efa\u4e00\u4e2a\u6a21\u578b\uff0c\u5b83\u53ef\u4ee5\u5224\u65ad\u9999\u8549\u662f\u5426\u6210\u719f\u3002"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"https://medium.com/@warronbebster/4212fd7f3555"}),"\u300a\u58f0\u97f3\uff1a\u62cd\u624b\u5439\u53e3\u54e8\u300b"),"\u4e86\u89e3\u5982\u4f55\u521b\u5efa\u4e00\u4e2a\u6a21\u578b\u6765\u68c0\u6d4b\u4f60\u53d1\u51fa\u7684\u58f0\u97f3\u3002"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"https://medium.com/@warronbebster/f4f6116f491"}),"\u300a\u8eab\u4f53\u59ff\u6001:\u5934\u90e8\u503e\u659c\u300b"),": \u4e86\u89e3\u5982\u4f55\u521b\u5efa\u4e00\u4e2a\u6a21\u578b\uff0c\u8be5\u6a21\u578b\u53ef\u4ee5\u8bc6\u522b\u4f60\u5982\u4f55\u503e\u659c\u5934\u90e8\u3002")),Object(r.b)("h2",{id:"\u793e\u533a\u521b\u610f"},"\u793e\u533a\u521b\u610f"),Object(r.b)("p",null,"\u793e\u533a\u91cc\u5927\u5bb6\u6784\u5efa\u4e86\u5f88\u591a",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://teachablemachine.withgoogle.com/"}),"\u597d\u73a9\u7684\u4e1c\u897f"),":"),Object(r.b)("p",null,Object(r.b)("img",Object(b.a)({parentName:"p"},{src:"/img/tm_demo001.png",alt:null}))),Object(r.b)("p",null,Object(r.b)("img",Object(b.a)({parentName:"p"},{src:"/img/tm_demo002.png",alt:null}))),Object(r.b)("h1",{id:"\u63a5\u5165-codelab-adapter\uff01"},"\u63a5\u5165 CodeLab Adapter\uff01"),Object(r.b)("p",null,"CodeLab \u8fd1\u671f\u7684\u5de5\u4f5c\u4e4b\u4e00\u662f\uff0c\u641c\u7f57\u5168\u7403\u6709\u60f3\u8c61\u529b\u7684 AI \u9879\u76ee\uff0c\u5e76\u5c06\u5176\u63a5\u5165 CodeLab Adapter\uff0c",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://teachablemachine.withgoogle.com/"}),"Teachable Machine"),"\u662f\u6211\u4eec\u6700\u559c\u6b22\u7684 3 \u4e2a AI \u9879\u76ee\u4e4b\u4e00\u3002\u5176\u4f59\u4e24\u4e2a\u6211\u4eec\u6b63\u5728\u672c\u5730\u5316\u90e8\u7f72\u5230\u56fd\u5185\uff0c\u4e0b\u56de\u518d\u4ecb\u7ecd\u5b83\u4eec\u3002"),Object(r.b)("p",null,"\u6211\u4eec\u76ee\u524d\u5df2\u7ecf\u5c06 Teachable Machine \u63a5\u5165\u5230\u4e86 CodeLab Adapter\u3002\u4f60\u53ef\u4ee5\u6839\u636e",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://adapter.codelab.club/extension_guide/teachable_machine/"}),"\u6587\u6863\u5f15\u5bfc"),"\u4f7f\u7528\u5b83\u3002"),Object(r.b)("p",null,"Teachable Machine \u63a5\u5165\u5230\u4e86 CodeLab Adapter \u4e4b\u540e\uff0c\u53ef\u4ee5\u4e0e CodeLab Adapter \u5f00\u653e\u751f\u6001\u4e2d\u7684\u4efb\u4f55\u4e8b\u7269\u4ea4\u4e92\uff01\u7531\u4e8e CodeLab Adapter \u7684\u5f00\u653e\u6027\uff0c\u4f60\u53ef\u4ee5\u8f7b\u677e\u5c06",Object(r.b)("a",Object(b.a)({parentName:"p"},{href:"https://teachablemachine.withgoogle.com/"}),"Teachable Machine"),"\u7528\u5728\u4efb\u4f55\u5730\u65b9: \u4ece\u4f60\u7684\u82ad\u6bd4\u5a03\u5a03\u3001\u56db\u9a71\u8f66\u5230\u6574\u4e2a\u751f\u6d3b\u7a7a\u95f4\uff01\u4ee5\u53ca Neverland \u91cc\u7684\u6240\u6709\u8fd9\u4e9b\u4e8b\u7269:"),Object(r.b)("p",null,Object(r.b)("img",Object(b.a)({parentName:"p"},{src:"https://adapter.codelab.club/img/adapter_party.jpeg",alt:null}))),Object(r.b)("h1",{id:"\u4e00\u4e2a\u6f14\u793a"},"\u4e00\u4e2a\u6f14\u793a"),Object(r.b)("p",null,"\u6765\u770b\u4e00\u4e2a\u6f14\u793a\u3002"),Object(r.b)("p",null,"\u4e0b\u8fb9\u7684\u4f8b\u5b50\u5c55\u793a\u4e86\u5728 CodeLab Adapter \u4e2d\u52a0\u8f7d\u300a\u8eab\u4f53\u59ff\u6001:\u5934\u90e8\u503e\u659c\u300b\uff0c\u52a0\u8f7d\u4e4b\u540e\u6211\u4eec\u5c31\u53ef\u4ee5\u5c06 Teachable Machine \u7684\u80fd\u529b\u5e26\u5165\u5230 Scratch \u91cc\uff08\u4ee5\u53ca CodeLab Adapter \u652f\u6301\u7684\u53e6\u5916 34+\u7f16\u7a0b\u8bed\u8a00\uff01\uff09"),Object(r.b)("video",{width:"80%",src:"https://www-old.codelab.club/video/adapter_google_teachable_machine.mp4",controls:"controls"}),Object(r.b)("h1",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"https://teachablemachine.withgoogle.com/"}),"Teachable Machine")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"https://github.com/googlecreativelab/teachablemachine-community"}),"github teachablemachine-community")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"https://github.com/googlecreativelab/teachablemachine-community/blob/master/snippets/markdown/pose/tensorflowjs/javascript.md"}),"pose/tensorflowjs/javascript")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"https://medium.com/@warronbebster/teachable-machine-tutorial-bananameter-4bfffa765866"}),"Teachable Machine Tutorial: Bananameter")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"https://experiments.withgoogle.com/tiny-sorter/view"}),"Tiny Sorter"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"https://editor.p5js.org/gbose/sketches/2BN5HQYNK"}),"code")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"https://coral.ai/"}),"coral"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"https://coral.ai/products/accelerator"}),"coral usb accelerator")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"https://medium.com/@warronbebster/teachable-machine-tutorial-head-tilt-f4f6116f491"}),"Teachable Machine Tutorial: Head Tilt"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(b.a)({parentName:"li"},{href:"https://tm-pose-demo.glitch.me/"}),"tm-pose-demo.glitch.me"))))))}p.isMDXComponent=!0},335:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var b=a(0),c=a.n(b);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,b,c=function(e,t){if(null==e)return{};var a,b,c={},r=Object.keys(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var i=c.a.createContext({}),p=function(e){var t=c.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},m=function(e){var t=p(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=c.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,r=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=b,d=m["".concat(l,".").concat(u)]||m[u]||h[u]||r;return a?c.a.createElement(d,n(n({ref:t},i),{},{components:a})):c.a.createElement(d,n({ref:t},i))}));function d(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var r=a.length,l=new Array(r);l[0]=u;var n={};for(var o in t)hasOwnProperty.call(t,o)&&(n[o]=t[o]);n.originalType=e,n.mdxType="string"==typeof e?e:b,l[1]=n;for(var i=2;i<r;i++)l[i]=a[i];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);