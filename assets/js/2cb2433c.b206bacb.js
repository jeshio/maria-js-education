"use strict";(self.webpackChunkmaria_js_education=self.webpackChunkmaria_js_education||[]).push([[4223],{1679:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"js-basics/lock-knowledge/arrays-loops-funcs","title":"3. \u041c\u0430\u0441\u0441\u0438\u0432\u044b, \u0446\u0438\u043a\u043b\u044b \u0438 \u0441\u043d\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438","description":"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435","source":"@site/docs/js-basics/4-lock-knowledge/arrays-loops-funcs.mdx","sourceDirName":"js-basics/4-lock-knowledge","slug":"/js-basics/lock-knowledge/arrays-loops-funcs","permalink":"/maria-js-education/docs/js-basics/lock-knowledge/arrays-loops-funcs","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"2. \u0424\u0443\u043d\u043a\u0446\u0438\u0438, \u043e\u0431\u044a\u0435\u043a\u0442\u044b, \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b \u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435","permalink":"/maria-js-education/docs/js-basics/lock-knowledge/vars-and-obj-funcs"},"next":{"title":"\u0410\u043a\u0442 2. \u0412\u0451\u0440\u0441\u0442\u043a\u0430 \u0438 \u0441\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f","permalink":"/maria-js-education/docs/category/\u0430\u043a\u0442-2-\u0432\u0451\u0440\u0441\u0442\u043a\u0430-\u0438-\u0441\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f"}}');var s=t(4848),o=t(8453),i=t(8472),a=t(3232);const l={sidebar_position:3},c="3. \u041c\u0430\u0441\u0441\u0438\u0432\u044b, \u0446\u0438\u043a\u043b\u044b \u0438 \u0441\u043d\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",d={},u=[{value:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",id:"\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435",level:2},{value:"\u0417\u0430\u0434\u0430\u0447\u0430 1: \u0421\u0443\u043c\u043c\u0430 \u0447\u0451\u0442\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b",id:"\u0437\u0430\u0434\u0430\u0447\u0430-1-\u0441\u0443\u043c\u043c\u0430-\u0447\u0451\u0442\u043d\u044b\u0445-\u0447\u0438\u0441\u0435\u043b",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",level:3},{value:"\u0417\u0430\u0434\u0430\u0447\u0430 2: \u041e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u043f\u043e\u0440\u044f\u0434\u043e\u043a",id:"\u0437\u0430\u0434\u0430\u0447\u0430-2-\u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0439-\u043f\u043e\u0440\u044f\u0434\u043e\u043a",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",level:3},{value:"\u0417\u0430\u0434\u0430\u0447\u0430 3: \u0421\u043b\u043e\u0432\u0430\u0440\u044c",id:"\u0437\u0430\u0434\u0430\u0447\u0430-3-\u0441\u043b\u043e\u0432\u0430\u0440\u044c",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",level:3},{value:"\u0417\u0430\u0434\u0430\u0447\u0430 4: \u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438",id:"\u0437\u0430\u0434\u0430\u0447\u0430-4-\u0440\u0430\u0431\u043e\u0442\u0430-\u0441-\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438-\u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438",level:2},{value:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435",id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-3",level:3},{value:"\u0418\u0442\u043e\u0433\u0438",id:"\u0438\u0442\u043e\u0433\u0438",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"3-\u043c\u0430\u0441\u0441\u0438\u0432\u044b-\u0446\u0438\u043a\u043b\u044b-\u0438-\u0441\u043d\u043e\u0432\u0430-\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:"3. \u041c\u0430\u0441\u0441\u0438\u0432\u044b, \u0446\u0438\u043a\u043b\u044b \u0438 \u0441\u043d\u043e\u0432\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438"})}),"\n",(0,s.jsx)(n.h2,{id:"\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435",children:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435"}),"\n",(0,s.jsx)(n.p,{children:"\u041c\u044b \u0443\u0436\u0435 \u0438\u0437\u0443\u0447\u0438\u043b\u0438, \u043a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043c\u0430\u0441\u0441\u0438\u0432\u044b, \u043f\u0435\u0440\u0435\u0431\u0438\u0440\u0430\u0442\u044c \u0438\u0445 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0446\u0438\u043a\u043b\u043e\u0432 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445. \u0422\u0435\u043f\u0435\u0440\u044c \u043d\u0430\u0441\u0442\u0430\u043b\u043e \u0432\u0440\u0435\u043c\u044f \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u044d\u0442\u0438 \u0437\u043d\u0430\u043d\u0438\u044f \u0438 \u043d\u0430\u0443\u0447\u0438\u0442\u044c\u0441\u044f \u0440\u0435\u0448\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043c\u0430\u0441\u0441\u0438\u0432\u044b, \u0446\u0438\u043a\u043b\u044b \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432\u043c\u0435\u0441\u0442\u0435."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u0437\u0430\u0434\u0430\u0447\u0430-1-\u0441\u0443\u043c\u043c\u0430-\u0447\u0451\u0442\u043d\u044b\u0445-\u0447\u0438\u0441\u0435\u043b",children:"\u0417\u0430\u0434\u0430\u0447\u0430 1: \u0421\u0443\u043c\u043c\u0430 \u0447\u0451\u0442\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b"}),"\n",(0,s.jsxs)(n.admonition,{title:"\u041d\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0435",type:"info",children:[(0,s.jsxs)(n.p,{children:["\u0427\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0447\u0438\u0441\u043b\u043e \u0447\u0451\u0442\u043d\u044b\u043c, \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,s.jsx)(n.code,{children:"%"})," (\u043e\u0441\u0442\u0430\u0442\u043e\u043a \u043e\u0442 \u0434\u0435\u043b\u0435\u043d\u0438\u044f):"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"if (number % 2 === 0) {\n  console.log('\u0427\u0451\u0442\u043d\u043e\u0435');\n}\n"})}),(0,s.jsx)(n.p,{children:"\u0427\u0451\u0442\u043d\u044b\u0435 \u0447\u0438\u0441\u043b\u0430 \u0434\u0435\u043b\u044f\u0442\u0441\u044f \u043d\u0430 2 \u0431\u0435\u0437 \u043e\u0441\u0442\u0430\u0442\u043a\u0430."})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,s.jsxs)(n.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 ",(0,s.jsx)(n.code,{children:"numbers"})," \u0441 \u0447\u0438\u0441\u043b\u0430\u043c\u0438 ",(0,s.jsx)(n.code,{children:"1, 2, 3, 4, 5, 6"}),". \u0417\u0430\u0442\u0435\u043c \u043d\u0430\u043f\u0438\u0448\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,s.jsx)(n.code,{children:"getEvenSum"}),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u0447\u0438\u0441\u0435\u043b, \u043d\u0430\u0445\u043e\u0434\u0438\u0442 \u0432\u0441\u0435 \u0447\u0451\u0442\u043d\u044b\u0435 \u0447\u0438\u0441\u043b\u0430 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0438\u0445 \u0441\u0443\u043c\u043c\u0443."]}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"console.log(getEvenSum([1, 2, 3, 4, 5, 6])); // \u041e\u0436\u0438\u0434\u0430\u0435\u043c: 12\n"})}),"\n",(0,s.jsx)(a.A,{checks:[{type:"function",name:"getEvenSum",tests:[{input:[[1,2,3,4,5,6]],output:12}]}],solution:"function getEvenSum(numbers) {\n  let sum = 0;\n  for (let i = 0; i < numbers.length; i++) {\n      if (numbers[i] % 2 === 0) {\n        sum += numbers[i];\n      }\n  }\n  return sum;\n}\n"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u0437\u0430\u0434\u0430\u0447\u0430-2-\u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0439-\u043f\u043e\u0440\u044f\u0434\u043e\u043a",children:"\u0417\u0430\u0434\u0430\u0447\u0430 2: \u041e\u0431\u0440\u0430\u0442\u043d\u044b\u0439 \u043f\u043e\u0440\u044f\u0434\u043e\u043a"}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"\u0427\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u0431\u0438\u0440\u0430\u0442\u044c \u043c\u0430\u0441\u0441\u0438\u0432 \u0432 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435, \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0447\u0430\u0442\u044c \u0441 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0438 \u0434\u0432\u0438\u0433\u0430\u0442\u044c\u0441\u044f \u043a \u043f\u0435\u0440\u0432\u043e\u043c\u0443:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"for (let i = array.length - 1; i >= 0; i--) {\n  console.log(array[i]);\n}\n"})}),(0,s.jsxs)(n.p,{children:["\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439 \u0434\u043e\u0433\u0430\u0434\u0430\u0442\u044c\u0441\u044f, \u043f\u043e\u0447\u0435\u043c\u0443 ",(0,s.jsx)(n.code,{children:"i"})," \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c ",(0,s.jsx)(n.code,{children:"array.length - 1"}),"?"]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-1",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,s.jsxs)(n.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,s.jsx)(n.code,{children:"reverseArray"}),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043d\u043e\u0432\u044b\u0439 \u043c\u0430\u0441\u0441\u0438\u0432, \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u044b \u0432 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435."]}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"console.log(reverseArray(['\u044f\u0431\u043b\u043e\u043a\u043e', '\u0431\u0430\u043d\u0430\u043d', '\u0432\u0438\u0448\u043d\u044f'])); // \u041e\u0436\u0438\u0434\u0430\u0435\u043c: ['\u0432\u0438\u0448\u043d\u044f', '\u0431\u0430\u043d\u0430\u043d', '\u044f\u0431\u043b\u043e\u043a\u043e']\n"})}),"\n",(0,s.jsx)(a.A,{checks:[{type:"function",name:"reverseArray",tests:[{input:[["\u044f\u0431\u043b\u043e\u043a\u043e","\u0431\u0430\u043d\u0430\u043d","\u0432\u0438\u0448\u043d\u044f"]],output:["\u0432\u0438\u0448\u043d\u044f","\u0431\u0430\u043d\u0430\u043d","\u044f\u0431\u043b\u043e\u043a\u043e"]}]}],solution:"function reverseArray(array) {\n  let reversed = [];\n  for (let i = array.length - 1; i >= 0; i--) {\n      reversed.push(array[i]);\n  }\n  return reversed;\n}\n"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u0437\u0430\u0434\u0430\u0447\u0430-3-\u0441\u043b\u043e\u0432\u0430\u0440\u044c",children:"\u0417\u0430\u0434\u0430\u0447\u0430 3: \u0421\u043b\u043e\u0432\u0430\u0440\u044c"}),"\n",(0,s.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-2",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,s.jsxs)(n.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 ",(0,s.jsx)(n.code,{children:"dictionary"}),", \u0433\u0434\u0435 \u043a\u0430\u0436\u0434\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0434\u0432\u0430 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"word"})," \u2014 \u0441\u043b\u043e\u0432\u043e \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"translation"})," \u2014 \u0435\u0433\u043e \u043f\u0435\u0440\u0435\u0432\u043e\u0434 \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const dictionary = [\n  { word: '\u044f\u0431\u043b\u043e\u043a\u043e', translation: 'apple' },\n  { word: '\u0431\u0430\u043d\u0430\u043d', translation: 'banana' },\n  { word: '\u0432\u0438\u0448\u043d\u044f', translation: 'cherry' },\n];\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0417\u0430\u0442\u0435\u043c \u043d\u0430\u043f\u0438\u0448\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,s.jsx)(n.code,{children:"translate"}),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 ",(0,s.jsx)(n.code,{children:"dictionary"})," \u0438 \u0441\u043b\u043e\u0432\u043e \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c. \u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u0432\u043e\u0434 \u0441\u043b\u043e\u0432\u0430 \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439. \u0415\u0441\u043b\u0438 \u0441\u043b\u043e\u0432\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0439 \u0441\u0442\u0440\u043e\u043a\u0443 ",(0,s.jsx)(n.code,{children:'"\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"'}),"."]}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0432\u044b\u0437\u043e\u0432\u0430:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"console.log(translate(dictionary, '\u0431\u0430\u043d\u0430\u043d')); // \u041e\u0436\u0438\u0434\u0430\u0435\u043c: \"banana\"\nconsole.log(translate(dictionary, '\u0433\u0440\u0443\u0448\u0430')); // \u041e\u0436\u0438\u0434\u0430\u0435\u043c: \"\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\"\n"})}),"\n",(0,s.jsx)(i.A,{code:"const dictionary = [\n{ word: '\u044f\u0431\u043b\u043e\u043a\u043e', translation: 'apple' },\n{ word: '\u0431\u0430\u043d\u0430\u043d', translation: 'banana' },\n{ word: '\u0432\u0438\u0448\u043d\u044f', translation: 'cherry' },\n];\n\n// \u0421\u043e\u0437\u0434\u0430\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u044e translate\n// \u041f\u0440\u043e\u0432\u0435\u0440\u044c \u0435\u0451 \u0441 \u043f\u0440\u0438\u043c\u0435\u0440\u0430\u043c\u0438\n",solution:"const dictionary = [\n  { word: '\u044f\u0431\u043b\u043e\u043a\u043e', translation: 'apple' },\n  { word: '\u0431\u0430\u043d\u0430\u043d', translation: 'banana' },\n  { word: '\u0432\u0438\u0448\u043d\u044f', translation: 'cherry' },\n];\n\nfunction translate(dictionary, word) {\n  for (let i = 0; i < dictionary.length; i++) {\n      if (dictionary[i].word === word) {\n          return dictionary[i].translation;\n      }\n  }\n  return '\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d';\n}\n\nconsole.log(translate(dictionary, '\u0431\u0430\u043d\u0430\u043d')); // \"banana\"\nconsole.log(translate(dictionary, '\u0433\u0440\u0443\u0448\u0430')); // \"\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\"\n"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u0437\u0430\u0434\u0430\u0447\u0430-4-\u0440\u0430\u0431\u043e\u0442\u0430-\u0441-\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438-\u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438",children:"\u0417\u0430\u0434\u0430\u0447\u0430 4: \u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438"}),"\n",(0,s.jsx)(n.h3,{id:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435-3",children:"\u0423\u0441\u043b\u043e\u0432\u0438\u0435"}),"\n",(0,s.jsxs)(n.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0439 \u043c\u0430\u0441\u0441\u0438\u0432 ",(0,s.jsx)(n.code,{children:"numbers"})," \u0441 \u0447\u0438\u0441\u043b\u0430\u043c\u0438 ",(0,s.jsx)(n.code,{children:"10, 20, 30, 40, 50"}),". \u041d\u0430\u043f\u0438\u0448\u0438 \u0434\u0432\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"getAverage(numbers)"})," \u2014 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u0440\u0435\u0434\u043d\u0435\u0435 \u0430\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0447\u0438\u0441\u0435\u043b."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"getAboveAverage(numbers, average)"})," \u2014 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043c\u0430\u0441\u0441\u0438\u0432 \u0447\u0438\u0441\u0435\u043b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0441\u0440\u0435\u0434\u043d\u0435\u0433\u043e."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const numbers = [10, 20, 30, 40, 50];\nconst average = getAverage(numbers); // \u041e\u0436\u0438\u0434\u0430\u0435\u043c: 30\nconsole.log(getAboveAverage(numbers, average)); // \u041e\u0436\u0438\u0434\u0430\u0435\u043c: [40, 50]\n"})}),"\n",(0,s.jsx)(i.A,{code:"const numbers = [10, 20, 30, 40, 50];\n\n// \u0421\u043e\u0437\u0434\u0430\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u044e getAverage\n\n// \u0421\u043e\u0437\u0434\u0430\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u044e getAboveAverage\n\n// \u041f\u0440\u043e\u0432\u0435\u0440\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\n",solution:"const numbers = [10, 20, 30, 40, 50];\n\nfunction getAverage(numbers) {\n  let sum = 0;\n  for (let i = 0; i < numbers.length; i++) {\n      sum += numbers[i];\n  }\n  return sum / numbers.length;\n}\n\nfunction getAboveAverage(numbers, average) {\n  let result = [];\n  for (let i = 0; i < numbers.length; i++) {\n      if (numbers[i] > average) {\n          result.push(numbers[i]);\n      }\n  }\n  return result;\n}\n\nconst average = getAverage(numbers);\nconsole.log(average); // 30\nconsole.log(getAboveAverage(numbers, average)); // [40, 50]\n"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\u0438\u0442\u043e\u0433\u0438",children:"\u0418\u0442\u043e\u0433\u0438"}),"\n",(0,s.jsx)(n.p,{children:"\u042d\u0442\u0438 \u0437\u0430\u0434\u0430\u0447\u0438 \u043d\u0430\u0443\u0447\u0438\u043b\u0438 \u0442\u0435\u0431\u044f \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c \u0437\u043d\u0430\u043d\u0438\u044f \u043e \u043c\u0430\u0441\u0441\u0438\u0432\u0430\u0445, \u0446\u0438\u043a\u043b\u0430\u0445 \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445. \u0412\u0430\u0436\u043d\u043e \u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u0437\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c, \u043a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043a\u043e\u0434, \u0430 \u043f\u043e\u043d\u044f\u0442\u044c \u0435\u0433\u043e \u0441\u0443\u0442\u044c. \u0415\u0441\u043b\u0438 \u0442\u044b \u0441\u043f\u0440\u0430\u0432\u0438\u043b\u0430\u0441\u044c \u0441 \u0437\u0430\u0434\u0430\u043d\u0438\u044f\u043c\u0438, \u0442\u044b \u0433\u043e\u0442\u043e\u0432\u0430 \u043a \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c\u0443 \u0448\u0430\u0433\u0443!"})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},3232:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(6540),s=t(6894),o=t(7080),i=t(5109),a=t(5704),l=t(4848);const c=e=>{let{checks:n,solution:t}=e;const[c,d]=(0,r.useState)("// \u041d\u0430\u043f\u0438\u0448\u0438 \u0437\u0434\u0435\u0441\u044c \u0441\u0432\u043e\u0439 \u043a\u043e\u0434 \u0438 \u043d\u0430\u0436\u043c\u0438 \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c"),[u,h]=(0,r.useState)([]),[p,g]=(0,r.useState)(!1),f=(e,n)=>n.split(".").reduce(((e,n)=>e&&e[n]),e);return(0,l.jsxs)("div",{className:a.A.editorContainer,children:[(0,l.jsx)(s.Ay,{value:c,height:"300px",extensions:[(0,o.Q2)()],theme:i.bM,onChange:e=>d(e),className:a.A.codeMirror}),(0,l.jsxs)("div",{className:a.A.buttons,children:[(0,l.jsx)("button",{onClick:()=>{try{const e=Array.from(new Set(n.map((e=>e.name.split(".")[0])))),t=`\n              "use strict";\n              ${c}\n              return { ${e.join(", ")} };\n            `,r=new Function(t)();let s=[];n.forEach(((e,n)=>{const t=f(r,e.name),o=`${n}-${e.name}`;switch(e.type){case"variable":case"constant":t===e.expectedValue?s.push((0,l.jsxs)("div",{children:["\u2705 \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f ",(0,l.jsx)("code",{children:e.name})," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e."]},o)):s.push((0,l.jsxs)("div",{children:["\u274c \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f ",(0,l.jsx)("code",{children:e.name})," \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0440\u0430\u0432\u043d\u043e ",(0,l.jsx)("code",{children:String(e.expectedValue)}),", \u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e ",(0,l.jsx)("code",{children:String(t)}),"."]},o));break;case"array":{const n=Array.isArray(t)&&Array.isArray(e.expectedValue)&&t.length===e.expectedValue.length&&t.every(((n,t)=>n===e.expectedValue[t]));n?s.push((0,l.jsxs)("div",{children:["\u2705 \u041c\u0430\u0441\u0441\u0438\u0432 ",(0,l.jsx)("code",{children:e.name})," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e."]},o)):s.push((0,l.jsxs)("div",{children:["\u274c \u041c\u0430\u0441\u0441\u0438\u0432 ",(0,l.jsx)("code",{children:e.name})," \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0440\u0430\u0432\u0435\u043d ",(0,l.jsx)("code",{children:JSON.stringify(e.expectedValue)}),", \u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u043b ",(0,l.jsx)("code",{children:JSON.stringify(t)}),"."]},o));break}case"function":{const n=f(r,e.name);if("function"!=typeof n){s.push((0,l.jsxs)("div",{children:["\u274c ",(0,l.jsx)("code",{children:e.name})," \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439."]},o));break}e.tests.forEach(((t,r)=>{const i=e=>"object"==typeof e?JSON.stringify(e):e;let a;const c=Array.isArray(t.input)?[...t.input]:[t.input],d=c.map((e=>"object"==typeof e?JSON.stringify(e):String(e))).join(", ");try{a=n(...c)}catch(u){return void s.push((0,l.jsxs)("div",{children:["\u274c \u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,l.jsx)("code",{children:e.name})," \u0432\u044b\u0437\u0432\u0430\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0443 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0442\u0435\u0441\u0442\u0430 ",r+1,": ",u.message]},`${o}-${r}`))}i(a)===i(t.output)?s.push((0,l.jsxs)("div",{children:["\u2705 \u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,l.jsx)("code",{children:e.name})," \u043f\u0440\u043e\u0448\u043b\u0430 \u0442\u0435\u0441\u0442 ",(0,l.jsxs)("code",{children:[e.name,"(",d,") === ",String(t.output)]}),"  \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e."]},`${o}-${r}`)):s.push((0,l.jsxs)("div",{children:["\u274c \u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,l.jsx)("code",{children:e.name})," \u043d\u0435 \u043f\u0440\u043e\u0448\u043b\u0430 \u0442\u0435\u0441\u0442 ",(0,l.jsxs)("code",{children:[e.name,"(",d,") === ",String(t.output)]}),". \u041e\u0436\u0438\u0434\u0430\u043b\u043e\u0441\u044c ",(0,l.jsx)("code",{children:String(t.output)}),", \u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e ",(0,l.jsx)("code",{children:String(a)}),"."]},`${o}-${r}`))}));break}}})),h(s)}catch(e){console.error(e),h([(0,l.jsxs)("div",{children:["\u041e\u0448\u0438\u0431\u043a\u0430: ",(0,l.jsx)("code",{children:e.message})]},"exception")])}},className:"button button--secondary button--lg",children:"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c"}),(0,l.jsx)("button",{onClick:()=>g(!p),className:"button button--secondary button--lg",children:p?"\u0421\u043a\u0440\u044b\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435"})]}),u.length>0&&(0,l.jsxs)("div",{className:a.A.output,children:[(0,l.jsx)("strong",{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"})," ",u]}),p&&(0,l.jsxs)("div",{className:a.A.solution,children:[(0,l.jsx)("strong",{children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:"}),(0,l.jsx)("pre",{children:(0,l.jsx)("code",{children:t})})]})]})}},8472:(e,n,t)=>{t.d(n,{A:()=>x});var r,s,o,i=t(6540),a=t(4848),l=Object.create,c=Object.defineProperty,d=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,h=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty,g=(r=(e,n)=>{var t=function(){var e=String.fromCharCode,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",r={};function s(e,n){if(!r[e]){r[e]={};for(var t=0;t<e.length;t++)r[e][e.charAt(t)]=t}return r[e][n]}var o={compressToBase64:function(e){if(null==e)return"";var t=o._compress(e,6,(function(e){return n.charAt(e)}));switch(t.length%4){default:case 0:return t;case 1:return t+"===";case 2:return t+"==";case 3:return t+"="}},decompressFromBase64:function(e){return null==e?"":""==e?null:o._decompress(e.length,32,(function(t){return s(n,e.charAt(t))}))},compressToUTF16:function(n){return null==n?"":o._compress(n,15,(function(n){return e(n+32)}))+" "},decompressFromUTF16:function(e){return null==e?"":""==e?null:o._decompress(e.length,16384,(function(n){return e.charCodeAt(n)-32}))},compressToUint8Array:function(e){for(var n=o.compress(e),t=new Uint8Array(2*n.length),r=0,s=n.length;r<s;r++){var i=n.charCodeAt(r);t[2*r]=i>>>8,t[2*r+1]=i%256}return t},decompressFromUint8Array:function(n){if(null==n)return o.decompress(n);for(var t=new Array(n.length/2),r=0,s=t.length;r<s;r++)t[r]=256*n[2*r]+n[2*r+1];var i=[];return t.forEach((function(n){i.push(e(n))})),o.decompress(i.join(""))},compressToEncodedURIComponent:function(e){return null==e?"":o._compress(e,6,(function(e){return t.charAt(e)}))},decompressFromEncodedURIComponent:function(e){return null==e?"":""==e?null:(e=e.replace(/ /g,"+"),o._decompress(e.length,32,(function(n){return s(t,e.charAt(n))})))},compress:function(n){return o._compress(n,16,(function(n){return e(n)}))},_compress:function(e,n,t){if(null==e)return"";var r,s,o,i={},a={},l="",c="",d="",u=2,h=3,p=2,g=[],f=0,m=0;for(o=0;o<e.length;o+=1)if(l=e.charAt(o),Object.prototype.hasOwnProperty.call(i,l)||(i[l]=h++,a[l]=!0),c=d+l,Object.prototype.hasOwnProperty.call(i,c))d=c;else{if(Object.prototype.hasOwnProperty.call(a,d)){if(d.charCodeAt(0)<256){for(r=0;r<p;r++)f<<=1,m==n-1?(m=0,g.push(t(f)),f=0):m++;for(s=d.charCodeAt(0),r=0;r<8;r++)f=f<<1|1&s,m==n-1?(m=0,g.push(t(f)),f=0):m++,s>>=1}else{for(s=1,r=0;r<p;r++)f=f<<1|s,m==n-1?(m=0,g.push(t(f)),f=0):m++,s=0;for(s=d.charCodeAt(0),r=0;r<16;r++)f=f<<1|1&s,m==n-1?(m=0,g.push(t(f)),f=0):m++,s>>=1}0==--u&&(u=Math.pow(2,p),p++),delete a[d]}else for(s=i[d],r=0;r<p;r++)f=f<<1|1&s,m==n-1?(m=0,g.push(t(f)),f=0):m++,s>>=1;0==--u&&(u=Math.pow(2,p),p++),i[c]=h++,d=String(l)}if(""!==d){if(Object.prototype.hasOwnProperty.call(a,d)){if(d.charCodeAt(0)<256){for(r=0;r<p;r++)f<<=1,m==n-1?(m=0,g.push(t(f)),f=0):m++;for(s=d.charCodeAt(0),r=0;r<8;r++)f=f<<1|1&s,m==n-1?(m=0,g.push(t(f)),f=0):m++,s>>=1}else{for(s=1,r=0;r<p;r++)f=f<<1|s,m==n-1?(m=0,g.push(t(f)),f=0):m++,s=0;for(s=d.charCodeAt(0),r=0;r<16;r++)f=f<<1|1&s,m==n-1?(m=0,g.push(t(f)),f=0):m++,s>>=1}0==--u&&(u=Math.pow(2,p),p++),delete a[d]}else for(s=i[d],r=0;r<p;r++)f=f<<1|1&s,m==n-1?(m=0,g.push(t(f)),f=0):m++,s>>=1;0==--u&&(u=Math.pow(2,p),p++)}for(s=2,r=0;r<p;r++)f=f<<1|1&s,m==n-1?(m=0,g.push(t(f)),f=0):m++,s>>=1;for(;;){if(f<<=1,m==n-1){g.push(t(f));break}m++}return g.join("")},decompress:function(e){return null==e?"":""==e?null:o._decompress(e.length,32768,(function(n){return e.charCodeAt(n)}))},_decompress:function(n,t,r){var s,o,i,a,l,c,d,u=[],h=4,p=4,g=3,f="",m=[],v={val:r(0),position:t,index:1};for(s=0;s<3;s+=1)u[s]=s;for(i=0,l=Math.pow(2,2),c=1;c!=l;)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=r(v.index++)),i|=(a>0?1:0)*c,c<<=1;switch(i){case 0:for(i=0,l=Math.pow(2,8),c=1;c!=l;)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=r(v.index++)),i|=(a>0?1:0)*c,c<<=1;d=e(i);break;case 1:for(i=0,l=Math.pow(2,16),c=1;c!=l;)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=r(v.index++)),i|=(a>0?1:0)*c,c<<=1;d=e(i);break;case 2:return""}for(u[3]=d,o=d,m.push(d);;){if(v.index>n)return"";for(i=0,l=Math.pow(2,g),c=1;c!=l;)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=r(v.index++)),i|=(a>0?1:0)*c,c<<=1;switch(d=i){case 0:for(i=0,l=Math.pow(2,8),c=1;c!=l;)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=r(v.index++)),i|=(a>0?1:0)*c,c<<=1;u[p++]=e(i),d=p-1,h--;break;case 1:for(i=0,l=Math.pow(2,16),c=1;c!=l;)a=v.val&v.position,v.position>>=1,0==v.position&&(v.position=t,v.val=r(v.index++)),i|=(a>0?1:0)*c,c<<=1;u[p++]=e(i),d=p-1,h--;break;case 2:return m.join("")}if(0==h&&(h=Math.pow(2,g),g++),u[d])f=u[d];else{if(d!==p)return null;f=o+o.charAt(0)}m.push(f),u[p++]=o+f.charAt(0),o=f,0==--h&&(h=Math.pow(2,g),g++)}}};return o}();void 0!==n&&null!=n&&(n.exports=t)},()=>(s||r((s={exports:{}}).exports,s),s.exports));((e,n,t)=>{t=null!=e?l(h(e)):{},((e,n,t,r)=>{if(n&&"object"==typeof n||"function"==typeof n)for(let s of u(n))!p.call(e,s)&&s!==t&&c(e,s,{get:()=>n[s],enumerable:!(r=d(n,s))||r.enumerable})})(!n&&e&&e.__esModule?t:c(t,"default",{value:e,enumerable:!0}),e)})(g());async function f(e,n={}){"object"==typeof e&&!(e instanceof HTMLElement)&&"headless"===e.view&&(n=e,e=null);let t,{appUrl:r="https://livecodes.io/",params:s={},config:o={},import:i,lite:a,loading:l="lazy",template:c,view:d="split"}=n,u="headless"===d,h=null;if("string"==typeof e)h=document.querySelector(e);else if(e instanceof HTMLElement)h=e;else if(!u||"object"!=typeof e)throw new Error("A valid container element is required.");if(!h){if(!u)throw new Error(`Cannot find element: "${e}"`);h=document.createElement("div"),S(h),document.body.appendChild(h)}try{t=new URL(r)}catch(C){throw new Error(`"${r}" is not a valid URL.`)}let p=t.origin;if("object"==typeof s&&Object.keys(s).forEach((e=>{t.searchParams.set(e,String(s[e]))})),"string"==typeof o)try{new URL(o),t.searchParams.set("config",o)}catch(C){throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof o)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(o).length>0&&t.searchParams.set("config","sdk")}c&&t.searchParams.set("template",c),i&&t.searchParams.set("x",i),a&&t.searchParams.set("lite","true"),t.searchParams.set("embed","true"),t.searchParams.set("loading",u?"eager":l),t.searchParams.set("view",d);let g=!1,f="Cannot call API methods after calling `destroy()`.",m=await new Promise((e=>{var n,r,s,i,a,c,d,g,f;if(!h)return;let m=h.dataset.height||h.style.height;if(m&&!u){let e=isNaN(Number(m))?m:m+"px";h.style.height=e}"false"!==h.dataset.defaultStyles&&!u&&((n=h.style).backgroundColor||(n.backgroundColor="#fff"),(r=h.style).border||(r.border="1px solid black"),(s=h.style).borderRadius||(s.borderRadius="5px"),(i=h.style).boxSizing||(i.boxSizing="border-box"),(a=h.style).padding||(a.padding="0"),(c=h.style).width||(c.width="100%"),(d=h.style).height||(d.height=h.style.height||"300px"),h.style.minHeight="200px",h.style.flexGrow="1",(g=h.style).overflow||(g.overflow="hidden"),(f=h.style).resize||(f.resize="vertical"));let v=document.createElement("iframe");v.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),v.setAttribute("allowtransparency","true"),v.setAttribute("allowpaymentrequest","true"),v.setAttribute("allowfullscreen","true"),v.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");let j="eager"===l?"eager":"lazy";v.setAttribute("loading",j),v.classList.add("livecodes"),u?S(v):(v.style.height="100%",v.style.minHeight="200px",v.style.width="100%",v.style.margin="0",v.style.border="0",v.style.borderRadius=h.style.borderRadius),addEventListener("message",(function e(n){var t,r;n.source!==v.contentWindow||n.origin!==p||"livecodes-get-config"!==(null==(t=n.data)?void 0:t.type)||(removeEventListener("message",e),null==(r=v.contentWindow)||r.postMessage({type:"livecodes-config",payload:o},p))})),v.onload=()=>{e(v)},v.src=t.href,h.appendChild(v)})),v=new Promise((e=>{addEventListener("message",(function n(t){var r;t.source!==m.contentWindow||t.origin!==p||"livecodes-ready"!==(null==(r=t.data)?void 0:r.type)||(removeEventListener("message",n),e(),v.settled=!0)}))})),j=()=>g?Promise.reject(f):new Promise((async e=>{var n;v.settled&&e();null==(n=m.contentWindow)||n.postMessage({type:"livecodes-load"},p),await v,e()})),y=(e,n)=>new Promise((async(t,r)=>{var s;if(g)return r(f);await j();let o=k();addEventListener("message",(function n(s){var i,a;if(s.source===m.contentWindow&&s.origin===p&&"livecodes-api-response"===(null==(i=s.data)?void 0:i.type)&&(null==(a=s.data)?void 0:a.id)===o&&s.data.method===e){removeEventListener("message",n);let e=s.data.payload;null!=e&&e.error?r(e.error):t(e)}})),null==(s=m.contentWindow)||s.postMessage({method:e,id:o,args:n},p)})),x={},b=["load","ready","code","console","tests","destroy"],w=(e,n)=>{var t;if(g)throw new Error(f);return b.includes(e)?(y("watch",[e]),x[e]||(x[e]=[]),null==(t=x[e])||t.push(n),{remove:()=>{var t,r;x[e]=null==(t=x[e])?void 0:t.filter((e=>e!==n)),0===(null==(r=x[e])?void 0:r.length)&&y("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{var n,t,r,s;let o=(e=>({"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e]))(null!=(t=null==(n=e.data)?void 0:n.type)?t:"");if(e.source!==m.contentWindow||e.origin!==p||!o||!x[o])return;let i=null==(r=e.data)?void 0:r.payload;null==(s=x[o])||s.forEach((e=>{e(i)}))}));let A=()=>{var e;Object.values(x).forEach((e=>{e.length=0})),null==(e=null==m?void 0:m.remove)||e.call(m),g=!0};function S(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}"lazy"===l&&"IntersectionObserver"in window&&new IntersectionObserver(((e,n)=>{e.forEach((async e=>{e.isIntersecting&&(await j(),n.unobserve(h))}))}),{rootMargin:"150px"}).observe(h);let k=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>j(),run:()=>y("run"),format:e=>y("format",[e]),getShareUrl:e=>y("getShareUrl",[e]),getConfig:e=>y("getConfig",[e]),setConfig:e=>y("setConfig",[e]),getCode:()=>y("getCode"),show:(e,n)=>y("show",[e,n]),runTests:()=>y("runTests"),onChange:e=>w("code",e),watch:w,exec:(e,...n)=>y("exec",[e,...n]),destroy:()=>v.settled?y("destroy").then(A):g?Promise.reject(f):(A(),Promise.resolve())}}function m(e){let n=(0,i.useRef)(null),[t,r]=(0,i.useState)(e.className||""),[s,o]=(0,i.useState)(e.style||{}),[l,c]=(0,i.useState)(e.height),[d,u]=(0,i.useState)(),[h,p]=(0,i.useState)(JSON.stringify(e.config||"")),[g,m]=(0,i.useState)("");return(0,i.useEffect)((()=>{if(!n.current)return;let{className:t,style:s,height:i,sdkReady:a,config:l,...v}=e;if(r(t||""),o(s||{}),c(i),d&&g===JSON.stringify(v)){if(h===JSON.stringify(l))return;p(JSON.stringify(l)),"string"==typeof l?fetch(l).then((e=>e.json())).then((e=>{null==d||d.setConfig(e)})):l&&d.setConfig(l)}else m(JSON.stringify(v)),null==d||d.destroy(),f(n.current,{config:l,...v}).then((e=>{u(e),"function"==typeof a&&a(e)}))}),[e]),(0,i.useEffect)((()=>()=>{null==d||d.destroy()}),[]),(0,a.jsx)("div",{ref:n,className:t,style:s,"data-height":l})}globalThis.document&&document.currentScript&&"prefill"in(null==(o=document.currentScript)?void 0:o.dataset)&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let n,t=e.dataset.options;if(t)try{n=JSON.parse(t)}catch(i){}let r,s=e.dataset.config||e.dataset.prefill;if(s)try{r=JSON.parse(s)}catch(i){}let o=encodeURIComponent(e.outerHTML);e.innerHTML="",f(e,{import:"dom/"+o,...n,...r?{config:r}:{}})}))}));const v="liveCodeContainer_x_qZ",j="editor_IGNC";var y=t(5704);const x=e=>{let{code:n="// \u0437\u0434\u0435\u0441\u044c \u043f\u0438\u0448\u0435\u043c \u043a\u043e\u0434",scope:t={},theme:r="light",solution:s}=e;const[o,l]=(0,i.useState)(!1),c=(0,i.useCallback)((()=>l((e=>!e))),[]);return(0,a.jsxs)("div",{className:v,children:[(0,a.jsx)(m,{className:j,config:{theme:r,languages:["javascript"],activeEditor:"script",mode:"simple",formatOnsave:!0,trailingComma:!0,tools:{active:"console",status:"full"},script:{language:"javascript",content:n}}}),s&&(0,a.jsx)("button",{onClick:c,className:"button button--secondary button--lg",children:o?"\u0421\u043a\u0440\u044b\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435"}),o&&(0,a.jsxs)("div",{className:y.A.solution,children:[(0,a.jsx)("strong",{children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:"}),(0,a.jsx)("pre",{children:(0,a.jsx)("code",{children:s})})]})]})}},5704:(e,n,t)=>{t.d(n,{A:()=>r});const r={editorContainer:"editorContainer_F7Zt",codeMirror:"codeMirror_lOs2",buttons:"buttons_N9SI",output:"output_WQmR",solution:"solution_yFud"}}}]);