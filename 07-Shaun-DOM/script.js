const paras = document.querySelectorAll('p');

paras.forEach(para => {

    if (para.innerText.includes('error')){
        para.classList.add('error')

    } else if (para.innerText.includes('success')){
        para.classList.add('success')
    }

});