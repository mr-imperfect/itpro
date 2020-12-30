var ham=document.querySelector('.ham')

// var hamClick=document.querySelector('.ham-click')
var hey=document.querySelector('.hey')
var close=document.querySelector('.close')
ham.addEventListener('click',()=>{

    hey.classList.add('ham-click')
    hey.style.animation=" move 1.5s ease-in-out"


    

})

close.addEventListener('click',()=>{
    
    hey.style.animation=" remove 1.5s ease-in-out"
   
    setTimeout(()=>{
        hey.classList.remove('ham-click')

    },1400)
    

  

})

// function start(){

//     hey.style.animation=" move 1s ease-in-out"




// }