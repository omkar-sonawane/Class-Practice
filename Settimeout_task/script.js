
const print = (e) => {
   const msg = e.target.form[0].value
   const timeout = e.target.form[1].value

   const zzz = document.createElement('div')
   zzz.setAttribute = ('class','toast')

   zzz.innerHTML = msg


   const closeBtn = document.createElement('button')
    closeBtn.innerHTML = 'x'
    zzz.appendChild(closeBtn)


    document.querySelector('.toast-container').appendChild(zzz)

    const hideMessage = () => {
        zzz.style.display = 'none'
    }

    closeBtn.addEventListener('click', hideMessage)

    setTimeout(hideMessage, timeout)

}



