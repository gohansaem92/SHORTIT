(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[764],{429:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/short-links/new",function(){return e(8843)}])},4759:function(t,n,e){"use strict";e.d(n,{Z:function(){return c}});var r=e(5893),o=e(6610),i=e.n(o);let a={primary:i().primary,secondary:i().secondary,minimal:i().minimal,outline:i().outline};function c(t){var n;let{className:e="",variant:o,as:c,...s}=t,u="".concat(i().button," ").concat(null!==(n=a[o])&&void 0!==n?n:i().primary," ").concat(e);return c?(0,r.jsx)(c,{className:u,...s}):(0,r.jsx)("button",{className:u,...s})}},9143:function(t,n,e){"use strict";var r=e(5893),o=e(3548),i=e.n(o);function a(t){let{className:n,...e}=t;return(0,r.jsx)("div",{className:"".concat(n," ").concat(i().card),...e})}a.Footer=function(t){let{className:n,...e}=t;return(0,r.jsx)("div",{className:"".concat(n," ").concat(i().cardFooter),...e})},n.Z=a},3599:function(t,n,e){"use strict";var r=e(5893),o=e(7294),i=e(3141),a=e.n(i);n.Z=(0,o.forwardRef)(function(t,n){let{className:e="",variant:o,...i}=t,c="".concat(a().input," ").concat(e);return(0,r.jsx)("input",{className:c,...i,ref:n})})},893:function(t,n,e){"use strict";e.d(n,{M:function(){return _},Z:function(){return m}});var r=e(5893),o=e(7294),i=e(1163),a=e(5155),c=e.n(a),s=e(9143),u=e(4759),l=e(3599);let _={Create:"create",Edit:"edit"};function m(t){let{type:n=_.Create,initialValues:e={title:"",url:""},onSubmit:a}=t,{title:m,url:d}=e,[f,h]=(0,o.useState)({title:m,url:d}),p=(0,i.useRouter)();async function x(t){t.preventDefault(),await a(f),h({title:"",url:""})}function b(t){let{name:n,value:e}=t.target;h(t=>({...t,[n]:e}))}return(0,r.jsx)(s.Z,{children:(0,r.jsxs)("form",{className:c().shortLinkForm,onSubmit:x,children:[(0,r.jsxs)("label",{className:c().label,children:["제목",(0,r.jsx)(l.Z,{className:c().input,name:"title",value:f.title,onChange:b,placeholder:"제목을 입력해주세요."})]}),(0,r.jsxs)("label",{className:c().label,children:["주소",(0,r.jsx)(l.Z,{className:c().input,name:"url",value:f.url,onChange:b,placeholder:"https://example.com/long-url"})]}),(0,r.jsxs)("div",{className:c().buttons,children:[(0,r.jsx)(u.Z,{variant:"outline",type:"button",onClick:()=>p.back(),children:"취소"}),(0,r.jsx)(u.Z,{children:n===_.Create?"등록하기":n===_.Edit?"수정하기":null})]})]})})}},1979:function(t,n,e){"use strict";var r=e(6154);let o=r.Z.create({baseURL:"/api/"});n.Z=o},8843:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return _}});var r=e(5893),o=e(893),i=e(1979),a=e(8854),c=e.n(a),s=e(9008),u=e.n(s),l=e(1163);function _(){let t=(0,l.useRouter)();async function n(n){await i.Z.post("/short-links/",n),t.push("/short-links/")}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u(),{children:(0,r.jsx)("title",{children:"새 URL 추가 - Shortit"})}),(0,r.jsxs)("div",{className:c().page,children:[(0,r.jsx)("h1",{className:c().title,children:"새 URL 추가"}),(0,r.jsx)(o.Z,{onSubmit:n})]})]})}},6610:function(t){t.exports={button:"Button_button__AxfIB",primary:"Button_primary__1n7q8",secondary:"Button_secondary__pRvhC",outline:"Button_outline___JmXY",minimal:"Button_minimal__XDeHx"}},3548:function(t){t.exports={card:"Card_card__HHZwh",cardFooter:"Card_cardFooter__cOYhM"}},3141:function(t){t.exports={input:"Input_input__IL5XS"}},5155:function(t){t.exports={shortLinkForm:"ShortLinkForm_shortLinkForm__b7IlI",label:"ShortLinkForm_label__90Mo3",input:"ShortLinkForm_input__GPHzN",buttons:"ShortLinkForm_buttons__Vm5xW"}},8854:function(t){t.exports={page:"ShortLinkCreatePage_page__5cfW2",title:"ShortLinkCreatePage_title__Of8eD"}},1163:function(t,n,e){t.exports=e(6885)}},function(t){t.O(0,[154,774,888,179],function(){return t(t.s=429)}),_N_E=t.O()}]);