"use strict";(self.webpackChunkmaria_js_education=self.webpackChunkmaria_js_education||[]).push([[1290],{1374:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>j,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"js-basics/funcs-objects/objects","title":"2.2 \u041e\u0431\u044a\u0435\u043a\u0442\u044b: \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0438 \u043c\u0435\u0442\u043e\u0434\u044b","description":"\u0417\u043d\u0430\u043d\u0438\u044f","source":"@site/docs/js-basics/2-funcs-objects/objects.mdx","sourceDirName":"js-basics/2-funcs-objects","slug":"/js-basics/funcs-objects/objects","permalink":"/maria-js-education/docs/js-basics/funcs-objects/objects","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"2.1 \u0424\u0443\u043d\u043a\u0446\u0438\u0438","permalink":"/maria-js-education/docs/js-basics/funcs-objects/functions"},"next":{"title":"2.3 \u041a\u043e\u043d\u0441\u043e\u043b\u044c","permalink":"/maria-js-education/docs/js-basics/funcs-objects/console"}}');var c=s(4848),i=s(8453),t=s(3232);const o={sidebar_position:2},d="2.2 \u041e\u0431\u044a\u0435\u043a\u0442\u044b: \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0438 \u043c\u0435\u0442\u043e\u0434\u044b",a={},l=[{value:"\u0417\u043d\u0430\u043d\u0438\u044f",id:"\u0437\u043d\u0430\u043d\u0438\u044f",level:2},{value:"<strong>\u041e\u0431\u044a\u0435\u043a\u0442 \u2014 \u044d\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f</strong>",id:"\u043e\u0431\u044a\u0435\u043a\u0442--\u044d\u0442\u043e-\u0431\u043e\u043b\u044c\u0448\u0435-\u0447\u0435\u043c-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f",level:3},{value:"<strong>\u041c\u0435\u0442\u043e\u0434\u044b \u2014 \u044d\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430</strong>",id:"\u043c\u0435\u0442\u043e\u0434\u044b--\u044d\u0442\u043e-\u0444\u0443\u043d\u043a\u0446\u0438\u0438-\u0432\u043d\u0443\u0442\u0440\u0438-\u043e\u0431\u044a\u0435\u043a\u0442\u0430",level:3},{value:"<strong>\u0417\u0430\u0447\u0435\u043c \u043d\u0430\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u044b?</strong>",id:"\u0437\u0430\u0447\u0435\u043c-\u043d\u0430\u043c-\u043e\u0431\u044a\u0435\u043a\u0442\u044b",level:3},{value:"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435",id:"\u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435-\u0437\u0430\u0434\u0430\u043d\u0438\u0435",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"22-\u043e\u0431\u044a\u0435\u043a\u0442\u044b-\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430-\u0438-\u043c\u0435\u0442\u043e\u0434\u044b",children:"2.2 \u041e\u0431\u044a\u0435\u043a\u0442\u044b: \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0438 \u043c\u0435\u0442\u043e\u0434\u044b"})}),"\n",(0,c.jsx)(n.h2,{id:"\u0437\u043d\u0430\u043d\u0438\u044f",children:"\u0417\u043d\u0430\u043d\u0438\u044f"}),"\n",(0,c.jsx)(n.admonition,{title:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u043e\u0431\u044a\u0435\u043a\u0442?",type:"tip",children:(0,c.jsx)(n.p,{children:'\u041e\u0431\u044a\u0435\u043a\u0442 \u2014 \u044d\u0442\u043e "\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0432 \u043e\u0434\u043d\u043e\u043c \u043c\u0435\u0441\u0442\u0435. \u0415\u0441\u043b\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u2014 \u044d\u0442\u043e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b, \u0442\u043e \u043e\u0431\u044a\u0435\u043a\u0442 \u0438\u0445 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u0442. \u041e\u043d \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 (\u0434\u0430\u043d\u043d\u044b\u0435) \u0438 \u043c\u0435\u0442\u043e\u0434\u044b (\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f).'})}),"\n",(0,c.jsx)(n.h3,{id:"\u043e\u0431\u044a\u0435\u043a\u0442--\u044d\u0442\u043e-\u0431\u043e\u043b\u044c\u0448\u0435-\u0447\u0435\u043c-\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f",children:(0,c.jsx)(n.strong,{children:"\u041e\u0431\u044a\u0435\u043a\u0442 \u2014 \u044d\u0442\u043e \u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f"})}),"\n",(0,c.jsx)(n.p,{children:"\u041c\u044b \u0443\u0436\u0435 \u0437\u043d\u0430\u0435\u043c, \u0447\u0442\u043e \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0445\u0440\u0430\u043d\u0438\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. \u041e\u0431\u044a\u0435\u043a\u0442 \u043c\u043e\u0436\u0435\u0442 \u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043d\u0435 \u043e\u0434\u043d\u043e, \u0430 \u0441\u0440\u0430\u0437\u0443 \u043c\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0432 \u0432\u0438\u0434\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432. \u041f\u0440\u0438\u0447\u0435\u043c \u044d\u0442\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043c\u043e\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043d\u043e\u0432\u044b\u0435, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u043d\u0435\u043d\u0443\u0436\u043d\u044b\u0435."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const dog = {\n  name: '\u0422\u043e\u0433\u043e',\n  age: 4,\n  isHungry: true,\n};\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"dog"})," - \u044d\u0442\u043e \u043e\u0431\u044a\u0435\u043a\u0442"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"name"}),", ",(0,c.jsx)(n.code,{children:"age"})," \u0438 ",(0,c.jsx)(n.code,{children:"isHungry"})," \u2014 \u044d\u0442\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"\u0422\u043e\u0433\u043e"}),", ",(0,c.jsx)(n.code,{children:"4"})," \u0438 ",(0,c.jsx)(n.code,{children:"true"})," \u2014 \u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f."]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u043c\u0435\u0442\u043e\u0434\u044b--\u044d\u0442\u043e-\u0444\u0443\u043d\u043a\u0446\u0438\u0438-\u0432\u043d\u0443\u0442\u0440\u0438-\u043e\u0431\u044a\u0435\u043a\u0442\u0430",children:(0,c.jsx)(n.strong,{children:"\u041c\u0435\u0442\u043e\u0434\u044b \u2014 \u044d\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430"})}),"\n",(0,c.jsx)(n.p,{children:"\u041c\u044b \u0437\u043d\u0430\u0435\u043c, \u0447\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u043e\u043c\u043e\u0433\u0430\u044e\u0442 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0434. \u0412 \u043e\u0431\u044a\u0435\u043a\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043d\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438, \u0430 \u0438\u0445 \u0433\u043b\u0430\u0432\u043d\u044b\u043c \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u043e, \u0447\u0442\u043e \u043e\u043d\u0438 \u043c\u043e\u0433\u0443\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u044d\u0442\u043e\u0433\u043e \u0436\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 (\u0432 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u044d\u0442\u043e\u0433\u043e \u043f\u043e\u043a\u0430 \u043d\u0435 \u0432\u0438\u0434\u043d\u043e)."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const dog = {\n  name: '\u0422\u043e\u0433\u043e',\n  bark: function() {\n    return '\u0413\u0430\u0432-\u0433\u0430\u0432!';\n  },\n};\n\nconst result = dog.bark(); // -> '\u0413\u0430\u0432-\u0433\u0430\u0432!'\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u041c\u0435\u0442\u043e\u0434 ",(0,c.jsx)(n.code,{children:"bark"})," \u2014 \u044d\u0442\u043e \u043e\u0431\u044b\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f, \u043d\u043e \u0442\u0435\u043f\u0435\u0440\u044c \u043e\u043d\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0447\u0430\u0441\u0442\u044c\u044e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 ",(0,c.jsx)(n.code,{children:"dog"}),"."]}),"\n",(0,c.jsx)(n.h3,{id:"\u0437\u0430\u0447\u0435\u043c-\u043d\u0430\u043c-\u043e\u0431\u044a\u0435\u043a\u0442\u044b",children:(0,c.jsx)(n.strong,{children:"\u0417\u0430\u0447\u0435\u043c \u043d\u0430\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u044b?"})}),"\n",(0,c.jsx)(n.p,{children:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044c, \u0447\u0442\u043e \u0443 \u0442\u0435\u0431\u044f \u0435\u0441\u0442\u044c \u0441\u043e\u0431\u0430\u043a\u0430 (\u0445\u043e\u0442\u044f \u0432 \u0442\u0432\u043e\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u2014 \u044d\u0442\u043e \u0443\u0436\u0435 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c). \u0412\u043c\u0435\u0441\u0442\u043e \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0432\u043e\u0434\u0438\u0442\u044c \u043a\u0443\u0447\u0443 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0422\u043e\u0433\u043e (\u0435\u0433\u043e \u0438\u043c\u044f, \u0432\u043e\u0437\u0440\u0430\u0441\u0442, \u0433\u043e\u043b\u043e\u0434\u0435\u043d \u043e\u043d \u0438\u043b\u0438 \u043d\u0435\u0442), \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u0432\u0441\u0451 \u0432 \u043e\u0434\u043d\u043e\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u0435."}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const dog = {\n  name: '\u0422\u043e\u0433\u043e',\n  age: 4,\n  isHungry: true,\n};\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u0422\u0435\u043f\u0435\u0440\u044c \u0442\u044b \u043c\u043e\u0436\u0435\u0448\u044c \u043b\u0435\u0433\u043a\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0434\u0430\u043d\u043d\u044b\u043c:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const story = '\u0423 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c ' + dog.name + ' \u0438 \u0435\u043c\u0443 ' + dog.age + ' \u0433\u043e\u0434\u0430'; // -> \u0423 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c \u0422\u043e\u0433\u043e \u0438 \u0435\u043c\u0443 4 \u0433\u043e\u0434\u0430\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u0418\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0438\u0445:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const myCar = {\n    brand: 'Hyundai',\n    price: 200,\n}\nmyCar.price = 350;\n\n// -> \u041c\u043e\u044f \u043c\u0430\u0448\u0438\u043d\u0430 Hyundai \u0441\u0442\u043e\u0438\u0442 350 \u0440\u0443\u0431\u043b\u0435\u0439\nconst story = '\u041c\u043e\u044f \u043c\u0430\u0448\u0438\u043d\u0430 ' + myCar.brand + ' \u0441\u0442\u043e\u0438\u0442 ' + myCar.price + ' \u0440\u0443\u0431\u043b\u0435\u0439';\n"})}),"\n",(0,c.jsxs)(n.admonition,{type:"tip",children:[(0,c.jsxs)(n.p,{children:["\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0442\u044b \u0437\u0430\u043c\u0435\u0442\u0438\u043b\u0430, \u0447\u0442\u043e \u043e\u0431\u044a\u0435\u043a\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,c.jsx)(n.code,{children:"const"}),", \u0430 \u043c\u044b \u0435\u0433\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0435\u043c \ud83e\udd2f"]}),(0,c.jsx)(n.p,{children:"\u041d\u043e \u043d\u0430 \u0441\u0430\u043c\u043e\u043c \u0434\u0435\u043b\u0435 \u043c\u044b \u043c\u0435\u043d\u044f\u0435\u043c \u043d\u0435 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0443, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043e\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044f, \u0430 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430."}),(0,c.jsxs)(n.p,{children:["\u0422\u043e \u0435\u0441\u0442\u044c \u0432\u043e\u0442 \u0442\u0430\u043a \u0441\u0434\u0435\u043b\u0430\u0442\u044c ",(0,c.jsx)(n.strong,{children:"\u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f"}),":"]}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const myCar = {\n    brand: 'Hyundai',\n    price: 200,\n}\nmyCar = 5; // <-- \u0441\u0430\u043c\u0443 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0443 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u043d\u0435\u043b\u044c\u0437\u044f, \u0431\u0443\u0434\u0435\u0442 \u041e\u0428\u0418\u0411\u041a\u0410\nmyCar.price = 5; // <-- \u0430 \u044d\u0442\u043e \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u043e, \u0442\u0430\u043a \u0434\u0435\u043b\u0430\u0442\u044c \u041c\u041e\u0416\u041d\u041e\n"})})]}),"\n",(0,c.jsx)(n.p,{children:"\u0410 \u043c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0438\u043b\u0438 \u043c\u0435\u0442\u043e\u0434\u044b:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"const myCar = {\n    brand: 'Hyundai',\n    price: 200,\n}\nmyCar.beep = function () {\n    return '\u0411\u0418\u0418\u041f\u0438\u043f!';\n}\nmyCar.color = '\u0441\u0435\u0440\u0435\u0431\u0440\u044f\u043d\u044b\u0439'\n\n// -> \u0423 \u043c\u043e\u0435\u0439 \u043c\u0430\u0448\u0438\u043d\u044b Hyundai \u0441\u0435\u0440\u0435\u0431\u0440\u044f\u043d\u044b\u0439 \u0446\u0432\u0435\u0442 \u0438 \u043e\u043d\u0430 \u0434\u0435\u043b\u0430\u0435\u0442 \u0411\u0418\u0418\u041f\u0438\u043f!\nconst story = '\u0423 \u043c\u043e\u0435\u0439 \u043c\u0430\u0448\u0438\u043d\u044b ' + myCar.brand + myCar.color + ' \u0446\u0432\u0435\u0442 \u0438 \u043e\u043d\u0430 \u0434\u0435\u043b\u0430\u0435\u0442 ' + myCar.beep();\n"})}),"\n",(0,c.jsx)(n.admonition,{title:"\u041a\u0430\u043a \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0434\u0435\u043b\u0430\u044e\u0442 \u0436\u0438\u0437\u043d\u044c \u043f\u0440\u043e\u0449\u0435?",type:"tip",children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u0421\u043e\u0431\u0440\u0430\u043d\u043d\u043e\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0445:"}),' \u0412\u0441\u0451, \u0447\u0442\u043e \u0441\u0432\u044f\u0437\u0430\u043d\u043e \u0441 \u043e\u0434\u043d\u0438\u043c "\u043f\u043e\u043d\u044f\u0442\u0438\u0435\u043c" (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u043e\u0431\u0430\u043a\u0430), \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 \u043e\u0434\u043d\u043e\u043c \u043c\u0435\u0441\u0442\u0435.']}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u041c\u0435\u043d\u044c\u0448\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445:"})," \u0412\u043c\u0435\u0441\u0442\u043e \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0447\u0435\u0433\u043e-\u0442\u043e (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u043c\u0435\u043d\u0438, \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430 \u0438 \u0446\u0432\u0435\u0442\u0430) \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u043e\u0434\u043d\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"\u0427\u0438\u0442\u0430\u0435\u043c\u043e\u0441\u0442\u044c:"})," \u041a\u043e\u0434 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u043b\u043e\u0433\u0438\u0447\u043d\u0435\u0435, \u043a\u043e\u0433\u0434\u0430 \u0434\u0430\u043d\u043d\u044b\u0435 \u0441\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u044b."]}),"\n"]})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"\u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435-\u0437\u0430\u0434\u0430\u043d\u0438\u0435",children:"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u0417\u0430\u0434\u0430\u0447\u0430"}),": \u0421\u043e\u0437\u0434\u0430\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 ",(0,c.jsx)(n.code,{children:"book"})," \u0438 \u043f\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u0439 \u0441 \u0435\u0433\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438 \u0438 \u043c\u0435\u0442\u043e\u0434\u0430\u043c\u0438:"]}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\u0421\u043e\u0437\u0434\u0430\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 ",(0,c.jsx)(n.code,{children:"book"})," \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438:"]}),"\n"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"title"})," \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c ",(0,c.jsx)(n.code,{children:"'\u0414\u043e\u0432\u043e\u0434\u044b \u0440\u0430\u0441\u0441\u0443\u0434\u043a\u0430'"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"author"})," \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c ",(0,c.jsx)(n.code,{children:"\u0414\u0436\u0435\u0439\u043d \u041e\u0441\u0442\u0438\u043d"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"mainCharacter"})," \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c ",(0,c.jsx)(n.code,{children:"\u042d\u043d\u043d"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(n.ol,{start:"2",children:["\n",(0,c.jsxs)(n.li,{children:["\u0414\u043e\u0431\u0430\u0432\u044c \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",(0,c.jsx)(n.code,{children:"year"})," \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c ",(0,c.jsx)(n.code,{children:"1818"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:["\u0414\u043e\u0431\u0430\u0432\u044c \u043c\u0435\u0442\u043e\u0434 ",(0,c.jsx)(n.code,{children:"read"}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 ",(0,c.jsx)(n.code,{children:"'\u0417\u0434\u0435\u0441\u044c \u043a\u0430\u043a-\u0431\u044b \u0442\u0435\u043a\u0441\u0442 \u043a\u043d\u0438\u0433\u0438'"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:["\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e ",(0,c.jsx)(n.code,{children:"whatWeKnowAboutBook"}),". \u0412 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f \u0441\u0442\u0440\u043e\u043a\u0430:\n",(0,c.jsx)(n.code,{children:"'\u041a\u043d\u0438\u0433\u0430 \u0414\u043e\u0432\u043e\u0434\u044b \u0440\u0430\u0441\u0441\u0443\u0434\u043a\u0430 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0430 \u0432 1818 \u0433\u043e\u0434\u0443, \u0430\u0432\u0442\u043e\u0440 \u0414\u0436\u0435\u0439\u043d \u041e\u0441\u0442\u0438\u043d.'"})]}),"\n"]}),"\n",(0,c.jsx)(t.A,{checks:[{type:"variable",name:"book.title",expectedValue:"\u0414\u043e\u0432\u043e\u0434\u044b \u0440\u0430\u0441\u0441\u0443\u0434\u043a\u0430"},{type:"variable",name:"book.author",expectedValue:"\u0414\u0436\u0435\u0439\u043d \u041e\u0441\u0442\u0438\u043d"},{type:"variable",name:"book.mainCharacter",expectedValue:"\u042d\u043d\u043d"},{type:"variable",name:"book.year",expectedValue:1818},{type:"function",name:"book.read",tests:[{input:[],output:"\u0417\u0434\u0435\u0441\u044c \u043a\u0430\u043a-\u0431\u044b \u0442\u0435\u043a\u0441\u0442 \u043a\u043d\u0438\u0433\u0438"}]},{type:"variable",name:"whatWeKnowAboutBook",expectedValue:"\u041a\u043d\u0438\u0433\u0430 \u0414\u043e\u0432\u043e\u0434\u044b \u0440\u0430\u0441\u0441\u0443\u0434\u043a\u0430 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0430 \u0432 1818 \u0433\u043e\u0434\u0443, \u0430\u0432\u0442\u043e\u0440 \u0414\u0436\u0435\u0439\u043d \u041e\u0441\u0442\u0438\u043d."}],solution:"const book = {\n    title: '\u0414\u043e\u0432\u043e\u0434\u044b \u0440\u0430\u0441\u0441\u0443\u0434\u043a\u0430',\n    author: '\u0414\u0436\u0435\u0439\u043d \u041e\u0441\u0442\u0438\u043d',\n    mainCharacter: '\u042d\u043d\u043d',\n};\n\nbook.year = 1818;\nbook.read = function() {\n  return '\u0417\u0434\u0435\u0441\u044c \u043a\u0430\u043a-\u0431\u044b \u0442\u0435\u043a\u0441\u0442 \u043a\u043d\u0438\u0433\u0438';\n}\n\nconst whatWeKnowAboutBook = '\u041a\u043d\u0438\u0433\u0430 ' + book.title + ' \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0430 \u0432 ' + book.year + ' \u0433\u043e\u0434\u0443, \u0430\u0432\u0442\u043e\u0440 ' + book.author + '.';"})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},3232:(e,n,s)=>{s.d(n,{A:()=>a});var r=s(6540),c=s(6894),i=s(7080),t=s(5109),o=s(5704),d=s(4848);const a=e=>{let{checks:n,solution:s}=e;const[a,l]=(0,r.useState)("// \u041d\u0430\u043f\u0438\u0448\u0438 \u0437\u0434\u0435\u0441\u044c \u0441\u0432\u043e\u0439 \u043a\u043e\u0434 \u0438 \u043d\u0430\u0436\u043c\u0438 \u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c"),[h,j]=(0,r.useState)([]),[x,u]=(0,r.useState)(!1),p=(e,n)=>n.split(".").reduce(((e,n)=>e&&e[n]),e);return(0,d.jsxs)("div",{className:o.A.editorContainer,children:[(0,d.jsx)(c.Ay,{value:a,height:"300px",extensions:[(0,i.Q2)()],theme:t.bM,onChange:e=>l(e),className:o.A.codeMirror}),(0,d.jsxs)("div",{className:o.A.buttons,children:[(0,d.jsx)("button",{onClick:()=>{try{const e=Array.from(new Set(n.map((e=>e.name.split(".")[0])))),s=`\n              "use strict";\n              ${a}\n              return { ${e.join(", ")} };\n            `,r=new Function(s)();let c=[];n.forEach(((e,n)=>{const s=p(r,e.name),i=`${n}-${e.name}`;switch(e.type){case"variable":case"constant":s===e.expectedValue?c.push((0,d.jsxs)("div",{children:["\u2705 \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f ",(0,d.jsx)("code",{children:e.name})," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e."]},i)):c.push((0,d.jsxs)("div",{children:["\u274c \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f ",(0,d.jsx)("code",{children:e.name})," \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0440\u0430\u0432\u043d\u043e ",(0,d.jsx)("code",{children:String(e.expectedValue)}),", \u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e ",(0,d.jsx)("code",{children:String(s)}),"."]},i));break;case"array":{const n=Array.isArray(s)&&Array.isArray(e.expectedValue)&&s.length===e.expectedValue.length&&s.every(((n,s)=>n===e.expectedValue[s]));n?c.push((0,d.jsxs)("div",{children:["\u2705 \u041c\u0430\u0441\u0441\u0438\u0432 ",(0,d.jsx)("code",{children:e.name})," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e."]},i)):c.push((0,d.jsxs)("div",{children:["\u274c \u041c\u0430\u0441\u0441\u0438\u0432 ",(0,d.jsx)("code",{children:e.name})," \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0440\u0430\u0432\u0435\u043d ",(0,d.jsx)("code",{children:JSON.stringify(e.expectedValue)}),", \u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u043b ",(0,d.jsx)("code",{children:JSON.stringify(s)}),"."]},i));break}case"function":{const n=p(r,e.name);if("function"!=typeof n){c.push((0,d.jsxs)("div",{children:["\u274c ",(0,d.jsx)("code",{children:e.name})," \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439."]},i));break}e.tests.forEach(((s,r)=>{const t=e=>"object"==typeof e?JSON.stringify(e):e;let o;const a=Array.isArray(s.input)?[...s.input]:[s.input],l=a.map((e=>"object"==typeof e?JSON.stringify(e):String(e))).join(", ");try{o=n(...a)}catch(h){return void c.push((0,d.jsxs)("div",{children:["\u274c \u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,d.jsx)("code",{children:e.name})," \u0432\u044b\u0437\u0432\u0430\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0443 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0442\u0435\u0441\u0442\u0430 ",r+1,": ",h.message]},`${i}-${r}`))}t(o)===t(s.output)?c.push((0,d.jsxs)("div",{children:["\u2705 \u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,d.jsx)("code",{children:e.name})," \u043f\u0440\u043e\u0448\u043b\u0430 \u0442\u0435\u0441\u0442 ",(0,d.jsxs)("code",{children:[e.name,"(",l,") === ",String(s.output)]}),"  \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e."]},`${i}-${r}`)):c.push((0,d.jsxs)("div",{children:["\u274c \u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,d.jsx)("code",{children:e.name})," \u043d\u0435 \u043f\u0440\u043e\u0448\u043b\u0430 \u0442\u0435\u0441\u0442 ",(0,d.jsxs)("code",{children:[e.name,"(",l,") === ",String(s.output)]}),". \u041e\u0436\u0438\u0434\u0430\u043b\u043e\u0441\u044c ",(0,d.jsx)("code",{children:String(s.output)}),", \u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043e ",(0,d.jsx)("code",{children:String(o)}),"."]},`${i}-${r}`))}));break}}})),j(c)}catch(e){console.error(e),j([(0,d.jsxs)("div",{children:["\u041e\u0448\u0438\u0431\u043a\u0430: ",(0,d.jsx)("code",{children:e.message})]},"exception")])}},className:"button button--secondary button--lg",children:"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c"}),(0,d.jsx)("button",{onClick:()=>u(!x),className:"button button--secondary button--lg",children:x?"\u0421\u043a\u0440\u044b\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435"})]}),h.length>0&&(0,d.jsxs)("div",{className:o.A.output,children:[(0,d.jsx)("strong",{children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"})," ",h]}),x&&(0,d.jsxs)("div",{className:o.A.solution,children:[(0,d.jsx)("strong",{children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435:"}),(0,d.jsx)("pre",{children:(0,d.jsx)("code",{children:s})})]})]})}},5704:(e,n,s)=>{s.d(n,{A:()=>r});const r={editorContainer:"editorContainer_F7Zt",codeMirror:"codeMirror_lOs2",buttons:"buttons_N9SI",output:"output_WQmR",solution:"solution_yFud"}}}]);