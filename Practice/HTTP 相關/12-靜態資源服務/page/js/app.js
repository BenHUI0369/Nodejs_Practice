let tds = document.querySelectorAll('td');
//loop all tds
//中文測試
tds.forEach(item => {
    item.onclick = function(){
        this.style.background = '#222';
    }
})