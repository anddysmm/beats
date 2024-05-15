<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CheckAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Verificar si el usuario está autenticado y tiene el rol de "admin"
        if (Auth::check() && Auth::user()->rol === 'admin') {
            return $next($request);
        }

        // Redirigir o responder con un error si no es un administrador
        return redirect('/')->withErrors(['message' => 'No tienes permisos para acceder a esta página.']);
    }
}
