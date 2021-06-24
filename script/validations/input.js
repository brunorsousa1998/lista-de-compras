export default {
    name: (input) => {
        if (input === "") {
            return "Digite o nome do produto";
        }
        else if(!/^[a-zA-Z1-9][a-zA-Z1-9 ]*$/.test(input)) {
            return "O nome do produto pode ter apenas letras, numeros, e espaço";
        }

        return false;
    },
    quantity: (input) => {
        if(input === "") {
            return "Digite a quantidade de unidades do produto"
        }
        else if(!/^[1-9][0-9]*$/.test(input)) {
            return "A quantidade do produto precisa ser maior que zero";
        }

        return false;
    },
    test: (input, validation) => {
        
        let inputField = input.querySelector(".input-field");
        let inputError = input.querySelector(".input-error")
        

        let err = validation(inputField.value);
        if(err) {
            inputError.innerText = err;

            return true;
        }
        else {
            inputError.innerText = "";
            
            return false;
        }
    }
}