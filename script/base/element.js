export const createClassElement = (element, elementClasses) => {

    const newElement = document.createElement(element);

    elementClasses.forEach((elementClass) => {
        newElement.classList.add(elementClass);
    })

    return newElement;
}