function toggle(btn) {




    if (btn.target.innerText == 'SHOW DETAILS') {
        btn.target.innerText = 'Hide details'
        btn.target.parentElement.childNodes[3].style.display = 'block'
    }
    else {
        btn.target.innerText = 'SHOW DETAILS'
        btn.target.parentElement.childNodes[3].style.display = 'none'
    }
}
