import React, { useEffect, useRef, useState } from 'react'
import { resReqApi } from '../api/reqRes';
import { Usuario, ReqResListado } from '../interfaces/reqRes';

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    const paginaRef = useRef(1);

    useEffect(() => {
        // llamado al API
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async () => {
        const resp = await resReqApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })
        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);
        } else {
            paginaRef.current--;
            alert('No hay mas registros')
        }
    }

    const paginaSiguiente = () => {
        paginaRef.current++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if(paginaRef.current > 1){
            paginaRef.current--;
            cargarUsuarios();
        }
    }

    return{
        usuarios,
       paginaAnterior,
       paginaSiguiente,
    }
}
