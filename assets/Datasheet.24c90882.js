import{g as B,a as L,s as w,P as ie,r as b,u as H,_ as E,b as d,j as t,c as N,d as _,T as R,e as y,B as de,f as ue,h as A,i as j,k as pe,l as me,m as he,n as fe,o as Ce,p as be,q as xe,I as Z,C as M,t as S,v as ge,A as ve,w as ee,F as ye,L as Se}from"./index.94a47da9.js";import{u as we,M as ke}from"./useCategory.9a1dd12c.js";import{M as Re,C as Fe,i as Pe,T as $e,D as X}from"./datasheet.service.a2b9a152.js";import{u as q,f as oe,M as Me,F as Ie,T as Ne}from"./TextField.00c012f4.js";import{T as Te}from"./Tooltip.c2d12002.js";import{B as De}from"./requestHandler.service.0d012add.js";import"./category.service.2e9effcc.js";function Be(e){return B("MuiCard",e)}L("MuiCard",["root"]);const Le=["className","raised"],Ee=e=>{const{classes:o}=e;return _({root:["root"]},Be,o)},_e=w(ie,{name:"MuiCard",slot:"Root",overridesResolver:(e,o)=>o.root})(()=>({overflow:"hidden"})),He=b.exports.forwardRef(function(o,s){const a=H({props:o,name:"MuiCard"}),{className:r,raised:l=!1}=a,p=E(a,Le),i=d({},a,{raised:l}),m=Ee(i);return t(_e,d({className:N(m.root,r),elevation:l?8:void 0,ref:s,ownerState:i},p))}),ze=He;function Ae(e){return B("MuiCardContent",e)}L("MuiCardContent",["root"]);const Oe=["className","component"],Ue=e=>{const{classes:o}=e;return _({root:["root"]},Ae,o)},Ge=w("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,o)=>o.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),je=b.exports.forwardRef(function(o,s){const a=H({props:o,name:"MuiCardContent"}),{className:r,component:l="div"}=a,p=E(a,Oe),i=d({},a,{component:l}),m=Ue(i);return t(Ge,d({as:l,className:N(m.root,r),ownerState:i,ref:s},p))}),qe=je;function We(e){return B("MuiCardHeader",e)}const Ve=L("MuiCardHeader",["root","avatar","action","content","title","subheader"]),Y=Ve,Je=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],Ke=e=>{const{classes:o}=e;return _({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},We,o)},Qe=w("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,o)=>d({[`& .${Y.title}`]:o.title,[`& .${Y.subheader}`]:o.subheader},o.root)})({display:"flex",alignItems:"center",padding:16}),Xe=w("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,o)=>o.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),Ye=w("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,o)=>o.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),Ze=w("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,o)=>o.content})({flex:"1 1 auto"}),eo=b.exports.forwardRef(function(o,s){const a=H({props:o,name:"MuiCardHeader"}),{action:r,avatar:l,className:p,component:i="div",disableTypography:m=!1,subheader:n,subheaderTypographyProps:C,title:u,titleTypographyProps:v}=a,F=E(a,Je),g=d({},a,{component:i,disableTypography:m}),h=Ke(g);let c=u;c!=null&&c.type!==R&&!m&&(c=t(R,d({variant:l?"body2":"h5",className:h.title,component:"span",display:"block"},v,{children:c})));let f=n;return f!=null&&f.type!==R&&!m&&(f=t(R,d({variant:l?"body2":"body1",className:h.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:f}))),y(Qe,d({className:N(h.root,p),as:i,ref:s,ownerState:g},F,{children:[l&&t(Xe,{className:h.avatar,ownerState:g,children:l}),y(Ze,{className:h.content,ownerState:g,children:[c,f]}),r&&t(Ye,{className:h.action,ownerState:g,children:r})]}))}),oo=eo;function to(e){return B("PrivateSwitchBase",e)}L("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const ro=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],so=e=>{const{classes:o,checked:s,disabled:a,edge:r}=e,l={root:["root",s&&"checked",a&&"disabled",r&&`edge${A(r)}`],input:["input"]};return _(l,to,o)},ao=w(de)(({ownerState:e})=>d({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),no=w("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),lo=b.exports.forwardRef(function(o,s){const{autoFocus:a,checked:r,checkedIcon:l,className:p,defaultChecked:i,disabled:m,disableFocusRipple:n=!1,edge:C=!1,icon:u,id:v,inputProps:F,inputRef:g,name:h,onBlur:c,onChange:f,onFocus:x,readOnly:k,required:T,tabIndex:D,type:P,value:V}=o,re=E(o,ro),[J,se]=ue({controlled:r,default:Boolean(i),name:"SwitchBase",state:"checked"}),I=q(),ae=$=>{x&&x($),I&&I.onFocus&&I.onFocus($)},ne=$=>{c&&c($),I&&I.onBlur&&I.onBlur($)},le=$=>{if($.nativeEvent.defaultPrevented)return;const Q=$.target.checked;se(Q),f&&f($,Q)};let z=m;I&&typeof z>"u"&&(z=I.disabled);const ce=P==="checkbox"||P==="radio",U=d({},o,{checked:J,disabled:z,disableFocusRipple:n,edge:C}),K=so(U);return y(ao,d({component:"span",className:N(K.root,p),centerRipple:!0,focusRipple:!n,disabled:z,tabIndex:null,role:void 0,onFocus:ae,onBlur:ne,ownerState:U,ref:s},re,{children:[t(no,d({autoFocus:a,checked:r,defaultChecked:i,className:K.input,disabled:z,id:ce&&v,name:h,onChange:le,readOnly:k,ref:g,required:T,ownerState:U,tabIndex:D,type:P},P==="checkbox"&&V===void 0?{}:{value:V},F)),J?l:u]}))}),co=lo,io=j(t("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),uo=j(t("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),po=j(t("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function mo(e){return B("MuiCheckbox",e)}const ho=L("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),G=ho,fo=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Co=e=>{const{classes:o,indeterminate:s,color:a}=e,r={root:["root",s&&"indeterminate",`color${A(a)}`]},l=_(r,mo,o);return d({},o,l)},bo=w(co,{shouldForwardProp:e=>pe(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,s.indeterminate&&o.indeterminate,s.color!=="default"&&o[`color${A(s.color)}`]]}})(({theme:e,ownerState:o})=>d({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:me(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${G.checked}, &.${G.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${G.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),xo=t(uo,{}),go=t(io,{}),vo=t(po,{}),yo=b.exports.forwardRef(function(o,s){var a,r;const l=H({props:o,name:"MuiCheckbox"}),{checkedIcon:p=xo,color:i="primary",icon:m=go,indeterminate:n=!1,indeterminateIcon:C=vo,inputProps:u,size:v="medium",className:F}=l,g=E(l,fo),h=n?C:m,c=n?C:p,f=d({},l,{color:i,indeterminate:n,size:v}),x=Co(f);return t(bo,d({type:"checkbox",inputProps:d({"data-indeterminate":n},u),icon:b.exports.cloneElement(h,{fontSize:(a=h.props.fontSize)!=null?a:v}),checkedIcon:b.exports.cloneElement(c,{fontSize:(r=c.props.fontSize)!=null?r:v}),ownerState:f,ref:s,className:N(x.root,F)},g,{classes:x}))}),So=yo;function wo(e){return B("MuiFormControlLabel",e)}const ko=L("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),O=ko,Ro=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],Fo=e=>{const{classes:o,disabled:s,labelPlacement:a,error:r}=e,l={root:["root",s&&"disabled",`labelPlacement${A(a)}`,r&&"error"],label:["label",s&&"disabled"]};return _(l,wo,o)},Po=w("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[{[`& .${O.label}`]:o.label},o.root,o[`labelPlacement${A(s.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>d({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${O.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${O.label}`]:{[`&.${O.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),$o=b.exports.forwardRef(function(o,s){var a;const r=H({props:o,name:"MuiFormControlLabel"}),{className:l,componentsProps:p={},control:i,disabled:m,disableTypography:n,label:C,labelPlacement:u="end",slotProps:v={}}=r,F=E(r,Ro),g=q();let h=m;typeof h>"u"&&typeof i.props.disabled<"u"&&(h=i.props.disabled),typeof h>"u"&&g&&(h=g.disabled);const c={disabled:h};["checked","name","onChange","value","inputRef"].forEach(P=>{typeof i.props[P]>"u"&&typeof r[P]<"u"&&(c[P]=r[P])});const f=oe({props:r,muiFormControl:g,states:["error"]}),x=d({},r,{disabled:h,labelPlacement:u,error:f.error}),k=Fo(x),T=(a=v.typography)!=null?a:p.typography;let D=C;return D!=null&&D.type!==R&&!n&&(D=t(R,d({component:"span"},T,{className:N(k.label,T==null?void 0:T.className),children:D}))),y(Po,d({className:N(k.root,l),ownerState:x,ref:s},F,{children:[b.exports.cloneElement(i,c),D]}))}),Mo=$o;function Io(e){return B("MuiFormGroup",e)}L("MuiFormGroup",["root","row","error"]);const No=["className","row"],To=e=>{const{classes:o,row:s,error:a}=e;return _({root:["root",s&&"row",a&&"error"]},Io,o)},Do=w("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:s}=e;return[o.root,s.row&&o.row]}})(({ownerState:e})=>d({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),Bo=b.exports.forwardRef(function(o,s){const a=H({props:o,name:"MuiFormGroup"}),{className:r,row:l=!1}=a,p=E(a,No),i=q(),m=oe({props:a,muiFormControl:i,states:["error"]}),n=d({},a,{row:l,error:m.error}),C=To(n);return t(Do,d({className:N(C.root,r),ownerState:n,ref:s},p))}),Lo=Bo;var W={},Eo=fe.exports;Object.defineProperty(W,"__esModule",{value:!0});var te=W.default=void 0,_o=Eo(he()),Ho=Ce,zo=(0,_o.default)((0,Ho.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");te=W.default=zo;const Ao=({datasheet:e,actions:o})=>{var C;const s=be(xe),a=o?Object.keys(o):void 0,[r,l]=b.exports.useState(null),p=Boolean(r),i=u=>{l(u.currentTarget)},m=()=>{l(null)},n=y("div",{children:[e.model&&t("span",{children:e.model}),t("br",{}),t("span",{className:"code",children:e.code})]});return y(ze,{sx:{maxWidth:250},children:[t(oo,{action:t(Z,{"aria-label":"settings","aria-controls":p?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":p?"true":void 0,onClick:i,children:t(te,{})}),title:e.name,titleTypographyProps:{variant:"subtitle1"},subheader:n,subheaderTypographyProps:{variant:"subtitle2"}}),s.role!==M.ROLES.GUEST&&t(Me,{id:"basic-menu",anchorEl:r,open:p,onClose:m,MenuListProps:{"aria-labelledby":"basic-button"},children:o&&a&&a.map(u=>t(Re,{onClick:()=>{m(),o[u].action(e._id)},children:o[u].icon},u))}),t(S,{display:"flex",flexWrap:"wrap",justifyContent:"center",children:t(Fe,{sx:{width:250,height:250},component:"img",image:(C=e.image)!=null?C:Pe,alt:"img"})}),t(R,{component:"p",sx:{m:1},children:e==null?void 0:e.description}),t(qe,{className:"card-datasheet",sx:{p:1,"&:last-child":{pb:1}},children:t($e,{datasheet:e})})]})},Oo=()=>{const e=ge(),[o,s]=b.exports.useState([]),[a,r]=b.exports.useState([]),[l,p]=b.exports.useState(""),[i,m]=b.exports.useState([]),[n,C]=b.exports.useState(""),u=async()=>{const c=await X.getAll();c&&(s(c),r(c))},v=async c=>{await X.delete(c)&&(s(x=>x.filter(k=>k._id!==c)),r(x=>x.filter(k=>k._id!==c)),p(""))},F={cancel:{action:()=>p("")},confirm:{action:c=>v(c)}},g={edit:{icon:M.ICONS.EDIT,action:c=>e(c)},delete:{icon:M.ICONS.DELETE,action:c=>p(c)}},h=()=>{const c=o.filter(f=>{let x=!0;const k=f.categories;return i.forEach(T=>{x=k.includes(T)}),x}).filter(f=>{var x;return f.code.toLowerCase().includes(n)||f.name.toLowerCase().includes(n)||((x=f.model)==null?void 0:x.toLowerCase().includes(n))});r(c)};return b.exports.useEffect(()=>{h()},[i,n]),b.exports.useEffect(()=>{u()},[]),b.exports.useEffect(()=>()=>{ve.reset()}),{datasheets:o,deleteDatasheet:l,actionsModal:F,actionsCard:g,datasheetsToShow:a,setDatasheetsToShow:r,categoryFilter:i,setCategoryFilter:m,searchFilter:n,setSearchFilter:C}};const Uo=({filterAction:e})=>{const{t:o}=ee(),{categories:s}=we(),a=r=>{e(r.target.value)};return t(ye,{children:y(S,{display:"flex",flexDirection:"column",children:[t(R,{variant:"h6",component:"div",sx:{color:"#1976D2"},children:o(M.CATEGORIES)}),t(Lo,{children:s.map(r=>t(Mo,{control:t(So,{}),value:r._id,onChange:a,label:r.name},r._id))})]})})},Qo=()=>{const{t:e}=ee(),{deleteDatasheet:o,actionsModal:s,actionsCard:a,datasheetsToShow:r,setCategoryFilter:l,setSearchFilter:p}=Oo(),i=()=>n=>{var u;const C=(u=n.target.value)==null?void 0:u.toLowerCase();p(C)},m=n=>{l(C=>{let u=[...C];return u.includes(n)?u=u.filter(v=>v!==n):u.push(n),u})};return y(S,{display:"flex",flexDirection:"column",children:[t(S,{display:"flex",justifyContent:"flex-end",children:t(Se,{to:"new",children:t(Te,{title:`${e(M.CREATE)}  ${e(M.DATASHEET)}`,children:t(Z,{children:M.ICONS.ADD})})})}),y(S,{display:"flex",sx:{mt:1,flexDirection:{xs:"column",md:"row",lg:"row"}},children:[t(S,{display:"flex",sx:{mt:3,width:{xs:"100%",md:"20%",lg:"15%"}},children:t(Uo,{filterAction:m})}),y(S,{display:"flex",flexDirection:"column",sx:{mt:1,width:{xs:"100%",md:"80%",lg:"85%"}},children:[y(S,{sx:{mt:1,width:{xs:"100%",md:"50%",lg:"50%"}},children:[t(Ie,{fullWidth:!0,margin:"normal",children:t(Ne,{size:"small",label:e(M.SEARCH),onChange:i()})}),y(R,{component:"p",children:[r.length," Resultados"]})]}),t(S,{display:"flex",flexWrap:"wrap",sx:{mt:1,justifyContent:{xs:"center",md:"flex-start",lg:"flex-start"}},children:r.map(n=>t(S,{sx:{m:1},children:t(Ao,{datasheet:n,actions:a})},n._id))}),o&&t(ke,{isOpen:!!o,handlerClose:s.cancel.action,children:y(S,{children:[t(R,{component:"div",sx:{flexGrow:1},children:e(M.MESSAGE_ACTIONS.DELETE)}),t(S,{className:"actions-modal",children:s&&Object.keys(s).map(n=>t(De,{variant:"contained",onClick:()=>s[n].action(o),children:e(n)},n))})]})})]})]})]})};export{Qo as Datasheet};