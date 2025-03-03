<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Artist;
use Inertia\Inertia;
use App\Models\Playlist;
use Illuminate\Support\Facades\Http;
use App\Models\Song;
use Illuminate\Support\Facades\Auth;

class ArtistsController extends Controller
{

    public function ListArtists($id)
    {
        $artist = Artist::all()->where('id_user', $id);
        return Inertia::render('Artist',['artist'=>$artist]);
    }

    public function getApiData($artistName)
    {
        $apiKey = env('API_KEY');
        
        $artist = Artist::where('artistName', $artistName)->firstOrFail();
        info($artist->name);
        $response = Http::get('https://app.ticketmaster.com/discovery/v2/events.json?keyword='.$artist->name.'&apikey='.$apiKey);
        // Busca al artista por su nombre
        
        // Obtiene todos los álbumes del artista
        $albums = $artist->albums()->orderBy('releaseDate', 'desc')->get();
        // Recopila todas las canciones de los álbumes del artista
        $songs = $albums->flatMap->songs;
    

        if (Auth::check()) {
            // Si Auth::user()->id tiene valor, ejecutar la consulta
            $playlists = Playlist::where('user_id', Auth::user()->id)->get();
        } else {
            // Si Auth::user()->id no tiene valor, asignar $playlists como una colección vacía
            $playlists = collect([]);
        }

        $apiData = $response->json();

        return Inertia::render('Artist', [
            'artist' => $artist,
            'songs' => $songs,
            'apidata' => $apiData,
            'playlists' => $playlists,
        ]);

    }
    public function Addartists(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'surname' => 'required|max:255',
            'nationality' => 'required|string|max:255',
            'artistName' => 'nullable|string|max:255',
            'imgUrl' => 'required|string|max:255',
        ]);

        $artist = Artist::create([ 
            'name' => $request->name,
            'surname' => $request->surname,
            'nationality' => $request->nationality,
            'artistName' => $request->artistName,
            'imgUrl' => $request->imgUrl, 
        ]);
        
        return Inertia::location(route('admin'));

    }

}
