(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{57:function(r,t,o){Promise.resolve().then(o.bind(o,1928))},1928:function(r,t,o){"use strict";o.r(t),o.d(t,{default:function(){return p}});var e=o(7437),a=o(2265);o(1691);let _=(0,a.forwardRef)((r,t)=>{let{size:o,className:_,error:c,type:n,errorClassName:s,label:g,name:i,containerStyle:d={},required:b,maxLength:y,labelClassName:l="",labelStyle:C={},...P}=r,[m,p]=(0,a.useState)(n),[h,u]=(0,a.useState)(P.value);return(0,a.useEffect)(()=>{p(n)},[n]),(0,a.useEffect)(()=>u(P.value),[P.value]),(0,e.jsxs)("div",{className:"suite-input-container ",children:[g&&(0,e.jsxs)("div",{className:"suite-input-label-wrapper",children:[(0,e.jsx)("label",{className:"suite-input-label ".concat(l),style:C,htmlFor:i,children:b?"".concat(g,"*"):g}),y&&(0,e.jsx)("span",{className:"color-secondary-600t",children:"".concat((null==h?void 0:h.toString().length)||0,"/").concat(y)})]}),(0,e.jsx)("div",{className:"suite-input-wrapper -".concat(o," ").concat(c?"error":""),style:d,children:(0,e.jsx)("input",{ref:t,type:m,name:i,className:"suite-input ".concat(_," color-primary"),maxLength:y,...P,value:h,onChange:r=>{var t;u(null==r?void 0:null===(t=r.target)||void 0===t?void 0:t.value),P.onChange&&P.onChange(r)}})}),c&&(0,e.jsx)("small",{className:"color-error",children:c})]})});_.displayName="InputComponent";var c=o(9487),n=o.n(c),s=o(9343),g=o(7753),i=o(4245),d="name",b="email",y="message";let l="* Este campo no puede estar vacio",C={[d]:i.Z_().required(l),[b]:i.Z_().email("* El formato de correo no es una direcci\xf3n valida").required(l),[y]:i.Z_().required(l).min(20," * Debe terner un minimo de 20 caracteres")},P=i.Ry().shape(C);var m=o(7776);function p(){var r,t,o;let{register:a,handleSubmit:c,formState:{errors:i,isValid:l}}=(0,s.cI)({defaultValues:{name:"",email:"",message:""},mode:"onChange",resolver:(0,g.X)(P)});return(0,e.jsxs)("section",{className:"".concat(n().container_contact_page," ").concat(n().fade_in_top),children:[(0,e.jsx)("h3",{children:"Conact me!"}),(0,e.jsx)("p",{children:"Tienes alguna idea o proyecto y crees que podemos trabajar escribeme"}),(0,e.jsxs)("form",{onSubmit:c(r=>{m.Am.success("Enviando datos a whatsApp de untalinfo");let t="Hola, soy ".concat(r.name,", ").concat(r.email,". ").concat(r.message);setTimeout(()=>{window.open("https://wa.me/".concat("573192338714","?text=").concat(encodeURIComponent(t)))},800)}),className:n().container_from,children:[(0,e.jsx)(_,{type:"text",placeholder:"Nombre",...a(d),error:null===(r=i[d])||void 0===r?void 0:r.message}),(0,e.jsx)(_,{type:"email",placeholder:"Correo",...a(b),error:null===(t=i[b])||void 0===t?void 0:t.message}),(0,e.jsx)(_,{placeholder:"Mensaje",...a(y),error:null===(o=i[y])||void 0===o?void 0:o.message}),(0,e.jsx)("button",{type:"submit",className:n().submit_button,disabled:!i||!l,children:"Contactar"})]}),(0,e.jsx)(m.x7,{richColors:!0})]})}},1691:function(){},9487:function(r){r.exports={"color-primary":"ContactPage_color-primary__I0wwm",container_contact_page:"ContactPage_container_contact_page__GiZ0_",container_from:"ContactPage_container_from__4xzzo","color-primary-100t":"ContactPage_color-primary-100t__6nb6v","color-primary-200t":"ContactPage_color-primary-200t___TR09","color-primary-300t":"ContactPage_color-primary-300t__GUuQ_","color-primary-400t":"ContactPage_color-primary-400t__AuRT8","color-primary-600s":"ContactPage_color-primary-600s__13Ack","color-primary-700s":"ContactPage_color-primary-700s__kr6nG","color-primary-800s":"ContactPage_color-primary-800s__P8nFI","color-primary-900s":"ContactPage_color-primary-900s__OJ25p","color-secondary":"ContactPage_color-secondary__HZYiM","color-secondary-100t":"ContactPage_color-secondary-100t__9s3i9","color-secondary-200t":"ContactPage_color-secondary-200t__fJh6l","color-secondary-300t":"ContactPage_color-secondary-300t__29CK5","color-secondary-400t":"ContactPage_color-secondary-400t__zDJjS","color-secondary-500t":"ContactPage_color-secondary-500t__azSic","color-secondary-600t":"ContactPage_color-secondary-600t__jaKyj","color-secondary-700t":"ContactPage_color-secondary-700t__9QlTW","color-secondary-800t":"ContactPage_color-secondary-800t__TGmlM","color-secondary-900t":"ContactPage_color-secondary-900t___AtuT","color-secondary-1000t":"ContactPage_color-secondary-1000t__ZG4kP","color-secondary-600s":"ContactPage_color-secondary-600s__1Dtjx","color-secondary-700s":"ContactPage_color-secondary-700s__6_SeA","color-secondary-800s":"ContactPage_color-secondary-800s__tY5NJ","color-secondary-900s":"ContactPage_color-secondary-900s___QdZj","color-tertiary":"ContactPage_color-tertiary__dZlv9","color-tertiary-100t":"ContactPage_color-tertiary-100t__Wv3h1","color-tertiary-200t":"ContactPage_color-tertiary-200t__Qu6bL","color-tertiary-300t":"ContactPage_color-tertiary-300t__Ee_oK","color-tertiary-400t":"ContactPage_color-tertiary-400t__NvhKN","color-tertiary-600s":"ContactPage_color-tertiary-600s__qws_m","color-tertiary-700s":"ContactPage_color-tertiary-700s__il4KO","color-tertiary-800s":"ContactPage_color-tertiary-800s__jJ5YW","color-tertiary-900s":"ContactPage_color-tertiary-900s___4Rnp","color-error":"ContactPage_color-error__fQIda","color-error-100t":"ContactPage_color-error-100t__SH2y8","color-error-200t":"ContactPage_color-error-200t__3hsH3","color-error-300t":"ContactPage_color-error-300t__OczYH","color-error-400t":"ContactPage_color-error-400t__TYLrT","color-error-600s":"ContactPage_color-error-600s__pe_b0","color-error-700s":"ContactPage_color-error-700s__sFL8B","color-error-800s":"ContactPage_color-error-800s__D9Z6x","color-error-900s":"ContactPage_color-error-900s__C_8Zd","color-white":"ContactPage_color-white__YaD_L",submit_button:"ContactPage_submit_button__gi_jx","color-white-100t":"ContactPage_color-white-100t__fTPEL","color-white-200t":"ContactPage_color-white-200t__j648a","color-white-300t":"ContactPage_color-white-300t__mYcsv","color-white-400t":"ContactPage_color-white-400t__UCZv1","color-white-600s":"ContactPage_color-white-600s__VOw6P","color-white-700s":"ContactPage_color-white-700s__FPmU7","color-white-800s":"ContactPage_color-white-800s__ejuPF","color-white-900s":"ContactPage_color-white-900s__yPbE5","bg-primary":"ContactPage_bg-primary__iSoo3","bg-primary-100t":"ContactPage_bg-primary-100t__l5iZy","bg-primary-200t":"ContactPage_bg-primary-200t__Cjh6p","bg-primary-300t":"ContactPage_bg-primary-300t__pAoRy","bg-primary-400t":"ContactPage_bg-primary-400t___D_cs","bg-primary-600s":"ContactPage_bg-primary-600s__seaAg","bg-primary-700s":"ContactPage_bg-primary-700s__3nW_R","bg-primary-800s":"ContactPage_bg-primary-800s__QYm9Q","bg-primary-900s":"ContactPage_bg-primary-900s__Q8IQT","bg-secondary":"ContactPage_bg-secondary__9uPy_","bg-secondary-100t":"ContactPage_bg-secondary-100t__aXy65","bg-secondary-200t":"ContactPage_bg-secondary-200t__4hNWo","bg-secondary-300t":"ContactPage_bg-secondary-300t__X62Vo","bg-secondary-400t":"ContactPage_bg-secondary-400t__KpoNd","bg-secondary-500t":"ContactPage_bg-secondary-500t__bww3Y","bg-secondary-600t":"ContactPage_bg-secondary-600t__6YKZ7","bg-secondary-700t":"ContactPage_bg-secondary-700t__NlVS2","bg-secondary-800t":"ContactPage_bg-secondary-800t__gdgN_","bg-secondary-900t":"ContactPage_bg-secondary-900t__5D5Zf","bg-secondary-1000t":"ContactPage_bg-secondary-1000t__Sn5hg","bg-secondary-600s":"ContactPage_bg-secondary-600s__JVvTf","bg-secondary-700s":"ContactPage_bg-secondary-700s__XcakW","bg-secondary-800s":"ContactPage_bg-secondary-800s__xwXOz","bg-secondary-900s":"ContactPage_bg-secondary-900s__QRQ3Y","bg-tertiary":"ContactPage_bg-tertiary__804dK","bg-tertiary-100t":"ContactPage_bg-tertiary-100t__DojHE","bg-tertiary-200t":"ContactPage_bg-tertiary-200t__G4z3o","bg-tertiary-300t":"ContactPage_bg-tertiary-300t__a0fNj","bg-tertiary-400t":"ContactPage_bg-tertiary-400t__n2eg5","bg-tertiary-600s":"ContactPage_bg-tertiary-600s__Wq3BG","bg-tertiary-700s":"ContactPage_bg-tertiary-700s__r_IDi","bg-tertiary-800s":"ContactPage_bg-tertiary-800s__R30Mp","bg-tertiary-900s":"ContactPage_bg-tertiary-900s__Q6__P","bg-error":"ContactPage_bg-error__TGIN5","bg-error-100t":"ContactPage_bg-error-100t__ow1o2","bg-error-200t":"ContactPage_bg-error-200t__mLsi_","bg-error-300t":"ContactPage_bg-error-300t__Zj7oK","bg-error-400t":"ContactPage_bg-error-400t__988wX","bg-error-600s":"ContactPage_bg-error-600s__T_f_r","bg-error-700s":"ContactPage_bg-error-700s__JT0hi","bg-error-800s":"ContactPage_bg-error-800s__NmMKN","bg-error-900s":"ContactPage_bg-error-900s__Q8U_A","bg-white":"ContactPage_bg-white__0ER6W","bg-white-100t":"ContactPage_bg-white-100t__uaPs8","bg-white-200t":"ContactPage_bg-white-200t__Js7jt","bg-white-300t":"ContactPage_bg-white-300t__Q5Mfl","bg-white-400t":"ContactPage_bg-white-400t__VjVl3","bg-white-600s":"ContactPage_bg-white-600s__5rPta","bg-white-700s":"ContactPage_bg-white-700s__qob14","bg-white-800s":"ContactPage_bg-white-800s__3v_jg","bg-white-900s":"ContactPage_bg-white-900s__s3sRb","border-primary":"ContactPage_border-primary__k55Zl","border-primary-100t":"ContactPage_border-primary-100t__C0KxT","border-primary-200t":"ContactPage_border-primary-200t__QZ6u2","border-primary-300t":"ContactPage_border-primary-300t__TiBMG","border-primary-400t":"ContactPage_border-primary-400t__F1eLQ","border-primary-600s":"ContactPage_border-primary-600s__IsoyF","border-primary-700s":"ContactPage_border-primary-700s__UY8SR","border-primary-800s":"ContactPage_border-primary-800s__NHYt4","border-primary-900s":"ContactPage_border-primary-900s__tCRyC","border-secondary":"ContactPage_border-secondary__eMp28","border-secondary-100t":"ContactPage_border-secondary-100t___jmUs","border-secondary-200t":"ContactPage_border-secondary-200t__ZhopC","border-secondary-300t":"ContactPage_border-secondary-300t__ilyzW","border-secondary-400t":"ContactPage_border-secondary-400t__lnfPR","border-secondary-500t":"ContactPage_border-secondary-500t__K_tV6","border-secondary-600t":"ContactPage_border-secondary-600t__IUzU5","border-secondary-700t":"ContactPage_border-secondary-700t__V3lab","border-secondary-800t":"ContactPage_border-secondary-800t__mBK2u","border-secondary-900t":"ContactPage_border-secondary-900t__j7on_","border-secondary-1000t":"ContactPage_border-secondary-1000t___9EDi","border-secondary-600s":"ContactPage_border-secondary-600s__Jj3js","border-secondary-700s":"ContactPage_border-secondary-700s__cJerO","border-secondary-800s":"ContactPage_border-secondary-800s__SZ7OI","border-secondary-900s":"ContactPage_border-secondary-900s__GIs4O","border-tertiary":"ContactPage_border-tertiary__fRfga","border-tertiary-100t":"ContactPage_border-tertiary-100t__nSR7E","border-tertiary-200t":"ContactPage_border-tertiary-200t__Hwe3p","border-tertiary-300t":"ContactPage_border-tertiary-300t___lAPn","border-tertiary-400t":"ContactPage_border-tertiary-400t__MEzQ2","border-tertiary-600s":"ContactPage_border-tertiary-600s__PAhZ5","border-tertiary-700s":"ContactPage_border-tertiary-700s__uj_EO","border-tertiary-800s":"ContactPage_border-tertiary-800s__fb1_E","border-tertiary-900s":"ContactPage_border-tertiary-900s__A3kly","border-error":"ContactPage_border-error__I7tt5","border-error-100t":"ContactPage_border-error-100t__tplon","border-error-200t":"ContactPage_border-error-200t__2QJ2e","border-error-300t":"ContactPage_border-error-300t__czXBE","border-error-400t":"ContactPage_border-error-400t__XmXSu","border-error-600s":"ContactPage_border-error-600s__ANZxl","border-error-700s":"ContactPage_border-error-700s__3KccK","border-error-800s":"ContactPage_border-error-800s__BrwOV","border-error-900s":"ContactPage_border-error-900s__6Q4TM","border-white":"ContactPage_border-white__hnC_R","border-white-100t":"ContactPage_border-white-100t__pRyIR","border-white-200t":"ContactPage_border-white-200t__4OXoS","border-white-300t":"ContactPage_border-white-300t__xCaNa","border-white-400t":"ContactPage_border-white-400t__RuGHh","border-white-600s":"ContactPage_border-white-600s__BUbPo","border-white-700s":"ContactPage_border-white-700s__n4Inj","border-white-800s":"ContactPage_border-white-800s__X5c64","border-white-900s":"ContactPage_border-white-900s__i0sN7",fade_in_top:"ContactPage_fade_in_top__OW34A"}}},function(r){r.O(0,[390,54,971,23,744],function(){return r(r.s=57)}),_N_E=r.O()}]);