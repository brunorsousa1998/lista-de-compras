const selectors = document.querySelector(".selectors");

selectors.addEventListener("click", (event) => {
    event.preventDefault();
    if(event.target.classList.contains("selector")) {
        selectors.querySelector("#active").id = "";
        event.target.id = "active";
    }
})