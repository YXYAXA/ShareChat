import{j as s,m as a,c as r,r as i,i as e}from"./index-f3adcbf0.js";import{v as n}from"./bounce-60412db4.js";import{g as o}from"./index-85185b56.js";import{T as t}from"./index-c0a04009.js";import"./transition-8bc41415.js";import"./fade-6abf311c.js";function l({children:r,className:i,...e}){return s.jsx(a.div,{initial:"initial",whileInView:"animate",viewport:{once:!0,amount:.3},variants:n(),className:i,...e,children:r})}function c({variant:a}){const{colorBgLayout:n}=r(),c=i.useMemo((()=>o(a)),[a]);return s.jsx("div",{className:"h-[480px] overflow-scroll rounded-lg px-20",style:{backgroundColor:n},children:[...Array(40)].map(((a,r)=>s.jsx(l,{variants:c,className:"mt-4",children:s.jsx(e,{children:s.jsxs(t,{className:"text-center",children:["Item ",r+1]})})},r)))},a)}export{c as default};
