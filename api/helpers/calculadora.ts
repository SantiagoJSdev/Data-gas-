var Decimal = require('decimal.js-light')


export const calculadora = (a: string, b: string): string => {
 

    Decimal.config({ precision: 75 })


    let cal = new Decimal(a.toString())
    let resultado = cal.mul(b.toString()).toFixed()

    return resultado.toString() 

    // return BigInt(a) * BigInt(b)
}
