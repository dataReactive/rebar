(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1001:function(e,n,a){"use strict";const t={kind:"Fragment",name:"EnsayoPublicItem_Viewer",type:"Viewer",metadata:null,argumentDefinitions:[{kind:"RootArgument",name:"id",type:"ID"}],selections:[{kind:"LinkedField",alias:null,name:"Ensayo",storageKey:null,args:[{kind:"Variable",name:"id",variableName:"id"}],concreteType:"Ensayo",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"Ensayo_Title",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"Ensayo_Description",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"Ensayo_Content",args:null,storageKey:null}]}],hash:"c89d0591d3683ab3a528213ea89d139f"};e.exports=t},1944:function(e,n,a){"use strict";a.r(n);var t=a(46),l=a(47),s=a(161),i=a(280),r=a.n(i),o=a(880),c=a(0),u=a.n(c),d=a(12),m=a(26);n.default=Object(d.createFragmentContainer)(class extends u.a.Component{render(){const{Viewer:e}=this.props;let n=e.Ensayo.Ensayo_Title.substring(0,100),a=e.Ensayo.Ensayo_Description.substring(0,100);return u.a.createElement(m.a,null,u.a.createElement(r.a,{title:e.Ensayo.Ensayo_Title,meta:[{name:"description",content:e.Ensayo.Ensayo_Description}]}),u.a.createElement(t.a,null,u.a.createElement(s.a,{title:u.a.createElement("h1",null,n),subheader:u.a.createElement("h2",null,a)}),u.a.createElement(l.a,null,(new o.Parser).parse(e.Ensayo.Ensayo_Content))))}},function(){return a(1001)})}}]);