import { Link } from "@inertiajs/react";
import react from "react";
const Nav = (props) => {
    if (props.auth.user != null) {
        console.log(props.auth.user)
        return (
            <div className=" sticky-top mt-3 w-100 border-bottom nav">
                <div className="w-50">

                </div>
                <div className="w-50 d-flex justify-content-end">
                    <div className="btn-group dropstart">
                        <button href="#" className=" dropdown-toggle userCard" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={"/storage/images/user.jpg"}></img>
                        </button>

                        <ul className="dropdown-menu ">
                            {props.auth.user.rol == "admin" &&
                                <>
                                    <Link className="dropdown-item" href='/admin/addSong'>Añadir Canción</Link>
                                    <Link className="dropdown-item" href='/admin/addAlbum'>Añadir Album</Link>
                                    <Link className="dropdown-item" href='/admin/addArtist' >Añadir Artista</Link>
                                </>
                            }
                            <Link className="dropdown-item" href={route('logout')} method="post">LogOut</Link>
                        </ul>
                    </div>

                </div>
            </div>
        )
    } else {
        return (
            <div className=" sticky-top mt-3 w-100  border-bottom nav">
                <div className="w-50">

                </div>
                <div className="contNav w-50 d-flex justify-content-end ">
                    <Link as="button" href={route('register')} className="bg-transparent h-75 align-self-center border-0 fw-semibold me-2" >Register</Link>
                    <Link as="button" href={route('login')} className="btn btn-secondary h-75 align-self-center ms-1 px-4 fw-semibold rounded-pill" >Log In</Link>
                </div>
            </div>
        )
    }
}
export default Nav;
