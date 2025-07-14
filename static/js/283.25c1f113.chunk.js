"use strict";(self.webpackChunkanimated_resume=self.webpackChunkanimated_resume||[]).push([[283],{283:(e,o,t)=>{t.r(o),t.d(o,{default:()=>f});var i=t(43),n=t(464),r=t(910),a=t(929),s=t(579);const l=n.Ay.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s ease;
  
  &.scrolled {
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`,d=n.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`,c=n.Ay.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  cursor: pointer;
  transition: all 0.4s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`,p=n.Ay.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`,b=n.Ay.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.4s ease;
  
  &:hover {
    color: #ffd700;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #ffd700;
    transition: width 0.4s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  &.active::after {
    width: 100%;
  }
`,h=n.Ay.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  border-radius: 5px;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    display: block;
  }
  
  &:hover {
    color: #ffd700;
  }
`,m=n.Ay.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  z-index: 999;
  
  &.open {
    transform: translateY(0);
  }
  
  @media (min-width: 769px) {
    display: none;
  }
`,x=n.Ay.a`
  display: block;
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 215, 0, 0.1);
    color: #ffd700;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;const f=function(){const[e,o]=(0,i.useState)(!1),[t,n]=(0,i.useState)(!1);(0,i.useEffect)(()=>{const e=()=>{o(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);const f=e=>{const o=document.getElementById(e);o?(o.scrollIntoView({behavior:"smooth",block:"start"}),n(!1)):console.error("Section not found:",e)},u=e=>{f(e)},g=[{id:"about",label:"About"},{id:"experience",label:"Experience"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"contact",label:"Contact"}];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{className:"nav-item "+(e?"scrolled":""),children:(0,s.jsxs)(d,{children:[(0,s.jsx)(c,{onClick:()=>f("header"),children:"Portfolio"}),(0,s.jsx)(p,{children:g.map(e=>(0,s.jsx)(b,{onClick:()=>u(e.id),className:"nav-item",children:e.label},e.id))}),(0,s.jsx)(h,{onClick:()=>n(!t),"aria-label":"Toggle mobile menu",children:(0,s.jsx)(r.g,{icon:t?a.GRI:a.ckx})})]})}),(0,s.jsx)(m,{className:t?"open":"",children:g.map(e=>(0,s.jsx)(x,{onClick:()=>u(e.id),children:e.label},e.id))})]})}}}]);
//# sourceMappingURL=283.25c1f113.chunk.js.map