(self.webpackChunk_sonar_docs=self.webpackChunk_sonar_docs||[]).push([[230],{"../node_modules/@storybook/blocks/dist/Color-6VNJS4EI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColorControl:()=>ColorControl,default:()=>Color_default});var chunk_GWAJ4KRU=__webpack_require__("../node_modules/@storybook/blocks/dist/chunk-GWAJ4KRU.mjs"),react=__webpack_require__("../node_modules/react/index.js");function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function u(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r.indexOf(t=a[o])>=0||(n[t]=e[t]);return n}var c="undefined"!=typeof window?react.useLayoutEffect:react.useEffect;function i(e){var r=(0,react.useRef)(e);return(0,react.useEffect)((function(){r.current=e})),(0,react.useCallback)((function(e){return r.current&&r.current(e)}),[])}var s,f=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),e>t?t:e<r?r:e},v=function(e){return"touches"in e},d=function(e,r){var t=e.getBoundingClientRect(),o=v(r)?r.touches[0]:r;return{left:f((o.pageX-(t.left+window.pageXOffset))/t.width),top:f((o.pageY-(t.top+window.pageYOffset))/t.height)}},h=function(e){!v(e)&&e.preventDefault()},m=react.memo((function(r){var t=r.onMove,s=r.onKey,f=u(r,["onMove","onKey"]),m=(0,react.useRef)(null),g=(0,react.useRef)(!1),p=(0,react.useState)(!1),b=p[0],_=p[1],C=i(t),E=i(s),x=(0,react.useCallback)((function(e){h(e),(v(e)?e.touches.length>0:e.buttons>0)&&m.current?C(d(m.current,e)):_(!1)}),[C]),H=(0,react.useCallback)((function(e){var r,t=e.nativeEvent;h(t),r=t,g.current&&!v(r)||(g.current||(g.current=v(r)),0)||(C(d(m.current,t)),_(!0))}),[C]),M=(0,react.useCallback)((function(e){var r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),E({left:39===r?.05:37===r?-.05:0,top:40===r?.05:38===r?-.05:0}))}),[E]),N=(0,react.useCallback)((function(){return _(!1)}),[]),w=(0,react.useCallback)((function(e){var r=e?window.addEventListener:window.removeEventListener;r(g.current?"touchmove":"mousemove",x),r(g.current?"touchend":"mouseup",N)}),[x,N]);return c((function(){return w(b),function(){b&&w(!1)}}),[b,w]),react.createElement("div",l({},f,{className:"react-colorful__interactive",ref:m,onTouchStart:H,onMouseDown:H,onKeyDown:M,tabIndex:0,role:"slider"}))})),g=function(e){return e.filter(Boolean).join(" ")},p=function(r){var t=r.color,o=r.left,n=r.top,a=void 0===n?.5:n,l=g(["react-colorful__pointer",r.className]);return react.createElement("div",{className:l,style:{top:100*a+"%",left:100*o+"%"}},react.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},b=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*e)/t},_={grad:.9,turn:360,rad:360/(2*Math.PI)},C=function(e){return"#"===e[0]&&(e=e.substr(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:1}:{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:1}},E=function(e,r){return void 0===r&&(r="deg"),Number(e)*(_[r]||1)},x=function(e){var r=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?M({h:E(r[1],r[2]),s:Number(r[3]),l:Number(r[4]),a:void 0===r[5]?1:Number(r[5])/(r[6]?100:1)}):{h:0,s:0,v:0,a:1}},M=function(e){var r=e.s,t=e.l;return{h:e.h,s:(r*=(t<50?t:100-t)/100)>0?2*r/(t+r)*100:0,v:t+r,a:e.a}},N=function(e){var r=e.s,t=e.v,o=e.a,n=(200-r)*t/100;return{h:b(e.h),s:b(n>0&&n<200?r*t/100/(n<=100?n:200-n)*100:0),l:b(n/2),a:b(o,2)}},w=function(e){var r=N(e);return"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},y=function(e){var r=N(e);return"hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},q=function(e){var r=e.h,t=e.s,o=e.v,n=e.a;r=r/360*6,t/=100,o/=100;var a=Math.floor(r),l=o*(1-t),u=o*(1-(r-a)*t),c=o*(1-(1-r+a)*t),i=a%6;return{r:b(255*[o,u,l,l,c,o][i]),g:b(255*[c,o,o,u,l,l][i]),b:b(255*[l,l,c,o,o,u][i]),a:b(n,2)}},I=function(e){var r=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return r?B({r:Number(r[1])/(r[2]?100/255:1),g:Number(r[3])/(r[4]?100/255:1),b:Number(r[5])/(r[6]?100/255:1),a:void 0===r[7]?1:Number(r[7])/(r[8]?100:1)}):{h:0,s:0,v:0,a:1}},z=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},B=function(e){var r=e.r,t=e.g,o=e.b,n=e.a,a=Math.max(r,t,o),l=a-Math.min(r,t,o),u=l?a===r?(t-o)/l:a===t?2+(o-r)/l:4+(r-t)/l:0;return{h:b(60*(u<0?u+6:u)),s:b(a?l/a*100:0),v:b(a/255*100),a:n}},A=react.memo((function(r){var t=r.hue,o=r.onChange,n=g(["react-colorful__hue",r.className]);return react.createElement("div",{className:n},react.createElement(m,{onMove:function(e){o({h:360*e.left})},onKey:function(e){o({h:f(t+360*e.left,0,360)})},"aria-label":"Hue","aria-valuetext":b(t)},react.createElement(p,{className:"react-colorful__hue-pointer",left:t/360,color:w({h:t,s:100,v:100,a:1})})))})),L=react.memo((function(r){var t=r.hsva,o=r.onChange,n={backgroundColor:w({h:t.h,s:100,v:100,a:1})};return react.createElement("div",{className:"react-colorful__saturation",style:n},react.createElement(m,{onMove:function(e){o({s:100*e.left,v:100-100*e.top})},onKey:function(e){o({s:f(t.s+100*e.left,0,100),v:f(t.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+b(t.s)+"%, Brightness "+b(t.v)+"%"},react.createElement(p,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:w(t)})))})),D=function(e,r){if(e===r)return!0;for(var t in e)if(e[t]!==r[t])return!1;return!0},F=function(e,r){return e.replace(/\s/g,"")===r.replace(/\s/g,"")};function S(e,r,l){var u=i(l),c=(0,react.useState)((function(){return e.toHsva(r)})),s=c[0],f=c[1],v=(0,react.useRef)({color:r,hsva:s});(0,react.useEffect)((function(){if(!e.equal(r,v.current.color)){var t=e.toHsva(r);v.current={hsva:t,color:r},f(t)}}),[r,e]),(0,react.useEffect)((function(){var r;D(s,v.current.hsva)||e.equal(r=e.fromHsva(s),v.current.color)||(v.current={hsva:s,color:r},u(r))}),[s,e,u]);var d=(0,react.useCallback)((function(e){f((function(r){return Object.assign({},r,e)}))}),[]);return[s,d]}var P,ColorSpace2,Y=function(){c((function(){if("undefined"!=typeof document&&!P){(P=document.createElement("style")).innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}';var e=s||__webpack_require__.nc;e&&P.setAttribute("nonce",e),document.head.appendChild(P)}}),[])},$=function(r){var t=r.className,o=r.colorModel,n=r.color,a=void 0===n?o.defaultColor:n,c=r.onChange,i=u(r,["className","colorModel","color","onChange"]);Y();var s=S(o,a,c),f=s[0],v=s[1],d=g(["react-colorful",t]);return react.createElement("div",l({},i,{className:d}),react.createElement(L,{hsva:f,onChange:v}),react.createElement(A,{hue:f.h,onChange:v,className:"react-colorful__last-control"}))},R={defaultColor:"000",toHsva:function(e){return B(C(e))},fromHsva:function(e){return t=(r=q(e)).g,o=r.b,"#"+z(r.r)+z(t)+z(o);var r,t,o},equal:function(e,r){return e.toLowerCase()===r.toLowerCase()||D(C(e),C(r))}},J=function(r){var t=r.className,o=r.hsva,n=r.onChange,a={backgroundImage:"linear-gradient(90deg, "+y(Object.assign({},o,{a:0}))+", "+y(Object.assign({},o,{a:1}))+")"},l=g(["react-colorful__alpha",t]);return react.createElement("div",{className:l},react.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),react.createElement(m,{onMove:function(e){n({a:e.left})},onKey:function(e){n({a:f(o.a+e.left)})},"aria-label":"Alpha","aria-valuetext":b(100*o.a)+"%"},react.createElement(p,{className:"react-colorful__alpha-pointer",left:o.a,color:y(o)})))},Q=function(r){var t=r.className,o=r.colorModel,n=r.color,a=void 0===n?o.defaultColor:n,c=r.onChange,i=u(r,["className","colorModel","color","onChange"]);Y();var s=S(o,a,c),f=s[0],v=s[1],d=g(["react-colorful",t]);return react.createElement("div",l({},i,{className:d}),react.createElement(L,{hsva:f,onChange:v}),react.createElement(A,{hue:f.h,onChange:v}),react.createElement(J,{hsva:f,onChange:v,className:"react-colorful__last-control"}))},W={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:x,fromHsva:y,equal:F},he={defaultColor:"rgba(0, 0, 0, 1)",toHsva:I,fromHsva:function(e){var r=q(e);return"rgba("+r.r+", "+r.g+", "+r.b+", "+r.a+")"},equal:F},color_convert=__webpack_require__("../node_modules/@storybook/blocks/node_modules/color-convert/index.js"),color_convert_default=__webpack_require__.n(color_convert),throttle=__webpack_require__("../node_modules/lodash/throttle.js"),throttle_default=__webpack_require__.n(throttle),dist=__webpack_require__("../node_modules/@storybook/theming/dist/index.mjs"),components_dist=__webpack_require__("../node_modules/@storybook/components/dist/index.mjs"),Wrapper=dist.zo.div({position:"relative",maxWidth:250}),PickerTooltip=(0,dist.zo)(components_dist.Rl)({position:"absolute",zIndex:1,top:4,left:4}),TooltipContent=dist.zo.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),Note=(0,dist.zo)(components_dist.gu)((({theme})=>({fontFamily:theme.typography.fonts.base}))),Swatches=dist.zo.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),SwatchColor=dist.zo.div((({theme,active})=>({width:16,height:16,boxShadow:active?`${theme.appBorderColor} 0 0 0 1px inset, ${theme.textMutedColor}50 0 0 0 4px`:`${theme.appBorderColor} 0 0 0 1px inset`,borderRadius:theme.appBorderRadius}))),Swatch=({value,active,onClick,style,...props})=>{let backgroundImage=`linear-gradient(${value}, ${value}), url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>'), linear-gradient(#fff, #fff)`;return react.createElement(SwatchColor,{...props,active,onClick,style:{...style,backgroundImage}})},Input=(0,dist.zo)(components_dist.l0.Input)((({theme})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:theme.typography.fonts.base}))),ToggleIcon=(0,dist.zo)(components_dist.PJ)((({theme})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:theme.input.color}))),ColorSpace=((ColorSpace2=ColorSpace||{}).RGB="rgb",ColorSpace2.HSL="hsl",ColorSpace2.HEX="hex",ColorSpace2),COLOR_SPACES=Object.values(ColorSpace),COLOR_REGEXP=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,RGB_REGEXP=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,HSL_REGEXP=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,HEX_REGEXP=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,SHORTHEX_REGEXP=/^\s*#?([0-9a-f]{3})\s*$/i,ColorPicker={hex:function(r){return react.createElement($,l({},r,{colorModel:R}))},rgb:function(r){return react.createElement(Q,l({},r,{colorModel:he}))},hsl:function(r){return react.createElement(Q,l({},r,{colorModel:W}))}},fallbackColor={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},stringToArgs=value=>{let match=value?.match(COLOR_REGEXP);if(!match)return[0,0,0,1];let[,x,y,z,a=1]=match;return[x,y,z,a].map(Number)},parseValue=value=>{if(!value)return;let valid=!0;if(RGB_REGEXP.test(value)){let[r,g,b,a]=stringToArgs(value),[h,s,l]=color_convert_default().rgb.hsl([r,g,b])||[0,0,0];return{valid,value,keyword:color_convert_default().rgb.keyword([r,g,b]),colorSpace:"rgb",rgb:value,hsl:`hsla(${h}, ${s}%, ${l}%, ${a})`,hex:`#${color_convert_default().rgb.hex([r,g,b]).toLowerCase()}`}}if(HSL_REGEXP.test(value)){let[h,s,l,a]=stringToArgs(value),[r,g,b]=color_convert_default().hsl.rgb([h,s,l])||[0,0,0];return{valid,value,keyword:color_convert_default().hsl.keyword([h,s,l]),colorSpace:"hsl",rgb:`rgba(${r}, ${g}, ${b}, ${a})`,hsl:value,hex:`#${color_convert_default().hsl.hex([h,s,l]).toLowerCase()}`}}let plain=value.replace("#",""),rgb=color_convert_default().keyword.rgb(plain)||color_convert_default().hex.rgb(plain),hsl=color_convert_default().rgb.hsl(rgb),mapped=value;if(/[^#a-f0-9]/i.test(value)?mapped=plain:HEX_REGEXP.test(value)&&(mapped=`#${plain}`),mapped.startsWith("#"))valid=HEX_REGEXP.test(mapped);else try{color_convert_default().keyword.hex(mapped)}catch{valid=!1}return{valid,value:mapped,keyword:color_convert_default().rgb.keyword(rgb),colorSpace:"hex",rgb:`rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`,hsl:`hsla(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%, 1)`,hex:mapped}},useColorInput=(initialValue,onChange)=>{let[value,setValue]=(0,react.useState)(initialValue||""),[color,setColor]=(0,react.useState)((()=>parseValue(value))),[colorSpace,setColorSpace]=(0,react.useState)(color?.colorSpace||"hex");(0,react.useEffect)((()=>{let nextValue=initialValue||"",nextColor=parseValue(nextValue);setValue(nextValue),setColor(nextColor),setColorSpace(nextColor?.colorSpace||"hex")}),[initialValue]);let realValue=(0,react.useMemo)((()=>((value,color,colorSpace)=>{if(!value||!color?.valid)return fallbackColor[colorSpace];if("hex"!==colorSpace)return color?.[colorSpace]||fallbackColor[colorSpace];if(!color.hex.startsWith("#"))try{return`#${color_convert_default().keyword.hex(color.hex)}`}catch{return fallbackColor.hex}let short=color.hex.match(SHORTHEX_REGEXP);if(!short)return HEX_REGEXP.test(color.hex)?color.hex:fallbackColor.hex;let[r,g,b]=short[1].split("");return`#${r}${r}${g}${g}${b}${b}`})(value,color,colorSpace).toLowerCase()),[value,color,colorSpace]),updateValue=(0,react.useCallback)((update=>{let parsed=parseValue(update),v=parsed?.value||update||"";setValue(v),""===v&&(setColor(void 0),onChange(void 0)),parsed&&(setColor(parsed),setColorSpace(parsed.colorSpace),onChange(parsed.value))}),[onChange]),cycleColorSpace=(0,react.useCallback)((()=>{let next=COLOR_SPACES.indexOf(colorSpace)+1;next>=COLOR_SPACES.length&&(next=0),setColorSpace(COLOR_SPACES[next]);let update=color?.[COLOR_SPACES[next]]||"";setValue(update),onChange(update)}),[color,colorSpace,onChange]);return{value,realValue,updateValue,color,colorSpace,cycleColorSpace}},id=value=>value.replace(/\s*/,"").toLowerCase(),ColorControl=({name,value:initialValue,onChange,onFocus,onBlur,presetColors,startOpen=!1})=>{let throttledOnChange=(0,react.useCallback)(throttle_default()(onChange,200),[onChange]),{value,realValue,updateValue,color,colorSpace,cycleColorSpace}=useColorInput(initialValue,throttledOnChange),{presets,addPreset}=((presetColors,currentColor,colorSpace)=>{let[selectedColors,setSelectedColors]=(0,react.useState)(currentColor?.valid?[currentColor]:[]);(0,react.useEffect)((()=>{void 0===currentColor&&setSelectedColors([])}),[currentColor]);let presets=(0,react.useMemo)((()=>(presetColors||[]).map((preset=>"string"==typeof preset?parseValue(preset):preset.title?{...parseValue(preset.color),keyword:preset.title}:parseValue(preset.color))).concat(selectedColors).filter(Boolean).slice(-27)),[presetColors,selectedColors]),addPreset=(0,react.useCallback)((color=>{color?.valid&&(presets.some((preset=>id(preset[colorSpace])===id(color[colorSpace])))||setSelectedColors((arr=>arr.concat(color))))}),[colorSpace,presets]);return{presets,addPreset}})(presetColors,color,colorSpace),Picker=ColorPicker[colorSpace];return react.createElement(Wrapper,null,react.createElement(PickerTooltip,{startOpen,closeOnOutsideClick:!0,onVisibleChange:()=>addPreset(color),tooltip:react.createElement(TooltipContent,null,react.createElement(Picker,{color:"transparent"===realValue?"#000000":realValue,onChange:updateValue,onFocus,onBlur}),presets.length>0&&react.createElement(Swatches,null,presets.map(((preset,index)=>react.createElement(components_dist.Rl,{key:`${preset.value}-${index}`,hasChrome:!1,tooltip:react.createElement(Note,{note:preset.keyword||preset.value})},react.createElement(Swatch,{value:preset[colorSpace],active:color&&id(preset[colorSpace])===id(color[colorSpace]),onClick:()=>updateValue(preset.value)}))))))},react.createElement(Swatch,{value:realValue,style:{margin:4}})),react.createElement(Input,{id:(0,chunk_GWAJ4KRU.d)(name),value,onChange:e=>updateValue(e.target.value),onFocus:e=>e.target.select(),placeholder:"Choose color..."}),value?react.createElement(ToggleIcon,{icon:"markup",onClick:cycleColorSpace}):null)},Color_default=ColorControl},"../node_modules/@storybook/blocks/node_modules/color-convert/conversions.js":(module,__unused_webpack_exports,__webpack_require__)=>{const cssKeywords=__webpack_require__("../node_modules/color-name/index.js"),reverseKeywords={};for(const key of Object.keys(cssKeywords))reverseKeywords[cssKeywords[key]]=key;const convert={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};module.exports=convert;for(const model of Object.keys(convert)){if(!("channels"in convert[model]))throw new Error("missing channels property: "+model);if(!("labels"in convert[model]))throw new Error("missing channel labels property: "+model);if(convert[model].labels.length!==convert[model].channels)throw new Error("channel and label counts mismatch: "+model);const{channels,labels}=convert[model];delete convert[model].channels,delete convert[model].labels,Object.defineProperty(convert[model],"channels",{value:channels}),Object.defineProperty(convert[model],"labels",{value:labels})}convert.rgb.hsl=function(rgb){const r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255,min=Math.min(r,g,b),max=Math.max(r,g,b),delta=max-min;let h,s;max===min?h=0:r===max?h=(g-b)/delta:g===max?h=2+(b-r)/delta:b===max&&(h=4+(r-g)/delta),h=Math.min(60*h,360),h<0&&(h+=360);const l=(min+max)/2;return s=max===min?0:l<=.5?delta/(max+min):delta/(2-max-min),[h,100*s,100*l]},convert.rgb.hsv=function(rgb){let rdif,gdif,bdif,h,s;const r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255,v=Math.max(r,g,b),diff=v-Math.min(r,g,b),diffc=function(c){return(v-c)/6/diff+.5};return 0===diff?(h=0,s=0):(s=diff/v,rdif=diffc(r),gdif=diffc(g),bdif=diffc(b),r===v?h=bdif-gdif:g===v?h=1/3+rdif-bdif:b===v&&(h=2/3+gdif-rdif),h<0?h+=1:h>1&&(h-=1)),[360*h,100*s,100*v]},convert.rgb.hwb=function(rgb){const r=rgb[0],g=rgb[1];let b=rgb[2];const h=convert.rgb.hsl(rgb)[0],w=1/255*Math.min(r,Math.min(g,b));return b=1-1/255*Math.max(r,Math.max(g,b)),[h,100*w,100*b]},convert.rgb.cmyk=function(rgb){const r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255,k=Math.min(1-r,1-g,1-b);return[100*((1-r-k)/(1-k)||0),100*((1-g-k)/(1-k)||0),100*((1-b-k)/(1-k)||0),100*k]},convert.rgb.keyword=function(rgb){const reversed=reverseKeywords[rgb];if(reversed)return reversed;let currentClosestKeyword,currentClosestDistance=1/0;for(const keyword of Object.keys(cssKeywords)){const value=cssKeywords[keyword],distance=(y=value,((x=rgb)[0]-y[0])**2+(x[1]-y[1])**2+(x[2]-y[2])**2);distance<currentClosestDistance&&(currentClosestDistance=distance,currentClosestKeyword=keyword)}var x,y;return currentClosestKeyword},convert.keyword.rgb=function(keyword){return cssKeywords[keyword]},convert.rgb.xyz=function(rgb){let r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255;r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,g=g>.04045?((g+.055)/1.055)**2.4:g/12.92,b=b>.04045?((b+.055)/1.055)**2.4:b/12.92;return[100*(.4124*r+.3576*g+.1805*b),100*(.2126*r+.7152*g+.0722*b),100*(.0193*r+.1192*g+.9505*b)]},convert.rgb.lab=function(rgb){const xyz=convert.rgb.xyz(rgb);let x=xyz[0],y=xyz[1],z=xyz[2];x/=95.047,y/=100,z/=108.883,x=x>.008856?x**(1/3):7.787*x+16/116,y=y>.008856?y**(1/3):7.787*y+16/116,z=z>.008856?z**(1/3):7.787*z+16/116;return[116*y-16,500*(x-y),200*(y-z)]},convert.hsl.rgb=function(hsl){const h=hsl[0]/360,s=hsl[1]/100,l=hsl[2]/100;let t2,t3,val;if(0===s)return val=255*l,[val,val,val];t2=l<.5?l*(1+s):l+s-l*s;const t1=2*l-t2,rgb=[0,0,0];for(let i=0;i<3;i++)t3=h+1/3*-(i-1),t3<0&&t3++,t3>1&&t3--,val=6*t3<1?t1+6*(t2-t1)*t3:2*t3<1?t2:3*t3<2?t1+(t2-t1)*(2/3-t3)*6:t1,rgb[i]=255*val;return rgb},convert.hsl.hsv=function(hsl){const h=hsl[0];let s=hsl[1]/100,l=hsl[2]/100,smin=s;const lmin=Math.max(l,.01);l*=2,s*=l<=1?l:2-l,smin*=lmin<=1?lmin:2-lmin;return[h,100*(0===l?2*smin/(lmin+smin):2*s/(l+s)),100*((l+s)/2)]},convert.hsv.rgb=function(hsv){const h=hsv[0]/60,s=hsv[1]/100;let v=hsv[2]/100;const hi=Math.floor(h)%6,f=h-Math.floor(h),p=255*v*(1-s),q=255*v*(1-s*f),t=255*v*(1-s*(1-f));switch(v*=255,hi){case 0:return[v,t,p];case 1:return[q,v,p];case 2:return[p,v,t];case 3:return[p,q,v];case 4:return[t,p,v];case 5:return[v,p,q]}},convert.hsv.hsl=function(hsv){const h=hsv[0],s=hsv[1]/100,v=hsv[2]/100,vmin=Math.max(v,.01);let sl,l;l=(2-s)*v;const lmin=(2-s)*vmin;return sl=s*vmin,sl/=lmin<=1?lmin:2-lmin,sl=sl||0,l/=2,[h,100*sl,100*l]},convert.hwb.rgb=function(hwb){const h=hwb[0]/360;let wh=hwb[1]/100,bl=hwb[2]/100;const ratio=wh+bl;let f;ratio>1&&(wh/=ratio,bl/=ratio);const i=Math.floor(6*h),v=1-bl;f=6*h-i,0!=(1&i)&&(f=1-f);const n=wh+f*(v-wh);let r,g,b;switch(i){default:case 6:case 0:r=v,g=n,b=wh;break;case 1:r=n,g=v,b=wh;break;case 2:r=wh,g=v,b=n;break;case 3:r=wh,g=n,b=v;break;case 4:r=n,g=wh,b=v;break;case 5:r=v,g=wh,b=n}return[255*r,255*g,255*b]},convert.cmyk.rgb=function(cmyk){const c=cmyk[0]/100,m=cmyk[1]/100,y=cmyk[2]/100,k=cmyk[3]/100;return[255*(1-Math.min(1,c*(1-k)+k)),255*(1-Math.min(1,m*(1-k)+k)),255*(1-Math.min(1,y*(1-k)+k))]},convert.xyz.rgb=function(xyz){const x=xyz[0]/100,y=xyz[1]/100,z=xyz[2]/100;let r,g,b;return r=3.2406*x+-1.5372*y+-.4986*z,g=-.9689*x+1.8758*y+.0415*z,b=.0557*x+-.204*y+1.057*z,r=r>.0031308?1.055*r**(1/2.4)-.055:12.92*r,g=g>.0031308?1.055*g**(1/2.4)-.055:12.92*g,b=b>.0031308?1.055*b**(1/2.4)-.055:12.92*b,r=Math.min(Math.max(0,r),1),g=Math.min(Math.max(0,g),1),b=Math.min(Math.max(0,b),1),[255*r,255*g,255*b]},convert.xyz.lab=function(xyz){let x=xyz[0],y=xyz[1],z=xyz[2];x/=95.047,y/=100,z/=108.883,x=x>.008856?x**(1/3):7.787*x+16/116,y=y>.008856?y**(1/3):7.787*y+16/116,z=z>.008856?z**(1/3):7.787*z+16/116;return[116*y-16,500*(x-y),200*(y-z)]},convert.lab.xyz=function(lab){let x,y,z;y=(lab[0]+16)/116,x=lab[1]/500+y,z=y-lab[2]/200;const y2=y**3,x2=x**3,z2=z**3;return y=y2>.008856?y2:(y-16/116)/7.787,x=x2>.008856?x2:(x-16/116)/7.787,z=z2>.008856?z2:(z-16/116)/7.787,x*=95.047,y*=100,z*=108.883,[x,y,z]},convert.lab.lch=function(lab){const l=lab[0],a=lab[1],b=lab[2];let h;h=360*Math.atan2(b,a)/2/Math.PI,h<0&&(h+=360);return[l,Math.sqrt(a*a+b*b),h]},convert.lch.lab=function(lch){const l=lch[0],c=lch[1],hr=lch[2]/360*2*Math.PI;return[l,c*Math.cos(hr),c*Math.sin(hr)]},convert.rgb.ansi16=function(args,saturation=null){const[r,g,b]=args;let value=null===saturation?convert.rgb.hsv(args)[2]:saturation;if(value=Math.round(value/50),0===value)return 30;let ansi=30+(Math.round(b/255)<<2|Math.round(g/255)<<1|Math.round(r/255));return 2===value&&(ansi+=60),ansi},convert.hsv.ansi16=function(args){return convert.rgb.ansi16(convert.hsv.rgb(args),args[2])},convert.rgb.ansi256=function(args){const r=args[0],g=args[1],b=args[2];if(r===g&&g===b)return r<8?16:r>248?231:Math.round((r-8)/247*24)+232;return 16+36*Math.round(r/255*5)+6*Math.round(g/255*5)+Math.round(b/255*5)},convert.ansi16.rgb=function(args){let color=args%10;if(0===color||7===color)return args>50&&(color+=3.5),color=color/10.5*255,[color,color,color];const mult=.5*(1+~~(args>50));return[(1&color)*mult*255,(color>>1&1)*mult*255,(color>>2&1)*mult*255]},convert.ansi256.rgb=function(args){if(args>=232){const c=10*(args-232)+8;return[c,c,c]}let rem;args-=16;return[Math.floor(args/36)/5*255,Math.floor((rem=args%36)/6)/5*255,rem%6/5*255]},convert.rgb.hex=function(args){const string=(((255&Math.round(args[0]))<<16)+((255&Math.round(args[1]))<<8)+(255&Math.round(args[2]))).toString(16).toUpperCase();return"000000".substring(string.length)+string},convert.hex.rgb=function(args){const match=args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!match)return[0,0,0];let colorString=match[0];3===match[0].length&&(colorString=colorString.split("").map((char=>char+char)).join(""));const integer=parseInt(colorString,16);return[integer>>16&255,integer>>8&255,255&integer]},convert.rgb.hcg=function(rgb){const r=rgb[0]/255,g=rgb[1]/255,b=rgb[2]/255,max=Math.max(Math.max(r,g),b),min=Math.min(Math.min(r,g),b),chroma=max-min;let grayscale,hue;return grayscale=chroma<1?min/(1-chroma):0,hue=chroma<=0?0:max===r?(g-b)/chroma%6:max===g?2+(b-r)/chroma:4+(r-g)/chroma,hue/=6,hue%=1,[360*hue,100*chroma,100*grayscale]},convert.hsl.hcg=function(hsl){const s=hsl[1]/100,l=hsl[2]/100,c=l<.5?2*s*l:2*s*(1-l);let f=0;return c<1&&(f=(l-.5*c)/(1-c)),[hsl[0],100*c,100*f]},convert.hsv.hcg=function(hsv){const s=hsv[1]/100,v=hsv[2]/100,c=s*v;let f=0;return c<1&&(f=(v-c)/(1-c)),[hsv[0],100*c,100*f]},convert.hcg.rgb=function(hcg){const h=hcg[0]/360,c=hcg[1]/100,g=hcg[2]/100;if(0===c)return[255*g,255*g,255*g];const pure=[0,0,0],hi=h%1*6,v=hi%1,w=1-v;let mg=0;switch(Math.floor(hi)){case 0:pure[0]=1,pure[1]=v,pure[2]=0;break;case 1:pure[0]=w,pure[1]=1,pure[2]=0;break;case 2:pure[0]=0,pure[1]=1,pure[2]=v;break;case 3:pure[0]=0,pure[1]=w,pure[2]=1;break;case 4:pure[0]=v,pure[1]=0,pure[2]=1;break;default:pure[0]=1,pure[1]=0,pure[2]=w}return mg=(1-c)*g,[255*(c*pure[0]+mg),255*(c*pure[1]+mg),255*(c*pure[2]+mg)]},convert.hcg.hsv=function(hcg){const c=hcg[1]/100,v=c+hcg[2]/100*(1-c);let f=0;return v>0&&(f=c/v),[hcg[0],100*f,100*v]},convert.hcg.hsl=function(hcg){const c=hcg[1]/100,l=hcg[2]/100*(1-c)+.5*c;let s=0;return l>0&&l<.5?s=c/(2*l):l>=.5&&l<1&&(s=c/(2*(1-l))),[hcg[0],100*s,100*l]},convert.hcg.hwb=function(hcg){const c=hcg[1]/100,v=c+hcg[2]/100*(1-c);return[hcg[0],100*(v-c),100*(1-v)]},convert.hwb.hcg=function(hwb){const w=hwb[1]/100,v=1-hwb[2]/100,c=v-w;let g=0;return c<1&&(g=(v-c)/(1-c)),[hwb[0],100*c,100*g]},convert.apple.rgb=function(apple){return[apple[0]/65535*255,apple[1]/65535*255,apple[2]/65535*255]},convert.rgb.apple=function(rgb){return[rgb[0]/255*65535,rgb[1]/255*65535,rgb[2]/255*65535]},convert.gray.rgb=function(args){return[args[0]/100*255,args[0]/100*255,args[0]/100*255]},convert.gray.hsl=function(args){return[0,0,args[0]]},convert.gray.hsv=convert.gray.hsl,convert.gray.hwb=function(gray){return[0,100,gray[0]]},convert.gray.cmyk=function(gray){return[0,0,0,gray[0]]},convert.gray.lab=function(gray){return[gray[0],0,0]},convert.gray.hex=function(gray){const val=255&Math.round(gray[0]/100*255),string=((val<<16)+(val<<8)+val).toString(16).toUpperCase();return"000000".substring(string.length)+string},convert.rgb.gray=function(rgb){return[(rgb[0]+rgb[1]+rgb[2])/3/255*100]}},"../node_modules/@storybook/blocks/node_modules/color-convert/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{const conversions=__webpack_require__("../node_modules/@storybook/blocks/node_modules/color-convert/conversions.js"),route=__webpack_require__("../node_modules/@storybook/blocks/node_modules/color-convert/route.js"),convert={};Object.keys(conversions).forEach((fromModel=>{convert[fromModel]={},Object.defineProperty(convert[fromModel],"channels",{value:conversions[fromModel].channels}),Object.defineProperty(convert[fromModel],"labels",{value:conversions[fromModel].labels});const routes=route(fromModel);Object.keys(routes).forEach((toModel=>{const fn=routes[toModel];convert[fromModel][toModel]=function wrapRounded(fn){const wrappedFn=function(...args){const arg0=args[0];if(null==arg0)return arg0;arg0.length>1&&(args=arg0);const result=fn(args);if("object"==typeof result)for(let len=result.length,i=0;i<len;i++)result[i]=Math.round(result[i]);return result};return"conversion"in fn&&(wrappedFn.conversion=fn.conversion),wrappedFn}(fn),convert[fromModel][toModel].raw=function wrapRaw(fn){const wrappedFn=function(...args){const arg0=args[0];return null==arg0?arg0:(arg0.length>1&&(args=arg0),fn(args))};return"conversion"in fn&&(wrappedFn.conversion=fn.conversion),wrappedFn}(fn)}))})),module.exports=convert},"../node_modules/@storybook/blocks/node_modules/color-convert/route.js":(module,__unused_webpack_exports,__webpack_require__)=>{const conversions=__webpack_require__("../node_modules/@storybook/blocks/node_modules/color-convert/conversions.js");function deriveBFS(fromModel){const graph=function buildGraph(){const graph={},models=Object.keys(conversions);for(let len=models.length,i=0;i<len;i++)graph[models[i]]={distance:-1,parent:null};return graph}(),queue=[fromModel];for(graph[fromModel].distance=0;queue.length;){const current=queue.pop(),adjacents=Object.keys(conversions[current]);for(let len=adjacents.length,i=0;i<len;i++){const adjacent=adjacents[i],node=graph[adjacent];-1===node.distance&&(node.distance=graph[current].distance+1,node.parent=current,queue.unshift(adjacent))}}return graph}function link(from,to){return function(args){return to(from(args))}}function wrapConversion(toModel,graph){const path=[graph[toModel].parent,toModel];let fn=conversions[graph[toModel].parent][toModel],cur=graph[toModel].parent;for(;graph[cur].parent;)path.unshift(graph[cur].parent),fn=link(conversions[graph[cur].parent][cur],fn),cur=graph[cur].parent;return fn.conversion=path,fn}module.exports=function(fromModel){const graph=deriveBFS(fromModel),conversion={},models=Object.keys(graph);for(let len=models.length,i=0;i<len;i++){const toModel=models[i];null!==graph[toModel].parent&&(conversion[toModel]=wrapConversion(toModel,graph))}return conversion}},"../node_modules/lodash/_baseTrim.js":(module,__unused_webpack_exports,__webpack_require__)=>{var trimmedEndIndex=__webpack_require__("../node_modules/lodash/_trimmedEndIndex.js"),reTrimStart=/^\s+/;module.exports=function baseTrim(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,""):string}},"../node_modules/lodash/_trimmedEndIndex.js":module=>{var reWhitespace=/\s/;module.exports=function trimmedEndIndex(string){for(var index=string.length;index--&&reWhitespace.test(string.charAt(index)););return index}},"../node_modules/lodash/debounce.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isObject=__webpack_require__("../node_modules/lodash/isObject.js"),now=__webpack_require__("../node_modules/lodash/now.js"),toNumber=__webpack_require__("../node_modules/lodash/toNumber.js"),nativeMax=Math.max,nativeMin=Math.min;module.exports=function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;if("function"!=typeof func)throw new TypeError("Expected a function");function invokeFunc(time){var args=lastArgs,thisArg=lastThis;return lastArgs=lastThis=void 0,lastInvokeTime=time,result=func.apply(thisArg,args)}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime;return void 0===lastCallTime||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&time-lastInvokeTime>=maxWait}function timerExpired(){var time=now();if(shouldInvoke(time))return trailingEdge(time);timerId=setTimeout(timerExpired,function remainingWait(time){var timeWaiting=wait-(time-lastCallTime);return maxing?nativeMin(timeWaiting,maxWait-(time-lastInvokeTime)):timeWaiting}(time))}function trailingEdge(time){return timerId=void 0,trailing&&lastArgs?invokeFunc(time):(lastArgs=lastThis=void 0,result)}function debounced(){var time=now(),isInvoking=shouldInvoke(time);if(lastArgs=arguments,lastThis=this,lastCallTime=time,isInvoking){if(void 0===timerId)return function leadingEdge(time){return lastInvokeTime=time,timerId=setTimeout(timerExpired,wait),leading?invokeFunc(time):result}(lastCallTime);if(maxing)return clearTimeout(timerId),timerId=setTimeout(timerExpired,wait),invokeFunc(lastCallTime)}return void 0===timerId&&(timerId=setTimeout(timerExpired,wait)),result}return wait=toNumber(wait)||0,isObject(options)&&(leading=!!options.leading,maxWait=(maxing="maxWait"in options)?nativeMax(toNumber(options.maxWait)||0,wait):maxWait,trailing="trailing"in options?!!options.trailing:trailing),debounced.cancel=function cancel(){void 0!==timerId&&clearTimeout(timerId),lastInvokeTime=0,lastArgs=lastCallTime=lastThis=timerId=void 0},debounced.flush=function flush(){return void 0===timerId?result:trailingEdge(now())},debounced}},"../node_modules/lodash/now.js":(module,__unused_webpack_exports,__webpack_require__)=>{var root=__webpack_require__("../node_modules/lodash/_root.js");module.exports=function(){return root.Date.now()}},"../node_modules/lodash/throttle.js":(module,__unused_webpack_exports,__webpack_require__)=>{var debounce=__webpack_require__("../node_modules/lodash/debounce.js"),isObject=__webpack_require__("../node_modules/lodash/isObject.js");module.exports=function throttle(func,wait,options){var leading=!0,trailing=!0;if("function"!=typeof func)throw new TypeError("Expected a function");return isObject(options)&&(leading="leading"in options?!!options.leading:leading,trailing="trailing"in options?!!options.trailing:trailing),debounce(func,wait,{leading,maxWait:wait,trailing})}},"../node_modules/lodash/toNumber.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseTrim=__webpack_require__("../node_modules/lodash/_baseTrim.js"),isObject=__webpack_require__("../node_modules/lodash/isObject.js"),isSymbol=__webpack_require__("../node_modules/lodash/isSymbol.js"),reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;module.exports=function toNumber(value){if("number"==typeof value)return value;if(isSymbol(value))return NaN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NaN:+value}}}]);