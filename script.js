const container = document.querySelector("#container");
let colorMode = 'black';

function mouseOver () {
   const allDivs = container.querySelectorAll('div');
   for (const div of allDivs) {
   div.addEventListener('mouseover', () => {
      if(colorMode === 'black'){
     div.style.backgroundColor = 'black';
      }else if (colorMode === 'rainbow'){
          let r = Math.floor(Math.random() * 256);
          let g = Math.floor(Math.random() * 256);
          let b = Math.floor(Math.random() * 256);
         div.style.backgroundColor = `rgb(${r}, ${g}, ${b})` ;
      } else if ( colorMode === 'progressive') {
         let opacity = Number(div.dataset.darkness);
         opacity = Math.min(opacity+10, 100);
         div.dataset.darkness = opacity;
         let gray = Math.round(255 * (1 - opacity / 100));
            div.style.backgroundColor = `rgb(${gray}, ${gray}, ${gray})`;
      } else if (colorMode === 'erase') {
         div.style.backgroundColor = 'white';
      }
   })
}
}

const boardWidth = 700;
const boardHeight = 450;

for (let i=0; i<256; i++) {
    const content = document.createElement("div");
    content.dataset.darkness = 0;
    content.style.width = `${boardWidth / 16}px`;
    content.style.height = `${boardHeight / 16}px`;

       container.appendChild(content);
}
      mouseOver();
 
const buttonContainer = document.createElement('div');
         buttonContainer.classList.add('buttons');
   document.body.append(buttonContainer);
const sizeContainer = document.createElement('div');
            sizeContainer.classList.add('size');
         buttonContainer.appendChild(sizeContainer);
const buttons = document.createElement('div');
         buttons.classList.add('modebuttons');
         buttonContainer.appendChild(buttons);
       const size = document.createElement('input');
          size.placeholder = 'Set Size 1-100';
       const resizeButton = document.createElement('button');
          resizeButton.textContent = 'Resize';            
       const clearPadButton = document.createElement('button');
          clearPadButton.textContent = 'Clear Pad'; 
            clearPadButton.addEventListener('click', () => {
               const allDivs = container.querySelectorAll('div');
                for (const div of allDivs) {
                  div.style.backgroundColor = 'white';
                }
            });
       const blackButton = document.createElement('button');
                blackButton.textContent = 'Black';
       const rainbowButton = document.createElement('button');
                rainbowButton.textContent = 'Rainbow';       
       const progressiveButton = document.createElement('button');
                progressiveButton.textContent = 'Progressive'
       const eraseButton = document.createElement('button');
                eraseButton.textContent = 'Erase';
sizeContainer.append(size, resizeButton); 
buttons.append(clearPadButton, blackButton, rainbowButton, progressiveButton, eraseButton);

function resizeGrid() {
         const amount = Number(size.value) ;
            const squareHeight = 450/amount;
            const squareWidth = 700/amount;
            const totalSquares = amount * amount ;
               if ( amount>100 || amount <1) {
                  alert('enter new value');
               }else if ( Number.isNaN(amount)) {
                  alert('enter new value');
               } else if ( amount <=100 && amount >=1) {
                  container.replaceChildren();
                   for (let i=0; i<totalSquares; i++) {
                     const content = document.createElement("div");
                        content.dataset.darkness = 0;
                        content.style.height = `${squareHeight}px`;
                        content.style.width = `${squareWidth}px`;
                              container.appendChild(content);
                  }
                        mouseOver();
               }
            }

            resizeButton.addEventListener('click', resizeGrid);
            size.addEventListener('keydown', (event) => {
               if (event.key === 'Enter'){
                  resizeGrid();
               }
            })

blackButton.addEventListener('click', () => {
   colorMode = 'black';
   setActiveButton(blackButton);
})

rainbowButton.addEventListener('click', () => {
   colorMode = 'rainbow';
   setActiveButton(rainbowButton);
})

progressiveButton.addEventListener('click', () => {
   colorMode = 'progressive';
   setActiveButton(progressiveButton);
})

eraseButton.addEventListener('click', () => {
    colorMode = 'erase';
    setActiveButton(eraseButton);
})

setActiveButton(blackButton);

function setActiveButton(clickedButton) {
    const activeButton = buttons.querySelectorAll('button');

    activeButton.forEach(button => {
        button.classList.remove('active');
    });

    clickedButton.classList.add('active');
}