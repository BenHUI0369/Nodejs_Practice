let tds = document.querySelectorAll('td');
//loop all tds
tds.forEach(item => {
    item.onclick = function(){
        this.style.background = '#222';
    }
})