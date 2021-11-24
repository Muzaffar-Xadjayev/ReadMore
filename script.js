let btn=document.getElementById('btn');
let spanText=document.querySelector('span');
btn.addEventListener('click', () => {
   if(spanText.classList.contains('show')){
    spanText.classList.remove('show');
    btn.textContent='Kamroq';
    btn.style.backgroundColor='red';
   }else{
    spanText.classList.add('show');
    btn.textContent='Koproq';
    btn.style.backgroundColor='green';
   }
})