(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26221142"],{"24b4":function(e,t,i){e.exports=i.p+"img/default.c59fcfed.jpg"},2566:function(e,t,i){"use strict";var s=i("6f15"),a=i.n(s);a.a},"2dbf":function(e,t,i){"use strict";var s=i("52ad"),a=i.n(s);a.a},"3c92":function(e,t,i){"use strict";var s=i("f9df"),a=i.n(s);a.a},4086:function(e,t,i){"use strict";var s=i("616e"),a=i.n(s);a.a},"46d3":function(e,t,i){},"52ad":function(e,t,i){},"616e":function(e,t,i){},"6f15":function(e,t,i){},"99d7":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"change"},[""==e.imageUrl&&""!==e.img?s("img",{staticClass:"change__img",attrs:{src:e.img,alt:"avatar"}}):""==e.imageUrl&&""===e.img?s("img",{staticClass:"change__img",attrs:{src:i("24b4"),alt:"avatar"}}):s("img",{staticClass:"change__img",attrs:{src:e.imageUrl,alt:"avatar"}}),s("div",{staticClass:"change__item"},[s("div",{staticClass:"change__file"},[e._v(e._s(e.filename))]),s("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:e.onfilePicked}}),s("button",{staticClass:"change__btn btn",attrs:{type:"button"},on:{click:e.onPickFile}},[s("i",{staticClass:"fas fa-arrow-up"}),e._v(" Изменить фото ")]),s("button",{staticClass:"change__btn btn change__btn_reset",attrs:{type:"button"},on:{click:e.resetImg}},[s("i",{staticClass:"fas fa-trash-restore"}),e._v(" Сброс ")])])])},a=[],n=(i("baa5"),i("b0c0"),{props:["img"],data:function(){return{imageUrl:"",image:null,filename:"",oldPath:this.img}},methods:{onPickFile:function(){this.$refs.fileInput.click()},onfilePicked:function(e){var t=this,i=e.target.files,s=i[0].name;if(this.filename=s,s.lastIndexOf(".")<=0)return alert("please add a avild file!");var a=new FileReader;a.addEventListener("load",(function(){t.imageUrl=a.result})),a.readAsDataURL(i[0]),this.image=i[0],this.$emit("changed-img",this.image)},resetImg:function(){this.image=this.oldPath,this.imageUrl=this.oldPath,this.filename="",this.$emit("changed-img",this.oldPath)}}}),r=n,c=(i("2dbf"),i("2877")),o=Object(c["a"])(r,s,a,!1,null,"0efc7480",null);t["a"]=o.exports},"9c32":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"subs"},[i("button",{staticClass:"subs__btn btn",attrs:{type:"button"},on:{click:e.add}},[i("i",{staticClass:"fas fa-plus-square"}),e._v(" Добавить ")]),i("transition-group",{attrs:{"enter-active-class":"animate__animated animate__fadeInRight","leave-active-class":"animate__animated animate__fadeOutRight"}},e._l(e.newSubs,(function(t,s){return i("div",{key:s,staticClass:"sub"},[i("div",{staticClass:"sub__i"},[e._v(e._s(s+1))]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newSubs[s],expression:"newSubs[index]"}],staticClass:"sub__text input",domProps:{value:e.newSubs[s]},on:{input:function(t){t.target.composing||e.$set(e.newSubs,s,t.target.value)}}}),i("button",{staticClass:"sub__delete",attrs:{type:"button"},on:{click:function(t){return e.remove(s)}}},[i("i",{staticClass:"fas fa-trash-alt"})])])})),0)],1)},a=[],n=(i("a434"),{props:["subs"],mounted:function(){this.newSubs=this.subs||[""]},data:function(){return{newSubs:[""]}},methods:{add:function(){this.newSubs.push("")},remove:function(e){this.newSubs.splice(e,1)}}}),r=n,c=(i("4086"),i("2877")),o=Object(c["a"])(r,s,a,!1,null,"086fda49",null);t["a"]=o.exports},a434:function(e,t,i){"use strict";var s=i("23e7"),a=i("23cb"),n=i("a691"),r=i("50c4"),c=i("7b0b"),o=i("65f0"),l=i("8418"),d=i("1dde"),u=i("ae40"),p=d("splice"),m=u("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,_=Math.min,f=9007199254740991,g="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!p||!m},{splice:function(e,t){var i,s,d,u,p,m,h=c(this),b=r(h.length),w=a(e,b),C=arguments.length;if(0===C?i=s=0:1===C?(i=0,s=b-w):(i=C-2,s=_(v(n(t),0),b-w)),b+i-s>f)throw TypeError(g);for(d=o(h,s),u=0;u<s;u++)p=w+u,p in h&&l(d,u,h[p]);if(d.length=s,i<s){for(u=w;u<b-s;u++)p=u+s,m=u+i,p in h?h[m]=h[p]:delete h[m];for(u=b;u>b-s+i;u--)delete h[u-1]}else if(i>s)for(u=b-s;u>w;u--)p=u+s-1,m=u+i-1,p in h?h[m]=h[p]:delete h[m];for(u=0;u<i;u++)h[u+w]=arguments[u+2];return h.length=b-s+i,d}})},cb6a:function(e,t,i){"use strict";var s=i("46d3"),a=i.n(s);a.a},ccc2:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"view"},[e.loading?i("Loader"):[i("div",{staticClass:"view__item view__item_header"},[e._v(e._s(e.header))]),"service"===e.category?i("input",{directives:[{name:"model",rawName:"v-model",value:e.service.title,expression:"service.title"}],staticClass:"view__input input",attrs:{type:"text",placeholder:"Название"},domProps:{value:e.service.title},on:{input:function(t){t.target.composing||e.$set(e.service,"title",t.target.value)}}}):i("input",{directives:[{name:"model",rawName:"v-model",value:e.project.title,expression:"project.title"}],staticClass:"view__input input",attrs:{type:"text",placeholder:"Название"},domProps:{value:e.project.title},on:{input:function(t){t.target.composing||e.$set(e.project,"title",t.target.value)}}}),i("div",{staticClass:"view__item view__item_desc"},["service"===e.category?[i("div",{staticClass:"view__item view__item_sub"},[e._v("Описание")]),i("SubsEditor",{attrs:{subs:e.service.description},on:{change:e.loadSubs}})]:[i("div",{staticClass:"view__item view__item_sub"},[e._v("Краткое описание")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.project.subTitle,expression:"project.subTitle"}],staticClass:"view__input input",attrs:{type:"text",placeholder:"Для карточки проекта"},domProps:{value:e.project.subTitle},on:{input:function(t){t.target.composing||e.$set(e.project,"subTitle",t.target.value)}}})]],2),i("div",{staticClass:"view__item view__item_img"},[i("div",{staticClass:"view__item view__item_sub"},[e._v("Обложка "+e._s("service"===e.category?"услуги":"проекта"))]),"service"===e.category?i("ChangeImg",{attrs:{img:e.service.img},on:{"changed-img":e.changeImg}}):i("ChangeImg",{attrs:{img:e.project.img},on:{"changed-img":e.changeImg}})],1),i("div",{staticClass:"view__item view__item_settings"},["service"==e.category?[i("div",{staticClass:"view__item view__item_sub"},[e._v("Этапы работы")]),i("StepsEditor",{attrs:{steps:e.service.steps},on:{changed:e.changeSteps}})]:[i("div",{staticClass:"view__item view__item_sub"},[e._v(" Изображения проекта "),i("br"),i("small",[i("i",[e._v("( разрешение 1345х755px )")])])]),i("SlideEditor",{attrs:{slides:e.project.imgs},on:{changed:e.slideChange}}),i("div",{staticClass:"view__item view__item_sub"},[e._v("О компании")]),i("SubsEditor",{attrs:{subs:e.project.aboutCompany},on:{change:e.loadCompSubs}}),i("div",{staticClass:"view__item view__item_sub"},[e._v("Задачи")]),i("SubsEditor",{attrs:{subs:e.project.task},on:{change:e.loadTaskSubs}})]],2),"service"==e.category?[i("div",{staticClass:"view__item view__item_sub"},[e._v("Срок выполнения:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.service.date,expression:"service.date"}],staticClass:"view__input view__input_date input",attrs:{type:"text",placeholder:"Пример: Срок выполнения от 25 дней"},domProps:{value:e.service.date},on:{input:function(t){t.target.composing||e.$set(e.service,"date",t.target.value)}}})]:[i("div",{staticClass:"view__sub"},[e._v("Выберите предоставленную услугу:")]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.project.nameOfService,expression:"project.nameOfService"}],staticClass:"input view__select",on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.project,"nameOfService",t.target.multiple?i:i[0])}}},e._l(e.categoryName,(function(t,s){return i("option",{key:s,staticClass:"view__option input"},[e._v(e._s(t))])})),0)],i("button",{staticClass:"view__save btn",attrs:{type:"submit"},on:{click:e.save}},[e._v("Сохранить")])]],2)},a=[],n=(i("a4d3"),i("e01a"),i("96cf"),i("1da1")),r=i("9c32"),c=i("99d7"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"steps"},[i("button",{staticClass:"btn steps__add",on:{click:e.add}},[i("i",{staticClass:"fas fa-plus-square"}),e._v(" Добавить ")]),i("div",{staticClass:"steps__items"},e._l(e.newSteps,(function(t,s){return i("div",{key:s,staticClass:"step"},[i("div",{staticClass:"step__item step__item_i"},[e._v(e._s(++s))]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"step.title"}],staticClass:"input step__item step__item_input",attrs:{placeholder:"Заголовок"},domProps:{value:t.title},on:{input:function(i){i.target.composing||e.$set(t,"title",i.target.value)}}}),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"step.description"}],staticClass:"input step__item step__item_input",attrs:{placeholder:"Описание"},domProps:{value:t.description},on:{input:function(i){i.target.composing||e.$set(t,"description",i.target.value)}}}),i("button",{staticClass:"step__item step__item_delete",attrs:{type:"button"},on:{click:function(t){return e.remove(s)}}},[i("i",{staticClass:"fas fa-trash-alt"})])])})),0)])},l=[],d=(i("a434"),{props:["steps"],mounted:function(){this.steps&&(this.newSteps=this.steps)},data:function(){return{newSteps:[{title:"",description:""}]}},methods:{add:function(){this.newSteps.push({title:"",description:""})},remove:function(e){this.newSteps.splice(e,1)}}}),u=d,p=(i("3c92"),i("2877")),m=Object(p["a"])(u,o,l,!1,null,"cf7b4dd8",null),v=m.exports,_=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"slides"},[i("div",{staticClass:"slides__inputs"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"input slides__input slides__item",attrs:{type:"text",placeholder:"Название"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),i("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:e.onfilePicked}}),i("button",{staticClass:"btn slides__choose-img slides__item",on:{click:e.onPickFile}},[i("i",{staticClass:"fas fa-arrow-up"}),e._v(" Выбрать фото ")]),i("div",{staticClass:"slides__filename slides__item"},[e._v(e._s(e.filename))]),i("button",{staticClass:"btn slides__btn slides__item",on:{click:e.add}},[i("i",{staticClass:"far fa-plus-square"}),e._v(" Добавить ")]),i("button",{staticClass:"btn slides__btn slides__item",on:{click:e.save}},[i("i",{staticClass:"fas fa-cloud-upload-alt"}),e._v(" Сохранить изменения ")])]),i("div",{staticClass:"slides__items"},e._l(e.newSlides,(function(t,s){return i("div",{key:s,staticClass:"slide"},[""!==t.img?[i("img",{staticClass:"slide__img",attrs:{src:t.url||t.img}}),i("div",{staticClass:"slide__text"},[e._v(e._s(t.title))]),i("div",{staticClass:"slide__delete",on:{click:function(t){return e.remove(s)}}},[i("i",{staticClass:"fas fa-trash-alt"})])]:e._e()],2)})),0)])},f=[],g=(i("baa5"),i("b0c0"),{props:["slides"],mounted:function(){this.slides.length&&(this.newSlides=this.slides)},data:function(){return{title:"",image:null,imageUrl:"",filename:"",newSlides:[],deleted:[]}},methods:{onPickFile:function(){this.$refs.fileInput.click()},onfilePicked:function(e){var t=this,i=e.target.files,s=i[0].name;if(this.filename=s,s.lastIndexOf(".")<=0)return alert("please add a avild file!");var a=new FileReader;a.addEventListener("load",(function(){t.imageUrl=a.result})),a.readAsDataURL(i[0]),this.image=i[0]},add:function(){this.newSlides.push({title:this.title,url:this.imageUrl,img:this.image,fileName:this.filename}),this.title="",this.imageUrl="",this.filename=""},remove:function(e){this.deleted.push(this.newSlides[e].fileName),this.newSlides.splice(e,1)},save:function(){this.$emit("changed",this.newSlides,this.deleted)}}}),h=g,b=(i("cb6a"),Object(p["a"])(h,_,f,!1,null,"04811696",null)),w=b.exports,C={props:["mode","category","data"],mounted:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("project"!==e.category){t.next=4;break}return t.next=3,e.$store.dispatch("services/loadServices");case 3:e.categoryName=e.$store.getters["services/servicesName"];case 4:if("edit"!==e.mode){t.next=15;break}if(i=e.$route.params.id,"service"!==e.category){t.next=12;break}return t.next=9,e.$store.dispatch("services/loadServiceById",i);case 9:e.service=e.$store.getters["services/service"],t.next=15;break;case 12:return t.next=14,e.$store.dispatch("projects/loadProjectById",i);case 14:e.project=e.$store.getters["projects/project"];case 15:e.loading=!1;case 16:case"end":return t.stop()}}),t)})))()},metaInfo:function(){return{title:this.header.toUpperCase()}},data:function(){return{loading:!0,categoryName:[],service:{title:"",img:"",steps:[{title:"",description:""}],description:[""],date:""},project:{title:"",subTitle:"",img:"",imgs:[],aboutCompany:[""],task:[""],nameOfService:""},deletedName:[]}},computed:{header:function(){return("add"===this.mode?"Добавление":"Редактирование")+" "+("service"===this.category?"услуги":"проекта")},img:function(){return"add"===this.mode?null:this.data.img}},methods:{loadSubs:function(e){this.service.description=e},loadCompSubs:function(e){this.project.aboutCompany=e},loadTaskSubs:function(e){this.project.task=e},changeSteps:function(e){this.service.steps=e},changeImg:function(e){"service"===this.category?this.service.img=e:this.project.img=e},slideChange:function(e,t){this.deletedName=t,this.project.imgs=e},save:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("service"!==e.category){t.next=30;break}if("add"!==e.mode){t.next=16;break}return t.prev=2,e.loading=!0,t.next=6,e.$store.dispatch("services/addNewService",{service:e.service,img:e.service.img});case 6:e.loading=!1,e.$router.push("/admin/services"),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](2),e.loading=!1,alert(t.t0);case 14:t.next=28;break;case 16:return t.prev=16,e.loading=!0,t.next=20,e.$store.dispatch("services/editServices",{service:e.service,id:e.$route.params.id});case 20:e.loading=!1,e.$router.push("/admin/services"),t.next=28;break;case 24:t.prev=24,t.t1=t["catch"](16),e.loading=!1,alert(t.t1);case 28:t.next=58;break;case 30:for(i=0;i<e.project.imgs.length;i++)e.project.imgs[i].url="";if("add"!==e.mode){t.next=46;break}return t.prev=32,e.loading=!0,t.next=36,e.$store.dispatch("projects/addNewPorject",{project:e.project,img:e.project.img});case 36:e.loading=!1,e.$router.push("/admin/projects"),t.next=44;break;case 40:t.prev=40,t.t2=t["catch"](32),e.loading=!1,alert(t.t2);case 44:t.next=58;break;case 46:return t.prev=46,e.loading=!0,t.next=50,e.$store.dispatch("projects/editProject",{project:e.project,id:e.$route.params.id,deletedName:e.deletedName});case 50:e.loading=!1,e.$router.push("/admin/projects"),t.next=58;break;case 54:t.prev=54,t.t3=t["catch"](46),e.loading=!1,alert(t.t3);case 58:case"end":return t.stop()}}),t,null,[[2,10],[16,24],[32,40],[46,54]])})))()}},components:{SubsEditor:r["a"],ChangeImg:c["a"],StepsEditor:v,SlideEditor:w}},S=C,x=(i("2566"),Object(p["a"])(S,s,a,!1,null,"376a3688",null));t["a"]=x.exports},e01a:function(e,t,i){"use strict";var s=i("23e7"),a=i("83ab"),n=i("da84"),r=i("5135"),c=i("861d"),o=i("9bf2").f,l=i("e893"),d=n.Symbol;if(a&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var u={},p=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof p?new d(e):void 0===e?d():d(e);return""===e&&(u[t]=!0),t};l(p,d);var m=p.prototype=d.prototype;m.constructor=p;var v=m.toString,_="Symbol(test)"==String(d("test")),f=/^Symbol\((.*)\)[^)]+$/;o(m,"description",{configurable:!0,get:function(){var e=c(this)?this.valueOf():this,t=v.call(e);if(r(u,e))return"";var i=_?t.slice(7,-1):t.replace(f,"$1");return""===i?void 0:i}}),s({global:!0,forced:!0},{Symbol:p})}},f9df:function(e,t,i){}}]);
//# sourceMappingURL=chunk-26221142.03396587.js.map