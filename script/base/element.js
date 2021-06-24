export const createClassElement = (element, elementClasses) => {

    const newElement = document.createElement(element);

    newElement.classList.add(...elementClasses);

    return newElement;
}