import React from 'react';
import { Link } from '@inertiajs/react';
import { useDispatch } from 'react-redux';
import { addUser, dropUser } from './reducer/userSlice';

const Sidebar = ({auth}) => {
    const dispatch = useDispatch();
    if (auth.user == null) {
        dispatch(dropUser());
    } else {
        dispatch(addUser(auth));
    }

    return (
        <div className="col col-sm-3 fixed-top-mobile">
            <button className="btn btn-light d-sm-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#sidebarCollapse" aria-expanded="false" aria-controls="sidebarCollapse">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" className="feather feather-menu">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
            <div className="collapse d-sm-block  border-end" id="sidebarCollapse">
                <div className="d-flex flex-column vh-100 " >
                    <div className="d-flex justify-content-center align-items-center border-bottom p-4 hamburguerElement">
                        <img className="logo" src="/logo.png" alt="Logo" />
                    </div>
                    <div className="d-flex flex-column p-4 hamburguer">
                        <Link href="/" className="btn btn-light d-flex align-items-center text-start mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                            <span className="ms-2">home</span>
                        </Link>
                        <Link href={"/search"} className="btn btn-light d-flex align-items-center text-start mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </svg>
                            <span className="ms-2">search</span>
                        </Link>
                        <Link href="/playlists" className="btn btn-light d-flex align-items-center text-start mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                            <span className="ms-2">playlists</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
