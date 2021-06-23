const selectors = document.querySelector(".selectors");

selectors.addEventListener("click", (event) => {
    event.preventDefault();

    selectors.querySelector("#active").id = "";
    event.target.id = "active";
})