"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,n,t,o){Object.defineProperty(e,"__esModule",{value:!0})
var r=Ember.Application.extend({modulePrefix:o.default.modulePrefix,podModulePrefix:o.default.podModulePrefix,Resolver:n.default});(0,t.default)(r,o.default.modulePrefix),e.default=r}),define("dummy/components/as-scrollable",["exports","ember-scrollable/components/ember-scrollable"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default.extend({classNames:"as-scrollable"})}),define("dummy/components/code-snippet",["exports","dummy/snippets"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0})
var t=self.require("highlight.js")
e.default=Ember.Component.extend({tagName:"pre",classNameBindings:["language"],unindent:!0,_unindent:function(e){if(!this.get("unindent"))return e
for(var n,t,o=e.split("\n").filter(function(e){return""!==e}),r=0;r<o.length;r++)(n=/^[ \t]*/.exec(o[r]))&&(void 0===t||t>n[0].length)&&(t=n[0].length)
return void 0!==t&&t>0&&(e=e.replace(new RegExp("^[ \t]{"+t+"}","gm"),"")),e},source:Ember.computed("name",function(){return this._unindent((n.default[this.get("name")]||"").replace(/^(\s*\n)*/,"").replace(/\s*$/,""))}),didInsertElement:function(){t.highlightBlock(this.get("element"))},language:Ember.computed("name",function(){var e=/\.(\w+)$/i.exec(this.get("name"))
if(e)switch(e[1].toLowerCase()){case"js":return"javascript"
case"coffee":return"coffeescript"
case"hbs":return"htmlbars"
case"css":return"css"
case"scss":return"scss"
case"less":return"less"
case"emblem":return"emblem"
case"ts":return"typescript"}})})}),define("dummy/components/draggable-object-target",["exports","ember-drag-drop/components/draggable-object-target"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("dummy/components/draggable-object",["exports","ember-drag-drop/components/draggable-object"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("dummy/components/ember-scrollable",["exports","ember-scrollable/components/ember-scrollable"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/ember-scrollbar",["exports","ember-scrollable/components/ember-scrollbar"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/object-bin",["exports","ember-drag-drop/components/object-bin"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("dummy/components/resize-detector",["exports","ember-element-resize-detector/components/resize-detector"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/scroll-content-element",["exports","ember-scrollable/components/scroll-content-element"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/components/sortable-objects",["exports","ember-drag-drop/components/sortable-objects"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("dummy/controllers/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Controller
e.default=n.extend({isShort:!0,actions:{log:function(e){console.log(e)},toggleHeight:function(){this.toggleProperty("isShort")}}})}),define("dummy/helpers/app-version",["exports","dummy/config/environment","ember-cli-app-version/utils/regexp"],function(e,n,t){function o(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return n.hideSha?r.match(t.versionRegExp)[0]:n.hideVersion?r.match(t.shaRegExp)[0]:r}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=o
var r=n.default.APP.version
e.default=Ember.Helper.helper(o)}),define("dummy/helpers/send",["exports","ember-component-inbound-actions/helpers/send"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,n,t){Object.defineProperty(e,"__esModule",{value:!0})
var o=t.default.APP,r=o.name,l=o.version
e.default={name:"App Version",initialize:(0,n.default)(r,l)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/coordinator-setup",["exports","dummy/models/coordinator"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"setup coordinator",initialize:function(){var e=arguments[1]||arguments[0]
e.register("drag:coordinator",n.default),e.inject("component","coordinator","drag:coordinator")}}}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,n){function t(){var e=arguments[1]||arguments[0]
if(!1!==n.default.exportApplicationGlobal){var t
if("undefined"!=typeof window)t=window
else if("undefined"!=typeof global)t=global
else{if("undefined"==typeof self)return
t=self}var o,r=n.default.exportApplicationGlobal
o="string"==typeof r?r:Ember.String.classify(n.default.modulePrefix),t[o]||(t[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete t[o]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=t,e.default={name:"export-application-global",initialize:t}}),define("dummy/models/coordinator",["exports","dummy/models/obj-hash"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Object.extend(Ember.Evented,{objectMap:Ember.computed(function(){return n.default.create()}),getObject:function(e,n){n=n||{}
var t=this.get("objectMap").getObj(e)
return t.ops.source&&t.ops.source.sendAction("action",t.obj),t.ops.target&&t.ops.target.sendAction("action",t.obj),this.trigger("objectMoved",{obj:t.obj,source:t.ops.source,target:n.target}),t.obj},setObject:function(e,n){return n=n||{},this.get("objectMap").add({obj:e,ops:n})}})}),define("dummy/models/obj-hash",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Object.extend({content:{},contentLength:0,length:Ember.computed.alias("contentLength"),add:function(e){var n=this.generateId()
return this.get("content")[n]=e,this.incrementProperty("contentLength"),n},getObj:function(e){var n=this.get("content")[e]
if(!n)throw"no obj for key "+e
return n},generateId:function(){var e=1e12*Math.random()
return e=parseInt(e),e=""+e},keys:function(){var e=[]
for(var n in this.get("content"))e.push(n)
return Ember.A(e)}})}),define("dummy/resolver",["exports","ember-resolver"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0})
var t=Ember.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL})
t.map(function(){this.route("cookbook")}),e.default=t}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/services/drag-coordinator",["exports","ember-drag-drop/services/drag-coordinator"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=n.default}),define("dummy/services/resize-detector",["exports","ember-element-resize-detector/services/resize-detector"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/services/scrollbar-thickness",["exports","ember-scrollable/services/scrollbar-thickness"],function(e,n){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("dummy/snippets",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={"dual-scroll.hbs":"    <div class=\"double-scroll-container\">\n      {{#ember-scrollable horizontal=true vertical=true onScrolledToBottom=(action 'log' 'Bottom reached!')}}\n        <div class=\"wide-content\">\n          <p>Some content</p>\n          <p>Some more content</p>\n          <p>Some content</p>\n          <p>Some more content</p>\n          <p>Some content</p>\n          <p>Some more content</p>\n          <p>Some content</p>\n          <p>Some more content</p>\n          <p>Some content</p>\n          <p>Some more content</p>\n          <p>Some content</p>\n          <p>Some more content</p>\n          <p>Some content</p>\n          <p>Some more content</p>\n          <p>Some content</p>\n          <p>Some more content</p>\n          <p>Some content</p>\n          <p>Some more content</p>\n          <p>Some content</p>\n          <p>Some more content</p>\n        </div>\n      {{/ember-scrollable}}\n    </div>","event-and-setter.hbs":'    <label id="targetScrollOffset">\n      targetScrollOffset: {{input value=targetScrollOffset type="number" min=0 step=10 max=400}}\n    </label>\n    <br>\n    <label id="currentScrollOffset">\n      currentScrollOffset: {{currentScrollOffset}} px\n    </label>\n\n    <hr>\n\n    <div style="height: 400px;">\n      {{#ember-scrollable\n        scrollToY=targetScrollOffset\n        onScrollY=(action (mut currentScrollOffset))\n      }}\n        <p>Some content</p>\n        <p>Some more content</p>\n        <p>Some content</p>\n        <p>Some more content</p>\n        <p>Some content</p>\n        <p>Some more content</p>\n        <p>Some content</p>\n        <p>Some more content</p>\n        <p>Some content</p>\n        <p>Some more content</p>\n        <p>Some content</p>\n        <p>Some more content</p>\n        <p>Some content</p>\n        <p>Some more content</p>\n        <p>Some content</p>\n        <p>Some more content</p>\n        <p>Some content</p>\n        <p>Some more content</p>\n        <p>Some content</p>\n        <p>Some more content</p>\n      {{/ember-scrollable}}\n    </div>',"horizontal.hbs":"    {{#ember-scrollable horizontal=true}}\n      <ul>\n        <li>1</li>\n        <li>2</li>\n        <li>3</li>\n        <li>4</li>\n        <li>5</li>\n        <li>6</li>\n        <li>7</li>\n        <li>8</li>\n        <li>9</li>\n        <li>10</li>\n      </ul>\n    {{/ember-scrollable}}","no-auto-hide.hbs":'    <div style="height: 200px;">\n      {{#ember-scrollable autoHide=false}}\n        <p>Some content</p>\n        <p>Some more content</p>\n        <p>Some content</p>\n        <p>Some more content</p>\n        <p>Some content</p>\n        <p>Some more content</p>\n        <p>Some content</p>\n        <p>Some more content</p>\n        <p>Some content</p>\n        <p>Some more content</p>\n      {{/ember-scrollable}}\n    </div>',"no-scrollbar-demo.hbs":'    <div style="height: 200px;">\n      {{#ember-scrollable}}\n        <p>Some content</p>\n        {{#unless isShort}}\n          <p>Some content</p>\n          <p>Some content</p>\n          <p>Some content</p>\n          <p>Some content</p>\n          <p>Some content</p>\n          <p>Some content</p>\n          <p>Some content</p>\n          <p>Some content</p>\n          <p>Some content</p>\n          <p>Some content</p>\n          <p>Some content</p>\n          <p>Some content</p>\n          <p>Some content</p>\n          <p>Some content</p>\n        {{/unless}}\n      {{/ember-scrollable}}\n    </div>',"vertical.hbs":"    <div class={{if isShort 'is-short' 'is-tall'}}>\n      {{#ember-scrollable onScrolledToBottom=(action 'log' 'Bottom reached!')}}\n        <p>Some content</p>\n        <p>Some more content</p>\n        <p>Some content</p>\n        <p>Some more content</p>\n        <p>Some content</p>\n        <p>Some more content</p>\n        <p>Some content</p>\n        <p>Some more content</p>\n        <p>Some content</p>\n        <p>Some more content</p>\n        <p>Some content</p>\n        <p>Some more content</p>\n        <p>Some content</p>\n        <p>Some more content</p>\n        <p>Some content</p>\n        <p>Some more content</p>\n        <p>Some content</p>\n        <p>Some more content</p>\n        <p>Some content</p>\n        <p>Some more content</p>\n      {{/ember-scrollable}}\n    </div>"}}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"8VpUpqJF",block:'{"symbols":[],"statements":[[1,[21,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/components/code-snippet",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"sCIyjozi",block:'{"symbols":[],"statements":[[1,[21,"source"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/components/code-snippet.hbs"}})}),define("dummy/templates/components/draggable-object-target",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"k6AoL9nh",block:'{"symbols":["&default"],"statements":[[4,"if",[[23,["enableClicking"]]],null,{"statements":[[0,"  "],[7,"a"],[11,"href","#"],[3,"action",[[22,0,[]],"acceptForDrop"]],[9],[0,"\\n    "],[14,1],[0,"\\n  "],[10],[0,"\\n"]],"parameters":[]},{"statements":[[0,"  "],[14,1],[0,"\\n"]],"parameters":[]}]],"hasEval":false}',meta:{moduleName:"dummy/templates/components/draggable-object-target.hbs"}})})
define("dummy/templates/components/draggable-object",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"+M5j1VhO",block:'{"symbols":["&default"],"statements":[[4,"if",[[23,["enableClicking"]]],null,{"statements":[[0,"  "],[7,"a"],[11,"href","#"],[3,"action",[[22,0,[]],"selectForDrag"]],[9],[0,"\\n    "],[14,1],[0,"\\n  "],[10],[0,"\\n"]],"parameters":[]},{"statements":[[0,"  "],[14,1],[0,"\\n"]],"parameters":[]}]],"hasEval":false}',meta:{moduleName:"dummy/templates/components/draggable-object.hbs"}})}),define("dummy/templates/components/object-bin",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"5Hrcpj4p",block:'{"symbols":["obj","&default"],"statements":[[4,"draggable-object-target",null,[["action"],["handleObjectDropped"]],{"statements":[[0,"  "],[7,"div"],[11,"class","object-bin-title"],[9],[1,[21,"name"],false],[10],[0,"\\n  "],[7,"br"],[9],[10],[0,"\\n"],[4,"each",[[23,["model"]]],null,{"statements":[[4,"draggable-object",null,[["action","content"],["handleObjectDragged",[22,1,[]]]],{"statements":[[0,"      "],[14,2,[[22,1,[]]]],[0,"\\n"]],"parameters":[]},null]],"parameters":[1]},null]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"dummy/templates/components/object-bin.hbs"}})}),define("dummy/templates/components/sortable-objects",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"fyaoTs8T",block:'{"symbols":["&default"],"statements":[[14,1]],"hasEval":false}',meta:{moduleName:"dummy/templates/components/sortable-objects.hbs"}})}),define("dummy/templates/cookbook",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"BQSWDFuo",block:'{"symbols":[],"statements":[[7,"section"],[9],[0,"\\n"],[4,"link-to",["index"],null,{"statements":[[0,"    Home\\n"]],"parameters":[]},null],[0,"  This page is for demonstrating more advanced / potentially real world uses of ember-scrollable. Please feel free to make additions if you see fit.\\n"],[10],[0,"\\n"],[7,"section"],[11,"class","vertical-demo"],[9],[0,"\\n  "],[7,"h1"],[9],[0,"Synchronized Scrolling"],[10],[0,"\\n\\n  "],[7,"div"],[11,"class","output"],[9],[0,"\\n"],[0,"    "],[7,"div"],[11,"style","height: 400px;"],[9],[0,"\\n"],[4,"ember-scrollable",null,[["scrollToY","onScrollY"],[[23,["scrollToY"]],[27,"action",[[22,0,[]],[27,"mut",[[23,["scrollToY"]]],null]],null]]],{"statements":[[0,"        "],[7,"p"],[9],[0,"\\n"],[4,"draggable-object",null,[["content"],[[22,0,[]]]],{"statements":[[0,"            Drag Me!\\n"]],"parameters":[]},null],[0,"        "],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n"]],"parameters":[]},null],[0,"    "],[10],[0,"\\n"],[0,"  "],[10],[0,"\\n\\n  "],[7,"div"],[11,"class","output"],[9],[0,"\\n"],[0,"    "],[7,"div"],[11,"style","height: 400px;"],[9],[0,"\\n"],[4,"ember-scrollable",null,[["scrollToY","onScrollY"],[[23,["scrollToY"]],[27,"action",[[22,0,[]],[27,"mut",[[23,["scrollToY"]]],null]],null]]],{"statements":[[0,"        "],[7,"p"],[9],[0,"\\n"],[4,"draggable-object",null,[["content"],[[22,0,[]]]],{"statements":[[0,"            Drag Me!\\n"]],"parameters":[]},null],[0,"        "],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n"]],"parameters":[]},null],[0,"    "],[10],[0,"\\n"],[0,"  "],[10],[0,"\\n"],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/cookbook.hbs"}})}),define("dummy/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"x2fKnc8o",block:'{"symbols":[],"statements":[[7,"section"],[9],[0,"\\n"],[4,"link-to",["cookbook"],null,{"statements":[[0,"    Cookbook\\n"]],"parameters":[]},null],[10],[0,"\\n"],[7,"section"],[11,"class","vertical-demo"],[9],[0,"\\n  "],[7,"h1"],[9],[0,"Vertical"],[10],[0,"\\n\\n  "],[7,"div"],[11,"class","output"],[9],[0,"\\n"],[0,"    "],[7,"div"],[11,"style","height: 400px;"],[9],[0,"\\n"],[4,"ember-scrollable",null,[["onScrolledToBottom"],[[27,"action",[[22,0,[]],"log","Bottom reached!"],null]]],{"statements":[[0,"        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n"]],"parameters":[]},null],[0,"    "],[10],[0,"\\n"],[0,"  "],[10],[0,"\\n\\n  "],[7,"div"],[11,"class","code"],[9],[0,"\\n    "],[1,[27,"code-snippet",null,[["name"],["vertical.hbs"]]],false],[0,"\\n  "],[10],[0,"\\n"],[10],[0,"\\n\\n"],[7,"section"],[11,"class","horizontal-demo"],[9],[0,"\\n  "],[7,"h1"],[9],[0,"Horizontal"],[10],[0,"\\n\\n  "],[7,"div"],[11,"class","output"],[9],[0,"\\n"],[4,"ember-scrollable",null,[["horizontal"],[true]],{"statements":[[0,"      "],[7,"ul"],[9],[0,"\\n        "],[7,"li"],[9],[0,"1"],[10],[0,"\\n        "],[7,"li"],[9],[0,"2"],[10],[0,"\\n        "],[7,"li"],[9],[0,"3"],[10],[0,"\\n        "],[7,"li"],[9],[0,"4"],[10],[0,"\\n        "],[7,"li"],[9],[0,"5"],[10],[0,"\\n        "],[7,"li"],[9],[0,"6"],[10],[0,"\\n        "],[7,"li"],[9],[0,"7"],[10],[0,"\\n        "],[7,"li"],[9],[0,"8"],[10],[0,"\\n        "],[7,"li"],[9],[0,"9"],[10],[0,"\\n        "],[7,"li"],[9],[0,"10"],[10],[0,"\\n      "],[10],[0,"\\n"]],"parameters":[]},null],[0,"  "],[10],[0,"\\n\\n  "],[7,"div"],[11,"class","code"],[9],[0,"\\n    "],[1,[27,"code-snippet",null,[["name"],["horizontal.hbs"]]],false],[0,"\\n  "],[10],[0,"\\n"],[10],[0,"\\n\\n"],[7,"section"],[11,"class","no-auto-hide-demo"],[9],[0,"\\n  "],[7,"h1"],[9],[0,"No Auto Hide"],[10],[0,"\\n\\n  "],[7,"div"],[11,"class","output"],[9],[0,"\\n"],[0,"    "],[7,"div"],[11,"style","height: 200px;"],[9],[0,"\\n"],[4,"ember-scrollable",null,[["autoHide"],[false]],{"statements":[[0,"        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n"]],"parameters":[]},null],[0,"    "],[10],[0,"\\n"],[0,"  "],[10],[0,"\\n\\n  "],[7,"div"],[11,"class","code"],[9],[0,"\\n    "],[1,[27,"code-snippet",null,[["name"],["no-auto-hide.hbs"]]],false],[0,"\\n  "],[10],[0,"\\n"],[10],[0,"\\n\\n"],[7,"section"],[11,"class","no-scrollbar-demo"],[9],[0,"\\n  "],[7,"h1"],[9],[0,"No Scroll "],[10],[0,"\\n  "],[7,"button"],[3,"action",[[22,0,[]],"toggleHeight"]],[9],[0,"Make "],[1,[27,"if",[[23,["isShort"]],"Overflow","No Overflow"],null],false],[10],[0,"\\n  "],[7,"div"],[11,"class","output"],[9],[0,"\\n"],[0,"    "],[7,"div"],[11,"style","height: 200px;"],[9],[0,"\\n"],[4,"ember-scrollable",null,null,{"statements":[[0,"        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n"],[4,"unless",[[23,["isShort"]]],null,{"statements":[[0,"          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n"]],"parameters":[]},null]],"parameters":[]},null],[0,"    "],[10],[0,"\\n"],[0,"  "],[10],[0,"\\n\\n  "],[7,"div"],[11,"class","code"],[9],[0,"\\n    "],[1,[27,"code-snippet",null,[["name"],["no-scrollbar-demo.hbs"]]],false],[0,"\\n  "],[10],[0,"\\n"],[10],[0,"\\n"],[2," TODO rename class and apply styles to dual scroll demo class"],[0,"\\n"],[7,"section"],[11,"class","vertical-demo"],[9],[0,"\\n  "],[7,"h1"],[9],[0,"Double Scroll"],[10],[0,"\\n\\n  "],[7,"div"],[11,"class","output"],[9],[0,"\\n"],[0,"    "],[7,"div"],[11,"class","double-scroll-container"],[9],[0,"\\n"],[4,"ember-scrollable",null,[["horizontal","vertical","onScrolledToBottom"],[true,true,[27,"action",[[22,0,[]],"log","Bottom reached!"],null]]],{"statements":[[0,"        "],[7,"div"],[11,"class","wide-content"],[9],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n          "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[10],[0,"\\n"]],"parameters":[]},null],[0,"    "],[10],[0,"\\n"],[0,"  "],[10],[0,"\\n\\n  "],[7,"div"],[11,"class","code"],[9],[0,"\\n    "],[1,[27,"code-snippet",null,[["name"],["double.hbs"]]],false],[0,"\\n  "],[10],[0,"\\n"],[10],[0,"\\n\\n\\n"],[7,"section"],[11,"class","resize-demo"],[9],[0,"\\n  "],[7,"h1"],[9],[0,"Auto resizing"],[10],[0,"\\n  "],[7,"button"],[3,"action",[[22,0,[]],"toggleHeight"]],[9],[0,"Make "],[1,[27,"if",[[23,["isShort"]],"Tall","Short"],null],false],[10],[0,"\\n  "],[7,"p"],[9],[0,"The scrollbar automatically recalculates when the height of the parent container changes. "],[10],[0,"\\n\\n  "],[7,"div"],[11,"class","output"],[9],[0,"\\n"],[0,"    "],[7,"div"],[12,"class",[27,"if",[[23,["isShort"]],"is-short","is-tall"],null]],[9],[0,"\\n"],[4,"ember-scrollable",null,[["onScrolledToBottom"],[[27,"action",[[22,0,[]],"log","Bottom reached!"],null]]],{"statements":[[0,"        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n"]],"parameters":[]},null],[0,"    "],[10],[0,"\\n"],[0,"  "],[10],[0,"\\n\\n  "],[7,"div"],[11,"class","code"],[9],[0,"\\n    "],[1,[27,"code-snippet",null,[["name"],["vertical.hbs"]]],false],[0,"\\n  "],[10],[0,"\\n"],[10],[0,"\\n\\n"],[7,"section"],[11,"class","event-and-setter-demo"],[9],[0,"\\n  "],[7,"h1"],[9],[0,"Scroll event and setting the offset"],[10],[0,"\\n\\n  "],[7,"div"],[11,"class","output"],[9],[0,"\\n"],[0,"    "],[7,"label"],[11,"id","targetScrollOffset"],[9],[0,"\\n      targetScrollOffset: "],[1,[27,"input",null,[["value","type","min","step","max"],[[23,["targetScrollOffset"]],"number",0,10,400]]],false],[0,"\\n    "],[10],[0,"\\n    "],[7,"br"],[9],[10],[0,"\\n    "],[7,"label"],[11,"id","currentScrollOffset"],[9],[0,"\\n      currentScrollOffset: "],[1,[21,"currentScrollOffset"],false],[0," px\\n    "],[10],[0,"\\n\\n    "],[7,"hr"],[9],[10],[0,"\\n\\n    "],[7,"div"],[11,"style","height: 400px;"],[9],[0,"\\n"],[4,"ember-scrollable",null,[["scrollToY","onScrollY"],[[23,["targetScrollOffset"]],[27,"action",[[22,0,[]],[27,"mut",[[23,["currentScrollOffset"]]],null]],null]]],{"statements":[[0,"        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some content"],[10],[0,"\\n        "],[7,"p"],[9],[0,"Some more content"],[10],[0,"\\n"]],"parameters":[]},null],[0,"    "],[10],[0,"\\n"],[0,"  "],[10],[0,"\\n\\n  "],[7,"div"],[11,"class","code"],[9],[0,"\\n    "],[1,[27,"code-snippet",null,[["name"],["event-and-setter.hbs"]]],false],[0,"\\n  "],[10],[0,"\\n"],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",n=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),t={default:JSON.parse(unescape(n))}
return Object.defineProperty(t,"__esModule",{value:!0}),t}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-scrollable",version:"0.5.0"})
