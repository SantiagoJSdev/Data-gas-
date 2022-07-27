
export const validate = (numero1, numero2) => {

    let errors = {};
    let reg = /^[0-9]*(\.?)[0-9]+$/

    if (numero1.trim().length === 0 ) {
       return {...errors, numero1: "Campo requirido" }
     }
     if (numero2.trim().length === 0 ) {
        return {...errors, numero2: "Campo requirido" }
      }

    if (!reg.test(numero1) || !reg.test(numero2)) {
        return {...errors, msg: "Debe contener solo digitos numericos" }  
    }
    

    return errors
   
};

