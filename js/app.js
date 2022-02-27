let hamburger=document.querySelector('.hamburger');
let mobilenav=document.querySelector('.mobile-nav')
let times=document.querySelector('.times')
;
hamburger.addEventListener('click',function(){
   mobilenav.classList.add('open')


})
times.addEventListener('click',function(){
    mobilenav.classList.remove('open')

})