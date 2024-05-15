<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Song;
use App\Models\Album;
use App\Models\Playlist;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class SongsController extends Controller
{
    public function search(Request $request)
    {
        $search = $request->input('search');
        $songs = Song::where('name', 'LIKE', "%$search%")->get();
        return view('inicio', ['songs' => $songs]);
    }
    public function playSong($id, Request $request)
    {
        $current = $request->query('current');
        $playlistId = $request->query('playlist');
        $albumId = $request->query('album');
    
        if (!empty($playlistId)) {
            $playlist = Playlist::find($playlistId);
            $playlistSongs = $playlist->songs()->with('album.artists')->get();
            $songs = $playlistSongs;
            
        } else if(!empty($albumId)){
            $album = Album::find($albumId);
            $albumSongs = $album->songs()->with('album.artists')->get();
            $songs = $albumSongs;
        }
        else{
            $songs = Song::with('album.artists')->orderByRaw("id = $id DESC")->get();
        }
    
        return Inertia::render('Song', [
            'songs' => $songs,
            'current' => $current,
        ]);
    }
    public function index()
    {
        $songs = Song::all();
        $authCheck = Auth::user();
        if (Auth::check()) {
            // Si Auth::user()->id tiene valor, ejecutar la consulta
            $playlists = Playlist::where('user_id', Auth::user()->id)->get();
        } else {
            // Si Auth::user()->id no tiene valor, asignar $playlists como una colección vacía
            $playlists = collect([]);
        }
        return Inertia::render('Home', ['songs' => $songs, 'authCheck' => $authCheck, 'playlists' => $playlists]);
    }

    public function Addsongs(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'album_id' => 'required|max:255',
            'releaseDate' => 'required|max:255',
            'urlSong' => 'required|string|max:255',
            'urlCover' => 'required|string|max:255',
        ]);

        $song = Song::create([ 
            'name' => $request->name,
            'releaseDate' => $request->releaseDate,
            'urlSong' => $request->urlSong,
            'urlCover' => $request->urlCover,
        ]);

        return Inertia::location(route('admin'));

    }



}
