const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.main-nav');toggle?.addEventListener('click',()=>nav.classList.toggle('open'));nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const cosignerCheck=document.getElementById('add-cosigner');
const cosigner=document.querySelector('.cosigner');
if(cosignerCheck&&cosigner){cosigner.style.display='none';cosignerCheck.addEventListener('change',()=>{cosigner.style.display=cosignerCheck.checked?'block':'none';});}
