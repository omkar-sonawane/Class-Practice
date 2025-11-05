

const Dark = ()=>{

    const body = document.body
    const btn = document.getElementById('btn')
    

    if(body.style.backgroundColor === 'black'){
        body.style.backgroundColor = 'white'
        btn.textContent = 'Dark mode'
        
        
    }else{
        body.style.backgroundColor = 'black'
        btn.textContent = 'Light mode'
    }

    // console.log(body)
    


    

// const body = document.getElementById('switch');
// document.getElementById("switch").style.backgroundColor = "black";
    
    
    
}


// console.log("hiiiiii")


