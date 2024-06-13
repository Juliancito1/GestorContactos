import React, { useContext, useEffect, useState } from "react";
import { contactoAPI } from "../api/contactoAPI";
import { ContactoContext } from "../context/Context";
import { Link } from "react-router-dom";

const VerContactos = () => {
  const { state, agregarFavorito } = useContext(ContactoContext);

  const handleFavorito = (id) => {
    agregarFavorito(id)
  }
  
  if(!state.contactos){
    return ("No hay contacto")
  }

  return (
    <div className="d-flex flex-column justify-content-center  align-items-center py-5">
      <div className="text-center">
        <h1>Contactos</h1>
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
            {state.contactos &&
              state.contactos.map((item) => (
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
  );
};

export default VerContactos;