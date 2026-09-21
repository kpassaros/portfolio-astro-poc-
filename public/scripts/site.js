(()=>{
  const root=document.documentElement;
  const theme=document.querySelector('.theme-toggle');
  if(theme) theme.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('portfolio-theme',root.dataset.theme)});
  const toggle=document.querySelector('.menu-toggle'),links=document.querySelector('.nav-links');
  if(toggle&&links)toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});
  const search=document.querySelector('#catalog-search');
  if(search)search.addEventListener('input',()=>{const term=search.value.trim().toLowerCase();document.querySelectorAll('[data-search]').forEach(card=>card.hidden=!card.dataset.search.includes(term))});
  document.querySelectorAll('.case-index a').forEach(a=>a.addEventListener('click',()=>document.querySelectorAll('.case-index a').forEach(x=>x.classList.toggle('active',x===a))));
  document.querySelectorAll('.datastudio-frame iframe').forEach(frame=>frame.addEventListener('load',()=>frame.parentElement?.querySelector('.dashboard-loading')?.remove()));
  const c=document.querySelector('#starfield');if(!c)return;const ctx=c.getContext('2d');let w,h,dpr,nodes=[],edges=[],seed=19790517;
  const rnd=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
  function build(){w=innerWidth;h=innerHeight;dpr=Math.min(devicePixelRatio||1,2);c.width=w*dpr;c.height=h*dpr;c.style.width=w+'px';c.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0);const total=w<650?45:82;nodes=Array.from({length:total},()=>({x:30+rnd()*(w-60),y:30+rnd()*(h-60),r:1+rnd()*1.3,p:rnd()*6.28}));edges=[];nodes.forEach((a,i)=>nodes.map((b,j)=>({j,d:Math.hypot(a.x-b.x,a.y-b.y)})).filter(x=>x.j!==i).sort((a,b)=>a.d-b.d).slice(0,2).forEach(x=>{if(x.d<220&&i<x.j)edges.push([i,x.j])}))}
  function draw(t){ctx.clearRect(0,0,w,h);const rgb=getComputedStyle(root).getPropertyValue('--star').trim()||'105,169,238';edges.forEach(([a,b])=>{ctx.beginPath();ctx.moveTo(nodes[a].x,nodes[a].y);ctx.lineTo(nodes[b].x,nodes[b].y);ctx.strokeStyle=`rgba(${rgb},.055)`;ctx.stroke()});nodes.forEach(o=>{ctx.beginPath();ctx.arc(o.x+Math.sin(t*.00012+o.p)*2,o.y+Math.cos(t*.0001+o.p)*2,o.r,0,Math.PI*2);ctx.fillStyle=`rgba(${rgb},.24)`;ctx.fill()});requestAnimationFrame(draw)}
  build();addEventListener('resize',build,{passive:true});requestAnimationFrame(draw);
})();
