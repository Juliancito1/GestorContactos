import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { ContactoContext } from "../context/Context";

const AddItem = () => {
    const [nombre,setNombre] = useState('');
    const [email,setEmail] = useState('');
    const [telefono,setTelefono] = useState('');

    const {agregarContacto} = useContext(ContactoContext)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nombre)
        console.log(email)
        console.log(telefono)
        const objetoContacto = {
            nombre,
            email,
            telefono,
            favs: false
        }
        navigate('/contactos')
        agregarContacto(objetoContacto)
    }
    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h1>Añadir Contacto</h1>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input className="form-control" type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}/>
                <label>Email</label>
                <input className="form-control" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <label>Telefono</label>
                <input className="form-control" type="number" placeholder="Telefono" onChange={(e) => setTelefono(e.target.value)}  />
                <Button type="submit" className="btn btn-success mt-3">Añadir Contacto</Button>
            </form>
        </div>
    )
}


export default AddItem