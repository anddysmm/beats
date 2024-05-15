import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',

    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <div className="clearfix">
            <div className='float-start m-3'>
                <a href={route('home')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                    </svg>
                </a>
                <Head title="Log in" />
               
                <div className="d-flex flex-column align-items-center vh-100 vw-100">
                <img className="mb-4" src={"/logo.png"} width="120" height="120" />
                    <div className="col-md-6 mx-auto border p-3">
                        <div className="row mb-4">
                            <div className="col-md-6 mx-auto text-center">
                                <h1 className="display-6">Log in to BeatS</h1>
                            </div>
                        </div>
                        <div className="col-md-11 mx-auto border p-5 mb-4">
                            <form onSubmit={submit}>
                                <div className="mb-3">

                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="text" id="email" name="email" className="form-control" placeholder="Introduce your email" value={data.email} onChange={handleOnChange} />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" id="password" name="password" className="form-control" placeholder="Introduce your password" value={data.password} onChange={handleOnChange} />
                                </div>
                                <button type="submit" className="btn btn-primary">Log in</button>
                                <div className="flex items-center justify-end mt-4">
                                    {canResetPassword && (
                                        <Link
                                            href={route('password.request')}
                                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Forgot your password?
                                        </Link>
                                    )}


                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
