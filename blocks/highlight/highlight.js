export default function decorate(block){
 let text= block.querySelector("P");

  if(!text) {
    return;
  }
 let span = document.createElement("span");
  span.className = "highlight-text-content";
  span.textContent = text.textContent;

  text.textContent = " ";
  text.append(span);
}
