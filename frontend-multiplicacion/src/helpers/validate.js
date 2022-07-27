export const validate = (numero1, numero2) => {
    let errors = {};
    let reg = /^[0-9]*(\.?)[0-9]+$/

    if (numero1.trim().length === 0 || numero2.trim().length === 0) {
        return errors = "Campo requirido";
     }

    if (!reg.test(numero1)|| !reg.test(numero2)) {
       return errors = 'Debe contener solo digitos numericos'
    }
    

    return errors
   
};

