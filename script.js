
let menuicon=document.querySelector('#menu-icon');
console.log(menuicon);
let navbar=document.querySelector('.navbar');

menuicon.onclick= () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// var typed = new Typed('#element', {
//     strings: ['<i>Student At Kalyani Government </i> Engineering college', 'also&amp;Frontend Devloper'],
//     typeSpeed: 100,
//     backSpeed: 50,
// });


// var typed = new Typed(".multiple-text", {
//     strings:["Fronted Devloper ", "youtuber","blogger"],
//     typeSpeed:100,
//     bacSspeed:100,
//     backDelay:1000,
//     loop:true
// })


window.onscroll = () =>{


    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');

     
}