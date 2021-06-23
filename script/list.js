import validations from "./validations/input.js";
import { itemCreate } from "./components/items.js";

const create = document.querySelector("#register");

create.addEventListener("click", (event) => {
    event.preventDefault();

    let err = false;    

    const productName = document.querySelector("#product-name");
    err |= validations.test(productName, validations.name);

    const productQuantity = document.querySelector("#product-quantity");
    err |= validations.test(productQuantity, validations.quantity);

    const type = document.querySelector(".selectors").querySelector("#active");

    
    if(!err) {        
        const productNameField = productName.querySelector(".input-field");
        const productQuantityField = productQuantity.querySelector(".input-field");

        const newItem = itemCreate({
            name: productNameField.value,
            quantity: productQuantityField.value,
            type: type.innerText
        });

        const itemList = document.querySelector(".items");
        itemList.append(newItem);

        productNameField.value = "";
        productQuantityField.value = "";
    }

})