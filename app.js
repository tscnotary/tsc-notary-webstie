const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.main-nav');toggle?.addEventListener('click',()=>nav.classList.toggle('open'));nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const cosignerCheck=document.getElementById('add-cosigner');
const cosigner=document.querySelector('.cosigner');
if(cosignerCheck&&cosigner){cosigner.style.display='none';cosignerCheck.addEventListener('change',()=>{cosigner.style.display=cosignerCheck.checked?'block':'none';});}

document.addEventListener('submit', function(e) {
  const time = document.getElementById('time');
  if (!time || !time.value) return;

  const [h, m] = time.value.split(':');
  const hour = parseInt(h, 10);

  const formattedTime = document.createElement('input');
  formattedTime.type = 'hidden';
  formattedTime.name = 'requested_time';
  formattedTime.value = (hour % 12 || 12) + ':' + m + ' ' + (hour >= 12 ? 'PM' : 'AM');

  e.target.appendChild(formattedTime);
  time.removeAttribute('name');
});
