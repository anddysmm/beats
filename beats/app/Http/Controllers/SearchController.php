<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Artist;
use App\Models\Song;
use App\Models\Album;
use App\Models\Playlist;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class SearchController extends Controller
{
    public function searchView()
    {
        return Inertia::render('Search');
    }

    public function SearchContent(Request $request)
    {
        $request->validate([
            'titulo' => 'required|string|max:255'
        ]);
        $user = Auth::user();

        $titulo = $request->get('titulo');

        $artists = Artist::where('name', 'like', '%' . $titulo . '%')->get();
        $songs = Song::where('name', 'like', '%' . $titulo . '%')->get();
        $albums = Album::where('name', 'like', '%' . $titulo . '%')->get();
        
        $playlists = ($user ? $user->playlists()->get()->toArray() : []);

        if ($artists->isEmpty() && $songs->isEmpty() && $albums->isEmpty()) {
            Session::flash('message', 'No se encontraron resultados para la búsqueda');
        }

        return Inertia::render('Search', [
            'artists' => $artists,
            'songs' => $songs,
            'albums' => $albums,
            'playlists' => $playlists
        ]);
    }
}
