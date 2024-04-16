const button = document.querySelector(".button");
const singIn = document.querySelector(".singin");

button.addEventListener("click", () =>{
    const visibility = singIn.getAttribute("data-visible");

    if(visibility === "false") {
        singIn.setAttribute("data-visible", true);
    } else {
        singIn.setAttribute("data-visible", false);
    }
});