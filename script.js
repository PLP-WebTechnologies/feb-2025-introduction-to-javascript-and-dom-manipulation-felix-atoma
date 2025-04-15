function changeContent() {
    const intro = document.getElementById("intro-text");
    intro.textContent = "The content has been changed!";
    intro.style.color = "white";
    intro.style.backgroundColor = "green";
    intro.style.padding = "10px";
  }
  
  function addElement() {
    const area = document.getElementById("dynamic-area");
    const newDiv = document.createElement("div");
    newDiv.textContent = "New Element Added!";
    newDiv.style.border = "1px solid black";
    newDiv.style.marginTop = "10px";
    area.appendChild(newDiv);
  }
  
  function removeElement() {
    const area = document.getElementById("dynamic-area");
    if (area.lastChild) {
      area.removeChild(area.lastChild);
    }
  }
  