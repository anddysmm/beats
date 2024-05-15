<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;
class UsersController extends Controller
{
    //
    public function signinUser(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'password' => 'required|string|min:6'
        ]);

        User::create([
            'rol' => 'user',
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password
            ]);
            redirect()->intended('home');
        return ;
    }
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication passed...
            return redirect()->intended('home');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function loginUser(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string'
        ]);

        $user = User::where('email', $request->email)->first();

        //verificar que el usuario esta en la tabla de usuarios comparando 

        if($user) {
            // Verificar la contraseña si se encontró un usuario
            if($request->password == $user->password) {
                session()->put('idUser', $user->id);
                session()->put('username', $user->name);
                return Inertia::render('App');
            }
        }

        return redirect()->intended('login');
    }
}
