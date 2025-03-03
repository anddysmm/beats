import { Link, useForm } from "@inertiajs/react";
import React from "react";

const Nav = ({ auth }) => {
    const { data, setData, get } = useForm({
        titulo: ''
    });

    const handleInputChange = (e) => {
        setData(e.target.name, e.target.value);
        get('/searching', { preserveState: true }); // Realiza la búsqueda cada vez que cambia el input
    };

    if (auth.user != null) {
        return (
            <div className="sticky-top mt-3 w-100 border-bottom nav">
                <div className="w-75 formSearch">
                    <div className="container mt-3">
                        <form className="d-flex" >
                            <input
                                type="text"
                                className="form-control rounded-pill"
                                placeholder="Normal input"
                                name="titulo"
                                value={data.titulo}
                                onChange={handleInputChange}
                            />
                        </form>
                    </div>
                </div>
                <div className="w-25 d-flex justify-content-end elementoMovil">
                    <div className="btn-group dropstart">
                        <a href="#" className="dropdown-toggle userCard" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={"/storage/images/user.jpg"} alt="User"></img>
                        </a>
                        <ul className="dropdown-menu">
                            <Link className="dropdown-item" href={route('logout')} method="post">LogOut</Link>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="sticky-top mt-3 w-100 border-bottom nav">
                <div className="w-75 formSearch">
                    <div className="container mt-3">
                        <form className="d-flex">
                            <input
                                type="text"
                                className="form-control rounded-pill"
                                placeholder="Normal input"
                                name="titulo"
                                value={data.titulo}
                                onChange={handleInputChange}
                            />
                            
                        </form>
                    </div>
                </div>
                <div className="w-25 d-flex justify-content-end elementoMovil">
                    <Link as="button" href={route('login')} className="btn btn-secondary h-75 align-self-center me-2">Login</Link>
                    <Link as="button" href={route('register')} className="btn btn-dark h-75 align-self-center ms-2">Register</Link>
                </div>
            </div>
        );
    }
};

export default Nav;
