"use strict";(self.webpackChunkanimated_resume=self.webpackChunkanimated_resume||[]).push([[140],{140:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var n=a(43),r=a(464),o=a(445),i=a(910),s=a(892),l=a(929),c=a(579);const p=r.Ay.header`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 70px;
`,d=r.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`,m=r.Ay.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 8s ease-in-out infinite;
  
  &:nth-child(1) {
    width: 80px;
    height: 80px;
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }
  
  &:nth-child(2) {
    width: 120px;
    height: 120px;
    top: 60%;
    right: 10%;
    animation-delay: 2s;
  }
  
  &:nth-child(3) {
    width: 60px;
    height: 60px;
    bottom: 20%;
    left: 20%;
    animation-delay: 4s;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`,h=r.Ay.div`
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 20px;
`,g=r.Ay.div`
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(30px);
`,u=r.Ay.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0;
  transform: translateY(30px);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,f=r.Ay.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(30px);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,x=r.Ay.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
  opacity: 0.9;
  opacity: 0;
  transform: translateY(30px);
`,b=r.Ay.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0;
  transform: translateY(30px);
`,y=r.Ay.button`
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  // cursor: pointer;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &.primary {
    background: linear-gradient(45deg, #ffd700, #ffed4e);
    color: #333;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 30px rgba(255, 215, 0, 0.4);
    }
  }
  
  &.secondary {
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.5);
      transform: translateY(-3px);
    }
  }
`,w=r.Ay.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 3rem;
  opacity: 0;
  transform: translateY(30px);
`,A=r.Ay.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.4s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px) scale(1.1);
  }
`,v=r.Ay.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 0.9rem;
  opacity: 0.7;
  cursor: pointer;
  transition: all 0.4s ease;
  
  &:hover {
    opacity: 1;
    transform: translateX(-50%) translateY(-5px);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 20px;
    background: white;
    animation: scroll 2.5s infinite;
  }
  
  @keyframes scroll {
    0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
    50% { transform: translateX(-50%) translateY(10px); opacity: 0.3; }
  }
`;const k=function(){const e=(0,n.useRef)(null);(0,n.useEffect)(()=>{(0,o.A)({targets:".greeting",opacity:[0,1],translateY:[30,0],delay:600,duration:1400,easing:"easeOutExpo"}),(0,o.A)({targets:".name",opacity:[0,1],translateY:[30,0],delay:800,duration:1400,easing:"easeOutExpo"}),(0,o.A)({targets:".title",opacity:[0,1],translateY:[30,0],delay:1e3,duration:1400,easing:"easeOutExpo"}),(0,o.A)({targets:".description",opacity:[0,1],translateY:[30,0],delay:1200,duration:1400,easing:"easeOutExpo"}),(0,o.A)({targets:".cta-buttons",opacity:[0,1],translateY:[30,0],delay:1400,duration:1400,easing:"easeOutExpo"}),(0,o.A)({targets:".social-links",opacity:[0,1],translateY:[30,0],delay:1600,duration:1400,easing:"easeOutExpo"}),(0,o.A)({targets:".shape",translateY:[0,-20],rotate:[0,180],delay:o.A.stagger(2500),duration:8e3,direction:"alternate",loop:!0,easing:"easeInOutSine"})},[]);const t=e=>{const t=document.getElementById(e);if(!t)return;const a=t.offsetTop-70,n=window.pageYOffset,r=a-n;let o=null;const i=e=>{null===o&&(o=e);const t=e-o,a=s(t,n,r,1200);window.scrollTo(0,a),t<1200&&requestAnimationFrame(i)},s=(e,t,a,n)=>(e/=n/2)<1?a/2*e*e*e+t:a/2*((e-=2)*e*e+2)+t;requestAnimationFrame(i)};return(0,c.jsxs)(p,{ref:e,id:"header",children:[(0,c.jsxs)(d,{children:[(0,c.jsx)(m,{className:"shape"}),(0,c.jsx)(m,{className:"shape"}),(0,c.jsx)(m,{className:"shape"})]}),(0,c.jsxs)(h,{className:"header-content",children:[(0,c.jsx)(g,{className:"greeting",children:"Hello, I'm"}),(0,c.jsx)(u,{className:"name",children:"Abhinay"}),(0,c.jsx)(f,{className:"title",children:"Self-Learner & Developer"}),(0,c.jsx)(x,{className:"description",children:"A curious and passionate self-learner who believes in learning through doing. I explore web development, C/C++ programming, desktop apps, AI chatbots, and physics & mathematics. I prioritize family, learning, and meaningful projects."}),(0,c.jsxs)(b,{className:"cta-buttons",children:[(0,c.jsxs)(y,{className:"primary",onClick:()=>{const e=document.createElement("a");e.href="data:text/plain;charset=utf-8,"+encodeURIComponent("Abhinay - Self-Learner & Developer Resume\n\nABOUT ME:\nI'm Abhinay, a curious and passionate self-learner who believes in learning through doing. I explore web development, C/C++ programming, desktop apps with Electron, AI chatbot development, and physics & mathematics.\n\nSKILLS:\nProgramming Languages: C, C++, JavaScript, TypeScript, Python (basics)\nWeb Development: HTML, CSS, JavaScript, React, Tailwind CSS\nDesktop Development: Electron.js + TypeScript\nAI & Bots: Voice-enabled chatbot development, rule-based systems, memory features\nPhysics & Math: Strong understanding of NEB and entrance-level topics\n\nPROJECTS:\n- BabyBot Voice Assistant: Smart voice-based AI assistant with learning capabilities\n- HTML Elements Showcase: Interactive educational project for web development\n- Smart Audio-Only YouTube App: Desktop app for audio-only YouTube streaming\n- Custom Portfolio Site: Vibe-coded portfolio with AI integration\n\nCONTACT:\nEmail: abhinaytharu5@gmail.com\nGitHub: github.com/abhinaytharu\nYouTube: youtube.com/@eliteabhinay"),e.download="Abhinay_Resume.txt",e.click()},children:[(0,c.jsx)(i.g,{icon:l.cbP}),"Download Resume"]}),(0,c.jsx)(y,{className:"secondary",onClick:()=>t("about"),children:"Learn More"})]}),(0,c.jsxs)(w,{className:"social-links",children:[(0,c.jsx)(A,{href:"https://github.com/abhinaytharu",target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)(i.g,{icon:s.Vz1})}),(0,c.jsx)(A,{href:"https://youtube.com/@eliteabhinay",target:"_blank",rel:"noopener noreferrer",children:(0,c.jsx)(i.g,{icon:s.B4m})}),(0,c.jsx)(A,{href:"mailto:abhinaytharu5@gmail.com",children:(0,c.jsx)(i.g,{icon:l.y_8})})]})]}),(0,c.jsx)(v,{onClick:()=>t("about"),children:"Scroll to explore"})]})}}}]);
//# sourceMappingURL=140.58943f19.chunk.js.map