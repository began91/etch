const container = document.querySelector('.container');

const createGrid = (x, y) => {
    container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${y}, 1fr)`;

    const divs = []

    for (let j = 0; j < y; j++) {
        for (let i = 0; i < x; i++) {
            let div = document.createElement('div');
            div.classList.add(`square`);
            div.style.height = `${(window.innerHeight-24)/y}px`
            div.id = `grid-${i}-${j}`;
            container.appendChild(div);
            divs.push(div);
        }
    }
    
    divs.forEach(d => {
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        let a = Math.random();
        d.addEventListener('mouseover', function(e) {
            this.classList.add('alive');
            this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    })
}

createGrid(4,4);

const resetGrid = () => {
    container.innerHTML='';
    let x = Number(window.prompt("Enter grid width:"));
    let y = Number(window.prompt("Enter grid height:"));

    if (!x) {
        x = Math.floor(window.innerWidth/10);
    }
    if (!y) {
        y = Math.floor((window.innerHeight-25)/10);
    }
    console.log(x, y);
    createGrid(x,y);
}