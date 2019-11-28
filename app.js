document.querySelector('.navicon').addEventListener('click', (event)=>{
    event.target.classList.toggle('navicon-close');
   document.querySelector('.nav-links').classList.toggle('hidden');
   document.querySelector('.pl').classList.toggle('hidden');
});

