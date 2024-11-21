"use strict";(self.webpackChunkmaria_js_education=self.webpackChunkmaria_js_education||[]).push([[1288],{8047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>$,contentTitle:()=>b,default:()=>N,frontMatter:()=>v,metadata:()=>s,toc:()=>g});const s=JSON.parse('{"type":"mdx","permalink":"/maria-js-education/variables-and-constants","source":"@site/src/pages/variables-and-constants.mdx","title":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0438 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b \u0432 JavaScript","description":"\u0412 JavaScript \u0435\u0441\u0442\u044c \u0434\u0432\u0430 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445: \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e let \u0438 const.","frontMatter":{"title":"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0438 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b \u0432 JavaScript","sidebar_position":1},"unlisted":false}');var a=n(4848),r=n(8453),c=n(6540),i=n(6894),l=n(7080),o=n(5109);const d="editorContainer_x3k5",u="codeMirror_WYZ4",p="buttons_CSsR",h="runButton_yISF",m="solutionButton_wjXW",x="output_mhW2",j="solution_YZAM",y=e=>{let{checks:t,solution:n}=e;const[s,r]=(0,c.useState)("// \u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0432\u0430\u0448 \u043a\u043e\u0434 \u0437\u0434\u0435\u0441\u044c\n// \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:\nlet myTestVariable = '\u041c\u043e\u044f \u043f\u0435\u0440\u0432\u0430\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f';\nconst myTestConstant = '\u041c\u043e\u044f \u043f\u0435\u0440\u0432\u0430\u044f \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0430';"),[y,v]=(0,c.useState)(""),[b,$]=(0,c.useState)(!1);return(0,a.jsxs)("div",{className:d,children:[(0,a.jsx)(i.Ay,{value:s,height:"300px",extensions:[(0,l.Q2)()],theme:o.bM,onChange:e=>r(e),className:u}),(0,a.jsxs)("div",{className:p,children:[(0,a.jsx)("button",{onClick:()=>{try{let e=[];t.forEach((t=>{t.type,e.push(t.name)}));const n=`\n        "use strict";\n        ${s}\n        return { ${e.join(", ")} };\n      `,a=new Function(n)();let r=[];t.forEach((e=>{switch(e.type){case"variable":case"constant":{const t=a[e.name];t===e.expectedValue?r.push(`${"variable"===e.type?"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f":"\u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0430"} \`${e.name}\` \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e.`):r.push(`${"variable"===e.type?"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f":"\u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0430"} \`${e.name}\` \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0440\u0430\u0432\u043d\u0430 \`${e.expectedValue}\`, \u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0430 \`${t}\`.`);break}case"array":{const t=a[e.name];Array.isArray(t)&&Array.isArray(e.expectedValue)&&t.length===e.expectedValue.length&&t.every(((t,n)=>t===e.expectedValue[n]))?r.push(`\u041c\u0430\u0441\u0441\u0438\u0432 \`${e.name}\` \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e.`):r.push(`\u041c\u0430\u0441\u0441\u0438\u0432 \`${e.name}\` \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0440\u0430\u0432\u0435\u043d \`${JSON.stringify(e.expectedValue)}\`, \u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u043b \`${JSON.stringify(t)}\`.`);break}case"function":{const t=a[e.name];if("function"!=typeof t){r.push(`\`${e.name}\` \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439.`);break}e.tests.forEach(((n,s)=>{let a;try{a=Array.isArray(n.input)?t(...n.input):t(n.input)}catch(c){return void r.push(`\u0424\u0443\u043d\u043a\u0446\u0438\u044f \`${e.name}\` \u0432\u044b\u0437\u0432\u0430\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0443 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0442\u0435\u0441\u0442\u0430 ${s+1}: ${c.message}`)}a===n.output?r.push(`\u0424\u0443\u043d\u043a\u0446\u0438\u044f \`${e.name}\` \u043f\u0440\u043e\u0448\u043b\u0430 \u0442\u0435\u0441\u0442 ${s+1} \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e.`):r.push(`\u0424\u0443\u043d\u043a\u0446\u0438\u044f \`${e.name}\` \u043d\u0435 \u043f\u0440\u043e\u0448\u043b\u0430 \u0442\u0435\u0441\u0442 ${s+1}. \u041e\u0436\u0438\u0434\u0430\u043b\u043e\u0441\u044c \`${n.output}\`, \u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0430 \`${a}\`.`)}));break}}})),v(r.join(" "))}catch(e){v(`\u041e\u0448\u0438\u0431\u043a\u0430: ${e.message}`)}},className:h,children:"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c"}),(0,a.jsx)("button",{onClick:()=>$(!b),className:m,children:b?"\u0421\u043a\u0440\u044b\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435"})]}),(0,a.jsxs)("div",{className:x,children:[(0,a.jsx)("strong",{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"})," ",y]}),b&&(0,a.jsxs)("div",{className:j,children:[(0,a.jsx)("strong",{children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{children:n})})]})]})},v={title:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0438 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b \u0432 JavaScript",sidebar_position:1},b="\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0438 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b \u0432 JavaScript",$={},g=[{value:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 (<code>let</code>)",id:"\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435-let",level:2},{value:"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435",id:"\u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435-\u0437\u0430\u0434\u0430\u043d\u0438\u0435",level:2}];function f(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435-\u0438-\u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b-\u0432-javascript",children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0438 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b \u0432 JavaScript"})}),"\n",(0,a.jsxs)(t.p,{children:["\u0412 JavaScript \u0435\u0441\u0442\u044c \u0434\u0432\u0430 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445: \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,a.jsx)(t.code,{children:"let"})," \u0438 ",(0,a.jsx)(t.code,{children:"const"}),"."]}),"\n",(0,a.jsxs)(t.h2,{id:"\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435-let",children:["\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 (",(0,a.jsx)(t.code,{children:"let"}),")"]}),"\n",(0,a.jsxs)(t.p,{children:["\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435, \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,a.jsx)(t.code,{children:"let"}),", \u043c\u043e\u0433\u0443\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0441\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u043b\u0435 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"let myVariable = '\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435';\nmyVariable = '\u041d\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435';\nconsole.log(myVariable); // \u0412\u044b\u0432\u0435\u0434\u0435\u0442 '\u041d\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435'\n"})}),"\n",(0,a.jsx)(t.p,{children:"\u030c\u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b (const)\n\u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b, \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e const, \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0441\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u043b\u0435 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const MY_CONSTANT = '\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435';\n// \u041f\u043e\u043f\u044b\u0442\u043a\u0430 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u043e\u0448\u0438\u0431\u043a\u0435\n// MY_CONSTANT = '\u041d\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435'; // Uncaught TypeError: Assignment to constant variable.\n"})}),"\n",(0,a.jsx)(t.h2,{id:"\u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435-\u0437\u0430\u0434\u0430\u043d\u0438\u0435",children:"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"}),"\n",(0,a.jsx)(t.p,{children:"\u0417\u0430\u0434\u0430\u0447\u0430: \u041e\u0431\u044a\u044f\u0432\u0438\u0442\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e myTestVariable \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c '\u041c\u043e\u044f \u043f\u0435\u0440\u0432\u0430\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f' \u0438 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0443 myTestConstant \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c '\u041c\u043e\u044f \u043f\u0435\u0440\u0432\u0430\u044f \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0430'."}),"\n",(0,a.jsx)(y,{checks:[{type:"variable",name:"myTestVariable",expectedValue:"\u041c\u043e\u044f \u043f\u0435\u0440\u0432\u0430\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f"},{type:"constant",name:"myTestConstant",expectedValue:"\u041c\u043e\u044f \u043f\u0435\u0440\u0432\u0430\u044f \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0430"}],solution:"let myTestVariable = '\u041c\u043e\u044f \u043f\u0435\u0440\u0432\u0430\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f';\nconst myTestConstant = '\u041c\u043e\u044f \u043f\u0435\u0440\u0432\u0430\u044f \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0430';"}),"\n",(0,a.jsx)(t.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0435\u0448\u0435\u043d\u0438\u044f:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"let myTestVariable = '\u041c\u043e\u044f \u043f\u0435\u0440\u0432\u0430\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f';\nconst myTestConstant = '\u041c\u043e\u044f \u043f\u0435\u0440\u0432\u0430\u044f \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0430';\n"})}),"\n",(0,a.jsx)(t.p,{children:'\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432\u0430\u0448 \u043a\u043e\u0434 \u0432\u044b\u0448\u0435 \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 "\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442.'}),"\n",(0,a.jsx)(y,{checks:[{type:"array",name:"myFruits",expectedValue:["\u044f\u0431\u043b\u043e\u043a\u043e","\u0432\u0438\u0448\u043d\u044f"]},{type:"function",name:"greet",tests:[{input:"\u041c\u0430\u0448\u0430",output:"\u041f\u0440\u0438\u0432\u0435\u0442, \u041c\u0430\u0448\u0430!"},{input:"\u0418\u0432\u0430\u043d",output:"\u041f\u0440\u0438\u0432\u0435\u0442, \u0418\u0432\u0430\u043d!"}]}],solution:"const myFruits = ['\u044f\u0431\u043b\u043e\u043a\u043e', '\u0431\u0430\u043d\u0430\u043d', '\u0432\u0438\u0448\u043d\u044f'];\nfunction greet(name) { return `\u041f\u0440\u0438\u0432\u0435\u0442, ${name}!`; }"})]})}function N(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}}}]);