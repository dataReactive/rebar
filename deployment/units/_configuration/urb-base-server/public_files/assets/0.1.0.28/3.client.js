webpackJsonp([3],{2301:function(e,n,t){function a(e){return e&&e.__esModule?e:{default:e}}function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),s=t(228),u=a(s),d=t(81),c=a(d),p=t(114),y=a(p),f=t(38),E=t(3),m=(a(E),t(0)),_=a(m),g=t(33),h=t(2549),k=a(h),b=t(2351),v=a(b),C=t(140),w=a(C),T=function(e){return{card:{minWidth:275},addNewButton:{float:"right",marginTop:-58,marginRight:20}}},O=function(e){function n(e,t){l(this,n);var a=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t));return a._handle_updateHandler_Ensayo=function(e){var n=e.Ensayo_Title,t=e.Ensayo_Description,l=e.Ensayo_Content,o=a.props,i=o.relay,r=o.Viewer;k.default.commit(i.environment,r,n,t,l)},a._handle_Close_Properties=function(){a.setState({propertiesIsOpen:!1})},a._handle_onClick_Add=function(){a.setState({propertiesIsOpen:!0})},a.state={propertiesIsOpen:!1},a}return i(n,e),r(n,[{key:"render",value:function(){var e=this.props.classes,n=this.state.propertiesIsOpen;return _.default.createElement(w.default,null,_.default.createElement(y.default,{className:e.card},_.default.createElement(p.CardHeader,{title:"Ensayo",subheader:"List of essays"}),_.default.createElement(p.CardContent,null,_.default.createElement("div",{className:e.addNewButton},_.default.createElement(c.default,{fab:!0,color:"primary",className:e.button,onClick:this._handle_onClick_Add},_.default.createElement(u.default,null))),this.props.children),n&&_.default.createElement(v.default,{Ensayo_Title:"",Ensayo_Content:"",Ensayo_Description:"",handlerUpdate:this._handle_updateHandler_Ensayo,handlerClose:this._handle_Close_Properties})))}}]),n}(_.default.Component);n.default=(0,g.createFragmentContainer)((0,f.withStyles)(T)(O),{Viewer:function(){return t(2551)}})},2351:function(e,n,t){function a(e){return e&&e.__esModule?e:{default:e}}function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),s=t(81),u=a(s),d=t(225),c=a(d),p=t(117),y=a(p),f=t(3),E=(a(f),t(0)),m=a(E),_=t(38),g=function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing.unit},richTextContainer:{width:"100%",height:300,display:"inline-block",position:"relative"}}},h=function(e){function n(e,t){l(this,n);var a=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,t));a._handle_Close=function(){a.props.handlerClose()},a._handle_OK=function(){a.props.handlerUpdate({Ensayo_Title:a.state.Ensayo_Title,Ensayo_Description:a.state.Ensayo_Description,Ensayo_Content:""}),a.props.handlerClose()};var i=a.props,r=i.Ensayo_Title,s=i.Ensayo_Description;return i.Ensayo_Content,a.state={Ensayo_Title:r,Ensayo_Description:s},a}return i(n,e),r(n,[{key:"render",value:function(){var e=this,n=(this.props.classes,this.state),t=n.Ensayo_Title,a=n.Ensayo_Description;return m.default.createElement("div",null,m.default.createElement(c.default,{open:!0,onRequestClose:this._handle_Close},m.default.createElement(d.DialogTitle,null,"Ensayo"),m.default.createElement(d.DialogContent,null,m.default.createElement(y.default,{label:"Title",fullWidth:!0,value:t,onChange:function(n){return e.setState({Ensayo_Title:n.target.value})}}),m.default.createElement(y.default,{label:"Description",fullWidth:!0,value:a,onChange:function(n){return e.setState({Ensayo_Description:n.target.value})}})),m.default.createElement(d.DialogActions,null,m.default.createElement(u.default,{onClick:this._handle_Close},"Cancel"),m.default.createElement(u.default,{onClick:this._handle_OK,color:"primary"},"OK"))))}}]),n}(m.default.Component);n.default=(0,_.withStyles)(g)(h)},2549:function(e,n,t){function a(e,n,t){var a=e.get(n.id),l=i.ConnectionHandler.getConnection(a,"EnsayoList_Ensayos");l&&i.ConnectionHandler.insertEdgeAfter(l,t)}function l(e,n,t,l,i){var u=s++;return(0,o.commitMutation)(e,{mutation:r,variables:{input:{Ensayo_Title:t,Ensayo_Description:l,Ensayo_Content:i,clientMutationId:u}},updater:function(e){var t=e.getRootField("EnsayoAdd");a(e,n,t.getLinkedRecord("EnsayosEdge"))},optimisticUpdater:function(e){var o="client:EnsayoAdd:Ensayo:"+u,r=e.create(o,"Ensayo");r.setValue(t,"Ensayo_Title"),r.setValue(l,"Ensayo_Description"),r.setValue(i,"Ensayo_Content"),r.setValue(o,"id");var s=e.create("client:EnsayoAdd:EnsayosEdge:"+u,"EnsayosEdge");s.setLinkedRecord(r,"node"),a(e,n,s)}})}Object.defineProperty(n,"__esModule",{value:!0});var o=t(33),i=t(93),r=function(){return t(2550)},s=0;n.default={commit:l}},2550:function(e,n,t){"use strict";var a={fragment:{argumentDefinitions:[{kind:"LocalArgument",name:"input",type:"EnsayoAddInput!",defaultValue:null}],kind:"Fragment",metadata:null,name:"EnsayoAddMutation",selections:[{kind:"LinkedField",alias:null,args:[{kind:"Variable",name:"input",variableName:"input",type:"EnsayoAddInput!"}],concreteType:"EnsayoAddPayload",name:"EnsayoAdd",plural:!1,selections:[{kind:"LinkedField",alias:null,args:null,concreteType:"Viewer",name:"Viewer",plural:!1,selections:[{kind:"ScalarField",alias:null,args:null,name:"id",storageKey:null}],storageKey:null},{kind:"LinkedField",alias:null,args:null,concreteType:"EnsayosEdge",name:"EnsayosEdge",plural:!1,selections:[{kind:"ScalarField",alias:null,args:null,name:"cursor",storageKey:null},{kind:"LinkedField",alias:null,args:null,concreteType:"Ensayo",name:"node",plural:!1,selections:[{kind:"ScalarField",alias:null,args:null,name:"id",storageKey:null},{kind:"ScalarField",alias:null,args:null,name:"Ensayo_Title",storageKey:null},{kind:"ScalarField",alias:null,args:null,name:"Ensayo_Description",storageKey:null},{kind:"ScalarField",alias:null,args:null,name:"Ensayo_Content",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Mutation"},id:null,kind:"Batch",metadata:{},name:"EnsayoAddMutation",query:{argumentDefinitions:[{kind:"LocalArgument",name:"input",type:"EnsayoAddInput!",defaultValue:null}],kind:"Root",name:"EnsayoAddMutation",operation:"mutation",selections:[{kind:"LinkedField",alias:null,args:[{kind:"Variable",name:"input",variableName:"input",type:"EnsayoAddInput!"}],concreteType:"EnsayoAddPayload",name:"EnsayoAdd",plural:!1,selections:[{kind:"LinkedField",alias:null,args:null,concreteType:"Viewer",name:"Viewer",plural:!1,selections:[{kind:"ScalarField",alias:null,args:null,name:"id",storageKey:null}],storageKey:null},{kind:"LinkedField",alias:null,args:null,concreteType:"EnsayosEdge",name:"EnsayosEdge",plural:!1,selections:[{kind:"ScalarField",alias:null,args:null,name:"cursor",storageKey:null},{kind:"LinkedField",alias:null,args:null,concreteType:"Ensayo",name:"node",plural:!1,selections:[{kind:"ScalarField",alias:null,args:null,name:"id",storageKey:null},{kind:"ScalarField",alias:null,args:null,name:"Ensayo_Title",storageKey:null},{kind:"ScalarField",alias:null,args:null,name:"Ensayo_Description",storageKey:null},{kind:"ScalarField",alias:null,args:null,name:"Ensayo_Content",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},text:"mutation EnsayoAddMutation(\n  $input: EnsayoAddInput!\n) {\n  EnsayoAdd(input: $input) {\n    Viewer {\n      id\n    }\n    EnsayosEdge {\n      cursor\n      node {\n        id\n        Ensayo_Title\n        Ensayo_Description\n        Ensayo_Content\n      }\n    }\n  }\n}\n"};e.exports=a},2551:function(e,n,t){"use strict";var a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"EnsayoInPaceEditScreen_Viewer",selections:[{kind:"ScalarField",alias:null,args:null,name:"id",storageKey:null}],type:"Viewer"};e.exports=a}});