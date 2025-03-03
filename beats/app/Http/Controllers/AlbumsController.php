<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Album;
use Inertia\Inertia;
use App\Models\Song;
class AlbumsController extends Controller
{
    public function index()
    {
        $albums = Album::all();
        return view('albums.index', compact('albums'));
    }

    public function create()
    {
        return view('albums.create');
    }

    public function store(Request $request)
    {
        $album = new Album();
        $album->name = $request->input('name');
        $album->releaseDate = $request->input('releaseDate');
        $album->save();

        return redirect()->route('albums.index');
    }
    public function listAlbumSongs($albumId)
    {
        // Obtener las canciones de la album específica del usuario actual
        $album = Album::find($albumId);
        $albumSongs = $album->songs;
        
        // Retornar la vista Inertia con las canciones de la album específica del usuario
        return Inertia::render('Albumsongs', [
            'albumSongs' => $albumSongs,
            'album' => $album,
        ]);
    }
    public function Addalbums(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'releaseDate' => 'required|max:255',

        ]);

        $album = Album::create([ 
            'name' => $request->name,
            'releaseDate' => $request->releaseDate,
        ]);

        return Inertia::location(route('admin'));

    }
}
