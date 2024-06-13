import '../App.css'
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container>
            <section className='text-center'>
            <h1>Gestor de Contactos</h1>
            <div className='d-flex flex-column align-items-center'>
            <Link to={'/contactos'} className='btn btn-primary w-50'>Ver Contactos</Link>
            <Link to={'/add'} className='btn btn-primary w-50 my-2'>Añadir Contactos</Link>
            <Link to={'/favorites'} className='btn btn-primary w-50'>Ver Contactos Favoritos</Link>
            </div>
            </section>
        </Container>
    );
};

export default Home;