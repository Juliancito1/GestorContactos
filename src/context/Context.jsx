import React, { createContext, useEffect, useReducer } from "react";
import { contactoAPI } from "../api/contactoAPI";
import { contactosReducer } from "../reducer/contactosReducer";

export const ContactoContext = createContext();

const MyProvider = ({ children }) => {
const valorInicial = {
    contactos: [],
}

    const [state,dispatch] = useReducer(contactosReducer,valorInicial)

    const agregarContacto = async (contacto) => {
        try {
            const respuesta = await contactoAPI.post('/contactos', contacto);
            dispatch({type: "Agregar_Contacto", payload: respuesta.data})
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const getContactos = async () => {
            try {
                const respuesta = await contactoAPI.get('/contactos');
                dispatch({type: "Get_Contactos", payload: respuesta.data})
            } catch (error) {
                console.log(error)
            }
        }
        getContactos()
    },[])

    const agregarFavorito = async (id) => {
        try {
            dispatch({type: "Editar_Favorito", payload: id})
        } catch (error) {
            console.log(error)
        }
    }

        const contactoFavorito = async () => {
            try {
                const respuesta = await contactoAPI.get('/contactos');
                dispatch({type: "Get_Favoritos", payload: respuesta.data})
            } catch (error) {
                console.log(error)
            }
        }
      


 
  return <ContactoContext.Provider value={{agregarContacto, state, agregarFavorito, contactoFavorito}}>{children}</ContactoContext.Provider>;
};


export default MyProvider