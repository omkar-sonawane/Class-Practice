console.log("hiiii")


const body = document.getElementsByTagName("body")[0];



// main container 
const container = document.createElement("div");

const container1 = document.createElement("div1")

// container.innerHTML= "hello world";
container.style.backgroundColor = "skyblue"
container.style.height = "400px"
container.style.width = "400px"
container.style.margin = "100px"


container.className = "container-1";

// username input

const userlabel = document.createElement("label");
userlabel.textContent = "username ";

const username = document.createElement("input");
username.type = "text"
username.id = "userid"
username.placeholder = "enter name"


userlabel.style.margin = "30px"
// userlabel.style.font = "50px"
username.style.margin = "30px"


// password input
const passlabel = document.createElement("label")
passlabel.textContent ="password ";

const password = document.createElement("input")
password.type = "password"
password.id = "passid"
password.placeholder = "enter password"


password.style.margin = "20px"
password.style.marginLeft = "50px"

// output scrren

const output = document.createElement("output")

// submit button

const subbutton = document.createElement("button")
subbutton.textContent = "submit"
subbutton.addEventListener("click",()=>{
    console.log(username.value)
    console.log(password.value)

    output.innerHTML = username.value;
    output.innerHTML = password.value;
    // event.preventDefault
})

subbutton.className = "btn"

subbutton.style.height = "40px"
subbutton.style.width = "70px"
subbutton.style.margin = "20px"

subbutton.onclick = (print)

container.appendChild(userlabel);
container.appendChild(username);
container.appendChild(passlabel);
container.appendChild(password);
container.appendChild(subbutton);


container1.appendChild(output)



    // const print = function (){

    // const userid = document.getElementById("user").value;

    // const passid = document.getElementById("pass").value;

    //     console.log(`" username is " ${user} and " Password is " ${pass}`)



        body.append(container)
        body.append(container1)

// }


// print()
