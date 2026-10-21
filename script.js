const container = document.querySelector("#container");

for (let i=0; i<256; i++) {
    const content = document.createElement("div");
       container.appendChild(content);
}

const allDivs = container.querySelectorAll('div');
 