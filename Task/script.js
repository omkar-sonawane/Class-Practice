// console.log("hiiiiiiiiii")



const print = function (event){

    
    event.preventDefault();

    const input = document.getElementById("nameField").value;

    const pass = document.getElementById("passField").value;
    
    

    console.log(`" username is " ${input} and " Password is " ${pass}`)

}