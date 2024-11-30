"use strict";(self.webpackChunkmaria_js_education=self.webpackChunkmaria_js_education||[]).push([[5295],{3818:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>j,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"js-basics/vars-consts-conditions/constant","title":"1.1 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b","description":"\u0417\u043d\u0430\u043d\u0438\u044f","source":"@site/docs/js-basics/1-vars-consts-conditions/constant.mdx","sourceDirName":"js-basics/1-vars-consts-conditions","slug":"/js-basics/vars-consts-conditions/constant","permalink":"/maria-js-education/docs/js-basics/vars-consts-conditions/constant","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"1. \u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435, \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b \u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438","permalink":"/maria-js-education/docs/category/1-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435-\u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b-\u0438-\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438"},"next":{"title":"1.2 \u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435","permalink":"/maria-js-education/docs/js-basics/vars-consts-conditions/variable"}}');var r=n(4848),t=n(8453),c=n(3232);const o={sidebar_position:1},d="1.1 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b",a={},l=[{value:"\u0417\u043d\u0430\u043d\u0438\u044f",id:"\u0437\u043d\u0430\u043d\u0438\u044f",level:2},{value:"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435",id:"\u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435-\u0437\u0430\u0434\u0430\u043d\u0438\u0435",level:2}];function h(e){const s={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"11-\u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b",children:"1.1 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b"})}),"\n",(0,r.jsx)(s.h2,{id:"\u0437\u043d\u0430\u043d\u0438\u044f",children:"\u0417\u043d\u0430\u043d\u0438\u044f"}),"\n",(0,r.jsx)(s.admonition,{title:"\u0427\u0442\u043e \u044d\u0442\u043e \u0442\u0430\u043a\u043e\u0435?",type:"tip",children:(0,r.jsxs)(s.p,{children:["\u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 (\u0447\u0438\u0441\u043b\u043e, \u0441\u0442\u0440\u043e\u043a\u0443 \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0439 ",(0,r.jsx)(s.strong,{children:"\u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445"}),"), \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432 \u0434\u0430\u043b\u044c\u043d\u0435\u0439\u0448\u0435\u043c, \u043f\u043e \u043a\u043e\u0434\u0443, \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c."]})}),"\n",(0,r.jsxs)(s.p,{children:["\u0412 JavaScript \u0434\u043b\u044f \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,r.jsx)(s.strong,{children:"\u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e"})," ",(0,r.jsx)(s.code,{children:"const"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["\u041f\u0440\u0438\u043c\u0435\u0440 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b (\u043d\u0430\u0443\u0447\u043d\u044b\u043c \u044f\u0437\u044b\u043a\u043e\u043c \u044d\u0442\u043e \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,r.jsx)(s.strong,{children:"\u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f"})," \u0438\u043b\u0438 ",(0,r.jsx)(s.strong,{children:"\u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0435"}),")"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:"const superConst = '\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435';\n// \u0410 \u044d\u0442\u043e \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u0432 \u043a\u043e\u0434\u0435, \u043f\u043e\u0441\u043b\u0435 \u0434\u0432\u0443\u0445 \u0441\u043b\u0435\u0448\u0435\u0439 \u043c\u043e\u0436\u0435\u0442 \u0438\u0434\u0442\u0438 \u043b\u044e\u0431\u043e\u0439 \u043f\u043e\u044f\u0441\u043d\u044f\u044e\u0449\u0438\u0439 \u0442\u0435\u043a\u0441\u0442\n// \u042d\u0442\u043e\u0442 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u0442\u0435\u0431\u044f, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430, JS \u0435\u0433\u043e \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u0442\n\nsuperConst = '\u041d\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435'; // <-- \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0443 \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u043f\u043e\u0441\u043b\u0435 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438\n// JS \u0431\u0443\u0434\u0435\u0442 \u0440\u0443\u0433\u0430\u0442\u044c\u0441\u044f \u0438 \u0432\u044b\u0434\u0430\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0443 \u0441 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u0442\u0435\u043a\u0441\u0442\u043e\u043c \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c \u044f\u0437\u044b\u043a\u0435\n"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"superConst"})," \u0432 \u044d\u0442\u043e\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 - \u044d\u0442\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b, \u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0437\u043d\u0430\u043a\u0430 \u0440\u0430\u0432\u043d\u0430 \u044d\u0442\u043e\u0439 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0435 \u043f\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u043e\u0442\u043e\u043c \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c."]}),"\n",(0,r.jsxs)(s.p,{children:["\u041a\u0430\u0436\u0434\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430, \u043a\u043e\u0442\u043e\u0440\u0443\u044e JS \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0442\u044c (\u0442\u043e \u0435\u0441\u0442\u044c, \u0432\u0441\u0451, \u043a\u0440\u043e\u043c\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432) \u0437\u0430\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0437\u043d\u0430\u043a\u043e\u043c ",(0,r.jsx)(s.code,{children:";"}),". \u0413\u0440\u0443\u0431\u043e \u0433\u043e\u0432\u043e\u0440\u044f, \u043c\u044b \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0435\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u0430\u0451\u043c \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0443."]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsxs)(s.p,{children:["\u0421 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0437\u043d\u0430\u043a\u0430 ",(0,r.jsx)(s.code,{children:"="})," \u043c\u044b \u0433\u043e\u0432\u043e\u0440\u0438\u043c \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0443, \u0447\u0442\u043e\u0431\u044b \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0430 \u0445\u0440\u0430\u043d\u0438\u043b\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043c\u044b \u043f\u0438\u0448\u0435\u043c \u043f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0437\u043d\u0430\u043a\u0430."]})}),"\n",(0,r.jsxs)(s.p,{children:["\u0412 \u043d\u0430\u0448\u0435\u043c \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0437\u043d\u0430\u043a\u0430 ",(0,r.jsx)(s.code,{children:"="})," \u043c\u044b \u0433\u043e\u0432\u043e\u0440\u0438\u043c \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0443, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u043c ",(0,r.jsx)(s.strong,{children:"\u0437\u0430\u0434\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"})," \u0434\u043b\u044f \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b."]}),"\n",(0,r.jsxs)(s.p,{children:["\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430 \u0441\u0442\u0440\u043e\u043a\u0430 ",(0,r.jsx)(s.code,{children:"const superConst = '\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435';"})," \u0437\u0432\u0443\u0447\u0438\u0442 \u0442\u0430\u043a:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"\u041e\u0431\u044a\u044f\u0432\u0438 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0443 \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c superConst, \u0438 \u043f\u0443\u0441\u0442\u044c \u0435\u0451 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 '\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435'\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u042d\u0442\u043e \u043f\u0435\u0440\u0432\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043c\u044b \u0434\u0430\u0435\u043c \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0443. \u0410 \u0432\u0442\u043e\u0440\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 - ",(0,r.jsx)(s.code,{children:"superConst = '\u041d\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435';"}),". \u0422\u0443\u0442 \u043c\u044b \u0433\u043e\u0432\u043e\u0440\u0438\u043c, \u0447\u0442\u043e\u0431\u044b \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u043f\u0440\u0438\u0441\u0432\u043e\u0438\u043b \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0435 \u043d\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435.\n\u041d\u043e \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0438\u0442, \u0447\u0442\u043e \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0435 \u043d\u0435\u043b\u044c\u0437\u044f \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. \u041e\u043d\u0430 \u043c\u043e\u0436\u0435\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u0435."]}),"\n",(0,r.jsxs)(s.admonition,{type:"danger",children:[(0,r.jsxs)(s.mdxAdmonitionTitle,{children:[(0,r.jsx)(s.em,{children:"\u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0430"})," \u0432 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0435 \u0441 \u043b\u0430\u0442\u0438\u043d\u0441\u043a\u043e\u0433\u043e ",(0,r.jsx)(s.em,{children:"\u041f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u0430\u044f"})]}),(0,r.jsxs)(s.p,{children:["\u041f\u043e\u0441\u043b\u0435 \u0438\u043d\u0438\u0446\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b, \u0435\u0451 \u0443\u0436\u0435 \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c. JS \u0432\u044b\u0434\u0430\u0441\u0442 \u043e\u0448\u0438\u0431\u043a\u0443 ",(0,r.jsx)(s.code,{children:"Assignment to constant variable."})]})]}),"\n",(0,r.jsxs)(s.p,{children:["\u0422\u0430\u043a\u0436\u0435, \u043e\u0431\u0440\u0430\u0442\u0438 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e ",(0,r.jsx)(s.code,{children:"const"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f ",(0,r.jsx)(s.strong,{children:"\u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f"})," \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b. \u041d\u043e \u0435\u0441\u043b\u0438 \u0442\u044b \u0435\u0451 \u043d\u0435 \u043e\u0431\u044a\u044f\u0432\u0438\u0448\u044c, \u0430 \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0435\u0448\u044c \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0442\u0430\u043a:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-javascript",children:"superConst = '\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435'; // \u0441\u043b\u043e\u0432\u043e const \u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u043d\u0435 \u043d\u0430\u043f\u0438\u0441\u0430\u043b\u0438\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u0422\u043e \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u043e\u0442\u0432\u0435\u0442\u0438\u0442, \u0447\u0442\u043e \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b superConst \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442. \u0410 \u0432\u0441\u0451 \u043f\u043e\u0442\u043e\u043c\u0443, \u0447\u0442\u043e \u0442\u044b \u043d\u0435 \u043e\u0431\u044a\u044f\u0432\u0438\u043b\u0430 \u0435\u043c\u0443, \u0447\u0442\u043e \u043e\u043d\u0430 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442."}),"\n",(0,r.jsxs)(s.admonition,{title:"\u041a\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u043d\u0430\u0448\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b?",type:"tip",children:[(0,r.jsx)(s.p,{children:"\u0412 \u043e\u0431\u0449\u0435\u043c \u0433\u043e\u0432\u043e\u0440\u044f \u043d\u0430\u0448\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440 \u0432 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435 \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0435, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u0448 \u043a\u043e\u0434."}),(0,r.jsxs)(s.p,{children:["\u041d\u043e, \u0435\u0441\u043b\u0438 \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e, \u0442\u043e \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u043a\u043e\u0433\u0434\u0430 \u043a\u043e\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u0441\u0430\u0439\u0442\u0435, \u043a\u0430\u043a \u0437\u0434\u0435\u0441\u044c, ",(0,r.jsx)(s.strong,{children:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0431\u0440\u0430\u0443\u0437\u0435\u0440"}),"."]})]}),"\n",(0,r.jsx)(s.h2,{id:"\u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435-\u0437\u0430\u0434\u0430\u043d\u0438\u0435",children:"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"\u0417\u0430\u0434\u0430\u0447\u0430"}),": \u041e\u0431\u044a\u044f\u0432\u0438 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0443 ",(0,r.jsx)(s.code,{children:"yaSuperPupper"})," \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c ",(0,r.jsx)(s.code,{children:"\u042f \u0442\u0435\u043f\u0435\u0440\u044c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u043a\u0430"}),"."]}),"\n",(0,r.jsx)(c.A,{checks:[{type:"variable",name:"yaSuperPupper",expectedValue:"\u042f \u0442\u0435\u043f\u0435\u0440\u044c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u043a\u0430"}],solution:"const yaSuperPupper = '\u042f \u0442\u0435\u043f\u0435\u0440\u044c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u043a\u0430';"})]})}function j(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},3232:(e,s,n)=>{n.d(s,{A:()=>a});var i=n(6540),r=n(6894),t=n(7080),c=n(5109),o=n(5704),d=n(4848);const a=e=>{let{checks:s,solution:n}=e;const[a,l]=(0,i.useState)("// \u041d\u0430\u043f\u0438\u0448\u0438 \u0437\u0434\u0435\u0441\u044c \u0441\u0432\u043e\u0439 \u043a\u043e\u0434 \u0438 \u043d\u0430\u0436\u043c\u0438 \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c"),[h,j]=(0,i.useState)([]),[x,u]=(0,i.useState)(!1),p=(e,s)=>s.split(".").reduce(((e,s)=>e&&e[s]),e);return(0,d.jsxs)("div",{className:o.A.editorContainer,children:[(0,d.jsx)(r.Ay,{value:a,height:"300px",extensions:[(0,t.Q2)()],theme:c.bM,onChange:e=>l(e),className:o.A.codeMirror}),(0,d.jsxs)("div",{className:o.A.buttons,children:[(0,d.jsx)("button",{onClick:()=>{try{const e=Array.from(new Set(s.map((e=>e.name.split(".")[0])))),n=`\n              "use strict";\n              ${a}\n              return { ${e.join(", ")} };\n            `,i=new Function(n)();let r=[];s.forEach(((e,s)=>{const n=p(i,e.name),t=`${s}-${e.name}`;switch(e.type){case"variable":case"constant":n===e.expectedValue?r.push((0,d.jsxs)("div",{children:["\u2705 \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f ",(0,d.jsx)("code",{children:e.name})," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e."]},t)):r.push((0,d.jsxs)("div",{children:["\u274c \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f ",(0,d.jsx)("code",{children:e.name})," \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0440\u0430\u0432\u043d\u043e ",(0,d.jsx)("code",{children:String(e.expectedValue)}),", \u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e ",(0,d.jsx)("code",{children:String(n)}),"."]},t));break;case"array":{const s=Array.isArray(n)&&Array.isArray(e.expectedValue)&&n.length===e.expectedValue.length&&n.every(((s,n)=>s===e.expectedValue[n]));s?r.push((0,d.jsxs)("div",{children:["\u2705 \u041c\u0430\u0441\u0441\u0438\u0432 ",(0,d.jsx)("code",{children:e.name})," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e."]},t)):r.push((0,d.jsxs)("div",{children:["\u274c \u041c\u0430\u0441\u0441\u0438\u0432 ",(0,d.jsx)("code",{children:e.name})," \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0440\u0430\u0432\u0435\u043d ",(0,d.jsx)("code",{children:JSON.stringify(e.expectedValue)}),", \u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u043b ",(0,d.jsx)("code",{children:JSON.stringify(n)}),"."]},t));break}case"function":{const s=p(i,e.name);if("function"!=typeof s){r.push((0,d.jsxs)("div",{children:["\u274c ",(0,d.jsx)("code",{children:e.name})," \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439."]},t));break}e.tests.forEach(((n,i)=>{let c;const o=Array.isArray(n.input)?[...n.input]:[n.input];try{c=s(...o)}catch(a){return void r.push((0,d.jsxs)("div",{children:["\u274c \u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,d.jsx)("code",{children:e.name})," \u0432\u044b\u0437\u0432\u0430\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0443 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0442\u0435\u0441\u0442\u0430 ",i+1,": ",a.message]},`${t}-${i}`))}c===n.output?r.push((0,d.jsxs)("div",{children:["\u2705 \u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,d.jsx)("code",{children:e.name})," \u043f\u0440\u043e\u0448\u043b\u0430 \u0442\u0435\u0441\u0442 ",(0,d.jsxs)("code",{children:[e.name,"(",o.join(", "),") === ",String(n.output)]}),"  \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e."]},`${t}-${i}`)):r.push((0,d.jsxs)("div",{children:["\u274c \u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,d.jsx)("code",{children:e.name})," \u043d\u0435 \u043f\u0440\u043e\u0448\u043b\u0430 \u0442\u0435\u0441\u0442 ",(0,d.jsxs)("code",{children:[e.name,"(",o.join(", "),") === ",String(n.output)]}),". \u041e\u0436\u0438\u0434\u0430\u043b\u043e\u0441\u044c ",(0,d.jsx)("code",{children:String(n.output)}),", \u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e ",(0,d.jsx)("code",{children:String(c)}),"."]},`${t}-${i}`))}));break}}})),j(r)}catch(e){console.error(e),j([(0,d.jsxs)("div",{children:["\u041e\u0448\u0438\u0431\u043a\u0430: ",(0,d.jsx)("code",{children:e.message})]},"exception")])}},className:"button button--secondary button--lg",children:"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c"}),(0,d.jsx)("button",{onClick:()=>u(!x),className:"button button--secondary button--lg",children:x?"\u0421\u043a\u0440\u044b\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435"})]}),h.length>0&&(0,d.jsxs)("div",{className:o.A.output,children:[(0,d.jsx)("strong",{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"})," ",h]}),x&&(0,d.jsxs)("div",{className:o.A.solution,children:[(0,d.jsx)("strong",{children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:"}),(0,d.jsx)("pre",{children:(0,d.jsx)("code",{children:n})})]})]})}},5704:(e,s,n)=>{n.d(s,{A:()=>i});const i={editorContainer:"editorContainer_F7Zt",codeMirror:"codeMirror_lOs2",buttons:"buttons_N9SI",output:"output_WQmR",solution:"solution_yFud"}}}]);