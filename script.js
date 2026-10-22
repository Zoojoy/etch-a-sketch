const container = document.querySelector("#container");

function mouseOver () {
   const allDivs = container.querySelectorAll('div');
   for (const div of allDivs) {
   div.addEventListener('mouseover', () => {
     div.style.backgroundColor = 'black';
   })
}
}

for (let i=0; i<256; i++) {
    const content = document.createElement("div");
       container.appendChild(content);
}
      mouseOver();
 
const buttonContainer = document.createElement('div');
   document.body.append(buttonContainer);
       const size = document.createElement('input');
          size.placeholder = 'Set Size 1-100';
       const resizeButton = document.createElement('button');
          resizeButton.textContent = 'Resize';
               buttonContainer.append(size, resizeButton);

resizeButton.addEventListener ('click', () => {
         const amount = Number(size.value) ;
            const squareSize = 640/amount;
            const totalSquares = amount * amount ;
               if ( amount>100 || amount <1) {
                  alert('enter new value');
               }else if ( Number.isNaN(amount)) {
                  alert('enter new value');
               } else if ( amount <=100 && amount >=1) {
                  container.replaceChildren();
                   for (let i=0; i<totalSquares; i++) {
                     console.log(container.children.length);
                     const content = document.createElement("div");
                        content.style.height = `${squareSize}px`;
                        content.style.width = `${squareSize}px`;
                              container.appendChild(content);
                  }
                        mouseOver();
               }
});