import { useContext } from "react"
import { ContactoContext } from "../context/Context"
import { Link } from "react-router-dom"

const Favorites = () => {

    const {state} = useContext(ContactoContext)
    const contactoFavorito = state.contactos.filter((contacto) => contacto.favs === true);
    console.log(contactoFavorito)
    return (
        <div className="d-flex flex-column justify-content-center  align-items-center py-5">
      <div className="text-center">
        <h1>Contactos Favoritos</h1>
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th>id</th>
              <th></th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {contactoFavorito &&
              contactoFavorito.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.favs && '⭐'}</td>
                  <td>{item.nombre}</td>
                  <td>{item.email}</td>
                  <td>{item.telefono}</td>
                  <td className="d-none">{item.favs}</td>
                  <td>
                    <button className="btn btn-warning">Editar</button>{" "}
                    <button className="btn btn-info" onClick={() => handleFavorito(item.id)}>Favorito</button>{" "}
                    {/* <button className="btn btn-info" onClick={() => item.favs === true ? item.favs = false : item.favs = true }>Favorito</button>{" "} */}
                    <button className="btn btn-danger">Borrar</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Link to="/" className="btn btn-primary mt-5">Volver</Link>
    </div>
    )
}


export default Favorites