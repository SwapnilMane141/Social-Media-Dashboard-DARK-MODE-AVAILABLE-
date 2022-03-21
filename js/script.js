'use strict';


const checkbox = document.querySelector('.checkbox');
const body = document.querySelector('body')
const socialBoxes = document.querySelectorAll('.social-box');
const secondarySocialBoxes = document.querySelectorAll('.secondary-box');

if(localStorage.getItem('darkmode')){
    if(localStorage.getItem('darkmode') === 'on'){
        checkbox.checked = true;
        body.classList.add('dark-mode');
        socialBoxes.forEach((element) => element.classList.add('dark-mode'));
        secondarySocialBoxes.forEach((element) => element.classList.add('dark-mode'));
    } else{
        checkbox.checked = false;
        body.classList.remove('dark-mode');
        socialBoxes.forEach((element) => element.classList.remove('dark-mode'));
        secondarySocialBoxes.forEach((element) => element.classList.remove('dark-mode'));
    }
}

checkbox.addEventListener('change',function(){
    if(this.checked){
        body.classList.toggle('dark-mode');
        socialBoxes.forEach((element) => element.classList.toggle('dark-mode'));
        secondarySocialBoxes.forEach((element) => element.classList.toggle('dark-mode'));
        localStorage.setItem('darkmode', "on");
    } else{
        console.log("Checkbox is not checked..");
        body.classList.remove('dark-mode');
        socialBoxes.forEach((element) => element.classList.remove('dark-mode'));
        secondarySocialBoxes.forEach((element) => element.classList.remove('dark-mode'));
        localStorage.setItem('darkmode', "off");
    }
})












// socialBoxes.forEach((element) => element.addEventListener('mouseover',function(){
//     if(body.classList.contains('dark-mode')){
//         element.classList.toggle('hover-element');
//     }
// }))

// socialBoxes.forEach((element) => element.addEventListener('mouseleave',function(){
//     if(body.classList.contains('dark-mode')){
//         element.classList.toggle('hover-element');
//     }
// }))

