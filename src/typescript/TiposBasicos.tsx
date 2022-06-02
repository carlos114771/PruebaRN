import React from 'react'

export const TiposBasicos = () => {
    const nombre: string = "Carlos";
    const edad: number = 35;
    const estaActivo: boolean = true;
    const poderes: string[] = ['velocidad', 'volar', 'respirar en el agua'];

    return (
        <>
            <h3>Tipo Basicos</h3>
            {nombre}, {edad}, {(estaActivo) ? 'activo' : 'no activo'}
            <br />
            {poderes.join(',')}
        </>
    )
}
