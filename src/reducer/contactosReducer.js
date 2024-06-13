export const contactosReducer = (state, action) => {
    switch (action.type) {
        case 'Agregar_Contacto':
             return {
                ...state,
                contactos: [...state.contactos,action.payload]
             };
        case 'Get_Contactos':
            return {
                ...state,
                contactos: action.payload,
            };
        case 'Eliminar_Contacto':
            return{
                ...state,
                contactos: state.contactos.filter(
                    (contacto) => contacto.id !== action.payload
                ),
            };
        case 'Editar_Contacto':
            return{
                ...state,
                contactos: state.contactos.map((contacto)=>
                contacto.id === action.payload.id ? action.payload : contacto)
            };
        case 'Get_Favoritos':
            return {
                ...state,
                contactos: state.contactos.filter(
                    (contacto) => contacto.favs === true
                ),
            };
            case 'Editar_Favorito':
                return {
                    ...state,
                    contactos: state.contactos.map((contacto) =>
                        contacto.id === action.payload
                            ? { ...contacto, favs: !contacto.favs }
                            : contacto
                    )
                }
    
    };
} 
    // return state.map((contacto) =>
    //     contacto.id === action.payload
    //       ? { ...contacto, favs: !contacto.favs }
    //       : contacto
    //   );    
/*para mi es asi xq tambien hay que tener en cuenta el id del contacto donde estas haciendo click: 
 case 'Editar_Favorito':
            return {
                ...state,
                contactos: state.contactos.map((contacto) =>
                    contacto.id === action.payload
                        ? { ...contacto, favs: !contacto.favs }
                        : contacto
                )
 };*/