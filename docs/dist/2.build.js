webpackJsonp([2],{207:function(e,t,a){function s(e){a(264)}var n=a(8)(a(216),a(252),s,null,null);e.exports=n.exports},216:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{myCroppa:{}}},computed:{contents:function(){return[{title:"Basic",code:"import Vue from 'vue'\n import Croppa from 'vue-croppa'\n\n Vue.use(Croppa)            ",code2:"<croppa></croppa>",expand:!0},{title:"With custom component name (v0.1.0+)",code:"import Vue from 'vue'\n import Croppa from 'vue-croppa'\n\n Vue.use(Croppa, { componentName: 'my-image-cropper' })        ",code2:"<my-image-cropper></my-image-cropper>",expand:!0},{title:"Manually register component by yourself (v0.1.1+)",code:"import Vue from 'vue'\n import Croppa from 'vue-croppa'\n\n Vue.component('croppa', Croppa.component)        ",code2:"// Register async component (Webpack 2 + ES2015 Example)\n Vue.component('croppa', () => import(Croppa.component))",expand:!0}]}}}},229:function(e,t,a){t=e.exports=a(1)(),t.push([e.i,"",""])},252:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"registration"}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",[a("v-expansion-panel",{attrs:{expand:""}},[a("v-expansion-panel-content",{attrs:{value:e.contents[0].expand}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.contents[0].title))]),e._v(" "),a("v-card",[a("v-card-text",{staticClass:"grey lighten-3"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.contents[0].code,expression:"contents[0].code"}]},[a("code",{staticClass:"javascript"})])]),e._v(" "),a("v-card-text",{staticClass:"grey lighten-3"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.contents[0].code2,expression:"contents[0].code2"}]},[a("code",{staticClass:"html"})])])],1)],1)],1),e._v(" "),a("br"),e._v(" "),a("v-expansion-panel",{attrs:{expand:""}},[a("v-expansion-panel-content",{attrs:{value:e.contents[1].expand}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.contents[1].title))]),e._v(" "),a("v-card",[a("v-card-text",{staticClass:"grey lighten-3"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.contents[1].code,expression:"contents[1].code"}]},[a("code",{staticClass:"javascript"})])]),e._v(" "),a("v-card-text",{staticClass:"grey lighten-3"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.contents[1].code2,expression:"contents[1].code2"}]},[a("code",{staticClass:"html"})])])],1)],1)],1),e._v(" "),a("br"),e._v(" "),a("v-expansion-panel",{attrs:{expand:""}},[a("v-expansion-panel-content",{attrs:{value:e.contents[2].expand}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[e._v(e._s(e.contents[2].title))]),e._v(" "),a("v-card",[a("v-card-text",{staticClass:"grey lighten-3"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.contents[2].code,expression:"contents[2].code"}]},[a("code",{staticClass:"javascript"})])]),e._v(" "),a("v-card-text",{staticClass:"grey lighten-3"},[a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:e.contents[2].code2,expression:"contents[2].code2"}]},[a("code",{staticClass:"javascript"})])])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},264:function(e,t,a){var s=a(229);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a(9)("e8270836",s,!0,{})}});