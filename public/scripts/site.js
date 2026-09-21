(()=>{
  'use strict';
  const root=document.documentElement;
  const q=(selector,scope=document)=>scope.querySelector(selector);
  const qa=(selector,scope=document)=>[...scope.querySelectorAll(selector)];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;

  function chrome(){
    const theme=q('.theme-toggle');
    if(theme)theme.addEventListener('click',()=>{
      root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';
      localStorage.setItem('portfolio-theme',root.dataset.theme);
    });
    const toggle=q('.menu-toggle'),links=q('.nav-links');
    if(toggle&&links)toggle.addEventListener('click',()=>{
      const open=links.classList.toggle('open');
      toggle.setAttribute('aria-expanded',String(open));
    });
    const search=q('#catalog-search');
    if(search)search.addEventListener('input',()=>{
      const term=search.value.trim().toLowerCase();
      qa('[data-search]').forEach(card=>card.hidden=!card.dataset.search.includes(term));
    });
    qa('.case-index a').forEach(a=>a.addEventListener('click',()=>{
      qa('.case-index a').forEach(x=>x.classList.toggle('active',x===a));
    }));
    qa('.datastudio-frame iframe').forEach(frame=>frame.addEventListener('load',()=>{
      frame.parentElement?.querySelector('.dashboard-loading')?.remove();
    }));
  }

  function ambientNetwork(){
    const canvas=q('#starfield');
    if(!canvas)return;
    const ctx=canvas.getContext('2d');
    let width=0,height=0,dpr=1,nodes=[],edges=[],pulses=[];
    let pointer={x:-999,y:-999},lastPulse=0,nextPulse=1600,seed=19790517;
    const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
    const range=(min,max)=>min+random()*(max-min);

    function build(){
      width=innerWidth;height=innerHeight;dpr=Math.min(devicePixelRatio||1,2);
      canvas.width=width*dpr;canvas.height=height*dpr;
      canvas.style.width=`${width}px`;canvas.style.height=`${height}px`;
      ctx.setTransform(dpr,0,0,dpr,0,0);
      const total=width<650?50:94,margin=width<650?28:52;
      nodes=Array.from({length:total},()=>({
        bx:range(margin,Math.max(margin+1,width-margin)),
        by:range(margin,Math.max(margin+1,height-margin)),
        x:0,y:0,r:range(1.1,2),phase:range(0,7)
      }));
      nodes.forEach(node=>{node.x=node.bx;node.y=node.by});
      edges=[];
      nodes.forEach((node,index)=>{
        nodes.map((other,otherIndex)=>({otherIndex,distance:Math.hypot(other.bx-node.bx,other.by-node.by)}))
          .filter(item=>item.otherIndex!==index)
          .sort((a,b)=>a.distance-b.distance)
          .slice(0,width<650?3:4)
          .forEach(item=>{
            const a=Math.min(index,item.otherIndex),b=Math.max(index,item.otherIndex);
            const exists=edges.some(edge=>edge.aIndex===a&&edge.bIndex===b);
            if(item.distance<(width<650?195:250)&&!exists){
              edges.push({aIndex:a,bIndex:b,a:nodes[a],b:nodes[b]});
            }
          });
      });
      pulses=[];
    }

    function launch(amount=2){
      for(let i=0;i<amount&&edges.length;i++){
        const edge=edges[Math.floor(random()*edges.length)],reverse=random()>.5;
        pulses.push({a:reverse?edge.b:edge.a,b:reverse?edge.a:edge.b,t:range(-.1,.08),speed:range(.004,.007)});
      }
    }

    function draw(now){
      ctx.clearRect(0,0,width,height);
      const rgb=getComputedStyle(root).getPropertyValue('--star').trim()||'105,169,238';
      nodes.forEach(node=>{
        node.x+=(node.bx+Math.sin(now*.00011+node.phase)*2-node.x)*.05;
        node.y+=(node.by+Math.cos(now*.00009+node.phase)*2-node.y)*.05;
      });
      edges.forEach(edge=>{
        const near=Math.hypot((edge.a.x+edge.b.x)/2-pointer.x,(edge.a.y+edge.b.y)/2-pointer.y)<175;
        ctx.beginPath();ctx.moveTo(edge.a.x,edge.a.y);ctx.lineTo(edge.b.x,edge.b.y);
        ctx.lineWidth=near?.9:.55;ctx.strokeStyle=`rgba(${rgb},${near?.15:.062})`;ctx.stroke();
      });
      nodes.forEach(node=>{
        const near=Math.hypot(node.x-pointer.x,node.y-pointer.y)<160;
        ctx.beginPath();ctx.arc(node.x,node.y,node.r+(near?.3:0),0,Math.PI*2);
        ctx.fillStyle=`rgba(${rgb},${near?.5:.25})`;ctx.fill();
      });
      if(!reduced&&now-lastPulse>nextPulse){launch(Math.floor(range(1,3)));lastPulse=now;nextPulse=range(1700,2700)}
      pulses=pulses.filter(pulse=>{
        pulse.t+=pulse.speed;
        const t=Math.max(0,pulse.t),tail=Math.max(0,t-.07);
        ctx.beginPath();
        ctx.moveTo(pulse.a.x+(pulse.b.x-pulse.a.x)*tail,pulse.a.y+(pulse.b.y-pulse.a.y)*tail);
        ctx.lineTo(pulse.a.x+(pulse.b.x-pulse.a.x)*t,pulse.a.y+(pulse.b.y-pulse.a.y)*t);
        ctx.lineWidth=1.2;ctx.strokeStyle=`rgba(${rgb},.5)`;ctx.stroke();
        return pulse.t<1.02;
      });
      requestAnimationFrame(draw);
    }

    addEventListener('resize',build,{passive:true});
    addEventListener('pointermove',event=>{pointer.x=event.clientX;pointer.y=event.clientY},{passive:true});
    addEventListener('pointerleave',()=>{pointer={x:-999,y:-999}});
    addEventListener('pointerdown',event=>{
      if(event.target.closest?.('button,a,input,select,textarea'))return;
      pointer={x:event.clientX,y:event.clientY};launch(8);
    });
    build();launch(2);requestAnimationFrame(draw);
  }

  function homeLoader(){
    const loader=q('#page-loader'),canvas=q('#loader-network');
    if(!loader||!canvas)return;
    const ctx=canvas.getContext('2d');
    let width=0,height=0,dpr=1,nodes=[],edges=[],raf=0;
    const started=performance.now(),duration=reduced?450:2200;
    const random=(min,max)=>min+Math.random()*(max-min);

    function build(){
      width=innerWidth;height=innerHeight;dpr=Math.min(devicePixelRatio||1,2);
      canvas.width=width*dpr;canvas.height=height*dpr;
      canvas.style.width=`${width}px`;canvas.style.height=`${height}px`;
      ctx.setTransform(dpr,0,0,dpr,0,0);
      const total=width<650?46:72,cx=width/2,cy=height/2,margin=width<650?38:70;
      nodes=Array.from({length:total},(_,index)=>{
        const angle=index*2.399963,ring=54+(index%6)*14;
        return {sx:cx+Math.cos(angle)*ring,sy:cy+Math.sin(angle)*ring,tx:random(margin,width-margin),ty:random(margin,height-margin),x:cx,y:cy,r:random(1.4,2.7),delay:Math.max(0,(index-12)/(total*.9))};
      });
      edges=[];
      nodes.forEach((node,index)=>{
        nodes.map((other,otherIndex)=>({otherIndex,distance:Math.hypot(other.tx-node.tx,other.ty-node.ty)}))
          .filter(item=>item.otherIndex!==index).sort((a,b)=>a.distance-b.distance).slice(0,2)
          .forEach(item=>{const a=Math.min(index,item.otherIndex),b=Math.max(index,item.otherIndex);if(item.distance<260&&!edges.some(edge=>edge.a===a&&edge.b===b))edges.push({a,b})});
      });
    }
    const clamp=value=>Math.max(0,Math.min(1,value));
    const ease=value=>1-Math.pow(1-value,3);
    function draw(now){
      const progress=clamp((now-started)/duration),rgb='105,169,238';
      ctx.clearRect(0,0,width,height);
      nodes.forEach(node=>{const local=ease(clamp((progress-node.delay)/(1-node.delay+.001)));node.x=node.sx+(node.tx-node.sx)*local;node.y=node.sy+(node.ty-node.sy)*local});
      edges.forEach(edge=>{const a=nodes[edge.a],b=nodes[edge.b];ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.lineWidth=1;ctx.strokeStyle=`rgba(${rgb},${.1+progress*.14})`;ctx.stroke()});
      nodes.forEach(node=>{ctx.beginPath();ctx.arc(node.x,node.y,node.r,0,Math.PI*2);ctx.fillStyle=`rgba(${rgb},${.48+progress*.35})`;ctx.shadowColor=`rgba(${rgb},.65)`;ctx.shadowBlur=7;ctx.fill();ctx.shadowBlur=0});
      if(progress<1)raf=requestAnimationFrame(draw);
    }
    function finish(){
      if(loader.classList.contains('complete'))return;
      cancelAnimationFrame(raf);loader.classList.add('handoff');document.body.classList.add('content-ready');
      setTimeout(()=>{loader.classList.add('complete');document.body.classList.remove('loader-active','home-loading')},520);
      setTimeout(()=>loader.remove(),1300);
    }
    build();addEventListener('resize',build,{passive:true});requestAnimationFrame(draw);
    setTimeout(finish,duration);setTimeout(finish,4500);
  }

  chrome();ambientNetwork();homeLoader();
})();
