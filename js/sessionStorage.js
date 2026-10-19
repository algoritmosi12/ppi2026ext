const clave = "partida";
export function generar(datos) {
    sessionStorage.setItem(clave, JSON.stringify(datos));

}

export function recuperar() {
    const datos = JSON.parse(sessionStorage.getItem(clave));
    if (datos == null) {
        return "datos insuficientes";
    } else {
        return (datos)
    }
}


