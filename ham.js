var ham=document.querySelector('.ham')

// var hamClick=document.querySelector('.ham-click')
var hey=document.querySelector('.hey')
var close=document.querySelector('.close')
ham.addEventListener('click',()=>{

    hey.classList.add('ham-click')

    

})

close.addEventListener('click',()=>{
    hey.classList.remove('ham-click')

})