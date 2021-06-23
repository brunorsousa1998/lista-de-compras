import { createClassElement } from "../base/element.js";

export const itemCreate = (item) => {

    const newItem = createClassElement("li", ["item"]);

    const itemText = createClassElement("p", ["item-text"]);
    itemText.innerText = `${item.quantity} x ${item.name}`;
    
    const itemDone = createClassElement("input", ["item-done"]);
    itemDone.type = "checkbox";
    
    const itemType = createClassElement("h1", ["item-type"]);
    itemType.innerText = item.type;

    newItem.append(itemText, itemDone, itemType);

    return newItem;
}