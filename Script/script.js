// const buttonref = document.querySelector("button")
// function alertuser(){
//     alert("You clicked it!!!!!!");
    // buttonref.removeEventListener("click", alertuser);
// };

// buttonref.addEventListener("click", alertuser, {once:true});

// function changeColor(){
//   let body = document.querySelector("body")
//   body.style.backgroundColor = "pink"

// }

// buttonref.addEventListener("click", changeColor)


// let isClicked = false;

// function sayClicked() {
//   let button = document.querySelector("button");
//   if (!isClicked) {
//     button.textContent = "Clicked!";
//     isClicked = true;
//   } else {
//     button.textContent = "Click Me!";
//     isClicked = false;
//   }
//   if (button.textContent === "Click Me!"){
//     buttonref.textContent = "Clicked"
//   }
//   else{
//     buttonref.textContent = "Click Me!"
//   }
// }

// buttonref.addEventListener("click", sayClicked);

// function updateimg(){
//     const image = document.querySelector("img");
//   image.setAttribute("alt", "IMage of my object");
//   image.setAttribute("src", "images/Shoppingcart.png");
//   image.setAttribute("width", "50");
//   image.setAttribute("height", "50");

// };

// buttonref.addEventListener('click', updateimg)

const buttonContainer = document.querySelector(".button-container")
function bgChange(event){
    console.log("buttons-clicked", event.target);
    if (event.target.tagName === "BUTTON") {
        event.target.style.backgroundColor = 'green'

    };
}

function changetetxt(event){
    event.target.style.color = event.target.textContent
}

buttonContainer.addEventListener("mouseover", bgChange)
buttonContainer.addEventListener("click", changetetxt)
