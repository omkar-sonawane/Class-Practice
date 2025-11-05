
const users =[
    {name:"omkar", age:23},
    {name:"om", age:20},
    {name:"rohit", age:22},
    {name:"ani", age:25},
    {name:"roy", age:28}
]


for (let item of users){
    let d = document.createElement('div')
    d.innerHTML = item.name+' '+' (' + item.age +')'


    container.appendChild(d)
}

const filter = ()=>{
    container.innerHTML = ''

    const name = input.value
    
    const filterdUsers = users.filter(u=>{return u.name.includes(name) || u.age == input.value})

    // const filterdUsers = users.filter(u=>{return u.age.includes(age)})

    
    for (let item of filterdUsers){
    let d = document.createElement('div')
    d.innerHTML = item.name+' '+' (' + item.age +')'


    container.appendChild(d)
}
}