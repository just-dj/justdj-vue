webpackJsonp([1],{"+7oY":function(e,t){},"3eKi":function(e,t){},"4MUm":function(e,t){},"8Fkr":function(e,t){},"B5/4":function(e,t){},BdbL:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={};n.d(r,"increment",function(){return k}),n.d(r,"decrement",function(){return I});var o={};n.d(o,"getCount",function(){return T});var a=n("83B7"),s=n("Ip9M"),i=n.n(s),l=(n("8Fkr"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view")],1)],1)},staticRenderFns:[]});var c,m=n("C7Lr")({name:"App"},l,!1,function(e){n("+7oY")},null,null).exports,u=n("KGCO"),p=n("3cXf"),d=n.n(p),g=n("lC5x"),f=n.n(g),v=n("hRKE"),h=n.n(v),b=n("rVsN"),y=n.n(b),_=n("J0Oq"),w=this,F=(c=n.n(_)()(f.a.mark(function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";arguments.length>3&&void 0!==arguments[3]&&arguments[3];return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"GET"!==(r=r.toUpperCase())&&"DELETE"!==r||(t=t+"/"+n.toString()),e.abrupt("return",new y.a(function(e,o){var a=void 0;a=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject;var s="";"POST"!==r&&"PATCH"!==r||(s=d()(n)),a.open(r,t,!0),a.setRequestHeader("content-type","application/json"),a.setRequestHeader("token",sessionStorage.getItem("token")),a.send(s),a.onreadystatechange=function(){if(4===a.readyState)if(200===a.status){var t=a.response;"object"!==(void 0===t?"undefined":h()(t))&&2===(t=JSON.parse(t)).code&&(sessionStorage.clear(),localStorage.clear()),e(t)}else console.log("接口访问出错"),o(a)}}));case 3:case"end":return e.stop()}},e,w)})),function(){return c.apply(this,arguments)}),S="http://122.152.193.63:9002",x=function(e){return F(S+"/api/login/isExist",e,"POST")},P=function(e){return F(S+"/tApi/drop/one",e,"GET","")};n("zsLt"),n("kfHR");function $(e){return null===e||void 0===e||""===e||e===[]}function U(e,t){switch(t){case"phone":return/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(e);case"tel":return/^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(e);case"card":return/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e);case"pwd":return/^[a-zA-Z]\w{5,17}$/.test(e);case"postal":return/[1-9]\d{5}(?!\d)/.test(e);case"QQ":return/^[1-9][0-9]{4,9}$/.test(e);case"email":return/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(e);case"money":return/^\d*(?:\.\d{0,2})?$/.test(e);case"URL":return/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(e);case"IP":return/((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(e);case"date":return/^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(e)||/^(\d{4})\-(\d{2})\-(\d{2})$/.test(e);case"number":return/^[0-9]$/.test(e);case"english":return/^[a-zA-Z]+$/.test(e);case"chinese":return/^[\u4E00-\u9FA5]+$/.test(e);case"lower":return/^[a-z]+$/.test(e);case"upper":return/^[A-Z]+$/.test(e);case"HTML":return/<("[^"]*"|'[^']*'|[^'">])*>/.test(e);default:return!0}}var C=n("R4Sj"),k=function(e){(0,e.commit)("INCREMENT")},I=function(e){(0,e.commit)("DECREMENT")},T=function(e){return e.count};a.default.use(C.a);var L=new C.a.Store({actions:r,getters:o,state:{signInDialogVisible:!1},mutations:{signInDialogVisibleTrue:function(e){e.signInDialogVisible=!0},signInDialogVisibleFalse:function(e){e.signInDialogVisible=!1}}}),E={data:function(){var e=this,t=function(e,t,n){var r=t;$(r)?n(new Error("请输入邮箱")):U(r,"email")?x(r).then(function(e){!0===e.data?n(new Error("邮箱已被占用")):n()}):n(new Error("邮箱格式不正确"))},n=function(t,n,r){if($(n))r(new Error("请输入验证码"));else{var o="";o="person"===e.labelPosition?e.signUpFormPerson.email:e.signUpFormCompany.emal,(a={email:o,code:n},F(S+"/api/login/code/check/",a,"POST")).then(function(t){200===t.code?!0===t.data?r():r(new Error("验证码错误")):(r(new Error("验证码错误")),e.$message.error(t.msg))})}var a},r=function(e,t,n){$(t)?n(new Error("请输入密码")):t.length>=6&&t.length<=18?n():n(new Error("密码为6-18位字符串"))},o=function(t,n,r){("person"===e.labelPosition?e.signUpFormPerson.password:e.signUpFormCompany.password)===n?r():r(new Error("两次输入的密码不相同"))};return{companyTypeOptions:[],labelPosition:"person",signInForm:{email:"",password:""},signInRules:{email:[{required:!0,message:"请输入邮箱",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:16,message:"长度在 6 到 18 个字符",trigger:"blur"}]},signUpFormPerson:{email:"",code:"",name:"",sex:"",password:"",repeatPassword:""},signUpPersonRules:{email:[{required:!0,validator:t,trigger:"blur"}],code:[{required:!0,validator:n,trigger:"blur"}],name:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:1,max:15,message:"长度在 1 到 15 个字符",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"blur"}],password:[{required:!0,validator:r,trigger:"blur"}],repeatPassword:[{required:!0,validator:o,trigger:"blur"}]},signUpFormCompany:{email:"",code:"",contract:"",phone:"",companyName:"",companyType:"",password:"",repeatPassword:""},signUpCompanyRules:{email:[{required:!0,validator:t,trigger:"blur"}],code:[{required:!0,validator:n,trigger:"blur"}],contract:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:1,max:15,message:"长度在 1 到 15 个字符",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"}],password:[{required:!0,validator:r,trigger:"blur"}],repeatPassword:[{required:!0,validator:o,trigger:"blur"}]},signUpDialogVisible:!1,activeIndex:"1",activeIndex2:"1",isLogin:!1,user:{name:""}}},computed:{signInDialogVisible:{get:function(){return this.$store.state.signInDialogVisible},set:function(e){!0===e?this.$store.commit("signInDialogVisibleTrue"):this.$store.commit("signInDialogVisibleFalse")}}},methods:{clearAll:function(){this.$refs.signUpFormPerson.resetFields(),this.$refs.signUpFormCompany.resetFields(),this.labelPosition="person"},sendCode:function(){var e=this,t="";t="person"===this.labelPosition?this.signUpFormPerson.email:this.signUpFormCompany.email,console.log("发送邮件 "+t),$(t)||U(t,"email")&&x(t).then(function(n){var r;!0!==n.data&&(r=t,F(S+"/api/login/code/send",r,"POST")).then(function(t){200===t.code?e.$message.success("验证码已发送,请查收！"):e.$message.error(t.msg)})})},handleSelect:function(e,t){console.log("当前路径"+this.$route.path)},signIn:function(){var e,t=this,n={email:this.signInForm.email,password:this.signInForm.password};(e=n,F(S+"/api/login/in",e,"POST")).then(function(e){200===e.code?(t.$message.success("登录成功"),t.loginSucceed(e)):(t.$message.error({message:e.msg}),t.isLogin=!1)}).catch(function(e){console.log(e),t.$message.error("登录失败，网络异常,请重试")})},signOut:function(){var e,t=this;this.signInForm.phone,this.signInForm.password;F(S+"/api/login/out",e,"POST").then(function(e){t.isLogin=!1,200===e.code?(t.$message.success("退出登录成功"),sessionStorage.clear(),localStorage.clear(),t.$router.push({path:"/indexPage"})):(t.$message.error({message:e.msg}),t.isLogin=!1)}).catch(function(e){console.log(e),t.$message.error("登录失败，网络异常,请重试")})},signUp:function(){var e=this;"person"===this.labelPosition?this.$refs.signUpFormPerson.validate(function(t){if(!t)return!1;var n;(n=e.signUpFormPerson,F(S+"/api/login/register/person",n,"POST")).then(function(t){200===t.code?(e.$message.success("注册成功"),e.signUpDialogVisible=!1,e.loginSucceed(t)):e.$message.error(t.msg)})}):"company"===this.labelPosition&&this.$refs.signUpFormCompany.validate(function(t){if(!t)return!1;var n;(n=e.signUpFormCompany,F(S+"/api/login/register/company",n,"POST")).then(function(t){200===t.code?(e.$message.success("注册成功！"),e.signUpDialogVisible=!1,e.loginSucceed(t)):e.$message.error(t.msg)})})},loginSucceed:function(e){sessionStorage.setItem("token",e.data.t),localStorage.setItem("token",e.data.t),this.user=e.data.u,sessionStorage.setItem("user",d()(e.data.u)),localStorage.setItem("user",d()(e.data.u)),this.signInDialogVisible=!1,this.isLogin=!0}},mounted:function(){var e=this;$(localStorage.getItem("token"))||(this.isLogin=!0),$(localStorage.getItem("user"))?(console.log("还未登录 "),this.user={name:""}):this.user=JSON.parse(localStorage.getItem("user")),P("company_type").then(function(t){200===t.code?e.companyTypeOptions=t.data:e.$message.err("获取公司类型下拉列表失败"+t.msg)})}},D={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticStyle:{height:"100%"}},[n("el-container",{staticClass:"el-container main-page",staticStyle:{"background-color":"rgb(238,238,238)"}},[n("el-header",{staticStyle:{position:"relative","background-color":"#545c64",padding:"0 9rem"}},[n("div",{staticClass:"home-log",staticStyle:{"background-color":"#545c64",color:"#fff","box-sizing":"border-box"}},[e._v("\n        校园兼职\n        "),n("span",{staticStyle:{"font-size":"1rem","margin-left":"10px",color:"#ffffff"}},[n("i",{staticClass:"el-icon-location-outline"}),e._v("\n          北京\n        ")])]),e._v(" "),n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":this.$route.path,mode:"horizontal",router:"","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:e.handleSelect}},[n("el-menu-item",{key:"",attrs:{index:"/indexPage"}},[e._v("首页")]),e._v(" "),n("el-menu-item",{attrs:{index:"/jobPage"}},[e._v("兼职查询")]),e._v(" "),n("el-menu-item",{attrs:{index:"/userManagerPage"}},[e._v("用户管理")]),e._v(" "),n("el-menu-item",{attrs:{index:"/jobTypeManagerPage"}},[e._v("类别管理")]),e._v(" "),n("el-menu-item",{attrs:{index:"/jobManagerPage"}},[e._v("兼职管理")]),e._v(" "),n("el-menu-item",{attrs:{index:"/dataAnalysePage"}},[e._v("数据分析")]),e._v(" "),n("el-menu-item",{attrs:{index:"/messagePage"}},[e._v("消息")])],1),e._v(" "),n("div",{staticClass:"main-signIn"},[n("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.isLogin,expression:"!isLogin"}],staticStyle:{color:"#fff"},attrs:{type:"text"},on:{click:function(t){e.signInDialogVisible=!0}}},[e._v("登录")]),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:!e.isLogin,expression:"!isLogin"}],staticStyle:{color:"#fff"},attrs:{type:"text"},on:{click:function(t){e.signUpDialogVisible=!0}}},[e._v("注册")]),e._v(" "),n("el-dropdown",{directives:[{name:"show",rawName:"v-show",value:e.isLogin,expression:"isLogin"}]},[n("span",{staticStyle:{color:"#fff"}},[e._v("\n            "+e._s(this.user.name)),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("router-link",{attrs:{to:"/personCenter"}},[n("el-dropdown-item",{staticStyle:{"text-align":"center"}},[e._v("个人中心")])],1),e._v(" "),n("el-dropdown-item",{nativeOn:{click:function(t){e.updatePasswordVisible=!0}}},[e._v("修改密码")]),e._v(" "),n("el-dropdown-item",{nativeOn:{click:function(t){return e.signOut(t)}}},[e._v("退出登录")])],1)],1)],1)],1),e._v(" "),n("el-main",{staticStyle:{margin:"15px 8.1rem 15px 8.1rem",padding:"10px 0.9rem 0px 0.9rem","background-color":"#fff"}},[n("router-view",{staticStyle:{height:"100%"}})],1),e._v(" "),n("el-dialog",{attrs:{title:"登录",visible:e.signInDialogVisible,center:"",width:"31%","close-on-click-modal":!1},on:{"update:visible":function(t){e.signInDialogVisible=t}}},[n("el-form",{attrs:{model:e.signInForm,rules:e.signInRules,"label-width":"6.25rem","label-position":"left"}},[n("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[n("el-input",{attrs:{autocomplete:"off",placeholder:"请输入邮箱"},model:{value:e.signInForm.email,callback:function(t){e.$set(e.signInForm,"email",t)},expression:"signInForm.email"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"密码",prop:"password"}},[n("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"请输入密码"},model:{value:e.signInForm.password,callback:function(t){e.$set(e.signInForm,"password",t)},expression:"signInForm.password"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer",center:"true"},slot:"footer"},[n("el-button",{on:{click:function(t){e.signInDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.signIn}},[e._v("确 定")])],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"注册",visible:e.signUpDialogVisible,center:"","close-on-click-modal":!1},on:{"update:visible":function(t){e.signUpDialogVisible=t},close:e.clearAll}},[n("div",{staticStyle:{width:"100%",display:"flex","justify-content":"center","margin-bottom":"10px"}},[n("el-radio-group",{attrs:{size:"small"},model:{value:e.labelPosition,callback:function(t){e.labelPosition=t},expression:"labelPosition"}},[n("el-radio-button",{attrs:{label:"person"}},[e._v("普通用户")]),e._v(" "),n("el-radio-button",{attrs:{label:"company"}},[e._v("企业用户")])],1)],1),e._v(" "),n("el-form",{directives:[{name:"show",rawName:"v-show",value:"person"===e.labelPosition,expression:"labelPosition === 'person'"}],ref:"signUpFormPerson",attrs:{model:e.signUpFormPerson,"label-position":"left",rules:e.signUpPersonRules,"label-width":"5rem"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[n("el-input",{staticStyle:{width:"18.75rem"},attrs:{autocomplete:"off",placeholder:"请输入邮箱"},model:{value:e.signUpFormPerson.email,callback:function(t){e.$set(e.signUpFormPerson,"email",t)},expression:"signUpFormPerson.email"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12,label:""}},[n("el-button",{staticStyle:{"margin-left":"4.375rem"},on:{click:e.sendCode}},[e._v("发送验证码")]),e._v(" "),n("el-form-item",{staticStyle:{float:"right"},attrs:{label:"",prop:"code"}},[n("el-input",{staticStyle:{width:"6.75rem"},attrs:{autocomplete:"off",placeholder:"验证码"},model:{value:e.signUpFormPerson.code,callback:function(t){e.$set(e.signUpFormPerson,"code",t)},expression:"signUpFormPerson.code"}})],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"姓名",prop:"name"}},[n("el-input",{staticStyle:{width:"18.75rem"},attrs:{autocomplete:"off",placeholder:"请输入姓名"},model:{value:e.signUpFormPerson.name,callback:function(t){e.$set(e.signUpFormPerson,"name",t)},expression:"signUpFormPerson.name"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{staticStyle:{float:"right"},attrs:{label:"性别",prop:"sex"}},[n("el-radio-group",{staticStyle:{width:"18.75rem"},attrs:{size:"normal"},model:{value:e.signUpFormPerson.sex,callback:function(t){e.$set(e.signUpFormPerson,"sex",t)},expression:"signUpFormPerson.sex"}},[n("el-radio-button",{attrs:{label:"0"}},[e._v("男")]),e._v(" "),n("el-radio-button",{attrs:{label:"1"}},[e._v("女")])],1)],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"密码",prop:"password"}},[n("el-input",{staticStyle:{width:"18.75rem"},attrs:{autocomplete:"off",placeholder:"请输入密码"},model:{value:e.signUpFormPerson.password,callback:function(t){e.$set(e.signUpFormPerson,"password",t)},expression:"signUpFormPerson.password"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{staticStyle:{float:"right"},attrs:{label:"重复",prop:"repeatPassword"}},[n("el-input",{staticStyle:{width:"18.75rem"},attrs:{autocomplete:"off",placeholder:"请重复密码"},model:{value:e.signUpFormPerson.repeatPassword,callback:function(t){e.$set(e.signUpFormPerson,"repeatPassword",t)},expression:"signUpFormPerson.repeatPassword"}})],1)],1)],1)],1),e._v(" "),n("el-form",{directives:[{name:"show",rawName:"v-show",value:"company"===e.labelPosition,expression:"labelPosition === 'company'"}],ref:"signUpFormCompany",attrs:{model:e.signUpFormCompany,"label-position":"left",rules:e.signUpCompanyRules,"label-width":"5.6rem"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[n("el-input",{staticStyle:{width:"18.75rem"},attrs:{autocomplete:"off",placeholder:"请输入邮箱"},model:{value:e.signUpFormCompany.email,callback:function(t){e.$set(e.signUpFormCompany,"email",t)},expression:"signUpFormCompany.email"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12,label:""}},[n("el-button",{staticStyle:{"margin-left":"3.5rem"},on:{click:e.sendCode}},[e._v("发送验证码")]),e._v(" "),n("el-form-item",{staticStyle:{float:"right"},attrs:{label:"",prop:"code"}},[n("el-input",{staticStyle:{width:"7.75rem"},attrs:{autocomplete:"off",placeholder:"验证码"},model:{value:e.signUpFormCompany.code,callback:function(t){e.$set(e.signUpFormCompany,"code",t)},expression:"signUpFormCompany.code"}})],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"联系人",prop:"contract"}},[n("el-input",{staticStyle:{width:"18.75rem"},attrs:{autocomplete:"off",placeholder:"请输入联系人名称"},model:{value:e.signUpFormCompany.contract,callback:function(t){e.$set(e.signUpFormCompany,"contract",t)},expression:"signUpFormCompany.contract"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{staticStyle:{float:"right"},attrs:{label:"手机",prop:"phone"}},[n("el-input",{staticStyle:{width:"18.75rem"},attrs:{autocomplete:"off",placeholder:"请输入联系人手机号"},model:{value:e.signUpFormCompany.phone,callback:function(t){e.$set(e.signUpFormCompany,"phone",t)},expression:"signUpFormCompany.phone"}})],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"密码",prop:"password"}},[n("el-input",{staticStyle:{width:"18.75rem"},attrs:{autocomplete:"off",placeholder:"请输入密码"},model:{value:e.signUpFormCompany.password,callback:function(t){e.$set(e.signUpFormCompany,"password",t)},expression:"signUpFormCompany.password"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{staticStyle:{float:"right"},attrs:{label:"重复",prop:"repeatPassword"}},[n("el-input",{staticStyle:{width:"18.75rem"},attrs:{autocomplete:"off",placeholder:"请重复密码"},model:{value:e.signUpFormCompany.repeatPassword,callback:function(t){e.$set(e.signUpFormCompany,"repeatPassword",t)},expression:"signUpFormCompany.repeatPassword"}})],1)],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"公司名",prop:"companyName"}},[n("el-input",{staticStyle:{width:"18.75rem"},attrs:{autocomplete:"off",placeholder:"请输入公司名"},model:{value:e.signUpFormCompany.companyName,callback:function(t){e.$set(e.signUpFormCompany,"companyName",t)},expression:"signUpFormCompany.companyName"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{staticStyle:{float:"right"},attrs:{label:"类型",prop:"companyType"}},[n("el-select",{staticStyle:{width:"18.75rem"},attrs:{placeholder:"请选择公司类型"},model:{value:e.signUpFormCompany.companyType,callback:function(t){e.$set(e.signUpFormCompany,"companyType",t)},expression:"signUpFormCompany.companyType"}},e._l(e.companyTypeOptions,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.signUpDialogVisible=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.signUp}},[e._v("确 定")])],1)],1)],1)],1)},staticRenderFns:[]};var R=n("C7Lr")(E,D,!1,function(e){n("B5/4")},"data-v-22c17d2d",null).exports,V={render:function(){var e=this.$createElement;return(this._self._c||e)("section",[this._v("\n  首页\n")])},staticRenderFns:[]};var q=n("C7Lr")({},V,!1,function(e){n("4MUm")},"data-v-37daeca1",null).exports,O={render:function(){var e=this.$createElement;return(this._self._c||e)("section",[this._v("\n  数据分析\n")])},staticRenderFns:[]};var N=n("C7Lr")({name:"dataAnalysePage"},O,!1,function(e){n("eNPU")},"data-v-1d7b2dba",null).exports,M={render:function(){var e=this.$createElement;return(this._self._c||e)("section",[this._v("\n  兼职管理\n")])},staticRenderFns:[]};var j=n("C7Lr")({name:"jobManagerPage"},M,!1,function(e){n("YXtY")},"data-v-5cde9b99",null).exports,z={render:function(){var e=this.$createElement;return(this._self._c||e)("section",[this._v("\n  兼职\n")])},staticRenderFns:[]};var A=n("C7Lr")({name:"jobpage"},z,!1,function(e){n("BdbL")},"data-v-dcd8775c",null).exports,H={render:function(){var e=this.$createElement;return(this._self._c||e)("section",[this._v("\n  兼职类别管理\n")])},staticRenderFns:[]};var B=n("C7Lr")({name:"jobTypeManagerPage"},H,!1,function(e){n("gv+B")},"data-v-47369b55",null).exports,X={render:function(){var e=this.$createElement;return(this._self._c||e)("section",[this._v("\n  消息\n")])},staticRenderFns:[]};var Y=n("C7Lr")({name:"messagePage"},X,!1,function(e){n("3eKi")},"data-v-8ff6658a",null).exports,K=n("a3Yh"),G=n.n(K),J={name:"usermanagerpage",data:function(){var e;return e={filter:{name:"",email:"",userType:"",userStatus:"",pageNum:0,pageSize:10},userList:[],total:0,userTypeList:[],userStatusList:[],editForm:{id:"",userId:"",time:"",content:""},editFormRules:{userId:[{required:!0,message:"请选择执行维护人",trigger:"blur"}],time:[{required:!0,message:"请选择执行维护时间",trigger:"blur"}],content:[{required:!0,message:"请填写维护内容",trigger:"blur"}]},editFormVisible:!1,loading:!1,editFormLoading:!1,listLoading:!1,maintenance:[]},G()(e,"total",0),G()(e,"page",1),G()(e,"device_options",[]),G()(e,"users_options",[]),G()(e,"editForm_users_options",[]),G()(e,"lunarData",[]),e},methods:{resetFilters:function(){this.filter={name:"",email:"",userType:"",userStatus:"",pageNum:0,pageSize:10}},add:function(){},handleCurrentChange:function(e){this.filter.pageNum=e-1,this.query()},query:function(){var e,t=this;console.log("分页请求"),(e=this.filter,F(S+"/tApi/user/pageFind",e,"POST","")).then(function(e){200===e.code?(t.userList=e.data.content,t.total=e.data.totalElements):(2===e.code&&t.$store.commit("signInDialogVisibleTrue"),t.$message.error(e.msg))}).catch(function(e){console.log("出错了"+e)})},handleEdit:function(){},handleDel:function(e,t){var n=this;this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e;(e=t.id,F(S+"/tApi/user",e,"DELETE","")).then(function(e){200===e.code?(n.query(),n.$message.success("删除成功")):(2===e.code&&n.$store.commit("signInDialogVisibleTrue"),n.$message.error(e.msg))})}).catch(function(){})},formatUserType:function(e,t){return 0===e.type?"普通用户":1===e.type?"企业用户":""},formatUserSex:function(e,t){return"0"===e.sex?"男":"1"===e.sex?"女":""}},mounted:function(){var e=this;P("user_type").then(function(t){200===t.code?e.userTypeList=t.data:e.$message.error("用户类型下拉列表获取失败")}),P("user_status").then(function(t){200===t.code?e.userStatusList=t.data:e.$message.error("用户类型下拉列表获取失败")}),this.query()}},Z={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("div",{staticStyle:{width:"100%",height:"100%",position:"relative"}},[n("div",{staticClass:"global_toolbar",staticStyle:{width:"100%"}},[n("el-form",{ref:"filter",attrs:{inline:!0,model:this.filter}},[n("el-form-item",[e.add?n("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.add("other")}}},[n("span",{staticClass:"toolbar_device_add"},[e._v("新增")])]):e._e()],1),e._v(" "),n("el-form-item",[n("el-input",{staticStyle:{width:"14rem"},attrs:{placeholder:"用户名"},model:{value:e.filter.name,callback:function(t){e.$set(e.filter,"name",t)},expression:"filter.name"}})],1),e._v(" "),n("el-form-item",[n("el-input",{staticStyle:{width:"14rem"},attrs:{placeholder:"邮箱"},model:{value:e.filter.email,callback:function(t){e.$set(e.filter,"email",t)},expression:"filter.email"}})],1),e._v(" "),n("el-form-item",[n("el-select",{staticStyle:{width:"14rem"},attrs:{placeholder:"用户类型"},model:{value:e.filter.userType,callback:function(t){e.$set(e.filter,"userType",t)},expression:"filter.userType"}},e._l(e.userTypeList,function(e){return n("el-option",{attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),n("el-form-item",[n("el-select",{staticStyle:{width:"14rem"},attrs:{placeholder:"用户状态"},model:{value:e.filter.userStatus,callback:function(t){e.$set(e.filter,"userStatus",t)},expression:"filter.userStatus"}},e._l(e.userStatusList,function(e){return n("el-option",{attrs:{label:e.label,value:parseInt(e.value)}})}),1)],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"success",icon:"el-icon-search"},nativeOn:{click:function(t){return e.query(t)}}},[e._v("查询")])],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"success"},nativeOn:{click:function(t){return e.resetFilters(t)}}},[e._v("重置")])],1)],1)],1),e._v(" "),n("div",{staticStyle:{position:"relative"}},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%",position:"absolute",top:"0",left:"0"},attrs:{data:e.userList,"highlight-current-row":"","header-row-class-name":"global_table_th","row-class-name":"global_table_tr","cell-class-name":"global_table_normal"}},[n("el-table-column",{attrs:{prop:"name",label:"用户名","min-width":"30",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"email",label:"邮箱","min-width":"80",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"phone",label:"手机号","min-width":"80",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"sex",label:"性别","min-width":"60",formatter:e.formatUserSex,align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"creditRating",label:"信誉分","min-width":"60",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"type",label:"用户类型","min-width":"80",formatter:e.formatUserType,align:"center"}}),e._v(" "),n("el-table-column",{attrs:{prop:"userStatus",label:"用户状态","min-width":"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.userStatus?n("el-tag",{attrs:{type:"warning"}},[e._v("账号停用")]):e._e(),e._v(" "),2===t.row.userStatus?n("el-tag",{attrs:{type:"success"}},[e._v("帐号正常")]):e._e(),e._v(" "),4===t.row.userStatus?n("el-tag",{attrs:{type:"danger"}},[e._v("未认证账户")]):e._e()]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",width:"140",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"编辑",placement:"top"}},[n("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(n){return e.handleEdit(t.$index,t.row)}}})],1),e._v(" "),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除",placement:"top"}},[n("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(n){return e.handleDel(t.$index,t.row)}}})],1)]}}])})],1)],1),e._v(" "),n("div",{staticClass:"toolbar",staticStyle:{position:"absolute",right:"0",bottom:"10px"},attrs:{span:24}},[n("el-pagination",{staticStyle:{float:"right"},attrs:{"current-page":e.filter.currentPage,"page-size":e.filter.pageSize,layout:"total,  prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)]),e._v(" "),n("el-dialog",{attrs:{title:"添加维护记录",visible:e.editFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editFormVisible=t}}},[n("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"150px",rules:e.editFormRules}},[n("el-form-item",{attrs:{label:"执行维护时间",prop:"time"}},[n("el-date-picker",{attrs:{editable:!1,type:"datetime",format:"yyyy-MM-dd HH:mm:ss",placeholder:"执行维护时间"},model:{value:e.editForm.time,callback:function(t){e.$set(e.editForm,"time",t)},expression:"editForm.time"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"执行维护人",prop:"userId"}},[n("el-select",{attrs:{placeholder:"执行维护人"},model:{value:e.editForm.userId,callback:function(t){e.$set(e.editForm,"userId",t)},expression:"editForm.userId"}},e._l(e.editForm_users_options,function(e){return n("el-option",{key:e.id,attrs:{label:e.nickName,value:e.id}})}),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"维护内容",prop:"content"}},[n("el-input",{attrs:{type:"textarea",placeholder:"请输入维护内容"},model:{value:e.editForm.content,callback:function(t){e.$set(e.editForm,"content",t)},expression:"editForm.content"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),e._v(" "),n("el-button",{attrs:{type:"primary",loading:e.editFormLoading},nativeOn:{click:function(t){return e.editSubmit(t)}}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]};var Q={render:function(){var e=this.$createElement;return(this._self._c||e)("section",[this._v("个人中心")])},staticRenderFns:[]};var W=[{path:"/",component:R,redirect:"/indexPage",name:"导航一",iconCls:"el-icon-message",children:[{path:"/indexPage",component:q,name:"首页",hidden:!0},{path:"/jobPage",component:A,name:"兼职查询",hidden:!0},{path:"/userManagerPage",component:n("C7Lr")(J,Z,!1,function(e){n("zlTk")},"data-v-1c2b55bb",null).exports,name:"用户管理",hidden:!0},{path:"/jobTypeManagerPage",component:B,name:"类别管理",hidden:!0},{path:"/jobManagerPage",component:j,name:"兼职管理",hidden:!0},{path:"/dataAnalysePage",component:N,name:"数据分析",hidden:!0},{path:"/messagePage",component:Y,name:"消息",hidden:!0},{path:"/personCenter",component:n("C7Lr")({name:"personCenter"},Q,!1,function(e){n("jK13")},"data-v-0f6b51f4",null).exports,name:"个人中心",hidden:!0}]}],ee=n("aozt"),te=n.n(ee);n.d(t,"router",function(){return ne}),a.default.config.productionTip=!1,a.default.use(u.a),a.default.use(i.a),a.default.use(C.a),a.default.prototype.$axios=te.a;var ne=new u.a({routes:W});new a.default({router:ne,store:L,render:function(e){return e(m)}}).$mount("#app")},YXtY:function(e,t){},eNPU:function(e,t){},"gv+B":function(e,t){},jK13:function(e,t){},zlTk:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.4b2febaa752553585603.js.map