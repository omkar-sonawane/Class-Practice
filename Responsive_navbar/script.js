const toggleNav = () => {
    const nav = document.getElementsByTagName('nav')[0]
    const offset = nav.offsetLeft
    
    if (offset < 0) {
        nav.style.left = 0
    } else {
        nav.style.left = '-100%'
    }
}

const formblock = document.getElementsByClassName('form')[0]

const modalBtn = () =>{
    
    // formblock.style.display = 'none'
    const off = formblock.offsetLeft

    if (off > 0){
        formblock.style.display = 'none'   
     }else{
        formblock.style.display = 'block' 
     }
    console.log(formblock)

}


function closeModal(){
    formblock.style.display = 'none'
}

window.addEventListener("keydown",function(event){
    console.log(event)
    if(event.key === "Escape" )
        closeModal()

})




