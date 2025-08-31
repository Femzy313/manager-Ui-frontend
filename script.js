const body = document.querySelector('body');
const overallContainer = document.querySelector('.overall-container')
const input = document.getElementById('input');
const allBtn = document.getElementById('btn1');
const activeBtn = document.getElementById('btn2');
const inActiveBtn = document.getElementById('btn3');
const gridEffect = document.querySelector('.grid-effect');
const activeGrid = document.querySelectorAll('.grid1');
const inActiveGrid = document.querySelectorAll('.grid11');
const img1 = document.getElementById('setting');
const img2 = document.getElementById('moons');


 console.log(inActiveGrid)
 console.log(moon)


img1.addEventListener('click', () => {
    img1.classList.add('black');
    img2.classList.add('white');
    body.style.backgroundColor = 'hsl(0, 0%, 93%)';
    overallContainer.style.backgroundColor = 'hsl(200, 60%, 99%)';
    
    activeGrid.forEach((grid1) => {
       grid1.classList.add('moon');
    });
    inActiveGrid.forEach((grid11) => {
         grid11.classList.add('moon');
    });
    input.classList.add('light');
    btn2.classList.add('light');
})
img2.addEventListener('click', () => {
    img1.classList.remove('black');
    img2.classList.remove('white');
    body.style.backgroundColor = 'hsl(227, 75%, 14%)';
    overallContainer.style.backgroundColor = 'hsl(227, 75%, 14%)';
    
    activeGrid.forEach((grid1) => {
       grid1.classList.remove('moon');
    });
    inActiveGrid.forEach((grid11) => {
         grid11.classList.remove('moon');
    });
    input.classList.remove('light');
    btn2.classList.remove('light');
})
allBtn.addEventListener('click', () => {
    btn1.style.backgroundColor = 'hsl(3, 86%, 64%)';
    btn1.style.color = 'hsl(226, 25%, 17%)'
    btn3.classList.remove('actives')
    btn2.classList.remove('active')
    activeGrid.forEach((grid1) => {
        grid1.classList.remove('inactive');
    });
    inActiveGrid.forEach((grid11) => {
        grid11.classList.remove('active');
    });
})

activeBtn.addEventListener('click', () => {
    btn1.style.backgroundColor = 'hsl(226, 25%, 17%)';
    btn1.style.color = 'white'
    btn3.classList.remove('actives')
    btn2.classList.add('active')
  inActiveGrid.forEach((grid11) => {
        grid11.classList.add('active');
    });
    activeGrid.forEach((grid1) => {
        grid1.classList.remove('inactive');
    });
})

inActiveBtn.addEventListener('click', () => {
    btn1.style.backgroundColor = 'hsl(226, 25%, 17%)';
    btn1.style.color = 'white'
    btn2.classList.remove('active')
    btn3.classList.add('actives')
    activeGrid.forEach((grid1) => {
        grid1.classList.add('inactive');
    });
    inActiveGrid.forEach((grid11) => {
        grid11.classList.remove('active');
    });
})
