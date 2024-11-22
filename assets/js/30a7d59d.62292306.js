"use strict";(self.webpackChunkmaria_js_education=self.webpackChunkmaria_js_education||[]).push([[804],{2924:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"tutorial-basics/boolean","title":"1.5 \u0411\u0443\u043b\u0435\u0432\u0430 \u043b\u043e\u0433\u0438\u043a\u0430","description":"\u0417\u043d\u0430\u043d\u0438\u044f","source":"@site/docs/tutorial-basics/boolean.mdx","sourceDirName":"tutorial-basics","slug":"/tutorial-basics/boolean","permalink":"/maria-js-education/docs/tutorial-basics/boolean","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"1.4 \u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043c\u0435\u0436\u0434\u0443 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c\u0438 \u0438 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0430\u043c\u0438","permalink":"/maria-js-education/docs/tutorial-basics/operations"}}');var r=s(4848),l=s(8453),t=s(5599);const c={sidebar_position:5},d="1.5 \u0411\u0443\u043b\u0435\u0432\u0430 \u043b\u043e\u0433\u0438\u043a\u0430",a={},o=[{value:"\u0417\u043d\u0430\u043d\u0438\u044f",id:"\u0437\u043d\u0430\u043d\u0438\u044f",level:2},{value:"<strong>\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438</strong>",id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438",level:3},{value:"1. <strong>\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0418 (<code>&amp;&amp;</code>)</strong>",id:"1-\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435-\u0438-",level:4},{value:"2. <strong>\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0418\u041b\u0418 (<code>||</code>)</strong>",id:"2-\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435-\u0438\u043b\u0438-",level:4},{value:"3. <strong>\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u041d\u0415 (<code>!</code>)</strong>",id:"3-\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435-\u043d\u0435-",level:4},{value:"<strong>\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f</strong>",id:"\u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f",level:3},{value:"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435",id:"\u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435-\u0437\u0430\u0434\u0430\u043d\u0438\u0435",level:2}];function h(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"15-\u0431\u0443\u043b\u0435\u0432\u0430-\u043b\u043e\u0433\u0438\u043a\u0430",children:"1.5 \u0411\u0443\u043b\u0435\u0432\u0430 \u043b\u043e\u0433\u0438\u043a\u0430"})}),"\n",(0,r.jsx)(n.h2,{id:"\u0437\u043d\u0430\u043d\u0438\u044f",children:"\u0417\u043d\u0430\u043d\u0438\u044f"}),"\n",(0,r.jsxs)(n.admonition,{title:"\u0427\u0442\u043e \u044d\u0442\u043e \u0442\u0430\u043a\u043e\u0435?",type:"tip",children:[(0,r.jsx)(n.p,{children:"\u041f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043e\u0442 \u0444\u0430\u043c\u0438\u043b\u0438\u0438 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430 (\u0414\u0436\u043e\u0440\u0434\u0436\u0430 \u0411\u0443\u043b\u044f)."}),(0,r.jsxs)(n.p,{children:["\u0411\u0443\u043b\u0435\u0432\u0430 \u043b\u043e\u0433\u0438\u043a\u0430 \u2014 \u044d\u0442\u043e \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439, \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0430\u044f \u0441 \u0434\u0432\u0443\u043c\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438: ",(0,r.jsx)(n.code,{children:"true"})," (\u0438\u0441\u0442\u0438\u043d\u0430) \u0438 ",(0,r.jsx)(n.code,{children:"false"})," (\u043b\u043e\u0436\u044c). \u0412 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u043e\u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0439 \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u0442\u043e\u043a\u043e\u043c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b."]})]}),"\n",(0,r.jsx)(n.h3,{id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438",children:(0,r.jsx)(n.strong,{children:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438"})}),"\n",(0,r.jsxs)(n.h4,{id:"1-\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435-\u0438-",children:["1. ",(0,r.jsxs)(n.strong,{children:["\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0418 (",(0,r.jsx)(n.code,{children:"&&"}),")"]})]}),"\n",(0,r.jsxs)(n.p,{children:["\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,r.jsx)(n.code,{children:"true"}),", \u0435\u0441\u043b\u0438 \u043e\u0431\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0438\u0441\u0442\u0438\u043d\u043e\u0439."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0440:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"let isStudent = true;\nlet hasID = true;\n\nlet canEnter = isStudent && hasID; // -> true (\u043e\u0431\u0430 \u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0438\u0441\u0442\u0438\u043d\u043d\u044b)\n\nlet cannotEnter = isStudent && false; // -> false (\u043e\u0434\u043d\u043e \u0438\u0437 \u0443\u0441\u043b\u043e\u0432\u0438\u0439 \u043b\u043e\u0436\u043d\u043e)\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"2-\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435-\u0438\u043b\u0438-",children:["2. ",(0,r.jsxs)(n.strong,{children:["\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0418\u041b\u0418 (",(0,r.jsx)(n.code,{children:"||"}),")"]})]}),"\n",(0,r.jsxs)(n.p,{children:["\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,r.jsx)(n.code,{children:"true"}),", \u0435\u0441\u043b\u0438 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u0441\u0442\u0438\u043d\u043e\u0439."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0440:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"let isAdmin = false;\nlet isModerator = true;\n\nlet canEdit = isAdmin || isModerator; // -> true (\u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u043e \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u0438\u0441\u0442\u0438\u043d\u043d\u043e)\n"})}),"\n",(0,r.jsxs)(n.h4,{id:"3-\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435-\u043d\u0435-",children:["3. ",(0,r.jsxs)(n.strong,{children:["\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u041d\u0415 (",(0,r.jsx)(n.code,{children:"!"}),")"]})]}),"\n",(0,r.jsxs)(n.p,{children:["\u0418\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u0443\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. ",(0,r.jsx)(n.code,{children:"true"})," \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f ",(0,r.jsx)(n.code,{children:"false"}),", \u0438 \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0440:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"let isGuest = false;\n\nlet isNotGuest = !isGuest; // -> true (\u0433\u043e\u0441\u0442\u044c \u043f\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0432 \u043d\u0435-\u0433\u043e\u0441\u0442\u044f)\n\n// \u0410 \u043c\u043e\u0436\u043d\u043e \u0434\u0430\u0436\u0435 \u0442\u0430\u043a, \u0435\u0441\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043a\u043e\u0431\u043a\u0438.\n// \u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432\u043d\u0443\u0442\u0440\u0438 \u0441\u043a\u043e\u0431\u043e\u043a.\nconst isNotTest = !(isGuest || true) // -> false\n"})}),"\n",(0,r.jsxs)(n.admonition,{title:"\u041f\u0440\u043e \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439",type:"tip",children:[(0,r.jsx)(n.p,{children:"\u041f\u0440\u0430\u0432\u0438\u043b\u043e \u0441\u043a\u043e\u0431\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043a\u0430\u043a \u0432 \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0435. \u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u043e, \u0447\u0442\u043e \u0432\u0443\u043d\u0442\u0440\u0438 \u0441\u043a\u043e\u0431\u043e\u043a, \u043f\u043e\u0442\u043e\u043c \u0441\u043d\u0430\u0440\u0443\u0436\u0438."}),(0,r.jsx)(n.p,{children:"\u0422\u0430\u043a\u0436\u0435, \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u044f\u0442 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0443\u043c\u043d\u043e\u0436\u0435\u043d\u0438\u044f \u0438 \u0434\u0435\u043b\u0435\u043d\u0438\u044f, \u0430 \u043f\u043e\u0442\u043e\u043c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441\u0443\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0440\u0430\u0437\u043d\u043e\u0441\u0442\u0438."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const test = 2 + 2 * 2 / 2 - 2; // -> 2\nconst test2 = (2 + 2) * (2 / 2 - 2); // -> -4\n"})})]}),"\n",(0,r.jsx)(n.h3,{id:"\u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f",children:(0,r.jsx)(n.strong,{children:"\u0421\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f"})}),"\n",(0,r.jsx)(n.p,{children:"\u0411\u0443\u043b\u0435\u0432\u0430 \u043b\u043e\u0433\u0438\u043a\u0430 \u0447\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430\u043c\u0438 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:">"})," (\u0431\u043e\u043b\u044c\u0448\u0435)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<"})," (\u043c\u0435\u043d\u044c\u0448\u0435)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:">="})," (\u0431\u043e\u043b\u044c\u0448\u0435 \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u043e)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"<="})," (\u043c\u0435\u043d\u044c\u0448\u0435 \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u043e)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"==="})," (\u0441\u0442\u0440\u043e\u0433\u043e\u0435 \u0440\u0430\u0432\u0435\u043d\u0441\u0442\u0432\u043e)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"!=="})," (\u0441\u0442\u0440\u043e\u0433\u043e\u0435 \u043d\u0435\u0440\u0430\u0432\u0435\u043d\u0441\u0442\u0432\u043e)"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0440:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"let age = 20;\n\nlet isAdult = age >= 18; // -> true (20 \u0431\u043e\u043b\u044c\u0448\u0435 \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u043e 18)\nlet isTeen = age < 18; // -> false (20 \u043d\u0435 \u043c\u0435\u043d\u044c\u0448\u0435 18)\n\nlet isExactMatch = age === 20; // -> true (\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 20)\nlet isDifferent = age !== 15; // -> true (\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0435\u0442 \u0441 15)\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u0415\u0449\u0451 \u0440\u0430\u0437 \u043f\u0440\u043e \u0441\u043a\u043e\u0431\u043a\u0438",type:"warning",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439 \u0441\u043a\u043e\u0431\u043a\u0438 \u0434\u043b\u044f \u0443\u0442\u043e\u0447\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: ",(0,r.jsx)(n.code,{children:"(condition1 && condition2) || condition3"}),". ",(0,r.jsx)(n.em,{children:"condition"})," \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043a\u0430\u043a ",(0,r.jsx)(n.em,{children:"\u0443\u0441\u043b\u043e\u0432\u0438\u0435"})]}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435-\u0437\u0430\u0434\u0430\u043d\u0438\u0435",children:"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u0417\u0430\u0434\u0430\u0447\u0430"}),": \u0412\u044b\u043f\u043e\u043b\u043d\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0448\u0430\u0433\u0438:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u041e\u0431\u044a\u044f\u0432\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e ",(0,r.jsx)(n.code,{children:"age"})," \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c ",(0,r.jsx)(n.code,{children:"25"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["\u041e\u0431\u044a\u044f\u0432\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e ",(0,r.jsx)(n.code,{children:"hasDrivingLicense"})," \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c ",(0,r.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["\u041e\u0431\u044a\u044f\u0432\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e ",(0,r.jsx)(n.code,{children:"isEmployed"})," \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c ",(0,r.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["\u0421\u043e\u0437\u0434\u0430\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e ",(0,r.jsx)(n.code,{children:"canRentCar"}),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0432\u043d\u0430 ",(0,r.jsx)(n.code,{children:"true"}),", \u0435\u0441\u043b\u0438 ",(0,r.jsx)(n.code,{children:"age"})," \u0431\u043e\u043b\u044c\u0448\u0435 \u0438\u043b\u0438 \u0440\u0430\u0432\u043d\u043e ",(0,r.jsx)(n.code,{children:"21"})," \u0438 \u0443 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430 \u0435\u0441\u0442\u044c \u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043f\u0440\u0430\u0432\u0430."]}),"\n",(0,r.jsxs)(n.li,{children:["\u0421\u043e\u0437\u0434\u0430\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e ",(0,r.jsx)(n.code,{children:"isEligibleForLoan"}),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0432\u043d\u0430 ",(0,r.jsx)(n.code,{children:"true"}),", \u0435\u0441\u043b\u0438 \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u0441\u0442\u0430\u0440\u0448\u0435 ",(0,r.jsx)(n.code,{children:"18"})," \u0438 \u043b\u0438\u0431\u043e \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0435\u043d, \u043b\u0438\u0431\u043e \u0438\u043c\u0435\u0435\u0442 \u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043f\u0440\u0430\u0432\u0430."]}),"\n",(0,r.jsx)(n.li,{children:"\u041d\u0430\u0436\u043c\u0438 \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u044c, \u0447\u0442\u043e \u0432\u0441\u0451 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e"}),"\n",(0,r.jsxs)(n.li,{children:["\u041a\u043e\u0433\u0434\u0430 \u0441\u0434\u0435\u043b\u0430\u0435\u0448\u044c \u0432\u0441\u0451 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e, \u0442\u043e \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439 \u043f\u043e\u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0438 \u043f\u043e\u043d\u0430\u0436\u0438\u043c\u0430\u0442\u044c \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c, \u0447\u0442\u043e\u0431\u044b \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u043a\u0430\u043a \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442. \u0414\u0435\u043b\u0430\u0439 \u044d\u0442\u043e \u043f\u043e\u043a\u0430 \u043d\u0435 \u043f\u043e\u0439\u043c\u0435\u0448\u044c \u0432\u0441\u044e \u043b\u043e\u0433\u0438\u043a\u0443 - \u0442\u0432\u043e\u044f \u0446\u0435\u043b\u044c, \u043f\u043e\u043d\u044f\u0442\u044c, ",(0,r.jsx)(n.strong,{children:"\u043a\u0430\u043a \u043e\u0434\u043d\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u043b\u0438\u044f\u044e\u0442 \u043d\u0430 \u0434\u0440\u0443\u0433\u0438\u0435"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.A,{checks:[{type:"variable",name:"age",expectedValue:25},{type:"variable",name:"hasDrivingLicense",expectedValue:!0},{type:"variable",name:"isEmployed",expectedValue:!1},{type:"variable",name:"canRentCar",expectedValue:!0},{type:"variable",name:"isEligibleForLoan",expectedValue:!0}],solution:"let age = 25;\nlet hasDrivingLicense = true;\nlet isEmployed = false;\n\n  let canRentCar = age >= 21 && hasDrivingLicense;\n  let isEligibleForLoan = age > 18 && (isEmployed || hasDrivingLicense);"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{})})]})}function x(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5599:(e,n,s)=>{s.d(n,{A:()=>j});var i=s(6540),r=s(6894),l=s(7080),t=s(5109);const c="editorContainer_x3k5",d="codeMirror_WYZ4",a="buttons_CSsR",o="output_mhW2",h="solution_YZAM";var x=s(4848);const j=e=>{let{checks:n,solution:s}=e;const[j,u]=(0,i.useState)("// \u041d\u0430\u043f\u0438\u0448\u0438 \u0437\u0434\u0435\u0441\u044c \u0441\u0432\u043e\u0439 \u043a\u043e\u0434 \u0438 \u043d\u0430\u0436\u043c\u0438 \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c"),[p,g]=(0,i.useState)([]),[m,v]=(0,i.useState)(!1);return(0,x.jsxs)("div",{className:c,children:[(0,x.jsx)(r.Ay,{value:j,height:"300px",extensions:[(0,l.Q2)()],theme:t.bM,onChange:e=>u(e),className:d}),(0,x.jsxs)("div",{className:a,children:[(0,x.jsx)("button",{onClick:()=>{try{let e=[];n.forEach((n=>{n.type,e.push(n.name)}));const s=`\n        "use strict";\n        ${j}\n        return { ${e.join(", ")} };\n      `,i=new Function(s)();let r=[];n.forEach((e=>{switch(e.type){case"variable":case"constant":{const n=i[e.name];n===e.expectedValue?r.push((0,x.jsxs)("div",{children:["\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f `",e.name,"` \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e."]})):r.push((0,x.jsxs)("div",{children:["\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f `",e.name,"` \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0440\u0430\u0432\u043d\u043e `",String(e.expectedValue),"`, \u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e `",String(n),"`."]}));break}case"array":{const n=i[e.name];Array.isArray(n)&&Array.isArray(e.expectedValue)&&n.length===e.expectedValue.length&&n.every(((n,s)=>n===e.expectedValue[s]))?r.push((0,x.jsxs)("div",{children:["\u041c\u0430\u0441\u0441\u0438\u0432 \\`",e.name,"\\` \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e."]})):r.push((0,x.jsxs)("div",{children:["\u041c\u0430\u0441\u0441\u0438\u0432 `",e.name,"` \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0440\u0430\u0432\u0435\u043d `",JSON.stringify(e.expectedValue),"`, \u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u043b `",JSON.stringify(n),"`."]}));break}case"function":{const n=i[e.name];if("function"!=typeof n){r.push((0,x.jsxs)("div",{children:["\\`",e.name,"\\` \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439."]}));break}e.tests.forEach(((s,i)=>{let l;try{l=Array.isArray(s.input)?n(...s.input):n(s.input)}catch(t){return void r.push((0,x.jsxs)("div",{children:["\u0424\u0443\u043d\u043a\u0446\u0438\u044f `",e.name,"` \u0432\u044b\u0437\u0432\u0430\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0443 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0442\u0435\u0441\u0442\u0430 ",i+1,": ",t.message]}))}l===s.output?r.push((0,x.jsxs)("div",{children:["\u0424\u0443\u043d\u043a\u0446\u0438\u044f `",e.name,"` \u043f\u0440\u043e\u0448\u043b\u0430 \u0442\u0435\u0441\u0442 ",i+1," \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e."]})):r.push((0,x.jsxs)("div",{children:["\u0424\u0443\u043d\u043a\u0446\u0438\u044f `",e.name,"` \u043d\u0435 \u043f\u0440\u043e\u0448\u043b\u0430 \u0442\u0435\u0441\u0442 ",i+1,". \u041e\u0436\u0438\u0434\u0430\u043b\u043e\u0441\u044c `",s.output,"`, \u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0430 `",l,"`."]}))}));break}}})),g(r)}catch(e){g([(0,x.jsxs)("div",{children:["\u041e\u0448\u0438\u0431\u043a\u0430: ",e.message]})])}},className:"button button--secondary button--lg",children:"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c"}),(0,x.jsx)("button",{onClick:()=>v(!m),className:"button button--secondary button--lg",children:m?"\u0421\u043a\u0440\u044b\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435"})]}),p.length>0&&(0,x.jsxs)("div",{className:o,children:[(0,x.jsx)("strong",{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"})," ",p]}),m&&(0,x.jsxs)("div",{className:h,children:[(0,x.jsx)("strong",{children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:"}),(0,x.jsx)("pre",{children:(0,x.jsx)("code",{children:s})})]})]})}}}]);