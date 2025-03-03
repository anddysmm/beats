<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Models\Artist;
use App\Models\Album;
use App\Models\Song;

class AdminController extends Controller
{
    public function addArtist()
    {
        return Inertia::render('admin/AddArtistForm');
    }
    public function showAddAlbumForm()
    {
        $artists = Artist::all();
        return inertia('admin/AddAlbumForm', ['artists' => $artists]);
    }
    public function store(Request $request)
    {
        // Validación de la petición y obtención de los datos
        $request->validate([
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'nationality' => 'required|string|max:255',
            'artistName' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Max 2MB
        ]);

        // Obtén el archivo de imagen desde la petición
        $image = $request->file('image');

        // Genera un nombre único para la imagen
        $imageName = time() . '_' . $image->getClientOriginalName();

        // Guarda la imagen en la carpeta 'public/images' del almacenamiento
        $imagePath = $image->storeAs('/public/images', $imageName);

        // Guarda los datos del artista en la base de datos
        $artist = Artist::create([
            'name' => $request->name,
            'surname' => $request->surname,
            'nationality' => $request->nationality,
            'artistName' => $request->artistName,
            'imgUrl' => str_replace('public', '/storage', $imagePath), // Guarda la ruta de la imagen
        ]);

        // Retorna una respuesta de éxito o redirecciona a otra página
        return redirect()->route('home');
    }
    public function addAlbum(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'releaseDate' => 'required|integer|digits:4|min:1900|max:' . date('Y'), // Validación para el año de lanzamiento
            'artistIds' => 'required|array',
            'artistIds.*' => 'exists:artists,id',
        ]);

        $album = Album::create([
            'name' => $request->name,
            'releaseDate' => $request->releaseDate // Guardar el año como releaseDate
        ]);

        $album->artists()->sync($request->artistIds);

        return redirect()->route('home')->with('success', 'Album added successfully!');
    }
    public function showAddSongForm()
    {
        $albums = Album::all();
        return inertia('admin/AddSongForm', ['albums' => $albums]);
    }

    public function addSong(Request $request)
    {
        $request->validate([
            'album_id' => 'required|exists:albums,id',
            'name' => 'required|string|max:255',
            'releaseDate' => 'required|integer|digits:4|min:1900|max:' . date('Y'), // Validación para el año de lanzamiento
            'urlSong' => 'required|file|mimes:mp3,wav,ogg',
            'urlCover' => 'nullable|file|mimes:jpeg,png,jpg,gif',
        ]);

        $pathSong = $request->file('urlSong')->store('public/songs');
        $pathCover = $request->file('urlCover') ? $request->file('urlCover')->store('public/images') : null;

        $song = Song::create([
            'album_id' => $request->album_id,
            'name' => $request->name,
            'releaseDate' => $request->releaseDate,
            'urlSong' => Storage::url($pathSong),
            'urlCover' => $pathCover ? Storage::url($pathCover) : null,
        ]);

        return redirect()->route('home')->with('success', 'Song added successfully!');
    }
}
