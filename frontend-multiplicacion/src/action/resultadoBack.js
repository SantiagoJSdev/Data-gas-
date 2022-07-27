
//obtener todos los resultados
export const allResultados = async () => {

    let url = 'http://localhost:8000/api/resultados'
     

    const get = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let resul = await get.json();
 
    return resul
}


//guardar valores 
export const postGuardar = async (data) => {

    let url = 'http://localhost:8000/api/resultados'

    const post = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    let resul = await post.json();
    
    return resul
}