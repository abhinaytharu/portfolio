"use strict";(self.webpackChunkanimated_resume=self.webpackChunkanimated_resume||[]).push([[57],{57:(e,r,a)=>{a.r(r),a.d(r,{default:()=>C});var i=a(43),n=a(464),t=a(910),s=a(929),o=a(892),d=a(579);const l=n.Ay.div`
  color: white;
  max-width: 1000px;
  margin: 0 auto;
`,c=n.Ay.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,m=n.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,g=n.Ay.div``,h=n.Ay.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateX(10px);
  }
`,u=n.Ay.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  color: #333;
  font-size: 1.5rem;
`,b=n.Ay.div`
  flex: 1;
`,x=n.Ay.div`
  font-size: 0.9rem;
  opacity: 0.7;
  margin-bottom: 0.25rem;
`,p=n.Ay.div`
  font-size: 1.1rem;
  font-weight: 500;
`,f=n.Ay.form`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`,j=n.Ay.div`
  margin-bottom: 1.5rem;
`,y=n.Ay.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`,k=n.Ay.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #ffd700;
    background: rgba(255, 255, 255, 0.15);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`,w=n.Ay.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  color: white;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #ffd700;
    background: rgba(255, 255, 255, 0.15);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`,v=n.Ay.button`
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #ffd700, #ffed4e);
  color: #333;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(255, 215, 0, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,A=n.Ay.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 3rem;
`,z=n.Ay.a`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px) scale(1.1);
  }
`,S=n.Ay.div`
  background: rgba(76, 175, 80, 0.2);
  border: 1px solid rgba(76, 175, 80, 0.3);
  color: #4caf50;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  text-align: center;
`,Y=n.Ay.div`
  background: rgba(244, 67, 54, 0.2);
  border: 1px solid rgba(244, 67, 54, 0.3);
  color: #f44336;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  text-align: center;
`;const C=function(){const[e,r]=(0,i.useState)({name:"",email:"",subject:"",message:""}),[a,n]=(0,i.useState)(!1),[C,I]=(0,i.useState)(null),_=e=>{const{name:a,value:i}=e.target;r(e=>({...e,[a]:i}))};return(0,d.jsxs)(l,{children:[(0,d.jsx)(c,{"data-animation":"fadeIn",children:"Get In Touch"}),(0,d.jsxs)(m,{children:[(0,d.jsxs)(g,{"data-animation":"slideInLeft",children:[(0,d.jsxs)(h,{children:[(0,d.jsx)(u,{children:(0,d.jsx)(t.g,{icon:s.y_8})}),(0,d.jsxs)(b,{children:[(0,d.jsx)(x,{children:"Email"}),(0,d.jsx)(p,{children:"abhinaytharu5@gmail.com"})]})]}),(0,d.jsxs)(h,{children:[(0,d.jsx)(u,{children:(0,d.jsx)(t.g,{icon:o.Vz1})}),(0,d.jsxs)(b,{children:[(0,d.jsx)(x,{children:"GitHub"}),(0,d.jsx)(p,{children:"github.com/abhinaytharu"})]})]}),(0,d.jsxs)(h,{children:[(0,d.jsx)(u,{children:(0,d.jsx)(t.g,{icon:o.B4m})}),(0,d.jsxs)(b,{children:[(0,d.jsx)(x,{children:"YouTube"}),(0,d.jsx)(p,{children:"youtube.com/@eliteabhinay"})]})]})]}),(0,d.jsxs)(f,{onSubmit:async e=>{e.preventDefault(),n(!0),I(null);try{await new Promise(e=>setTimeout(e,2e3)),I("success"),r({name:"",email:"",subject:"",message:""})}catch(a){I("error")}finally{n(!1)}},"data-animation":"slideInRight",children:["success"===C&&(0,d.jsx)(S,{children:"Thank you! Your message has been sent successfully."}),"error"===C&&(0,d.jsx)(Y,{children:"Sorry, there was an error sending your message. Please try again."}),(0,d.jsxs)(j,{children:[(0,d.jsx)(y,{htmlFor:"name",children:"Name"}),(0,d.jsx)(k,{type:"text",id:"name",name:"name",value:e.name,onChange:_,placeholder:"Your name",required:!0})]}),(0,d.jsxs)(j,{children:[(0,d.jsx)(y,{htmlFor:"email",children:"Email"}),(0,d.jsx)(k,{type:"email",id:"email",name:"email",value:e.email,onChange:_,placeholder:"Your email",required:!0})]}),(0,d.jsxs)(j,{children:[(0,d.jsx)(y,{htmlFor:"subject",children:"Subject"}),(0,d.jsx)(k,{type:"text",id:"subject",name:"subject",value:e.subject,onChange:_,placeholder:"Subject",required:!0})]}),(0,d.jsxs)(j,{children:[(0,d.jsx)(y,{htmlFor:"message",children:"Message"}),(0,d.jsx)(w,{id:"message",name:"message",value:e.message,onChange:_,placeholder:"Your message",required:!0})]}),(0,d.jsxs)(v,{type:"submit",disabled:a,children:[(0,d.jsx)(t.g,{icon:s.isI}),a?"Sending...":"Send Message"]})]})]}),(0,d.jsxs)(A,{"data-animation":"fadeIn",children:[(0,d.jsx)(z,{href:"https://github.com/abhinaytharu",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)(t.g,{icon:o.Vz1})}),(0,d.jsx)(z,{href:"https://youtube.com/@eliteabhinay",target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)(t.g,{icon:o.B4m})}),(0,d.jsx)(z,{href:"mailto:abhinaytharu5@gmail.com",children:(0,d.jsx)(t.g,{icon:s.y_8})})]})]})}}}]);
//# sourceMappingURL=57.d6716dc8.chunk.js.map