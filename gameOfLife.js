const killCell = square => {
    square.classList.remove('alive');
    square.classList.remove('kill');
    square.style.backgroundColor = '#f2f2f2';
    
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    square.addEventListener('mouseover', function(e) {
        this.classList.add('alive');
        this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
}

const countLiveNeighbors = square => {
    let arr = square.id.split('-');
    let x = Number(arr[1]);
    let y = Number(arr[2]);
    let Xs = [x-1, x, x+1, x];
    let Ys = [y, y+1, y, y-1];
    let count = 0;

    count = Xs.filter((x, i) => {
        let check = document.getElementById(`grid-${x}-${Ys[i]}`)
        if (!check) {
            //console.log(`grid-${x}-${Ys[i]} DNE`);
            return false;
        }
        //console.log(check.id);
        return check.classList.contains('alive');
    }).length;
    
    //console.log('count>'+square.id+'=');
    //console.log(count);

    return count;
}


const startGame = e => {
    
    
    document.querySelectorAll('.square').forEach(s => {
        let count = countLiveNeighbors(s);
        //console.log(count);
        if ((count<2 || count>3) && s.classList.contains('alive')) {
            s.classList.add('kill');
        }
        if (count===3 && !s.classList.contains('alive')) {
            s.classList.add('born');
        }
    });

    document.querySelectorAll('.kill').forEach(s => killCell(s));

    document.querySelectorAll('.born').forEach(s => {
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        s.classList.remove('born');
        s.classList.add('alive');
        s.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    })

    //iterate over cells
    //-count living neightbors
    /*/
    if (count<2 || count > 3) {
        killCell();        
    }
    if (count===3 && cellisdead) {
        reviveCell();
    }
    */
}





document.addEventListener('keydown', function(e) {
    if (e.keyCode !==13) return;
    setInterval(startGame, 500);
});