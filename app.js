document.querySelector('.navicon').addEventListener('click', (event)=>{
    document.querySelector('.navicon').classList.toggle('open');
    document.querySelector('.nav-links').classList.toggle('hidden');
    

    document.querySelector('.language-menu').classList.toggle('hidden');
});


let open = false;
let language = 'opt1';


document.querySelector('.language-menu').addEventListener('click', (event)=>{
    event.target.closest('.language-menu').classList.toggle('pl-open');
    document.querySelector('.pl-arrow').classList.toggle('arrow-rotate');
 

    if (open===true){
        if(event.target.parentNode.id) {
            document.getElementById('opt1').classList.add('option-hidden');
            document.getElementById('opt2').classList.add('option-hidden');

            document.getElementById(event.target.parentNode.id).classList.remove('option-hidden');
            language = event.target.parentNode.id;


        }
        else {
            document.getElementById('opt1').classList.add('option-hidden');
            document.getElementById('opt2').classList.add('option-hidden');
            document.getElementById(language).classList.remove('option-hidden');
        }
    }
    else {
        document.getElementById('opt1').classList.remove('option-hidden');
        document.getElementById('opt2').classList.remove('option-hidden');
    }

    open = !open;

})



// name-label

//form-name