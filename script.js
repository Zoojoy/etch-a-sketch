const container = document.querySelector("#container");


for (let i=0; i<256; i++) {
    const content = document.createElement("div");
       container.appendChild(content);
}

const allDivs = container.querySelectorAll('div');
  for (const div of allDivs) {
   div.addEventListener('mouseover', () => {
     div.style.backgroundColor = 'black';
   })
  }
 
const buttonContainer = document.createElement('div');
   document.body.append(buttonContainer);
    buttonContainer.querySelector('div');
       const input = document.createElement('input');
          input.placeholder = 'Set Size';
       const resizeButton = document.createElement('button');
          resizeButton.textContent = 'Resize';
       buttonContainer.append(input, resizeButton);