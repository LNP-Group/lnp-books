let tableHead = document.querySelectorAll('thead')

tableHead.forEach((head) => {
    let th = head.querySelectorAll('th')

    for(let i = 0; i < th.length; i++){
        
        if(i % 2 == 0) {
            th[i].style.display = 'none'
        } else {
            th[i].setAttribute('colspan', '2')
            th[i].style.textAlign = 'center'
        }
    }

})